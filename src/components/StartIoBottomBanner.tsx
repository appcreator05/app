import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, X, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { START_IO_ADS, START_IO_APP_ID } from './StartIoNativeAd';

interface StartIoBottomBannerProps {
  language?: 'en' | 'bn';
}

export const StartIoBottomBanner: React.FC<StartIoBottomBannerProps> = ({ language = 'en' }) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(45);
  const [isFading, setIsFading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Auto-refresh every 45 seconds as requested
  useEffect(() => {
    setSecondsRemaining(45);
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          // Trigger transition to next ad creative
          setIsFading(true);
          setTimeout(() => {
            setCurrentAdIndex((idx) => (idx + 1) % START_IO_ADS.length);
            setIsFading(false);
          }, 300);
          return 45;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ad = START_IO_ADS[currentAdIndex];

  const handleAdClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const urlWithAppId = ad.url.includes('?')
      ? `${ad.url}&app_id=${START_IO_APP_ID}`
      : `${ad.url}?app_id=${START_IO_APP_ID}`;
    window.open(urlWithAppId, '_blank', 'noopener,noreferrer');
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-0 right-3 z-40">
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-1.5 bg-[#161a23] border border-[#00c0f9]/40 text-[#00c0f9] text-[11px] font-bold px-3 py-1 rounded-t-lg shadow-2xl hover:bg-[#1f2430] transition-all cursor-pointer"
        >
          <span>start.io Ad</span>
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div
      id="startio-bottom-sticky-banner"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#12151d]/95 backdrop-blur-lg border-t border-[#00c0f9]/30 shadow-2xl select-none"
    >
      {/* 45s Progress line indicator at the top of banner */}
      <div className="h-0.5 w-full bg-white/10">
        <div
          className="h-full bg-[#00c0f9] transition-all duration-1000 ease-linear"
          style={{ width: `${((45 - secondsRemaining) / 45) * 100}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Ad Clickable Area */}
        <div
          onClick={handleAdClick}
          className={`flex-1 flex items-center gap-2 sm:gap-3 cursor-pointer overflow-hidden transition-opacity duration-300 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Ad Badge & App Icon */}
          <div className="relative flex-shrink-0">
            <img
              src={ad.icon}
              alt={ad.title}
              referrerPolicy="no-referrer"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-cover border border-white/10 shadow"
            />
            <span className="absolute -top-1 -right-1 bg-[#00c0f9] text-slate-950 font-black text-[8px] px-1 rounded uppercase tracking-tighter">
              AD
            </span>
          </div>

          {/* Ad Copy & Details */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs sm:text-sm font-bold text-white truncate hover:text-[#00c0f9] transition-colors">
                {ad.title}
              </span>
              <span className="text-[10px] text-[#00c0f9] font-medium hidden sm:inline-flex items-center gap-1 font-mono">
                • {ad.category} • Start.io ID: {START_IO_APP_ID}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="truncate max-w-[180px] sm:max-w-md hidden xs:inline">
                {ad.description}
              </span>
              <div className="flex items-center gap-1 text-amber-400 font-bold text-[10px] flex-shrink-0">
                <Star className="w-2.5 h-2.5 fill-amber-400" />
                <span>{ad.rating}</span>
                <span className="text-slate-500 font-normal">({ad.reviews})</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              className="px-3 sm:px-4 py-1.5 bg-[#00c0f9] hover:bg-[#00d4ff] text-slate-950 font-extrabold text-xs rounded-lg shadow-md transition-transform active:scale-95 flex items-center gap-1 cursor-pointer"
            >
              <span>{ad.ctaText}</span>
              <ExternalLink className="w-3 h-3 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Start.io Network Branding & Timer / Minimize controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 border-l border-white/10 pl-2 sm:pl-3">
          <div className="flex flex-col items-end text-[9px] text-slate-400 leading-tight">
            <div className="flex items-center gap-1 text-[#00c0f9]">
              <span className="font-bold">start.io</span>
              <RefreshCw className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: '4s' }} />
            </div>
            <span className="text-slate-500 text-[8px]">{secondsRemaining}s</span>
          </div>

          <button
            onClick={() => setIsMinimized(true)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Minimize ad banner"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
