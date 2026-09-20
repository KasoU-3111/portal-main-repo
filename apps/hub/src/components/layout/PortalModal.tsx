import React, { useState } from "react";
import { Check, ExternalLink } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    if (role === "Doctor Portal") {
      // Launch Doctor Dashboard on port 8080
      window.open("http://localhost:8080", "_blank", "noopener,noreferrer");
    } else if (role === "Patient Portal") {
      // Launch Patient Dashboard on port 8081
      window.open("http://localhost:8081", "_blank", "noopener,noreferrer");
    } else if (role === "Admin Panel") {
      // Launch Admin Dashboard on port 8082
      window.open("http://localhost:8082", "_blank", "noopener,noreferrer");
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
              port: "8080",
              external: true,
            },
            {
              role: "Patient Portal",
              desc: "For patients and personal health tracking",
              port: "8081",
              external: true,
            },
            {
              role: "Admin Panel",
              desc: "For platform administration & content",
              port: "8082",
              external: true,
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
                  {item.external && <ExternalLink className="size-3 text-accent" />}
                </span>
                <span className="mt-2 block text-[11px] leading-relaxed text-ink/60">
                  {item.desc}
                </span>
              </div>
              {item.port && (
                <span className="mt-3 text-[9px] font-mono text-mist uppercase">
                  Port :{item.port}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Doctor Portal Active Feedback */}
        {selectedRole === "Doctor Portal" && (
          <div className="mt-4 rounded-lg bg-accent/10 border border-accent/30 p-3 text-xs text-ink flex items-center justify-between">
            <span>Opening Doctor Dashboard at <code className="font-mono bg-paper px-1 py-0.5 rounded text-accent">localhost:8080</code>...</span>
            <a
              href="http://localhost:8080"
              target="_blank"
              rel="noreferrer"
              className="text-accent font-semibold hover:underline flex items-center gap-1"
            >
              Launch <ExternalLink className="size-3" />
            </a>
          </div>
        )}

        {/* Patient Portal Active Feedback */}
        {selectedRole === "Patient Portal" && (
          <div className="mt-4 rounded-lg bg-accent/10 border border-accent/30 p-3 text-xs text-ink flex items-center justify-between">
            <span>Opening Patient Dashboard at <code className="font-mono bg-paper px-1 py-0.5 rounded text-accent">localhost:8081</code>...</span>
            <a
              href="http://localhost:8081"
              target="_blank"
              rel="noreferrer"
              className="text-accent font-semibold hover:underline flex items-center gap-1"
            >
              Launch <ExternalLink className="size-3" />
            </a>
          </div>
        )}

        {/* Admin Panel Active Feedback */}
        {selectedRole === "Admin Panel" && (
          <div className="mt-4 rounded-lg bg-accent/10 border border-accent/30 p-3 text-xs text-ink flex items-center justify-between">
            <span>Opening Admin Dashboard at <code className="font-mono bg-paper px-1 py-0.5 rounded text-accent">localhost:8082</code>...</span>
            <a
              href="http://localhost:8082"
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