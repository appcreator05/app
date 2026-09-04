export type CategoryKey =
  | 'all'
  | 'trending'
  | 'bollywood'
  | 'bollywood-90s'
  | 'south-hindi'
  | 'hollywood-hindi'
  | 'horror-hindi'
  | 'tagalog'
  | 'bengali'
  | 'web-series';

export interface Movie {
  id: string;
  title: string;
  bengaliTitle?: string;
  year: number;
  rating: number; // e.g. 4.713 or 5.080
  categories: CategoryKey[];
  genres: string[];
  duration: string;
  qualityBadge: '4K UHD' | '1080p WEB-DL' | '720p HDRip' | 'Pre-DVDRip' | 'BluRay' | 'HD';
  qualitiesAvailable: ('480p' | '720p' | '1080p' | '4K UHD')[];
  audio: string;
  subtitles: string[];
  posterUrl: string;
  backdropUrl: string;
  synopsis: string;
  bengaliSynopsis?: string;
  director: string;
  cast: string[];
  totalSize: string;
  rawLink?: string; // e.g. go:mm30
  downloadLinks: {
    resolution: string;
    fileSize: string;
    servers: {
      name: string;
      speed: string;
      url: string;
    }[];
  }[];
  trailerVideoId?: string; // YouTube or direct MP4
  previewVideoUrl?: string;
  screenshots: string[];
}

export interface CategoryInfo {
  id: CategoryKey;
  title: string;
  bengaliTitle: string;
  description: string;
}
