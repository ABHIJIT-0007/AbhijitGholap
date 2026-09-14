import React from 'react';
import { Project } from '../types';
import { academicProjects } from '../data/portfolioData';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="relative w-full py-28 px-5 sm:px-8 md:px-12 bg-[#0B0B0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="font-mono text-xs text-[#B85D3B] tracking-[0.25em] uppercase block mb-2">
              03 / Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Selected Work
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-3">
            <span>Academic Projects</span>
            <span>•</span>
            <span>Semesters I – VI</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ALL ACADEMIC PROJECTS (Uniform Grid Cards)                                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-[#141414] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#B85D3B]/70 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-neutral-900">
                <img
                  src={project.coverImage}
                  alt={project.name}
                  className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />

                <div className="absolute top-3 left-3 font-mono text-xs px-2.5 py-1 bg-black/80 backdrop-blur-md text-white border border-white/10">
                  {project.number}
                </div>

                <div className="absolute bottom-3 right-3 font-mono text-[11px] px-2.5 py-1 bg-black/80 backdrop-blur-md text-neutral-300 border border-white/10">
                  {project.area}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#B85D3B] mb-2">
                    <span>{project.semester}</span>
                    <span className="text-neutral-400">{project.location}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3 group-hover:text-[#B85D3B] transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* View Project Interaction */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 group-hover:text-white transition-colors">
                    View Project
                  </span>
                  <span className="text-white transform group-hover:translate-x-1.5 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
