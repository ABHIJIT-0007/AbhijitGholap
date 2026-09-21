import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { academicProjects } from '../data/portfolioData';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'drawings' | 'process' | 'sustainability' | 'renders' | 'pdf'>('overview');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, lightboxImage, onClose]);

  if (!project) return null;

  // Find index for next/previous navigation
  const currentIndex = academicProjects.findIndex((p) => p.id === project.id);
  const prevProject = academicProjects[(currentIndex - 1 + academicProjects.length) % academicProjects.length];
  const nextProject = academicProjects[(currentIndex + 1) % academicProjects.length];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex flex-col justify-start">
      {/* Top Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#101010]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="font-mono text-sm text-[#B85D3B] font-bold">{project.number}</span>
          <span className="hidden sm:inline text-neutral-500">/</span>
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white truncate max-w-xs sm:max-w-md">
            {project.name}
          </h2>
          <span className="hidden md:inline-block font-mono text-[11px] px-2.5 py-0.5 bg-white/5 border border-white/10 text-neutral-400">
            {project.category}
          </span>
        </div>

        {/* Controls: PDF, Prev/Next & Close */}
        <div className="flex items-center space-x-3">
          {project.pdfUrl && (
            <a
              href={encodeURI(project.pdfUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#B85D3B] text-white font-mono text-xs uppercase font-semibold hover:bg-[#a34f31] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View Full PDF</span>
            </a>
          )}
          <button
            onClick={() => onSelectProject(prevProject)}
            className="px-3 py-1.5 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white/10 transition-colors"
            title={`Previous: ${prevProject.name}`}
          >
            ← Prev
          </button>
          <button
            onClick={() => onSelectProject(nextProject)}
            className="px-3 py-1.5 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white/10 transition-colors"
            title={`Next: ${nextProject.name}`}
          >
            Next →
          </button>
          <button
            onClick={onClose}
            className="p-2 border border-white/30 text-white hover:bg-[#B85D3B] hover:border-[#B85D3B] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-6xl w-full mx-auto px-5 sm:px-8 py-10">
        
        {/* ========================================================================= */}
        {/* 1. PROJECT COVER & HEADER                                                 */}
        {/* ========================================================================= */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 border border-white/10 mb-10">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.25em] block mb-1">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                {project.name}
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="font-mono text-xs text-neutral-300 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/15">
                <span>{project.location}</span> • <span>{project.area}</span>
              </div>
              {project.pdfUrl && (
                <a
                  href={encodeURI(project.pdfUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white bg-[#B85D3B] px-4 py-2 uppercase font-semibold tracking-wider hover:bg-[#a34f31] transition-colors flex items-center gap-2"
                >
                  📄 Open Project PDF
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. PROJECT INFORMATION PANEL                                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#161616] border border-white/10 mb-12 font-mono text-xs">
          <div>
            <span className="text-neutral-500 uppercase tracking-widest block mb-1">Project Number</span>
            <span className="text-white font-bold text-sm">{project.number}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase tracking-widest block mb-1">Location</span>
            <span className="text-white font-bold text-sm">{project.location}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase tracking-widest block mb-1">Gross Built Area</span>
            <span className="text-white font-bold text-sm">{project.area}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase tracking-widest block mb-1">Academic Level</span>
            <span className="text-white font-bold text-sm">{project.semester}</span>
          </div>
        </div>

        {/* Navigation Tabs for Case Study */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 mb-10 text-xs font-mono uppercase tracking-[0.2em]">
          {[
            { key: 'overview', label: '01 Overview & Concept' },
            { key: 'process', label: '02 Site & Form Process' },
            { key: 'drawings', label: '03 Plans & Sections' },
            { key: 'sustainability', label: '04 Sustainability' },
            { key: 'renders', label: '05 3D Visualizations' },
            ...(project.fullPdfPages && project.fullPdfPages.length > 0
              ? [{ key: 'pdf', label: '06 Full Presentation Sheets' }]
              : []),
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 py-2 border transition-colors cursor-pointer ${
                activeTab === tab.key
                  ? 'border-[#B85D3B] text-white bg-[#B85D3B]/20 font-bold'
                  : 'border-white/10 text-neutral-400 hover:text-white hover:border-white/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW & CONCEPT */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Design Concept */}
            <div className="bg-[#141414] border border-white/10 p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.25em] block">
                  Architectural Narrative
                </span>
                {project.pdfUrl && (
                  <a
                    href={encodeURI(project.pdfUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-white bg-white/10 border border-white/20 px-3 py-1 uppercase tracking-wider hover:bg-[#B85D3B] hover:border-[#B85D3B] transition-colors"
                  >
                    View Original PDF Document ↗
                  </a>
                )}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                Design Concept
              </h3>
              <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed mb-6">
                {project.concept}
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Diagrams Preview */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-400 mb-4">
                Analytical Spatial Diagrams
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.diagrams.map((d, i) => (
                  <div key={i} className="bg-[#181818] border border-white/10 p-6 flex flex-col justify-between">
                    <span className="font-mono text-xs text-[#B85D3B] mb-4">DIA-0{i + 1}</span>
                    <p className="text-sm text-neutral-200 font-medium">{d}</p>
                    <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-neutral-500">
                      SCHEMATIC ANALYSIS
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SITE & FORM PROCESS */}
        {activeTab === 'process' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Site Analysis */}
            <div className="bg-[#141414] border border-white/10 p-8">
              <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.25em] block mb-3">
                Contextual Response
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
                Site Analysis
              </h3>
              <ul className="space-y-4">
                {project.siteAnalysis.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-neutral-300 leading-relaxed">
                    <span className="font-mono text-xs text-[#B85D3B] mt-0.5">[{idx + 1}]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concept & Form Development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#141414] border border-white/10 p-8">
                <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.25em] block mb-3">
                  Spatial Zoning
                </span>
                <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-4">
                  Concept Development
                </h4>
                <ul className="space-y-3">
                  {project.conceptDevelopment.map((item, idx) => (
                    <li key={idx} className="text-sm text-neutral-300 leading-relaxed pl-3 border-l border-white/20">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#141414] border border-white/10 p-8">
                <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.25em] block mb-3">
                  Massing & Geometry
                </span>
                <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-4">
                  Form Development
                </h4>
                <ul className="space-y-3">
                  {project.formDevelopment.map((item, idx) => (
                    <li key={idx} className="text-sm text-neutral-300 leading-relaxed pl-3 border-l border-[#B85D3B]/40">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PLANS & SECTIONS */}
        {activeTab === 'drawings' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Plans */}
            <div>
              <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.25em] block mb-2">
                Floor Plates & Circulation
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
                Architectural Plans
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {project.plans.map((plan, idx) => (
                  <div key={idx} className="bg-[#141414] border border-white/10 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-white font-semibold">
                          {plan.type}
                        </span>
                        <h4 className="text-xl font-bold text-white uppercase">{plan.title}</h4>
                      </div>
                      <span className="font-mono text-xs text-neutral-400">Technical Drawing</span>
                    </div>
                    <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">{plan.desc}</p>
                    
                    {plan.image ? (
                      <div
                        onClick={() => setLightboxImage({ src: plan.image!, title: `${plan.title} - ${project.name}` })}
                        className="group relative cursor-pointer bg-neutral-900 border border-white/15 overflow-hidden rounded-sm"
                      >
                        <img
                          src={plan.image}
                          alt={plan.title}
                          className="w-full h-auto object-contain max-h-[500px] mx-auto filter contrast-105 group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/80 px-4 py-2 border border-white/30">
                            🔍 Click to Enlarge High-Res Drawing
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[21/9] bg-[#0A0A0A] border border-dashed border-white/20 flex flex-col items-center justify-center p-6 text-center">
                        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1">
                          [Technical Drawing Sheet]
                        </span>
                        <span className="font-mono text-[11px] text-neutral-500">
                          {plan.title} • {project.name}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sections & Elevations */}
            <div>
              <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.25em] block mb-2">
                Verticality & Facade Envelopes
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
                Sections & Elevations
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {project.sectionsAndElevations.map((sec, idx) => (
                  <div key={idx} className="bg-[#141414] border border-white/10 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-white font-semibold">
                          {sec.type}
                        </span>
                        <h4 className="text-xl font-bold text-white uppercase">{sec.title}</h4>
                      </div>
                      <span className="font-mono text-xs text-neutral-400">Technical Section</span>
                    </div>
                    <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">{sec.desc}</p>
                    
                    {sec.image ? (
                      <div
                        onClick={() => setLightboxImage({ src: sec.image!, title: `${sec.title} - ${project.name}` })}
                        className="group relative cursor-pointer bg-neutral-900 border border-white/15 overflow-hidden rounded-sm"
                      >
                        <img
                          src={sec.image}
                          alt={sec.title}
                          className="w-full h-auto object-contain max-h-[500px] mx-auto filter contrast-105 group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/80 px-4 py-2 border border-white/30">
                            🔍 Click to Enlarge High-Res Section
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[21/9] bg-[#0A0A0A] border border-dashed border-white/20 flex flex-col items-center justify-center p-6 text-center">
                        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1">
                          [Sectional Sheet View]
                        </span>
                        <span className="font-mono text-[11px] text-neutral-500">
                          {sec.title}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SUSTAINABILITY STRATEGY */}
        {activeTab === 'sustainability' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-[#141414] border border-white/10 p-8">
              <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.25em] block mb-3">
                Environmental Performance
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
                Material & Sustainability Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.sustainabilityStrategy.map((item, idx) => (
                  <div key={idx} className="p-6 bg-[#1A1A1A] border border-white/5">
                    <div className="flex items-center space-x-2 font-mono text-xs text-[#B85D3B] mb-2">
                      <span>ST-0{idx + 1}</span>
                      <span>•</span>
                      <span>ECO STRATEGY</span>
                    </div>
                    <p className="text-sm text-neutral-200 leading-relaxed font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: 3D VIEWS & RENDERS */}
        {activeTab === 'renders' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.25em] block mb-3">
                Architectural Visualization
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
                3D Views & Final Renders
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.views3D.map((view, idx) => (
                <div key={idx} className="bg-[#141414] border border-white/10 overflow-hidden flex flex-col justify-between">
                  <div
                    onClick={() => setLightboxImage({ src: view.image || project.coverImage, title: view.title })}
                    className="group relative cursor-pointer aspect-[16/10] bg-neutral-900 overflow-hidden"
                  >
                    <img
                      src={view.image || project.coverImage}
                      alt={view.title}
                      className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/80 px-3 py-1.5 border border-white/30">
                        🔍 View Render
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[10px] text-[#B85D3B] uppercase tracking-[0.2em] block mb-1">
                      Render View 0{idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-white uppercase mb-2">{view.title}</h4>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed">{view.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: FULL PRESENTATION SHEETS (PDF PAGES) */}
        {activeTab === 'pdf' && project.fullPdfPages && (
          <div className="space-y-10 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#141414] border border-white/10 p-6">
              <div>
                <span className="font-mono text-xs text-[#B85D3B] uppercase tracking-[0.25em] block mb-1">
                  High-Resolution Document Sheets
                </span>
                <h3 className="text-xl font-bold uppercase text-white">Full Presentation Sheets</h3>
              </div>
              {project.pdfUrl && (
                <a
                  href={encodeURI(project.pdfUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#B85D3B] text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#a34f31] transition-colors flex items-center gap-2"
                >
                  📄 Download / View Complete PDF
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 gap-12">
              {project.fullPdfPages.map((pageSrc, pageIdx) => (
                <div key={pageIdx} className="bg-[#141414] border border-white/15 p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 font-mono text-xs text-neutral-400 pb-3 border-b border-white/10">
                    <span className="text-white font-bold">Sheet Page 0{pageIdx + 1}</span>
                    <button
                      onClick={() => setLightboxImage({ src: pageSrc, title: `Presentation Sheet 0${pageIdx + 1} - ${project.name}` })}
                      className="text-[#B85D3B] hover:underline uppercase tracking-wider"
                    >
                      🔍 Open Full-Screen Lightbox
                    </button>
                  </div>
                  <div
                    onClick={() => setLightboxImage({ src: pageSrc, title: `Presentation Sheet 0${pageIdx + 1} - ${project.name}` })}
                    className="group relative cursor-pointer bg-neutral-900 border border-white/10 overflow-hidden"
                  >
                    <img
                      src={pageSrc}
                      alt={`Page ${pageIdx + 1}`}
                      className="w-full h-auto object-contain filter contrast-105 group-hover:scale-101 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/80 px-4 py-2 border border-white/30">
                        🔍 Click to Expand Sheet View
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Project Switcher */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
          >
            <span>← Previous Project:</span>
            <span className="text-white font-bold">{prevProject.name}</span>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
          >
            <span>Next Project:</span>
            <span className="text-white font-bold">{nextProject.name} →</span>
          </button>
        </div>

      </div>

      {/* LIGHTBOX MODAL OVERLAY */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <div className="absolute top-6 right-6 flex items-center space-x-4">
            <span className="font-mono text-xs text-white uppercase tracking-widest bg-black/80 px-3 py-1.5 border border-white/20">
              {lightboxImage.title}
            </span>
            <button
              onClick={() => setLightboxImage(null)}
              className="p-2.5 bg-white/10 border border-white/30 text-white hover:bg-[#B85D3B] hover:border-[#B85D3B] transition-colors"
            >
              ✕ Close
            </button>
          </div>
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-2">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-w-full max-h-full object-contain filter contrast-105 shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCaseStudyModal;
