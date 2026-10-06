import React from "react";
import { Hero } from "../components/home/Hero";
import { BranchesTree } from "../components/home/BranchesTree";
import { ScenarioExplorer } from "../components/home/ScenarioExplorer";

interface Props {
  onOpenPortal: () => void;
}

export const HomePage: React.FC<Props> = ({ onOpenPortal }) => {
  return (
    <>
      <Hero />
      <BranchesTree />
      <ScenarioExplorer />
    </>
  );
};