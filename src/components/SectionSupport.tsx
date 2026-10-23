import React from 'react';
import {
  Phone,
  Mail,
  User,
  Clock,
  CreditCard,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Heart,
  QrCode,
  ShieldAlert,
} from 'lucide-react';
import { TPA_CONTACTS } from '../data/benefitsData.ts';
import { CopyButton } from './CopyButton.tsx';
import { QRCodePlaceholder } from './QRCodePlaceholder.tsx';

export const SectionSupport: React.FC = () => {
  return (
    <section id="support" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            <span>Contacts & Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081c3b] tracking-tight">
            Know where to go. Know where to find support.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Direct contacts for insurance claims, emergency cashless approvals, wellbeing app access, and dependent enrollment.
          </p>
        </div>

        {/* 1. Newly Wed or Newborn Alert Banner (Important Time-Sensitive Policy) */}
        <div className="mt-10 p-5 sm:p-6 bg-amber-50/80 rounded-2xl border border-amber-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/60 px-2 py-0.5 rounded">
                  30-Day Window
                </span>
                <h3 className="text-base sm:text-lg font-bold text-amber-950">
                  Newly Wed or Newborn in the Family?
                </h3>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-amber-900 leading-relaxed">
                Update dependent details in both HRIS and the TPA portal within <strong>30 days</strong> of the date of marriage or the newborn’s date of birth to add them to your insurance policy.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Main Support Columns: TPA Support + Wellbeing CNH App */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TPA Support Contacts (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                <ShieldAlert className="w-4 h-4" />
                <span>NEED HELP WITH YOUR HEALTH INSURANCE?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#081c3b]">
                Your TPA Support Contacts
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Health India TPA services for hospitalisation, cashless desk, and claims queries.
              </p>

              {/* Central TPA Desks: 24x7 & Cashless */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 24x7 Customer Care */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-600" />
                        <h4 className="text-sm font-bold text-slate-900">
                          {TPA_CONTACTS.customerCare.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded">
                        24 Hours
                      </span>
                    </div>

                    <div className="space-y-3 mt-4 text-xs">
                      {/* Email */}
                      <div>
                        <span className="text-slate-400 block mb-0.5 font-medium">Email</span>
                        <div className="flex items-center justify-between gap-2">
                          <a
                            href={`mailto:${TPA_CONTACTS.customerCare.email}`}
                            className="font-semibold text-slate-800 hover:text-red-600 truncate transition-colors"
                          >
                            {TPA_CONTACTS.customerCare.email}
                          </a>
                          <CopyButton textToCopy={TPA_CONTACTS.customerCare.email} label="Copy" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <span className="text-slate-400 block mb-0.5 font-medium">Phone</span>
                        <div className="flex items-center justify-between gap-2">
                          <a
                            href={`tel:${TPA_CONTACTS.customerCare.phoneFormatted}`}
                            className="font-semibold text-slate-800 hover:text-red-600 tabular-nums transition-colors"
                          >
                            {TPA_CONTACTS.customerCare.phone}
                          </a>
                          <CopyButton textToCopy={TPA_CONTACTS.customerCare.phone} label="Copy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cashless Claims Desk */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-[#081c3b]" />
                        <h4 className="text-sm font-bold text-slate-900">
                          {TPA_CONTACTS.cashlessClaims.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-50 text-blue-700 rounded">
                        Hospital Desk
                      </span>
                    </div>

                    <div className="space-y-3 mt-4 text-xs">
                      {/* Email */}
                      <div>
                        <span className="text-slate-400 block mb-0.5 font-medium">Email</span>
                        <div className="flex items-center justify-between gap-2">
                          <a
                            href={`mailto:${TPA_CONTACTS.cashlessClaims.email}`}
                            className="font-semibold text-slate-800 hover:text-red-600 truncate transition-colors"
                          >
                            {TPA_CONTACTS.cashlessClaims.email}
                          </a>
                          <CopyButton textToCopy={TPA_CONTACTS.cashlessClaims.email} label="Copy" />
                        </div>
                      </div>

                      {/* Landline */}
                      <div>
                        <span className="text-slate-400 block mb-0.5 font-medium">Landline</span>
                        <div className="flex items-center justify-between gap-2">
                          <a
                            href={`tel:02266867559`}
                            className="font-semibold text-slate-800 hover:text-red-600 tabular-nums transition-colors"
                          >
                            {TPA_CONTACTS.cashlessClaims.displayLandline}
                          </a>
                          <CopyButton textToCopy={TPA_CONTACTS.cashlessClaims.displayLandline} label="Copy" />
                        </div>
                      </div>

                      {/* Mobile */}
                      <div>
                        <span className="text-slate-400 block mb-0.5 font-medium">Mobile</span>
                        <div className="flex items-center justify-between gap-2">
                          <a
                            href={`tel:${TPA_CONTACTS.cashlessClaims.mobile}`}
                            className="font-semibold text-slate-800 hover:text-red-600 tabular-nums transition-colors"
                          >
                            {TPA_CONTACTS.cashlessClaims.mobile}
                          </a>
                          <CopyButton textToCopy={TPA_CONTACTS.cashlessClaims.mobile} label="Copy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Single Point of Contact (SPOCs) */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-base font-bold text-[#081c3b]">
                      Your Single Point of Contact
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Dedicated Health India TPA account managers for CMA CGM employees
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 hidden sm:inline-block">
                    Save these contacts for when you need support.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {TPA_CONTACTS.spocs.map((spoc) => (
                    <div
                      key={spoc.name}
                      className="bg-white p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xs mb-3">
                          <User className="w-4 h-4 text-slate-600" />
                        </div>
                        <h5 className="text-sm font-bold text-[#081c3b]">
                          {spoc.name}
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          TPA SPOC
                        </p>

                        <div className="mt-4 space-y-2 text-xs">
                          {/* Email */}
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">Email</span>
                            <div className="flex items-center justify-between gap-1">
                              <a
                                href={`mailto:${spoc.email}`}
                                className="font-medium text-slate-800 hover:text-red-600 text-[11px] truncate"
                                title={spoc.email}
                              >
                                {spoc.email}
                              </a>
                              <CopyButton textToCopy={spoc.email} label="Copy" />
                            </div>
                          </div>

                          {/* Phone */}
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">Phone</span>
                            <div className="flex items-center justify-between gap-1">
                              <a
                                href={`tel:${spoc.phone}`}
                                className="font-semibold text-slate-800 hover:text-red-600 tabular-nums text-xs"
                              >
                                {spoc.phone}
                              </a>
                              <CopyButton textToCopy={spoc.phone} label="Copy" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-center sm:text-left text-xs font-medium text-slate-600 italic">
                  Save these contacts for when you need support.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Wellbeing App & Orion Help Box (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Explore Wellbeing Services (CNH QR Placeholder) */}
            <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-between text-center">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                  Mobile Access
                </span>
                <h4 className="text-lg font-bold text-[#081c3b]">
                  Explore wellbeing services
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                  Scan the QR code to access the Connect & Heal (CNH) app.
                </p>
              </div>

              <div className="mt-5 bg-white p-4 rounded-xl border border-slate-200 shadow-xs w-full max-w-xs">
                <QRCodePlaceholder
                  size="md"
                  label="Scan the QR code to access the Connect & Heal (CNH) app."
                  subtext="Connect & Heal (CNH) App"
                />
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 w-full text-[11px] text-slate-500">
                <span>Available for iOS and Android devices</span>
              </div>
            </div>

            {/* Orion Insurance Details Navigation Box */}
            <div className="bg-[#081c3b] rounded-2xl p-6 text-white shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Internal Documentation</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Looking for your insurance details?
              </h4>
              <div className="mt-3 p-3 bg-white/10 rounded-xl border border-white/15 text-xs font-medium text-slate-100">
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  Path in Orion
                </span>
                <p className="font-bold text-sm tracking-wide text-white">
                  ORION → My Human Resources → Employee Insurance Manual
                </p>
              </div>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                Log in to the ORION portal to download the complete manual, view updated network hospital lists, and track claim histories.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
