"use client"
import { motion } from "framer-motion"
import { ThumbsUp, MessageCircle, ExternalLink } from "lucide-react"
import { LinkedInPost } from "@/lib/linkedin"
import { fadeInUp, staggerContainer, cardHover, scrollReveal } from "@/lib/animations"

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
      className="bento-card col-span-1 md:col-span-2"
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading text-xl font-bold text-slate-100">
          💼 LinkedIn Posts
        </h2>
        <a
          href="https://linkedin.com/in/imdeepthakkar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
        >
          View profile →
        </a>
      </div>

      <motion.div
        variants={staggerContainer}
        {...scrollReveal}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {posts.map((post) => (
          <motion.a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            whileHover={cardHover}
            className="block p-4 rounded-xl bg-white/5 hover:bg-white/8 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none group"
            aria-label={`LinkedIn post: ${truncate(post.text, 60)}`}
          >
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              {truncate(post.text)}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <ThumbsUp size={12} />
                  {post.likes.toLocaleString()}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <MessageCircle size={12} />
                  {post.comments}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <time dateTime={post.date} className="text-xs text-slate-600">
                  {formatDate(post.date)}
                </time>
                <ExternalLink
                  size={12}
                  className="text-slate-600 group-hover:text-indigo-400 transition-colors"
                  aria-hidden
                />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
