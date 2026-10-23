import React from 'react';
import {
  Shield,
  Heart,
  Baby,
  Activity,
  FileText,
  LifeBuoy,
  Stethoscope,
  Info,
  Check,
} from 'lucide-react';

interface SectionInsuranceProps {
  selectedLevel: string;
}

export const SectionInsurance: React.FC<SectionInsuranceProps> = ({ selectedLevel }) => {
  return (
    <section id="insurance" className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            <span>Insurance Protection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081c3b] tracking-tight">
            Care for you. Protection for your family.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Your health and your family’s security matter. Our insurance benefits provide financial and medical protection when you need it most.
          </p>
        </div>

        {/* 1. Group Medical Coverage (GMC) */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                <Shield className="w-4 h-4" />
                <span>Health Insurance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#081c3b]">
                Group Medical Coverage (GMC)
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                Hospitalisation cover for you and your eligible family members.
              </p>
            </div>
            <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 shrink-0">
              Cashless hospitalisation & reimbursement support
            </div>
          </div>

          {/* GMC Coverage Tiers Comparison */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* GMC Tier 1 */}
            <div
              className={`p-6 rounded-xl border transition-all ${
                ['O', 'SO', 'SP', 'M1'].includes(selectedLevel)
                  ? 'bg-red-50/40 border-red-300 ring-1 ring-red-200'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Levels O, SO, SP & M1
                </span>
                {['O', 'SO', 'SP', 'M1'].includes(selectedLevel) && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-red-600 text-white rounded">
                    Selected Band
                  </span>
                )}
              </div>
              <div className="mt-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#081c3b] tabular-nums">
                  ₹3 lakh
                </span>
                <span className="text-xs text-slate-500 block mt-1">
                  Sum insured per family floater / year
                </span>
              </div>
              <p className="mt-4 text-xs text-slate-600 border-t border-slate-100 pt-3">
                Covers hospitalisation for employee, spouse, and eligible dependents as per policy.
              </p>
            </div>

            {/* GMC Tier 2 */}
            <div
              className={`p-6 rounded-xl border transition-all ${
                ['M2', 'M3'].includes(selectedLevel)
                  ? 'bg-red-50/40 border-red-300 ring-1 ring-red-200'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Levels M2 & M3
                </span>
                {['M2', 'M3'].includes(selectedLevel) && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-red-600 text-white rounded">
                    Selected Band
                  </span>
                )}
              </div>
              <div className="mt-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#081c3b] tabular-nums">
                  ₹5 lakh
                </span>
                <span className="text-xs text-slate-500 block mt-1">
                  Sum insured per family floater / year
                </span>
              </div>
              <p className="mt-4 text-xs text-slate-600 border-t border-slate-100 pt-3">
                Includes eligibility for Dental & Eye-care OPD cover up to ₹15,000.
              </p>
            </div>

            {/* GMC Tier 3 */}
            <div
              className={`p-6 rounded-xl border transition-all ${
                ['M4', 'M5', 'E1'].includes(selectedLevel)
                  ? 'bg-red-50/40 border-red-300 ring-1 ring-red-200'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Levels M4, M5 & E1
                </span>
                {['M4', 'M5', 'E1'].includes(selectedLevel) && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-red-600 text-white rounded">
                    Selected Band
                  </span>
                )}
              </div>
              <div className="mt-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#081c3b] tabular-nums">
                  ₹10 lakh
                </span>
                <span className="text-xs text-slate-500 block mt-1">
                  Sum insured per family floater / year
                </span>
              </div>
              <p className="mt-4 text-xs text-slate-600 border-t border-slate-100 pt-3">
                Includes eligibility for Standard OPD cover up to ₹50,000.
              </p>
            </div>
          </div>

          {/* Additional Medical Benefits */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <h4 className="text-lg font-bold text-[#081c3b]">
              Additional Medical Benefits
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Supplementary medical safeguards extending beyond base hospitalisation
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Dental and Eye-care */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-700">Dental & Eye-care OPD</span>
                    <span className="text-[11px] font-medium px-2 py-0.5 bg-slate-200/80 text-slate-700 rounded">
                      M2 & M3
                    </span>
                  </div>
                  <div className="text-xl font-bold text-[#081c3b] tabular-nums">
                    Up to ₹15,000
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  For eligible M2 and M3 employees
                </p>
              </div>

              {/* Standard OPD */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-700">Standard OPD</span>
                    <span className="text-[11px] font-medium px-2 py-0.5 bg-slate-200/80 text-slate-700 rounded">
                      M4, M5 & E1
                    </span>
                  </div>
                  <div className="text-xl font-bold text-[#081c3b] tabular-nums">
                    Up to ₹50,000
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  For eligible M4, M5 and E1 employees
                </p>
              </div>

              {/* Maternity & Infertility */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-700">Maternity & Infertility Benefit</span>
                    <span className="text-[11px] font-medium px-2 py-0.5 bg-rose-100 text-rose-800 rounded">
                      Family
                    </span>
                  </div>
                  <div className="text-xl font-bold text-[#081c3b] tabular-nums">
                    Up to ₹1 lakh
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Maternity benefit & Infertility treatment benefit
                </p>
              </div>

              {/* Pre & Post Natal */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-700">Pre- & Post-Natal OPD</span>
                    <span className="text-[11px] font-medium px-2 py-0.5 bg-slate-200/80 text-slate-700 rounded">
                      OPD
                    </span>
                  </div>
                  <div className="text-xl font-bold text-[#081c3b] tabular-nums">
                    Up to ₹10,000
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Pre- and post-natal OPD care support
                </p>
              </div>

              {/* Well-baby benefit */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between sm:col-span-2 lg:col-span-2">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-700">Well-Baby Benefit</span>
                    <span className="text-[11px] font-medium px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                      Newborn Care
                    </span>
                  </div>
                  <div className="text-xl font-bold text-[#081c3b] tabular-nums">
                    Up to ₹10,000
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Well-baby benefit: up to ₹10,000, <strong className="text-slate-800">in addition to the maternity limit</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Group Personal Accident (GPA) & 3. Group Term Life (GTL) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* GPA Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4" />
                <span>Accident Security</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#081c3b]">
                Group Personal Accident (GPA)
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Accident cover by employee level:
              </p>

              <div className="mt-6 space-y-3">
                <div
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    ['O', 'SO'].includes(selectedLevel)
                      ? 'bg-red-50/60 border-red-300 font-semibold'
                      : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <span className="text-sm text-slate-800">O and SO</span>
                  <span className="text-base sm:text-lg font-bold text-[#081c3b] tabular-nums">
                    ₹12 lakh
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    ['SP', 'M1'].includes(selectedLevel)
                      ? 'bg-red-50/60 border-red-300 font-semibold'
                      : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <span className="text-sm text-slate-800">SP and M1</span>
                  <span className="text-base sm:text-lg font-bold text-[#081c3b] tabular-nums">
                    ₹26 lakh
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    selectedLevel === 'M2'
                      ? 'bg-red-50/60 border-red-300 font-semibold'
                      : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <span className="text-sm text-slate-800">M2</span>
                  <span className="text-base sm:text-lg font-bold text-[#081c3b] tabular-nums">
                    ₹85 lakh
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    selectedLevel === 'M3'
                      ? 'bg-red-50/60 border-red-300 font-semibold'
                      : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <span className="text-sm text-slate-800">M3</span>
                  <span className="text-base sm:text-lg font-bold text-[#081c3b] tabular-nums">
                    ₹1.28 crore
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    ['M4', 'M5', 'E1'].includes(selectedLevel)
                      ? 'bg-red-50/60 border-red-300 font-semibold'
                      : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <span className="text-sm text-slate-800">M4, M5 and E1</span>
                  <span className="text-base sm:text-lg font-bold text-[#081c3b] tabular-nums">
                    ₹3 crore
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              24×7 worldwide protection against accidental injury and permanent disability
            </div>
          </div>

          {/* GTL Card & Orion Reference (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* GTL Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                  <Heart className="w-4 h-4" />
                  <span>Life Security</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#081c3b]">
                  Group Term Life (GTL)
                </h3>
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs uppercase font-semibold text-slate-500 block">
                    Coverage Formula
                  </span>
                  <p className="mt-1 text-base sm:text-lg font-bold text-[#081c3b]">
                    Equivalent to 24 months of Fixed Annual CTC
                  </p>
                  <span className="text-xs text-slate-500 block mt-1">
                    As per policy terms
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-4 leading-relaxed">
                  Financial security ensuring peace of mind for your loved ones in unprecedented events.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-900 leading-snug">
                  Protection that helps you focus on what matters most.
                </p>
              </div>
            </div>

            {/* Orion Portal Box */}
            <div className="bg-gradient-to-br from-slate-900 to-[#081c3b] rounded-2xl p-6 text-white shadow-sm">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>HR Portal Navigation</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Looking for your insurance details?
              </h4>
              <div className="mt-3 p-3 bg-white/10 rounded-xl border border-white/15 text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-between flex-wrap gap-2">
                <span>ORION → My Human Resources → Employee Insurance Manual</span>
              </div>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                Refer to the Employee Insurance Manual on ORION for eligibility and detailed terms.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
