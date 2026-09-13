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
              <div className="aspect-[4/3] w-full bg-[#080808] border border-dashed border-white/15 p-4 flex flex-col justify-between group-hover:border-[#B85D3B]/40 transition-colors">
                <div className="flex justify-between items-center text-[9px] font-mono text-neutral-600">
                  <span>DWG // CAD</span>
                  <span>MM PRECISION</span>
                </div>
                {/* SVG Blueprint Stylized Line Grid */}
                <svg className="w-full h-16 stroke-neutral-700 group-hover:stroke-[#B85D3B]/70 transition-colors" viewBox="0 0 100 40" fill="none">
                  <line x1="10" y1="5" x2="90" y2="5" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="10" y1="35" x2="90" y2="35" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="20" y1="0" x2="20" y2="40" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="80" y1="0" x2="80" y2="40" strokeWidth="0.5" strokeDasharray="2 2" />
                  <rect x="25" y="10" width="50" height="20" strokeWidth="0.8" />
                  <line x1="25" y1="20" x2="75" y2="20" strokeWidth="0.5" />
                  <line x1="50" y1="10" x2="50" y2="30" strokeWidth="0.5" />
                </svg>
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 group-hover:text-white">
                  <span>INSPECT SHEET</span>
                  <span>+</span>
                </div>
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
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] border border-white/20 max-w-2xl w-full p-8 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="font-mono text-xs text-[#B85D3B] uppercase">{selectedSheet.sheetNumber} • Scale {selectedSheet.scale}</span>
                <h3 className="text-2xl font-bold uppercase text-white mt-1">{selectedSheet.title}</h3>
              </div>
              <button
                onClick={() => setSelectedSheet(null)}
                className="p-2 border border-white/20 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">{selectedSheet.description}</p>

            <div className="aspect-[16/10] bg-[#0A0A0A] border border-white/10 flex flex-col items-center justify-center p-6 text-center font-mono text-xs text-neutral-400">
              <span className="text-white text-base font-bold mb-2">{selectedSheet.title} Sheet</span>
              <span>Drafted in AutoCAD with full level markings, grid alignments, and dimension schedules.</span>
              <span className="text-[10px] text-neutral-500 mt-4">Part of Semester Academic Working Drawing Portfolio</span>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedSheet(null)}
                className="px-6 py-2 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#B85D3B] hover:text-white transition-colors"
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
