import React from "react";
import { ResourceLibrary } from "../components/home/ResourceLibrary";
import { FAQSection } from "../components/home/FAQSection";

export const ResourcesPage: React.FC = () => {
  return (
    <div className="py-8 space-y-12">
      <ResourceLibrary />
      <FAQSection />
    </div>
  );
};