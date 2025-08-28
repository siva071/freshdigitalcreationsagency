import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

// Newsletter validation schema
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate with Zod schema
    const validationResult = newsletterSchema.safeParse({ email })
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    try {
      // Check if email already exists
      const { data: existingSubscription } = await supabase
        .from('newsletter_subscriptions')
        .select('email')
        .eq('email', email)
        .single()

      if (existingSubscription) {
        return NextResponse.json(
          { message: 'You are already subscribed to our newsletter!' },
          { status: 200 }
        )
      }

      // Insert new subscription
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        return NextResponse.json(
          { error: 'Failed to save newsletter subscription' },
          { status: 500 }
        )
      }

      console.log('Newsletter subscription saved to Supabase:', {
        email,
        timestamp: new Date().toISOString()
      })
    } catch (dbError) {
      console.error('Database subscription error:', dbError)
      return NextResponse.json(
        { error: 'Database error occurred' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}
