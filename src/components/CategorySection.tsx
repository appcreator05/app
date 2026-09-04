import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types';
import { MovieCard } from './MovieCard';

interface CategorySectionProps {
  id: string;
  title: string;
  bengaliTitle?: string;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onShowAll: () => void;
  watchlist: string[];
  onToggleWatchlist: (movie: Movie, e: React.MouseEvent) => void;
  language: 'en' | 'bn';
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  id,
  title,
  bengaliTitle,
  movies,
  onSelectMovie,
  onShowAll,
  watchlist,
  onToggleWatchlist,
  language,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (movies.length === 0) return null;

  const displayTitle = language === 'bn' && bengaliTitle ? bengaliTitle : title;

  return (
    <section id={`section-${id}`} className="py-3 sm:py-4">
      {/* Category Header (Matches screenshot: | Bollywood Hindi Movie    [ Show All ] ) */}
      <div className="flex items-center justify-between mb-3 px-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          {/* Cyan Vertical Pipe Accent Bar */}
          <span className="inline-block w-1.5 h-5 bg-[#00c0f9] rounded-full shadow-sm shadow-[#00c0f9]/50" />
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-100 tracking-tight">
            {displayTitle}
          </h2>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
            ({movies.length})
          </span>
        </div>

        {/* Show All Button (Matches Screenshot: [ Show All ] ) */}
        <button
          id={`btn-show-all-${id}`}
          onClick={onShowAll}
          className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-md border border-[#00c0f9]/60 text-white hover:bg-[#00c0f9] hover:text-slate-950 transition-all cursor-pointer"
        >
          <span>{language === 'bn' ? 'সব দেখুন' : 'Show All'}</span>
        </button>
      </div>

      {/* Horizontal Carousel with Arrows */}
      <div className="relative group/carousel px-3 sm:px-6">
        {/* Left Arrow */}
        <button
          id={`btn-scroll-left-${id}`}
          onClick={() => scroll('left')}
          title="Scroll Left"
          className="hidden md:flex absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 items-center justify-center rounded-full bg-black/80 text-white hover:bg-[#00c0f9] hover:text-black transition-all shadow-xl opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-1 scroll-smooth"
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelect={onSelectMovie}
              isWatchlist={watchlist.includes(movie.id)}
              onToggleWatchlist={onToggleWatchlist}
              language={language}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          id={`btn-scroll-right-${id}`}
          onClick={() => scroll('right')}
          title="Scroll Right"
          className="hidden md:flex absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 items-center justify-center rounded-full bg-black/80 text-white hover:bg-[#00c0f9] hover:text-black transition-all shadow-xl opacity-0 group-hover/carousel:opacity-100 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
