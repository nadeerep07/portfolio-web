"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from "lucide-react"

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      id: "tathkarah",
      role: "Flutter Developer",
      type: "Full-time",
      company: "Tathkarah Travel & Tourism Pvt. Ltd.",
      location: "Kerala, India (Remote)",
      duration: "Feb 2026 – Present",
      isCurrent: true,
      tagline: "Admin & Agent Console for Kuwait-based Travel Booking Platform (GCC & Egypt)",
      highlights: [
        "Leading a from-scratch rebuild of the enterprise agent console on MVVM & modular architecture, replacing redundant per-screen pagination and filtering logic across business modules with an extensible, config-driven schema engine dynamically rendering master-data entities from shared definitions.",
        "Built a reusable report and export engine for the live console, eliminating ad-hoc per-screen export implementations.",
        "Rebuilt the customer-facing booking web app in Next.js, migrating from Vue.js and connecting to microservices over gRPC with Tap Payments checkout.",
        "Integrated REST APIs with Dio interceptors for automatic token refresh, smart retry, and centralized error handling.",
      ],
      skills: ["Flutter Web", "Dart", "Provider", "MVVM", "Dio", "REST", "gRPC", "Next.js", "Tap Payments", "Microservices"],
    },
    {
      id: "dr-plus",
      role: "Founding Mobile Engineer",
      type: "Contract",
      company: "Dr Plus Star Home Healthcare",
      location: "Dubai, UAE (Hybrid)",
      duration: "July 2025 – July 2026",
      isCurrent: false,
      tagline: "Sole Engineer: Patient App, Node.js Backend, Admin Console & Cloud Infrastructure",
      highlights: [
        "Took the product from first commit to live on Google Play and App Store in under 3 months as sole engineer, maintaining 34 production releases since.",
        "Architected the Flutter client on Riverpod & MVVM — 28 screens across 21 feature modules covering onboarding, service booking, prescription upload, checkout, and live tracking.",
        "Built the complete Node.js & MongoDB backend and admin panel: REST APIs, JWT authentication, and role-based access control (RBAC) across admin, doctor, and patient roles.",
        "Implemented Stripe payments end-to-end alongside Firebase Cloud Messaging and AWS S3 storage, securing patient data with hardware-backed encryption (iOS Keychain / Android KeyStore).",
        "Unit-tested cart & checkout state management with mocked storage layers, gated by a GitHub Actions CI/CD pipeline for every store release.",
      ],
      skills: ["Flutter", "Dart", "Riverpod", "Node.js", "Express", "MongoDB", "Stripe", "AWS S3", "Firebase", "GitHub Actions", "Keychain/KeyStore"],
    },
    {
      id: "brototype",
      role: "Mobile App Development Trainee",
      type: "Bootcamp",
      company: "Brototype",
      location: "Calicut, Kerala",
      duration: "2024 – 2025",
      isCurrent: false,
      tagline: "Intensive Mobile Engineering & Clean Architecture Program",
      highlights: [
        "Completed an intensive hands-on Flutter development curriculum, mastering Clean Architecture, BLoC, and Provider state management.",
        "Engineered and shipped QuickPitch (Two-sided marketplace) and InvoZoyo (Offline POS).",
        "Awarded 'Best Coordinator of the Month' for leadership and peer code review.",
      ],
      skills: ["Flutter", "Dart", "BLoC", "Provider", "Firebase", "Hive DB", "Razorpay", "Clean Architecture"],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Briefcase size={13} /> Proven Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Work <span className="gradient-text-mint">Experience</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Production engineering across Kuwait, Dubai (UAE), and India.
          </p>
        </div>

        {/* Experience Bento Cards */}
        <div ref={ref} className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`bento-card-hover p-6 sm:p-7 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-5 border-b border-white/5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
                      {exp.type}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        Present
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-emerald-400">
                    {exp.company}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 italic">
                    {exp.tagline}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 flex-shrink-0">
                  <div className="inline-flex items-center gap-1.5 font-mono text-slate-200 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    <Calendar size={12} className="text-emerald-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-slate-400">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="py-5 space-y-2.5">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
