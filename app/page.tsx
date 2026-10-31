import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PortfolioSections } from "@/components/portfolio-sections";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start p-3 sm:p-6 lg:p-10 overflow-x-hidden selection:bg-violet-500/20 selection:text-violet-600 dark:selection:text-violet-300">
      {/* Outer Ethereal Silk / Pearlescent Background Waves */}
      <div className="liquid-glass-bg fixed inset-0 pointer-events-none -z-20 transition-colors duration-700" />
      
      {/* Dynamic 3D Silk Light Blooms in Corners */}
      <div className="liquid-orb liquid-orb-violet fixed top-[-12rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="liquid-orb liquid-orb-blue fixed bottom-[-14rem] left-[-8rem] h-[32rem] w-[32rem] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* The Central Floating Glass Canvas Container (Matching the Tablet Frame in Pinterest Reference) */}
      <main className="w-full max-w-[1380px] relative p-4 sm:p-8 lg:p-10 transition-colors duration-700">
        {/* Glass card background layer (Allows fixed descendants to stick to viewport window without containing-block traps) */}
        <div className="absolute inset-0 bg-white/42 dark:bg-slate-900/42 backdrop-blur-3xl border border-white/70 dark:border-white/10 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-[0_30px_90px_-20px_rgba(100,115,150,0.18)] dark:shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7)] pointer-events-none -z-10 transition-colors duration-700" />

        {/* Morphing Navbar: Sits naturally in card header at rest; floats as compact capsule when scrolling */}
        <Navbar />

        <Hero />
        <PortfolioSections />
      </main>
    </div>
  );
}
