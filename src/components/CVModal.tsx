import React, { useEffect } from 'react';
import { personalInfo, academicProjects, educationTimeline, skillCategories } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#121212] border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col justify-between relative shadow-2xl">
        {/* Header Action Bar */}
        <div className="sticky top-0 z-20 bg-[#161616] border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-[#B85D3B] font-bold">CURRICULUM VITAE</span>
            <span className="text-neutral-500">•</span>
            <span className="font-mono text-xs text-neutral-300">Abhijit Gholap (B.Arch)</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="/documents/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#B85D3B] text-white font-mono text-xs uppercase font-semibold hover:bg-[#a34f31] transition-colors flex items-center gap-1.5"
            >
              📄 Download CV.pdf
            </a>
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 border border-white/20 text-white hover:bg-[#B85D3B] hover:border-[#B85D3B] transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Printable CV Body */}
        <div className="p-8 sm:p-12 space-y-10 text-neutral-300 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/15 pb-8 flex flex-col sm:flex-row justify-between sm:items-end gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white print:text-black">
                {personalInfo.name}
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#B85D3B] mt-1">
                {personalInfo.title} • {personalInfo.degree}
              </p>
              <p className="text-xs text-neutral-400 mt-2 max-w-xl">
                {personalInfo.aboutBio}
              </p>
            </div>

            <div className="font-mono text-xs space-y-1 text-neutral-400 print:text-neutral-700 sm:text-right">
              <p>{personalInfo.location}</p>
              <p>{personalInfo.phone}</p>
              <p className="text-white print:text-black font-semibold">{personalInfo.email}</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#B85D3B] border-b border-white/10 pb-2 mb-4">
              Education
            </h2>
            <div className="space-y-4">
              {educationTimeline.map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between text-xs">
                  <div>
                    <span className="font-bold text-white print:text-black text-sm block">
                      {edu.degree}
                    </span>
                    <span className="text-neutral-300">{edu.institution} ({edu.location})</span>
                  </div>
                  <span className="font-mono text-neutral-400 mt-1 sm:mt-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Architectural Projects */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#B85D3B] border-b border-white/10 pb-2 mb-4">
              Academic Design Projects (Semesters I – VII)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {academicProjects.map((p) => (
                <div key={p.id} className="p-3 bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-[10px] text-[#B85D3B]">{p.number} • {p.semester}</span>
                  <p className="font-bold text-white print:text-black text-sm">{p.name}</p>
                  <p className="text-neutral-400 font-mono text-[11px]">{p.location} • {p.area}</p>
                  <p className="text-neutral-400 mt-1 font-light">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#B85D3B] border-b border-white/10 pb-2 mb-4">
              Collaborative Professional Experience
            </h2>
            <div className="text-xs space-y-1">
              <div className="flex justify-between font-bold text-white print:text-black text-sm">
                <span>Sports Complex — Goa</span>
                <span className="font-mono text-neutral-400 font-normal">Goa</span>
              </div>
              <p className="text-[#B85D3B] font-mono">Mayur Naik & Associates (Principal: Ar. Mayur Naik)</p>
              <p className="text-neutral-300">Role: Architectural Design Assistance</p>
              <p className="text-neutral-400 font-light mt-1">
                Contributed to the architectural planning and design development of the sports complex, including organization of sports facilities, open spaces, circulation and overall site planning.
              </p>
            </div>
          </div>

          {/* Software Skills */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#B85D3B] border-b border-white/10 pb-2 mb-4">
              Software Skills & Technical Competencies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              {skillCategories.map((cat, i) => (
                <div key={i}>
                  <span className="text-neutral-500 uppercase block mb-1">{cat.category}</span>
                  <span className="text-white print:text-black">{cat.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-neutral-400">
            <span>Languages: Marathi, Hindi, English</span>
            <span>Navi Mumbai, India</span>
          </div>
        </div>

        {/* Footer Close */}
        <div className="bg-[#161616] border-t border-white/10 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#B85D3B] hover:text-white transition-colors cursor-pointer"
          >
            Close CV Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
