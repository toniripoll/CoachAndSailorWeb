import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client.
 * Use in Server Components and Route Handlers.
 */
export function createServerClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        // Return null when env vars are not set — pages will use fallback data
        return null;
    }

    return createClient(supabaseUrl, supabaseAnonKey);
}
