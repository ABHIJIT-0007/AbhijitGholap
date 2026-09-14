import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-12 px-5 sm:px-8 md:px-12 bg-[#0D0D0D] overflow-hidden">
      {/* Background Architectural Canvas & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Large Architectural Hero Image with Dramatic Vignette & Texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out filter contrast-125 brightness-90"
          style={{
            backgroundImage: `url('./assets/bungalow-hero.jpg')`,
          }}
        />
        {/* Architectural Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-[#0D0D0D]" />

        {/* Structural Grid Hairlines */}
        <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full border-r border-white/[0.03] first:border-l pointer-events-none"
            />
          ))}
        </div>
      </div>

      {/* Hero Header Top Meta */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 border-b border-white/10 pb-4">
        <div className="flex items-center space-x-3">
          <span className="text-[#B85D3B]">●</span>
          <span>B.Arch Portfolio • 2024–2026</span>
        </div>
        <div className="flex items-center space-x-4 text-neutral-400">
          <span>Navi Mumbai, India</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Mumbai University</span>
        </div>
      </div>

      {/* Main Dramatic Hero Title & Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 flex flex-col items-start">
        {/* Subtitle Pill */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 border border-white/15 bg-white/[0.03] backdrop-blur-sm">
          <span className="w-2 h-[1px] bg-[#B85D3B]"></span>
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-neutral-300">
            {personalInfo.title}
          </span>
        </div>

        {/* Grand Typography Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.92] mb-8 font-sans">
          Abhijit
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
            Gholap
          </span>
        </h1>

        {/* Introduction Quote */}
        <div className="max-w-2xl border-l-2 border-[#B85D3B] pl-5 sm:pl-6 my-4">
          <p className="text-base sm:text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
            "{personalInfo.heroIntro}"
          </p>
        </div>

        {/* Two Primary Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#B85D3B] hover:text-white"
          >
            <span>View Portfolio</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            <span>About Me</span>
          </a>
        </div>
      </div>

      {/* Hero Bottom Meta & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-6 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
          <span>06 Portfolio Works</span>
          <span>•</span>
          <span>01 Professional Collaboration</span>
          <span>•</span>
          <span>Working Drawings</span>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#work"
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>Scroll to Explore</span>
          <div className="w-5 h-8 rounded-full border border-neutral-600 flex items-start justify-center p-1">
            <span className="w-1 h-2 bg-[#B85D3B] rounded-full animate-bounce"></span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
