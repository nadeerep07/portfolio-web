"use client"

import { useEffect, useRef, useState } from "react"
import { Smartphone, Globe, ShieldCheck, Server, Check, ArrowRight, Zap } from "lucide-react"

export function About() {
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
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const capabilities = [
    {
      icon: Smartphone,
      title: "Mobile Architecture & State",
      description:
        "Building modular, scalable Flutter applications across iOS & Android using Riverpod, BLoC, and MVVM Clean Architecture with strict separation of concerns.",
      tags: ["Riverpod", "BLoC", "Clean Architecture", "MVVM"],
    },
    {
      icon: Server,
      title: "Backend & Microservices",
      description:
        "Designing high-throughput Node.js & Express APIs, MongoDB databases, gRPC service bridges, and REST clients with Dio token-refresh interceptors.",
      tags: ["Node.js", "Express", "MongoDB", "gRPC", "Dio"],
    },
    {
      icon: Globe,
      title: "Flutter Web & Next.js",
      description:
        "Developing config-driven enterprise consoles on Flutter Web and customer-facing booking frontends in Next.js with Tap Payments checkout.",
      tags: ["Flutter Web", "Next.js", "Config-Driven", "Tap Payments"],
    },
    {
      icon: ShieldCheck,
      title: "DevOps & Mobile Security",
      description:
        "Automating release gates with GitHub Actions CI/CD, managing AWS S3 infrastructure, and securing patient data with iOS Keychain & Android KeyStore.",
      tags: ["GitHub Actions", "AWS S3", "Keychain / KeyStore", "TLS"],
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Zap size={13} /> Engineering Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Full-Cycle <span className="gradient-text-mint">Product Engineering</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            From system architecture, database design, and API integrations to polished mobile & web clients.
          </p>
        </div>

        {/* Capabilities 4-Grid */}
        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <div
                key={idx}
                className="bento-card-hover p-5 flex flex-col justify-between"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cap.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-white/5">
                  {cap.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
