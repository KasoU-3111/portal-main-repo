import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Layers, MapPin, Microscope, ShieldAlert } from "lucide-react";

interface PathologyDetail {
  id: "crohns" | "colitis";
  title: string;
  tagline: string;
  scope: string;
  depth: string;
  hallmarks: string[];
  symptoms: string[];
  biomarkers: string;
  surgicalProfile: string;
}

const PATHOLOGIES: Record<"crohns" | "colitis", PathologyDetail> = {
  crohns: {
    id: "crohns",
    title: "Crohn’s Disease",
    tagline: "Transmural, Patchy Granulomatous Inflammation",
    scope: "Any region from mouth to anus (predominantly terminal ileum & colon)",
    depth: "Transmural (penetrates all layers: mucosa, submucosa, muscularis)",
    hallmarks: [
      "Discontinuous skip lesions with healthy intervening tissue",
      "Cobblestone mucosal appearance under ileocolonoscopy",
      "Deep fissures, strictures, and fistulizing tracts",
      "Non-caseating epithelioid granulomas (~50% of biopsies)",
    ],
    symptoms: ["Right lower quadrant pain", "Chronic non-bloody or bloody diarrhea", "Malabsorption & weight loss", "Low-grade fevers & fatigue"],
    biomarkers: "Elevated Fecal Calprotectin (>250 µg/g), Elevated CRP/ESR, Anti-Saccharomyces cerevisiae antibodies (ASCA+)",
    surgicalProfile: "Segmental bowel resections, strictureplasty; non-curative (recurrence common at anastomotic margins)",
  },
  colitis: {
    id: "colitis",
    title: "Ulcerative Colitis",
    tagline: "Continuous, Superficial Mucosal Inflammation",
    scope: "Confined exclusively to the large intestine (initiates at rectum, extends proximally)",
    depth: "Mucosal & Submucosal only (superficial intestinal wall)",
    hallmarks: [
      "Unbroken, uniform mucosal inflammation without skip areas",
      "Friable, granular mucosa with spontaneous contact bleeding",
      "Crypt abscesses and mucosal ulcerations",
      "Formation of inflammatory pseudopolyps",
    ],
    symptoms: ["Recurrent bloody diarrhea with mucous", "Urgent tenesmus (constant evacuation sensation)", "Nocturnal bowel movements", "Left-sided lower abdominal cramping"],
    biomarkers: "Markedly Elevated Fecal Calprotectin (>500 µg/g during flare), perinuclear anti-neutrophil cytoplasmic antibodies (pANCA+)",
    surgicalProfile: "Restorative Proctocolectomy with Ileal Pouch-Anal Anastomosis (IPAA / J-Pouch); curative for mucosal colon disease",
  },
};

export const DiseaseComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"crohns" | "colitis">("crohns");
  const data = PATHOLOGIES[activeTab];

  return (
    <section id="understanding" className="bg-paper-2 py-16 sm:py-24 border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-line">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent">
              Clinical Differential Matrix
            </span>
            <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl mt-2">
              Crohn's Disease vs Ulcerative Colitis
            </h2>
            <p className="mt-2 text-sm text-ink/70 max-w-2xl leading-relaxed">
              While both are categorized under Inflammatory Bowel Disease (IBD), they diverge fundamentally in depth of invasion, distribution, histology, and treatment strategy.
            </p>
          </div>

          {/* Interactive Toggle Switch */}
          <div className="inline-flex rounded-lg bg-paper p-1.5 ring-1 ring-ink/10">
            <button
              onClick={() => setActiveTab("crohns")}
              className={`px-5 py-2 text-xs font-semibold rounded-md transition-all ${
                activeTab === "crohns"
                  ? "bg-ink text-paper shadow-sm"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              Crohn's Disease
            </button>
            <button
              onClick={() => setActiveTab("colitis")}
              className={`px-5 py-2 text-xs font-semibold rounded-md transition-all ${
                activeTab === "colitis"
                  ? "bg-ink text-paper shadow-sm"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              Ulcerative Colitis
            </button>
          </div>
        </div>

        {/* Dynamic Comparative Console */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Anatomical & Pathology Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-paper p-6 sm:p-8 ring-1 ring-ink/5 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {data.id === "crohns" ? "Full GI Tract · Transmural" : "Colon & Rectum · Mucosal"}
                </span>
                <span className="text-xs text-mist font-medium">Pathology Review</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink mt-4">
                {data.title}
              </h3>
              <p className="text-sm font-medium text-accent mt-1">{data.tagline}</p>

              {/* Anatomical Key Markers */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-line text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink font-semibold">Anatomical Scope:</strong>
                    <span className="text-ink/70 leading-relaxed">{data.scope}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="size-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink font-semibold">Depth of Tissue Invasion:</strong>
                    <span className="text-ink/70 leading-relaxed">{data.depth}</span>
                  </div>
                </div>
              </div>

              {/* Endoscopic & Biopsy Hallmarks */}
              <div className="mt-6 pt-6 border-t border-line">
                <span className="text-xs font-semibold uppercase tracking-wider text-mist flex items-center gap-2">
                  <Microscope className="size-3.5" /> Endoscopic & Histological Hallmarks
                </span>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-ink/80">
                  {data.hallmarks.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-accent-2 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Biomarker Diagnostic Guidance */}
            <div className="rounded-xl border border-line bg-paper/60 p-4 sm:p-5 flex items-start gap-3.5 text-xs">
              <ShieldAlert className="size-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-ink font-semibold block">Laboratory Biomarker Expectation:</strong>
                <p className="text-ink/70 mt-0.5 leading-relaxed">{data.biomarkers}</p>
              </div>
            </div>
          </div>

          {/* Quick-Scan Clinical Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Common Symptom Indicators */}
            <div className="rounded-xl bg-paper p-6 ring-1 ring-ink/5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-mist">
                Presenting Symptom Cluster
              </span>
              <ul className="mt-4 space-y-2 text-xs text-ink/80">
                {data.symptoms.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2 border-b border-line/60 pb-2">
                    <span className="font-mono text-accent text-[10px] font-bold">0{idx + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Surgical Intervention Profile */}
            <div className="rounded-xl bg-ink p-6 text-paper ring-1 ring-white/10 shadow-lg">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent-2">
                Surgical Strategy & Prognosis
              </span>
              <p className="mt-3 text-xs leading-relaxed text-paper/80 font-normal">
                {data.surgicalProfile}
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-mist">Clinical Guidance</span>
                <a href="#treatment" className="text-accent-2 hover:underline inline-flex items-center gap-1 font-medium">
                  Review Therapies <ArrowRight className="size-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};