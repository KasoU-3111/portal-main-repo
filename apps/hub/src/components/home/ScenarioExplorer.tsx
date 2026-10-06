import React, { useState } from "react";
import { ArrowRight, Compass, ShieldAlert, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface Scenario {
  id: string;
  badge: string;
  title: string;
  description: string;
  linkText: string;
  route: string;
  icon: React.ElementType;
}

const SCENARIOS: Scenario[] = [
  {
    id: "new",
    badge: "Just Diagnosed",
    title: "Navigating your path forward",
    description: "Start with the absolute fundamentals: understanding how IBD differs from functional disorders, mapping your anatomy, and preparing for your initial specialist appointment.",
    linkText: "Explore Foundation Guides",
    route: "/understanding/what-is-ibd",
    icon: Compass,
  },
  {
    id: "flare",
    badge: "Active Symptoms",
    title: "Managing flares & daily nutrition",
    description: "Review acute phase protocols, low-residue dietary staples, and the step-by-step diagnostic journey used by gastroenterologists.",
    linkText: "View Treatment Targets",
    route: "/treatment/treatment-goals",
    icon: ShieldAlert,
  },
  {
    id: "remission",
    badge: "Long-term Care",
    title: "Sustaining remission & lifestyle",
    description: "Explore biological maintenance strategies, sleep hygiene, gut-brain axis support, and long-term non-invasive monitoring protocols.",
    linkText: "Read Lifestyle Guidelines",
    route: "/living/exercise",
    icon: Sparkles,
  },
];

export const ScenarioExplorer: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("new");
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];
  const Icon = current.icon;

  return (
    <section className="bg-paper py-16 sm:py-24 border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent">
            Interactive Navigator
          </span>
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl mt-2">
            Where are you on your journey?
          </h2>
          <p className="mt-2 text-sm text-ink/70 leading-relaxed">
            Select your current focus to instantly surface the most relevant clinical guides and actionable frameworks.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SCENARIOS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                activeId === item.id
                  ? "bg-ink text-paper shadow-sm"
                  : "bg-paper-2 text-ink/70 hover:text-ink hover:bg-line/60 border border-line"
              }`}
            >
              <span>{item.badge}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Showcase Card */}
        <div className="rounded-2xl bg-paper-2 border border-line p-8 sm:p-12 shadow-sm transition-all duration-300">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-mono font-semibold text-accent mb-4">
                <Icon className="size-3.5" />
                <span>{current.badge} Focus Area</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink">
                {current.title}
              </h3>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed max-w-[55ch]">
                {current.description}
              </p>
              
              <div className="mt-8">
                <Link
                  to={current.route}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-paper hover:bg-accent-2 hover:text-ink transition-colors shadow-xs"
                >
                  <span>{current.linkText}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <div className="size-40 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Icon className="size-16 opacity-80" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};