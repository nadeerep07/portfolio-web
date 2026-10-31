import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = "https://nadeerep-portfolio.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nadeer E P | Flutter & Full-Stack Developer",
    template: "%s | Nadeer E P",
  },
  description:
    "Official portfolio of Nadeer E P — Founding Engineer, Flutter & Full-Stack Developer. Sole engineer behind Dr Plus (Dubai healthcare platform live on app stores) and author of dirham_symbol on pub.dev (160/160 pub points).",
  keywords: [
    "Nadeer E P",
    "Nadeer EP",
    "Nadeer Flutter",
    "Nadeer Developer",
    "Flutter Developer",
    "Flutter Developer Dubai",
    "Flutter Developer UAE",
    "Flutter Developer Kerala",
    "Flutter Developer India",
    "Full-Stack Developer",
    "Founding Engineer",
    "Remote Flutter Developer",
    "Mobile App Developer",
    "Flutter Web Developer",
    "Next.js Developer",
    "Node.js Developer",
    "PostgreSQL Developer",
    "Clean Architecture Flutter",
    "dirham_symbol",
    "Dr Plus Home Healthcare",
  ],
  authors: [{ name: "Nadeer E P", url: siteUrl }],
  creator: "Nadeer E P",
  publisher: "Nadeer E P",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "BUpT6ky_RDU5c3PEXpDc3eTXmAF8nAK2IXda8VAhciI",
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
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Nadeer E P | Flutter & Full-Stack Developer",
    description:
      "Production-grade mobile and full-stack applications. Sole engineer behind Dr Plus (Dubai Healthcare) and author of dirham_symbol on pub.dev (160/160 pts).",
    url: siteUrl,
    siteName: "Nadeer E P Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "Nadeer E P - Flutter & Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeer E P | Flutter & Full-Stack Developer",
    description:
      "Founding Engineer & Full-Stack Flutter Developer. Sole engineer behind Dr Plus and creator of dirham_symbol on pub.dev.",
    images: ["/icon.png"],
  },
  other: {
    "geo.region": "IN-KL;AE-DU",
    "geo.placename": "Kozhikode, Kerala, India; Dubai, UAE",
    "geo.position": "11.2588;75.7804",
    "ICBM": "11.2588, 75.7804",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Nadeer E P",
      alternateName: ["Nadeer EP", "Nadeer", "nadeerep07"],
      jobTitle: "Founding Engineer | Flutter & Full-Stack Developer",
      description:
        "Flutter and full-stack developer with over a year of experience building production mobile and web applications using Flutter, Node.js, Next.js, and PostgreSQL. Sole engineer behind Dr Plus production healthcare platform in Dubai and author of dirham_symbol on pub.dev (160/160 pub points).",
      url: siteUrl,
      image: `${siteUrl}/images/nadeer_front_portrait.jpg`,
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
        "https://play.google.com/store/apps/details?id=com.drplus.staff",
        "https://interview-mind-pro.vercel.app/",
        "https://finovision-preview.vercel.app/",
        "https://duotek.ae/",
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Dr Plus Star Home Healthcare",
          location: "Dubai, UAE",
        },
        {
          "@type": "Organization",
          name: "Tathkarah Travel & Tourism Pvt. Ltd.",
          location: "Kuwait / Remote",
        },
      ],
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
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Google Play Store Listing Certificate",
          credentialCategory: "Certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "Google Play Academy",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Introduction to DevOps",
          credentialCategory: "Certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "IBM / Coursera",
          },
          url: "https://coursera.org/verify/J754RUM09U89",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "AI Tools & Claude Workshop",
          credentialCategory: "Certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "be10x",
          },
        },
      ],
      knowsAbout: [
        "Flutter",
        "Dart",
        "Next.js",
        "React",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Firebase",
        "AWS S3",
        "Riverpod",
        "BLoC",
        "Provider",
        "Clean Architecture",
        "MVVM",
        "REST APIs",
        "Fastify",
        "CI/CD with GitHub Actions",
        "Google Play Console",
        "App Store Connect",
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
      name: "Nadeer E P — Flutter & Full-Stack Developer Portfolio",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Dr Plus Team",
      operatingSystem: "Android, iOS",
      applicationCategory: "HealthApplication",
      url: "https://play.google.com/store/apps/details?id=com.drplus.staff",
      author: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        "Production Flutter healthcare staff app with Node.js APIs, biometric attendance, GPS clock-in, and full release ownership across app stores.",
    },
    {
      "@type": "SoftwareApplication",
      name: "dirham_symbol",
      operatingSystem: "Cross-platform",
      applicationCategory: "DeveloperApplication",
      url: "https://pub.dev/packages/dirham_symbol",
      author: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        "Open-source Flutter/Dart package for standardized UAE Dirham (AED) currency symbol formatting with 160/160 pub points on pub.dev.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Finovision",
      operatingSystem: "Web",
      applicationCategory: "FinanceApplication",
      url: "https://finovision-preview.vercel.app/",
      author: {
        "@id": `${siteUrl}/#person`,
      },
      description: "Polished financial technology web product engineered with Next.js and fluid interactions.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Duotek",
      operatingSystem: "Web",
      applicationCategory: "BusinessApplication",
      url: "https://duotek.ae/",
      author: {
        "@id": `${siteUrl}/#person`,
      },
      description: "Corporate platform for Dubai-based technology enterprise showcasing digital solutions.",
    },
    {
      "@type": "SoftwareApplication",
      name: "InterviewMind Pro",
      operatingSystem: "Web",
      applicationCategory: "EducationalApplication",
      url: "https://interview-mind-pro.vercel.app/",
      author: {
        "@id": `${siteUrl}/#person`,
      },
      description: "AI-powered interview preparation coach with automated questions and smart evaluation.",
    },
    {
      "@type": "SoftwareApplication",
      name: "QuickPitch",
      operatingSystem: "Android, iOS",
      applicationCategory: "BusinessApplication",
      url: "https://play.google.com/store/apps/details?id=com.quickpitch",
      author: {
        "@id": `${siteUrl}/#person`,
      },
      description: "Two-sided Flutter service marketplace with Google Maps integration and Razorpay payments.",
    },
    {
      "@type": "SoftwareApplication",
      name: "InvoZoyo",
      operatingSystem: "Android",
      applicationCategory: "BusinessApplication",
      url: "https://play.google.com/store/apps/details?id=com.zoyo.bathware",
      author: {
        "@id": `${siteUrl}/#person`,
      },
      description: "Offline-first retail billing and inventory management POS application built on local Hive database.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-800 dark:text-slate-100 min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
