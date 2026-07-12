import { Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import { SITE_OWNER } from "@/lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-12 border-t"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--background)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Name */}
          <p className="font-heading font-bold text-lg gradient-text">
            {SITE_OWNER.name}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={SITE_OWNER.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-indigo-400/50 hover:scale-110"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--muted-foreground)',
                background: 'rgba(99,102,241,0.04)',
              }}
            >
              <Github size={16} />
            </a>
            <a
              href={SITE_OWNER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-blue-400/50 hover:scale-110"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--muted-foreground)',
                background: 'rgba(59,130,246,0.04)',
              }}
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${SITE_OWNER.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-violet-400/50 hover:scale-110"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--muted-foreground)',
                background: 'rgba(139,92,246,0.04)',
              }}
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Caption */}
          <p className="text-xs text-center" style={{ color: 'var(--muted-foreground)' }}>
            Built with{' '}
            <span className="font-medium" style={{ color: 'var(--primary)' }}>Next.js</span>
            {' '}&{' '}
            <span className="font-medium" style={{ color: 'var(--primary)' }}>Tailwind CSS</span>
          </p>

          {/* Copyright */}
          <p className="text-xs opacity-50" style={{ color: 'var(--muted-foreground)' }}>
            © {year} {SITE_OWNER.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
