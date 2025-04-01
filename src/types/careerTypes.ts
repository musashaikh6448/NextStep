export interface CareerData {
    id: string;
    title: string;
    description: string;
    overview: {
      duration: string;
      scope: string;
      futureProspects: string[];
      careerPaths: string[];
    };
    skills: string[];
    technicalSkills: string[];
    steps: RoadmapStep[];
    certifications: Certification[];
    careerProspects: CareerProspect[];
    salary: {
      starting: string;
      midLevel: string;
      senior: string;
      factors: string[];
    };
    jobPlatforms: string[];
    dos: string[];
    donts: string[];
    futurePreparation: string[];
  }
  
  export interface RoadmapStep {
    id: string;
    title: string;
    description: string;
    duration: string;
    resources: Resource[];
  }
  
  export interface Resource {
    title: string;
    url: string;
    type: 'video' | 'article' | 'course';
  }
  
  export interface Certification {
    name: string;
    provider: string;
    level: string;
    link: string;
  }
  
  export interface CareerProspect {
    title: string;
    description: string;
  }