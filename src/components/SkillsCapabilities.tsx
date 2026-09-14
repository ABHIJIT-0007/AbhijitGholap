import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export const SkillsCapabilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative w-full py-28 px-5 sm:px-8 md:px-12 bg-[#111111] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="font-mono text-xs text-[#B85D3B] tracking-[0.25em] uppercase block mb-2">
              06 / Toolkit
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Software & Capabilities
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest max-w-xs">
            Clean architectural competencies across digital modeling, visualization, documentation, and physical fabrication.
          </p>
        </div>

        {/* Minimalist Architectural Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((group, idx) => {
            const isSelected = selectedCategory === group.category;
            return (
              <div
                key={group.category}
                onClick={() => setSelectedCategory(isSelected ? null : group.category)}
                className={`bg-[#161616] border p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-[#B85D3B] bg-[#1a1715]'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-500 mb-6 pb-3 border-b border-white/5">
                    <span className="text-[#B85D3B]">CAT-0{idx + 1}</span>
                    <span className="uppercase tracking-widest">
                      {group.items.length} {group.items.length === 1 ? 'Skill' : 'Skills'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6">
                    {group.category}
                  </h3>

                  {/* Skills List */}
                  <ul className="space-y-3">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center justify-between font-mono text-xs sm:text-sm text-neutral-300 py-2 border-b border-white/5 last:border-0"
                      >
                        <span className="font-medium text-white">{skill}</span>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                          Proficient
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>TOOLSET SPECIFICATION</span>
                  <span className="text-neutral-300 font-bold">✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Workflow Matrix */}
        <div className="mt-12 p-8 bg-[#141414] border border-white/10">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B85D3B] block mb-4">
            Integrated Design Workflow
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
            <div className="border-l-2 border-white/20 pl-4 py-1">
              <span className="text-neutral-500 uppercase block mb-1">01. Ideation & Concept</span>
              <span className="text-white font-medium">Hand Sketching • Physical Models</span>
            </div>
            <div className="border-l-2 border-white/20 pl-4 py-1">
              <span className="text-neutral-500 uppercase block mb-1">02. Spatial Massing</span>
              <span className="text-white font-medium">SketchUp 3D Analysis</span>
            </div>
            <div className="border-l-2 border-white/20 pl-4 py-1">
              <span className="text-neutral-500 uppercase block mb-1">03. Documentation</span>
              <span className="text-white font-medium">AutoCAD 2D Drafting & NBC</span>
            </div>
            <div className="border-l-2 border-[#B85D3B] pl-4 py-1">
              <span className="text-neutral-500 uppercase block mb-1">04. Visual Presentation</span>
              <span className="text-white font-medium">Lumion 3D • Adobe Photoshop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCapabilities;
