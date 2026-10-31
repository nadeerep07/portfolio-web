"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { ArrowUpRightIcon, MenuIcon, XIcon } from "./icons";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Trigger floating capsule dock when scrolling past 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = ["home", "about", "services", "work", "process", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") || href === "/") {
      e.preventDefault();
      const targetId = href === "/" ? "home" : href.replace("#", "");

      if (targetId === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navOffset = 84;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }
      }

      window.history.pushState(null, "", href === "/" ? "#home" : href);
      setActiveSection(targetId);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="w-full relative z-40 mb-6 sm:mb-10">
      {/* Height-reserving placeholder in document flow so content never jumps on scroll */}
      <div className="w-full relative min-h-[56px]">
        {/* State 1: At rest (unscrolled) - Full width card header */}
        {!isScrolled ? (
          <motion.div
            key="unscrolled-nav"
            layoutId="navbar-pill"
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="w-full flex items-center justify-between pb-4 border-b border-slate-200/40 dark:border-white/5"
          >
            {/* Left: Brand Avatar & Name */}
            <motion.div layoutId="nav-left-brand" className="flex items-center gap-2.5 shrink-0 py-1">
              <Link
                href="/"
                onClick={(e) => handleScrollTo(e, "#home")}
                className="flex items-center gap-2.5 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] font-extrabold flex items-center justify-center text-xs shadow-xs transition-transform group-hover:scale-105">
                  N
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#0f172a] dark:text-white leading-tight">
                    Nadeer E P
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                    Flutter &amp; Full-Stack
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Center: Navigation Links Pill */}
            <motion.div
              layoutId="nav-center-links"
              className="hidden lg:flex items-center gap-1 text-xs bg-white/70 dark:bg-slate-800/60 p-1.5 rounded-full border border-white/80 dark:border-white/10 shadow-xs"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`relative px-3 sm:px-3.5 py-1.5 rounded-full font-medium transition-all ${
                      isActive
                        ? "bg-white dark:bg-slate-800 text-[#0f172a] dark:text-white font-semibold shadow-xs"
                        : "text-slate-600 dark:text-slate-300 hover:text-[#0f172a] dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    )}
                  </Link>
                );
              })}
            </motion.div>

            {/* Right: Theme Toggle, GitHub & Let's Talk CTA */}
            <motion.div layoutId="nav-right-actions" className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <ThemeToggle />

              <a
                href="https://github.com/nadeerep07"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full text-[#0f172a] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              <a
                href="mailto:nadeerep.dev@gmail.com"
                className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-semibold bg-[#0f172a] text-white dark:bg-white dark:text-[#0f172a] hover:bg-black dark:hover:bg-slate-100 shadow-xs transition-all hover:scale-102 shrink-0"
              >
                Let&apos;s Talk <ArrowUpRightIcon size={12} />
              </a>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-full text-slate-800 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
              </button>
            </motion.div>

            {/* Mobile Dropdown Drawer for Unscrolled Header */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden absolute top-14 inset-x-2 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/80 dark:border-white/15 rounded-3xl p-5 flex flex-col gap-2.5 shadow-2xl"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    href={link.href}
                    className={`text-sm py-2 px-3 rounded-xl transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    href="mailto:nadeerep.dev@gmail.com"
                    className="w-full text-center py-2.5 rounded-full text-xs font-semibold bg-[#0f172a] text-white dark:bg-white dark:text-[#0f172a]"
                  >
                    Let&apos;s Talk ↗
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          /* State 2: When scrolled past 50px - Merged floating capsule dock stuck to top */
          <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 w-full flex justify-center pointer-events-none px-3">
            <motion.div
              key="scrolled-floating-nav"
              layoutId="navbar-pill"
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="pointer-events-auto flex items-center justify-between w-auto max-w-[94vw] bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-white/90 dark:border-white/15 rounded-full px-2.5 sm:px-4 py-1.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.22)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] gap-2 sm:gap-4"
            >
              {/* Left: Brand Avatar & Name */}
              <motion.div layoutId="nav-left-brand" className="flex items-center gap-2 shrink-0 py-0.5">
                <Link
                  href="/"
                  onClick={(e) => handleScrollTo(e, "#home")}
                  className="flex items-center gap-2 group"
                >
                  <div className="w-7 h-7 rounded-full bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] font-extrabold flex items-center justify-center text-xs shadow-xs transition-transform group-hover:scale-105">
                    N
                  </div>
                  <span className="text-xs font-bold text-[#0f172a] dark:text-white leading-tight">
                    Nadeer E P
                  </span>
                </Link>
              </motion.div>

              {/* Center: Navigation Links */}
              <motion.div layoutId="nav-center-links" className="hidden lg:flex items-center gap-1 text-xs">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`relative px-3 py-1.5 rounded-full font-medium transition-all ${
                        isActive
                          ? "bg-white dark:bg-slate-800 text-[#0f172a] dark:text-white font-semibold shadow-xs"
                          : "text-slate-600 dark:text-slate-300 hover:text-[#0f172a] dark:hover:text-white"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                      )}
                    </Link>
                  );
                })}
              </motion.div>

              {/* Right: Theme Toggle, GitHub & Let's Talk CTA */}
              <motion.div layoutId="nav-right-actions" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <ThemeToggle />

                <a
                  href="https://github.com/nadeerep07"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-full text-[#0f172a] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

                <a
                  href="mailto:nadeerep.dev@gmail.com"
                  className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0f172a] text-white dark:bg-white dark:text-[#0f172a] hover:bg-black dark:hover:bg-slate-100 shadow-xs transition-all hover:scale-102 shrink-0"
                >
                  Let&apos;s Talk <ArrowUpRightIcon size={11} />
                </a>

                {/* Mobile Hamburger Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-1.5 rounded-full text-slate-800 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <XIcon size={16} /> : <MenuIcon size={16} />}
                </button>
              </motion.div>
            </motion.div>

            {/* Mobile Dropdown Drawer for Scrolled Floating Dock */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto absolute top-14 inset-x-2 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/80 dark:border-white/15 rounded-3xl p-5 flex flex-col gap-2.5 shadow-2xl"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    href={link.href}
                    className={`text-sm py-2 px-3 rounded-xl transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    href="mailto:nadeerep.dev@gmail.com"
                    className="w-full text-center py-2.5 rounded-full text-xs font-semibold bg-[#0f172a] text-white dark:bg-white dark:text-[#0f172a]"
                  >
                    Let&apos;s Talk ↗
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
