-- Temporarily disable RLS to allow inserts while we debug
-- Run this in your Supabase SQL Editor

-- Disable RLS on both tables
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions DISABLE ROW LEVEL SECURITY;

-- Grant basic permissions to anon role
GRANT INSERT ON public.contact_submissions TO anon;
GRANT INSERT ON public.newsletter_subscriptions TO anon;
GRANT USAGE, SELECT ON SEQUENCE public.contact_submissions_id_seq TO anon;
GRANT USAGE, SELECT ON SEQUENCE public.newsletter_subscriptions_id_seq TO anon;

-- Test insert to verify it works without RLS
INSERT INTO public.contact_submissions (name, email, phone, message) 
VALUES ('Test Without RLS', 'test-no-rls@example.com', '+1234567890', 'Testing without RLS');

-- Check if insert worked
SELECT * FROM public.contact_submissions WHERE email = 'test-no-rls@example.com';

-- Clean up test data
DELETE FROM public.contact_submissions WHERE email = 'test-no-rls@example.com';
