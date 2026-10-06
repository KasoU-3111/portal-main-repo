import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar, FileText, Activity, Microscope, ShieldCheck } from "lucide-react";
import { ARTICLE_DATABASE, LIVING_TOPICS } from "../../data/mockData";

export const LivingArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const article = slug ? ARTICLE_DATABASE[slug] : null;
  const data = article || {
    title: "Lifestyle Overview Pending",
    category: "Human Context",
    readTime: "N/A",
    date: "Current",
    content: "The detailed lifestyle guideline for this topic is currently being updated in the knowledge hub.",
  };

  const currentIndex = LIVING_TOPICS.findIndex((t) => t.slug === slug);
  const prevTopic = currentIndex > 0 ? LIVING_TOPICS[currentIndex - 1] : null;
  const nextTopic = currentIndex < LIVING_TOPICS.length - 1 ? LIVING_TOPICS[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <div className="border-b border-line bg-paper-2 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link to="/management" className="inline-flex items-center gap-2 text-xs font-semibold text-ink/60 hover:text-ink transition-colors">
            <ArrowLeft className="size-4" /> Back to Treatment & Living
          </Link>
        </div>
      </div>

      <div className="flex-grow">
        <header className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent">
                Region 05 · {data.category}
              </span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl font-medium leading-tight text-ink">
                {data.title}
              </h1>
              
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-mist">
                <div className="flex items-center gap-1.5"><Clock className="size-3.5" /> {data.readTime}</div>
                <div className="flex items-center gap-1.5"><Calendar className="size-3.5" /> {data.date}</div>
                <div className="flex items-center gap-1.5"><FileText className="size-3.5" /> Community Reviewed</div>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-ink/80 font-medium max-w-[45ch]">
                {data.content}
              </p>
            </div>
            
            <div className="lg:col-span-6">
              <figure className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink-2 relative group shadow-lg">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-paper/40 border border-paper/10 p-8 text-center">
                  <Activity className="size-10 mb-3 text-accent-2" />
                  <span className="font-mono text-xs uppercase tracking-widest text-paper/80 mb-2">Everyday Stability Protocol</span>
                  <p className="text-[11px] max-w-[30ch]">Practical framework for managing daily energy and pacing.</p>
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
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">Habit Architecture</span>
                  </div>
                </figure>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-display text-3xl text-ink mb-6">Actionable Frameworks</h2>
                <div className="prose prose-ink max-w-[55ch] text-sm leading-relaxed text-ink/75 space-y-5">
                  <p>
                    Sustaining long-term remission requires addressing the human context of IBD. Small, consistent modifications to daily habits compound significantly over time.
                  </p>
                  <ul className="space-y-2 mt-4 list-none pl-0">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">→</span>
                      <span><strong>Energy Pacing:</strong> Matching daily tasks to available energy reserves to avoid exhaustion cascades.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">→</span>
                      <span><strong>Proactive Planning:</strong> Maintaining an active dialogue with your multidisciplinary care team.</span>
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
            <h2 className="font-display text-3xl text-ink mb-6">Patient Guidance</h2>
            <p className="text-sm leading-relaxed text-ink/75 mb-10 max-w-[60ch] mx-auto">
              Your routine should accommodate your condition without letting the condition define your lifestyle boundaries.
            </p>
          </div>
        </section>
      </div>

      <nav className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevTopic ? (
            <Link to={`/living/${prevTopic.slug}`} className="group flex flex-col items-start w-full sm:w-1/2 text-left">
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
            <Link to={`/living/${nextTopic.slug}`} className="group flex flex-col items-end w-full sm:w-1/2 text-right">
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