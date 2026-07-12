"use client"
import type React from "react"
import { motion } from "framer-motion"
import { GitCommitHorizontal, GitBranch, Star, GitPullRequest, AlertCircle, ExternalLink } from "lucide-react"
import { GitHubEvent } from "@/lib/github"
import { fadeInUp, staggerContainer, cardHover, scrollReveal } from "@/lib/animations"
import { SITE_OWNER } from "@/lib/constants"

const EVENT_ICONS: Record<string, React.ReactNode> = {
  PushEvent: <GitCommitHorizontal size={14} className="text-indigo-400" />,
  CreateEvent: <GitBranch size={14} className="text-green-400" />,
  WatchEvent: <Star size={14} className="text-yellow-400" />,
  PullRequestEvent: <GitPullRequest size={14} className="text-violet-400" />,
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
      className="py-20"
      style={{ background: 'var(--background)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
            <span style={{ color: 'var(--foreground)' }}>Live</span>{' '}
            <span className="gradient-text">GitHub Activity</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Real-time updates from my GitHub — what I&apos;m building and contributing to.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-card p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-dot"
              />
              <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                Live Activity
              </span>
            </div>
            <a
              href={SITE_OWNER.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
              style={{ color: 'var(--primary)' }}
            >
              View profile
              <ExternalLink size={12} />
            </a>
          </div>

          {events.length === 0 ? (
            <div className="flex items-center gap-3 py-10 justify-center" style={{ color: 'var(--muted-foreground)' }}>
              <AlertCircle size={18} />
              <p>Could not load GitHub activity. Check back soon.</p>
            </div>
          ) : (
            <motion.ul
              variants={staggerContainer}
              {...scrollReveal}
              className="space-y-2"
            >
              {events.map((event) => (
                <motion.li
                  key={event.id}
                  variants={fadeInUp}
                  whileHover={cardHover}
                  className="item-card flex items-start gap-3 p-3 cursor-default"
                >
                  <span
                    className="mt-0.5 p-1.5 rounded-lg flex-shrink-0"
                    style={{ background: 'rgba(99,102,241,0.1)' }}
                  >
                    {EVENT_ICONS[event.type] ?? <GitCommitHorizontal size={14} style={{ color: 'var(--muted-foreground)' }} />}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {EVENT_LABELS[event.type] ?? event.type.replace("Event", "")}
                      </span>
                      <a
                        href={event.repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold truncate transition-colors hover:text-indigo-300 focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
                        style={{ color: 'var(--primary)' }}
                      >
                        {event.repo.name}
                      </a>
                    </div>
                    {event.message && (
                      <p className="text-sm mt-0.5 truncate" style={{ color: 'var(--muted-foreground)' }}>
                        {event.message}
                      </p>
                    )}
                    {event.sha && (
                      <code className="text-xs font-mono opacity-50" style={{ color: 'var(--muted-foreground)' }}>
                        {event.sha}
                      </code>
                    )}
                  </div>
                  <time
                    dateTime={event.createdAt}
                    className="text-xs whitespace-nowrap flex-shrink-0 mt-0.5 opacity-50"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {timeAgo(event.createdAt)}
                  </time>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>
    </section>
  )
}
