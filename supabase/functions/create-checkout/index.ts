import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Product configuration
const PRODUCTS = {
  foundation: {
    priceId: "price_1SkwbGED9HYBHmqXJrKdrz4D",
    productId: "prod_TiNLecSbRtF17e",
    name: "Foundation Workbook"
  },
  toddler: {
    priceId: "price_1SkwbQED9HYBHmqX8lH3VAXk",
    productId: "prod_TiNMjWCR4dh3tB",
    name: "Ages 2-4 Workbook"
  },
  bundle: {
    priceId: "price_1SkwbaED9HYBHmqXDtjxUCso",
    productId: "prod_TiNMKbfSh6hkGh",
    name: "Complete Bundle"
  }
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { productKey, email } = await req.json();
    console.log("[CREATE-CHECKOUT] Starting checkout for product:", productKey, "email:", email);

    if (!productKey || !PRODUCTS[productKey as keyof typeof PRODUCTS]) {
      throw new Error("Invalid product selected");
    }

    if (!email) {
      throw new Error("Email is required");
    }

    const product = PRODUCTS[productKey as keyof typeof PRODUCTS];
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Check if customer already exists
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      console.log("[CREATE-CHECKOUT] Found existing customer:", customerId);
    }

    // Determine which workbooks this purchase unlocks
    const purchasedProducts = productKey === "bundle" 
      ? ["foundation", "toddler"] 
      : [productKey];

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price: product.priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/purchase`,
      metadata: {
        email,
        purchased_products: JSON.stringify(purchasedProducts),
      },
    });

    console.log("[CREATE-CHECKOUT] Session created:", session.id);

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: unknown) {
    console.error("[CREATE-CHECKOUT] Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
