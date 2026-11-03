import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = "https://www.nadeerep.in";

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
    "Nadeer E P | Founding Engineer, Flutter & Full-Stack Developer in Kerala & Dubai. Built Dr Plus on iOS/Android and dirham_symbol on pub.dev (160/160 pts).",
  keywords: [
    "Nadeer E P",
    "Nadeer EP",
    "Nadeer Flutter",
    "Nadeer Developer",
    "nadeerep.in",
    "www.nadeerep.in",
    "Flutter Developer",
    "Flutter Developer Dubai",
    "Flutter Developer UAE",
    "Flutter Developer Kerala",
    "Flutter Developer Kozhikode",
    "Flutter Developer India",
    "Full-Stack Developer",
    "Founding Engineer",
    "Remote Flutter Developer",
    "Mobile App Developer Dubai",
    "Flutter Web Developer",
    "Next.js Developer India",
    "Node.js Developer",
    "PostgreSQL Developer",
    "Clean Architecture Flutter",
    "dirham_symbol",
    "Dr Plus Home Healthcare",
    "Dr Plus Team",
  ],
  authors: [{ name: "Nadeer E P", url: siteUrl }],
  creator: "Nadeer E P",
  publisher: "Nadeer E P",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "en-IN": siteUrl,
      "en-AE": siteUrl,
      "x-default": siteUrl,
    },
  },
  verification: {
    google: [
      "BNlDQi7oSQEuSt5A02l5HY7xPJcP62plsAL2ktydd30",
      "BUpT6ky_RDU5c3PEXpDc3eTXmAF8nAK2IXda8VAhciI",
    ],
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
      "Production-grade mobile and full-stack applications. Sole engineer behind Dr Plus (Dubai Healthcare on iOS & Android) and author of dirham_symbol on pub.dev (160/160 pts).",
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
    "geo.region": "IN-KL, AE-DU",
    "geo.placename": "Kozhikode, Kerala, India; Dubai, United Arab Emirates",
    "geo.position": "11.2588;75.7804",
    "ICBM": "11.2588, 75.7804",
    "target-country": "IN, AE, US, GB, CA",
    "coverage": "Worldwide",
    "distribution": "Global",
    "rating": "General",
    "revisit-after": "7 days",
    "author": "Nadeer E P",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Nadeer E P",
      alternateName: ["Nadeer EP", "Nadeer", "nadeerep07", "Nadeer E P Developer"],
      jobTitle: "Founding Engineer | Flutter & Full-Stack Developer",
      description:
        "Flutter and full-stack developer with over a year of experience building production mobile and web applications using Flutter, Node.js, Next.js, and PostgreSQL. Sole engineer behind Dr Plus production healthcare platform in Dubai and author of dirham_symbol on pub.dev (160/160 pub points).",
      url: siteUrl,
      image: `${siteUrl}/images/nadeer_front_portrait.jpg`,
      email: "mailto:nadeerep.dev@gmail.com",
      telephone: "+919207874848",
      nationality: "Indian",
      knowsLanguage: ["en", "ml", "hi"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kozhikode",
        addressRegion: "Kerala",
        postalCode: "673001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.2588,
        longitude: 75.7804,
      },
      workLocation: [
        {
          "@type": "Place",
          name: "Kozhikode, Kerala, India",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kozhikode",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
        },
        {
          "@type": "Place",
          name: "Dubai, United Arab Emirates",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Recruitment & Development Inquiries",
        email: "nadeerep.dev@gmail.com",
        telephone: "+919207874848",
        availableLanguage: ["English", "Malayalam", "Hindi"],
        areaServed: ["India", "United Arab Emirates", "Worldwide"],
      },
      sameAs: [
        "https://www.nadeerep.in",
        "https://nadeerep.in",
        "https://github.com/nadeerep07",
        "https://www.linkedin.com/in/nadeerep/",
        "https://pub.dev/packages/dirham_symbol",
        "https://play.google.com/store/apps/details?id=com.drplus.homecare.user",
        "https://apps.apple.com/in/app/dr-plus-home-healthcare/id6757393421",
        "https://play.google.com/store/apps/details?id=com.drplus.staff",
        "https://apps.apple.com/in/app/dr-plus-team/id6827041110",
        "https://interview-mind-pro.vercel.app/",
        "https://www.finovision.net/",
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
      name: "Nadeer E P | Flutter & Full-Stack Developer",
      description: "Official portfolio and engineering showcase of Nadeer E P — Founding Engineer, Flutter & Full-Stack Developer.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en",
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
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${siteUrl}#about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Services",
          item: `${siteUrl}#services`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Work",
          item: `${siteUrl}#work`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Process",
          item: `${siteUrl}#process`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Contact",
          item: `${siteUrl}#contact`,
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Dr Plus Home Healthcare",
      operatingSystem: "Android, iOS",
      applicationCategory: "HealthApplication",
      url: "https://apps.apple.com/in/app/dr-plus-home-healthcare/id6757393421",
      sameAs: [
        "https://play.google.com/store/apps/details?id=com.drplus.homecare.user",
        "https://apps.apple.com/in/app/dr-plus-home-healthcare/id6757393421",
      ],
      author: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        "Production consumer healthcare application in Dubai for doctor home visits, nurse appointments, AWS S3 lab report delivery, and secure payments across iOS and Android.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Dr Plus Team",
      operatingSystem: "Android, iOS",
      applicationCategory: "HealthApplication",
      url: "https://apps.apple.com/in/app/dr-plus-team/id6827041110",
      sameAs: [
        "https://play.google.com/store/apps/details?id=com.drplus.staff",
        "https://apps.apple.com/in/app/dr-plus-team/id6827041110",
      ],
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
      url: "https://www.finovision.net/",
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
