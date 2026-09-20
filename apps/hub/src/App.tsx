import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { PortalModal } from "./components/layout/PortalModal";
import { HomePage } from "./pages/HomePage";
import { UnderstandingPage } from "./pages/UnderstandingPage";
import { ManagementPage } from "./pages/ManagementPage";
import { ResearchPage } from "./pages/ResearchPage";
import { SpecialistsPage } from "./pages/SpecialistsPage";
import { ResourcesPage } from "./pages/ResourcesPage";

export const App: React.FC = () => {
  const [portalOpen, setPortalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-paper font-sans text-ink antialiased flex flex-col justify-between">
        <Navbar onOpenPortal={() => setPortalOpen(true)} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenPortal={() => setPortalOpen(true)} />} />
            <Route path="/understanding" element={<UnderstandingPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/specialists" element={<SpecialistsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>

        <Footer onOpenPortal={() => setPortalOpen(true)} />
        <PortalModal isOpen={portalOpen} onClose={() => setPortalOpen(false)} />
      </div>
    </Router>
  );
};

export default App;