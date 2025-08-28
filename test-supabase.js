// Simple test script to verify Supabase connection and table existence
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://xzvlnkfuobrlqescbimo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dmxua2Z1b2JybHFlc2NiaW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTEzNjYsImV4cCI6MjA1MDg4NzM2Nn0.4ePQFNGZOKGGdQvULJKLqLWnYlgRJFJNJpzPxKLdZCE'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testSupabase() {
  console.log('🔍 Testing Supabase connection...')
  
  try {
    // Test 1: Check if we can connect
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('count', { count: 'exact', head: true })
    
    if (error) {
      console.error('❌ Connection test failed:', error)
      return
    }
    
    console.log('✅ Connection successful')
    
    // Test 2: Try to insert a test record
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'This is a test message'
    }
    
    const { data: insertData, error: insertError } = await supabase
      .from('contact_submissions')
      .insert([testData])
      .select()
    
    if (insertError) {
      console.error('❌ Insert test failed:', insertError)
      return
    }
    
    console.log('✅ Insert test successful:', insertData)
    
    // Clean up test record
    if (insertData && insertData[0]) {
      await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', insertData[0].id)
      console.log('✅ Test record cleaned up')
    }
    
  } catch (err) {
    console.error('❌ Unexpected error:', err)
  }
}

testSupabase()
