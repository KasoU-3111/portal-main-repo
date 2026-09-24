import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { PortalModal } from "./components/layout/PortalModal";
import { HomePage } from "./pages/HomePage";
import { UnderstandingPage } from "./pages/UnderstandingPage";
import { ManagementPage } from "./pages/ManagementPage";
import { ResearchPage } from "./pages/ResearchPage";
import { SpecialistsPage } from "./pages/SpecialistsPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { LoginPage } from "./pages/LoginPage";

const AppRoutes: React.FC = () => {
  const [portalOpen, setPortalOpen] = useState(false);
  const navigate = useNavigate();

  // Handler that opens the standalone /login page or fallback modal
  const handleOpenPortal = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased flex flex-col justify-between">
      <Navbar onOpenPortal={handleOpenPortal} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenPortal={handleOpenPortal} />} />
          <Route path="/understanding" element={<UnderstandingPage />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/specialists" element={<SpecialistsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

      <Footer onOpenPortal={handleOpenPortal} />
      <PortalModal isOpen={portalOpen} onClose={() => setPortalOpen(false)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;