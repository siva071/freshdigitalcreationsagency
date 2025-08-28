// Test Supabase connection
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xzvlnkfuobrlqescbimo.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_bZXe3inR3RTM1OLKmUniCA_ZbtzsGha'

console.log('🔧 Testing Supabase Connection...')
console.log('URL:', supabaseUrl)
console.log('Key length:', supabaseKey.length)
console.log('Key preview:', supabaseKey.substring(0, 20) + '...')

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  try {
    console.log('\n📡 Testing basic connection...')
    const { data, error } = await supabase.from('contact_submissions').select('count', { count: 'exact', head: true })
    
    if (error) {
      console.error('❌ Connection failed:', error.message)
      console.error('Error details:', error)
      return false
    }
    
    console.log('✅ Connection successful!')
    console.log('Table exists with', data?.length || 0, 'rows')
    return true
  } catch (err) {
    console.error('❌ Network error:', err.message)
    return false
  }
}

testConnection()
