"use client"
import { motion } from "framer-motion"
import { Star, GitFork, Users, Zap, Activity, Server } from "lucide-react"
import { CombinedMetrics } from "@/lib/analytics"
import { AnimatedCounter } from "@/components/AnimatedCounter"
import { fadeInUp, staggerContainer, scrollReveal } from "@/lib/animations"

interface MetricCardProps {
  icon: React.ReactNode
  label: string
  value: number
  suffix?: string
  color: string
}

function MetricCard({ icon, label, value, suffix = "", color }: MetricCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center justify-center p-5 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 hover:border-indigo-500/20 dark:hover:border-indigo-500/20 hover:bg-slate-200/50 dark:hover:bg-white/8 transition-all duration-300 text-center"
    >
      <div className={`mb-3 p-2.5 rounded-xl ${color}`}>{icon}</div>
      <p className="text-2xl font-bold font-heading text-slate-900 dark:text-slate-100">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{label}</p>
    </motion.div>
  )
}

interface Props {
  metrics: CombinedMetrics
}

export function ProjectMetrics({ metrics }: Props) {
  const { github, analytics } = metrics

  const cards: MetricCardProps[] = [
    { icon: <Star size={18} />, label: "Total Stars", value: github.totalStars, color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
    { icon: <GitFork size={18} />, label: "Total Forks", value: github.totalForks, color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
    { icon: <Activity size={18} />, label: "Public Repos", value: github.publicRepos, color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" },
    { icon: <Users size={18} />, label: "Followers", value: github.followers, color: "bg-violet-500/10 text-violet-600 dark:text-violet-400" },
    { icon: <Zap size={18} />, label: "Features Shipped", value: analytics.featuresShipped, color: "bg-green-500/10 text-green-600 dark:text-green-400" },
    { icon: <Server size={18} />, label: "Uptime", value: analytics.uptimePercent, suffix: "%", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  ]

  return (
    <section
      id="metrics"
      aria-label="Real-Time Project Metrics"
      className="bento-card col-span-1 md:col-span-2 lg:col-span-3"
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">
          📊 Real-Time Project Metrics
        </h2>
        <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-white/5 px-2 py-1 rounded-full font-medium">
          Live
        </span>
      </div>

      <motion.div
        variants={staggerContainer}
        {...scrollReveal}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
      >
        {cards.map((card) => (
          <MetricCard key={card.label} {...card} />
        ))}
      </motion.div>
    </section>
  )
}
