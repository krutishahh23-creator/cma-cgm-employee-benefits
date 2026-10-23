import React from 'react';
import { ArrowDown, Compass, ShieldCheck, HeartHandshake, Layers } from 'lucide-react';
import { MANAGEMENT_LEVELS } from '../data/benefitsData.ts';

interface HeroProps {
  selectedLevel: string;
  onSelectLevel: (level: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ selectedLevel, onSelectLevel }) => {
  const currentLevelData = MANAGEMENT_LEVELS.find((l) => l.level === selectedLevel) || MANAGEMENT_LEVELS[3];

  const handleScrollToBenefits = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#everyday-life');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200">
      {/* Subtle maritime background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-red-100/50 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline / Subtitle */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Your journey. Our support.</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#081c3b] tracking-tight text-balance leading-tight">
            EMPLOYEE BENEFITS
          </h1>

          <p className="mt-2 text-xl sm:text-2xl font-semibold text-red-600 tracking-tight">
            Your Guide to Employee Benefits
          </p>

          {/* Introduction Prose */}
          <div className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>
              At CMA CGM GBS India, we believe that supporting our people goes beyond the workplace. Every individual has a unique journey, shaped by personal experiences, aspirations and achievements.
            </p>
            <p>
              Our commitment is to be part of that journey by providing support that helps you feel cared for, valued and empowered at every stage.
            </p>
            <p className="font-medium text-slate-700">
              Take a moment to explore your benefits and discover how we support you along the way.
            </p>
          </div>

          {/* Primary CTA Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#everyday-life"
              onClick={handleScrollToBenefits}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Explore Your Benefits</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Interactive Quick Level Selector Banner */}
        <div className="mt-14 max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-red-600" />
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Quick Band View: Select your management level
                </h3>
                <p className="text-xs text-slate-500">
                  Instantly view key allowances and coverage corresponding to your band
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md shrink-0 self-start sm:self-auto">
              Currently viewing: <strong className="text-red-600">Level {currentLevelData.level}</strong>
            </span>
          </div>

          {/* Level Selection Tabs */}
          <div className="pt-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {MANAGEMENT_LEVELS.map((item) => {
                const isSelected = item.level === selectedLevel;
                return (
                  <button
                    key={item.level}
                    type="button"
                    onClick={() => onSelectLevel(item.level)}
                    className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#081c3b] text-white shadow-xs scale-105'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                    aria-label={`Select Management Level ${item.level}`}
                  >
                    Level {item.level}
                  </button>
                );
              })}
            </div>

            {/* Selected Level Summary Strip */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                  Pluxee Meal
                </span>
                <span className="text-sm sm:text-base font-bold text-[#081c3b] tabular-nums">
                  {currentLevelData.pluxeeMeal}
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                  Medical (GMC)
                </span>
                <span className="text-sm sm:text-base font-bold text-[#081c3b] tabular-nums">
                  {currentLevelData.gmcCoverage}
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                  Accident (GPA)
                </span>
                <span className="text-sm sm:text-base font-bold text-red-600 tabular-nums">
                  {currentLevelData.gpaCoverage}
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                  Mobile / OPD
                </span>
                <span className="text-xs sm:text-xs font-medium text-slate-700 line-clamp-1" title={currentLevelData.additionalOPD}>
                  {currentLevelData.mobileAllowance.includes('1,000') ? '₹1,000/mo Mobile' : 'Standard'} · {currentLevelData.level.startsWith('M') || currentLevelData.level === 'E1' ? 'OPD Cover' : 'GMC'}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
