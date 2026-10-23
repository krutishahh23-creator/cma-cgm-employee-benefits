import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SectionEveryday } from './components/SectionEveryday.tsx';
import { SectionInsurance } from './components/SectionInsurance.tsx';
import { SectionWellbeing } from './components/SectionWellbeing.tsx';
import { SectionRecognition } from './components/SectionRecognition.tsx';
import { SectionSupport } from './components/SectionSupport.tsx';
import { Footer } from './components/Footer.tsx';
import { ChevronUp, Phone, Search, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState('M1');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Active section tracker
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sectionIds = [
        'home',
        'everyday-life',
        'insurance',
        'wellbeing',
        'recognition',
        'support',
      ];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchIndex = [
    { name: 'Pluxee Meal Benefit (₹3,500 - ₹8,200/mo)', target: '#everyday-life' },
    { name: 'Internet Allowance (₹600/month)', target: '#everyday-life' },
    { name: 'Mobile Allowance (₹1,000/month for SP & above)', target: '#everyday-life' },
    { name: 'Cab Pickup & Drop Facility', target: '#everyday-life' },
    { name: 'Night Shift Allowance (₹350/shift)', target: '#everyday-life' },
    { name: 'Weekend & Holiday Allowances', target: '#everyday-life' },
    { name: 'Group Medical Coverage (GMC: ₹3L, ₹5L, ₹10L)', target: '#insurance' },
    { name: 'Dental & Eye-care OPD (up to ₹15,000)', target: '#insurance' },
    { name: 'Standard OPD (up to ₹50,000)', target: '#insurance' },
    { name: 'Maternity & Infertility Benefit (up to ₹1 lakh)', target: '#insurance' },
    { name: 'Pre- & Post-natal OPD (up to ₹10,000)', target: '#insurance' },
    { name: 'Well-baby benefit (up to ₹10,000)', target: '#insurance' },
    { name: 'Group Personal Accident (GPA: ₹12L - ₹3 Cr)', target: '#insurance' },
    { name: 'Group Term Life (GTL: 24 months Fixed CTC)', target: '#insurance' },
    { name: 'Annual health check-up & Teleconsultations', target: '#wellbeing' },
    { name: 'Connect & Heal (CNH) App', target: '#wellbeing' },
    { name: 'CULT Fitness Membership (6m: ₹8,000 | 12m: ₹14,000)', target: '#wellbeing' },
    { name: 'Ignite Awards (Monthly & Bi-Annual)', target: '#recognition' },
    { name: 'Long Service Recognition & Benefits', target: '#recognition' },
    { name: 'Health India TPA 24x7 Customer Care', target: '#support' },
    { name: 'Cashless Claims Desk (022-66867559 / 7777038256)', target: '#support' },
    { name: 'Single Point of Contact SPOCs (Gautam, Umesh, Vishal)', target: '#support' },
    { name: 'Newly Wed / Newborn Dependent Addition (30 days)', target: '#support' },
    { name: 'ORION Insurance Manual Access Path', target: '#support' },
  ];

  const filteredSearchResults = searchQuery.trim()
    ? searchIndex.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchResultClick = (target: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-red-100 selection:text-red-900">
      {/* Top sticky navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with introduction, CTA, and quick level picker */}
        <Hero
          selectedLevel={selectedLevel}
          onSelectLevel={(lvl) => setSelectedLevel(lvl)}
        />

        {/* Section 1: Supporting Your Everyday Life */}
        <SectionEveryday selectedLevel={selectedLevel} />

        {/* Section 2: Protecting What Matters (Insurance) */}
        <SectionInsurance selectedLevel={selectedLevel} />

        {/* Section 3: Making Wellbeing Part of Your Journey */}
        <SectionWellbeing />

        {/* Section 4: Moving Forward, Growing Together (Recognition) */}
        <SectionRecognition />

        {/* Section 5: Your Benefits, Within Reach (TPA Support & Contacts) */}
        <SectionSupport />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Quick Search Button */}
        <button
          type="button"
          onClick={() => setIsSearchOpen(true)}
          className="p-3 bg-white text-slate-700 hover:text-slate-900 border border-slate-200 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer"
          aria-label="Quick benefits search"
          title="Search benefits"
        >
          <Search className="w-5 h-5 text-red-600" />
        </button>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-[#081c3b] text-white hover:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Quick Search Modal */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Search className="w-4 h-4 text-red-600" />
                <span>Search Benefits & Contacts</span>
              </div>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4">
              <input
                type="text"
                autoFocus
                placeholder="Type to search: e.g. meal, OPD, CULT, emergency, SPOC..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none"
              />
            </div>

            <div className="mt-4 max-h-64 overflow-y-auto space-y-1">
              {searchQuery.trim() === '' ? (
                <div className="text-center py-6 text-xs text-slate-400">
                  Quick suggestions: Pluxee Meal, Dental OPD, CULT Fitness, Health India TPA, 24x7 Care
                </div>
              ) : filteredSearchResults.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-500">
                  No matching benefits found. Try searching for "Meal", "OPD", "GMC", "GPA", or "TPA".
                </div>
              ) : (
                filteredSearchResults.map((res) => (
                  <button
                    key={res.name}
                    type="button"
                    onClick={() => handleSearchResultClick(res.target)}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors flex items-center justify-between"
                  >
                    <span>{res.name}</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      Jump →
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
