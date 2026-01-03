import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/**
 * Supabase client for browser/client-side usage.
 * Use this in React components and client-side code.
 */
export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
