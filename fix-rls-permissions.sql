-- Fix RLS permissions for contact form
-- Run this in your Supabase SQL Editor

-- First, disable RLS temporarily to clean up
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Enable insert for anon users" ON public.contact_submissions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Allow public inserts on contact_submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow public inserts on newsletter_subscriptions" ON public.newsletter_subscriptions;

-- Grant full permissions to anon role first
GRANT ALL ON SCHEMA public TO anon;
GRANT ALL ON public.contact_submissions TO anon;
GRANT ALL ON public.newsletter_subscriptions TO anon;
GRANT ALL ON SEQUENCE public.contact_submissions_id_seq TO anon;
GRANT ALL ON SEQUENCE public.newsletter_subscriptions_id_seq TO anon;

-- Re-enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create simple, permissive policies for anon users
CREATE POLICY "anon_insert_contact" ON public.contact_submissions
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "anon_insert_newsletter" ON public.newsletter_subscriptions
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Also allow authenticated users (just in case)
CREATE POLICY "auth_insert_contact" ON public.contact_submissions
  FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "auth_insert_newsletter" ON public.newsletter_subscriptions
  FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

-- Test the permissions with a direct insert
INSERT INTO public.contact_submissions (name, email, phone, message) 
VALUES ('Permission Test', 'permission@test.com', '+1234567890', 'Testing RLS permissions');

-- Verify the insert worked
SELECT COUNT(*) FROM public.contact_submissions WHERE email = 'permission@test.com';

-- Clean up test data
DELETE FROM public.contact_submissions WHERE email = 'permission@test.com';

-- Show current policies for verification
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename IN ('contact_submissions', 'newsletter_subscriptions');
