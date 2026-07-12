import { Hero } from "@/components/Hero"
import { StatsSection } from "@/components/StatsSection"
import { GitHubActivity } from "@/components/GitHubActivity"
import { LinkedInPosts } from "@/components/LinkedInPosts"
import { BlogArticles } from "@/components/BlogArticles"
import { ProjectMetrics } from "@/components/ProjectMetrics"
import { Footer } from "@/components/Footer"
import { getGitHubActivity, getGitHubStats } from "@/lib/github"
import { getLinkedInPosts } from "@/lib/linkedin"
import { getBlogArticles } from "@/lib/blog"
import { getMockAnalytics } from "@/lib/analytics"

export const revalidate = 60

export default async function HomePage() {
  const [githubEvents, githubStats, linkedinPosts, blogArticles] =
    await Promise.all([
      getGitHubActivity(),
      getGitHubStats(),
      getLinkedInPosts(),
      getBlogArticles(),
    ])

  const analytics = getMockAnalytics()
  const combinedMetrics = { github: githubStats, analytics }

  return (
    <div className="min-h-screen flex flex-col noise-bg">
      <main className="flex-1 pt-16">
        <Hero />
        <StatsSection />
        <GitHubActivity events={githubEvents} />
        <LinkedInPosts posts={linkedinPosts} />
        <BlogArticles articles={blogArticles} />
        <ProjectMetrics metrics={combinedMetrics} />
        <Footer />
      </main>
    </div>
  )
}
