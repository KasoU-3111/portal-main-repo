import React, { useState } from "react";
import { AlertCircle, Apple, Check, ShieldAlert, Sparkles } from "lucide-react";

export const DietAndLifestyle: React.FC = () => {
  const [phase, setPhase] = useState<"flare" | "remission">("flare");

  return (
    <section id="nutrition" className="bg-paper py-16 sm:py-24 border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-line">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent">
              Nutritional Sciences & Daily Care
            </span>
            <h2 className="font-display text-3xl font-medium sm:text-4xl text-ink mt-2">
              Diet, Flares & Sustained Remission
            </h2>
            <p className="mt-2 text-sm text-ink/70 max-w-2xl leading-relaxed">
              Diet does not cause IBD, but nutrition directly governs mucosal healing, bacterial microbiome diversity, and symptom reduction during active inflammation.
            </p>
          </div>

          {/* Phase Toggle */}
          <div className="inline-flex rounded-lg bg-paper-2 p-1.5 ring-1 ring-ink/10">
            <button
              onClick={() => setPhase("flare")}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                phase === "flare"
                  ? "bg-accent text-paper shadow-sm"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              <ShieldAlert className="size-3.5" /> Active Flare Protocol
            </button>
            <button
              onClick={() => setPhase("remission")}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                phase === "remission"
                  ? "bg-accent text-paper shadow-sm"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              <Sparkles className="size-3.5" /> Remission & Maintenance
            </button>
          </div>
        </div>

        {/* Dynamic Nutrition Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Primary Strategy */}
          <div className="rounded-xl border border-line bg-paper-2 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent">
                Core Philosophy
              </span>
              <h3 className="font-display text-xl font-medium text-ink mt-2">
                {phase === "flare" ? "Low-Residue Bowel Rest" : "Microbiome Rebuilding & Diversity"}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-ink/70">
                {phase === "flare"
                  ? "Minimize mechanical friction across inflamed or ulcerated mucosal tissue. Reduce insoluble fibers, seeds, and indigestible roughage."
                  : "Gradually expand soluble fibers and polyphenol-rich plant varieties to feed butyrate-producing short-chain fatty acid (SCFA) bacteria."}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-[11px] text-mist font-medium">
              Objective: {phase === "flare" ? "Symptom mitigation" : "Long-term mucosal stability"}
            </div>
          </div>

          {/* Recommended Dietary Staples */}
          <div className="rounded-xl border border-line bg-paper p-6 ring-1 ring-ink/5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
              <Apple className="size-3.5" /> Recommended Staples
            </span>
            <ul className="mt-4 space-y-2.5 text-xs text-ink/80">
              {phase === "flare" ? (
                <>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-accent mt-0.5" /> Steamed white fish, poultry, soft scrambled eggs</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-accent mt-0.5" /> Cooked, pureed carrots, squash, peeled potatoes</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-accent mt-0.5" /> Electrolyte-balanced broth, diluted coconut water</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-accent mt-0.5" /> White rice, refined sourdough, smooth oatmeal</li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-accent mt-0.5" /> Mediterranean pattern: Extra virgin olive oil, wild salmon</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-accent mt-0.5" /> Soluble prebiotic fibers: cooked oats, chia, bananas</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-accent mt-0.5" /> Well-tolerated fermented foods: small servings of kefir</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-accent mt-0.5" /> Lean plant proteins: peeled lentils, creamy nut butters</li>
                </>
              )}
            </ul>
          </div>

          {/* Ingredients to Minimize */}
          <div className="rounded-xl border border-line bg-paper p-6 ring-1 ring-ink/5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mist flex items-center gap-1.5">
              <AlertCircle className="size-3.5 text-mist" /> Potential Irritants
            </span>
            <ul className="mt-4 space-y-2.5 text-xs text-ink/70">
              {phase === "flare" ? (
                <>
                  <li className="flex items-start gap-1.5">• Raw kale, cruciferous vegetables, whole nuts, seeds</li>
                  <li className="flex items-start gap-1.5">• High-sugar concentrates and hyperosmolar drinks</li>
                  <li className="flex items-start gap-1.5">• Spicy capsicums, black pepper, and chili emulsions</li>
                  <li className="flex items-start gap-1.5">• Heavy dairy fats if secondary lactase deficiency is active</li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-1.5">• Ultra-processed emulsifiers (polysorbate-80, carboxymethylcellulose)</li>
                  <li className="flex items-start gap-1.5">• Excessive industrial trans fats and processed meats</li>
                  <li className="flex items-start gap-1.5">• Artificial sweeteners that disturb microbiome balance</li>
                  <li className="flex items-start gap-1.5">• Chronic alcohol intake that compromises intestinal barrier integrity</li>
                </>
              )}
            </ul>
          </div>

        </div>

        {/* Clinical Disclaimer */}
        <div className="mt-8 rounded-lg bg-paper-2 p-4 text-xs text-ink/60 border border-line flex items-center justify-between flex-wrap gap-2">
          <span>* Nutritional guidance varies widely per individual stricture presence or ileal surgery history. Consult a GI-certified dietitian.</span>
          <a href="#specialists" className="text-accent font-semibold hover:underline">Find Clinical Dietitians →</a>
        </div>

      </div>
    </section>
  );
};