import React from "react";
import { Link } from "react-router-dom";

interface Props {
  onOpenPortal: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenPortal }) => {
  return (
    <footer className="bg-ink text-paper border-t border-paper/10 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-paper/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xl font-medium text-paper">IBD Knowledge Hub</h3>
            <p className="mt-3 text-xs leading-relaxed text-paper/75 max-w-[36ch]">
              An educational knowledge atlas for the IBD community. All profiles, studies, and examples shown are fictional samples.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-paper/75 max-w-[36ch]">
              This website provides general educational content. It is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent-2 mb-4">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-paper/90 hover:text-accent-2 transition-colors">Start here</Link>
              </li>
              <li>
                <Link to="/understanding" className="text-paper/90 hover:text-accent-2 transition-colors">The map</Link>
              </li>
              <li>
                <Link to="/research" className="text-paper/90 hover:text-accent-2 transition-colors">Research</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent-2 mb-4">Support</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/resources" className="text-paper/90 hover:text-accent-2 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/specialists" className="text-paper/90 hover:text-accent-2 transition-colors">Specialists</Link>
              </li>
              <li>
                <Link to="/resources" className="text-paper/90 hover:text-accent-2 transition-colors">Resources</Link>
              </li>
            </ul>
          </div>

          {/* Portal Links */}
          <div>
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent-2 mb-4">Portal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={onOpenPortal}
                  className="text-paper/90 hover:text-accent-2 transition-colors text-left cursor-pointer"
                >
                  Portal login
                </button>
              </li>
              <li>
                <span className="text-paper/50">Prototype only</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-paper/60">
          <p>© 2026 IBD Knowledge Hub · A design prototype</p>
          <p>Educational information for the IBD community.</p>
        </div>
      </div>
    </footer>
  );
};