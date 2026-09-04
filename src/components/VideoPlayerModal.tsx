import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  RotateCw,
  Settings,
  Subtitles,
  Tv,
} from 'lucide-react';
import { Movie } from '../types';

interface VideoPlayerModalProps {
  movie: Movie | null;
  onClose: () => void;
  language: 'en' | 'bn';
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  movie,
  onClose,
  language,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [quality, setQuality] = useState('1080p');
  const [playerMode, setPlayerMode] = useState<'stream' | 'trailer'>('stream');

  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  if (!movie) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 1;
      setCurrentTime(current);
      setDuration(dur);
      setProgress((current / dur) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (videoRef.current && duration > 0) {
      videoRef.current.currentTime = (val / 100) * duration;
      setProgress(val);
    }
  };

  const toggleFullscreen = () => {
    if (playerContainerRef.current) {
      if (!document.fullscreenElement) {
        playerContainerRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div
        ref={playerContainerRef}
        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
      >
        {/* Top Bar with Title & Close */}
        <div className="p-3 bg-gradient-to-b from-black/90 to-transparent flex items-center justify-between text-white z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs sm:text-sm font-bold truncate max-w-xs sm:max-w-md">
              {language === 'bn' && movie.bengaliTitle ? movie.bengaliTitle : movie.title}
            </span>
            <span className="bg-[#00c0f9] text-black text-[10px] font-black px-1.5 py-0.2 rounded">
              {quality}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Switch Stream / YouTube Trailer */}
            {movie.trailerVideoId && (
              <div className="flex bg-white/10 rounded-lg p-0.5 text-[11px] font-semibold">
                <button
                  onClick={() => setPlayerMode('stream')}
                  className={`px-2 py-0.5 rounded ${
                    playerMode === 'stream'
                      ? 'bg-[#00c0f9] text-black font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  HD Stream
                </button>
                <button
                  onClick={() => setPlayerMode('trailer')}
                  className={`px-2 py-0.5 rounded ${
                    playerMode === 'trailer'
                      ? 'bg-[#00c0f9] text-black font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Trailer
                </button>
              </div>
            )}

            <button
              id="btn-close-player"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-black/50 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Area */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center group/video">
          {playerMode === 'stream' ? (
            <>
              <video
                ref={videoRef}
                src={
                  movie.previewVideoUrl ||
                  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                }
                autoPlay
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-contain cursor-pointer"
              />

              {/* Center Play/Pause Overlay indicator on hover or pause */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00c0f9] text-slate-950 flex items-center justify-center shadow-2xl transform scale-110">
                    <Play className="w-7 h-7 fill-slate-950 ml-1" />
                  </div>
                </div>
              )}

              {/* Custom Control Bar Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2 z-20">
                {/* Timeline Slider */}
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#00c0f9]"
                  />
                </div>

                {/* Control Actions */}
                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1 text-slate-200 hover:text-[#00c0f9] transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current" />
                      )}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-1 text-slate-200 hover:text-[#00c0f9] transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>

                    <span className="text-[11px] font-mono text-slate-400">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {/* Quality selector */}
                    <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-[10px]">
                      <Settings className="w-3 h-3 text-[#00c0f9]" />
                      <select
                        value={quality}
                        onChange={(e) => setQuality(e.target.value)}
                        className="bg-transparent text-white focus:outline-none cursor-pointer"
                      >
                        <option value="480p" className="bg-[#14171f]">
                          480p
                        </option>
                        <option value="720p" className="bg-[#14171f]">
                          720p HD
                        </option>
                        <option value="1080p" className="bg-[#14171f]">
                          1080p FHD
                        </option>
                        <option value="4K" className="bg-[#14171f]">
                          4K UHD
                        </option>
                      </select>
                    </div>

                    <button
                      onClick={toggleFullscreen}
                      className="p-1 text-slate-200 hover:text-[#00c0f9] transition-colors"
                    >
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${movie.trailerVideoId}?autoplay=1`}
              title={movie.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </div>

        {/* Audio Language & Subtitles Banner */}
        <div className="p-3 bg-[#111317] border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-semibold">{movie.audio}</span>
            <span>•</span>
            <span>Subtitles: {movie.subtitles.join(', ')}</span>
          </div>
          <span className="text-[11px] text-slate-400">
            {language === 'bn' ? 'বাফারিং ছাড়া স্মুথ প্লেব্যাক' : 'Ultra Fast CDN Buffer-free Playback'}
          </span>
        </div>
      </div>
    </div>
  );
};
