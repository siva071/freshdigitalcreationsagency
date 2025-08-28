-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add service column to contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS service TEXT;

-- Update existing records with default value
UPDATE contact_submissions 
SET service = 'General Inquiry' 
WHERE service IS NULL;

-- Make the service column NOT NULL
ALTER TABLE contact_submissions 
ALTER COLUMN service SET NOT NULL;

-- Disable RLS on both tables to allow anonymous access
ALTER TABLE newsletter_subscriptions DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Grant permissions to anon and authenticated users
GRANT ALL ON newsletter_subscriptions TO anon;
GRANT ALL ON contact_submissions TO anon;
GRANT ALL ON newsletter_subscriptions TO authenticated;
GRANT ALL ON contact_submissions TO authenticated;

-- Grant usage on sequences
GRANT USAGE, SELECT ON SEQUENCE newsletter_subscriptions_id_seq TO anon;
GRANT USAGE, SELECT ON SEQUENCE contact_submissions_id_seq TO anon;
GRANT USAGE, SELECT ON SEQUENCE newsletter_subscriptions_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE contact_submissions_id_seq TO authenticated;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscriptions(is_active);
CREATE INDEX IF NOT EXISTS idx_contact_service ON contact_submissions(service);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at);

-- Add comments
COMMENT ON TABLE newsletter_subscriptions IS 'Stores email newsletter subscriptions';
COMMENT ON COLUMN newsletter_subscriptions.email IS 'Subscriber email address';
COMMENT ON COLUMN newsletter_subscriptions.is_active IS 'Whether subscription is active';
COMMENT ON COLUMN contact_submissions.service IS 'Type of service requested by the client';
