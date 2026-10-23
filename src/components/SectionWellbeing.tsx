import React from 'react';
import {
  HeartPulse,
  UserCheck,
  Smile,
  Video,
  Percent,
  Dumbbell,
  Tag,
  CheckCircle2,
} from 'lucide-react';
import { QRCodePlaceholder } from './QRCodePlaceholder.tsx';

export const SectionWellbeing: React.FC = () => {
  const wellbeingServices = [
    {
      title: 'Annual health check-up',
      desc: 'Preventive health check-ups scheduled annually to keep you proactive about your overall physical wellness.',
      icon: HeartPulse,
      tag: 'Preventive Care',
    },
    {
      title: 'Doctor consultations',
      desc: 'Doctor consultations, including available specialist services across medical disciplines.',
      icon: UserCheck,
      tag: 'Specialist Access',
    },
    {
      title: 'Life coaching & emotional wellbeing',
      desc: 'Life coaching and emotional wellbeing support for work-life balance, stress management, and mental resilience.',
      icon: Smile,
      tag: 'Mental Health',
    },
    {
      title: 'Teleconsultation through CNH',
      desc: 'Teleconsultation through the Connect & Heal (CNH) app for instant medical advice from home or office.',
      icon: Video,
      tag: 'Digital Consult',
    },
  ];

  const healthcareDiscounts = [
    { title: 'Individual diagnostic tests', discount: 'Up to 20%' },
    { title: 'Health packages', discount: 'Up to 40%' },
    { title: 'Medicine deliveries', discount: 'Up to 15%' },
    { title: 'OPD clinic appointments', discount: 'Up to 10%' },
    { title: 'Emergency ambulance services', discount: 'Up to 10%' },
    { title: 'Condition-management services', discount: 'Up to 20%' },
  ];

  return (
    <section id="wellbeing" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            <span>Wellbeing & Health</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081c3b] tracking-tight">
            Your wellbeing deserves a place on your to-do list.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Make time for your health with services that support your physical and emotional wellbeing.
          </p>
        </div>

        {/* 1. Care that fits into your life: 4 Cards */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#081c3b]">
              Care that fits into your life
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline-block">
              Accessible via Connect & Heal
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellbeingServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-red-600 mb-4 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      {service.tag}
                    </span>
                    <h4 className="text-base font-bold text-[#081c3b]">
                      {service.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Included benefit</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. More value from your healthcare (Discounts) & CULT Fitness */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Healthcare Discounts (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                <Tag className="w-4 h-4" />
                <span>Value Add-Ons</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#081c3b]">
                More value from your healthcare
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Explore available offers, including discounts of up to:
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {healthcareDiscounts.map((offer) => (
                  <div
                    key={offer.title}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs"
                  >
                    <span className="text-xs font-medium text-slate-800">
                      {offer.title}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md shrink-0 tabular-nums">
                      {offer.discount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
              Discounts accessible through the partner healthcare network and CNH platform.
            </div>
          </div>

          {/* CULT Fitness Card & QR Code Placeholder (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#081c3b] to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold text-red-400 mb-3">
                <Dumbbell className="w-3.5 h-3.5" />
                <span>Active Living</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Make movement part of your routine
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Explore CULT fitness membership options:
              </p>

              {/* Pricing Cards */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                  <span className="text-xs font-medium text-slate-300 block">6 months</span>
                  <span className="text-2xl font-extrabold text-white mt-1 block tabular-nums">
                    ₹8,000
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1 block">Full gym & classes</span>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-red-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-red-600 text-[10px] font-bold px-2 py-0.5 rounded-bl">
                    Best Value
                  </div>
                  <span className="text-xs font-medium text-slate-300 block">12 months</span>
                  <span className="text-2xl font-extrabold text-white mt-1 block tabular-nums">
                    ₹14,000
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1 block">Annual access</span>
                </div>
              </div>

              <p className="mt-4 text-xs font-medium text-red-300 italic">
                “One app. More ways to care for yourself.”
              </p>
            </div>

            {/* QR Code Placeholder Box */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center">
              <div className="bg-white p-3 rounded-xl shadow-inner max-w-xs w-full text-slate-900">
                <QRCodePlaceholder
                  size="sm"
                  label="Scan the CNH app QR code to explore available services and eligibility."
                  subtext="Connect & Heal (CNH) Mobile App"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
