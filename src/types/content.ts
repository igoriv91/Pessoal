export interface Stat {
  value: string;
  label: string;
}

export interface Tag {
  type: "edu" | "work" | "achievement";
  label: string;
}

export interface Checkpoint {
  year: string;
  icon?: string;
  iconSvg?: string;
  iconColor?: string;
  title: string;
  subtitle: string;
  tags: Tag[];
  description: string;
}

export interface TechItem {
  name: string;
  category: string;
  icon: string;
  iconColor: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface ContactLink {
  label: string;
  description: string;
  href: string;
  icon: string;
}
