import React from "react";
import { ArrowRight } from "lucide-react";
import { RESOURCES } from "../../data/mockData";
import { SectionHeading } from "../ui/SectionHeading";

export const ResourceLibrary: React.FC = () => {
  return (
    <section className="bg-paper-2">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading eyebrow="A practical shelf" title="IBD resources" detail="Tools to help you keep learning" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((res) => {
            const Icon = res.icon;
            return (
              <a
                key={res.title}
                href="#faq"
                className="group flex gap-4 rounded-xl bg-paper p-5 ring-1 ring-ink/5 transition-transform hover:-translate-y-1"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink">{res.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink/60">{res.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-ink group-hover:text-accent">
                    Explore <ArrowRight className="size-3" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};