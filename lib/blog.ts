export interface BlogArticle {
  id: string
  title: string
  excerpt: string
  date: string
  readingTimeMinutes: number
  tags: string[]
  url: string
}

const ARTICLES: BlogArticle[] = [
  {
    id: "1",
    title: "Building an AI-Powered Code Review Bot with Next.js and Gemini",
    excerpt: "How I built a fully automated code review system that integrates directly into GitHub PRs using the Gemini API and Next.js serverless functions.",
    date: "2026-06-28",
    readingTimeMinutes: 8,
    tags: ["AI", "Next.js", "GitHub"],
    url: "#",
  },
  {
    id: "2",
    title: "ISR vs SSR vs CSR: When to Use Each in Next.js 14",
    excerpt: "A practical breakdown of the three rendering strategies in the App Router, with real benchmark numbers and decision trees for production apps.",
    date: "2026-06-15",
    readingTimeMinutes: 6,
    tags: ["Next.js", "Performance"],
    url: "#",
  },
  {
    id: "3",
    title: "Glassmorphism and Framer Motion: A Premium UI Recipe",
    excerpt: "Step-by-step guide to creating stunning glassmorphism cards with scroll-reveal and hover animations using Framer Motion v11.",
    date: "2026-05-30",
    readingTimeMinutes: 5,
    tags: ["UI/UX", "Framer Motion", "CSS"],
    url: "#",
  },
  {
    id: "4",
    title: "TypeScript Strict Mode: 10 Patterns That Will Save You",
    excerpt: "Practical TypeScript patterns for handling nullability, discriminated unions, and type narrowing in real-world applications.",
    date: "2026-05-10",
    readingTimeMinutes: 7,
    tags: ["TypeScript"],
    url: "#",
  },
  {
    id: "5",
    title: "Docker Multi-Stage Builds for Node.js: A Production Playbook",
    excerpt: "Reduce your Docker image sizes by 80% using multi-stage builds, .dockerignore best practices, and non-root user security hardening.",
    date: "2026-04-22",
    readingTimeMinutes: 9,
    tags: ["Docker", "DevOps"],
    url: "#",
  },
  {
    id: "6",
    title: "The Agentic Loop: How Modern AI Agents Think and Act",
    excerpt: "A deep dive into the plan-act-observe loop powering today's AI agents, with examples from real multi-step coding tasks.",
    date: "2026-04-05",
    readingTimeMinutes: 11,
    tags: ["AI", "Agents"],
    url: "#",
  },
]

export async function getBlogArticles(): Promise<BlogArticle[]> {
  return ARTICLES
}
