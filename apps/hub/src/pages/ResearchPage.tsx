import React from "react";
import { ResearchHub } from "../components/home/ResearchHub";
import { CaseStudies } from "../components/home/CaseStudies";
import { InsightsBlog } from "../components/home/InsightsBlog";

export const ResearchPage: React.FC = () => {
  return (
    <div className="py-8 space-y-12">
      <ResearchHub />
      <CaseStudies />
      <InsightsBlog />
    </div>
  );
};