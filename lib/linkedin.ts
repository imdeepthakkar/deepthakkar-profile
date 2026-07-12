import { createClient } from "@supabase/supabase-js"
import { LinkedInPost, CURATED_LINKEDIN_POSTS } from "./linkedin-data"

export type { LinkedInPost }

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export async function getLinkedInPosts(): Promise<LinkedInPost[]> {
  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { data, error } = await supabase
        .from("linkedin_posts")
        .select("*")
        .order("date", { ascending: false })
        .limit(10)

      if (error) {
        console.error("Error fetching from Supabase:", error)
        return CURATED_LINKEDIN_POSTS
      }

      if (data && data.length > 0) {
        return data as LinkedInPost[]
      }
    } catch (err) {
      console.error("Supabase client error:", err)
    }
  }

  // Fallback to static data if no env vars or no data in DB
  return CURATED_LINKEDIN_POSTS
}
