import React from "react";
import { Hero } from "../components/home/Hero";
import { ScenarioExplorer } from "../components/home/ScenarioExplorer";
import { BranchesTree } from "../components/home/BranchesTree";

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ScenarioExplorer />
      <BranchesTree />
    </>
  );
};