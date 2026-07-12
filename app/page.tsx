import { BentoGrid } from "@/components/BentoGrid"
import { Hero } from "@/components/Hero"
import { getGitHubActivity } from "@/lib/github"
import { GitHubActivity } from "@/components/GitHubActivity"

export const revalidate = 60

export default async function HomePage() {
  const githubEvents = await getGitHubActivity()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <BentoGrid>
        <Hero />
        <GitHubActivity events={githubEvents} />
        {/* Placeholder sections — will be filled in subsequent tasks */}
        <section id="linkedin" className="bento-card col-span-1 md:col-span-2 min-h-[200px] flex items-center justify-center">
          <p className="text-slate-500 font-medium">LinkedIn Posts — coming in Task 5</p>
        </section>
        <section id="blog" className="bento-card col-span-1 md:col-span-2 min-h-[200px] flex items-center justify-center">
          <p className="text-slate-500 font-medium">Blog Articles — coming in Task 6</p>
        </section>
        <section id="metrics" className="bento-card col-span-1 md:col-span-2 lg:col-span-3 min-h-[200px] flex items-center justify-center">
          <p className="text-slate-500 font-medium">Project Metrics — coming in Task 6</p>
        </section>
      </BentoGrid>
    </div>
  )
}
