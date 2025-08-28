import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
})

// Rate limiting store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : request.ip || 'unknown'
  return ip
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const current = rateLimitStore.get(key)
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  current.count++
  return true
}

// Gmail SMTP transporter with robust error handling
function createGmailTransporter() {
  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_APP_PASSWORD
  
  if (!gmailUser || !gmailPassword) {
    throw new Error('Gmail credentials not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.')
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
    tls: {
      rejectUnauthorized: false
    },
    // Connection timeout settings
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000,   // 30 seconds
    socketTimeout: 60000,     // 60 seconds
    // Pool settings for better performance
    pool: true,
    maxConnections: 5,
    maxMessages: 10,
  })
}

// SendGrid fallback transporter
function createSendGridTransporter() {
  const sendGridApiKey = process.env.SENDGRID_API_KEY
  
  if (!sendGridApiKey) {
    throw new Error('SendGrid API key not configured')
  }
  
  return nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: 'apikey',
      pass: sendGridApiKey,
    },
    connectionTimeout: 30000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
  })
}

// Email sending function with fallback
async function sendEmailWithFallback(to: string, subject: string, html: string, text?: string) {
  const errors: string[] = []
  
  // Try Gmail first
  try {
    console.log('Attempting to send email via Gmail SMTP...')
    const gmailTransporter = createGmailTransporter()
    
    const mailOptions = {
      from: `"Fresh Digital Creations" <${process.env.GMAIL_USER}>`,
      to: to,
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
    }

    const info = await gmailTransporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully via Gmail:', info.messageId)
    return { success: true, service: 'Gmail', messageId: info.messageId }
    
  } catch (gmailError) {
    const errorMsg = gmailError instanceof Error ? gmailError.message : 'Unknown Gmail error'
    errors.push(`Gmail failed: ${errorMsg}`)
    console.log('❌ Gmail failed:', errorMsg)
  }

  // Try SendGrid as fallback
  try {
    console.log('Attempting to send email via SendGrid fallback...')
    const sendGridTransporter = createSendGridTransporter()
    
    const mailOptions = {
      from: process.env.SENDGRID_FROM_EMAIL || process.env.GMAIL_USER,
      to: to,
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ''),
    }

    const info = await sendGridTransporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully via SendGrid:', info.messageId)
    return { success: true, service: 'SendGrid', messageId: info.messageId }
    
  } catch (sendGridError) {
    const errorMsg = sendGridError instanceof Error ? sendGridError.message : 'Unknown SendGrid error'
    errors.push(`SendGrid failed: ${errorMsg}`)
    console.log('❌ SendGrid failed:', errorMsg)
  }

  // Both services failed
  throw new Error(`All email services failed: ${errors.join(', ')}`)
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(request)
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { 
          success: false,
          message: "Too many requests. Please try again in 15 minutes." 
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    console.log('📧 Processing contact form submission:', {
      name: validatedData.name,
      email: validatedData.email,
      hasPhone: !!validatedData.phone,
      messageLength: validatedData.message.length,
      timestamp: new Date().toISOString()
    })

    // Prepare email content
    const notificationSubject = `🚀 New Contact from ${validatedData.name} - Fresh Digital Creations`
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Fresh Digital Creations</h1>
          <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #374151; margin-top: 0;">Contact Details</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
                <td style="padding: 8px 0; color: #6b7280;">${validatedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #6b7280;">
                  <a href="mailto:${validatedData.email}" style="color: #f97316; text-decoration: none;">
                    ${validatedData.email}
                  </a>
                </td>
              </tr>
              ${validatedData.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #6b7280;">
                  <a href="tel:${validatedData.phone}" style="color: #f97316; text-decoration: none;">
                    ${validatedData.phone}
                  </a>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Submitted:</td>
                <td style="padding: 8px 0; color: #6b7280;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 2px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <div style="line-height: 1.6; color: #6b7280; white-space: pre-wrap;">${validatedData.message}</div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              <strong>Quick Reply:</strong> 
              <a href="mailto:${validatedData.email}?subject=Re: Your inquiry to Fresh Digital Creations" 
                 style="color: #f97316; text-decoration: none;">
                Click here to reply directly
              </a>
            </p>
          </div>
        </div>
        
        <div style="background: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            Fresh Digital Creations Contact Form • ${new Date().getFullYear()}
          </p>
        </div>
      </div>
    `

    // Auto-reply email content
    const autoReplySubject = "Thank you for contacting Fresh Digital Creations!"
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Fresh Digital Creations</h1>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #374151; margin-top: 0;">Thank you for reaching out!</h2>
          
          <p style="color: #6b7280; line-height: 1.6;">Hi ${validatedData.name},</p>
          
          <p style="color: #6b7280; line-height: 1.6;">
            We've received your message and appreciate you taking the time to contact us. 
            Our team will review your inquiry and get back to you within 24 hours.
          </p>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
            <ul style="color: #6b7280; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>We'll review your project requirements</li>
              <li>Our team will prepare a personalized response</li>
              <li>We'll reach out with next steps and timeline</li>
            </ul>
          </div>
          
          <p style="color: #6b7280; line-height: 1.6;">
            Best regards,<br>
            <strong style="color: #f97316;">Fresh Digital Creations Team</strong>
          </p>
        </div>
        
        <div style="background: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            📧 freshdigitalcreations@gmail.com
          </p>
        </div>
      </div>
    `

    // Send notification email to your address
    const notificationResult = await sendEmailWithFallback(
      process.env.CONTACT_EMAIL || process.env.GMAIL_USER || 'freshdigitalcreations@gmail.com',
      notificationSubject,
      notificationHtml
    )

    // Send auto-reply to the user
    const autoReplyResult = await sendEmailWithFallback(
      validatedData.email,
      autoReplySubject,
      autoReplyHtml
    )

    console.log('✅ Both emails sent successfully:', {
      notification: notificationResult,
      autoReply: autoReplyResult
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We'll get back to you within 24 hours.",
      details: {
        notificationSent: notificationResult.success,
        autoReplySent: autoReplyResult.success,
        services: {
          notification: notificationResult.service,
          autoReply: autoReplyResult.service
        }
      }
    })

  } catch (error) {
    console.error('❌ Contact form error:', error)

    // Log detailed error information
    const errorDetails = {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      envCheck: {
        gmailUser: !!process.env.GMAIL_USER,
        gmailPassword: !!process.env.GMAIL_APP_PASSWORD,
        sendGridKey: !!process.env.SENDGRID_API_KEY,
        contactEmail: !!process.env.CONTACT_EMAIL
      }
    }
    console.error('Error details:', errorDetails)

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: "Invalid form data. Please check your inputs.",
        errors: error.errors
      }, { status: 400 })
    }

    return NextResponse.json({
      success: false,
      message: "We're experiencing technical difficulties. Please try again later or contact us directly.",
      debug: process.env.NODE_ENV === 'development' ? errorDetails : undefined
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Contact API is running",
    methods: ["POST"],
    rateLimit: `${RATE_LIMIT_MAX_REQUESTS} requests per ${RATE_LIMIT_WINDOW / 60000} minutes`
  })
}
