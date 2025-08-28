import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'X-Client-Info': 'fresh-digital-creations'
    }
  }
})

// Add connection health check
export const checkSupabaseConnection = async () => {
  try {
    const { error } = await supabase.from('contact_submissions').select('count', { count: 'exact', head: true })
    return !error
  } catch {
    return false
  }
}

// Database table schemas
export interface ContactSubmission {
  id?: number
  name: string
  email: string
  phone?: string
  message: string
  created_at?: string
}

export interface NewsletterSubscription {
  id?: number
  email: string
  created_at?: string
}
