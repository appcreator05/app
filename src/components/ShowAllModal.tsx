import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Movie, CategoryKey } from '../types';
import { MovieCard } from './MovieCard';

interface ShowAllModalProps {
  categoryTitle: string;
  categoryKey: CategoryKey;
  movies: Movie[];
  onClose: () => void;
  onSelectMovie: (movie: Movie) => void;
  watchlist: string[];
  onToggleWatchlist: (movie: Movie, e: React.MouseEvent) => void;
  language: 'en' | 'bn';
}

export const ShowAllModal: React.FC<ShowAllModalProps> = ({
  categoryTitle,
  movies,
  onClose,
  onSelectMovie,
  watchlist,
  onToggleWatchlist,
  language,
}) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'year' | 'title'>('rating');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Extract all unique genres
  const allGenres = ['All', ...Array.from(new Set(movies.flatMap((m) => m.genres)))];
  const allYears = ['All', ...Array.from(new Set(movies.map((m) => m.year.toString()))).sort((a, b) => Number(b) - Number(a))];

  // Filter and sort
  const filteredMovies = movies
    .filter((m) => {
      if (selectedGenre !== 'All' && !m.genres.includes(selectedGenre)) return false;
      if (selectedYear !== 'All' && m.year.toString() !== selectedYear) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'year') return b.year - a.year;
      return a.title.localeCompare(b.title);
    });

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-6xl max-h-screen sm:max-h-[92vh] bg-[#12151c] border-0 sm:border border-white/10 rounded-none sm:rounded-2xl shadow-2xl flex flex-col my-0 sm:my-auto overflow-hidden min-h-screen sm:min-h-0">
        {/* Sticky Header with Back Button */}
        <div className="p-3.5 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#171b24] sticky top-0 z-30">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              id="btn-show-all-back"
              onClick={onClose}
              className="flex items-center gap-1.5 bg-[#00c0f9] hover:bg-[#00ade0] active:scale-95 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-all shadow-md shadow-[#00c0f9]/20 cursor-pointer mr-1"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>{language === 'bn' ? 'ব্যাক' : 'Back'}</span>
            </button>

            <span className="w-1.5 h-5 bg-[#00c0f9] rounded-full hidden sm:inline-block" />
            <div>
              <h2 className="text-sm sm:text-lg font-bold text-white truncate max-w-[200px] sm:max-w-md">
                {categoryTitle}
              </h2>
              <p className="text-[11px] text-slate-400">
                {filteredMovies.length} {language === 'bn' ? 'টি মুভি পাওয়া গেছে' : 'movies available'}
              </p>
            </div>
          </div>

          <button
            id="btn-close-show-all"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-3 sm:p-4 bg-[#141820] border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Genre & Year Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 text-slate-400 font-semibold mr-1">
              <Filter className="w-3.5 h-3.5 text-[#00c0f9]" />
              <span>{language === 'bn' ? 'ফিল্টার:' : 'Filter:'}</span>
            </div>

            {/* Genre Select */}
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-[#1e232d] text-white border border-white/10 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#00c0f9]"
            >
              {allGenres.map((g) => (
                <option key={g} value={g} className="bg-[#12151c]">
                  {g === 'All' ? (language === 'bn' ? 'সকল জনরা' : 'All Genres') : g}
                </option>
              ))}
            </select>

            {/* Year Select */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-[#1e232d] text-white border border-white/10 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#00c0f9]"
            >
              {allYears.map((y) => (
                <option key={y} value={y} className="bg-[#12151c]">
                  {y === 'All' ? (language === 'bn' ? 'সব সাল' : 'All Years') : y}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-semibold">
              {language === 'bn' ? 'সাজান:' : 'Sort By:'}
            </span>
            <div className="flex bg-[#1e232d] rounded-lg p-0.5 border border-white/5">
              <button
                onClick={() => setSortBy('rating')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  sortBy === 'rating'
                    ? 'bg-[#00c0f9] text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                ★ {language === 'bn' ? 'রেটিং' : 'Rating'}
              </button>
              <button
                onClick={() => setSortBy('year')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  sortBy === 'year'
                    ? 'bg-[#00c0f9] text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {language === 'bn' ? 'সাল' : 'Year'}
              </button>
              <button
                onClick={() => setSortBy('title')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  sortBy === 'title'
                    ? 'bg-[#00c0f9] text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {language === 'bn' ? 'নাম' : 'Name'}
              </button>
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar">
          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {filteredMovies.map((movie) => (
                <div key={movie.id} className="flex justify-center">
                  <MovieCard
                    movie={movie}
                    onSelect={(m) => {
                      onSelectMovie(m);
                    }}
                    isWatchlist={watchlist.includes(movie.id)}
                    onToggleWatchlist={onToggleWatchlist}
                    language={language}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-slate-400">
              <p className="text-sm">
                {language === 'bn'
                  ? 'এই ফিল্টারে কোনো সিনেমা পাওয়া যায়নি।'
                  : 'No movies found matching these filter criteria.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
