import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCV: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV }) => {
  return (
    <section id="about" className="relative w-full py-28 px-5 sm:px-8 md:px-12 bg-[#121212] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Number & Heading */}
        <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-4">
          <span className="font-mono text-xs text-[#B85D3B] tracking-[0.25em] uppercase">01 / Profile</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">About Me</h2>
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Portrait / Profile Visual */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden bg-neutral-900 border border-white/10">
              {/* Profile Image */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
                alt="Abhijit Gholap - Architecture Student"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

              {/* Architectural Label overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#111111]/80 backdrop-blur-md border border-white/10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">Abhijit Gholap</p>
                <p className="font-mono text-[11px] text-neutral-400">Architectural Designer • B.Arch</p>
              </div>
            </div>

            {/* Corner Decorative Crosshairs */}
            <div className="hidden sm:block absolute -top-3 -left-3 font-mono text-xs text-neutral-600">+</div>
            <div className="hidden sm:block absolute -bottom-3 -right-3 font-mono text-xs text-neutral-600">+</div>
          </div>

          {/* Column 2: Bio Narrative & Information Panel */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            <div>
              <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-[#B85D3B] mb-4">
                Architectural Statement
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-100 leading-snug">
                "{personalInfo.aboutBio}"
              </p>
            </div>

            {/* Architectural Information Panel */}
            <div className="bg-[#181818] border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Academic Credentials
                </span>
                <span className="text-[11px] font-mono text-[#B85D3B] bg-[#B85D3B]/10 px-2.5 py-0.5 border border-[#B85D3B]/30">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    Location
                  </span>
                  <span className="text-base text-white font-medium">{personalInfo.location}</span>
                </div>

                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    Degree
                  </span>
                  <span className="text-base text-white font-medium">{personalInfo.degree}</span>
                </div>

                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    University
                  </span>
                  <span className="text-base text-white font-medium">{personalInfo.university}</span>
                </div>

                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    Current Level
                  </span>
                  <span className="text-base text-white font-medium">{personalInfo.currentLevel}</span>
                </div>
              </div>

              {/* Languages */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mr-2">
                  Languages:
                </span>
                {personalInfo.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenCV}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#B85D3B] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span>View CV</span>
                <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium text-xs uppercase tracking-[0.2em] hover:border-white hover:bg-white/5 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
