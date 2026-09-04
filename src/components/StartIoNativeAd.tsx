import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, Download, ShieldCheck, RefreshCw } from 'lucide-react';
import { reportStartIoImpression, isAndroidNativeApp } from '../services/startIoBridge';

export interface AdCreative {
  id: string;
  title: string;
  advertiser: string;
  description: string;
  icon: string;
  image: string;
  rating: number;
  reviews: string;
  ctaText: string;
  category: string;
  url: string;
}

export const START_IO_APP_ID =
  (import.meta as unknown as { env?: { VITE_START_IO_APP_ID?: string } }).env?.VITE_START_IO_APP_ID ||
  '203877183';

export const START_IO_ADS: AdCreative[] = [
  {
    id: 'ad-1',
    title: 'Teen Patti & Rummy Gold',
    advertiser: 'Moonfrog Labs',
    description: 'Play India’s #1 card game with millions of real players! Claim 500,000 free chips today.',
    icon: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=120&auto=format&fit=crop&q=80',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviews: '1.2M',
    ctaText: 'Play Free',
    category: 'Games • Top Free',
    url: 'https://www.start.io',
  },
  {
    id: 'ad-2',
    title: 'NordVPN: Secure & Fast VPN',
    advertiser: 'Nord Security',
    description: 'Ultra-fast servers for buffer-free 4K streaming. Protect your privacy with 1-click.',
    icon: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&auto=format&fit=crop&q=80',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviews: '850K',
    ctaText: 'Get 70% Off',
    category: 'Tools • Privacy',
    url: 'https://www.start.io',
  },
  {
    id: 'ad-3',
    title: 'Shadow Fight 4: Arena',
    advertiser: 'Nekki Games',
    description: 'Epic real-time 3D PvP fighting action with console quality graphics & heroes.',
    icon: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=120&auto=format&fit=crop&q=80',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80',
    rating: 4.7,
    reviews: '3.4M',
    ctaText: 'Install Now',
    category: 'Action • Multiplayer',
    url: 'https://www.start.io',
  },
  {
    id: 'ad-4',
    title: 'Duolingo: Learn English & More',
    advertiser: 'Duolingo Inc.',
    description: 'Learn spoken English and 40+ languages through quick, fun, bite-sized lessons.',
    icon: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=120&auto=format&fit=crop&q=80',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviews: '15M',
    ctaText: 'Download',
    category: 'Education • Free',
    url: 'https://www.start.io',
  },
  {
    id: 'ad-5',
    title: 'Spotify: Music & Podcasts',
    advertiser: 'Spotify AB',
    description: 'Listen to millions of songs and podcasts on mobile or tablet for free.',
    icon: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=120&auto=format&fit=crop&q=80',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviews: '28M',
    ctaText: 'Listen Free',
    category: 'Music & Audio',
    url: 'https://www.start.io',
  },
];

interface StartIoNativeAdProps {
  placement?: string;
  autoRefreshSeconds?: number;
  language?: 'en' | 'bn';
  className?: string;
}

export const StartIoNativeAd: React.FC<StartIoNativeAdProps> = ({
  placement = 'content',
  autoRefreshSeconds = 45,
  language = 'en',
  className = '',
}) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(autoRefreshSeconds);
  const [isFading, setIsFading] = useState(false);

  // Auto-refresh every 45 seconds as requested by the user
  useEffect(() => {
    setSecondsRemaining(autoRefreshSeconds);
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          // Trigger transition to next ad
          setIsFading(true);
          setTimeout(() => {
            setCurrentAdIndex((idx) => (idx + 1) % START_IO_ADS.length);
            setIsFading(false);
          }, 300);
          return autoRefreshSeconds;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [autoRefreshSeconds]);

  const ad = START_IO_ADS[currentAdIndex];

  const handleAdClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    reportStartIoImpression(placement);
    const urlWithAppId = ad.url.includes('?')
      ? `${ad.url}&app_id=${START_IO_APP_ID}`
      : `${ad.url}?app_id=${START_IO_APP_ID}`;
    window.open(urlWithAppId, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex flex-col items-center justify-center my-4 ${className}`}>
      {/* Container holding exact 300x250px native ad format */}
      <div
        id={`startio-native-${placement}`}
        onClick={handleAdClick}
        className="relative w-[300px] h-[250px] bg-[#161a23] hover:bg-[#1a1f2b] border border-white/10 hover:border-[#00c0f9]/50 rounded-xl overflow-hidden shadow-xl transition-all cursor-pointer flex flex-col group select-none"
      >
        {/* Top Start.io Sponsored Badge & Timer Bar */}
        <div className="h-6 px-2.5 bg-[#0f1219] border-b border-white/5 flex items-center justify-between text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="bg-[#00c0f9]/20 text-[#00c0f9] font-extrabold px-1.5 py-0.2 rounded text-[9px] uppercase tracking-wider">
              Ad
            </span>
            <span className="font-semibold text-slate-300">start.io</span>
            <span className="text-slate-500 font-mono text-[9px]">• ID: {START_IO_APP_ID}</span>
          </div>

          <div className="flex items-center gap-1 text-[9px] text-slate-400">
            <RefreshCw className="w-2.5 h-2.5 text-[#00c0f9]/70 animate-spin" style={{ animationDuration: '4s' }} />
            <span>{secondsRemaining}s</span>
          </div>
        </div>

        {/* Ad Body with cross-fade animation */}
        <div
          className={`flex-1 flex flex-col p-2.5 transition-opacity duration-300 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Main Visual Image Banner (120px) */}
          <div className="relative w-full h-[116px] rounded-lg overflow-hidden bg-black/60 mb-2 border border-white/5">
            <img
              src={ad.image}
              alt={ad.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Category tag */}
            <span className="absolute bottom-1.5 left-2 text-[9px] font-medium text-slate-300 bg-black/70 backdrop-blur-xs px-1.5 py-0.5 rounded">
              {ad.category}
            </span>

            <span className="absolute top-1.5 right-1.5 bg-black/70 text-slate-300 p-1 rounded-full text-[9px]">
              <ExternalLink className="w-3 h-3 text-[#00c0f9]" />
            </span>
          </div>

          {/* App Info row & CTA Button */}
          <div className="flex items-center gap-2 mt-auto">
            {/* App Icon */}
            <img
              src={ad.icon}
              alt={ad.advertiser}
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-lg object-cover border border-white/10 flex-shrink-0"
            />

            {/* Title & Star Rating */}
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-bold text-white truncate group-hover:text-[#00c0f9] transition-colors">
                {ad.title}
              </h4>
              <p className="text-[10px] text-slate-400 truncate">
                {ad.advertiser}
              </p>
              <div className="flex items-center gap-1 text-[10px] text-amber-400 font-bold">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{ad.rating}</span>
                <span className="text-slate-500 font-normal">({ad.reviews})</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              className="px-3 py-1.5 bg-[#00c0f9] group-hover:bg-[#00d4ff] text-slate-950 font-extrabold text-xs rounded-lg shadow-md transition-transform active:scale-95 flex-shrink-0"
            >
              {ad.ctaText}
            </button>
          </div>
        </div>

        {/* 45-second progress indicator bar at bottom */}
        <div className="h-0.5 w-full bg-white/5">
          <div
            className="h-full bg-[#00c0f9] transition-all duration-1000 ease-linear"
            style={{ width: `${((autoRefreshSeconds - secondsRemaining) / autoRefreshSeconds) * 100}%` }}
          />
        </div>
      </div>

      {/* Subtle label under ad */}
      <span className="text-[10px] text-slate-500 mt-1">
        Advertisement • 300x250 Start.io Native • App ID: {START_IO_APP_ID}
      </span>
    </div>
  );
};
