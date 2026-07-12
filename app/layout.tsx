import type { Metadata } from "next"
import "./globals.css"
import { Nav } from "@/components/Nav"
import { ScrollProgress } from "@/components/ScrollProgress"

export const metadata: Metadata = {
  title: "Deep Thakkar — Developer Portfolio",
  description:
    "Full-stack developer portfolio featuring live GitHub activity, LinkedIn posts, blog articles, and real-time project metrics.",
  keywords: ["developer", "portfolio", "Next.js", "TypeScript", "full-stack"],
  authors: [{ name: "Deep Thakkar", url: "https://github.com/imdeepthakkar" }],
  openGraph: {
    title: "Deep Thakkar — Developer Portfolio",
    description: "Full-stack developer portfolio with live data integrations.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-navy-900">
        <ScrollProgress />
        <Nav />
        {children}
      </body>
    </html>
  )
}
