import React from 'react';
import {
  X,
  Film,
  Sparkles,
  Flame,
  Tv,
  Clapperboard,
  History,
  Bookmark,
  Send,
  Info,
  ShieldAlert,
  ChevronRight,
  ExternalLink,
  Video,
  Smartphone,
} from 'lucide-react';
import { CategoryKey } from '../types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: CategoryKey;
  onSelectCategory: (cat: CategoryKey) => void;
  onSelectGenre: (genre: string) => void;
  onRequestMovie: () => void;
  onOpenWatchlist: () => void;
  onOpenAddMovie?: () => void;
  onOpenAndroidBuild?: () => void;
  language: 'en' | 'bn';
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  activeCategory,
  onSelectCategory,
  onSelectGenre,
  onRequestMovie,
  onOpenWatchlist,
  onOpenAddMovie,
  onOpenAndroidBuild,
  language,
}) => {
  if (!isOpen) return null;

  const categoriesList: { id: CategoryKey; label: string; bnLabel: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Movies', bnLabel: 'সব সিনেমা', icon: <Film className="w-4 h-4" /> },
    { id: 'trending', label: 'Featured & Trending', bnLabel: 'ট্রেন্ডিং মুভি', icon: <Flame className="w-4 h-4 text-orange-400" /> },
    { id: 'bollywood', label: 'Bollywood Hindi Movie', bnLabel: 'বলিউড হিন্দি মুভি', icon: <Clapperboard className="w-4 h-4 text-pink-400" /> },
    { id: 'bollywood-90s', label: 'Bollywood 90s Movie', bnLabel: 'বলিউড ৯০ দশকের সিনেমা', icon: <History className="w-4 h-4 text-amber-400" /> },
    { id: 'hollywood-hindi', label: 'Hollywood Hindi Dubbed', bnLabel: 'হলিউড হিন্দি ডাবড', icon: <Film className="w-4 h-4 text-purple-400" /> },
    { id: 'horror-hindi', label: 'Horror Hindi Dubbed', bnLabel: 'হরর হিন্দি ডাবড', icon: <Sparkles className="w-4 h-4 text-rose-400" /> },
    { id: 'tagalog', label: 'Tagalog Movie', bnLabel: 'তাগালগ সিনেমা', icon: <Film className="w-4 h-4 text-cyan-400" /> },
    { id: 'bengali', label: 'Bengali Movie', bnLabel: 'বাংলা সিনেমা', icon: <Clapperboard className="w-4 h-4 text-emerald-400" /> },
    { id: 'south-hindi', label: 'South Indian Hindi Dubbed', bnLabel: 'সাউথ হিন্দি ডাবড', icon: <Sparkles className="w-4 h-4 text-[#00c0f9]" /> },
    { id: 'web-series', label: 'Web Series & Shows', bnLabel: 'ওয়েব সিরিজ ও শো', icon: <Tv className="w-4 h-4 text-indigo-400" /> },
  ];

  const popularGenres = [
    'Action',
    'Horror',
    'Comedy',
    'Thriller',
    'Sci-Fi',
    'Romance',
    'Crime',
    'Mystery',
    'Adventure',
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        id="menu-backdrop"
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="relative w-80 max-w-[85vw] bg-[#12151c] h-full shadow-2xl flex flex-col z-10 border-r border-white/10 overflow-y-auto custom-scrollbar">
        {/* Drawer Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#171b24]">
          <div className="flex items-center gap-2.5">
            <img src="/pwa-192x192.png" alt="DSP Reviews" className="w-7 h-7 rounded-full shadow-md object-contain" />
            <span className="font-extrabold text-white text-base tracking-wide">
              DSP <span className="text-[#e50914]">Reviews</span>
            </span>
          </div>

          <button
            id="btn-close-menu"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Section */}
        <div className="p-4 border-b border-white/5">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
            {language === 'bn' ? 'ক্যাটাগরি সমূহ' : 'Categories'}
          </div>

          <div className="space-y-1">
            {categoriesList.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`drawer-cat-${cat.id}`}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#00c0f9] text-slate-950 font-bold'
                      : 'text-slate-300 hover:bg-[#1c212c] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {cat.icon}
                    <span>{language === 'bn' ? cat.bnLabel : cat.label}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Genres Pill Grid */}
        <div className="p-4 border-b border-white/5">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 px-2">
            {language === 'bn' ? 'জনপ্রিয় জনরা (ধরণ)' : 'Popular Genres'}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {popularGenres.map((genre) => (
              <button
                key={genre}
                id={`drawer-genre-${genre.toLowerCase()}`}
                onClick={() => {
                  onSelectGenre(genre);
                  onClose();
                }}
                className="px-2.5 py-1 rounded-md bg-[#1a1e27] hover:bg-[#00c0f9] hover:text-slate-950 text-slate-300 text-xs font-medium border border-white/5 transition-colors cursor-pointer"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Utilities */}
        <div className="p-4 space-y-1.5 flex-1">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
            {language === 'bn' ? 'সুবিধাসমূহ' : 'Utilities'}
          </div>

          {onOpenAndroidBuild && (
            <button
              id="drawer-btn-android-build"
              onClick={() => {
                onOpenAndroidBuild();
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>
                  {language === 'bn'
                    ? 'Android APK ও আসল বিজ্ঞাপন'
                    : 'Android APK & Real Ads'}
                </span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded text-emerald-300 font-mono font-semibold">
                Start.io
              </span>
            </button>
          )}

          <button
            id="drawer-btn-watchlist"
            onClick={() => {
              onOpenWatchlist();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:bg-[#1c212c] transition-colors"
          >
            <Bookmark className="w-4 h-4 text-[#00c0f9]" />
            <span>{language === 'bn' ? 'আমার পছন্দের তালিকা (Watchlist)' : 'My Watchlist'}</span>
          </button>

          {onOpenAddMovie && (
            <button
              id="drawer-btn-add-movie"
              onClick={() => {
                onOpenAddMovie();
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-[#00c0f9] bg-[#00c0f9]/10 hover:bg-[#00c0f9]/20 border border-[#00c0f9]/30 transition-colors"
            >
              <Video className="w-4 h-4 text-[#00c0f9]" />
              <span>{language === 'bn' ? 'ভিডিও ও মুভি যুক্ত করুন' : 'Add Movie & Video Link'}</span>
            </button>
          )}

          <button
            id="drawer-btn-request"
            onClick={() => {
              onRequestMovie();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:bg-[#1c212c] transition-colors"
          >
            <Send className="w-4 h-4 text-emerald-400" />
            <span>{language === 'bn' ? 'মুভির জন্য রিকোয়েস্ট করুন' : 'Request a Movie'}</span>
          </button>
        </div>

        {/* Footer info & Telegram / Community badge */}
        <div className="p-4 bg-[#0d0f14] border-t border-white/10 text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <Info className="w-4 h-4" />
            <span>{language === 'bn' ? 'সব ধরণের রেজোলিউশন উপলব্ধ' : 'High Speed GDrive & VIP Cloud'}</span>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-500">
            {language === 'bn'
              ? '480p, 720p, 1080p এবং 4K HDR ডাউনলোড লিঙ্ক ও অনলাইন স্ট্রিমিং।'
              : 'Direct fast download links & instant preview player with multi-audio support.'}
          </p>
        </div>
      </div>
    </div>
  );
};
