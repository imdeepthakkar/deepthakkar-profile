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
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-xl glass text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  )
}
