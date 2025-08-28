import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required").regex(/^[0-9+\-\s\(\)]+$/, "Phone number must contain only numbers and valid characters"),
  service: z.string().min(1, "Service selection is required"),
  message: z.string().min(1, "Message is required"),
})

// Rate limiting
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000
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

export async function POST(request: NextRequest) {
  try {
    console.log("🔍 API ROUTE HIT - Starting processing...")
    
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    if (!checkRateLimit(rateLimitKey)) {
      console.log("❌ Rate limit exceeded")
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const { name, email, phone, service, message } = await request.json()

    // Validate with Zod schema
    const validationResult = contactSchema.safeParse({ name, email, phone, service, message })
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const validatedData = validationResult.data

    console.log('📝 Attempting to save to Supabase:', { name, email, phone, service, message })

    try {
      // Test Supabase connection first
      console.log('🔗 Testing Supabase connection...')
      const { error: connectionError } = await supabase.from('contact_submissions').select('count', { count: 'exact', head: true })
      
      if (connectionError) {
        console.error('❌ Supabase connection failed:', connectionError)
        throw new Error(`Connection failed: ${connectionError.message}`)
      }
      
      console.log('✅ Supabase connection successful')

      // Direct insert
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            service: validatedData.service,
            message: validatedData.message,
            created_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('❌ Supabase insert error:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        })
        
        // Check for specific error types
        if (error.code === 'PGRST116') {
          return NextResponse.json(
            { error: 'Table does not exist. Please create the contact_submissions table.' },
            { status: 500 }
          )
        }
        
        if (error.code === '42501') {
          return NextResponse.json(
            { error: 'Permission denied. Please check RLS policies.' },
            { status: 500 }
          )
        }
        
        return NextResponse.json(
          { error: `Database error: ${error.message}`, code: error.code },
          { status: 500 }
        )
      }

      console.log('✅ Contact form submission saved to Supabase:', {
        id: data?.[0]?.id,
        name,
        email,
        timestamp: new Date().toISOString()
      })
    } catch (dbError) {
      console.error('❌ Database submission error:', dbError)
      return NextResponse.json(
        { error: `Database error occurred: ${dbError instanceof Error ? dbError.message : 'Unknown error'}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Thank you for your message! We have received your contact information." },
      { status: 200 }
    )

  } catch (error) {
    console.error('🚨 CONTACT FORM ERROR:', error)
    
    if (error instanceof z.ZodError) {
      console.error('🚨 VALIDATION ERROR:', error.errors)
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      )
    }

    // Handle fetch/network errors specifically
    if (error instanceof Error && error.message.includes('fetch failed')) {
      console.error('🚨 NETWORK ERROR - Check Supabase connection')
      return NextResponse.json(
        { error: 'Network connection failed. Please check your internet connection and try again.' },
        { status: 503 }
      )
    }

    console.error('🚨 UNKNOWN ERROR:', error)
    return NextResponse.json(
      { error: `Something went wrong: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  )
}
