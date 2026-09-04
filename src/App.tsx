import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FeaturedHero } from './components/FeaturedHero';
import { CategorySection } from './components/CategorySection';
import { MenuDrawer } from './components/MenuDrawer';
import { MovieDetailsModal } from './components/MovieDetailsModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { ShowAllModal } from './components/ShowAllModal';
import { WatchlistModal } from './components/WatchlistModal';
import { RequestMovieModal } from './components/RequestMovieModal';
import { AndroidBuildModal } from './components/AndroidBuildModal';
import { Footer } from './components/Footer';
import { StartIoNativeAd } from './components/StartIoNativeAd';
import { StartIoBottomBanner } from './components/StartIoBottomBanner';
import { CATEGORIES } from './data/moviesData';
import {
  USER_MOVIES_DATA,
  fetchRemoteMovies,
  REMOTE_METADATA_URL,
} from './services/movieFeedService';
import { Movie, CategoryKey } from './types';
import { Filter, X, Film, Sparkles, RefreshCw, CheckCircle2, Globe } from 'lucide-react';
import { MovieCard } from './components/MovieCard';

const HOME_SECTIONS: { id: CategoryKey; title: string; bengaliTitle: string }[] = [
  { id: 'bollywood', title: 'Bollywood Hindi Movie', bengaliTitle: 'বলিউড হিন্দি মুভি' },
  { id: 'bollywood-90s', title: 'Bollywood 90s Movie', bengaliTitle: 'বলিউড ৯০ দশকের ক্লাসিক সিনেমা' },
  { id: 'hollywood-hindi', title: 'Hollywood Hindi Dubbed', bengaliTitle: 'হলিউড হিন্দি ডাবড' },
  { id: 'horror-hindi', title: 'Horror Hindi Dubbed', bengaliTitle: 'হরর হিন্দি ডাবড সিনেমা' },
  { id: 'tagalog', title: 'Tagalog Movie', bengaliTitle: 'তাগালগ সিনেমা' },
  { id: 'bengali', title: 'Bengali Movie', bengaliTitle: 'বাংলা সিনেমা' },
  { id: 'south-hindi', title: 'South Indian Hindi Dubbed', bengaliTitle: 'সাউথ ইন্ডিয়ান হিন্দি ডাবড' },
  { id: 'web-series', title: 'Web Series & Shows', bengaliTitle: 'ওয়েব সিরিজ ও শো' },
];

export default function App() {
  const [movies, setMovies] = useState<Movie[]>(USER_MOVIES_DATA);
  const [isLiveConnected, setIsLiveConnected] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const [showAllCategory, setShowAllCategory] = useState<{
    title: string;
    categoryKey: CategoryKey;
    movies: Movie[];
  } | null>(null);
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cineflix_watchlist');
      return saved ? JSON.parse(saved) : ['welcome-to-the-jungle-2026', 'krrish-3-2013'];
    } catch {
      return ['welcome-to-the-jungle-2026'];
    }
  });
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isAndroidBuildOpen, setIsAndroidBuildOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'bn'>('en');

  // Load latest live movies from user's remote GitHub metadata feed
  const loadRemoteData = async () => {
    setIsSyncing(true);
    const result = await fetchRemoteMovies();
    if (result && result.movies && result.movies.length > 0) {
      setMovies(result.movies);
      setIsLiveConnected(result.isLive);
    }
    setIsSyncing(false);
  };

  useEffect(() => {
    loadRemoteData();
  }, []);

  // Save watchlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cineflix_watchlist', JSON.stringify(watchlist));
    } catch {
      // localStorage may fail in some iframe environments
    }
  }, [watchlist]);

  const toggleWatchlist = (movie: Movie, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWatchlist((prev) =>
      prev.includes(movie.id) ? prev.filter((id) => id !== movie.id) : [...prev, movie.id]
    );
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  // Movies for active watchlist
  const watchlistMovies = movies.filter((m) => watchlist.includes(m.id));

  // Search filter
  const isSearching = searchQuery.trim().length > 0;
  const searchedMovies = isSearching
    ? movies.filter(
        (m) =>
          m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (m.bengaliTitle && m.bengaliTitle.includes(searchQuery)) ||
          m.genres.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase())) ||
          m.cast.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
          m.year.toString().includes(searchQuery)
      )
    : [];

  // Genre filter
  const displayedMovies = activeGenre
    ? movies.filter((m) => m.genres.includes(activeGenre))
    : movies;

  return (
    <div className="min-h-screen bg-[#0f1116] text-slate-100 flex flex-col antialiased selection:bg-[#00c0f9] selection:text-black">
      {/* Top Header (Matches screenshot with Cyan Menu button & Voice Search Bar) */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        watchlistCount={watchlist.length}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
        allMovies={movies}
        onOpenAndroidBuild={() => setIsAndroidBuildOpen(true)}
      />

      {/* Live GitHub Metadata Status Bar */}
      <div className="bg-[#13161f] border-b border-white/5 py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-[11px]">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isLiveConnected ? 'bg-emerald-400 opacity-75' : 'bg-amber-400 opacity-75'}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isLiveConnected ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            </span>
            <span className="font-semibold text-white">
              {language === 'bn' ? 'মেটাডাটা ফিড সিঙ্কড' : 'Metadata Feed Live'}:
            </span>
            <span className="text-cyan-400 font-mono font-medium">
              {movies.length} {language === 'bn' ? 'টি মুভি' : 'movies'}
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <a
              href={REMOTE_METADATA_URL}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-[#00c0f9] truncate max-w-[200px] sm:max-w-xs font-mono underline hidden sm:inline"
              title={REMOTE_METADATA_URL}
            >
              876668646.json
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadRemoteData}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 hover:bg-[#00c0f9]/20 hover:text-[#00c0f9] text-slate-300 transition-colors disabled:opacity-50"
              title="Fetch latest updates from GitHub"
            >
              <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin text-[#00c0f9]' : ''}`} />
              <span>{isSyncing ? (language === 'bn' ? 'সিঙ্ক হচ্ছে...' : 'Syncing...') : (language === 'bn' ? 'রিফ্রেশ' : 'Refresh Feed')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto pb-20 sm:pb-24">
        {/* Active Genre or Filter Tag Banner */}
        {activeGenre && (
          <div className="px-3 sm:px-6 pt-3 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-[#1b2029] border border-[#00c0f9]/30 rounded-lg px-3 py-1.5 text-xs text-white">
              <Filter className="w-3.5 h-3.5 text-[#00c0f9]" />
              <span>
                {language === 'bn' ? 'নির্বাচিত জনরা:' : 'Genre:'}{' '}
                <strong className="text-[#00c0f9]">{activeGenre}</strong>
              </span>
              <button
                onClick={() => setActiveGenre(null)}
                className="ml-2 p-0.5 hover:text-red-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Search Results Grid (If user is actively searching) */}
        {isSearching ? (
          <div className="px-3 sm:px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#00c0f9] rounded-full" />
                <span>
                  {language === 'bn'
                    ? `"${searchQuery}" এর জন্য অনুসন্ধানের ফলাফল`
                    : `Search Results for "${searchQuery}"`}
                </span>
                <span className="text-xs text-slate-400 font-normal">
                  ({searchedMovies.length})
                </span>
              </h2>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-white px-2.5 py-1 bg-[#1b2029] rounded-md border border-white/5"
              >
                {language === 'bn' ? 'অনুসন্ধান মুছুন' : 'Clear Search'}
              </button>
            </div>

            {searchedMovies.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {searchedMovies.map((movie) => (
                  <div key={movie.id} className="flex justify-center">
                    <MovieCard
                      movie={movie}
                      onSelect={(m) => setSelectedMovie(m)}
                      isWatchlist={watchlist.includes(movie.id)}
                      onToggleWatchlist={toggleWatchlist}
                      language={language}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center text-slate-400 space-y-2 bg-[#14171f] rounded-2xl border border-white/5 p-6">
                <Film className="w-10 h-10 mx-auto text-slate-600" />
                <p className="text-sm font-semibold text-slate-300">
                  {language === 'bn'
                    ? 'কোনো সিনেমা বা সিরিজ পাওয়া যায়নি'
                    : 'No movies found'}
                </p>
                <p className="text-xs text-slate-500">
                  {language === 'bn'
                    ? 'বানান পরীক্ষা করুন অথবা নতুন মুভির জন্য রিকোয়েস্ট পাঠান।'
                    : 'Try checking your spelling or submit a movie request.'}
                </p>
                <button
                  onClick={() => setIsRequestOpen(true)}
                  className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00c0f9] text-slate-950 font-bold rounded-lg text-xs"
                >
                  {language === 'bn' ? 'মুভি রিকোয়েস্ট করুন' : 'Request this movie'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Top Featured Section (Matches top row of screenshot: Night Bus, Terror, etc.) */}
            <FeaturedHero
              movies={movies.filter((m) => m.categories.includes('trending'))}
              onSelectMovie={(movie) => setSelectedMovie(movie)}
              onPlayTrailer={(movie) => setPlayingMovie(movie)}
              language={language}
            />

            {/* Category Sections: Injects a 300x250 Start.io Native Ad after every 4 categories */}
            {HOME_SECTIONS.map((section, index) => {
              const catMovies = displayedMovies.filter((m) => m.categories.includes(section.id));
              if (catMovies.length === 0) return null;

              return (
                <React.Fragment key={`home-section-${section.id}`}>
                  <CategorySection
                    id={section.id}
                    title={section.title}
                    bengaliTitle={section.bengaliTitle}
                    movies={catMovies}
                    onSelectMovie={(movie) => setSelectedMovie(movie)}
                    onShowAll={() =>
                      setShowAllCategory({
                        title: language === 'bn' ? section.bengaliTitle : section.title,
                        categoryKey: section.id,
                        movies: movies.filter((m) => m.categories.includes(section.id)),
                      })
                    }
                    watchlist={watchlist}
                    onToggleWatchlist={toggleWatchlist}
                    language={language}
                  />

                  {/* 300x250 Start.io Native Ad (Auto-refreshes every 45s) after every 4 categories */}
                  {(index + 1) % 4 === 0 && (
                    <div className="py-3 px-3 flex justify-center">
                      <StartIoNativeAd
                        placement={`home-after-category-${index + 1}`}
                        language={language}
                        autoRefreshSeconds={45}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer language={language} onOpenRequest={() => setIsRequestOpen(true)} />

      {/* Slide-out Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          if (cat === 'all') {
            setActiveGenre(null);
            setShowAllCategory(null);
          } else {
            const catInfo = CATEGORIES.find((c) => c.id === cat);
            setShowAllCategory({
              title: language === 'bn' && catInfo?.bengaliTitle ? catInfo.bengaliTitle : catInfo?.title || 'Movies',
              categoryKey: cat,
              movies: movies.filter((m) => m.categories.includes(cat)),
            });
          }
        }}
        onSelectGenre={(genre) => {
          setActiveGenre(genre);
          setSearchQuery('');
        }}
        onRequestMovie={() => setIsRequestOpen(true)}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        onOpenAndroidBuild={() => setIsAndroidBuildOpen(true)}
        language={language}
      />

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onPlayTrailer={(m) => setPlayingMovie(m)}
          isWatchlist={watchlist.includes(selectedMovie.id)}
          onToggleWatchlist={toggleWatchlist}
          onSelectRelated={(m) => setSelectedMovie(m)}
          allMovies={movies}
          language={language}
        />
      )}

      {/* Video Streaming / Trailer Player Modal */}
      {playingMovie && (
        <VideoPlayerModal
          movie={playingMovie}
          onClose={() => setPlayingMovie(null)}
          language={language}
        />
      )}

      {/* Category Show All Modal Browser */}
      {showAllCategory && (
        <ShowAllModal
          categoryTitle={showAllCategory.title}
          categoryKey={showAllCategory.categoryKey}
          movies={showAllCategory.movies}
          onClose={() => setShowAllCategory(null)}
          onSelectMovie={(m) => setSelectedMovie(m)}
          watchlist={watchlist}
          onToggleWatchlist={toggleWatchlist}
          language={language}
        />
      )}

      {/* Watchlist Modal */}
      <WatchlistModal
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        watchlistMovies={watchlistMovies}
        onSelectMovie={(m) => setSelectedMovie(m)}
        onRemoveMovie={(id) => setWatchlist((prev) => prev.filter((item) => item !== id))}
        onClearAll={() => setWatchlist([])}
        language={language}
      />

      {/* Request Movie Modal */}
      <RequestMovieModal
        isOpen={isRequestOpen}
        onClose={() => setIsRequestOpen(false)}
        language={language}
      />

      {/* Android APK & Real Start.io Ads Setup Modal */}
      <AndroidBuildModal
        isOpen={isAndroidBuildOpen}
        onClose={() => setIsAndroidBuildOpen(false)}
        language={language}
      />

      {/* Start.io Bottom Sticky Banner (Refreshes automatically every 45s) */}
      <StartIoBottomBanner language={language} />
    </div>
  );
}
