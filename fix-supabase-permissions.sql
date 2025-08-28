-- First, let's check if tables exist and recreate them with proper permissions
DROP TABLE IF EXISTS contact_submissions CASCADE;
DROP TABLE IF EXISTS newsletter_subscriptions CASCADE;

-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_subscriptions table
CREATE TABLE newsletter_subscriptions (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts on contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public inserts on newsletter_subscriptions" ON newsletter_subscriptions;

-- Create new policies with explicit permissions
CREATE POLICY "Enable insert for anon users" ON contact_submissions
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "Enable insert for anon users" ON newsletter_subscriptions
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Grant necessary permissions to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON newsletter_subscriptions TO anon;
GRANT USAGE, SELECT ON SEQUENCE contact_submissions_id_seq TO anon;
GRANT USAGE, SELECT ON SEQUENCE newsletter_subscriptions_id_seq TO anon;

-- Create indexes for better performance
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_subscriptions_created_at ON newsletter_subscriptions(created_at);

-- Test insert to verify permissions
INSERT INTO contact_submissions (name, email, phone, message) 
VALUES ('Test User', 'test@example.com', '+1234567890', 'Test message');

-- Clean up test data
DELETE FROM contact_submissions WHERE email = 'test@example.com';
