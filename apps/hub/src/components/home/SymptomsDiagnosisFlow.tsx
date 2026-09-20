import React, { useState } from "react";
import { Activity, ArrowRight, CheckCircle, FileText, Microscope, Stethoscope } from "lucide-react";

interface StepDetail {
  step: string;
  title: string;
  category: string;
  icon: React.ElementType;
  overview: string;
  tests: { name: string; target: string; note: string }[];
  patientTip: string;
}

const DIAGNOSTIC_STEPS: StepDetail[] = [
  {
    step: "01",
    title: "Clinical Presentation",
    category: "Symptom Onset",
    icon: Activity,
    overview: "Recognizing systemic red flags and gastrointestinal distress persisting beyond 4 consecutive weeks.",
    tests: [
      { name: "Symptom Logging", target: "Frequency & Consistency", note: "Bristol Stool Chart scoring (Types 6-7)" },
      { name: "Red Flag Review", target: "Nocturnal Awakening", note: "Rule out irritable bowel syndrome (functional)" },
      { name: "Systemic Signs", target: "Weight Loss / Fever", note: "Indicates active organic inflammation" },
    ],
    patientTip: "Record exact stool frequencies and note if cramps awaken you from deep sleep at night.",
  },
  {
    step: "02",
    title: "Consultation & Exam",
    category: "Clinical Assessment",
    icon: Stethoscope,
    overview: "In-depth history screening, family autoimmune pedigree review, and abdominal physical exam.",
    tests: [
      { name: "Abdominal Palpation", target: "Right Lower Quadrant Tenderness", note: "Common for terminal ileitis" },
      { name: "Family Pedigree", target: "First-degree IBD history", note: "Elevates risk profile by 4-8x" },
      { name: "Medication Review", target: "NSAID ingestion history", note: "NSAIDs can trigger or mimic mucosal ulceration" },
    ],
    patientTip: "Bring a detailed list of immediate relatives diagnosed with Crohn’s, Colitis, Celiac, or Ankylosing Spondylitis.",
  },
  {
    step: "03",
    title: "Laboratory Biomarkers",
    category: "Non-Invasive Testing",
    icon: FileText,
    overview: "Evaluating inflammation indices and ruling out acute infectious enteritis before scheduling scopes.",
    tests: [
      { name: "Fecal Calprotectin", target: "> 150–250 µg/g", note: "Neutrophil protein confirming mucosal inflammation" },
      { name: "C-Reactive Protein (CRP)", target: "> 5.0 mg/L", note: "Systemic acute-phase inflammatory protein" },
      { name: "Stool PCR Multiplex", target: "C. difficile / Salmonella", note: "Rules out bacterial/parasitic gastroenteritis" },
    ],
    patientTip: "Fecal calprotectin differentiates true autoimmune tissue inflammation from functional IBS with >90% sensitivity.",
  },
  {
    step: "04",
    title: "Endoscopy & Scopes",
    category: "Direct Visualization",
    icon: Microscope,
    overview: "Direct mucosal examination, ileal intubation, and targeted histological tissue biopsy sampling.",
    tests: [
      { name: "Ileocolonoscopy", target: "Terminal Ileum + Colon", note: "Examines vascular pattern, ulcerations, skip zones" },
      { name: "Stepwise Biopsies", target: "6-8 Anatomical Segments", note: "Required even if mucosal tissue appears grossly normal" },
      { name: "Enterography (MRI/CT)", target: "Small Bowel Extent", note: "Identifies transmural thickening or occult strictures" },
    ],
    patientTip: "Adequate bowel prep is critical: clean mucosal visualization prevents missed subtle aphthous ulcers.",
  },
  {
    step: "05",
    title: "Consensus Diagnosis",
    category: "Therapeutic Blueprint",
    icon: CheckCircle,
    overview: "Integration of histological biopsies, endoscopy scoring, and Montreal Classification phenotype.",
    tests: [
      { name: "Montreal Subtyping", target: "A (Age), L (Location), B (Behavior)", note: "Classifies stricturing, penetrating, or inflammatory" },
      { name: "Endoscopic Mayo Score", target: "Score 0 to 3 (Colitis)", note: "Establishes quantitative baseline for mucosal healing" },
      { name: "SES-CD Score", target: "Crohn's Disease Severity", note: "Guides step-up vs top-down biological strategy" },
    ],
    patientTip: "Request your pathology biopsy report and colonoscopy photo records for your personal ongoing health file.",
  },
];

export const SymptomsDiagnosisFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = DIAGNOSTIC_STEPS[activeStep];
  const StepIcon = current.icon;

  return (
    <section id="symptoms" className="bg-ink text-paper py-16 sm:py-24 border-b border-line/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent-2">
            Structured Investigation
          </span>
          <h2 className="font-display text-3xl font-medium sm:text-4xl text-paper mt-2">
            The IBD Diagnostic Pathway
          </h2>
          <p className="mt-3 text-sm text-paper/70 leading-relaxed">
            Diagnosing IBD is not based on a single test. Follow the phased clinical protocol through which gastroenterologists systematically verify mucosal disease.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-paper/10 pb-4">
          {DIAGNOSTIC_STEPS.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3 text-left rounded-lg transition-all border ${
                  isActive
                    ? "bg-ink-2 border-accent-2 shadow-sm ring-1 ring-accent-2"
                    : "bg-transparent border-transparent hover:bg-paper/5 text-paper/60"
                }`}
              >
                <span className={`font-mono text-xs font-bold block ${isActive ? "text-accent-2" : "text-mist"}`}>
                  Phase {s.step}
                </span>
                <span className="text-xs font-medium text-paper block mt-1 truncate">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-ink-2 rounded-2xl p-6 sm:p-8 ring-1 ring-paper/10">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-lg bg-accent/20 text-accent-2">
                <StepIcon className="size-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-mist block">
                  Phase {current.step} · {current.category}
                </span>
                <h3 className="font-display text-2xl font-medium text-paper mt-0.5">
                  {current.title}
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm text-paper/80 leading-relaxed font-normal">
              {current.overview}
            </p>

            {/* Test Matrix */}
            <div className="mt-6 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent-2 font-semibold block">
                Investigative Focus & Benchmarks
              </span>
              <div className="grid gap-2.5">
                {current.tests.map((t, i) => (
                  <div key={i} className="rounded-lg bg-ink/60 border border-paper/10 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div>
                      <strong className="text-paper font-semibold block">{t.name}</strong>
                      <span className="text-paper/60 text-[11px]">{t.note}</span>
                    </div>
                    <span className="font-mono text-[11px] text-accent-2 bg-accent-2/10 px-2 py-0.5 rounded self-start sm:self-center">
                      {t.target}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actionable Patient Context */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-paper/15 bg-paper/5 p-6 backdrop-blur-xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent-2 font-semibold block">
                Clinical Preparation Note
              </span>
              <p className="mt-3 text-xs leading-relaxed text-paper/80 font-normal">
                {current.patientTip}
              </p>
            </div>

            <div className="rounded-xl bg-paper p-6 text-ink shadow-md">
              <h4 className="font-display text-lg font-medium">Ready to review treatment protocols?</h4>
              <p className="mt-1 text-xs text-ink/70 leading-relaxed">
                Once diagnostic staging is complete, gastroenterologists establish step-up or top-down biological maintenance.
              </p>
              <a
                href="#treatment"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-ink transition-colors"
              >
                Jump to Treatment & Management <ArrowRight className="size-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};