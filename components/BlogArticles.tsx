"use client"
import { motion } from "framer-motion"
import { Clock, ArrowUpRight } from "lucide-react"
import { BlogArticle } from "@/lib/blog"
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

interface Props {
  articles: BlogArticle[]
}

export function BlogArticles({ articles }: Props) {
  return (
    <section
      id="blog"
      aria-label="Blog Articles"
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
            <span style={{ color: 'var(--foreground)' }}>Recent</span>{' '}
            <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Deep-dives into engineering, AI, and developer productivity.
          </p>
        </motion.div>

        {/* Articles grid */}
        <motion.div
          variants={staggerContainer}
          {...scrollReveal}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {articles.slice(0, 4).map((article) => (
            <motion.a
              key={article.id}
              href={article.url}
              variants={fadeInUp}
              whileHover={cardHover}
              className="item-card block p-5 group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              aria-label={`Read article: ${article.title}`}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(99,102,241,0.1)',
                      color: 'var(--primary)',
                      border: '1px solid rgba(99,102,241,0.2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                className="text-sm font-semibold leading-snug mb-2 transition-colors group-hover:text-indigo-400 line-clamp-2"
                style={{ color: 'var(--foreground)' }}
              >
                {article.title}
              </h3>

              <p
                className="text-xs leading-relaxed mb-4 line-clamp-2"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs opacity-60" style={{ color: 'var(--muted-foreground)' }}>
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {article.readingTimeMinutes} min
                  </span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="transition-all group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-40 group-hover:opacity-100"
                  style={{ color: 'var(--muted-foreground)' }}
                  aria-hidden
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: 'var(--primary)' }}
          >
            View all articles
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
