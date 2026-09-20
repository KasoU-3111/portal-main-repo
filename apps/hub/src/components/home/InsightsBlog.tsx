import React from "react";
import { ArrowRight } from "lucide-react";
import { INSIGHT_ARTICLES } from "../../data/mockData";
import { SectionHeading } from "../ui/SectionHeading";

export const InsightsBlog: React.FC = () => {
  return (
    <section className="bg-paper-2">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading eyebrow="IBD knowledge & insights" title="Small questions, clearly explained" detail="Sample article library" />
        <div className="grid gap-4 md:grid-cols-3">
          {INSIGHT_ARTICLES.map((article) => (
            <article key={article.title} className="rounded-xl bg-paper p-5 ring-1 ring-ink/5">
              <span className="text-[10px] uppercase tracking-[0.18em] text-accent">{article.category}</span>
              <h3 className="mt-3 font-display text-xl leading-snug text-ink">{article.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/60">{article.description}</p>
              <div className="mt-4 flex items-center justify-between text-[12px] text-mist">
                <span>{article.readTime}</span>
                <button className="inline-flex items-center gap-1 font-medium text-ink hover:text-accent transition-colors">
                  Read more <ArrowRight className="size-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};