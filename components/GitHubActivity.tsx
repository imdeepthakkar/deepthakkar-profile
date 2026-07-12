"use client"
import { motion } from "framer-motion"
import { GitCommitHorizontal, GitBranch, Star, GitPullRequest, AlertCircle } from "lucide-react"
import { GitHubEvent } from "@/lib/github"
import { fadeInUp, staggerContainer, cardHover, scrollReveal } from "@/lib/animations"

const EVENT_ICONS: Record<string, React.ReactNode> = {
  PushEvent: <GitCommitHorizontal size={14} className="text-indigo-600 dark:text-indigo-400" />,
  CreateEvent: <GitBranch size={14} className="text-green-600 dark:text-green-400" />,
  WatchEvent: <Star size={14} className="text-yellow-600 dark:text-yellow-400" />,
  PullRequestEvent: <GitPullRequest size={14} className="text-violet-600 dark:text-violet-400" />,
}

const EVENT_LABELS: Record<string, string> = {
  PushEvent: "pushed to",
  CreateEvent: "created",
  WatchEvent: "starred",
  PullRequestEvent: "PR on",
  ForkEvent: "forked",
  IssuesEvent: "issue on",
}

function timeAgo(dateString: string): string {
  const diff = Date.now() - new Date(dateString).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

interface Props {
  events: GitHubEvent[]
}

export function GitHubActivity({ events }: Props) {
  return (
    <section
      id="github"
      aria-label="Live GitHub Activity"
      className="bento-card col-span-1 md:col-span-2 lg:col-span-3"
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">
          🔄 Live GitHub Activity
        </h2>
        <a
          href="https://github.com/imdeepthakkar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded font-medium"
        >
          View profile →
        </a>
      </div>

      {events.length === 0 ? (
        <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500 py-8 justify-center">
          <AlertCircle size={18} />
          <p>Could not load GitHub activity. Check back soon.</p>
        </div>
      ) : (
        <motion.ul
          variants={staggerContainer}
          {...scrollReveal}
          className="space-y-3"
        >
          {events.map((event) => (
            <motion.li
              key={event.id}
              variants={fadeInUp}
              whileHover={cardHover}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-200 cursor-default"
            >
              <span className="mt-0.5 p-1.5 rounded-lg bg-slate-200/50 dark:bg-white/5">
                {EVENT_ICONS[event.type] ?? <GitCommitHorizontal size={14} className="text-slate-400 dark:text-slate-500" />}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">
                    {EVENT_LABELS[event.type] ?? event.type.replace("Event", "")}
                  </span>
                  <a
                    href={event.repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-indigo-600 dark:text-indigo-300 hover:text-indigo-500 dark:hover:text-indigo-200 truncate focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
                  >
                    {event.repo.name}
                  </a>
                </div>
                {event.message && (
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5 truncate">{event.message}</p>
                )}
                {event.sha && (
                  <code className="text-xs text-slate-400 dark:text-slate-600 font-mono">{event.sha}</code>
                )}
              </div>
              <time
                dateTime={event.createdAt}
                className="text-xs text-slate-400 dark:text-slate-600 whitespace-nowrap flex-shrink-0 mt-0.5"
              >
                {timeAgo(event.createdAt)}
              </time>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </section>
  )
}
