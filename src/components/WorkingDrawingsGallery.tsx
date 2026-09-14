import React, { useState } from 'react';
import { workingDrawings } from '../data/portfolioData';
import { WorkingDrawing } from '../types';

export const WorkingDrawingsGallery: React.FC = () => {
  const [selectedSheet, setSelectedSheet] = useState<WorkingDrawing | null>(null);

  return (
    <section id="drawings" className="relative w-full py-28 px-5 sm:px-8 md:px-12 bg-[#0C0C0C] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="font-mono text-xs text-[#B85D3B] tracking-[0.25em] uppercase block mb-2">
              05 / Documentation
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Working Drawings
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest max-w-xs">
            Precise construction sheets, dimensioned structural coordination, and architectural details.
          </p>
        </div>

        {/* Technical Drawings Blueprint Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workingDrawings.map((sheet) => (
            <div
              key={sheet.id}
              onClick={() => setSelectedSheet(sheet)}
              className="group cursor-pointer bg-[#141414] border border-white/10 p-6 flex flex-col justify-between hover:border-[#B85D3B] transition-all duration-300 relative overflow-hidden"
            >
              {/* Technical Drawing Blueprint Mockup Header */}
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 mb-4 pb-3 border-b border-white/10">
                  <span className="text-[#B85D3B] font-bold">{sheet.sheetNumber}</span>
                  <span>Scale {sheet.scale}</span>
                </div>

                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">
                  {sheet.category}
                </span>

                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4 group-hover:text-[#B85D3B] transition-colors">
                  {sheet.title}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {sheet.description}
                </p>
              </div>

              {/* Blueprint Visual Box */}
              <div className="aspect-[4/3] w-full bg-[#080808] border border-dashed border-white/15 p-2 flex flex-col justify-between group-hover:border-[#B85D3B]/60 transition-colors relative overflow-hidden">
                {sheet.image ? (
                  <div className="relative w-full h-full overflow-hidden bg-white/5">
                    <img
                      src={sheet.image}
                      alt={sheet.title}
                      className="w-full h-full object-cover filter contrast-125 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-white">
                      <span className="bg-black/70 px-2 py-0.5 border border-white/10">CAD DWG</span>
                      <span className="text-[#B85D3B] font-bold">INSPECT +</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center text-[9px] font-mono text-neutral-600">
                      <span>DWG // CAD</span>
                      <span>MM PRECISION</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 group-hover:text-white">
                      <span>INSPECT SHEET</span>
                      <span>+</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Standards Footer */}
        <div className="mt-12 p-6 bg-[#161616] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#B85D3B]"></span>
            <span>All technical sheets drafted in accordance with standard National Building Code (NBC) specifications.</span>
          </div>
          <span className="text-neutral-500">AutoCAD 2D • Metric Standards</span>
        </div>
      </div>

      {/* Modal / Sheet Inspector */}
      {selectedSheet && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#141414] border border-white/20 max-w-5xl w-full p-6 sm:p-8 relative my-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="font-mono text-xs text-[#B85D3B] uppercase">{selectedSheet.sheetNumber} • Scale {selectedSheet.scale} • {selectedSheet.category}</span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white mt-1">{selectedSheet.title}</h3>
              </div>
              <button
                onClick={() => setSelectedSheet(null)}
                className="p-2 border border-white/20 text-white hover:bg-[#B85D3B] hover:border-[#B85D3B] transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">{selectedSheet.description}</p>

            {/* Actual Rendered Sheet from Portfolio */}
            {selectedSheet.image ? (
              <div className="relative w-full max-h-[65vh] overflow-auto bg-neutral-950 border border-white/10 mb-6 flex items-center justify-center p-2">
                <img
                  src={selectedSheet.image}
                  alt={selectedSheet.title}
                  className="w-full h-auto max-h-[62vh] object-contain filter contrast-110"
                />
              </div>
            ) : (
              <div className="aspect-[16/10] bg-[#0A0A0A] border border-white/10 flex flex-col items-center justify-center p-6 text-center font-mono text-xs text-neutral-400 mb-6">
                <span className="text-white text-base font-bold mb-2">{selectedSheet.title} Sheet</span>
                <span>Drafted in AutoCAD with full level markings, grid alignments, and dimension schedules.</span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              {selectedSheet.image && (
                <a
                  href={selectedSheet.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white/10 transition-colors"
                >
                  <span>Open Full Resolution (4K)</span>
                  <span>↗</span>
                </a>
              )}
              <button
                onClick={() => setSelectedSheet(null)}
                className="px-6 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#B85D3B] hover:text-white transition-colors cursor-pointer ml-auto"
              >
                Close Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkingDrawingsGallery;
