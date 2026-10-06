import React from "react";
import { Hero } from "../components/home/Hero";
import { ScenarioExplorer } from "../components/home/ScenarioExplorer";
import { BranchesTree } from "../components/home/BranchesTree";

interface Props {
  onOpenPortal: () => void;
}

export const HomePage: React.FC<Props> = () => {
  return (
    <>
      <Hero />
      <ScenarioExplorer />
      <BranchesTree />
    </>
  );
};