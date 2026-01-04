export enum Category {
  TECH = 'Tech & Digital',
  BUSINESS = 'Business & Money',
  CREATIVE = 'Creative & Media',
  LIFE = 'Practical Life Skills',
  HOBBY = 'Hobbies & Lifestyle',
  UNIVERSAL = 'Skill Dasar (Semua Usia)'
}

export enum Difficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface Resource {
  title: string;
  url: string;
  type: 'Video' | 'Article' | 'Docs' | 'Tool' | 'Guide' | 'Course' | 'Book' | 'Data' | 'Quiz' | 'Summary' | 'Audio' | 'List' | 'App' | 'Website' | 'Collection' | 'Repo' | 'CheatSheet' | 'Checklist' | 'Recipe' | 'PDF';
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  challenge: string;
  estimatedTime: string;
}

export interface Skill {
  id: string;
  title: string;
  category: Category;
  difficulty: Difficulty;
  duration: string;
  purpose: string;
  outcome: string;
  prerequisites: string[];
  steps: RoadmapStep[];
  traps: string[];
}

export interface UserProgress {
  [skillId: string]: string[]; // Array of completed step IDs
}