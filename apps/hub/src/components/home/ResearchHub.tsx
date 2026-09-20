import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { RESEARCH_ITEMS } from "../../data/mockData";
import { SectionHeading } from "../ui/SectionHeading";

export const ResearchHub: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Research papers");
  const filters = ["Research papers", "Clinical studies", "Case studies", "Emerging treatments", "New technologies"];

  return (
    <section id="research" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading eyebrow="Region 06 · research hub" title="Discover the latest IBD research" detail="Fictional sample entries" light />
        <div className="mb-7 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                activeFilter === filter
                  ? "bg-accent text-paper border-accent hover:bg-accent-2 hover:text-ink"
                  : "border-paper/20 bg-transparent text-paper/70 hover:bg-paper/10 hover:text-paper"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {RESEARCH_ITEMS.map((paper) => (
            <article key={paper.title} className="group rounded-xl bg-ink-2 p-5 ring-1 ring-paper/10 transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between gap-3 text-[11px] text-mist">
                <span className="uppercase tracking-[0.18em] text-accent-2">{paper.category}</span>
                <span>{paper.date}</span>
              </div>
              <h3 className="mt-3 max-w-[30ch] font-display text-2xl leading-tight text-paper">{paper.title}</h3>
              <p className="mt-2 max-w-[52ch] text-[13px] leading-relaxed text-paper/60">{paper.description}</p>
              <button className="mt-3 inline-flex items-center gap-1 text-xs text-accent-2 hover:text-paper transition-colors">
                Read more <ArrowRight className="size-3" />
              </button>
            </article>
          ))}
        </div>
        <button className="mt-7 inline-flex items-center gap-2 rounded-md border border-paper/20 bg-transparent px-4 py-2 text-xs font-medium text-paper hover:bg-paper/10 transition-colors">
          Explore Research Hub <ArrowRight className="size-3" />
        </button>
      </div>
    </section>
  );
};