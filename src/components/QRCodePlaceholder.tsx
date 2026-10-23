import React from 'react';
import { QrCode, Smartphone } from 'lucide-react';

interface QRCodePlaceholderProps {
  label: string;
  subtext?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const QRCodePlaceholder: React.FC<QRCodePlaceholderProps> = ({
  label,
  subtext = 'Placeholder · Official QR asset can be embedded here',
  size = 'md',
}) => {
  const dimensionClasses =
    size === 'sm' ? 'w-36 h-36' : size === 'lg' ? 'w-56 h-56' : 'w-44 h-44';

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`relative ${dimensionClasses} bg-white rounded-xl border-2 border-dashed border-slate-300 p-3 shadow-xs flex flex-col items-center justify-center group hover:border-red-400 transition-colors`}
        role="img"
        aria-label={label}
      >
        {/* Subtle corner registration marks */}
        <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-slate-700" />
        <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-slate-700" />
        <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-slate-700" />
        <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-slate-700" />

        {/* Center illustration graphic */}
        <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
          <QrCode className="w-8 h-8 text-slate-700" />
        </div>

        <span className="text-[11px] font-semibold text-slate-900 tracking-tight">
          QR Code Placeholder
        </span>
        <span className="text-[10px] text-slate-500 mt-0.5">
          Connect & Heal (CNH)
        </span>
      </div>

      <p className="mt-3 text-xs font-semibold text-slate-800 max-w-xs leading-relaxed">
        {label}
      </p>
      {subtext && (
        <span className="mt-1 text-[11px] text-slate-400 font-normal">
          {subtext}
        </span>
      )}
    </div>
  );
};
