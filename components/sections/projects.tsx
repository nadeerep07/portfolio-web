"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Package, Copy, Check, Star, Sparkles, Layers, ArrowUpRight, Smartphone, Bot, Database } from "lucide-react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [copiedPkg, setCopiedPkg] = useState(false)
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

  const copyPackageCommand = () => {
    navigator.clipboard.writeText("flutter pub add dirham_symbol")
    setCopiedPkg(true)
    setTimeout(() => setCopiedPkg(false), 2000)
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Layers size={13} /> Selected Engineering Projects
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Featured <span className="gradient-text-mint">Projects & Open Source</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Flagship applications built from the ground up, open-source packages, and full-stack software.
          </p>
        </div>

        {/* Asymmetric Bento Showcase Grid */}
        <div
          ref={ref}
          className={`grid md:grid-cols-12 gap-5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Bento 1: Dr Plus Star Home Healthcare (Dubai) - 7 cols (Flagship Sole Engineered Product) */}
          <div className="md:col-span-7 bento-card-hover p-6 sm:p-7 flex flex-col justify-between border-emerald-500/30">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                  Sole Engineer 0-to-1 Launch · 34+ Releases
                </span>
                <span className="text-xs font-mono text-slate-400">Dubai, UAE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Dr Plus — Home Healthcare Platform
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Designed and built the entire Dubai healthcare ecosystem as sole engineer from first commit to live in under 3 months. Architected the Flutter client on <strong className="text-white">Riverpod & MVVM</strong> (28 screens across 21 modules), built the <strong className="text-white">Node.js & MongoDB</strong> backend with RBAC, integrated Stripe payments, AWS S3 storage, FCM push notifications, and hardware-backed keystore security.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Flutter", "Riverpod", "MVVM", "Node.js", "Express", "MongoDB", "Stripe", "AWS S3", "CI/CD"].map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold transition-all"
              >
                <span>Google Play</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium border border-white/10 transition-all"
              >
                <span>Apple App Store</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Bento 2: dirham_symbol on pub.dev - 5 cols */}
          <div className="md:col-span-5 bento-card-hover p-6 sm:p-7 flex flex-col justify-between border-amber-500/30">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold flex items-center gap-1">
                  <Star size={11} className="fill-amber-400 text-amber-400" />
                  160/160 Pub Points
                </span>
                <Package size={18} className="text-amber-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                dirham_symbol — Flutter Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Open-source package published on pub.dev for standardized UAE Dirham (AED) currency presentation with full documentation, tests, example code, and strict null safety.
              </p>

              {/* Install Code Pill */}
              <div className="flex items-center justify-between bg-black/40 border border-white/10 rounded-lg px-3 py-2 font-mono text-xs text-slate-300 mb-4">
                <span className="truncate">flutter pub add dirham_symbol</span>
                <button
                  onClick={copyPackageCommand}
                  className="text-slate-400 hover:text-white ml-2 p-1 cursor-pointer"
                  title="Copy command"
                >
                  {copiedPkg ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <a
                href="https://pub.dev/packages/dirham_symbol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:underline"
              >
                <span>View on pub.dev</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://github.com/nadeerep07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Bento 3: QuickPitch Marketplace - 4 cols */}
          <div className="md:col-span-4 bento-card-hover p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold">
                  50+ Screens Architecture
                </span>
                <Smartphone size={16} className="text-purple-400" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                QuickPitch — Marketplace
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Two-sided service marketplace with real-time bidding on Firestore streams, Google Maps radius discovery, and automated Razorpay settlement.
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {["Flutter", "BLoC", "Firebase", "Google Maps", "Razorpay"].map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <a
                href="https://play.google.com/store/apps/details?id=com.quickpitch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:underline"
              >
                <span>Play Store</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://github.com/nadeerep07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Bento 4: InvoZoyo Offline POS - 4 cols */}
          <div className="md:col-span-4 bento-card-hover p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                  Offline-First Hive DB
                </span>
                <Database size={16} className="text-emerald-400" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                InvoZoyo — Offline POS
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Retail billing and inventory system engineered on local Hive database for zero-latency offline operation with instant PDF invoice generation.
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {["Flutter", "Dart", "Hive DB", "PDF Generation", "fl_chart"].map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <a
                href="https://play.google.com/store/apps/details?id=com.zoyo.bathware"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:underline"
              >
                <span>Play Store</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://github.com/nadeerep07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Bento 5: InterviewMind Pro - 4 cols */}
          <div className="md:col-span-4 bento-card-hover p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-sky-500/15 text-sky-300 border border-sky-500/30 font-semibold">
                  AI & Full-Stack
                </span>
                <Bot size={16} className="text-sky-400" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                InterviewMind Pro
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Full-stack platform generating customized interview questionnaires with AI-driven response analysis and real-time skill grading.
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {["Next.js", "Express.js", "MongoDB", "AI Analysis", "JWT Auth"].map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <a
                href="https://interview-mind-pro.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:underline"
              >
                <span>Live Demo</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://github.com/nadeerep07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
