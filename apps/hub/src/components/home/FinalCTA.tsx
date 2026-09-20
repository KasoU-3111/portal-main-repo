import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

interface Props {
  onOpenPortal: () => void;
}

export const FinalCTA: React.FC<Props> = ({ onOpenPortal }) => {
  return (
    <section className="bg-accent text-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-[46ch]">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-paper/80">Begin your route</p>
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl text-paper">
            Start understanding IBD today.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/90">
            Explore the information you need, discover the latest research, and learn more about living with IBD.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              className="rounded-md bg-ink px-4 py-2 text-xs font-semibold text-paper hover:bg-ink-2 transition-colors inline-flex items-center gap-2"
              onClick={onOpenPortal}
            >
              Open the portal <ArrowRight className="size-3.5" />
            </button>
            <a
              href="#start"
              className="rounded-md px-3 py-2 text-xs font-medium text-paper/90 hover:bg-black/10 hover:text-paper transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowDown className="size-3.5" /> Back to Start Here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};