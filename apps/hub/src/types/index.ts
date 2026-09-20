import type { LucideIcon } from "lucide-react";

export interface PathItem {
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface BranchItem {
  number: string;
  title: string;
  description: string;
  count: string;
  href: string;
}

export interface ResearchItem {
  category: string;
  title: string;
  description: string;
  date: string;
}

export interface SpecialistItem {
  name: string;
  specialty: string;
  expertise: string;
  location: string;
  focus: string;
}

export interface ResourceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface InsightArticle {
  category: string;
  title: string;
  description: string;
  readTime: string;
}