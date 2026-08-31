"use client"

import { useEffect, useRef, useState } from "react"
import { Smartphone, Layers, Server, Cloud, ShieldCheck, Wrench, Terminal } from "lucide-react"

export function Skills() {
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

  const skillGroups = [
    {
      title: "Mobile & Flutter Web",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Flutter Web", "Android", "iOS", "Responsive & Adaptive UI", "Custom Widgets"],
    },
    {
      title: "State & Architecture",
      icon: Layers,
      skills: ["Riverpod", "BLoC", "Provider", "GetX", "Clean Architecture", "MVVM Pattern", "Dependency Injection"],
    },
    {
      title: "Backend & Microservices",
      icon: Server,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "gRPC", "Next.js", "Dio Interceptors", "JWT & RBAC"],
    },
    {
      title: "Cloud, Storage & DevOps",
      icon: Cloud,
      skills: ["Firebase (Auth, Firestore, FCM)", "AWS S3", "Hive (Local DB)", "GitHub Actions CI/CD", "Google Play Deployment"],
    },
    {
      title: "Payments & Mobile Security",
      icon: ShieldCheck,
      skills: ["Stripe Payments", "Tap Payments", "Razorpay", "iOS Keychain", "Android KeyStore", "TLS In Transit", "flutter_secure_storage"],
    },
    {
      title: "Testing & Tooling",
      icon: Wrench,
      skills: ["Unit Testing & Mocking", "Git & GitHub", "Postman", "Figma to Code", "Xcode", "Android Studio"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Terminal size={13} /> Technical Arsenal
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Skills & <span className="gradient-text-mint">Technologies</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Production-tested stack covering mobile clients, backend APIs, cloud, and security.
          </p>
        </div>

        {/* Skills Bento Matrix */}
        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {skillGroups.map((group, idx) => {
            const Icon = group.icon
            return (
              <div
                key={idx}
                className="bento-card-hover p-5 flex flex-col justify-between"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-200 border border-white/5 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
