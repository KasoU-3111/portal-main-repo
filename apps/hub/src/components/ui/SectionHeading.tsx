import React from "react";

interface Props {
  eyebrow: string;
  title: string;
  detail?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<Props> = ({
  eyebrow,
  title,
  detail,
  light = false,
}) => {
  return (
    <div className="mb-8 flex items-end justify-between gap-5">
      <div>
        <p
          className={`mb-2 text-[11px] uppercase tracking-[0.25em] ${
            light ? "text-accent-2" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`font-display text-3xl font-medium leading-tight sm:text-4xl ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {detail && (
        <span
          className={`hidden text-[11px] uppercase tracking-[0.2em] sm:block ${
            light ? "text-mist" : "text-mist"
          }`}
        >
          {detail}
        </span>
      )}
    </div>
  );
};