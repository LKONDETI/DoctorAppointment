import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lsazeakbqxazhdtfnjlg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzYXplYWticXhhemhkdGZuamxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzMzI0NjgsImV4cCI6MjAyNDkwODQ2OH0.2g0ebS04kDqNQ_-GbbvYhdRDO3wwm4mIQydjGLTzahM '
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;