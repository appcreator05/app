import React from 'react';
import { X, Bookmark, Trash2, Play } from 'lucide-react';
import { Movie } from '../types';

interface WatchlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  watchlistMovies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onRemoveMovie: (movieId: string) => void;
  onClearAll: () => void;
  language: 'en' | 'bn';
}

export const WatchlistModal: React.FC<WatchlistModalProps> = ({
  isOpen,
  onClose,
  watchlistMovies,
  onSelectMovie,
  onRemoveMovie,
  onClearAll,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#14171f] border-0 sm:border border-white/10 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden my-0 sm:my-auto flex flex-col min-h-screen sm:min-h-0">
        {/* Header */}
        <div className="p-3.5 sm:p-4 border-b border-white/10 flex items-center justify-between bg-[#171b24] sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 bg-[#00c0f9] hover:bg-[#00ade0] active:scale-95 text-slate-950 font-bold px-2.5 py-1 rounded-lg text-xs transition-all shadow-md shadow-[#00c0f9]/20 cursor-pointer mr-1"
            >
              <X className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>{language === 'bn' ? 'ফিরে যান' : 'Back'}</span>
            </button>
            <Bookmark className="w-4 h-4 text-[#00c0f9] hidden sm:inline-block" />
            <h2 className="text-sm sm:text-base font-bold text-white">
              {language === 'bn' ? 'আমার ওয়াচলিস্ট' : 'My Saved Watchlist'}
            </h2>
            <span className="text-xs text-[#00c0f9] font-bold bg-[#00c0f9]/10 px-2 py-0.5 rounded-full">
              {watchlistMovies.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {watchlistMovies.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-red-400 hover:text-red-300 font-medium px-2 py-1 hover:bg-red-500/10 rounded transition-colors"
              >
                {language === 'bn' ? 'সব মুছুন' : 'Clear All'}
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 max-h-[70vh] overflow-y-auto custom-scrollbar divide-y divide-white/5">
          {watchlistMovies.length > 0 ? (
            watchlistMovies.map((movie) => (
              <div
                key={movie.id}
                className="py-3 flex items-center justify-between gap-3 group"
              >
                <div
                  onClick={() => {
                    onSelectMovie(movie);
                    onClose();
                  }}
                  className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                >
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    referrerPolicy="no-referrer"
                    className="w-12 h-16 object-cover rounded bg-black flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#00c0f9] transition-colors truncate">
                      {language === 'bn' && movie.bengaliTitle ? movie.bengaliTitle : movie.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {movie.year} • {movie.genres[0]} • ★ {movie.rating.toFixed(2)}
                    </p>
                    <span className="text-[10px] text-cyan-400 font-medium mt-1 inline-block">
                      {movie.qualityBadge}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onSelectMovie(movie);
                      onClose();
                    }}
                    className="p-2 rounded-lg bg-[#00c0f9]/20 hover:bg-[#00c0f9] text-[#00c0f9] hover:text-slate-950 transition-colors"
                    title="View details / stream"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>

                  <button
                    onClick={() => onRemoveMovie(movie.id)}
                    className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Bookmark className="w-10 h-10 mx-auto text-slate-600 stroke-1" />
              <p className="text-sm">
                {language === 'bn'
                  ? 'আপনার ওয়াচলিস্টে এখনও কোনো সিনেমা নেই।'
                  : 'Your watchlist is currently empty.'}
              </p>
              <p className="text-xs text-slate-500">
                {language === 'bn'
                  ? 'যে কোনো সিনেমার ওপর বুকমার্ক আইকনে ক্লিক করে সংরক্ষণ করুন।'
                  : 'Click the bookmark icon on any movie poster to save it here.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
