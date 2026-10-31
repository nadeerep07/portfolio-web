"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, DownloadIcon } from "./icons";

export function Hero() {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workEl = document.getElementById("work");
    if (workEl) {
      const navOffset = 84;
      const elementPosition = workEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#work");
    }
  };

  return (
    <section
      id="home"
      className="relative w-full pt-8 pb-10 flex flex-col justify-center"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Typography & CTAs (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start z-10 pl-2 sm:pl-4">
          {/* Greeting label (Simple purple text matching reference) */}
          <span className="text-[#6366f1] dark:text-[#a5b4fc] text-xs font-bold tracking-widest uppercase mb-3">
            HELLO, I&apos;M
          </span>

          {/* Name (Deep rich black typography matching reference) */}
          <h1 className="text-5xl sm:text-6xl lg:text-[66px] font-extrabold tracking-tight text-[#0f172a] dark:text-white leading-[1.05] mb-2.5">
            Nadeer E P
          </h1>

          {/* Subtitle (Periwinkle/Indigo gradient matching reference) */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#93c5fd] bg-clip-text text-transparent leading-tight mb-5">
            Flutter &amp; Full-Stack Engineer
          </h2>

          {/* Description */}
          <p className="text-[15px] sm:text-base text-[#475569] dark:text-[#94a3b8] leading-relaxed max-w-md mb-8 font-normal">
            Sole engineer behind a production healthcare platform live on both app stores.
            I craft intuitive mobile apps, robust APIs, and high-performance full-stack web applications.
          </p>

          {/* Primary Action Buttons (Solid black pill + white frosted pill) */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="#work"
              onClick={handleScrollToWork}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold bg-[#0f172a] text-white dark:bg-white dark:text-[#0f172a] hover:bg-black dark:hover:bg-slate-100 shadow-md hover:shadow-lg transition-all hover:scale-102"
            >
              View My Work <ArrowUpRightIcon size={14} />
            </Link>

            <a
              href="/Nadeer_EP_Flutter_Developer_Resume.pdf"
              download="Nadeer_EP_Flutter_Developer_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold bg-white/85 dark:bg-slate-800/85 border border-white dark:border-white/10 text-[#0f172a] dark:text-white hover:bg-white dark:hover:bg-slate-700 shadow-xs hover:shadow-md transition-all hover:scale-102"
            >
              Download CV <DownloadIcon size={14} />
            </a>
          </div>

          {/* Deployment destinations */}
          <div className="flex flex-col gap-3 pt-5 border-t border-slate-300/40 dark:border-white/5 w-full max-w-xl">
            <span className="text-sm font-semibold text-[#94a3b8] uppercase tracking-[0.16em]">
              Deployed On
            </span>
            <div className="flex flex-wrap items-center gap-8 text-base font-semibold text-[#64748b] dark:text-[#94a3b8]">
              <span className="flex items-center gap-2 hover:text-[#0f172a] dark:hover:text-white transition-colors">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-6 w-6 shrink-0">
                  <path d="M2.1 1.5 10.5 10 14.4 6.1 3.7 1.1c-.6-.3-1.2-.1-1.6.4Z" fill="#34a853" />
                  <path d="M2.1 18.5 10.5 10l3.9 3.9-10.7 5c-.6.3-1.2.1-1.6-.4Z" fill="#fbbc04" />
                  <path d="M2.1 1.5c-.2.3-.3.7-.3 1.2v14.6c0 .5.1.9.3 1.2L10.5 10 2.1 1.5Z" fill="#4285f4" />
                  <path d="m14.4 6.1-3.9 3.9 3.9 3.9 3.6-1.7c1-.5 1-1.9 0-2.4l-3.6-1.7Z" fill="#ea4335" />
                </svg>
                Google Play
              </span>
              <span className="flex items-center gap-2 hover:text-[#0f172a] dark:hover:text-white transition-colors">
                <span className="text-sky-500 text-xl leading-none"></span> App Store
              </span>
              <span className="flex items-center gap-1.5 hover:text-[#0f172a] dark:hover:text-white transition-colors">
                <img
                  src="/images/pub-dev-logo-dark.png"
                  alt="pub.dev"
                  className="h-8 w-auto object-contain dark:hidden"
                />
                <img
                  src="/images/pub-dev-logo.png"
                  alt="pub.dev"
                  className="hidden h-8 w-auto object-contain dark:block"
                />
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Full-Scale 3D Curved Rhombus Composition (6 cols) */}
        <div className="lg:col-span-6 flex justify-center items-center relative min-h-[680px]">
          <div className="relative w-full max-w-[620px] h-[680px] flex items-center justify-center">
            <div>
            {/* 1. Luminous Ambient Lavender/Peach Halo behind head & neck */}
            <div className="absolute top-[22%] right-[16%] w-80 h-80 rounded-full bg-gradient-to-tr from-violet-300/45 via-purple-200/35 to-rose-100/30 dark:from-violet-500/25 dark:via-purple-500/15 dark:to-cyan-400/15 blur-3xl pointer-events-none -z-10" />

            {/* 2. THE THICK 3D EXTROUDED GLASS TUBE (Curved Rhombus matching Pinterest Reference 1:1) */}
            <svg
              viewBox="0 0 460 560"
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0 opacity-55 dark:opacity-35 transition-opacity duration-700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 3D Cylindrical Glass Tube Gradient */}
                <linearGradient id="glassTubeStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="20%" stopColor="#ffffff" stopOpacity="0.75" />
                  <stop offset="45%" stopColor="#dbeafe" stopOpacity="0.3" />
                  <stop offset="70%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
                </linearGradient>

                {/* Soft Glass Glow & Drop Shadow */}
                <filter id="glassTubeFilter" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#a78bfa" floodOpacity="0.06" />
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#ffffff" floodOpacity="0.6" />
                </filter>
              </defs>

              {/* Curved rhombus glass frame behind the portrait */}
              <path
                d="M 126,92 C 145,66 175,54 210,60 L 365,96 C 397,103 414,131 407,164 L 367,391 C 360,429 337,459 304,481 C 250,516 178,522 120,504 C 83,492 65,464 72,427 L 102,157 C 106,128 113,105 126,92 Z"
                fill="none"
                stroke="url(#glassTubeStroke)"
                strokeWidth="8"
                filter="url(#glassTubeFilter)"
              />
            </svg>

            {/* 3. The Portrait: TALL, PROMINENT & NATURAL (Authentic Light Shirt Cutout) */}
            <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none pb-8">
              <Image
                src="/images/nadeer_light_cutout_clean.png"
                alt="Nadeer E P"
                width={520}
                height={580}
                priority
                className="w-auto select-none max-h-[100%] scale-[1.02] origin-bottom drop-shadow-none dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.05]"
              />
              {/* Subtle bottom fade directly on canvas */}
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[var(--bg-canvas)] to-transparent pointer-events-none opacity-80" />
            </div>

            {/* 4. Top-Right Floating Card: 1+ Years of Experience */}
            <div className="absolute top-4 -right-2 sm:-right-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white dark:border-white/10 rounded-[1.7rem] px-7 py-6 shadow-xl min-w-[170px]">
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold text-[#0f172a] dark:text-white leading-tight">
                  1+
                </span>
                <span className="text-[11px] font-medium text-[#64748b] dark:text-[#94a3b8] leading-tight">
                  Years of
                </span>
                <span className="text-[11px] font-medium text-[#64748b] dark:text-[#94a3b8] leading-tight">
                  Experience
                </span>
              </div>
            </div>

            {/* 5. Bottom-Right Floating Card: Projects Shipped / 7+ */}
            <div className="absolute bottom-8 -right-2 sm:-right-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white dark:border-white/10 rounded-[1.7rem] px-7 py-6 shadow-xl min-w-[285px]">
              <div className="text-[10px] font-semibold text-[#64748b] dark:text-[#94a3b8] mb-0.5">
                Projects Shipped
              </div>
              <div className="text-base font-extrabold text-[#0f172a] dark:text-white mb-2">
                7+
              </div>
              {/* Purple Sparkline SVG matching reference curve */}
              <svg
                className="w-full h-10 overflow-visible"
                viewBox="0 0 110 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 20 C 15 20, 25 10, 40 14 C 55 18, 70 4, 85 10 C 95 14, 102 2, 108 2"
                  stroke="#818cf8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="108" cy="2" r="3" fill="#6366f1" />
              </svg>
            </div>

            {/* 6. Floating 3D Iridescent Glass Sphere with Star (Left Edge) */}
            <div className="absolute bottom-[23%] -left-3 sm:-left-5 z-20 w-20 h-20 rounded-full glass-sphere-3d flex items-center justify-center shadow-xl">
              <span className="text-[#7c3aed] text-2xl font-bold drop-shadow-xs select-none">
                ✦
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
