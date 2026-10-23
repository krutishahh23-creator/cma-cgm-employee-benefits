import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand & Motto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white font-black text-xs">
                C
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                CMA CGM GBS INDIA
              </span>
            </div>
            <p className="text-sm font-semibold text-red-400 tracking-wide">
              We Care. We Support. We Grow.
            </p>
          </div>

          {/* Quick Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#everyday-life" className="hover:text-white transition-colors">
              Everyday Life
            </a>
            <a href="#insurance" className="hover:text-white transition-colors">
              Insurance
            </a>
            <a href="#wellbeing" className="hover:text-white transition-colors">
              Wellbeing
            </a>
            <a href="#recognition" className="hover:text-white transition-colors">
              Recognition
            </a>
            <a href="#support" className="hover:text-white transition-colors">
              Support
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Disclaimer & Policy Notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            Disclaimer: All employee benefits and allowances are subject to applicable company policies and eligibility terms.
          </p>
          <p className="shrink-0 text-slate-600">
            Internal Corporate Reference Guide · CMA CGM GBS India
          </p>
        </div>
      </div>
    </footer>
  );
};
