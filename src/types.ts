export interface Project {
  id: string;
  number: string;
  name: string;
  location: string;
  category: string;
  semester: string;
  area: string;
  description: string;
  featured?: boolean;
  coverImage: string;
  concept: string;
  siteAnalysis: string[];
  conceptDevelopment: string[];
  formDevelopment: string[];
  plans: { title: string; type: string; desc: string }[];
  sectionsAndElevations: { title: string; type: string; desc: string }[];
  diagrams: string[];
  sustainabilityStrategy: string[];
  views3D: { title: string; desc: string }[];
}

export interface ProfessionalProject {
  id: string;
  name: string;
  location: string;
  studio: string;
  principalArchitect: string;
  role: string;
  category: string;
  description: string;
  highlights: string[];
  coverImage: string;
  gallery: { title: string; desc: string }[];
}

export interface WorkingDrawing {
  id: string;
  title: string;
  sheetNumber: string;
  scale: string;
  category: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  status?: string;
  notes?: string;
}
