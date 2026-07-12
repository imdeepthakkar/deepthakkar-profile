"use client"
import { motion } from "framer-motion"
import { Users, BookOpen, GitFork } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import { AnimatedCounter } from "@/components/AnimatedCounter"
import { COMMUNITY_STATS } from "@/lib/constants"
import { fadeInUp, staggerContainer, scrollReveal } from "@/lib/animations"
import type React from "react"

interface StatCardProps {
  label: string
  value: number
  icon: string
  color: string
}

function getIcon(iconKey: string): React.ReactNode {
  switch (iconKey) {
    case 'github':
      return <Github size={20} />
    case 'repos':
      return <GitFork size={20} />
    case 'linkedin':
      return <Linkedin size={20} />
    case 'articles':
      return <BookOpen size={20} />
    default:
      return <Users size={20} />
  }
}

function StatCard({ label, value, icon, color }: StatCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center justify-center p-6 rounded-2xl border text-center group transition-all duration-300"
      style={{
        borderColor: 'var(--border)',
        background: 'rgba(99,102,241,0.03)',
      }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className={`mb-4 p-3 rounded-xl ${color} transition-transform duration-300 group-hover:scale-110`}>
        {getIcon(icon)}
      </div>
      <p className="text-3xl sm:text-4xl font-extrabold font-heading mb-1" style={{ color: 'var(--foreground)' }}>
        <AnimatedCounter value={value} suffix={value >= 500 ? "+" : ""} />
      </p>
      <p className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>{label}</p>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'rgba(99,102,241,0.03)' }}
    >
      {/* Subtle top border gradient */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(99,102,241,0.3), transparent)' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
            <span style={{ color: 'var(--foreground)' }}>Community</span>{' '}
            <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Numbers that reflect my journey and contributions to the developer community.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          {...scrollReveal}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {COMMUNITY_STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>

      {/* Subtle bottom border gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(99,102,241,0.3), transparent)' }}
        aria-hidden
      />
    </section>
  )
}
