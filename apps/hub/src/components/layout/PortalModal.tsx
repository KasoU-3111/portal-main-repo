import React, { useState } from "react";
import { 
  Check, 
  ExternalLink, 
  Stethoscope, 
  User, 
  ShieldCheck, 
  X, 
  Sparkles,
  ArrowRight
} from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// Configured environment endpoints with local development fallbacks
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

interface PortalRoleOption {
  role: string;
  key: "doctor" | "patient" | "admin";
  title: string;
  badge: string;
  desc: string;
  icon: React.ElementType;
  url: string;
  accentColor: string;
}

const PORTAL_OPTIONS: PortalRoleOption[] = [
  {
    role: "Doctor Portal",
    key: "doctor",
    title: "Clinician Workspace",
    badge: "Read-Only Care",
    desc: "For clinicians & IBD specialists to monitor patients, labs & request updates.",
    icon: Stethoscope,
    url: PORTAL_URLS.doctor,
    accentColor: "hover:border-teal-600/50 hover:bg-teal-500/5",
  },
  {
    role: "Patient Portal",
    key: "patient",
    title: "Patient Dashboard",
    badge: "Health Tracking",
    desc: "For patients to track symptoms, view treatment plans & appointments.",
    icon: User,
    url: PORTAL_URLS.patient,
    accentColor: "hover:border-sky-600/50 hover:bg-sky-500/5",
  },
  {
    role: "Admin Panel",
    key: "admin",
    title: "Governance Center",
    badge: "Platform Control",
    desc: "For platform administration, user management & audit governance.",
    icon: ShieldCheck,
    url: PORTAL_URLS.admin,
    accentColor: "hover:border-amber-600/50 hover:bg-amber-500/5",
  },
];

export const PortalModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    let targetUrl = "";

    if (role === "Doctor Portal") targetUrl = PORTAL_URLS.doctor;
    if (role === "Patient Portal") targetUrl = PORTAL_URLS.patient;
    if (role === "Admin Panel") targetUrl = PORTAL_URLS.admin;

    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleClose = () => {
    setSelectedRole(null);
    onClose();
  };

  const currentOption = PORTAL_OPTIONS.find((opt) => opt.role === selectedRole);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-md p-4 transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div 
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line/80 bg-paper p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portal-modal-title"
      >
        {/* Top Decorative Subtle Glow Header */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-sky-600 to-amber-600 opacity-90" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[11px] font-mono font-medium uppercase tracking-wider text-accent">
              <Sparkles className="size-3 text-accent" />
              <span>Platform Gateway</span>
            </div>
            <h3 
              id="portal-modal-title"
              className="font-display text-2xl font-bold tracking-tight text-ink mt-2"
            >
              Select Portal Application
            </h3>
            <p className="mt-1 text-xs text-ink/70 leading-relaxed max-w-md">
              Access dedicated workspaces across the MERIDIAN IBD ecosystem.
            </p>
          </div>
          
          <button
            onClick={handleClose}
            className="group flex size-8 shrink-0 items-center justify-center rounded-lg border border-line/60 bg-paper-2 text-ink/60 hover:border-line hover:bg-paper hover:text-ink transition-all cursor-pointer"
            aria-label="Close portal modal"
          >
            <X className="size-4 transition-transform group-hover:scale-110" />
          </button>
        </div>

        {/* Platform Selection Options */}
        <div className="grid gap-3 pt-6 sm:grid-cols-3">
          {PORTAL_OPTIONS.map((item) => {
            const IconComponent = item.icon;
            const isSelected = selectedRole === item.role;

            return (
              <button
                key={item.role}
                type="button"
                className={`group relative h-full min-h-[140px] rounded-xl p-4 text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  isSelected
                    ? "border-accent bg-accent/10 shadow-sm"
                    : `border-line/80 bg-paper-2/60 ${item.accentColor} hover:shadow-md`
                }`}
                onClick={() => handleRoleSelect(item.role)}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className={`grid size-8 place-items-center rounded-lg transition-colors ${
                      isSelected 
                        ? "bg-accent text-paper" 
                        : "bg-paper border border-line text-ink group-hover:border-accent/40 group-hover:text-accent"
                    }`}>
                      <IconComponent className="size-4" />
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-ink/50 group-hover:text-accent transition-colors">
                      <ExternalLink className="size-3" />
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold tracking-tight text-ink">
                      {item.role}
                    </span>
                    {isSelected && (
                      <Check className="size-3.5 text-accent shrink-0" />
                    )}
                  </div>

                  <p className="mt-1.5 text-[11px] leading-snug text-ink/60 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-line/40 flex items-center justify-between text-[10px]">
                  <span className="font-mono text-ink/40 uppercase tracking-wider font-medium">
                    {item.badge}
                  </span>
                  <span className="font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                    Open <ArrowRight className="size-2.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Launch Feedback Banner */}
        {selectedRole && currentOption && (
          <div className="mt-5 rounded-xl bg-accent/10 border border-accent/30 p-3.5 text-xs text-ink flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="size-2 rounded-full bg-accent animate-pulse shrink-0" />
              <span className="truncate">
                Launching <strong className="font-semibold">{currentOption.role}</strong> ({currentOption.title})...
              </span>
            </div>
            
            <a
              href={currentOption.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 shrink-0 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-paper hover:opacity-90 transition-opacity shadow-xs"
            >
              <span>Launch Again</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-ink/50">
          <span className="text-[11px] font-mono">
            MERIDIAN IBD · Private Ecosystem
          </span>

          <button
            onClick={handleClose}
            className="rounded-lg bg-ink px-4 py-2 text-xs font-medium text-paper hover:bg-ink/90 transition-colors cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};