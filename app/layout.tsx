import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Serif_JP } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-serif-jp",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Eito Shinokura - Lead AI/ML Engineer",
  description:
    "Lead AI/ML Engineer & AI Architect with 9+ years of experience in Generative AI, multi-agent LLM systems, and scalable MLOps infrastructure for Fortune 500 enterprises.",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSerifJP.variable} font-serif`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
