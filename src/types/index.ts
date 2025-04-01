export interface Degree {
  id: string;
  name: string;
  description: string;
  duration: string;
  careers: Career[];
}

export interface Career {
  id: string;
  title: string;
  description: string;
  skills: string[];
  roadmap: RoadmapStep[];
  certifications: Certification[];
  courses: Course[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  resources: Resource[];
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  url: string;
  duration: string;
  cost: string;
}

export interface Course {
  id: string;
  title: string;
  platform: string;
  url: string;
  duration: string;
  rating: number;
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'course' | 'book';
  url: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  savedCareers: string[];
  progress: {
    [degreeName: string]: number;
  };
}