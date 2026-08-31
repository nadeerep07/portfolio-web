"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { 
  ArrowUpRight, 
  MapPin, 
  Sparkles, 
  Briefcase, 
  CheckCircle2,
  Layers,
  Award,
  Globe,
  Code2,
  Terminal,
  ShieldCheck
} from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stackPills = [
    "Flutter",
    "Dart",
    "Riverpod",
    "BLoC",
    "Next.js",
    "Node.js",
    "gRPC",
    "Stripe",
    "AWS S3",
    "CI/CD",
  ]

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center pt-28 pb-16 overflow-hidden radial-spotlight"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 hairline-grid opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Hero Text (7 cols) */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open to relocation & remote roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Flutter Engineer building <span className="gradient-text-mint">production</span> mobile & web platforms.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                Hi, I'm <strong className="text-white">Nadeer E P</strong> — architecting apps from 0 to scale.
              </p>
            </div>

            {/* Subcopy */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Sole engineer who built <span className="text-white font-medium">Dr Plus</span> (Dubai healthcare platform live on Google Play & App Store in &lt;3 months with 34+ releases). Currently working as a full-time Flutter Developer at <span className="text-white font-medium">Tathkarah</span> contributing to enterprise travel console & Next.js systems. Author of <span className="text-emerald-400 font-mono">dirham_symbol</span> on pub.dev (160/160 pts).
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span>View Projects</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="#experience"
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5"
              >
                <Briefcase size={15} className="text-emerald-400" />
                <span>Work Experience</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 font-medium text-xs sm:text-sm transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Tech stack pills ticker */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-slate-400">
                <Terminal size={13} className="text-emerald-400" />
                <span>Core Stack & Architecture:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stackPills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md text-xs font-mono text-slate-300 bg-white/5 border border-white/5"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bento Snapshot (5 cols) */}
          <div
            className={`lg:col-span-5 grid grid-cols-2 gap-3 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Bento 1: Avatar Profile Card (Full width top) */}
            <div className="col-span-2 bento-card p-4 flex items-center gap-4 border-emerald-500/20">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-500/40 flex-shrink-0">
                <Image
                  src="/images/design-mode/nadeer_casual.png"
                  alt="Nadeer E P"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white truncate">Nadeer E P</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <p className="text-xs text-emerald-400 font-mono">Mobile & Flutter Web</p>
                <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin size={11} className="text-slate-400" />
                  <span>Kozhikode, Kerala · Open to Relocation</span>
                </p>
              </div>
            </div>

            {/* Bento 2: 34+ Releases */}
            <div className="bento-card-hover p-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                <Layers size={16} />
              </div>
              <div className="text-2xl font-extrabold text-white tracking-tight">34+</div>
              <div className="text-xs font-semibold text-slate-300">App Releases</div>
              <div className="text-[10px] text-slate-400">Play Store & App Store</div>
            </div>

            {/* Bento 3: 160/160 pub.dev */}
            <div className="bento-card-hover p-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
                <Award size={16} />
              </div>
              <div className="text-2xl font-extrabold text-amber-400 tracking-tight">160/160</div>
              <div className="text-xs font-semibold text-slate-300">Pub.dev Score</div>
              <div className="text-[10px] text-slate-400">dirham_symbol package</div>
            </div>

            {/* Bento 4: Sole Engineer Dr Plus */}
            <div className="bento-card-hover p-4">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-2">
                <Globe size={16} />
              </div>
              <div className="text-2xl font-extrabold text-white tracking-tight">Dr Plus</div>
              <div className="text-xs font-semibold text-slate-300">Dubai Healthcare</div>
              <div className="text-[10px] text-slate-400">Sole Engineer 0-to-1</div>
            </div>

            {/* Bento 5: 0 to Production */}
            <div className="bento-card-hover p-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                <Code2 size={16} />
              </div>
              <div className="text-2xl font-extrabold text-emerald-400 tracking-tight">&lt;3 Months</div>
              <div className="text-xs font-semibold text-slate-300">0-to-Production</div>
              <div className="text-[10px] text-slate-400">Full end-to-end launch</div>
            </div>

            {/* Bento 6: Architecture Badge (Full width bottom) */}
            <div className="col-span-2 bento-card p-3.5 bg-gradient-to-r from-emerald-950/30 to-slate-900/40 border-emerald-500/15">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-mono text-emerald-400">
                  <ShieldCheck size={14} /> Clean Arch & MVVM
                </span>
                <span className="text-[11px] text-slate-400">Riverpod · Node.js · CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
