import React from 'react';
import { professionalProject } from '../data/portfolioData';

export const ProfessionalWork: React.FC = () => {
  return (
    <section id="experience" className="relative w-full py-28 px-5 sm:px-8 md:px-12 bg-[#121212] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="font-mono text-xs text-[#B85D3B] tracking-[0.25em] uppercase">
                04 / Experience
              </span>
              <span className="px-2.5 py-0.5 bg-[#B85D3B]/20 border border-[#B85D3B]/40 text-[#B85D3B] font-mono text-[10px] uppercase tracking-widest">
                Professional Studio Practice
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Collaborative Professional Work
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest max-w-xs">
            Practical architectural engagement with established architecture studios.
          </p>
        </div>

        {/* Professional Feature Container (Visually distinct from academic cards) */}
        <div className="bg-[#181818] border-2 border-white/15 overflow-hidden">
          {/* Studio & Project Header Banner */}
          <div className="p-8 sm:p-12 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">
                <span className="text-white font-bold">{professionalProject.studio}</span>
                <span>•</span>
                <span>Principal: {professionalProject.principalArchitect}</span>
                <span>•</span>
                <span>Location: {professionalProject.location}</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6">
                {professionalProject.name}
              </h3>

              <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed max-w-3xl">
                "{professionalProject.description}"
              </p>
            </div>

            {/* Role & Responsibility Callout */}
            <div className="lg:col-span-4 bg-[#111111] border border-white/10 p-6 flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B85D3B] block mb-2">
                  My Contribution & Role
                </span>
                <h4 className="text-xl font-bold uppercase text-white mb-4">
                  {professionalProject.role}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Collaborated on site planning, sports facility zoning, and development drawings under Ar. Mayur Naik.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>PRACTICE COLLABORATION</span>
                <span className="text-emerald-400">● VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Large Prominent Project Visual */}
          <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden bg-neutral-950">
            <img
              src={professionalProject.coverImage}
              alt={professionalProject.name}
              className="w-full h-full object-cover filter contrast-110 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-xs text-white/90">
              <span className="bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/15 uppercase tracking-widest">
                Goa Sports Infrastructure Masterplan
              </span>
              <span className="hidden sm:inline bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/15 text-neutral-400">
                Mayur Naik & Associates
              </span>
            </div>
          </div>

          {/* Key Contributions & Gallery Grid */}
          <div className="p-8 sm:p-12 bg-[#151515]">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#B85D3B] mb-6">
              Scope of Design Involvement
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {professionalProject.highlights.map((item, idx) => (
                <div key={idx} className="bg-[#1C1C1C] border border-white/5 p-6 flex flex-col justify-between">
                  <span className="font-mono text-xs text-[#B85D3B] mb-3">0{idx + 1}</span>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">{item}</p>
                </div>
              ))}
            </div>

            {/* Gallery Cards */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-6">
                Planning & Structural Gallery
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {professionalProject.gallery.map((g, idx) => (
                  <div key={idx} className="bg-[#111111] border border-white/10 p-5">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">
                      Sheet 0{idx + 1}
                    </span>
                    <h5 className="text-sm font-bold text-white uppercase mb-2">{g.title}</h5>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalWork;
