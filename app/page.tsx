import { BentoGrid } from "@/components/BentoGrid"
import { Hero } from "@/components/Hero"
import { GitHubActivity } from "@/components/GitHubActivity"
import { LinkedInPosts } from "@/components/LinkedInPosts"
import { BlogArticles } from "@/components/BlogArticles"
import { ProjectMetrics } from "@/components/ProjectMetrics"
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <BentoGrid>
        <Hero />
        <GitHubActivity events={githubEvents} />
        <LinkedInPosts posts={linkedinPosts} />
        <BlogArticles articles={blogArticles} />
        <ProjectMetrics metrics={combinedMetrics} />
      </BentoGrid>
    </div>
  )
}
