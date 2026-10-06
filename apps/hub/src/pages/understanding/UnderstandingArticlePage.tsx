import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar, FileText, Activity, Microscope, ShieldCheck } from "lucide-react";
import { ARTICLE_DATABASE, UNDERSTANDING_TOPICS } from "../../data/mockData";

export const UnderstandingArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const article = slug ? ARTICLE_DATABASE[slug] : null;
  const data = article || {
    title: "Pathology Overview Pending",
    category: "Foundations",
    readTime: "N/A",
    date: "Current",
    content: "The detailed clinical baseline for this topic is currently being updated in the knowledge hub.",
  };

  // CORRECTED: This now points exclusively to UNDERSTANDING_TOPICS
  const currentIndex = UNDERSTANDING_TOPICS.findIndex((t) => t.slug === slug);
  const prevTopic = currentIndex > 0 ? UNDERSTANDING_TOPICS[currentIndex - 1] : null;
  const nextTopic = currentIndex < UNDERSTANDING_TOPICS.length - 1 ? UNDERSTANDING_TOPICS[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      {/* Navigation Top Bar - CORRECTED LINK */}
      <div className="border-b border-line bg-paper-2 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link to="/understanding" className="inline-flex items-center gap-2 text-xs font-semibold text-ink/60 hover:text-ink transition-colors">
            <ArrowLeft className="size-4" /> Back to Understanding IBD
          </Link>
        </div>
      </div>

      <div className="flex-grow">
        <header className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent">
                Region 01 · {data.category}
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
                  <span className="font-mono text-xs uppercase tracking-widest text-paper/80 mb-2">Anatomical Diagram</span>
                  <p className="text-[11px] max-w-[30ch]">Visual representation of gastrointestinal mucosal involvement.</p>
                </div>
              </figure>
            </div>
          </div>
        </header>

        <section className="bg-paper-2 border-y border-line py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <figure className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-full bg-paper relative ring-1 ring-ink/5 shadow-inner">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-ink/40 p-8 text-center">
                    <Microscope className="size-8 mb-3 text-accent" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">Histological View</span>
                  </div>
                </figure>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-display text-3xl text-ink mb-6">Immunological Factors</h2>
                <div className="prose prose-ink max-w-[55ch] text-sm leading-relaxed text-ink/75 space-y-5">
                  <p>
                    IBD is not caused by a single event, but rather a complex interplay between genetic susceptibility, environmental triggers, and a dysregulated immune response against the gut microbiome.
                  </p>
                  <ul className="space-y-2 mt-4 list-none pl-0">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">→</span>
                      <span><strong>Genetic markers:</strong> Variations in genes like NOD2 affect how the body recognizes bacterial cell walls.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">→</span>
                      <span><strong>Barrier dysfunction:</strong> Increased intestinal permeability allows luminal antigens to breach the epithelial barrier.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <ShieldCheck className="size-10 text-accent mx-auto mb-6" />
            <h2 className="font-display text-3xl text-ink mb-6">Clinical Context</h2>
            <p className="text-sm leading-relaxed text-ink/75 mb-10 max-w-[60ch] mx-auto">
              Accurate classification dictates the entire therapeutic trajectory. Recognizing the distinction between mucosal and transmural inflammation is critical for long-term prognosis.
            </p>
          </div>
        </section>
      </div>

      {/* CORRECTED: Navigation loops through UNDERSTANDING_TOPICS */}
      <nav className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevTopic ? (
            <Link to={`/understanding/${prevTopic.slug}`} className="group flex flex-col items-start w-full sm:w-1/2 text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-mist mb-1">Previous</span>
              <span className="inline-flex items-center gap-2 font-display text-xl text-ink/80 group-hover:text-accent transition-colors">
                <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                {prevTopic.label}
              </span>
            </Link>
          ) : (
            <div className="w-full sm:w-1/2" />
          )}

          {nextTopic && (
            <Link to={`/understanding/${nextTopic.slug}`} className="group flex flex-col items-end w-full sm:w-1/2 text-right">
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