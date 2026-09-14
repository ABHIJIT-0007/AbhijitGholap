import React, { useState } from 'react';
import { professionalProject } from '../data/portfolioData';

export const ProfessionalWork: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string; desc?: string } | null>(null);

  const openPdf = () => {
    if (professionalProject.pdfUrl) {
      window.open(professionalProject.pdfUrl, '_blank', 'noopener,noreferrer');
    }
  };

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
          <div className="flex flex-col sm:items-end gap-2">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest max-w-xs">
              Practical architectural engagement with established architecture studios.
            </p>
            {professionalProject.pdfUrl && (
              <button
                onClick={openPdf}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 bg-[#B85D3B]/20 border border-[#B85D3B] text-white hover:bg-[#B85D3B] transition-all duration-200 cursor-pointer"
              >
                <span>View Full PDF Document</span>
                <span className="text-sm">↗</span>
              </button>
            )}
          </div>
        </div>

        {/* Professional Feature Container */}
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

              <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed max-w-3xl mb-6">
                "{professionalProject.description}"
              </p>

              {/* Key Metrics / Area Statement Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">Total Plot Area</span>
                  <span className="text-white font-bold text-sm sm:text-base">{professionalProject.plotArea || '28,195 sq.m.'}</span>
                </div>
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">Activity & Facilities</span>
                  <span className="text-[#B85D3B] font-bold text-sm sm:text-base">{professionalProject.totalArea || '24,268 sq.m.'}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">Road Network Area</span>
                  <span className="text-neutral-300 font-bold text-sm sm:text-base">{professionalProject.roadOccupancy || '2,040 sq.m. (7.2%)'}</span>
                </div>
              </div>
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
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Collaborated on architectural planning, sports facility zoning, circulation organization, and development drawings under Ar. Mayur Naik.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={openPdf}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#B85D3B] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <span>Open PDF Plan</span>
                  <span>↗</span>
                </button>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>MAYUR NAIK & ASSOC.</span>
                  <span className="text-emerald-400">● VERIFIED WORK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Large Prominent Project Visual from PDF */}
          <div
            onClick={() =>
              setSelectedImage({
                title: 'Master Site Plan & Sports Infrastructure Sheet',
                image: professionalProject.fullSheetImage || professionalProject.sheetImage || professionalProject.coverImage,
                desc: 'High-resolution architectural sheet showing master layout, circulation network, zoning, and area statement.',
              })
            }
            className="group cursor-pointer relative aspect-[21/9] sm:aspect-[16/8] w-full overflow-hidden bg-neutral-950 border-b border-white/10"
            title="Click to inspect high-resolution sheet"
          >
            <img
              src={professionalProject.coverImage}
              alt={professionalProject.name}
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-80" />

            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/20 font-mono text-xs text-white uppercase tracking-widest flex items-center gap-2 group-hover:border-[#B85D3B]">
                <span>🔍 Click to Enlarge / Inspect</span>
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-white/90">
              <span className="bg-black/80 backdrop-blur-md px-3.5 py-2 border border-white/15 uppercase tracking-widest">
                Goa Sports Infrastructure Masterplan — 28,195 sq.m.
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openPdf();
                }}
                className="bg-[#B85D3B] hover:bg-[#d06b45] text-white px-3.5 py-2 border border-[#B85D3B] uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors"
              >
                <span>Open PDF Document</span>
                <span>↗</span>
              </button>
            </div>
          </div>

          {/* Architectural Plans & Diagrams Grid from PDF */}
          {professionalProject.plans && professionalProject.plans.length > 0 && (
            <div className="p-8 sm:p-12 border-b border-white/10 bg-[#141414]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B85D3B] block mb-1">
                    Architectural Drawings & Site Plans
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold uppercase text-white">
                    Master Planning & Circulation Analysis
                  </h4>
                </div>
                <button
                  onClick={openPdf}
                  className="self-start font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>View Original PDF Source</span>
                  <span>→</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {professionalProject.plans.map((p, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      setSelectedImage({
                        title: p.title,
                        image: p.image,
                        desc: p.desc,
                      })
                    }
                    className="group cursor-pointer bg-[#1C1C1C] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#B85D3B] transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#B85D3B] uppercase tracking-widest border border-white/10">
                          {p.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="px-2 py-1 bg-[#B85D3B] text-[10px] font-mono text-white uppercase tracking-widest">
                          Enlarge
                        </span>
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/10">
                      <h5 className="font-bold text-sm uppercase text-white mb-1.5 group-hover:text-[#B85D3B] transition-colors">
                        {p.title}
                      </h5>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Facility Specifications & Materiality */}
          {professionalProject.facilities && professionalProject.facilities.length > 0 && (
            <div className="p-8 sm:p-12 border-b border-white/10 bg-[#161616]">
              <div className="mb-8">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B85D3B] block mb-1">
                  Facility Specifications & Materials
                </span>
                <h4 className="text-xl sm:text-2xl font-bold uppercase text-white">
                  Program Organization & Structural Details
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {professionalProject.facilities.map((fac, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      if (fac.image) {
                        setSelectedImage({
                          title: fac.name,
                          image: fac.image,
                          desc: fac.specs,
                        });
                      }
                    }}
                    className={`bg-[#1B1B1B] border border-white/10 p-6 flex flex-col justify-between ${
                      fac.image ? 'cursor-pointer hover:border-[#B85D3B]/80' : ''
                    } transition-all`}
                  >
                    <div>
                      {fac.image && (
                        <div className="relative aspect-[16/9] mb-4 bg-neutral-900 border border-white/10 overflow-hidden">
                          <img
                            src={fac.image}
                            alt={fac.name}
                            className="w-full h-full object-contain p-1"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs text-[#B85D3B]">FACILITY 0{idx + 1}</span>
                        {fac.area && (
                          <span className="font-mono text-[11px] text-neutral-400 px-2 py-0.5 bg-white/5 border border-white/10">
                            {fac.area}
                          </span>
                        )}
                      </div>
                      <h5 className="text-base font-bold text-white uppercase mb-2">
                        {fac.name}
                      </h5>
                      <p className="text-xs text-neutral-300 font-light leading-relaxed">
                        {fac.specs}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Contributions Section */}
          <div className="p-8 sm:p-12 bg-[#151515]">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#B85D3B] mb-6">
              Scope of Design Involvement & Highlights
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {professionalProject.highlights.map((item, idx) => (
                <div key={idx} className="bg-[#1C1C1C] border border-white/5 p-6 flex flex-col justify-between">
                  <span className="font-mono text-xs text-[#B85D3B] mb-3">0{idx + 1}</span>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">{item}</p>
                </div>
              ))}
            </div>

            {/* Bottom PDF CTA */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h5 className="text-base font-bold uppercase text-white mb-1">
                  Complete Project Presentation & Architectural Drawing Sheet
                </h5>
                <p className="text-xs text-neutral-400 font-mono">
                  Full sheet contains Master Plan, Circulation, Zoning, Area Statement & Material Standards.
                </p>
              </div>
              <button
                onClick={openPdf}
                className="self-start sm:self-auto px-6 py-3 bg-[#B85D3B] hover:bg-[#d06b45] text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Open Full PDF (5 MB)</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Image & Plan Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Modal Header */}
          <div
            className="flex items-center justify-between pb-4 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-widest block">
                Sports Complex — Goa / Technical Drawing
              </span>
              <h3 className="text-lg sm:text-2xl font-bold uppercase text-white">
                {selectedImage.title}
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={openPdf}
                className="px-4 py-2 bg-[#B85D3B] hover:bg-[#d06b45] text-white font-mono text-xs uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Open Original PDF</span>
                <span>↗</span>
              </button>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 border border-white/30 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Image Display */}
          <div
            className="flex-1 flex items-center justify-center my-4 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] max-w-full object-contain rounded border border-white/10 shadow-2xl"
            />
          </div>

          {/* Modal Footer */}
          <div
            className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <p>{selectedImage.desc || 'Architectural drawings and documentation for Sports Complex, Goa.'}</p>
            <span className="text-neutral-500">Press ESC or click anywhere outside to close</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfessionalWork;

