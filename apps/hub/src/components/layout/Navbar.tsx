import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface Props {
  onOpenPortal: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenPortal }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Understanding IBD", href: "/understanding" },
    { label: "Treatment & Living", href: "/management" },
    { label: "Research", href: "/research" },
    { label: "Resources", href: "/resources" },
    { label: "Find a Specialist", href: "/specialists" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Main navigation">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setMobileOpen(false)}>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">IBD Knowledge Hub</span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-mist sm:inline">Atlas Edition</span>
        </Link>

        <div className="hidden items-center gap-6 text-[13px] font-medium md:flex">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors ${
                  isActive ? "text-accent font-semibold border-b-2 border-accent pb-1" : "text-ink/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="rounded-md bg-ink px-3.5 py-1.5 text-xs font-medium text-paper hover:bg-ink-2 transition-colors"
            onClick={onOpenPortal}
          >
            Portal Login
          </button>
          <button
            className="p-1 text-ink md:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-line bg-paper px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                  location.pathname === item.href ? "bg-paper-2 text-accent" : "text-ink/75 hover:bg-paper-2 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};