import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Orbitron } from "next/font/google" // ← ADD THIS LINE
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

// ← ADD THIS BLOCK
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Der Salon - Hair Magic in Bad Laasphe",
  description:
    "Where jungle vibes meet urban hair aesthetics. Professional hair salon in Bad Laasphe offering cuts, color, and styling services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* ← ADD orbitron.variable to the body className */}
      <body className={`${inter.variable} ${playfair.variable} ${orbitron.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  )
}