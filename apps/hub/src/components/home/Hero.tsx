import React from "react";
import { ArrowRight, Stethoscope } from "lucide-react";
import { KnowledgeMap } from "./KnowledgeMap";

export const Hero: React.FC = () => {
  return (
    <section id="top" className="bg-ink text-paper py-12 sm:py-16 lg:py-20 transition-colors duration-300">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="mb-4 text-[11px] font-mono uppercase tracking-[0.25em] text-accent-2">
            A calm illuminated atlas of understanding
          </p>
          <h1 className="max-w-[20ch] font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl text-paper">
            Understanding IBD Starts With Knowledge.
          </h1>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-paper/70">
            Explore clear, structured information about Inflammatory Bowel Disease — from symptoms and diagnosis to treatment, research, nutrition and everyday life.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#start"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-xs font-semibold text-paper hover:bg-accent-2 hover:text-ink transition-colors ring-1 ring-accent/40"
            >
              Start Exploring IBD <ArrowRight className="size-3.5" />
            </a>
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-xs font-medium text-paper/80 hover:bg-paper/10 hover:text-paper transition-colors"
            >
              <Stethoscope className="size-3.5" /> Explore Latest Research
            </a>
          </div>
          <div className="mt-8 flex gap-6 text-[12px] text-mist font-mono">
            <div><span className="block font-display text-xl text-paper">6</span> pathways</div>
            <div><span className="block font-display text-xl text-paper">38</span> guides</div>
            <div><span className="block font-display text-xl text-paper">214</span> sources cited</div>
          </div>
        </div>

        {/* Hero Diagram */}
        <KnowledgeMap />
      </div>
    </section>
  );
};