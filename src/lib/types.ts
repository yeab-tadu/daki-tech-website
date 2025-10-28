export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageId: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageId: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  imageId: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageId: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Academy' | 'Payment' | 'Technical Support';
}

export interface Milestone {
  year: string;
  title: string;
  icon: 'Founded' | 'Project' | 'Team' | 'Academy' | 'Default';
  position: { x: string; y: string };
}
