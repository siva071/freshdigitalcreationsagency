-- Refresh schema cache and ensure tables exist
-- Run this in your Supabase SQL Editor

-- First, check if tables exist and drop them if needed
DROP TABLE IF EXISTS public.contact_submissions CASCADE;
DROP TABLE IF EXISTS public.newsletter_subscriptions CASCADE;

-- Create contact_submissions table in public schema
CREATE TABLE public.contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_subscriptions table in public schema
CREATE TABLE public.newsletter_subscriptions (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable insert for anon users" ON public.contact_submissions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON public.newsletter_subscriptions;

-- Create policies for anonymous users
CREATE POLICY "Enable insert for anon users" ON public.contact_submissions
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "Enable insert for anon users" ON public.newsletter_subscriptions
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Grant permissions to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON public.contact_submissions TO anon;
GRANT INSERT ON public.newsletter_subscriptions TO anon;
GRANT USAGE, SELECT ON SEQUENCE public.contact_submissions_id_seq TO anon;
GRANT USAGE, SELECT ON SEQUENCE public.newsletter_subscriptions_id_seq TO anon;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_created_at ON public.newsletter_subscriptions(created_at);

-- Test insert to verify everything works
INSERT INTO public.contact_submissions (name, email, phone, message) 
VALUES ('Test User', 'test@example.com', '+1234567890', 'Test message from SQL');

-- Verify the insert worked
SELECT * FROM public.contact_submissions WHERE email = 'test@example.com';

-- Clean up test data
DELETE FROM public.contact_submissions WHERE email = 'test@example.com';

-- Refresh the schema cache
NOTIFY pgrst, 'reload schema';
