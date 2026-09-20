import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export const DoctorPortalEmbedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ink flex flex-col">
      {/* Top Bar Navigation */}
      <div className="bg-ink-2 border-b border-paper/10 px-4 py-3 flex items-center justify-between text-paper text-xs">
        <div className="flex items-center gap-3">
          <Link to="/" className="inline-flex items-center gap-1 text-mist hover:text-paper transition-colors">
            <ArrowLeft className="size-3.5" /> Back to Knowledge Hub
          </Link>
          <span className="text-paper/20">|</span>
          <span className="font-mono text-accent-2 uppercase tracking-wider text-[10px]">
            Doctor Dashboard Prototype
          </span>
        </div>
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-accent-2 hover:underline"
        >
          Open Standalone Window <ExternalLink className="size-3" />
        </a>
      </div>

      {/* Embedded Doctor Dashboard */}
      <div className="flex-1 w-full h-[calc(100vh-45px)]">
        <iframe
          src="http://localhost:3000"
          title="Doctor Dashboard"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
};