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
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
}

const siteUrl = "https://nadeerep-portfolio.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nadeer E P | Flutter Developer — Mobile & Flutter Web Engineer",
    template: "%s | Nadeer E P",
  },
  description:
    "Official portfolio of Nadeer E P — Flutter Developer & Full-Stack Engineer building production mobile & web applications. Sole engineer behind Dr Plus (Dubai Healthcare), author of dirham_symbol on pub.dev (160/160 pts), and Flutter Developer at Tathkarah.",
  keywords: [
    "Nadeer E P",
    "Nadeer EP",
    "Nadeer Flutter",
    "Nadeer Developer",
    "Flutter Developer",
    "Flutter Developer Kerala",
    "Flutter Developer Dubai",
    "Flutter Developer India",
    "Remote Flutter Developer",
    "Mobile App Developer",
    "Flutter Web Developer",
    "Dart Developer",
    "Riverpod Developer",
    "BLoC Flutter",
    "dirham_symbol",
    "dirham_symbol pub dev",
    "Dr Plus Flutter",
    "Tathkarah Flutter",
    "Next.js Developer",
    "Node.js Flutter Backend",
    "Clean Architecture Flutter",
  ],
  authors: [{ name: "Nadeer E P", url: siteUrl }],
  creator: "Nadeer E P",
  publisher: "Nadeer E P",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/nadeer-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/nadeer-icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/nadeer-icon.png",
    shortcut: "/nadeer-icon.png",
  },
  openGraph: {
    title: "Nadeer E P | Flutter Developer — Mobile & Flutter Web",
    description:
      "Production-grade mobile and web applications. Sole engineer behind Dr Plus (Dubai), Flutter Developer at Tathkarah, and author of dirham_symbol on pub.dev (160/160 pts).",
    url: siteUrl,
    siteName: "Nadeer E P Portfolio",
    images: [
      {
        url: "/nadeer-icon.png",
        width: 1200,
        height: 630,
        alt: "Nadeer E P - Flutter & Mobile Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeer E P | Flutter Developer — Mobile & Flutter Web",
    description:
      "Production mobile & web engineer. Sole engineer behind Dr Plus, author of dirham_symbol on pub.dev (160/160 pts), and Flutter Developer at Tathkarah.",
    images: ["/nadeer-icon.png"],
  },
}

// JSON-LD Structured Data Schema for Google Rich Search & Knowledge Graph
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Nadeer E P",
      alternateName: ["Nadeer EP", "Nadeer", "nadeerep07"],
      jobTitle: "Flutter Developer & Mobile Engineer",
      description:
        "Flutter engineer building production mobile and web applications end-to-end. Sole engineer of Dr Plus (Dubai home-healthcare) and author of dirham_symbol on pub.dev (160/160 pts).",
      url: siteUrl,
      image: `${siteUrl}/images/design-mode/nadeer_casual.png`,
      email: "mailto:nadeerep.dev@gmail.com",
      telephone: "+919207874848",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kozhikode",
        addressRegion: "Kerala",
        addressCountry: "India",
      },
      sameAs: [
        "https://github.com/nadeerep07",
        "https://www.linkedin.com/in/nadeerep/",
        "https://pub.dev/packages/dirham_symbol",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Tathkarah Travel & Tourism Pvt. Ltd.",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Manipal University Jaipur",
        },
        {
          "@type": "EducationalOrganization",
          name: "Brototype",
        },
      ],
      knowsAbout: [
        "Flutter",
        "Dart",
        "Riverpod",
        "BLoC",
        "Flutter Web",
        "Android App Development",
        "iOS App Development",
        "Clean Architecture",
        "MVVM",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
        "gRPC",
        "Stripe Payments",
        "Firebase",
        "AWS S3",
        "CI/CD with GitHub Actions",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Nadeer E P — Portfolio",
      description: "Official developer portfolio of Nadeer E P.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Nadeer E P — Flutter Developer Portfolio",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth dark ${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#08090c] text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300 font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
