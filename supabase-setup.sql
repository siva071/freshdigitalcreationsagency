-- COMPLETE RLS DISABLE - Run this to completely remove RLS restrictions
-- This will allow your contact form to work immediately

-- Drop existing tables and recreate without RLS
DROP TABLE IF EXISTS public.contact_submissions CASCADE;
DROP TABLE IF EXISTS public.newsletter_subscriptions CASCADE;

-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- DO NOT ENABLE RLS - Keep tables open for public access
-- ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Grant full permissions to anon role
GRANT ALL PRIVILEGES ON public.contact_submissions TO anon;
GRANT ALL PRIVILEGES ON public.newsletter_subscriptions TO anon;
GRANT ALL PRIVILEGES ON SEQUENCE public.contact_submissions_id_seq TO anon;
GRANT ALL PRIVILEGES ON SEQUENCE public.newsletter_subscriptions_id_seq TO anon;

-- Grant permissions to authenticated users as well
GRANT ALL PRIVILEGES ON public.contact_submissions TO authenticated;
GRANT ALL PRIVILEGES ON public.newsletter_subscriptions TO authenticated;

-- Create indexes for better performance
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at);
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_subscriptions_created_at ON public.newsletter_subscriptions(created_at);

-- Test insert to verify permissions work
INSERT INTO public.contact_submissions (name, email, phone, message) 
VALUES ('Test User', 'test@example.com', '+1234567890', 'Test message - RLS disabled');

-- Verify insert worked
SELECT * FROM public.contact_submissions WHERE email = 'test@example.com';

-- Clean up test data
DELETE FROM public.contact_submissions WHERE email = 'test@example.com';
