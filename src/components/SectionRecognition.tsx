import React from 'react';
import { Award, Medal, Sparkles, MessageSquareHeart, Users } from 'lucide-react';

export const SectionRecognition: React.FC = () => {
  return (
    <section id="recognition" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            <span>Career & Recognition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081c3b] tracking-tight">
            Every new chapter deserves support.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A new role, a new location or a milestone in your career — there are ways we support your journey.
          </p>
        </div>

        {/* Recognition Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Ignite Awards */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-5">
                <Award className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md mb-2">
                <span>Performance & Excellence</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#081c3b]">
                Ignite Awards
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Monthly and Bi-Annual Awards to Celebrate contributions and achievements.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>Monthly recognition for exceptional project delivery & innovation</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>Bi-annual honours across business vertical teams</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Peer and leadership nominated</span>
              <span className="font-semibold text-red-600">Monthly & Bi-Annual</span>
            </div>
          </div>

          {/* Card 2: Long Service Recognition and Benefits */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-5">
                <Medal className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md mb-2">
                <span>Loyalty & Dedication</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#081c3b]">
                Long Service Recognition and Benefits
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Celebrate the milestones and commitment of our people.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>Honouring career tenure milestones at CMA CGM</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>Commemorative tokens of appreciation and policy benefits</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Tenure milestones</span>
              <span className="font-semibold text-slate-700">Honouring Loyalty</span>
            </div>
          </div>
        </div>

        {/* Recognition Affirmation & HR Touchpoint */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
              <MessageSquareHeart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-[#081c3b]">
                “Your contribution matters. Your milestones matter.”
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Connect with HR to understand applicable recognition programmes and eligibility.
              </p>
            </div>
          </div>
          <a
            href="#support"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#081c3b] hover:bg-slate-800 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            HR & Support Details
          </a>
        </div>
      </div>
    </section>
  );
};
