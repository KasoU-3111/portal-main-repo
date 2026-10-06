import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar, FileText, Activity, Microscope, ShieldCheck } from "lucide-react";
import { ARTICLE_DATABASE, TREATMENT_TOPICS } from "../../data/mockData";

export const TreatmentArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const article = slug ? ARTICLE_DATABASE[slug] : null;
  const data = article || {
    title: "Clinical Overview Pending",
    category: "Therapeutics",
    readTime: "N/A",
    date: "Current",
    content: "The detailed clinical breakdown for this specific therapeutic class is currently being updated in the knowledge hub.",
  };

  // Calculate Previous and Next topics
  const currentIndex = TREATMENT_TOPICS.findIndex((t) => t.slug === slug);
  const prevTopic = currentIndex > 0 ? TREATMENT_TOPICS[currentIndex - 1] : null;
  const nextTopic = currentIndex < TREATMENT_TOPICS.length - 1 ? TREATMENT_TOPICS[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      {/* Navigation Top Bar */}
      <div className="border-b border-line bg-paper-2 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link to="/management" className="inline-flex items-center gap-2 text-xs font-semibold text-ink/60 hover:text-ink transition-colors">
            <ArrowLeft className="size-4" /> Back to Treatment & Living
          </Link>
        </div>
      </div>

      <div className="flex-grow">
        {/* LAYER 1 & TOP OF Z-PATTERN: Intro (Text Left, Image Right) */}
        <header className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent">
                Region 03 · {data.category}
              </span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl font-medium leading-tight text-ink">
                {data.title}
              </h1>
              
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-mist">
                <div className="flex items-center gap-1.5"><Clock className="size-3.5" /> {data.readTime}</div>
                <div className="flex items-center gap-1.5"><Calendar className="size-3.5" /> {data.date}</div>
                <div className="flex items-center gap-1.5"><FileText className="size-3.5" /> Peer Reviewed</div>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-ink/80 font-medium max-w-[45ch]">
                {data.content}
              </p>
            </div>
            
            <div className="lg:col-span-6">
              <figure className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink-2 relative group shadow-lg">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-paper/40 border border-paper/10 p-8 text-center">
                  <Activity className="size-10 mb-3 text-accent-2" />
                  <span className="font-mono text-xs uppercase tracking-widest text-paper/80 mb-2">Primary Modality Diagram</span>
                  <p className="text-[11px] max-w-[30ch]">Visual representation of the therapeutic approach and mucosal healing targets.</p>
                </div>
              </figure>
            </div>
          </div>
        </header>

        {/* LAYER 2 & MIDDLE OF Z-PATTERN: Mechanism (Image Left, Text Right) */}
        <section className="bg-paper-2 border-y border-line py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Visual on the Left */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <figure className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-full bg-paper relative ring-1 ring-ink/5 shadow-inner">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-ink/40 p-8 text-center">
                    <Microscope className="size-8 mb-3 text-accent" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">Cellular Mechanism</span>
                  </div>
                </figure>
              </div>

              {/* Text on the Right */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-display text-3xl text-ink mb-6">Mechanism of Action</h2>
                <div className="prose prose-ink max-w-[55ch] text-sm leading-relaxed text-ink/75 space-y-5">
                  <p>
                    In inflammatory bowel disease, the mucosal immune system initiates a disproportionate response to commensal gut flora. The therapeutic target relies on modulating these pathways to induce epithelial restitution and mucosal healing.
                  </p>
                  <p>
                    Rather than broadly suppressing the immune system, modern therapeutics increasingly aim to block specific inflammatory cytokines or prevent lymphocytes from migrating into the intestinal tissue.
                  </p>
                  <ul className="space-y-2 mt-4 list-none pl-0">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">→</span>
                      <span><strong>Induction phase:</strong> Rapidly neutralizes active inflammation to provide symptomatic relief.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">→</span>
                      <span><strong>Maintenance phase:</strong> Sustains deep tissue healing to prevent long-term structural bowel damage.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* LAYER 3: Clinical Benchmarks */}
        <section className="bg-paper py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <ShieldCheck className="size-10 text-accent mx-auto mb-6" />
            <h2 className="font-display text-3xl text-ink mb-6">Clinical Benchmarks</h2>
            <p className="text-sm leading-relaxed text-ink/75 mb-10 max-w-[60ch] mx-auto">
              Endoscopic healing is defined as a Mayo Endoscopic Subscore of 0 or 1 in ulcerative colitis, and the absence of ulceration (SES-CD score) in Crohn's disease. Continued monitoring provides a non-invasive window into disease activity.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="rounded-xl border border-line bg-paper-2 p-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">Objective Marker</span>
                <h4 className="font-display text-lg text-ink">Fecal Calprotectin</h4>
                <p className="mt-2 text-xs text-ink/70 leading-relaxed">Measures neutrophil migration to the intestinal mucosa. Levels &lt;150-250 µg/g generally indicate controlled disease.</p>
              </div>
              <div className="rounded-xl border border-line bg-paper-2 p-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">Systemic Marker</span>
                <h4 className="font-display text-lg text-ink">C-Reactive Protein (CRP)</h4>
                <p className="mt-2 text-xs text-ink/70 leading-relaxed">A systemic inflammatory marker tracked via blood serum. Useful for detecting acute flares, though not elevated in all patients.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* LAYER 4: Forward/Backward Article Navigation */}
      <nav className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevTopic ? (
            <Link 
              to={`/treatment/${prevTopic.slug}`}
              className="group flex flex-col items-start w-full sm:w-1/2 text-left"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-mist mb-1">Previous</span>
              <span className="inline-flex items-center gap-2 font-display text-xl text-ink/80 group-hover:text-accent transition-colors">
                <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                {prevTopic.label}
              </span>
            </Link>
          ) : (
            <div className="w-full sm:w-1/2" /> // Empty placeholder to keep Next on the right
          )}

          {nextTopic && (
            <Link 
              to={`/treatment/${nextTopic.slug}`}
              className="group flex flex-col items-end w-full sm:w-1/2 text-right"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-mist mb-1">Next Topic</span>
              <span className="inline-flex items-center gap-2 font-display text-xl text-ink/80 group-hover:text-accent transition-colors">
                {nextTopic.label}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};