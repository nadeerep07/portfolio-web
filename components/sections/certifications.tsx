"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award, ExternalLink, GraduationCap, Trophy } from "lucide-react"

export function Certifications() {
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

  const credentials = [
    {
      id: "google-play",
      title: "Google Play Store Listing Certificate",
      issuer: "Google Play Academy",
      date: "October 2025",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google_play_cerficate-OTsZQORvYaCLOLdQU7UEZ3rJnhhA3T.png",
      link: "https://www.credential.net/9af1bfe0-3865-4468-bee5-2554813637be",
      badge: "Google Certified",
    },
    {
      id: "brototype-award",
      title: "Mobile App Development & Best Coordinator Award",
      issuer: "Brototype, Calicut",
      date: "2024 – 2025",
      image: "/coordinator.png",
      link: "#",
      badge: "Leadership Award",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Manipal University Jaipur (Online)",
      period: "Mar 2026 – 2029 (Expected)",
      status: "In Progress",
    },
    {
      degree: "Mobile App Development using Flutter",
      institution: "Brototype, Calicut",
      period: "2024 – 2025",
      status: "Completed",
    },
  ]

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Award size={13} /> Qualifications
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Certifications & <span className="gradient-text-mint">Education</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Verified credentials, leadership achievements, and academics.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-12 gap-5 items-start">
          {/* Left Column: Certifications (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
              <Award size={14} className="text-emerald-400" />
              <span>Verified Certifications</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((item, idx) => (
                <div
                  key={item.id}
                  className={`bento-card-hover p-4 flex flex-col justify-between transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-900 mb-3 border border-white/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-mono bg-black/60 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-emerald-400 font-mono">{item.issuer}</p>
                    <p className="text-[10px] text-slate-400">{item.date}</p>
                  </div>

                  {item.link && item.link !== "#" && (
                    <div className="pt-3 mt-2 border-t border-white/5">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:underline"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
              <GraduationCap size={14} className="text-emerald-400" />
              <span>Academic Education</span>
            </h3>

            <div className="bento-card p-5 space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="pb-4 last:pb-0 border-b last:border-b-0 border-white/5"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300">
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-400 font-medium">{edu.institution}</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
