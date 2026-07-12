"use client"
import { motion } from "framer-motion"
import { ThumbsUp, MessageCircle, ExternalLink } from "lucide-react"
import { LinkedInPost } from "@/lib/linkedin"
import { fadeInUp, staggerContainer, cardHover, scrollReveal } from "@/lib/animations"
import { SITE_OWNER } from "@/lib/constants"

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  } catch {
    return dateStr
  }
}

function truncate(text: string, limit = 150): string {
  if (!text) return ""
  return text.length > limit ? text.slice(0, limit).trimEnd() + "…" : text
}

interface Props {
  posts: LinkedInPost[]
}

export function LinkedInPosts({ posts }: Props) {
  return (
    <section
      id="linkedin"
      aria-label="LinkedIn Posts"
      className="py-20"
      style={{ background: 'rgba(99,102,241,0.03)' }}
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
            <span style={{ color: 'var(--foreground)' }}>LinkedIn</span>{' '}
            <span className="gradient-text">Posts</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Thoughts and insights I share with the developer community.
          </p>
        </motion.div>

        {/* Posts grid */}
        <motion.div
          variants={staggerContainer}
          {...scrollReveal}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {posts.map((post) => (
            <motion.a
              key={post.id}
              href={post.url}
              variants={fadeInUp}
              whileHover={cardHover}
              className="item-card block p-5 group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              aria-label={`LinkedIn post: ${truncate(post.text, 60)}`}
            >
              {/* LinkedIn badge */}
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(59,130,246,0.15)' }}
                >
                  <span className="text-xs font-bold text-blue-400">in</span>
                </div>
                <span className="text-xs font-semibold text-blue-400">LinkedIn Post</span>
              </div>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>
                {truncate(post.text)}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                    <ThumbsUp size={12} />
                    {post.likes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                    <MessageCircle size={12} />
                    {post.comments}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <time dateTime={post.date} className="text-xs opacity-60" style={{ color: 'var(--muted-foreground)' }}>
                    {formatDate(post.date)}
                  </time>
                  <ExternalLink
                    size={12}
                    className="transition-colors group-hover:text-indigo-400 opacity-40 group-hover:opacity-100"
                    style={{ color: 'var(--muted-foreground)' }}
                    aria-hidden
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href={SITE_OWNER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: 'var(--primary)' }}
          >
            View all posts on LinkedIn
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
