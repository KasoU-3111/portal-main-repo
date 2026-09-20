import React from "react";
import { ArrowRight } from "lucide-react";
import { START_PATHS } from "../../data/mockData";
import { SectionHeading } from "../ui/SectionHeading";

export const StartHere: React.FC = () => {
  return (
    <section id="start" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading eyebrow="Start here" title="Where would you like to begin?" detail="Six entry points" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {START_PATHS.map((item) => (
            <a
              key={item.number}
              href={item.href}
              className="group rounded-xl bg-paper-2 p-5 ring-1 ring-ink/5 transition-transform hover:-translate-y-1"
            >
              <span className="text-[11px] font-medium text-accent">{item.number}</span>
              <h3 className="mt-2 font-display text-lg leading-snug text-ink">{item.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-ink/60">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-medium text-ink transition-colors group-hover:text-accent">
                Explore path <ArrowRight className="size-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};