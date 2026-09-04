import React from 'react';
import { Film, Shield, Heart, Sparkles, Send } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'bn';
  onOpenRequest: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenRequest }) => {
  return (
    <footer className="w-full bg-[#0d0f14] border-t border-white/5 py-8 px-4 sm:px-6 text-slate-400 mt-12 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <img src="/pwa-192x192.png" alt="DSP Reviews" className="w-6 h-6 rounded-full object-contain" />
            <span className="font-extrabold text-white text-base tracking-wide">
              DSP <span className="text-[#e50914]">Reviews</span>
            </span>
          </div>
          <p className="text-slate-500 max-w-md">
            {language === 'bn'
              ? 'বলিউড, হলিউড এবং সাউথ ইন্ডিয়ান হিন্দি ডাবড সিনেমার সেরা পোর্টাল। দ্রুত ডাউনলোড ও নিরবচ্ছিন্ন স্ট্রিমিং।'
              : 'Premier destination for Bollywood, Hollywood Hindi Dubbed, and South Indian cinema. Direct high-speed download links & instant preview streaming.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
          <button
            onClick={onOpenRequest}
            className="hover:text-[#00c0f9] transition-colors flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5 text-[#00c0f9]" />
            <span>{language === 'bn' ? 'মুভি রিকোয়েস্ট' : 'Request Movie'}</span>
          </button>
          <span>•</span>
          <span className="hover:text-[#00c0f9] cursor-pointer">
            {language === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
          </span>
          <span>•</span>
          <span className="hover:text-[#00c0f9] cursor-pointer">
            {language === 'bn' ? 'কপিরাইট ডিসক্লেইমার' : 'DMCA Disclaimer'}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-600 text-center">
        <p>© 2024-2025 DSP Reviews Portal. All rights reserved.</p>
        <p className="flex items-center gap-1 text-slate-500">
          <span>Crafted with pure entertainment passion</span>
        </p>
      </div>
    </footer>
  );
};
