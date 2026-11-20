export interface Experience {
  role: string;
  company: string;
  period: string;
  type: 'current' | 'previous';
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  category: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  contributions: string[];
  architecture: string[];
  caseStudy: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}
