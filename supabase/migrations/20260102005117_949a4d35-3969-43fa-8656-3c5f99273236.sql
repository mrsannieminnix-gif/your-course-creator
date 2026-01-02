-- Create table for access codes
CREATE TABLE public.access_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR(12) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL,
  stripe_session_id VARCHAR(255),
  stripe_payment_intent_id VARCHAR(255),
  purchased_products TEXT[] NOT NULL DEFAULT '{}',
  is_redeemed BOOLEAN NOT NULL DEFAULT false,
  redeemed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.access_codes ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (code verification)
CREATE POLICY "Anyone can verify access codes" 
ON public.access_codes 
FOR SELECT 
USING (true);

-- Create policy for insert (via edge function with service role)
CREATE POLICY "Service role can insert access codes"
ON public.access_codes
FOR INSERT
WITH CHECK (true);

-- Create policy for update (redeeming codes)
CREATE POLICY "Anyone can redeem access codes"
ON public.access_codes
FOR UPDATE
USING (true);

-- Create index for faster code lookups
CREATE INDEX idx_access_codes_code ON public.access_codes(code);
CREATE INDEX idx_access_codes_email ON public.access_codes(email);