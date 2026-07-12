"use client"
import Link from "next/link"
import { Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import { motion } from "framer-motion"

const navLinks = [
  { label: "GitHub", href: "#github" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Blog", href: "#blog" },
  { label: "Metrics", href: "#metrics" },
]

export function Nav() {
  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="font-heading font-bold text-xl gradient-text focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded px-2 py-1"
            >
              Deep Thakkar
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-6"
          >
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-slate-100 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/imdeepthakkar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 text-slate-400 hover:text-slate-100 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-lg"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/imdeepthakkar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 text-slate-400 hover:text-slate-100 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-lg"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:deep@example.com"
                aria-label="Email me"
                className="p-2 text-slate-400 hover:text-slate-100 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-lg"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
