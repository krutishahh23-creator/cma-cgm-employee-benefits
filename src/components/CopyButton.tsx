import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = 'Copy',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`${label}: ${textToCopy}`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border transition-all duration-200 cursor-pointer ${
        copied
          ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-xs'
      } ${className}`}
      title={copied ? 'Copied to clipboard!' : `Copy ${textToCopy}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span className="font-semibold text-emerald-700">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
