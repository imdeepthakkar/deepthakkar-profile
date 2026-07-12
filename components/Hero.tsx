"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, ArrowRight, GraduationCap, ChevronDown, Star } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import { SITE_OWNER, SKILLS, EDUCATION } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
            animationDelay: '1s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 60%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Available badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  borderColor: 'rgba(34, 197, 94, 0.3)',
                  color: '#16a34a',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot flex-shrink-0"
                />
                <span className="dark:text-green-400 text-green-600">Available for consulting</span>
              </span>
            </motion.div>

            {/* H1 */}
            <motion.div variants={fadeInUp}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                <span style={{ color: 'var(--foreground)' }}>Hi, I&apos;m</span>
                <br />
                <span className="gradient-text">{SITE_OWNER.name}</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p variants={fadeInUp} className="text-xl font-medium" style={{ color: 'var(--muted-foreground)' }}>
              {SITE_OWNER.tagline}
            </motion.p>

            {/* Bio */}
            <motion.p variants={fadeInUp} className="text-base leading-relaxed max-w-lg" style={{ color: 'var(--muted-foreground)' }}>
              {SITE_OWNER.bio}
            </motion.p>

            {/* Education */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap size={16} style={{ color: 'var(--primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>Education</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.map((ed) => (
                  <span
                    key={ed.degree}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                    style={{
                      background: 'rgba(99,102,241,0.08)',
                      borderColor: 'rgba(99,102,241,0.2)',
                      color: 'var(--primary)',
                    }}
                  >
                    {ed.degree}
                    <span className="opacity-60">· {ed.year}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 hover:border-indigo-400/50"
                  style={{
                    background: 'rgba(99,102,241,0.06)',
                    borderColor: 'var(--border)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 flex-wrap">
              <a
                href={`mailto:${SITE_OWNER.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:scale-105 hover:shadow-indigo-500/30 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8B5CF6)' }}
              >
                <Mail size={16} />
                Get in Touch
                <ArrowRight size={14} />
              </a>
              <a
                href={SITE_OWNER.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                  background: 'rgba(99,102,241,0.06)',
                }}
              >
                <Github size={16} />
                View GitHub
              </a>
            </motion.div>

            {/* Follow me row */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Follow me:</span>
              <div className="flex items-center gap-2">
                <a
                  href={SITE_OWNER.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-indigo-400/50 hover:scale-110"
                  style={{ borderColor: 'var(--border)', background: 'rgba(99,102,241,0.05)', color: 'var(--muted-foreground)' }}
                >
                  <Github size={16} />
                </a>
                <a
                  href={SITE_OWNER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-blue-400/50 hover:scale-110"
                  style={{ borderColor: 'var(--border)', background: 'rgba(59,130,246,0.05)', color: 'var(--muted-foreground)' }}
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={`mailto:${SITE_OWNER.email}`}
                  aria-label="Email"
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-violet-400/50 hover:scale-110"
                  style={{ borderColor: 'var(--border)', background: 'rgba(139,92,246,0.05)', color: 'var(--muted-foreground)' }}
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Spinning gradient ring */}
              <div
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-[3px] animate-gradient-spin"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8B5CF6, #a855f7, #6366f1)',
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{ background: 'var(--background)' }}
                >
                  <Image
                    src={SITE_OWNER.avatarUrl}
                    alt={`${SITE_OWNER.name} profile photo`}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Floating glass card — GitHub stars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 px-4 py-3 rounded-xl border flex items-center gap-2.5 shadow-xl"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderColor: 'rgba(255,255,255,0.15)',
                }}
              >
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <div>
                  <p className="text-xs font-bold" style={{ color: 'var(--foreground)' }}>GitHub</p>
                  <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>45+ repos</p>
                </div>
              </motion.div>

              {/* Floating glass card — LinkedIn */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 px-4 py-3 rounded-xl border flex items-center gap-2.5 shadow-xl"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderColor: 'rgba(255,255,255,0.15)',
                }}
              >
                <Linkedin size={16} className="text-blue-400" />
                <div>
                  <p className="text-xs font-bold" style={{ color: 'var(--foreground)' }}>LinkedIn</p>
                  <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>500+ connections</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" aria-hidden>
        <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Scroll</span>
        <ChevronDown
          size={20}
          className="animate-bounce-scroll"
          style={{ color: 'var(--muted-foreground)' }}
        />
      </div>
    </section>
  )
}
