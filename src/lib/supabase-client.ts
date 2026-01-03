import { createBrowserClient } from '@supabase/ssr'

// Placeholder values for build time - will be replaced at runtime
const PLACEHOLDER_URL = 'https://placeholder.supabase.co'
const PLACEHOLDER_KEY = 'placeholder-key'

/**
 * Supabase client for browser/client-side usage.
 * Use this in React components and client-side code.
 * 
 * During build/prerender, returns a client with placeholder values
 * that will be replaced with real values at runtime in the browser.
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // During build time, env vars may not be available
  // Use placeholders that will be replaced at runtime
  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== 'undefined') {
      // We're in the browser but missing env vars - this is a real error
      console.error('Missing Supabase environment variables')
    }
    // During SSR/build, return a client with placeholders
    // This prevents build failures while the real client is created client-side
    return createBrowserClient(PLACEHOLDER_URL, PLACEHOLDER_KEY)
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
