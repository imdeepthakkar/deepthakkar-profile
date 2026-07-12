"use client"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const isDarkClass = document.documentElement.classList.contains("dark")
    setIsDark(isDarkClass)
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-xl border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
      style={{
        borderColor: 'var(--border)',
        background: 'rgba(99,102,241,0.06)',
        color: 'var(--muted-foreground)',
      }}
    >
      {isDark ? (
        <Sun size={16} className="text-amber-400" />
      ) : (
        <Moon size={16} style={{ color: 'var(--primary)' }} />
      )}
    </motion.button>
  )
}
