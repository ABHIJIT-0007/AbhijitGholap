import React from 'react';
import { educationTimeline } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="relative w-full py-28 px-5 sm:px-8 md:px-12 bg-[#0E0E0E] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="font-mono text-xs text-[#B85D3B] tracking-[0.25em] uppercase block mb-2">
              07 / Background
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Education Timeline
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest max-w-xs">
            Chronological academic foundation and ongoing architectural studies under Mumbai University.
          </p>
        </div>

        {/* Chronological Architectural Timeline */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          {educationTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-3.5 h-3.5 bg-[#121212] border-2 border-white/40 group-hover:border-[#B85D3B] group-hover:bg-[#B85D3B] transition-colors" />

              {/* Card Container */}
              <div className="bg-[#141414] border border-white/10 p-6 sm:p-8 hover:border-white/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                  <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.2em]">
                    {item.period}
                  </span>
                  {item.status && (
                    <span className="font-mono text-[11px] px-2.5 py-0.5 bg-white/5 border border-white/10 text-neutral-300 w-max">
                      {item.status}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                  {item.degree}
                </h3>

                <p className="text-base text-neutral-200 font-medium mb-1">
                  {item.institution}
                </p>

                <p className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-4">
                  {item.location}
                </p>

                {item.notes && (
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed pt-3 border-t border-white/5">
                    {item.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
