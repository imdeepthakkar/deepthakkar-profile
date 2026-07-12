export interface LinkedInPost {
  id: string
  text: string
  date: string
  url: string
  likes: number
  comments: number
}

// Edit these values to curate the posts displayed on your portfolio
export const CURATED_LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: "1",
    text: "Excited to share my latest project on AI-driven developer tooling. The intersection of LLMs and developer experience is where I'm spending most of my time these days...",
    date: "2026-07-10T10:00:00Z",
    url: "https://linkedin.com/in/imdeepthakkar",
    likes: 142,
    comments: 18,
  },
  {
    id: "2",
    text: "Just wrapped up a deep dive into Next.js 14 App Router patterns. Here are 5 things I wish I knew before starting — a thread for full-stack developers...",
    date: "2026-07-05T10:00:00Z",
    url: "https://linkedin.com/in/imdeepthakkar",
    likes: 98,
    comments: 12,
  },
  {
    id: "3",
    text: "Building in public: Week 3 update. Shipped ISR-powered data fetching, glassmorphism UI, and Framer Motion animations. The feedback has been incredible...",
    date: "2026-06-28T10:00:00Z",
    url: "https://linkedin.com/in/imdeepthakkar",
    likes: 203,
    comments: 31,
  },
]
