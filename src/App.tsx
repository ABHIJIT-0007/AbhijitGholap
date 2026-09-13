import React, { useState } from 'react';
import { Project } from './types';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DesignApproach from './components/DesignApproach';
import SelectedWork from './components/SelectedWork';
import ProfessionalWork from './components/ProfessionalWork';
import WorkingDrawingsGallery from './components/WorkingDrawingsGallery';
import SkillsCapabilities from './components/SkillsCapabilities';
import EducationTimeline from './components/EducationTimeline';
import ContactSection from './components/ContactSection';
import ProjectCaseStudyModal from './components/ProjectCaseStudyModal';
import CVModal from './components/CVModal';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white selection:bg-[#B85D3B] selection:text-white font-sans antialiased">
      {/* Fixed Architectural Navigation */}
      <Navigation onOpenCV={() => setIsCVOpen(true)} />

      {/* Hero Section */}
      <HeroSection />

      {/* Selected Academic Work */}
      <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

      {/* About Me Section */}
      <AboutSection onOpenCV={() => setIsCVOpen(true)} />

      {/* Design Approach (Spaces / People / Planet) */}
      <DesignApproach />

      {/* Collaborative Professional Experience (Sports Complex — Goa) */}
      <ProfessionalWork />

      {/* Technical Working Drawings Gallery */}
      <WorkingDrawingsGallery />

      {/* Software & Technical Capabilities */}
      <SkillsCapabilities />

      {/* Education Timeline */}
      <EducationTimeline />

      {/* Contact Section */}
      <ContactSection onOpenCV={() => setIsCVOpen(true)} />

      {/* Full-Screen Project Case Study Presentation Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Verified Curriculum Vitae Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
};

export default App;
