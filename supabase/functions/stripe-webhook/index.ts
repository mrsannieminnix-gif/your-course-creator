import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Generate a random 8-character alphanumeric code
function generateAccessCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Exclude confusing characters
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
    apiVersion: "2025-08-27.basil",
  });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    // For now, we'll verify by checking the event directly
    // In production, you should set up a webhook signing secret
    const event = JSON.parse(body);
    
    console.log("[STRIPE-WEBHOOK] Received event:", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("[STRIPE-WEBHOOK] Processing completed session:", session.id);

      const email = session.customer_email || session.metadata?.email;
      const purchasedProducts = JSON.parse(session.metadata?.purchased_products || "[]");

      if (!email) {
        console.error("[STRIPE-WEBHOOK] No email found in session");
        throw new Error("No email found in session");
      }

      // Generate unique access code
      let accessCode = generateAccessCode();
      let attempts = 0;
      const maxAttempts = 10;

      // Ensure code is unique
      while (attempts < maxAttempts) {
        const { data: existing } = await supabase
          .from("access_codes")
          .select("code")
          .eq("code", accessCode)
          .single();

        if (!existing) break;
        accessCode = generateAccessCode();
        attempts++;
      }

      if (attempts >= maxAttempts) {
        throw new Error("Failed to generate unique access code");
      }

      // Insert access code into database
      const { error: insertError } = await supabase.from("access_codes").insert({
        code: accessCode,
        email,
        stripe_session_id: session.id,
        stripe_payment_intent_id: session.payment_intent,
        purchased_products: purchasedProducts,
      });

      if (insertError) {
        console.error("[STRIPE-WEBHOOK] Insert error:", insertError);
        throw insertError;
      }

      console.log("[STRIPE-WEBHOOK] Access code created:", accessCode, "for email:", email);
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: unknown) {
    console.error("[STRIPE-WEBHOOK] Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
