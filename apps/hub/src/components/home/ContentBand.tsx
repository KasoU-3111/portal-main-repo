import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  topics: string[];
  action: string;
  dark?: boolean;
}

export const ContentBand: React.FC<Props> = ({
  id,
  eyebrow,
  title,
  description,
  topics,
  action,
  dark = false,
}) => {
  return (
    <section id={id} className={dark ? "bg-ink text-paper" : "bg-paper text-ink"}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className={`mb-2 text-[11px] uppercase tracking-[0.25em] ${dark ? "text-accent-2" : "text-accent"}`}>
            {eyebrow}
          </p>
          <h2 className={`font-display text-3xl font-medium leading-tight sm:text-4xl ${dark ? "text-paper" : "text-ink"}`}>
            {title}
          </h2>
          <p className={`mt-4 max-w-[49ch] text-sm leading-relaxed ${dark ? "text-paper/65" : "text-ink/60"}`}>
            {description}
          </p>
          <a
            href="#tree"
            className={`mt-6 inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-medium transition-colors ${
              dark
                ? "border border-paper/20 bg-transparent text-paper hover:bg-paper/10"
                : "bg-ink text-paper hover:bg-ink-2"
            }`}
          >
            {action} <ArrowRight className="size-3" />
          </a>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
          {topics.map((topic, index) => (
            <div
              key={topic}
              className={`flex items-center gap-3 border-b py-3 text-sm ${
                dark ? "border-paper/10 text-paper/80" : "border-line text-ink/75"
              }`}
            >
              <span className={`font-mono text-[10px] ${dark ? "text-accent-2" : "text-accent"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{topic}</span>
              <ChevronDown className="ml-auto size-3 -rotate-90 opacity-40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};