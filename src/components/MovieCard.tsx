import React from 'react';
import { Star, Play, Bookmark, Film } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
  isWatchlist?: boolean;
  onToggleWatchlist?: (movie: Movie, e: React.MouseEvent) => void;
  language?: 'en' | 'bn';
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onSelect,
  isWatchlist = false,
  onToggleWatchlist,
  language = 'en',
}) => {
  return (
    <div
      id={`movie-card-${movie.id}`}
      onClick={() => onSelect(movie)}
      className="group relative flex-shrink-0 w-36 sm:w-44 md:w-48 bg-[#181a20] rounded-xl overflow-hidden border border-white/5 shadow-lg shadow-black/40 hover:border-[#00c0f9]/50 hover:shadow-[#00c0f9]/10 transition-all duration-300 cursor-pointer flex flex-col select-none"
    >
      {/* Poster Image Container */}
      <div className="relative w-full aspect-[2/3] overflow-hidden bg-[#111317]">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181a20] via-transparent to-black/40 opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Rating Badge (Matches Screenshot: ★ 4.713 / ★ 5.080) */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/85 backdrop-blur-md px-1.5 py-0.5 rounded-md border border-white/10 shadow-sm">
          <Star className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
          <span className="text-[11px] font-bold text-white tracking-tight">
            {movie.rating.toFixed(3)}
          </span>
        </div>

        {/* Quality Badge (Top Left) */}
        <div className="absolute top-2 left-2 bg-[#00c0f9]/90 text-black px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
          {movie.qualityBadge.split(' ')[0]}
        </div>

        {/* Center Hover Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
          <div className="w-11 h-11 rounded-full bg-[#00c0f9] text-black flex items-center justify-center shadow-lg shadow-[#00c0f9]/40 transform group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-black ml-0.5" />
          </div>
        </div>

        {/* Watchlist Toggle Button */}
        {onToggleWatchlist && (
          <button
            id={`btn-watchlist-${movie.id}`}
            title={isWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
            onClick={(e) => onToggleWatchlist(movie, e)}
            className={`absolute bottom-2 right-2 p-1.5 rounded-full transition-all ${
              isWatchlist
                ? 'bg-[#00c0f9] text-black'
                : 'bg-black/70 text-white/80 hover:text-white hover:bg-black'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isWatchlist ? 'fill-black' : ''}`} />
          </button>
        )}
      </div>

      {/* Card Bottom: Title Bar (Exact to screenshot) */}
      <div className="p-2.5 flex-1 flex flex-col justify-between bg-[#181a20]">
        <div>
          <h3 className="text-sm font-semibold text-slate-100 group-hover:text-[#00c0f9] transition-colors truncate">
            {language === 'bn' && movie.bengaliTitle ? movie.bengaliTitle : movie.title}
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5 truncate flex items-center gap-1.5">
            <span>{movie.year}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="truncate">{movie.genres[0]}</span>
          </p>
        </div>

        <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
          <span className="truncate max-w-[80px] text-cyan-400/90 font-medium">
            {movie.audio.includes('Dual') ? 'Dual Audio' : 'Hindi Org'}
          </span>
          <span className="text-slate-400 font-mono text-[9px]">{movie.duration}</span>
        </div>
      </div>
    </div>
  );
};
