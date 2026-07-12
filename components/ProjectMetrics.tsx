"use client"
import type React from "react"
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
      className="flex flex-col items-center justify-center p-5 rounded-2xl border text-center group transition-all duration-300"
      style={{
        borderColor: 'var(--border)',
        background: 'rgba(99,102,241,0.03)',
      }}
      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
    >
      <div className={`mb-3 p-2.5 rounded-xl ${color} transition-transform duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      <p className="text-2xl font-bold font-heading mb-1" style={{ color: 'var(--foreground)' }}>
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>{label}</p>
    </motion.div>
  )
}

interface Props {
  metrics: CombinedMetrics
}

export function ProjectMetrics({ metrics }: Props) {
  const { github, analytics } = metrics

  const cards: MetricCardProps[] = [
    {
      icon: <Star size={18} />,
      label: "Total Stars",
      value: github.totalStars,
      color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: <GitFork size={18} />,
      label: "Total Forks",
      value: github.totalForks,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Activity size={18} />,
      label: "Public Repos",
      value: github.publicRepos,
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
    {
      icon: <Users size={18} />,
      label: "Followers",
      value: github.followers,
      color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    },
    {
      icon: <Zap size={18} />,
      label: "Features Shipped",
      value: analytics.featuresShipped,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      icon: <Server size={18} />,
      label: "Uptime",
      value: analytics.uptimePercent,
      suffix: "%",
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
  ]

  return (
    <section
      id="metrics"
      aria-label="Real-Time Project Metrics"
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
            <span style={{ color: 'var(--foreground)' }}>Project</span>{' '}
            <span className="gradient-text">Metrics</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Real-time stats pulled live from GitHub and internal analytics.
          </p>
          <div className="mt-3 inline-flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot"
            />
            <span className="text-xs font-medium text-green-400">Live data</span>
          </div>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          variants={staggerContainer}
          {...scrollReveal}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {cards.map((card) => (
            <MetricCard key={card.label} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
