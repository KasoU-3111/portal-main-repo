import React from "react";
import { DietAndLifestyle } from "../components/home/DietAndLifestyle";
import { ContentBand } from "../components/home/ContentBand";
import { TREATMENT_TOPICS, LIVING_TOPICS } from "../data/mockData";

export const ManagementPage: React.FC = () => {
  return (
    <div className="py-8">
      <ContentBand
        id="treatment-overview"
        eyebrow="Region 03 · Therapeutics"
        title="Treatment & Remission Targets"
        description="Modern gastroenterology prioritizes objective mucosal healing, steroid avoidance, and sustained biological remission."
        topics={TREATMENT_TOPICS}
        action="View Medication Classes"
      />
      <DietAndLifestyle />
      <ContentBand
        id="living-well"
        eyebrow="Region 05 · Human Context"
        title="Living Well With IBD"
        description="Strategies for everyday stability: gut-brain axis support, restorative sleep hygiene, travel kits, and legal accommodation rights."
        topics={LIVING_TOPICS}
        action="View Lifestyle Guidelines"
        dark
      />
    </div>
  );
};