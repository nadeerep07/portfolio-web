"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin, Package, Sparkles, ArrowUpRight } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ["home", "experience", "projects", "skills", "certifications", "contact"]
      const scrollPosition = window.scrollY + 220

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", id: "home", label: "Overview" },
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#projects", id: "projects", label: "Case Studies" },
    { href: "#skills", id: "skills", label: "Skills" },
    { href: "#certifications", id: "certifications", label: "Credentials" },
    { href: "#contact", id: "contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? "bg-[#0c0e14]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80"
            : "bg-[#0f121a]/60 backdrop-blur-md border border-white/5"
        }`}
      >
        {/* Brand Tag */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs group-hover:bg-emerald-500 group-hover:text-black transition-all">
            N
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              Nadeer E P
            </span>
            <span className="hidden sm:inline-block text-[11px] text-gray-500 font-mono">
              / flutter engineer
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right CTA / Socials */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://github.com/nadeerep07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-gray-400 hover:text-white rounded-lg transition-colors"
            title="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/nadeerep/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-gray-400 hover:text-emerald-400 rounded-lg transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://pub.dev/packages/dirham_symbol"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-gray-400 hover:text-emerald-400 rounded-lg transition-colors"
            title="pub.dev"
          >
            <Package size={16} />
          </a>
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-black shadow-sm transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-gray-400 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-[#0c0f17]/95 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl md:hidden space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-xs font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
              <a href="https://github.com/nadeerep07" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/nadeerep/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-400">
                <Linkedin size={16} />
              </a>
              <a href="https://pub.dev/packages/dirham_symbol" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-400">
                <Package size={16} />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500 text-black"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
