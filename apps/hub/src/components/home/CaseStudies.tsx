import React from "react";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "../../data/mockData";
import { SectionHeading } from "../ui/SectionHeading";

export const CaseStudies: React.FC = () => {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading eyebrow="Fictional / educational examples" title="Learn through case studies" detail="A future library of lived pathways" />
        <div className="grid gap-4 md:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.title} className="rounded-xl border border-line bg-paper-2 p-5">
              <span className="text-[10px] uppercase tracking-[0.18em] text-accent">Case study {cs.num}</span>
              <h3 className="mt-3 font-display text-xl leading-snug text-ink">{cs.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/60">{cs.description}</p>
              <button className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-ink hover:text-accent transition-colors">
                Read example <ArrowRight className="size-3" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};