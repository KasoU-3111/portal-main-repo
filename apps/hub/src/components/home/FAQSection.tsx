import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../../data/mockData";

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-accent">Common questions</p>
        <h2 className="mb-8 font-display text-3xl font-medium text-ink sm:text-4xl">Before you dive in</h2>
        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.question} className="py-4">
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between text-left font-display text-[16px] text-ink hover:text-accent transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent" : "text-mist"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-2 max-w-[58ch] text-[13px] leading-relaxed text-ink/70 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};