"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, XIcon, MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon } from "./icons";
import {
  FlutterIcon,
  DartIcon,
  NextjsIcon,
  ReactIcon,
  NodejsIcon,
  JavascriptIcon,
  MongodbIcon,
  PostgresqlIcon,
  FirebaseIcon,
  AwsIcon,
  GitIcon,
  PostmanIcon,
  FigmaIcon,
  GithubActionsIcon,
  Html5Icon,
  Css3Icon,
  SupabaseIcon,
  AndroidStudioIcon,
  GooglePlayIcon,
  AppStoreIcon,
  GithubIcon,
} from "./tech-icons";

const certificates = [
  {
    title: "Google Play Store Listing Certificate",
    issuer: "Google Play Academy",
    date: "Issued Oct 28, 2025 · Valid to Oct 28, 2028",
    credentialId: "164453155",
    description: "Certified in Google Play Store listing optimization, store policies, metadata compliance, and app store discoverability.",
    image: "/images/certificates/cert-google-play-store-listing.png",
    badge: "Play Store",
    verifyUrl: null,
  },
  {
    title: "Introduction to DevOps",
    issuer: "IBM · Coursera",
    date: "Issued Jul 30, 2026",
    credentialId: "J754RUM09U89",
    description: "Authorized by IBM (John J Rofrano, Senior Technical Staff Member & DevOps Champion). Core focus on CI/CD automation, cloud deployment, and test pipelines.",
    image: "/images/certificates/cert-ibm-devops.jpg",
    badge: "IBM · Coursera",
    verifyUrl: "https://coursera.org/verify/J754RUM09U89",
  },
  {
    title: "AI Tools & Claude Workshop",
    issuer: "be10x",
    date: "Issued Oct 7, 2026",
    credentialId: "Verified Workshop",
    description: "Practical engineering workshop covering Claude Code, generative AI tools, rapid prototyping, data analysis, and debugging.",
    image: "/images/certificates/cert-be10x-ai-tools.jpg",
    badge: "AI & Claude",
    verifyUrl: null,
  },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6366f1] dark:text-[#a5b4fc]">
        {eyebrow}
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-white">
        {title}
      </h2>
      {copy ? (
        <p className="max-w-2xl text-sm leading-relaxed text-[#64748b] dark:text-[#94a3b8]">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function MiniIcon({
  children,
  tone = "violet",
}: {
  children: React.ReactNode;
  tone?: "violet" | "blue" | "amber" | "cyan";
}) {
  const tones = {
    violet: "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300",
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300",
    amber: "bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300",
    cyan: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300",
  };
  return (
    <span
      className={`flex h-11 w-11 items-center justify-center rounded-2xl text-lg ${tones[tone]} shadow-xs`}
    >
      {children}
    </span>
  );
}

const services = [
  [
    "Mobile Engineering",
    "Flutter applications for iOS and Android with clean architecture, robust state management, and end-to-end production store deployment.",
    "▣",
    "violet",
  ],
  [
    "Full-Stack Web",
    "High-performance Next.js and React experiences backed by reliable REST APIs, responsive interfaces, and multilingual workflows.",
    "⌘",
    "blue",
  ],
  [
    "Backend & APIs",
    "Node.js, Express, and Fastify REST APIs with PostgreSQL, MongoDB, JWT authentication, and fine-grained role-based access control.",
    "⌁",
    "amber",
  ],
  [
    "Cloud & DevOps",
    "AWS S3, Firebase Cloud Messaging, GitHub Actions CI/CD, payment gateway migrations, unit testing, and store release maintenance.",
    "↗",
    "cyan",
  ],
];

const technologies = [
  { name: "Flutter", icon: FlutterIcon },
  { name: "Dart", icon: DartIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "MongoDB", icon: MongodbIcon },
  { name: "PostgreSQL", icon: PostgresqlIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "AWS", icon: AwsIcon },
  { name: "Git", icon: GitIcon },
  { name: "Postman", icon: PostmanIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "GitHub Actions", icon: GithubActionsIcon },
  { name: "HTML5", icon: Html5Icon },
  { name: "CSS3", icon: Css3Icon },
  { name: "Supabase", icon: SupabaseIcon },
  { name: "Android Studio", icon: AndroidStudioIcon },
  { name: "Google Play", icon: GooglePlayIcon },
  { name: "App Store", icon: AppStoreIcon },
];

const projects = [
  {
    title: "Dr Plus Home Healthcare",
    type: "Consumer Healthcare Platform",
    description:
      "Patient-facing healthcare app in Dubai for doctor home visits, nurse bookings, lab test reports via AWS S3, and payment gateways.",
    image: "/images/dr-plus-home-healthcare.png",
    href: "https://play.google.com/store/apps/details?id=com.drplus.staff",
    badge: "Play Store",
    tags: ["Flutter", "Node.js", "AWS S3", "MongoDB"],
  },
  {
    title: "Dr Plus Team",
    type: "Healthcare Staff App",
    description:
      "Production Flutter staff app with Node.js APIs, biometric attendance, GPS clock-in, and release ownership across both app stores.",
    image: "/images/dr-plus-team-preview.png",
    href: "https://play.google.com/store/apps/details?id=com.drplus.staff",
    badge: "Play Store",
    tags: ["Flutter", "Node.js", "MongoDB"],
  },
  {
    title: "Finovision",
    type: "Fintech Platform",
    description:
      "A polished financial web product showcasing fintech solutions with clean responsive layout and fluid interactions.",
    image: "/images/finovision-preview.png",
    href: "https://finovision-preview.vercel.app/",
    badge: "Live Web",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Duotek",
    type: "Corporate Platform",
    description:
      "Dubai-based technology platform engineered to present enterprise digital services with high speed and modern aesthetics.",
    image: "/images/duotek-preview.png",
    href: "https://duotek.ae/",
    badge: "Live Web",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    title: "dirham_symbol",
    type: "Open-Source Package",
    description:
      "Published UAE dirham formatting package with unit tests and example app, achieving a perfect 160/160 pub points.",
    image: "/images/dirham-package.png",
    href: "https://pub.dev/packages/dirham_symbol",
    badge: "160/160 Pub Points",
    tags: ["Dart", "Flutter", "pub.dev"],
  },
  {
    title: "InterviewMind Pro",
    type: "AI Interview Coach",
    description:
      "Full-stack platform generating customized interview questionnaires with AI-driven response analysis and real-time skill grading.",
    image: "/images/interview-mind-pro.png",
    href: "https://interview-mind-pro.vercel.app/",
    badge: "Live Web",
    tags: ["Next.js", "Express.js", "MongoDB", "AI Analysis"],
  },
  {
    title: "QuickPitch",
    type: "Service Marketplace",
    description:
      "Two-sided Flutter marketplace with BLoC, Firebase Auth, Google Maps provider discovery, and server-verified Razorpay payments.",
    image: "/images/quick-pitch.png",
    href: "https://play.google.com/store/apps/details?id=com.quickpitch",
    badge: "Play Store",
    tags: ["Flutter", "BLoC", "Razorpay"],
  },
  {
    title: "InvoZoyo",
    type: "Offline Billing & Inventory",
    description:
      "Offline-first Flutter POS with Hive DB, PDF invoice generation, cart discounts, and real-time low-stock alerts.",
    image: "/images/invo-zoyo.png",
    href: "https://play.google.com/store/apps/details?id=com.zoyo.bathware",
    badge: "Play Store",
    tags: ["Flutter", "Hive DB", "PDF"],
  },
];

const processSteps = [
  ["01", "Architecture", "Define specifications, entity schemas, state management approach, and modular boundaries."],
  ["02", "Backend & APIs", "Architect secure REST APIs, JWT authentication, RBAC, database models, and cloud storage."],
  ["03", "Flutter Client", "Engineer clean UI, state flows, responsive screens, error handling, and hardware-backed storage."],
  ["04", "Testing & CI/CD", "Unit-test critical business flows and configure automated GitHub Actions pipelines."],
  ["05", "Store Release", "Deploy and actively maintain releases across Apple App Store, Google Play Store, and pub.dev."],
];

export function PortfolioSections() {
  const [selectedCert, setSelectedCert] = React.useState<typeof certificates[0] | null>(null);

  return (
    <div className="space-y-8 mt-10">
      {/* 1. ABOUT ME (Liquid Glass Container) */}
      <section id="about" className="liquid-glass-container p-6 sm:p-10 lg:p-12 scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="ABOUT ME"
              title={
                <>
                  Designing with Empathy,
                  <br />
                  Building with Purpose.
                </>
              }
            />
            {/* Metric Highlights in Liquid Glass Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 liquid-glass-card">
              {[
                ["1+ Years", "Production Exp."],
                ["2 Stores", "Shipped & Live"],
                ["160/160", "Pub.dev Score"],
              ].map(([value, label]) => (
                <div key={label} className="text-center sm:text-left space-y-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] dark:text-white">
                    {value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#475569] dark:text-[#94a3b8]">
            <p>
              I’m a Flutter and full-stack developer based in Kozhikode, Kerala, specializing in mobile and web applications using Flutter, Node.js, Next.js, and PostgreSQL.
            </p>
            <p>
              As the sole engineer behind a live healthcare platform, I hold end-to-end ownership across mobile client engineering, REST APIs, payment gateways, FCM notifications, cloud storage, and CI/CD pipelines.
            </p>
            <div className="pt-2">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-black transition-all hover:scale-102 dark:bg-white dark:text-[#0f172a]"
              >
                View My Work <ArrowUpRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES / ENGINEERING DOMAINS (Liquid Glass Container) */}
      <section id="services" className="liquid-glass-container p-6 sm:p-10 lg:p-12 scroll-mt-24">
        <SectionHeading
          eyebrow="WHAT I DO"
          title="Services & Engineering Domains"
          copy="Full lifecycle engineering across mobile devices, distributed backend services, and modern web platforms."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, description, icon, tone]) => (
            <article key={title} className="liquid-glass-card p-6 flex flex-col justify-between">
              <div>
                <MiniIcon tone={tone as "violet" | "blue" | "amber" | "cyan"}>{icon}</MiniIcon>
                <h3 className="mt-5 text-base font-bold text-[#0f172a] dark:text-white">
                  {title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[#64748b] dark:text-[#94a3b8]">
                  {description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/50 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-[#6366f1] dark:text-[#a5b4fc]">
                <span>Explore</span>
                <ArrowUpRightIcon size={14} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. TECHNOLOGIES I USE (Liquid Glass Container) */}
      <section id="skills" className="liquid-glass-container p-6 sm:p-10 lg:p-12 scroll-mt-24">
        <SectionHeading
          eyebrow="TOOLS & SKILLS"
          title="Technologies I Use"
          copy="Core programming languages, frameworks, databases, and deployment platforms in my active stack."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-3.5">
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="liquid-glass-card p-4 flex flex-col items-center justify-center gap-2.5 text-center min-h-[96px] group transition-all duration-300 hover:scale-[1.04]"
            >
              <div className="w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Icon className="w-7 h-7 object-contain" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] dark:text-white leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PROJECTS / SELECTED WORK (Liquid Glass Container) */}
      <section id="work" className="liquid-glass-container p-6 sm:p-10 lg:p-12 scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
          <SectionHeading
            eyebrow="FEATURED PROJECTS"
            title="Selected Work"
            copy="Production mobile applications, web platforms, and open-source packages shipped to real users."
          />
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) {
                const navOffset = 84;
                const offsetPosition = el.getBoundingClientRect().top + window.scrollY - navOffset;
                window.scrollTo({
                  top: Math.max(0, offsetPosition),
                  behavior: "smooth",
                });
                window.history.pushState(null, "", "#contact");
              }
            }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/90 dark:bg-slate-800 border border-white dark:border-white/10 px-5 py-2.5 text-xs font-semibold text-[#0f172a] dark:text-white shadow-xs hover:bg-white transition-all hover:scale-102"
          >
            Discuss a Project <ArrowUpRightIcon size={13} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="liquid-glass-card group overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800/80 rounded-t-[1.75rem]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-104"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 dark:bg-slate-900/90 text-[#0f172a] dark:text-white shadow-sm border border-white/80 dark:border-white/10">
                    {project.badge}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-base text-[#0f172a] dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-semibold text-[#6366f1] dark:text-[#a5b4fc]">
                        {project.type}
                      </p>
                    </div>
                    <Link
                      href={project.href}
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-[#0f172a] dark:text-white shadow-xs transition-transform hover:scale-110 border border-white/80 dark:border-white/10"
                    >
                      <ArrowUpRightIcon size={14} />
                    </Link>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[#64748b] dark:text-[#94a3b8]">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex flex-wrap gap-1.5 border-t border-white/40 dark:border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/80 dark:bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. ENGINEERING PROCESS / WORKFLOW (Liquid Glass Container) */}
      <section id="process" className="liquid-glass-container p-6 sm:p-10 lg:p-12 scroll-mt-24">
        <SectionHeading
          eyebrow="MY PROCESS"
          title="Engineering Process I Follow"
          copy="A structured end-to-end workflow ensuring architectural integrity, test coverage, and smooth production releases."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map(([number, title, description]) => (
            <article key={number} className="liquid-glass-card p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-[#6366f1] dark:text-[#a5b4fc]">
                    {number}
                  </span>
                  <span className="text-[#a5b4fc] text-lg">✦</span>
                </div>
                <h3 className="mt-6 text-sm font-bold text-[#0f172a] dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b] dark:text-[#94a3b8]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. WORK EXPERIENCE & IMPACT (Liquid Glass Container) */}
      <section id="experience" className="liquid-glass-container p-6 sm:p-10 lg:p-12 scroll-mt-24">
        <SectionHeading
          eyebrow="WORK EXPERIENCE"
          title="Professional Experience & Impact"
          copy="Hands-on engineering across healthcare startups, travel platforms, and mobile apps."
        />
        <div className="space-y-4">
          <article className="liquid-glass-card p-6 grid gap-5 md:grid-cols-[200px_1fr]">
            <div>
              <span className="text-xs font-bold text-[#6366f1] dark:text-[#a5b4fc]">
                Jul 2025 — Present
              </span>
              <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Dubai, UAE (Hybrid)
              </p>
              <span className="mt-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                Founding Engineer
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f172a] dark:text-white">
                Founding Engineer · Dr Plus Star Home Healthcare
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#64748b] dark:text-[#94a3b8]">
                Sole engineer responsible for building and launching the Flutter healthcare app on iOS and Android. Architected Node.js/Express REST APIs with MongoDB, JWT, RBAC, AWS S3 reports, FCM notifications, and Stripe to Urban Ledger payment migration. Developing Next.js &amp; Fastify HRMS with GPS clock-in and biometric device logs.
              </p>
            </div>
          </article>

          <article className="liquid-glass-card p-6 grid gap-5 md:grid-cols-[200px_1fr]">
            <div>
              <span className="text-xs font-bold text-[#6366f1] dark:text-[#a5b4fc]">
                Feb 2026 — Oct 2026
              </span>
              <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Remote, Kerala
              </p>
              <span className="mt-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                Full-time
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f172a] dark:text-white">
                Flutter Developer · Tathkarah Travel &amp; Tourism Pvt. Ltd.
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#64748b] dark:text-[#94a3b8]">
                Established MVVM architecture, Provider state management, and Dio API integration for enterprise Flutter Web booking console. Refactored a 10k+ line GetX controller into modular controllers and migrated booking website from Vue.js to Next.js with Tap Payments and Arabic RTL support.
              </p>
            </div>
          </article>

          <article className="liquid-glass-card p-6 grid gap-5 md:grid-cols-[200px_1fr]">
            <div>
              <span className="text-xs font-bold text-[#6366f1] dark:text-[#a5b4fc]">
                2024 — 2025
              </span>
              <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Calicut, Kerala
              </p>
              <span className="mt-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
                Bootcamp
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f172a] dark:text-white">
                Flutter Mobile App Development · Brototype
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#64748b] dark:text-[#94a3b8]">
                Mastered Clean Architecture, BLoC, and Provider state management. Shipped QuickPitch and InvoZoyo to Google Play Store. Honored with Best Coordinator of the Month award for peer code reviews and team collaboration.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* 7. EDUCATION & CERTIFICATIONS (Liquid Glass Container) */}
      <section id="education" className="liquid-glass-container p-6 sm:p-10 lg:p-12 scroll-mt-24 space-y-10">
        <div>
          <SectionHeading
            eyebrow="CREDENTIALS &amp; FOUNDATION"
            title="Education &amp; Certifications"
            copy="Verified industry credentials across Play Store listing &amp; distribution, cloud DevOps, and AI engineering alongside formal academic foundation."
          />
        </div>

        {/* Certifications Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366f1] dark:text-[#a5b4fc]">
              Professional Certifications &amp; Accreditations
            </h3>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">
              Click any certificate to expand preview
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <article
                key={cert.title}
                onClick={() => setSelectedCert(cert)}
                className="liquid-glass-card group overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-100 dark:bg-slate-800/80 rounded-t-[1.75rem]">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 dark:bg-slate-900/90 text-[#0f172a] dark:text-white shadow-xs border border-white/80 dark:border-white/10">
                      {cert.badge}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-bold text-base text-[#0f172a] dark:text-white group-hover:text-[#6366f1] dark:group-hover:text-[#a5b4fc] transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {cert.issuer} · {cert.date}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-[#64748b] dark:text-[#94a3b8]">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-white/40 dark:border-white/5 text-[11px]">
                  <span className="font-mono text-slate-500 dark:text-slate-400 text-[10px]">
                    ID: {cert.credentialId}
                  </span>
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 font-semibold text-[#6366f1] dark:text-[#a5b4fc] hover:underline"
                    >
                      Verify ↗
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                      ✓ Verified
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Academic & Recognition Sub-grid */}
        <div className="grid gap-6 lg:grid-cols-2 pt-2 border-t border-slate-200/50 dark:border-white/5">
          {/* Academic Foundation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366f1] dark:text-[#a5b4fc]">
              Academic Foundation
            </h3>
            <div className="space-y-3.5">
              <div className="liquid-glass-card p-5">
                <h4 className="font-bold text-sm text-[#0f172a] dark:text-white">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Manipal University Jaipur (Online) · 2026 — 2029 (expected)
                </p>
              </div>
              <div className="liquid-glass-card p-5">
                <h4 className="font-bold text-sm text-[#0f172a] dark:text-white">
                  Flutter Mobile App Development
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Brototype, Calicut · 2024 — 2025 (certified)
                </p>
              </div>
            </div>
          </div>

          {/* Honors & Leadership */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#6366f1] dark:text-[#a5b4fc]">
              Honors &amp; Leadership
            </h3>
            <div className="liquid-glass-card p-5 flex items-center gap-5 h-full">
              <Image
                src="/images/achievement-badge.png"
                alt="Best Coordinator Award"
                width={80}
                height={80}
                className="rounded-2xl object-contain drop-shadow-md shrink-0"
              />
              <div>
                <h4 className="font-bold text-sm text-[#0f172a] dark:text-white">
                  Best Coordinator of the Month
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  Awarded at Brototype for leadership, architectural discipline, and peer code reviews across mobile engineering teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal Lightbox */}
        {selectedCert && (
          <div
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white dark:bg-slate-900 border border-white/80 dark:border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/20 transition-colors z-10"
                aria-label="Close modal"
              >
                <XIcon size={18} />
              </button>

              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-5">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] dark:text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {selectedCert.issuer} · {selectedCert.date}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 max-w-xl">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#6366f1] text-white hover:bg-[#4f46e5] shadow-xs transition-transform hover:scale-105"
                    >
                      Verify Credential <ArrowUpRightIcon size={12} />
                    </a>
                  )}
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    Open Original <ArrowUpRightIcon size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 8. CONTACT & CONNECT (Liquid Glass Container) */}
      <section id="contact" className="liquid-glass-container p-6 sm:p-10 lg:p-12 scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-center">
          <div>
            <SectionHeading
              eyebrow="LET'S CONNECT"
              title={
                <>
                  Have a project in mind?
                  <br />
                  Let’s build something amazing.
                </>
              }
              copy="I'm open to full-time engineering roles, founding contracts, and high-impact mobile/web products."
            />
            <div className="space-y-3.5 text-sm text-[#0f172a] dark:text-slate-200">
              <a
                className="flex items-center gap-3.5 p-3.5 rounded-2xl liquid-glass-card hover:text-[#6366f1] transition-colors"
                href="mailto:nadeerep.dev@gmail.com"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-[#6366f1] dark:text-[#a5b4fc] shadow-xs shrink-0">
                  <MailIcon size={18} />
                </span>
                <span className="font-medium text-xs sm:text-sm">nadeerep.dev@gmail.com</span>
              </a>
              <a
                className="flex items-center gap-3.5 p-3.5 rounded-2xl liquid-glass-card hover:text-[#6366f1] transition-colors"
                href="tel:+919207874848"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shadow-xs shrink-0">
                  <PhoneIcon size={18} />
                </span>
                <span className="font-medium text-xs sm:text-sm">+91 9207874848 (WhatsApp / Call)</span>
              </a>
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl liquid-glass-card">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-950/40 text-[#6366f1] dark:text-[#a5b4fc] shadow-xs shrink-0">
                  <MapPinIcon size={18} />
                </span>
                <span className="font-medium text-xs sm:text-sm">Kozhikode, Kerala · Open to relocation &amp; remote</span>
              </div>
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {[
              {
                name: "LinkedIn",
                handle: "in/nadeerep",
                icon: <LinkedinIcon size={20} className="text-[#0A66C2]" />,
                href: "https://www.linkedin.com/in/nadeerep",
              },
              {
                name: "GitHub",
                handle: "github.com/nadeerep07",
                icon: <GithubIcon className="w-5 h-5 text-[#24292e] dark:text-white" />,
                href: "https://github.com/nadeerep07",
              },
              {
                name: "Google Play Store",
                handle: "Dr Plus Team & Apps",
                icon: <GooglePlayIcon className="w-5 h-5" />,
                href: "https://play.google.com/store/apps/details?id=com.drplus.staff",
              },
              {
                name: "pub.dev Package",
                handle: "dirham_symbol",
                icon: (
                  <Image
                    src="/images/pub-dev-icon.png"
                    alt="pub.dev"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                ),
                href: "https://pub.dev/packages/dirham_symbol",
              },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="liquid-glass-card group p-5 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-xs bg-white dark:bg-slate-800 border border-white/80 dark:border-white/10 shrink-0">
                    {link.icon}
                  </span>
                  <div>
                    <strong className="block text-sm text-[#0f172a] dark:text-white">
                      {link.name}
                    </strong>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                      {link.handle}
                    </span>
                  </div>
                </div>
                <ArrowUpRightIcon
                  size={15}
                  className="text-slate-400 group-hover:text-[#6366f1] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col gap-3 px-4 py-8 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between border-t border-white/40 dark:border-white/5">
        <span>© {new Date().getFullYear()} Nadeer E P. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="mailto:nadeerep.dev@gmail.com" className="hover:text-[#6366f1] transition-colors">
            Email
          </a>
          <a href="https://github.com/nadeerep07" target="_blank" rel="noreferrer" className="hover:text-[#6366f1] transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nadeerep" target="_blank" rel="noreferrer" className="hover:text-[#6366f1] transition-colors">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
