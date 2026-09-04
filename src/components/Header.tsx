import React, { useState, useEffect, useRef } from 'react';
import { Menu, Mic, MicOff, Search, Bookmark, Languages, X, Plus, Video, Smartphone } from 'lucide-react';
import { Movie } from '../types';

interface HeaderProps {
  onOpenMenu: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  watchlistCount: number;
  onOpenWatchlist: () => void;
  language: 'en' | 'bn';
  onToggleLanguage: () => void;
  onSelectMovie: (movie: Movie) => void;
  allMovies: Movie[];
  onOpenAddMovie?: () => void;
  onOpenAndroidBuild?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  searchQuery,
  onSearchChange,
  watchlistCount,
  onOpenWatchlist,
  language,
  onToggleLanguage,
  onSelectMovie,
  allMovies,
  onOpenAddMovie,
  onOpenAndroidBuild,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [showLiveResults, setShowLiveResults] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Filter live search preview
  const liveResults = searchQuery.trim()
    ? allMovies
        .filter(
          (m) =>
            m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (m.bengaliTitle && m.bengaliTitle.includes(searchQuery)) ||
            m.genres.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase())) ||
            m.cast.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
            m.year.toString().includes(searchQuery)
        )
        .slice(0, 6)
    : [];

  // Close live search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setShowLiveResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Web Speech Recognition for Voice Search
  const handleVoiceSearch = () => {
    // Check if Web Speech API is supported
    const win = window as unknown as {
      SpeechRecognition?: any;
      webkitSpeechRecognition?: any;
    };
    const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      alert(
        language === 'bn'
          ? 'আপনার ব্রাউজারে ভয়েস সার্চ সমর্থন করে না। অনুগ্রহ করে টাইপ করে খুঁজুন।'
          : 'Voice search is not supported in this browser. Please type to search.'
      );
      return;
    }

    try {
      const recognition = new SpeechRecognitionClass();
      recognition.lang = language === 'bn' ? 'bn-BD' : 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results?.[0]?.[0]?.transcript || '';
        if (transcript) {
          onSearchChange(transcript);
          setShowLiveResults(true);
        }
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#101318]/95 backdrop-blur-md border-b border-white/5 py-2.5 px-3 sm:px-6 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4">
        {/* Left: App Logo & Cyan Menu Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/pwa-192x192.png"
            alt="DSP Reviews Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shadow-lg object-contain border border-red-500/30 flex-shrink-0"
          />
          <button
            id="btn-main-menu"
            onClick={onOpenMenu}
            className="flex items-center gap-2 bg-[#00c0f9] hover:bg-[#00ade0] active:scale-95 text-slate-950 font-bold px-3 sm:px-4 py-2 rounded-lg text-sm transition-all shadow-md shadow-[#00c0f9]/20 flex-shrink-0 cursor-pointer"
          >
            <Menu className="w-5 h-5 stroke-[2.5]" />
            <span className="tracking-wide hidden xs:inline">
              {language === 'bn' ? 'মেনু' : 'Menu'}
            </span>
          </button>
        </div>

        {/* Center: Search Bar with Voice Search Mic (Matches screenshot: 🎙 Enter Movie Name, Or a...) */}
        <div
          ref={searchContainerRef}
          className="relative flex-1 max-w-2xl"
        >
          <div className="relative flex items-center w-full bg-[#1b2029] border border-white/10 rounded-lg focus-within:border-[#00c0f9] focus-within:ring-1 focus-within:ring-[#00c0f9] transition-all">
            {/* Microphone Button (Voice Search) */}
            <button
              id="btn-voice-search"
              type="button"
              onClick={handleVoiceSearch}
              title={
                isListening
                  ? language === 'bn'
                    ? 'শুনছি...'
                    : 'Listening...'
                  : language === 'bn'
                  ? 'ভয়েস সার্চ'
                  : 'Voice Search'
              }
              className={`p-2.5 transition-colors ${
                isListening
                  ? 'text-red-500 animate-pulse bg-red-500/10'
                  : 'text-slate-400 hover:text-[#00c0f9]'
              }`}
            >
              {isListening ? (
                <MicOff className="w-4 h-4" />
              ) : (
                <Mic className="w-4 h-4" />
              )}
            </button>

            {/* Input */}
            <input
              id="input-movie-search"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setShowLiveResults(true);
              }}
              onFocus={() => setShowLiveResults(true)}
              placeholder={
                isListening
                  ? language === 'bn'
                    ? 'কথা বলুন...'
                    : 'Listening... speak now'
                  : language === 'bn'
                  ? 'মুভির নাম লিখুন, অথবা...'
                  : 'Enter Movie Name, Or a...'
              }
              className="w-full bg-transparent py-2 px-1 text-sm text-slate-100 placeholder-slate-400 focus:outline-none"
            />

            {/* Clear Button or Search Icon */}
            {searchQuery ? (
              <button
                id="btn-clear-search"
                onClick={() => {
                  onSearchChange('');
                  setShowLiveResults(false);
                }}
                className="p-2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <div className="p-2 text-slate-500">
                <Search className="w-4 h-4" />
              </div>
            )}
          </div>

          {/* Live Search Results Dropdown */}
          {showLiveResults && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#15181f] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 divide-y divide-white/5">
              {liveResults.length > 0 ? (
                <div>
                  <div className="px-3 py-1.5 bg-[#1a1e27] text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex justify-between items-center">
                    <span>
                      {language === 'bn' ? 'অনুসন্ধানের ফলাফল' : 'Quick Results'}
                    </span>
                    <span className="text-[#00c0f9]">
                      {liveResults.length} {language === 'bn' ? 'টি পাওয়া গেছে' : 'found'}
                    </span>
                  </div>
                  {liveResults.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => {
                        onSelectMovie(m);
                        setShowLiveResults(false);
                      }}
                      className="p-2.5 flex items-center gap-3 hover:bg-[#202531] cursor-pointer transition-colors"
                    >
                      <img
                        src={m.posterUrl}
                        alt={m.title}
                        referrerPolicy="no-referrer"
                        className="w-10 h-14 object-cover rounded bg-black/40 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-slate-100 truncate">
                            {language === 'bn' && m.bengaliTitle
                              ? m.bengaliTitle
                              : m.title}
                          </h4>
                          <span className="bg-[#00c0f9]/10 text-[#00c0f9] text-[10px] font-bold px-1.5 py-0.2 rounded">
                            {m.year}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 truncate mt-0.5">
                          {m.genres.join(' • ')}
                        </p>
                        <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-400">
                          <span className="text-[#f59e0b] font-bold">
                            ★ {m.rating.toFixed(3)}
                          </span>
                          <span>{m.qualityBadge}</span>
                          <span className="text-cyan-400">{m.audio}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-sm text-slate-400">
                  {language === 'bn'
                    ? 'কোনো মুভি পাওয়া যায়নি।'
                    : 'No movies matching your search.'}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Action Icons: Add Video/Movie, Android APK Setup, Language Toggle & Watchlist */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Android APK & Real Start.io Ads Button */}
          {onOpenAndroidBuild && (
            <button
              id="btn-header-android-apk"
              onClick={onOpenAndroidBuild}
              title={
                language === 'bn'
                  ? 'Android APK ও আসল Start.io বিজ্ঞাপন সেটআপ'
                  : 'Android APK & Real Start.io Ads Setup'
              }
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-xs font-bold text-emerald-400 transition-all cursor-pointer shadow-sm shadow-emerald-500/10"
            >
              <Smartphone className="w-3.5 h-3.5 stroke-[2.2]" />
              <span className="hidden sm:inline">
                {language === 'bn' ? 'APK ও রিয়েল অ্যাডস' : 'APK & Real Ads'}
              </span>
            </button>
          )}

          {/* Add Movie / Video Link Button */}
          {onOpenAddMovie && (
            <button
              id="btn-header-add-movie"
              onClick={onOpenAddMovie}
              title={language === 'bn' ? 'ভিডিও ও মুভি লিংক যোগ করুন' : 'Add Movie & Video Link'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#00c0f9]/15 hover:bg-[#00c0f9]/25 border border-[#00c0f9]/40 text-xs font-bold text-[#00c0f9] transition-all cursor-pointer shadow-sm shadow-[#00c0f9]/10"
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="hidden md:inline">
                {language === 'bn' ? '+ মুভি লিংক' : '+ Add Video'}
              </span>
            </button>
          )}

          {/* Language Switcher */}
          <button
            id="btn-lang-toggle"
            onClick={onToggleLanguage}
            title={language === 'en' ? 'Switch to বাংলা' : 'Switch to English'}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#1b2029] hover:bg-[#242b37] border border-white/5 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
          >
            <Languages className="w-3.5 h-3.5 text-[#00c0f9]" />
            <span>{language === 'en' ? 'বাংলা' : 'ENG'}</span>
          </button>

          {/* Watchlist Button */}
          <button
            id="btn-open-watchlist"
            onClick={onOpenWatchlist}
            title={language === 'bn' ? 'আমার ওয়াচলিস্ট' : 'My Watchlist'}
            className="relative p-2 rounded-lg bg-[#1b2029] hover:bg-[#242b37] border border-white/5 text-slate-300 transition-colors cursor-pointer"
          >
            <Bookmark className="w-4 h-4 text-[#00c0f9]" />
            {watchlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#00c0f9] text-slate-950 font-extrabold text-[10px] rounded-full flex items-center justify-center shadow">
                {watchlistCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
