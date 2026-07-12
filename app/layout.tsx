import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { Nav } from "@/components/Nav"
import { ScrollProgress } from "@/components/ScrollProgress"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Deep Thakkar — Full-Stack Developer & AI Engineer",
  description:
    "Full-stack developer passionate about AI, developer tooling, and creating software that makes a real difference. 3+ years of experience building scalable products.",
  keywords: ["developer", "portfolio", "Next.js", "TypeScript", "full-stack", "AI", "ML"],
  authors: [{ name: "Deep Thakkar", url: "https://github.com/imdeepthakkar" }],
  openGraph: {
    title: "Deep Thakkar — Full-Stack Developer & AI Engineer",
    description: "Full-stack developer portfolio with live data integrations.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    // Default to dark mode
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {
                  document.documentElement.classList.add('dark');
                }
              })()
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans min-h-screen transition-colors duration-300`}
        style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
      >
        <ScrollProgress />
        <Nav />
        {children}
      </body>
    </html>
  )
}
