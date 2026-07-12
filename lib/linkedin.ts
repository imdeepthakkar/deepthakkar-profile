export interface LinkedInPost {
  id: string
  text: string
  date: string
  url: string
  likes: number
  comments: number
}

const LINKEDIN_USERNAME = "imdeepthakkar"

const FALLBACK_POSTS: LinkedInPost[] = [
  {
    id: "1",
    text: "Excited to share my latest project on AI-driven developer tooling. The intersection of LLMs and developer experience is where I'm spending most of my time these days...",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
    likes: 142,
    comments: 18,
  },
  {
    id: "2",
    text: "Just wrapped up a deep dive into Next.js 14 App Router patterns. Here are 5 things I wish I knew before starting — a thread for full-stack developers...",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
    likes: 98,
    comments: 12,
  },
  {
    id: "3",
    text: "Building in public: Week 3 update. Shipped ISR-powered data fetching, glassmorphism UI, and Framer Motion animations. The feedback has been incredible...",
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
    likes: 203,
    comments: 31,
  },
]

export async function getLinkedInPosts(): Promise<LinkedInPost[]> {
  const apiKey = process.env.RAPIDAPI_KEY
  if (!apiKey || apiKey === "your_rapidapi_key_here") {
    return FALLBACK_POSTS
  }

  try {
    const res = await fetch(
      `https://fresh-linkedin-profile-data.p.rapidapi.com/get-profile-posts?linkedin_url=https://www.linkedin.com/in/${LINKEDIN_USERNAME}&type=posts`,
      {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "fresh-linkedin-profile-data.p.rapidapi.com",
        },
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) return FALLBACK_POSTS
    const data = await res.json()

    // Handle nested data.posts structure, fallback to root array
    // eslint-disable-next-line
    const postsData: any[] = data?.data?.posts ?? data?.data ?? data?.posts ?? data ?? []
    if (!Array.isArray(postsData) || postsData.length === 0) return FALLBACK_POSTS

    // eslint-disable-next-line
    return postsData.slice(0, 6).map((post: any, i: number) => ({
      id: post.post_id ?? post.urn ?? String(i),
      text: post.content ?? post.text ?? post.commentary?.text ?? "",
      date: post.posted_date ?? post.postedAt ?? new Date().toISOString(),
      url: post.url ?? post.postUrl ?? `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
      likes: post.likes_count ?? post.socialDetail?.totalSocialActivityCounts?.numLikes ?? 0,
      comments: post.comments_count ?? post.socialDetail?.totalSocialActivityCounts?.numComments ?? 0,
    }))
  } catch {
    return FALLBACK_POSTS
  }
}
