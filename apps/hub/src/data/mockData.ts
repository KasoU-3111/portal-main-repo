import {
  BookOpen,
  CircleHelp,
  FlaskConical,
  HeartPulse,
  Search,
  ShieldCheck,
} from "lucide-react";
import type {
  BranchItem,
  InsightArticle,
  PathItem,
  ResearchItem,
  ResourceItem,
  SpecialistItem,
} from "../types";

export const START_PATHS: PathItem[] = [
  {
    number: "01",
    title: "I'm new to IBD",
    description: "Start with the fundamentals and understand what IBD means.",
    href: "#understanding",
  },
  {
    number: "02",
    title: "I'm experiencing symptoms",
    description: "Learn about common symptoms, warning signs, and what to ask next.",
    href: "#symptoms",
  },
  {
    number: "03",
    title: "I want to understand my diagnosis",
    description: "Explore the tests and conversations that shape an IBD diagnosis.",
    href: "#symptoms",
  },
  {
    number: "04",
    title: "I want to learn about treatment",
    description: "Compare treatment approaches, monitoring, remission, and flare management.",
    href: "#treatment",
  },
  {
    number: "05",
    title: "I want the latest research",
    description: "Explore sample research papers, case studies, and emerging developments.",
    href: "#research",
  },
  {
    number: "06",
    title: "I want to find a specialist",
    description: "Browse fictional specialist profiles with IBD experience.",
    href: "#specialists",
  },
];

export const BRANCHES: BranchItem[] = [
  {
    number: "01",
    title: "Understanding IBD",
    description: "Crohn's disease, ulcerative colitis, causes, risk factors, and the gut-immune link.",
    count: "9 guides",
    href: "#understanding",
  },
  {
    number: "02",
    title: "Symptoms & diagnosis",
    description: "Common symptoms, warning signs, tests, imaging, and understanding results.",
    count: "8 guides",
    href: "#symptoms",
  },
  {
    number: "03",
    title: "Treatment & management",
    description: "Medications, biologics, surgery, monitoring, remission, and flares.",
    count: "11 guides",
    href: "#treatment",
  },
  {
    number: "04",
    title: "Diet & nutrition",
    description: "Nutrition basics, food tolerance, hydration, and eating through different seasons.",
    count: "8 guides",
    href: "#nutrition",
  },
  {
    number: "05",
    title: "Living with IBD",
    description: "Exercise, sleep, stress, work, travel, relationships, and everyday management.",
    count: "7 guides",
    href: "#living",
  },
  {
    number: "06",
    title: "Research & evidence",
    description: "How new findings move from the lab to the clinic, explained plainly.",
    count: "12 entries",
    href: "#research",
  },
];

export const UNDERSTANDING_TOPICS = [
  "What is IBD?",
  "Types of IBD",
  "Crohn's disease",
  "Ulcerative colitis",
  "Causes & risk factors",
  "Genetics & family history",
  "Crohn's vs ulcerative colitis",
];

export const SYMPTOM_TOPICS = [
  "Common symptoms",
  "Warning signs",
  "Diagnosis guide",
  "Blood & stool tests",
  "Colonoscopy & endoscopy",
  "Imaging",
  "Biopsy",
  "Understanding results",
  "Your first IBD appointment",
];

export const TREATMENT_TOPICS = [
  "Treatment goals",
  "Medications",
  "Biologics",
  "Small molecules",
  "Steroids",
  "Immunomodulators",
  "Surgery",
  "Flare & remission",
  "Monitoring",
];

export const NUTRITION_TOPICS = [
  "Nutrition basics",
  "Eating during flares",
  "Eating during remission",
  "Hydration",
  "Nutrient deficiencies",
  "Food tolerance",
  "Nutrition myths",
  "Questions for a nutritionist",
];

export const LIVING_TOPICS = [
  "Exercise",
  "Sleep",
  "Stress & mental wellbeing",
  "Work & education",
  "Travel",
  "Relationships & social life",
  "Everyday management",
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    category: "Research paper",
    title: "New approaches to IBD disease monitoring",
    description: "A fictional summary of how biomarkers may help care teams follow inflammation over time.",
    date: "12 Sep 2025",
  },
  {
    category: "Clinical study",
    title: "Understanding treatment response in Crohn's disease",
    description: "A sample look at why two people can respond differently to the same treatment plan.",
    date: "28 Aug 2025",
  },
  {
    category: "Emerging treatment",
    title: "Emerging therapies in ulcerative colitis",
    description: "A calm introduction to early-stage ideas being explored in future care.",
    date: "04 Aug 2025",
  },
  {
    category: "New technology",
    title: "Advances in personalized IBD care",
    description: "How better information could support more precise conversations between patients and clinicians.",
    date: "19 Jul 2025",
  },
];

export const CASE_STUDIES = [
  {
    num: "01",
    title: "Understanding a Crohn's disease diagnosis",
    description: "An educational sample showing how a story could connect symptoms, questions, decisions, and follow-up.",
  },
  {
    num: "02",
    title: "Managing a moderate ulcerative colitis flare",
    description: "An educational sample showing how a story could connect symptoms, questions, decisions, and follow-up.",
  },
  {
    num: "03",
    title: "Following treatment response over time",
    description: "An educational sample showing how a story could connect symptoms, questions, decisions, and follow-up.",
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    category: "Foundations",
    title: "IBD vs IBS: understanding the difference",
    description: "A concise, readable introduction designed to help you ask better questions and find the next useful topic.",
    readTime: "6 min read",
  },
  {
    category: "Diagnosis",
    title: "What happens during an IBD diagnosis?",
    description: "A concise, readable introduction designed to help you ask better questions and find the next useful topic.",
    readTime: "8 min read",
  },
  {
    category: "Living with IBD",
    title: "Understanding flares and remission",
    description: "A concise, readable introduction designed to help you ask better questions and find the next useful topic.",
    readTime: "10 min read",
  },
];

export const SPECIALISTS: SpecialistItem[] = [
  {
    name: "Dr. Arjun Mehta",
    specialty: "Gastroenterologist",
    expertise: "IBD specialist",
    location: "Pune, India",
    focus: "Crohn's disease · Ulcerative colitis",
  },
  {
    name: "Dr. Sarah Williams",
    specialty: "Gastroenterologist",
    expertise: "IBD & clinical research",
    location: "London, UK",
    focus: "Ulcerative colitis · Research",
  },
  {
    name: "Dr. Daniel Chen",
    specialty: "Gastroenterologist",
    expertise: "Complex IBD",
    location: "Singapore",
    focus: "Crohn's disease · Complex IBD",
  },
];

export const RESOURCES: ResourceItem[] = [
  { icon: BookOpen, title: "Patient guides", description: "Plain-language starting points for common IBD questions." },
  { icon: Search, title: "IBD glossary", description: "Clear explanations for words you may hear in care." },
  { icon: CircleHelp, title: "Questions for your doctor", description: "Prompts to help you prepare for your next visit." },
  { icon: ShieldCheck, title: "Tracking resources", description: "Sample tools for noticing patterns and preparing notes." },
  { icon: FlaskConical, title: "Research resources", description: "A starting point for reading studies and evidence." },
  { icon: HeartPulse, title: "Important organizations", description: "Fictional examples of trusted community support." },
];

export const FAQS = [
  {
    question: "What is IBD?",
    answer: "IBD stands for inflammatory bowel disease, a group of conditions that cause ongoing inflammation in the digestive system. This prototype is for general education only.",
  },
  {
    question: "What is the difference between Crohn's disease and ulcerative colitis?",
    answer: "They are the two major forms of IBD. They can share symptoms, but affect different areas and patterns of the digestive system.",
  },
  {
    question: "How is IBD diagnosed?",
    answer: "Doctors may use conversations, blood and stool tests, endoscopy, imaging, and biopsies together. There is no single test that explains every situation.",
  },
  {
    question: "Can IBD be treated?",
    answer: "Treatment plans are individual. They may aim to reduce inflammation, support remission, manage symptoms, and protect long-term health.",
  },
  {
    question: "Can people with IBD live normal lives?",
    answer: "Many people build full, active lives with IBD. Support, follow-up, practical planning, and an open relationship with a care team can all help.",
  },
];