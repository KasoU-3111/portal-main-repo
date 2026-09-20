import React from "react";
import { Hero } from "../components/home/Hero";
import { StartHere } from "../components/home/StartHere";
import { BranchesTree } from "../components/home/BranchesTree";
import { FinalCTA } from "../components/home/FinalCTA";

interface Props {
  onOpenPortal: () => void;
}

export const HomePage: React.FC<Props> = ({ onOpenPortal }) => {
  return (
    <>
      <Hero />
      <StartHere />
      <BranchesTree />
      <FinalCTA onOpenPortal={onOpenPortal} />
    </>
  );
};