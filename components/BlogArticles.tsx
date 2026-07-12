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
      className="bento-card col-span-1 md:col-span-2"
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">
          ✍️ Recent Articles
        </h2>
        <a
          href="#"
          className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded font-medium"
        >
          View all →
        </a>
      </div>

      <motion.div
        variants={staggerContainer}
        {...scrollReveal}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {articles.slice(0, 4).map((article) => (
          <motion.a
            key={article.id}
            href={article.url}
            variants={fadeInUp}
            whileHover={cardHover}
            className="block p-4 rounded-xl bg-slate-100/50 dark:bg-white/5 hover:bg-slate-200/50 dark:hover:bg-white/8 border border-slate-200/50 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none group"
            aria-label={`Read article: ${article.title}`}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-600">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span className="flex items-center gap-1">
                  <Clock size={10} />
                  {article.readingTimeMinutes} min
                </span>
              </div>
              <ArrowUpRight
                size={14}
                className="text-slate-400 dark:text-slate-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                aria-hidden
              />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
