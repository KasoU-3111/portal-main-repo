import React from "react";

interface Props {
  onOpenPortal: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenPortal }) => {
  return (
    <footer className="bg-ink-2 text-paper/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-lg font-semibold text-paper">IBD Knowledge Hub</span>
            <p className="mt-3 max-w-[42ch] text-[13px] leading-relaxed">
              An educational knowledge atlas for the IBD community. All profiles, studies, and examples shown are fictional samples.
            </p>
            <p className="mt-5 max-w-[48ch] text-[12px] leading-relaxed text-mist">
              This website provides general educational content. It is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-[13px] sm:grid-cols-3 md:col-span-7">
            <div>
              <h4 className="mb-3 text-[11px] uppercase tracking-[0.2em] text-mist">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#start" className="text-xs transition-colors hover:text-paper">Start here</a></li>
                <li><a href="#tree" className="text-xs transition-colors hover:text-paper">The map</a></li>
                <li><a href="#research" className="text-xs transition-colors hover:text-paper">Research</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-[11px] uppercase tracking-[0.2em] text-mist">Support</h4>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-xs transition-colors hover:text-paper">FAQ</a></li>
                <li><a href="#specialists" className="text-xs transition-colors hover:text-paper">Specialists</a></li>
                <li><a href="#faq" className="text-xs transition-colors hover:text-paper">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-[11px] uppercase tracking-[0.2em] text-mist">Portal</h4>
              <button
                className="text-xs text-paper/70 hover:text-paper transition-colors block text-left"
                onClick={onOpenPortal}
              >
                Portal login
              </button>
              <p className="mt-2 text-[12px] text-mist">Prototype only</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-paper/10 pt-6 text-[12px] text-mist">
          <span>© 2026 IBD Knowledge Hub · A design prototype</span>
          <span>Educational information for the IBD community.</span>
        </div>
      </div>
    </footer>
  );
};