import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const viewport: Viewport = {
  themeColor: "#070a13",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Nadeer E P | Flutter & Full-Stack Developer",
  description:
    "Flutter engineer building high-performance mobile and web applications end-to-end. Experienced with Riverpod, BLoC, Next.js, Node.js, and Cloud Architectures.",
  keywords: [
    "Nadeer E P",
    "Flutter Developer",
    "Flutter Web",
    "Mobile Engineer",
    "Dart",
    "Riverpod",
    "BLoC",
    "Next.js",
    "Node.js",
    "Dubai Flutter Developer",
    "Remote Flutter Developer",
    "dirham_symbol",
    "Dr Plus",
  ],
  authors: [{ name: "Nadeer E P", url: "https://nadeerep.dev" }],
  icons: {
    icon: [
      { url: "/nadeer-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/nadeer-icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/nadeer-icon.png",
    shortcut: "/nadeer-icon.png",
  },
  openGraph: {
    title: "Nadeer E P — Flutter & Full-Stack Developer",
    description:
      "Production-grade mobile and web applications. Creator of Dr Plus, Tathkarah Web & Console rebuilds, and dirham_symbol on pub.dev (160/160 pts).",
    siteName: "Nadeer E P Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeer E P — Flutter & Full-Stack Developer",
    description:
      "Production-grade mobile and web applications. Sole engineer behind Dr Plus, Tathkarah Web, and dirham_symbol on pub.dev.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth dark ${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased bg-[#070a13] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
