const { createClient } = require('@supabase/supabase-js')

async function debugSupabase() {
  console.log('🔍 Debugging Supabase connection...')
  
  const supabaseUrl = 'https://xzvlnkfuobrlqescbimo.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dmxua2Z1b2JybHFlc2NiaW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTEzNjYsImV4cCI6MjA1MDg4NzM2Nn0.4ePQFNGZOKGGdQvULJKLqLWnYlgRJFJNJpzPxKLdZCE'
  
  console.log('URL:', supabaseUrl)
  console.log('Key (first 20):', supabaseKey.substring(0, 20) + '...')
  
  const supabase = createClient(supabaseUrl, supabaseKey)
  
  try {
    // Test 1: Basic connection
    console.log('\n📡 Testing basic connection...')
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('❌ Error:', error)
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      })
    } else {
      console.log('✅ Connection successful!')
      console.log('Data:', data)
    }
    
    // Test 2: Check if table exists
    console.log('\n🔍 Checking table structure...')
    const { data: tableData, error: tableError } = await supabase
      .rpc('get_table_info', { table_name: 'contact_submissions' })
      .catch(() => {
        // If RPC doesn't exist, try a simple select
        return supabase.from('contact_submissions').select('id').limit(0)
      })
    
    if (tableError) {
      console.error('❌ Table check error:', tableError)
    } else {
      console.log('✅ Table accessible')
    }
    
  } catch (err) {
    console.error('❌ Unexpected error:', err)
  }
}

debugSupabase()
