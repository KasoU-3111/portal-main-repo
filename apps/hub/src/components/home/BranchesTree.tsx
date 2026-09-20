import React from "react";
import { ArrowRight } from "lucide-react";
import { BRANCHES } from "../../data/mockData";

export const BranchesTree: React.FC = () => {
  return (
    <section id="tree" className="bg-paper-2">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8 max-w-[46ch]">
          <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-accent">The map · six branches</p>
          <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">One ecosystem, six connected regions</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            Start with the basics or follow a specific thread. Each region opens into a set of focused, readable guides.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.map((branch) => (
            <a
              key={branch.number}
              href={branch.href}
              className="group relative rounded-xl bg-paper p-5 ring-1 ring-ink/5 transition-transform hover:-translate-y-1"
            >
              <span className="absolute inset-x-5 top-0 h-px bg-accent/40" />
              <span className="text-[11px] font-medium text-accent">Region {branch.number}</span>
              <h3 className="mt-2 font-display text-xl text-ink">{branch.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-ink/60">{branch.description}</p>
              <div className="mt-4 flex items-center justify-between text-[12px]">
                <span className="text-mist">{branch.count}</span>
                <span className="inline-flex items-center gap-1 font-medium text-ink transition-colors group-hover:text-accent">
                  Explore <ArrowRight className="size-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};