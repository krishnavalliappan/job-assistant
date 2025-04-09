export interface Skill {
  id: string;
  name: string;
  category?: string;
}
export interface Experience {
  id: string;
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string; // Required if current is false, undefined if current is true
  current: boolean; //  if true, endDate must be undefined
  location?: string;
  url?: string;
  technologies?: string[];
}
export interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate?: string; // Required if current is false, undefined if current is true
  current: boolean; //  if true, endDate must be undefined
  location?: string;
  url?: string;
  courses?: string[];
}
export interface Project {
  id: string;
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  url?: string;
  technologies?: string[];
}
export interface Certification {
  id: string;
  name: string;
  date?: string;
  url?: string;
  technologies?: string[];
}

export interface BasicInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location?: string;
  portfolioUrl?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Profile {
  id: string;
  lastUpdated: string;

  profileName: string;
  profileTitle: string;
  profileSummary: string;

  basicInfo: BasicInfo;

  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  projects?: Project[];
  certifications?: Certification[];

  preferences?: {
    defaultResumeTemplate?: string;
    defaultCoverLetterTemplate?: string;
  };
}
