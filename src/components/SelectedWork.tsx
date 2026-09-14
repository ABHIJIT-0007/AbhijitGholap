import React from 'react';
import { Project } from '../types';
import { academicProjects } from '../data/portfolioData';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const featuredProject = academicProjects[0];
  const otherProjects = academicProjects.slice(1);

  return (
    <section id="work" className="relative w-full py-28 px-5 sm:px-8 md:px-12 bg-[#0B0B0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="font-mono text-xs text-[#B85D3B] tracking-[0.25em] uppercase block mb-2">
              03 / Portfolio Content
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Selected Work
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-3">
            <span>Portfolio Projects</span>
            <span>•</span>
            <span>01 – 06 Works</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED PROJECT: 01 — NGO LEARNING CENTRE                                */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div
            onClick={() => onSelectProject(featuredProject)}
            className="group cursor-pointer relative bg-[#141414] border border-white/15 overflow-hidden transition-all duration-500 hover:border-[#B85D3B]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Large Image Column */}
              <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[380px] sm:min-h-[500px] overflow-hidden bg-neutral-900">
                <img
                  src={featuredProject.coverImage}
                  alt={featuredProject.name}
                  className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60 lg:hidden" />

                {/* Featured Badge */}
                <div className="absolute top-4 left-4 font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5 bg-[#B85D3B] text-white font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>Featured Portfolio Work</span>
                </div>

                <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 font-mono text-[11px] bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-neutral-300">
                  <span>{featuredProject.portfolioSheets?.length || 4} Presentation Sheets</span>
                </div>
              </div>

              {/* Information Column */}
              <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-between bg-[#141414]">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-6 pb-4 border-b border-white/10">
                    <span className="text-2xl font-bold text-white group-hover:text-[#B85D3B] transition-colors">
                      {featuredProject.number}
                    </span>
                    <span className="tracking-[0.2em]">{featuredProject.area}</span>
                  </div>

                  <span className="inline-block text-[11px] font-mono text-[#B85D3B] uppercase tracking-[0.2em] mb-2">
                    {featuredProject.category}
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">
                    {featuredProject.name}
                  </h3>

                  <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-6">
                    Location: {featuredProject.location}
                  </p>

                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 line-clamp-4">
                    {featuredProject.description}
                  </p>
                </div>

                {/* View Project Interaction */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-white group-hover:text-[#B85D3B] transition-colors flex items-center gap-2">
                    View Project Case Study
                  </span>
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#B85D3B] group-hover:border-[#B85D3B] transition-all transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* REMAINING 5 PORTFOLIO CONTENT PROJECTS (02 to 06)                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
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
                  className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
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

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* View Project Interaction */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 group-hover:text-white transition-colors">
                    View Case Study
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
