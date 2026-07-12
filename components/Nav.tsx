"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Mail, Menu, X } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import { ThemeToggle } from "@/components/ThemeToggle"
import { motion, AnimatePresence } from "framer-motion"
import { SITE_OWNER } from "@/lib/constants"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "GitHub", href: "#github" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Blog", href: "#blog" },
  { label: "Metrics", href: "#metrics" },
]

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Avatar + Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/"
                className="flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-lg px-1"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-indigo-500/40 flex-shrink-0">
                  <Image
                    src={SITE_OWNER.avatarUrl}
                    alt={SITE_OWNER.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <span className="font-heading font-bold text-base gradient-text hidden sm:block">
                  Deep Thakkar
                </span>
              </Link>
            </motion.div>

            {/* Centre: Nav links (desktop) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="hidden md:flex items-center gap-1"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm px-3 py-1.5 rounded-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                  style={{ color: 'var(--muted-foreground)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)'
                    e.currentTarget.style.background = 'rgba(99,102,241,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--muted-foreground)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>

            {/* Right: Social icons + divider + theme toggle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1"
            >
              <a
                href={SITE_OWNER.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                style={{ color: 'var(--muted-foreground)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
              >
                <Github size={18} />
              </a>
              <a
                href={SITE_OWNER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                style={{ color: 'var(--muted-foreground)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${SITE_OWNER.email}`}
                aria-label="Send email"
                className="p-2 rounded-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                style={{ color: 'var(--muted-foreground)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
              >
                <Mail size={18} />
              </a>
              <div className="w-px h-5 mx-1 bg-slate-200 dark:bg-white/10" aria-hidden />
              <ThemeToggle />
              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-lg transition-colors duration-200 ml-1"
                style={{ color: 'var(--muted-foreground)' }}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t overflow-hidden"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)' }}
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm rounded-lg transition-colors"
                    style={{ color: 'var(--muted-foreground)' }}
                    onClick={() => setMobileOpen(false)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
