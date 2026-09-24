import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  User,
  ShieldCheck,
  ExternalLink,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  KeyRound,
  Compass
} from "lucide-react";

// Target portal endpoints with local development fallbacks pointing to /login
const PORTAL_URLS = {
  doctor:
    import.meta.env.VITE_DOCTOR_PORTAL_URL ||
    "https://portal-main-repo-y6bs.vercel.app",
  patient:
    import.meta.env.VITE_PATIENT_PORTAL_URL ||
    "https://portal-main-repo-njoa.vercel.app",
  admin:
    import.meta.env.VITE_ADMIN_PORTAL_URL ||
    "https://portal-main-repo-pwg6.vercel.app",
};

type RoleKey = "doctor" | "patient" | "admin";

interface RoleConfig {
  key: RoleKey;
  roleName: string;
  badge: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  demoEmail: string;
  demoPass: string;
  targetUrl: string;
  accentClass: string;
  activeTabClass: string;
  features: string[];
}

const ROLE_CONFIGS: Record<RoleKey, RoleConfig> = {
  doctor: {
    key: "doctor",
    roleName: "Doctor Portal",
    badge: "Clinician Workspace",
    title: "Physician & Specialist Gateway",
    subtitle: "Access patient clinical records, review longitudinal labs, and submit change requests.",
    icon: Stethoscope,
    demoEmail: "dr.mehta@meridian.health",
    demoPass: "clinician2026",
    targetUrl: PORTAL_URLS.doctor,
    accentClass: "text-teal-600 bg-teal-500/10 border-teal-500/30",
    activeTabClass: "bg-teal-600 text-white shadow-sm",
    features: [
      "Read-only longitudinal clinical timeline",
      "Lab trends & endoscopy report review",
      "Structured administrative change request submission"
    ]
  },
  patient: {
    key: "patient",
    roleName: "Patient Portal",
    badge: "Personal Health",
    title: "Patient Care Dashboard",
    subtitle: "Track your symptoms, view treatment plans, appointments, and care team notes.",
    icon: User,
    demoEmail: "aarav.sharma@meridian.health",
    demoPass: "patient123",
    targetUrl: PORTAL_URLS.patient,
    accentClass: "text-sky-600 bg-sky-500/10 border-sky-500/30",
    activeTabClass: "bg-sky-600 text-white shadow-sm",
    features: [
      "Daily symptom & wellness logging",
      "Upcoming infusion & appointment schedule",
      "Direct notes from your gastroenterologist"
    ]
  },
  admin: {
    key: "admin",
    roleName: "Admin Panel",
    badge: "Platform Governance",
    title: "Centralized Administration",
    subtitle: "Oversee doctor verification, clinician change requests, research posts, and audit logs.",
    icon: ShieldCheck,
    demoEmail: "admin@meridian.health",
    demoPass: "prototype",
    targetUrl: PORTAL_URLS.admin,
    accentClass: "text-amber-600 bg-amber-500/10 border-amber-500/30",
    activeTabClass: "bg-amber-600 text-white shadow-sm",
    features: [
      "Review & approve clinician change requests",
      "User management & credential verification",
      "System audit logging & medical content publishing"
    ]
  }
};

export const LoginPage: React.FC = () => {
  const [activeRole, setActiveRole] = useState<RoleKey>("doctor");

  const currentRole = ROLE_CONFIGS[activeRole];
  const ActiveIcon = currentRole.icon;

  const handleLaunch = () => {
    if (currentRole.targetUrl) {
      window.open(currentRole.targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      {/* Top Header Bar with Back Link */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-ink/70 hover:text-ink transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Knowledge Hub</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-mono text-ink/60 uppercase tracking-wider">
            Portal Gateway Directory
          </span>
        </div>
      </div>

      {/* Main Centered Gateway Container */}
      <main className="max-w-2xl mx-auto w-full my-auto py-8">
        {/* Role Selector Navigational Bar */}
        <div className="mb-6 rounded-2xl bg-paper p-1.5 border border-line shadow-sm flex items-center gap-1">
          {(["doctor", "patient", "admin"] as RoleKey[]).map((key) => {
            const roleItem = ROLE_CONFIGS[key];
            const RoleIcon = roleItem.icon;
            const isActive = activeRole === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveRole(key)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? roleItem.activeTabClass
                    : "text-ink/60 hover:text-ink hover:bg-paper-2"
                }`}
              >
                <RoleIcon className="size-3.5" />
                <span>{roleItem.roleName}</span>
              </button>
            );
          })}
        </div>

        {/* Centered Gateway Card */}
        <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all">
          {/* Subtle Accent Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-sky-600 to-amber-600" />

          {/* Header Info */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium uppercase tracking-wider ${currentRole.accentClass}`}>
                <Sparkles className="size-3" />
                <span>{currentRole.badge}</span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-ink mt-3">
                {currentRole.title}
              </h1>
              <p className="mt-1.5 text-xs text-ink/70 leading-relaxed">
                {currentRole.subtitle}
              </p>
            </div>

            <div className="grid size-12 place-items-center rounded-xl bg-paper-2 border border-line text-ink shrink-0">
              <ActiveIcon className="size-6 text-accent" />
            </div>
          </div>

          {/* Role Features List */}
          <div className="mt-6 p-4 rounded-xl bg-paper-2/60 border border-line/60 space-y-2">
            <p className="text-[11px] font-mono font-semibold text-ink/50 uppercase tracking-wider mb-1">
              Workspace Capabilities
            </p>
            {currentRole.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-ink/80">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Demo Credentials Info Callout */}
          <div className="mt-5 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <KeyRound className="size-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-ink/80">
              <p className="font-semibold text-ink">Prototype Access Credentials</p>
              <p className="mt-0.5 text-[11px] text-ink/70">
                Use these test credentials after launching the dedicated {currentRole.roleName} workspace:
              </p>
              <div className="mt-2 font-mono text-[11px] bg-paper px-2.5 py-1.5 rounded-md border border-line flex flex-wrap gap-x-4 gap-y-1">
                <span>Email: <strong className="text-ink">{currentRole.demoEmail}</strong></span>
                <span>Password: <strong className="text-ink">{currentRole.demoPass}</strong></span>
              </div>
            </div>
          </div>

          {/* Launch Action Button */}
          <button
            type="button"
            onClick={handleLaunch}
            className="w-full h-12 mt-6 rounded-xl bg-ink text-paper text-xs font-bold hover:bg-ink/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Compass className="size-4" />
            <span>Enter {currentRole.roleName} Workspace</span>
            <ExternalLink className="size-3.5" />
          </button>
        </div>
      </main>

      {/* Page Footer */}
      <footer className="max-w-4xl mx-auto w-full text-center text-[11px] text-ink/40 font-mono py-2">
        MERIDIAN IBD Clinical Platform · Multi-Portal Architecture
      </footer>
    </div>
  );
};

export default LoginPage;