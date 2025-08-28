import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  honeypot: z.string().max(0, "Bot detected") // Anti-spam honeypot
})

// Simple rate limiting
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : request.ip || 'unknown'
  return ip
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const userLimit = rateLimitMap.get(key)

  if (!userLimit || now - userLimit.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(key, { count: 1, lastReset: now })
    return true
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  userLimit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Log the contact form submission with clear formatting
    console.log("\n" + "=".repeat(60))
    console.log("🚀 NEW CONTACT FORM SUBMISSION")
    console.log("=".repeat(60))
    console.log(`📅 Date: ${new Date().toLocaleString()}`)
    console.log(`👤 Name: ${validatedData.name}`)
    console.log(`📧 Email: ${validatedData.email}`)
    console.log(`📱 Phone: ${validatedData.phone || 'Not provided'}`)
    console.log(`💬 Message:`)
    console.log(`   ${validatedData.message}`)
    console.log("=".repeat(60))
    console.log("📋 COPY THIS INFO TO EMAIL YOURSELF:")
    console.log(`Subject: New Contact: ${validatedData.name}`)
    console.log(`Body: Name: ${validatedData.name}, Email: ${validatedData.email}, Phone: ${validatedData.phone || 'N/A'}, Message: ${validatedData.message}`)
    console.log("=".repeat(60) + "\n")

    // Save to a simple log file as backup
    const logEntry = {
      timestamp: new Date().toISOString(),
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || 'Not provided',
      message: validatedData.message,
      ip: getRateLimitKey(request)
    }

    // In a real app, you'd save this to a database or file
    // For now, just log it clearly
    console.log("💾 LOG ENTRY:", JSON.stringify(logEntry, null, 2))

    return NextResponse.json(
      { 
        message: "Message sent successfully! We'll get back to you within 24 hours.",
        debug: process.env.NODE_ENV === 'development' ? "Check your terminal for the submission details" : undefined
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("❌ Contact form error:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data. Please check your inputs." },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}
