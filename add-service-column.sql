-- Add service column to contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS service TEXT;

-- Update the column to be NOT NULL with a default value for existing records
UPDATE contact_submissions 
SET service = 'General Inquiry' 
WHERE service IS NULL;

-- Make the column NOT NULL after updating existing records
ALTER TABLE contact_submissions 
ALTER COLUMN service SET NOT NULL;

-- Add a comment to the column
COMMENT ON COLUMN contact_submissions.service IS 'Type of service requested by the client';
