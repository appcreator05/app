import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowLeft,
  Star,
  Play,
  Download,
  Bookmark,
  Check,
  Film,
  Clock,
  Calendar,
  Volume2,
  Subtitles,
  Server,
  Copy,
  ExternalLink,
  Share2,
} from 'lucide-react';
import { Movie } from '../types';
import { StartIoNativeAd } from './StartIoNativeAd';

interface MovieDetailsModalProps {
  movie: Movie | null;
  onClose: () => void;
  onPlayTrailer: (movie: Movie) => void;
  isWatchlist: boolean;
  onToggleWatchlist: (movie: Movie) => void;
  onSelectRelated: (movie: Movie) => void;
  allMovies: Movie[];
  language: 'en' | 'bn';
}

export const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
  movie,
  onClose,
  onPlayTrailer,
  isWatchlist,
  onToggleWatchlist,
  onSelectRelated,
  allMovies,
  language,
}) => {
  const [activeQualityTab, setActiveQualityTab] = useState<number>(0);
  const [downloadingServer, setDownloadingServer] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [downloadReady, setDownloadReady] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  const relatedMovies = allMovies
    .filter(
      (m) =>
        m.id !== movie.id &&
        (m.categories.some((c) => movie.categories.includes(c)) ||
          m.genres.some((g) => movie.genres.includes(g)))
    )
    .slice(0, 4);

  const handleStartDownload = (serverName: string) => {
    setDownloadingServer(serverName);
    setDownloadReady(false);
    setCountdown(3);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timer);
          setDownloadReady(true);
          return null;
        }
        return prev - 1;
      });
    }, 800);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const currentDownloadGroup = movie.downloadLinks[activeQualityTab] || movie.downloadLinks[0];

  return (
    <div
      id="movie-details-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md"
    >
      <div className="min-h-full w-full flex items-start justify-center p-0 sm:p-4 md:p-6">
        {/* Modal Container (Starts properly at the top, never pushed into negative coordinates) */}
        <div className="relative w-full max-w-4xl bg-[#14171f] border-0 sm:border border-white/10 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden my-0 sm:my-6 min-h-screen sm:min-h-0">
          
          {/* ALWAYS VISIBLE STICKY TOP BAR: Back button, title, and close button */}
          <div className="sticky top-0 z-40 w-full bg-[#12151c]/95 backdrop-blur-md border-b border-white/10 px-3 sm:px-5 py-2.5 flex items-center justify-between shadow-lg">
            <button
              id="btn-modal-back-top"
              onClick={onClose}
              className="flex items-center gap-1.5 bg-[#00c0f9] hover:bg-[#00ade0] active:scale-95 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-all shadow-md shadow-[#00c0f9]/20 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>{language === 'bn' ? 'ফিরে যান (Back)' : 'Back'}</span>
            </button>

            <div className="truncate max-w-[170px] sm:max-w-xs md:max-w-md text-xs sm:text-sm font-bold text-white px-2">
              {language === 'bn' && movie.bengaliTitle ? movie.bengaliTitle : movie.title}
            </div>

            <button
              id="btn-close-details"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer"
              title={language === 'bn' ? 'বন্ধ করুন' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Backdrop Banner */}
          <div className="relative w-full h-52 sm:h-72 overflow-hidden bg-black">
            <img
              src={movie.backdropUrl}
              alt={movie.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14171f] via-[#14171f]/60 to-transparent" />

            {/* Floating Play Trailer Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                id="btn-modal-hero-play"
                onClick={() => onPlayTrailer(movie)}
                className="flex items-center gap-2.5 bg-[#00c0f9] hover:bg-[#00ade0] active:scale-95 text-slate-950 font-bold px-5 py-2.5 rounded-full shadow-xl shadow-[#00c0f9]/30 transition-all cursor-pointer group"
              >
                <Play className="w-5 h-5 fill-slate-950 group-hover:scale-110 transition-transform" />
                <span>{language === 'bn' ? 'অনলাইন প্লে করুন / ট্রেলার' : 'Watch Online / Trailer'}</span>
              </button>
            </div>
          </div>

        {/* Main Content Area */}
        <div className="p-4 sm:p-6 -mt-16 sm:-mt-20 relative z-20">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            {/* Poster Card */}
            <div className="w-32 sm:w-44 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 bg-[#191d26] mx-auto sm:mx-0">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-[2/3] object-cover"
              />
            </div>

            {/* Info Column */}
            <div className="flex-1 min-w-0 text-center sm:text-left">
              {/* Title & Year */}
              <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                {language === 'bn' && movie.bengaliTitle
                  ? movie.bengaliTitle
                  : movie.title}
              </h1>

              {movie.bengaliTitle && (
                <p className="text-sm text-slate-400 font-medium mt-0.5">
                  {movie.title} ({movie.year})
                </p>
              )}

              {/* Meta Chips */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3 text-xs">
                <span className="bg-black/70 border border-white/10 text-white font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[#f59e0b] fill-[#f59e0b]" />
                  <span>{movie.rating.toFixed(3)} / 5</span>
                </span>
                <span className="bg-[#00c0f9] text-slate-950 font-extrabold px-2 py-0.5 rounded uppercase text-[10px]">
                  {movie.qualityBadge}
                </span>
                <span className="text-slate-300 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {movie.year}
                </span>
                <span className="text-slate-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {movie.duration}
                </span>
              </div>

              {/* Genre Badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mt-2.5">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] text-slate-300"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mt-4">
                <button
                  id="btn-details-play-trailer"
                  onClick={() => onPlayTrailer(movie)}
                  className="flex items-center gap-2 bg-[#00c0f9] hover:bg-[#00ade0] active:scale-95 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs sm:text-sm transition-all shadow-md shadow-[#00c0f9]/20 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>{language === 'bn' ? 'প্লে করুন' : 'Play Now'}</span>
                </button>

                <button
                  id="btn-details-toggle-watchlist"
                  onClick={() => onToggleWatchlist(movie)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                    isWatchlist
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                  }`}
                >
                  {isWatchlist ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{language === 'bn' ? 'সংরক্ষিত' : 'Saved to Watchlist'}</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-4 h-4 text-[#00c0f9]" />
                      <span>{language === 'bn' ? 'ওয়াচলিস্টে রাখুন' : 'Add to Watchlist'}</span>
                    </>
                  )}
                </button>

                <button
                  id="btn-details-share"
                  onClick={handleCopyLink}
                  title="Share Movie Link"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
                >
                  {copiedLink ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Specs & Audio Info Box */}
          <div className="mt-6 p-3 sm:p-4 rounded-xl bg-[#191d26] border border-white/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="flex items-start gap-2">
              <Volume2 className="w-4 h-4 text-[#00c0f9] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">
                  {language === 'bn' ? 'অডিও ট্র্যাক' : 'Audio Track'}
                </span>
                <span className="text-slate-200 font-medium">{movie.audio}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Subtitles className="w-4 h-4 text-[#00c0f9] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">
                  {language === 'bn' ? 'সাবটাইটেল' : 'Subtitles'}
                </span>
                <span className="text-slate-200 font-medium">
                  {movie.subtitles.join(', ')}
                </span>
              </div>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">
                {language === 'bn' ? 'পরিচালক' : 'Director'}
              </span>
              <span className="text-slate-200 font-medium">{movie.director}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">
                {language === 'bn' ? 'অভিনয়ে' : 'Starring Cast'}
              </span>
              <span className="text-slate-200 font-medium truncate block">
                {movie.cast.join(', ')}
              </span>
            </div>
          </div>

          {/* Storyline / Synopsis */}
          <div className="mt-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#00c0f9] rounded-full" />
              <span>{language === 'bn' ? 'কাহিনী সংক্ষেপ' : 'Storyline & Synopsis'}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#191d26]/50 p-3.5 rounded-xl border border-white/5">
              {language === 'bn' && movie.bengaliSynopsis
                ? movie.bengaliSynopsis
                : movie.synopsis}
            </p>
          </div>

          {/* 300x250 Start.io Native Ad under Storyline & Synopsis */}
          <div className="my-4 flex justify-center">
            <StartIoNativeAd
              placement="details-synopsis"
              language={language}
              autoRefreshSeconds={45}
            />
          </div>

          {/* Download Links Section (Classic and essential feature) */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Download className="w-4 h-4 text-[#00c0f9]" />
                <span>
                  {language === 'bn' ? 'ডাউনলোড লিঙ্কস (হাই স্পিড)' : 'Direct Download Links'}
                </span>
              </h3>
              <span className="text-[11px] text-cyan-400 font-mono font-medium">
                {movie.totalSize}
              </span>
            </div>

            {/* Quality Resolution Tabs */}
            <div className="flex flex-wrap gap-2 mb-3">
              {movie.downloadLinks.map((link, idx) => (
                <button
                  key={link.resolution}
                  onClick={() => {
                    setActiveQualityTab(idx);
                    setDownloadingServer(null);
                    setDownloadReady(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeQualityTab === idx
                      ? 'bg-[#00c0f9] text-slate-950 font-bold shadow-md shadow-[#00c0f9]/20'
                      : 'bg-[#191d26] text-slate-300 hover:bg-[#202531] border border-white/5'
                  }`}
                >
                  <span>{link.resolution}</span>
                  <span className="ml-1.5 text-[10px] opacity-80">({link.fileSize})</span>
                </button>
              ))}
            </div>

            {/* Server Options for Active Quality */}
            <div className="p-4 rounded-xl bg-[#191d26] border border-white/5 space-y-2.5">
              <div className="text-[11px] text-slate-400 font-medium">
                {language === 'bn'
                  ? 'নিচের যে কোনো একটি সার্ভার নির্বাচন করুন:'
                  : 'Select any high-speed server to start downloading:'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentDownloadGroup?.servers.map((srv) => (
                  <div
                    key={srv.name}
                    className="p-2.5 rounded-lg bg-[#14171f] border border-white/5 flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-[#00c0f9]" />
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {srv.name}
                        </span>
                        <span className="text-[10px] text-emerald-400">
                          {srv.speed} High Speed
                        </span>
                      </div>
                    </div>

                    <button
                      id={`btn-download-${srv.name.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={() => handleStartDownload(srv.name)}
                      className="px-3 py-1 rounded bg-[#00c0f9]/20 hover:bg-[#00c0f9] text-[#00c0f9] hover:text-slate-950 text-xs font-bold transition-colors cursor-pointer"
                    >
                      {language === 'bn' ? 'ডাউনলোড' : 'Download'}
                    </button>
                  </div>
                ))}
              </div>

              {/* Download Generation Countdown Box */}
              {downloadingServer && (
                <div className="mt-3 p-3 rounded-lg bg-black/60 border border-[#00c0f9]/30 text-center animate-fade-in">
                  {countdown !== null ? (
                    <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-[#00c0f9] animate-ping" />
                      <span>
                        {language === 'bn'
                          ? `লিঙ্ক তৈরি হচ্ছে (${downloadingServer})... ${countdown} সেকেন্ড`
                          : `Generating secure direct link from ${downloadingServer}... ${countdown}s`}
                      </span>
                    </div>
                  ) : downloadReady ? (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                        <Check className="w-4 h-4" />
                        <span>
                          {language === 'bn'
                            ? 'লিঙ্ক প্রস্তুত! ডাউনলোড স্বয়ংক্রিয় শুরু হয়েছে।'
                            : 'Link Ready! Secure high-speed token generated.'}
                        </span>
                      </div>
                      <a
                        href={movie.previewVideoUrl || '#'}
                        download={`${movie.title.replace(/\s+/g, '_')}_${currentDownloadGroup.resolution}.mp4`}
                        className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold rounded-md shadow-md flex items-center gap-1.5 transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{language === 'bn' ? 'সরাসরি ফাইল ডাউনলোড করুন' : 'Start Download (Direct)'}</span>
                      </a>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>

          {/* Screenshot Previews */}
          {movie.screenshots && movie.screenshots.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Film className="w-4 h-4 text-[#00c0f9]" />
                <span>{language === 'bn' ? 'স্ক্রিনশট প্রিভিউ' : 'Screenshots Preview'}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {movie.screenshots.map((sUrl, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video rounded-lg overflow-hidden border border-white/5 bg-black"
                  >
                    <img
                      src={sUrl}
                      alt={`${movie.title} screenshot ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Recommendations */}
          {relatedMovies.length > 0 && (
            <div className="mt-6 pt-5 border-t border-white/5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                {language === 'bn' ? 'আরও সম্পর্কিত সিনেমা' : 'You May Also Like'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {relatedMovies.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="p-2 rounded-lg bg-[#191d26] hover:bg-[#222733] border border-white/5 hover:border-[#00c0f9]/50 transition-all cursor-pointer flex gap-2 items-center"
                  >
                    <img
                      src={rel.posterUrl}
                      alt={rel.title}
                      referrerPolicy="no-referrer"
                      className="w-10 h-14 object-cover rounded bg-black flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-white truncate">
                        {language === 'bn' && rel.bengaliTitle
                          ? rel.bengaliTitle
                          : rel.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        {rel.year} • ★ {rel.rating.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Back Button Bar (Convenient exit at end of post) */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              id="btn-modal-back-bottom"
              onClick={onClose}
              className="flex items-center gap-2 bg-[#00c0f9] hover:bg-[#00ade0] active:scale-95 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-[#00c0f9]/20 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>{language === 'bn' ? 'ফিরে যান (Back to Movies)' : 'Back to Movies'}</span>
            </button>

            <button
              onClick={() => {
                const overlay = document.getElementById('movie-details-overlay');
                if (overlay) overlay.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              {language === 'bn' ? 'উপরে উঠুন ↑' : 'Scroll to Top ↑'}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Floating Bottom Quick Back Button for Mobile */}
      <button
        id="btn-floating-mobile-back"
        onClick={onClose}
        className="sm:hidden fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#00c0f9] text-slate-950 font-extrabold px-4 py-2.5 rounded-full shadow-2xl shadow-black border border-white/20 active:scale-95 cursor-pointer"
        title="Go Back"
      >
        <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        <span className="text-xs">{language === 'bn' ? 'ব্যাক' : 'Back'}</span>
      </button>
    </div>
  );
};
