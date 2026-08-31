"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Package, Copy, Check, ArrowUpRight, Send, Terminal } from "lucide-react"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+919207874848")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleEmailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=nadeerep.dev@gmail.com", "_blank")
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Mail size={13} /> Direct Connect
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Let's Build Something <span className="gradient-text-mint">Extraordinary</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Available for mobile engineering roles, full-stack architectures, and consultation.
          </p>
        </div>

        {/* Contact Bento */}
        <div className="grid md:grid-cols-12 gap-5">
          {/* Main Action Box - 7 cols */}
          <div className="md:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between border-emerald-500/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Response within 24 hours
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a direct inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Whether you're looking to launch a new mobile application, scale an existing platform, or recruit a senior Flutter developer — let's connect.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              <button
                onClick={handleEmailClick}
                className="w-full py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail size={15} />
                <span>Email nadeerep.dev@gmail.com</span>
              </button>

              <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl px-4 py-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Phone size={13} className="text-emerald-400" />
                  <span>+91 9207874848</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-emerald-400 text-xs font-mono transition-colors cursor-pointer flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Social Channels & Availability - 5 cols */}
          <div className="md:col-span-5 space-y-4">
            {/* Location & Status Card */}
            <div className="bento-card p-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Location & Relocation</p>
                  <p className="text-sm font-bold text-white">Kozhikode, Kerala, India</p>
                  <p className="text-xs text-emerald-400 font-medium mt-0.5">
                    Open to Relocation & Remote Globally
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://www.linkedin.com/in/nadeerep/"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card-hover p-4 flex flex-col items-center justify-center text-center group"
              >
                <Linkedin size={20} className="text-slate-400 group-hover:text-emerald-400 mb-1.5 transition-colors" />
                <span className="text-xs font-medium text-slate-200">LinkedIn</span>
              </a>

              <a
                href="https://github.com/nadeerep07"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card-hover p-4 flex flex-col items-center justify-center text-center group"
              >
                <Github size={20} className="text-slate-400 group-hover:text-white mb-1.5 transition-colors" />
                <span className="text-xs font-medium text-slate-200">GitHub</span>
              </a>

              <a
                href="https://pub.dev/packages/dirham_symbol"
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card-hover p-4 flex flex-col items-center justify-center text-center group"
              >
                <Package size={20} className="text-slate-400 group-hover:text-amber-400 mb-1.5 transition-colors" />
                <span className="text-xs font-medium text-slate-200">pub.dev</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
