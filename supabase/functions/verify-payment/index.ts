import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Generate a random 8-character alphanumeric code
function generateAccessCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
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

  try {
    const { sessionId } = await req.json();
    console.log("[VERIFY-PAYMENT] Verifying session:", sessionId);

    if (!sessionId) {
      throw new Error("Session ID is required");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log("[VERIFY-PAYMENT] Session status:", session.payment_status);

    if (session.payment_status !== "paid") {
      return new Response(JSON.stringify({ 
        success: false, 
        message: "Payment not completed" 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Check if access code already exists for this session
    const { data: existingCode } = await supabase
      .from("access_codes")
      .select("*")
      .eq("stripe_session_id", sessionId)
      .single();

    if (existingCode) {
      console.log("[VERIFY-PAYMENT] Existing code found:", existingCode.code);
      return new Response(JSON.stringify({
        success: true,
        accessCode: existingCode.code,
        email: existingCode.email,
        purchasedProducts: existingCode.purchased_products,
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Create new access code
    const email = session.customer_email || session.metadata?.email;
    const purchasedProducts = JSON.parse(session.metadata?.purchased_products || "[]");

    if (!email) {
      throw new Error("No email found in session");
    }

    // Generate unique access code
    let accessCode = generateAccessCode();
    let attempts = 0;
    const maxAttempts = 10;

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

    // Insert access code
    const { error: insertError } = await supabase.from("access_codes").insert({
      code: accessCode,
      email,
      stripe_session_id: sessionId,
      stripe_payment_intent_id: session.payment_intent as string,
      purchased_products: purchasedProducts,
    });

    if (insertError) {
      console.error("[VERIFY-PAYMENT] Insert error:", insertError);
      throw insertError;
    }

    console.log("[VERIFY-PAYMENT] New access code created:", accessCode);

    return new Response(JSON.stringify({
      success: true,
      accessCode,
      email,
      purchasedProducts,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: unknown) {
    console.error("[VERIFY-PAYMENT] Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
