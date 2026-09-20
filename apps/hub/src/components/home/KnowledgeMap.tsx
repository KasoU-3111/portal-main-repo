import React from "react";
import heroImg from "../../assets/hero-section.png";

export const KnowledgeMap: React.FC = () => {
  return (
    <div className="lg:col-span-7 flex items-center justify-center p-0">
      <div className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-xl">
        <img
          src={heroImg}
          alt="IBD Interconnected Knowledge Flow Diagram"
          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
        />
        {/* Soft edge vignette to align with #01292d */}
        <div 
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#01292d]/20" 
          aria-hidden="true"
        />
      </div>
    </div>
  );
};