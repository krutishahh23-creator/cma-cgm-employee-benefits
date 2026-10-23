import React from 'react';
import { Utensils, Wifi, Car, CheckCircle2, Sparkles, Smartphone } from 'lucide-react';

interface SectionEverydayProps {
  selectedLevel: string;
}

export const SectionEveryday: React.FC<SectionEverydayProps> = ({ selectedLevel }) => {
  const isLevelGroup1 = ['O', 'SO', 'SP', 'M1', 'M2'].includes(selectedLevel);
  const isLevelGroup2 = selectedLevel === 'M3';
  const isLevelGroup3 = ['M4', 'M5', 'E1'].includes(selectedLevel);
  const isEligibleForMobile = ['SP', 'M1', 'M2', 'M3', 'M4', 'M5', 'E1'].includes(selectedLevel);

  return (
    <section id="everyday-life" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            <span>Everyday Life</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081c3b] tracking-tight">
            Little things that make a difference.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From your daily commute to staying connected at work, explore the benefits designed to support you every day.
          </p>
        </div>

        {/* 3 Main Everyday Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Meal Benefits */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-5">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3b]">
                Meal Benefits
              </h3>
              <p className="text-sm font-semibold text-red-600 mt-1">
                Enjoy your mealtime
              </p>
              <p className="text-sm text-slate-600 mt-3">
                Your monthly Pluxee meal benefit varies by employee management level:
              </p>

              {/* Pluxee Tier List */}
              <div className="mt-5 space-y-2.5">
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    isLevelGroup1
                      ? 'bg-white border-red-300 shadow-xs ring-1 ring-red-200'
                      : 'bg-white/60 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#081c3b] tabular-nums">
                      ₹3,500<span className="text-xs font-normal text-slate-500">/month</span>
                    </span>
                    {isLevelGroup1 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-red-50 text-red-700 rounded-md">
                        Your Band
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-slate-600 block mt-1">
                    O, SO, SP, M1 and M2
                  </span>
                </div>

                <div
                  className={`p-3 rounded-xl border transition-all ${
                    isLevelGroup2
                      ? 'bg-white border-red-300 shadow-xs ring-1 ring-red-200'
                      : 'bg-white/60 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#081c3b] tabular-nums">
                      ₹4,900<span className="text-xs font-normal text-slate-500">/month</span>
                    </span>
                    {isLevelGroup2 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-red-50 text-red-700 rounded-md">
                        Your Band
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-slate-600 block mt-1">
                    M3
                  </span>
                </div>

                <div
                  className={`p-3 rounded-xl border transition-all ${
                    isLevelGroup3
                      ? 'bg-white border-red-300 shadow-xs ring-1 ring-red-200'
                      : 'bg-white/60 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#081c3b] tabular-nums">
                      ₹8,200<span className="text-xs font-normal text-slate-500">/month</span>
                    </span>
                    {isLevelGroup3 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-red-50 text-red-700 rounded-md">
                        Your Band
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-slate-600 block mt-1">
                    M4, M5 and E1
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 flex items-center gap-1.5">
              <span>Card-enabled Pluxee digital food allowance</span>
            </div>
          </div>

          {/* Card 2: Stay Connected */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#081c3b] mb-5">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3b]">
                Stay Connected
              </h3>
              <p className="text-sm font-semibold text-slate-600 mt-1">
                Allowances for high-speed workplace connectivity
              </p>

              <div className="mt-6 space-y-4">
                {/* Internet Allowance */}
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Internet Allowance
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                      All levels
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="text-xl font-extrabold text-[#081c3b] tabular-nums">
                      ₹600
                    </span>
                    <span className="text-xs text-slate-500">/month</span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-600 leading-snug">
                    For all the management level
                  </p>
                </div>

                {/* Mobile Allowance */}
                <div
                  className={`p-4 rounded-xl border transition-all ${
                    isEligibleForMobile
                      ? 'bg-white border-blue-300 shadow-xs'
                      : 'bg-white/70 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Mobile Allowance
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 bg-blue-50 text-blue-700 rounded">
                      SP & Above
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="text-xl font-extrabold text-[#081c3b] tabular-nums">
                      ₹1,000
                    </span>
                    <span className="text-xs text-slate-500">/month</span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-600 leading-snug">
                    For eligible employees at SP level and above
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              <span>Disbursed monthly to keep you seamlessly connected</span>
            </div>
          </div>

          {/* Card 3: Getting You There */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-5">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#081c3b]">
                Getting You There
              </h3>
              <p className="text-sm font-semibold text-emerald-800 mt-1">
                Safe commute & shift support
              </p>

              <div className="mt-6 space-y-3.5">
                {/* Cab Facility */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Cab Pickup and Drop Facility
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Provided for eligible employees for secure daily transport
                    </p>
                  </div>
                </div>

                {/* Night Shift Allowance */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">
                        Night Shift Allowance
                      </h4>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded tabular-nums">
                        ₹350
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      ₹350 per eligible night shift
                    </p>
                  </div>
                </div>

                {/* Holiday & Weekend */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Weekend & National Holiday Allowances
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Provided as per policy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              <span>Shift rosters and cab routes coordinated via HR transport desk</span>
            </div>
          </div>
        </div>

        {/* Section 1 Footer Anchor Statement */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200/60 max-w-3xl mx-auto">
          <p className="text-base sm:text-lg font-semibold text-[#081c3b] tracking-tight">
            “Everyday support, designed around the way you work.”
          </p>
        </div>
      </div>
    </section>
  );
};
