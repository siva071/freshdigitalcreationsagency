# Robust Contact Form Setup Instructions

## 📧 Gmail App Password Setup

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Follow the setup process to enable 2FA (required for app passwords)

### Step 2: Generate App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **App passwords**
3. Select **Mail** as the app type
4. Select **Other (Custom name)** as the device
5. Enter "Portfolio Contact Form" as the name
6. Click **Generate**
7. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)

### Step 3: Test Gmail SMTP
You can test your credentials using this command:
```bash
curl -v --url 'smtps://smtp.gmail.com:465' --ssl-reqd \
  --mail-from 'your-email@gmail.com' \
  --mail-rcpt 'test@example.com' \
  --user 'your-email@gmail.com:your-app-password'
```

## 🔐 Environment Variables Setup

### Required Variables
Create or update your `.env.local` file:

```env
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Contact Email (where form submissions are sent)
CONTACT_EMAIL=your-email@gmail.com

# SendGrid Fallback (Optional but Recommended)
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@yourdomain.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Fresh Digital Creations
```

### Environment Variables Explanation
- `GMAIL_USER`: Your Gmail address
- `GMAIL_APP_PASSWORD`: The 16-character app password (include spaces)
- `CONTACT_EMAIL`: Where contact form submissions will be sent
- `SENDGRID_API_KEY`: SendGrid API key for fallback email service
- `SENDGRID_FROM_EMAIL`: Verified sender email in SendGrid

## 📦 Dependencies Installation

Install required packages:
```bash
npm install nodemailer @types/nodemailer zod
```

For SendGrid fallback:
```bash
npm install @sendgrid/mail
```

## 🚀 SendGrid Setup (Recommended Fallback)

### Step 1: Create SendGrid Account
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Verify your email address
3. Complete the sender verification process

### Step 2: Get API Key
1. Go to **Settings** → **API Keys**
2. Click **Create API Key**
3. Choose **Restricted Access**
4. Give permissions for **Mail Send**
5. Copy the API key

### Step 3: Verify Sender Identity
1. Go to **Settings** → **Sender Authentication**
2. Choose **Single Sender Verification**
3. Add your email address and verify it
4. Use this verified email as `SENDGRID_FROM_EMAIL`

### Step 4: Domain Authentication (Optional)
For better deliverability:
1. Go to **Settings** → **Sender Authentication**
2. Choose **Domain Authentication**
3. Follow DNS setup instructions for your domain

## 🔧 API Route Usage

### Basic Implementation
Replace your existing contact route with the robust version:

```typescript
// app/api/contact/route.ts
import { robust-route } from './robust-route'
export { POST, GET } from './robust-route'
```

### Frontend Integration
Use the robust contact form component:

```tsx
import RobustContactForm from '@/components/robust-contact-form'

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <RobustContactForm />
    </div>
  )
}
```

## 🛡️ Security Best Practices

### Environment Variables
- Never commit `.env.local` to version control
- Use different credentials for development/production
- Rotate app passwords regularly
- Use environment-specific API keys

### Rate Limiting
The API includes built-in rate limiting:
- 5 requests per 15 minutes per IP
- Consider using Redis for production rate limiting
- Monitor for abuse patterns

### Input Validation
- All inputs are validated with Zod schemas
- XSS protection through HTML escaping
- SQL injection prevention (no database queries)

## 🔍 Troubleshooting

### Gmail SMTP Issues
1. **Authentication Failed**
   - Verify 2FA is enabled
   - Check app password is correct (include spaces)
   - Ensure GMAIL_USER matches the account

2. **Connection Timeout**
   - Check firewall settings
   - Try different ports (587, 465)
   - Verify network connectivity

3. **Less Secure Apps**
   - Gmail no longer supports "less secure apps"
   - Must use app passwords with 2FA

### SendGrid Issues
1. **API Key Invalid**
   - Regenerate API key
   - Check permissions are set correctly
   - Verify key is not expired

2. **Sender Not Verified**
   - Complete sender verification process
   - Check spam folder for verification email
   - Use exact verified email address

### General Debugging
1. **Check Environment Variables**
   ```bash
   # In your terminal
   echo $GMAIL_USER
   echo $GMAIL_APP_PASSWORD
   ```

2. **Enable Debug Logging**
   Set `NODE_ENV=development` to see detailed error logs

3. **Test API Endpoint**
   ```bash
   curl -X POST http://localhost:3000/api/contact/robust-route \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
   ```

## 📊 Monitoring & Analytics

### Email Delivery Tracking
- Monitor success/failure rates in logs
- Track which service (Gmail/SendGrid) is used
- Set up alerts for delivery failures

### Performance Monitoring
- Track API response times
- Monitor rate limit hits
- Log error patterns

### Production Considerations
- Use Redis for rate limiting
- Implement proper logging service
- Set up email delivery webhooks
- Monitor sender reputation

## 🔄 Alternative Email Services

If Gmail and SendGrid don't work, consider:

1. **Resend** - Modern email API
2. **Mailgun** - Reliable transactional email
3. **Amazon SES** - AWS email service
4. **Postmark** - High deliverability
5. **Brevo (Sendinblue)** - European alternative

Each service has similar setup patterns - just update the transporter configuration in the API route.

## ✅ Testing Checklist

- [ ] Gmail app password created and tested
- [ ] Environment variables configured
- [ ] Dependencies installed
- [ ] SendGrid account setup (if using)
- [ ] API route responds to GET request
- [ ] Form submission works without errors
- [ ] Notification email received
- [ ] Auto-reply email received
- [ ] Rate limiting works (test 6+ submissions)
- [ ] Error handling works (test invalid data)
- [ ] Fallback service works (disable Gmail temporarily)

## 🆘 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review server logs for detailed error messages
3. Test individual components (Gmail SMTP, SendGrid, etc.)
4. Verify all environment variables are set correctly
5. Check network connectivity and firewall settings
