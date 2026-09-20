import React, { useState } from "react";
import { ArrowRight, Stethoscope } from "lucide-react";
import { SPECIALISTS } from "../../data/mockData";

export const SpecialistDirectory: React.FC = () => {
  const [specialistFilter, setSpecialistFilter] = useState("All");

  const filteredSpecialists = specialistFilter === "All"
    ? SPECIALISTS
    : SPECIALISTS.filter((doc) => doc.focus.toLowerCase().includes(specialistFilter.toLowerCase()));

  return (
    <section id="specialists" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-accent">Specialist discovery</p>
            <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">Find an IBD specialist</h2>
            <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-ink/60">
              Explore fictional sample profiles with experience in inflammatory bowel disease and related areas of care.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Specialist filters">
            {["All", "Crohn's", "Colitis", "Research"].map((filter) => (
              <button
                key={filter}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  specialistFilter === filter
                    ? "bg-ink text-paper"
                    : "border border-line bg-paper-2 text-ink/70 hover:text-ink"
                }`}
                onClick={() => setSpecialistFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {filteredSpecialists.map((doc) => (
            <article key={doc.name} className="rounded-xl bg-paper-2 p-5 ring-1 ring-ink/5">
              <div className="flex items-center gap-3">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <Stethoscope className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink">{doc.name}</h3>
                  <p className="text-[12px] text-ink/60">{doc.specialty}</p>
                </div>
              </div>
              <p className="mt-4 text-[12px] font-medium text-accent">{doc.expertise}</p>
              <p className="mt-2 text-[13px] text-ink/60">{doc.location}</p>
              <p className="mt-3 border-t border-line pt-3 text-[12px] leading-relaxed text-ink/60">Focus: {doc.focus}</p>
              <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ink hover:text-accent transition-colors">
                View profile <ArrowRight className="size-3" />
              </button>
            </article>
          ))}
        </div>
        <p className="mt-5 text-[11px] text-mist">
          Showing sample profiles for the prototype. No real verification, booking, or medical relationship is provided.
        </p>
      </div>
    </section>
  );
};
