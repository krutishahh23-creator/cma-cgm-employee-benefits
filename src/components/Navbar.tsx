import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Everyday Life', href: '#everyday-life' },
    { label: 'Insurance', href: '#insurance' },
    { label: 'Wellbeing', href: '#wellbeing' },
    { label: 'Recognition', href: '#recognition' },
    { label: 'Support', href: '#support' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-slate-200/80'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#081c3b] flex items-center justify-center text-white font-bold text-sm shadow-xs border border-slate-800">
              <span className="text-red-500 font-extrabold mr-0.5">C</span>
              <span className="text-slate-100">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-[#081c3b] group-hover:text-red-600 transition-colors">
                CMA CGM <span className="font-medium text-slate-600">GBS India</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 -mt-1 hidden sm:block">
                Employee Benefits Guide
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? 'text-[#081c3b] font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#support"
              onClick={(e) => handleNavClick(e, '#support')}
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#081c3b] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-600" />
              <span>TPA Contacts</span>
            </a>

            <a
              href="#everyday-life"
              onClick={(e) => handleNavClick(e, '#everyday-life')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-xs hover:shadow transition-all whitespace-nowrap"
            >
              <span>Explore Benefits</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 shadow-lg space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-red-50 text-red-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-100">
            <a
              href="#support"
              onClick={(e) => handleNavClick(e, '#support')}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-red-600"
            >
              <PhoneCall className="w-4 h-4 text-red-600" />
              <span>TPA & HR Support Contacts</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
