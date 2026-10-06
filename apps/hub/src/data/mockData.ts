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
    href: "#understanding",
  },
  {
    number: "02",
    title: "Symptoms & diagnosis",
    description: "Common symptoms, warning signs, tests, imaging, and understanding results.",
    href: "#symptoms",
  },
  {
    number: "03",
    title: "Treatment & management",
    description: "Medications, biologics, surgery, monitoring, remission, and flares.",
    href: "#treatment",
  },
  {
    number: "04",
    title: "Diet & nutrition",
    description: "Nutrition basics, food tolerance, hydration, and eating through different seasons.",
    href: "#nutrition",
  },
  {
    number: "05",
    title: "Living with IBD",
    description: "Exercise, sleep, stress, work, travel, relationships, and everyday management.",
    href: "#living",
  },
  {
    number: "06",
    title: "Research & evidence",
    description: "How new findings move from the lab to the clinic, explained plainly.",
    href: "#research",
  },
];

export const UNDERSTANDING_TOPICS = [
  { label: "What is IBD?", slug: "what-is-ibd" },
  { label: "Types of IBD", slug: "types-of-ibd" },
  { label: "Crohn's disease", slug: "crohns-disease" },
  { label: "Ulcerative colitis", slug: "ulcerative-colitis" },
  { label: "Causes & risk factors", slug: "causes-and-risk-factors" },
  { label: "Genetics & family history", slug: "genetics-and-family-history" },
  { label: "Crohn's vs ulcerative colitis", slug: "crohns-vs-ulcerative-colitis" },
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
  { label: "Treatment goals", slug: "treatment-goals" },
  { label: "Medications", slug: "medications" },
  { label: "Biologics", slug: "biologics" },
  { label: "Small molecules", slug: "small-molecules" },
  { label: "Steroids", slug: "steroids" },
  { label: "Immunomodulators", slug: "immunomodulators" },
  { label: "Surgery", slug: "surgery" },
  { label: "Flare & remission", slug: "flare-and-remission" },
  { label: "Monitoring", slug: "monitoring" },
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
  { label: "Exercise", slug: "exercise" },
  { label: "Sleep", slug: "sleep" },
  { label: "Stress & mental wellbeing", slug: "stress-and-mental-wellbeing" },
  { label: "Work & education", slug: "work-and-education" },
  { label: "Travel", slug: "travel" },
  { label: "Relationships & social life", slug: "relationships-and-social-life" },
  { label: "Everyday management", slug: "everyday-management" },
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

export const ARTICLE_DATABASE: Record<string, any> = {
  // TREATMENT ENTRIES
  "treatment-goals": {
    title: "Treatment Goals & Remission Targets",
    category: "Therapeutics",
    readTime: "5 min read",
    date: "October 2026",
    content: "The primary goal of modern IBD management has shifted from merely controlling symptoms to achieving deep, mucosal healing. This concept, known as 'treat to target,' relies on objective biomarkers rather than subjective feeling.",
  },
  "medications": {
    title: "Overview of IBD Medications",
    category: "Therapeutics",
    readTime: "8 min read",
    date: "October 2026",
    content: "Medical therapy for IBD involves step-up or top-down approaches depending on disease severity. The pharmacological arsenal aims to induce and maintain remission while minimizing long-term toxicity.",
  },
  "biologics": {
    title: "Biologic Therapies",
    category: "Therapeutics",
    readTime: "12 min read",
    date: "October 2026",
    content: "Biologics are targeted therapies created from living organisms. They work by targeting specific proteins in the immune system responsible for inflammation, such as TNF-alpha, integrins, or interleukins.",
  },
  "small-molecules": {
    title: "Small Molecule Drugs",
    category: "Therapeutics",
    readTime: "7 min read",
    date: "October 2026",
    content: "Unlike biologics, small molecule drugs are chemically synthesized and can often be taken orally. They target intracellular pathways, such as JAK inhibitors, blocking inflammation from inside the cell.",
  },
  "steroids": {
    title: "Corticosteroids in IBD",
    category: "Therapeutics",
    readTime: "6 min read",
    date: "October 2026",
    content: "Steroids act quickly to suppress the immune system and control acute flares. However, due to significant side effects, they are strictly used for short-term induction rather than long-term maintenance.",
  },
  "immunomodulators": {
    title: "Immunomodulators",
    category: "Therapeutics",
    readTime: "7 min read",
    date: "October 2026",
    content: "Immunomodulators modify the immune system's activity, reducing ongoing inflammation. They are often used in combination with biologics to prevent the body from building antibodies against the biologic drug.",
  },
  "surgery": {
    title: "Surgical Interventions",
    category: "Therapeutics",
    readTime: "10 min read",
    date: "October 2026",
    content: "Surgery is a primary treatment modality for IBD when medical therapy fails or complications like strictures or fistulas arise. It can be curative for Ulcerative Colitis, but Crohn's recurrence post-surgery is common.",
  },
  "flare-and-remission": {
    title: "Managing Flares & Sustaining Remission",
    category: "Therapeutics",
    readTime: "9 min read",
    date: "October 2026",
    content: "A flare is a re-emergence of active inflammation. Understanding personal triggers and working with your care team on a rapid escalation plan is vital to minimizing tissue damage and restoring remission.",
  },
  "monitoring": {
    title: "Long-term Monitoring Protocols",
    category: "Therapeutics",
    readTime: "6 min read",
    date: "October 2026",
    content: "Consistent disease tracking via non-invasive markers like Fecal Calprotectin and CRP, combined with scheduled endoscopic surveillance, provides a comprehensive picture of disease activity over a patient's lifetime.",
  },

  // UNDERSTANDING ENTRIES
  "what-is-ibd": {
    title: "Understanding Inflammatory Bowel Disease",
    category: "Foundations",
    readTime: "4 min read",
    date: "October 2026",
    content: "Inflammatory Bowel Disease (IBD) represents a group of intestinal disorders that cause prolonged inflammation of the digestive tract. It is characterized by an abnormal immune response against the gut's own tissues and microbiome.",
  },
  "types-of-ibd": {
    title: "The Main Types of IBD",
    category: "Foundations",
    readTime: "3 min read",
    date: "October 2026",
    content: "While Crohn's disease and ulcerative colitis are the two principal forms of IBD, some patients may be diagnosed with indeterminate colitis when clinical and histological features overlap.",
  },
  "crohns-disease": {
    title: "Crohn's Disease",
    category: "Foundations",
    readTime: "6 min read",
    date: "October 2026",
    content: "Crohn's disease can affect any part of the gastrointestinal tract from the mouth to the anus, characterized by transmural inflammation and 'skip lesions' where healthy tissue is interspersed with inflamed areas.",
  },
  "ulcerative-colitis": {
    title: "Ulcerative Colitis",
    category: "Foundations",
    readTime: "5 min read",
    date: "October 2026",
    content: "Ulcerative colitis is restricted to the colon and rectum, presenting as continuous, superficial mucosal inflammation. It typically begins in the rectum and spreads proximally.",
  },
  "causes-and-risk-factors": {
    title: "Causes & Risk Factors",
    category: "Foundations",
    readTime: "7 min read",
    date: "October 2026",
    content: "The exact cause of IBD remains unknown, but it is widely accepted as a complex combination of genetic predisposition, environmental triggers, and a dysregulated immune response.",
  },
  "genetics-and-family-history": {
    title: "Genetics & Family History",
    category: "Foundations",
    readTime: "5 min read",
    date: "October 2026",
    content: "A family history of IBD is one of the strongest risk factors. While over 200 genetic loci have been associated with IBD risk, having a gene mutation does not guarantee the disease will manifest.",
  },
  "crohns-vs-ulcerative-colitis": {
    title: "Crohn's vs Ulcerative Colitis",
    category: "Foundations",
    readTime: "6 min read",
    date: "October 2026",
    content: "Understanding the differential diagnosis between these two conditions is essential, as the distinction informs the choice of medical therapy and surgical viability.",
  },

  // LIVING ENTRIES
  "exercise": {
    title: "Exercise & Physical Activity with IBD",
    category: "Human Context",
    readTime: "5 min read",
    date: "October 2026",
    content: "Regular physical activity helps reduce systemic inflammation, supports mental wellbeing, and improves bone density—which is particularly important for patients managing chronic conditions.",
  },
  "sleep": {
    title: "Restorative Sleep Hygiene",
    category: "Human Context",
    readTime: "6 min read",
    date: "October 2026",
    content: "Sleep disturbances frequently correlate with active inflammation and nocturnal symptoms. Optimizing circadian rhythms and sleep architecture is a core pillar of sustained remission.",
  },
  "stress-and-mental-wellbeing": {
    title: "Stress & the Gut-Brain Axis",
    category: "Human Context",
    readTime: "8 min read",
    date: "October 2026",
    content: "The gut and brain communicate continuously via the enteric nervous system. While stress does not cause IBD, managing psychological stress directly dampens visceral hypersensitivity.",
  },
  "work-and-education": {
    title: "Work, Productivity & Legal Rights",
    category: "Human Context",
    readTime: "6 min read",
    date: "October 2026",
    content: "Navigating career goals with a chronic illness involves understanding workplace accommodations, flare contingency plans, and legal protections under disability acts.",
  },
  "travel": {
    title: "Traveling with Inflammatory Bowel Disease",
    category: "Human Context",
    readTime: "7 min read",
    date: "October 2026",
    content: "Planning ahead makes global travel entirely achievable. Key preparations include medication temperature control, TSA medical documentation letters, and itinerary mapping.",
  },
  "relationships-and-social-life": {
    title: "Relationships & Social Communication",
    category: "Human Context",
    readTime: "5 min read",
    date: "October 2026",
    content: "Communicating chronic symptom realities to partners, family, and friends builds a strong support network that buffers against isolation during flares.",
  },
  "everyday-management": {
    title: "Everyday Management Strategies",
    category: "Human Context",
    readTime: "6 min read",
    date: "October 2026",
    content: "Building routine habits around symptom tracking, medication adherence, and energy pacing ensures that IBD fits into your life rather than dictating it.",
  },
};