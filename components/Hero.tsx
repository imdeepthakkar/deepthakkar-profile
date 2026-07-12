"use client"
import Image from "next/image"
import { Mail, ArrowRight } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import { motion } from "framer-motion"
import { SITE_OWNER, SKILLS } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="bento-card col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center gap-8 min-h-[340px]"
    >
      {/* Avatar */}
      <motion.div variants={fadeInUp} className="flex-shrink-0">
        <div className="relative w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-indigo-500/30">
          <Image
            src={SITE_OWNER.avatarUrl}
            alt={`${SITE_OWNER.name} avatar`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-1">
        <motion.div variants={fadeInUp}>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium">👋 Hello, I&apos;m</p>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold gradient-text leading-tight">
            {SITE_OWNER.name}
          </h1>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl">
          {SITE_OWNER.bio}
        </motion.p>

        {/* Skills */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* CTA links */}
        <motion.div variants={fadeInUp} className="flex items-center gap-3 flex-wrap mt-2">
          <a
            href={SITE_OWNER.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-xl transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none shadow-md shadow-indigo-500/15 dark:shadow-none"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={SITE_OWNER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white text-sm font-medium rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE_OWNER.email}`}
            className="flex items-center gap-2 px-4 py-2 glass text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white text-sm font-medium rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
          >
            <Mail size={16} />
            Contact
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}
