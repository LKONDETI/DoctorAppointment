
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wbzryejjnycaxvnzynhm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndienJ5ZWpqbnljYXh2bnp5bmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4ODQwMTAsImV4cCI6MjAyMzQ2MDAxMH0.h7LIX7BcKIb-taVwSjMXTDSScJIjVPoQYAShXojO7gg'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase