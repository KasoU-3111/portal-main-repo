import React, { useState } from "react";
import { Check, ExternalLink } from "lucide-react";

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="w-full max-w-lg rounded-xl border border-line bg-paper p-6 shadow-2xl animate-in fade-in zoom-in-95">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-left text-[11px] font-mono uppercase tracking-[0.25em] text-accent">
              Platform Gateway
            </p>
            <h3 className="font-display text-2xl font-medium text-ink mt-1">
              Portal Login
            </h3>
            <p className="mt-1 text-left text-xs text-ink/60">
              Select the platform you would like to access.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-ink/50 hover:text-ink text-xl font-bold"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Platform Selection Options */}
        <div className="grid gap-3 pt-5 sm:grid-cols-3">
          {[
            {
              role: "Doctor Portal",
              desc: "For clinicians and IBD specialists",
              url: PORTAL_URLS.doctor,
            },
            {
              role: "Patient Portal",
              desc: "For patients and personal health tracking",
              url: PORTAL_URLS.patient,
            },
            {
              role: "Admin Panel",
              desc: "For platform administration & content",
              url: PORTAL_URLS.admin,
            },
          ].map((item) => (
            <button
              key={item.role}
              className={`h-auto min-h-28 rounded-lg p-3.5 text-left border transition-all flex flex-col justify-between ${
                selectedRole === item.role
                  ? "border-accent bg-accent/10"
                  : "border-line bg-paper-2 hover:border-accent"
              }`}
              onClick={() => handleRoleSelect(item.role)}
            >
              <div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-ink">
                  {selectedRole === item.role && <Check className="size-3.5 text-accent" />}
                  {item.role}
                  <ExternalLink className="size-3 text-accent" />
                </span>
                <span className="mt-2 block text-[11px] leading-relaxed text-ink/60">
                  {item.desc}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Portal Active Launch Feedback */}
        {selectedRole && (
          <div className="mt-4 rounded-lg bg-accent/10 border border-accent/30 p-3 text-xs text-ink flex items-center justify-between">
            <span>
              Opening <strong className="font-semibold">{selectedRole}</strong>...
            </span>
            <a
              href={
                selectedRole === "Doctor Portal"
                  ? PORTAL_URLS.doctor
                  : selectedRole === "Patient Portal"
                  ? PORTAL_URLS.patient
                  : PORTAL_URLS.admin
              }
              target="_blank"
              rel="noreferrer"
              className="text-accent font-semibold hover:underline flex items-center gap-1"
            >
              Launch <ExternalLink className="size-3" />
            </a>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-5 flex justify-end">
          <button
            onClick={handleClose}
            className="rounded-md bg-ink px-4 py-1.5 text-xs font-medium text-paper hover:bg-ink-2 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};