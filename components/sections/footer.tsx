import Link from "next/link"
import { Github, Linkedin, Package, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 border-t border-white/5 bg-[#050608] text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-bold text-slate-200">Nadeer E P</span>
            <span>—</span>
            <span>Flutter & Full-Stack Engineer</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nadeerep07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nadeerep/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://pub.dev/packages/dirham_symbol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              pub.dev
            </a>
            <a
              href="mailto:nadeerep.dev@gmail.com"
              className="hover:text-emerald-400 transition-colors"
            >
              Email
            </a>
          </div>

          <div>
            <span>© {currentYear} Nadeer E P</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
