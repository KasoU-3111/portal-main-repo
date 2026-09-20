import React from "react";
import { DiseaseComparison } from "../components/home/DiseaseComparison";
import { SymptomsDiagnosisFlow } from "../components/home/SymptomsDiagnosisFlow";
import { ContentBand } from "../components/home/ContentBand";
import { UNDERSTANDING_TOPICS } from "../data/mockData";

export const UnderstandingPage: React.FC = () => {
  return (
    <div className="py-8">
      <ContentBand
        id="understanding-foundations"
        eyebrow="Region 01 · Foundations"
        title="Pathology & Biological Baseline"
        description="Explore the immunological baseline of Inflammatory Bowel Disease and how tissue differentiation shapes every clinical decision."
        topics={UNDERSTANDING_TOPICS}
        action="Explore Pathology"
      />
      <DiseaseComparison />
      <SymptomsDiagnosisFlow />
    </div>
  );
};