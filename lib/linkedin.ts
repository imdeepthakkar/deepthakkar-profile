import { LinkedInPost, CURATED_LINKEDIN_POSTS } from "./linkedin-data"

export type { LinkedInPost }

export async function getLinkedInPosts(): Promise<LinkedInPost[]> {
  // Directly return the curated list, removing external API dependencies
  return CURATED_LINKEDIN_POSTS
}
