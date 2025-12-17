export type TechKey =
  | 'node'
  | 'typescript'
  | 'javascript'
  | 'react'
  | 'html'
  | 'css'
  | 'ccna1'
  | 'networksecurity';

export interface Project {
  title: string;
  description: string;
  technologies: TechKey[];
  liveLink: string;
  githubLink: string;
  imageSrc: string;
  imageAlt: string;
}

export interface TechSkill {
  name: string;
  imageSrc: string;
  imageAlt: string;
  badgeLink?: string;
}


export interface profileImage {
  src: string;
  alt: string;
}

export interface mainImage {
  imageSrc: string;
  imageAlt: string;
}
