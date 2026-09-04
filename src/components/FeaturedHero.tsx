import React from 'react';
import { Play, Download, Star, Sparkles, Film } from 'lucide-react';
import { Movie } from '../types';

interface FeaturedHeroProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onPlayTrailer: (movie: Movie) => void;
  language: 'en' | 'bn';
}

export const FeaturedHero: React.FC<FeaturedHeroProps> = ({
  movies,
  onSelectMovie,
  onPlayTrailer,
  language,
}) => {
  if (movies.length === 0) return null;

  const topPick = movies[0]; // e.g. Welcome to the jungle or Pushpa 2 or Ragini MMS 2
  const topCards = movies.slice(0, 5);

  return (
    <div className="pt-2 pb-4 px-3 sm:px-6">
      {/* Top Trending Horizontal Cards Row (Exact to screenshot top section) */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#00c0f9]" />
          <span className="text-xs uppercase tracking-wider font-bold text-cyan-400">
            {language === 'bn' ? 'আজকের ট্রেন্ডিং প্রিমিয়ার' : 'Trending Now'}
          </span>
        </div>

        <div className="flex items-stretch gap-3 overflow-x-auto no-scrollbar py-1">
          {topCards.map((movie) => (
            <div
              key={`featured-${movie.id}`}
              id={`featured-card-${movie.id}`}
              onClick={() => onSelectMovie(movie)}
              className="group relative flex-shrink-0 w-36 sm:w-44 rounded-xl overflow-hidden bg-[#181a20] border border-white/10 hover:border-[#00c0f9] transition-all cursor-pointer shadow-md"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute top-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[11px] font-bold text-white flex items-center gap-1">
                  <Star className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
                  <span>{movie.rating.toFixed(3)}</span>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="inline-block bg-[#00c0f9] text-black text-[9px] font-black uppercase px-1 rounded mb-1">
                    {movie.qualityBadge.split(' ')[0]}
                  </span>
                  <h4 className="text-xs font-bold text-white truncate group-hover:text-[#00c0f9]">
                    {language === 'bn' && movie.bengaliTitle
                      ? movie.bengaliTitle
                      : movie.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Spotlight Banner */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-[#141820] to-[#1c222e] shadow-xl">
        <div className="absolute inset-0 z-0">
          <img
            src={topPick.backdropUrl}
            alt={topPick.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-35 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#101318] via-[#101318]/85 to-transparent" />
        </div>

        <div className="relative z-10 p-4 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-[#00c0f9] text-slate-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                {topPick.qualityBadge}
              </span>
              <span className="bg-white/10 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                <Star className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
                <span className="font-bold">{topPick.rating.toFixed(3)}</span>
              </span>
              <span className="text-xs text-slate-300 font-mono">{topPick.year}</span>
              <span className="text-xs text-slate-300">•</span>
              <span className="text-xs text-slate-300">{topPick.duration}</span>
              <span className="text-xs text-[#00c0f9] font-medium hidden sm:inline">
                {topPick.audio}
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {language === 'bn' && topPick.bengaliTitle
                ? topPick.bengaliTitle
                : topPick.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 sm:line-clamp-3 mt-2 max-w-xl">
              {language === 'bn' && topPick.bengaliSynopsis
                ? topPick.bengaliSynopsis
                : topPick.synopsis}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <button
                id="btn-spotlight-watch"
                onClick={() => onPlayTrailer(topPick)}
                className="flex items-center gap-2 bg-[#00c0f9] hover:bg-[#00ade0] active:scale-95 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs sm:text-sm transition-all shadow-lg shadow-[#00c0f9]/30 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>{language === 'bn' ? 'ট্রেলার দেখুন' : 'Watch Trailer'}</span>
              </button>

              <button
                id="btn-spotlight-download"
                onClick={() => onSelectMovie(topPick)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold px-4 py-2 rounded-lg text-xs sm:text-sm border border-white/10 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#00c0f9]" />
                <span>{language === 'bn' ? 'ডাউনলোড লিঙ্কস' : 'Download Links'}</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <div className="w-36 rounded-xl overflow-hidden shadow-2xl border-2 border-[#00c0f9]/40 transform -rotate-2 hover:rotate-0 transition-transform">
              <img
                src={topPick.posterUrl}
                alt={topPick.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-[2/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
