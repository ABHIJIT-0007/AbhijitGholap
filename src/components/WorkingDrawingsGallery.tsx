import React, { useState } from 'react';
import { workingDrawings } from '../data/portfolioData';
import { WorkingDrawing } from '../types';

export const WorkingDrawingsGallery: React.FC = () => {
  const [selectedSheet, setSelectedSheet] = useState<WorkingDrawing | null>(null);

  const openPdf = (pdfUrl?: string) => {
    const targetUrl = pdfUrl || '/documents/working-drawings.pdf';
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

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
          <div className="flex flex-col sm:items-end gap-2">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest max-w-xs">
              Precise construction sheets, dimensioned structural coordination, and architectural details.
            </p>
            <button
              onClick={() => openPdf('/documents/working-drawings.pdf')}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 bg-[#B85D3B]/20 border border-[#B85D3B] text-white hover:bg-[#B85D3B] transition-all duration-200 cursor-pointer"
            >
              <span>View Full Working Drawings PDF</span>
              <span className="text-sm">↗</span>
            </button>
          </div>
        </div>

        {/* Technical Drawings Blueprint Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workingDrawings.map((sheet) => (
            <div
              key={sheet.id}
              onClick={() => setSelectedSheet(sheet)}
              className="group cursor-pointer bg-[#141414] border border-white/10 p-6 flex flex-col justify-between hover:border-[#B85D3B] transition-all duration-300 relative overflow-hidden"
            >
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

              {/* Technical Drawing Real Plan Image Box */}
              <div className="aspect-[4/3] w-full bg-[#080808] border border-white/15 overflow-hidden relative group-hover:border-[#B85D3B]/60 transition-colors">
                {sheet.image ? (
                  <img
                    src={sheet.image}
                    alt={sheet.title}
                    className="w-full h-full object-contain p-1 filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[9px] font-mono text-neutral-600">
                      <span>DWG // CAD</span>
                      <span>MM PRECISION</span>
                    </div>
                    <div className="text-center font-mono text-xs text-neutral-400">{sheet.title}</div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-[#B85D3B] text-white font-mono text-[10px] uppercase tracking-widest font-semibold">
                    Inspect Drawing +
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                <span className="group-hover:text-white transition-colors">PDF SHEET DOCUMENT</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openPdf(sheet.pdfUrl);
                  }}
                  className="text-[#B85D3B] hover:underline flex items-center gap-1 font-bold"
                >
                  <span>Open PDF</span>
                  <span>↗</span>
                </button>
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
          <button
            onClick={() => openPdf('/documents/working-drawings.pdf')}
            className="text-white hover:text-[#B85D3B] flex items-center gap-1.5 transition-colors font-bold uppercase"
          >
            <span>Open Complete Drawing Set PDF</span>
            <span>↗</span>
          </button>
        </div>
      </div>

      {/* Modal / Sheet Inspector */}
      {selectedSheet && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedSheet(null)}
        >
          <div
            className="bg-[#141414] border border-white/20 max-w-4xl w-full p-6 sm:p-8 relative flex flex-col max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="font-mono text-xs text-[#B85D3B] uppercase font-bold">
                  {selectedSheet.sheetNumber} • Scale {selectedSheet.scale}
                </span>
                <h3 className="text-2xl font-bold uppercase text-white mt-1">{selectedSheet.title}</h3>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => openPdf(selectedSheet.pdfUrl)}
                  className="px-4 py-2 bg-[#B85D3B] hover:bg-[#d06b45] text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Open PDF</span>
                  <span>↗</span>
                </button>
                <button
                  onClick={() => setSelectedSheet(null)}
                  className="p-2 border border-white/20 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">{selectedSheet.description}</p>

            {/* Sheet Preview Image */}
            <div className="bg-[#0A0A0A] border border-white/10 p-2 flex items-center justify-center overflow-hidden min-h-[350px]">
              {selectedSheet.image ? (
                <img
                  src={selectedSheet.image}
                  alt={selectedSheet.title}
                  className="max-h-[60vh] max-w-full object-contain rounded"
                />
              ) : (
                <div className="font-mono text-xs text-neutral-400">Drawing Sheet Image Available in PDF</div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
              <span>AutoCAD 2D • Metric Standards • National Building Code Compliant</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => openPdf(selectedSheet.pdfUrl)}
                  className="px-5 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#B85D3B] hover:text-white transition-colors"
                >
                  View Full PDF Sheet ↗
                </button>
                <button
                  onClick={() => setSelectedSheet(null)}
                  className="px-5 py-2.5 border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkingDrawingsGallery;

