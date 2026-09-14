import React from 'react';
import { designPhilosophy } from '../data/portfolioData';

export const DesignApproach: React.FC = () => {
  return (
    <section id="approach" className="relative w-full py-28 px-5 sm:px-8 md:px-12 bg-[#0E0E0E] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="font-mono text-xs text-[#B85D3B] tracking-[0.25em] uppercase block mb-2">
              02 / Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Spaces / People / Planet
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Three guiding tenets shaping spatial integrity, human experience, and ecological sensitivity.
          </p>
        </div>

        {/* 3 Columns Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designPhilosophy.map((item) => (
            <div
              key={item.pillar}
              className="group relative bg-[#141414] border border-white/10 p-8 sm:p-10 flex flex-col justify-between min-h-[380px] hover:border-[#B85D3B]/60 transition-all duration-300"
            >
              {/* Top Accent & Index */}
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-neutral-500 mb-8 pb-4 border-b border-white/5">
                  <span className="text-[#B85D3B] font-semibold">{item.symbol}</span>
                  <span className="tracking-[0.2em] uppercase">{item.tagline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-4 group-hover:text-[#B85D3B] transition-colors">
                  {item.pillar}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Architectural Technical Detail Line */}
              <div className="pt-8 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>ARCHITECTURAL CORE</span>
                <span className="transform group-hover:translate-x-1 transition-transform text-white">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Quote */}
        <div className="mt-16 p-8 bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-transparent border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B85D3B] block mb-1">
              Methodology
            </span>
            <p className="text-sm sm:text-base text-neutral-300 font-light">
              "Architecture is not merely the creation of physical forms, but the sculpting of atmospheres that sustain human interaction and respect the ecosystem."
            </p>
          </div>
          <a
            href="#work"
            className="text-xs font-mono uppercase tracking-[0.2em] text-white border-b border-white hover:border-[#B85D3B] hover:text-[#B85D3B] pb-1 transition-colors whitespace-nowrap"
          >
            Explore Projects ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesignApproach;
