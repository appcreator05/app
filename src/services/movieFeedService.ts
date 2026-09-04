import { Movie, CategoryKey, CategoryInfo } from '../types';
import { MOVIES_DATA } from '../data/moviesData';

export const REMOTE_METADATA_URL =
  (import.meta as unknown as { env?: { VITE_MOVIES_METADATA_URL?: string } }).env?.VITE_MOVIES_METADATA_URL ||
  'https://raw.githubusercontent.com/appcreator05/my12/main/876668646.json';

export interface RawUserMovie {
  title: string;
  category: string;
  poster: string;
  rating: string;
  link: string;
  cast: string;
}

// Complete copy of the user's raw dataset from 876668646.json for instant offline & zero-latency first load
export const BUNDLED_RAW_MOVIES: RawUserMovie[] = [
  {
    title: 'Speed Demon 2026',
    category: 'Horror Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786443523455.jpg',
    rating: '4.861',
    link: 'go:mm30',
    cast: 'Katie Cassidy, William H. Macy, John Patrick Jordan, Michael Emery, Allen McCullough, Sabrina Schlegel-Mejia, Noriko Sato, Ray Faiola, Jeremy Feight, Michael John Improta',
  },
  {
    title: 'Night Bus 2017',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786443459920.jpg',
    rating: '8.000',
    link: 'go:mm29',
    cast: 'Teuku Rifnu Wikana, Yayu A.W. Unru, Edward Akbar, Hana Prinantina, Rahael Ketsia, Abdurrahman Arif, Tio Pakusadewo, Karyo, Arya Saloka, Alex Abbad',
  },
  {
    title: 'Reign of Terror 1949',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786443380665.jpg',
    rating: '6.833',
    link: 'go:mm28',
    cast: 'Robert Cummings, Richard Basehart, Richard Hart, Arlene Dahl, Arnold Moss, Norman Lloyd, Charles McGraw, Beulah Bondi, Jess Barker, Georgette Windsor',
  },
  {
    title: 'Ragini MMS 2 2014',
    category: 'Bollywood Hindi Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786443285741.jpg',
    rating: '4.713',
    link: 'go:mm27',
    cast: 'Sunny Leone, Saahil Prem, Parvin Dabas, Sandhya Mridul, Anita Hassanandani, Divya Dutta, Soniya Mehra, Karan Taluja, Kainaz Motivala, Rajkummar Rao',
  },
  {
    title: 'Mean Girls 2024',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786443207005.jpg',
    rating: '5.855',
    link: 'go:mm26',
    cast: 'Angourie Rice, Reneé Rapp, Auliʻi Cravalho, Jaquel Spivey, Avantika, Bebe Wood, Christopher Briney, Jenna Fischer, Busy Philipps, Tina Fey',
  },
  {
    title: 'Killer Kate! 2018',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786443105786.jpg',
    rating: '3.942',
    link: 'go:mm25',
    cast: 'Alexandra Feld, Danielle Burgess, Amaris Davidson, Abby Eiland, Robert Burgess, Tiffany Shepis, Grant Lyon, Larry Cedar, Bryan Shickley',
  },
  {
    title: "Pirates of the Caribbean: Dead Man's Chest 2006",
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786443015949.jpg',
    rating: '7.388',
    link: 'go:mm24',
    cast: 'Johnny Depp, Orlando Bloom, Keira Knightley, Stellan Skarsgård, Bill Nighy, Jack Davenport, Kevin McNally, Jonathan Pryce, Lee Arenberg, Mackenzie Crook',
  },
  {
    title: 'Sin City: A Dame to Kill For 2014',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786442901309.jpg',
    rating: '6.403',
    link: 'go:mm23',
    cast: 'Mickey Rourke, Jessica Alba, Josh Brolin, Joseph Gordon-Levitt, Rosario Dawson, Bruce Willis, Eva Green, Powers Boothe, Dennis Haysbert, Ray Liotta',
  },
  {
    title: 'Mean Girls 2 2011',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786442515969.jpg',
    rating: '5.244',
    link: 'go:mm22',
    cast: 'Meaghan Jette Martin, Jennifer Stone, Maiara Walsh, Nicole Gale Anderson, Claire Holt, Diego Boneta, Bethany Anne Lind, Patrick Johnson, Colin Dennard, Amber Brooke',
  },
  {
    title: 'Roop Ki Rani Choron Ka Raja 1993',
    category: 'Bollywood 90s Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786442423935.jpg',
    rating: '5.667',
    link: 'go:mm21',
    cast: 'Anil Kapoor, Sridevi, Anupam Kher, Paresh Rawal, Jackie Shroff, Bindu, Dalip Tahil, Johny Lever, Aanjjan Srivastav, Arun Bakshi',
  },
  {
    title: 'The 12 Disasters of Christmas 2012',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786442328058.jpg',
    rating: '4.567',
    link: 'go:mm20',
    cast: "Ed Quinn, Magda Apanowicz, Holly Dignard, Roark Critchlow, Greg Kean, Brenna O'Brien, Christine Willes, Ryan Grantham, Andrew Airlie, Kaj-Erik Eriksen",
  },
  {
    title: 'Welcome to the Jungle 2026',
    category: 'Bollywood Hindi Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786442240145.jpg',
    rating: '5.080',
    link: 'go:mm19',
    cast: 'Akshay Kumar, Suniel Shetty, Arshad Warsi, Jacqueline Fernandez, Disha Patani, Raveena Tandon, Jackie Shroff, Paresh Rawal, Lara Dutta, Farida Jalal',
  },
  {
    title: 'Duplicate 1998',
    category: 'Bollywood 90s Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786441644930.jpg',
    rating: '6.100',
    link: 'go:mm18',
    cast: 'Shah Rukh Khan, Juhi Chawla Mehta, Sonali Bendre, Mohnish Behl, Tiku Talsania, Sharat Saxena, Gulshan Grover, Kajol, Vishwajeet Pradhan, Farida Jalal',
  },
  {
    title: 'The Fall Guy 2024',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786441578211.jpg',
    rating: '6.952',
    link: 'go:mm17',
    cast: 'Ryan Gosling, Emily Blunt, Aaron Taylor-Johnson, Hannah Waddingham, Teresa Palmer, Stephanie Hsu, Winston Duke, Ben Knight, Matuse, Adam Dunn',
  },
  {
    title: 'Krrish 3 2013',
    category: 'Bollywood Hindi Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786441510540.jpg',
    rating: '5.644',
    link: 'go:mm16',
    cast: 'Hrithik Roshan, Priyanka Chopra Jonas, Vivek Oberoi, Kangana Ranaut, Arif Zakaria, Asif Basra, Rajpal Yadav, Rakhee Tandon, Sameer Ali Khan, Gowhar Khan',
  },
  {
    title: 'Hate Story 2 2014',
    category: 'Bollywood Hindi Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786441417106.jpg',
    rating: '4.338',
    link: 'go:mm15',
    cast: 'Sushant Singh, Surveen Chawla, Jay Bhanushali, Siddharth Kher, Rajesh Khera, Sunny Leone, Neha Kaul, Shashank Shende, Bikramjeet Kanwarpal',
  },
  {
    title: 'Unli Pop 2025',
    category: 'Tagalog Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786441321430.jpg',
    rating: '5.700',
    link: 'go:mm14',
    cast: 'Micaella Raz, Marco Gomez, Julianne Richards, JD Aguas, Reina Castillo, Zsa Zsa Zobel, Adriana Roces, Lyka Casaje, Raguel Torda, Lucky Jay De Guzman',
  },
  {
    title: 'Angkinin Mo Ako 2026',
    category: 'Tagalog Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786441100143.jpg',
    rating: '5.000',
    link: 'go:mm13',
    cast: 'Cess Garcia, Sheena Cole, Juan Calma, Dara Lima, Sarah Pulido',
  },
  {
    title: 'cute girls',
    category: 'Tagalog Movie',
    poster: 'https://raw.githubusercontent.com/appcreator05/my12/refs/heads/main/file/tagalo.jpg',
    rating: '4.500',
    link: 'go:mm12',
    cast: 'Cute Girls of Manila, Sunshine Cruz, Alma Moreno, Ara Mina',
  },
  {
    title: 'What Death Leaves Behind 2018',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786441000169.jpg',
    rating: '4.500',
    link: 'go:mm11',
    cast: "Christopher Mann, Vincent Young, Kelly Dowdle, Erin O'Brien, Johnny Alonso, Alexandra Tydings, Jesse Bradley",
  },
  {
    title: 'The Odyssey 2026',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786440705616.jpg',
    rating: '8.000',
    link: 'go:mm10',
    cast: 'Matt Damon, Tom Holland, Anne Hathaway, Robert Pattinson, Himesh Patel, Charlize Theron, John Leguizamo, Travis Scott, Corey Hawkins, Jarreth J. Merz',
  },
  {
    title: 'Bagong Tukso 2026',
    category: 'Tagalog Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786439848559.jpg',
    rating: '5.000',
    link: 'go:mm9',
    cast: 'Margaret Diaz, Allison Ross, Apphle Celso, Heart Fox, Shanon Tampon',
  },
  {
    title: 'Kirot 2025',
    category: 'Tagalog Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786480685004.jpg',
    rating: '5.000',
    link: 'go:mm8',
    cast: 'Jenn Rosa, Ashley Lopez, JC Tan, Dio De Jesus, Rinoa Halili, Arjay Bautista, Giovanni Baldisseri, Malou Canzana, Angel Durango, Angelique Maglinao',
  },
  {
    title: 'Awarapan 2 2026',
    category: 'Bollywood Hindi Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1786913575110.jpg',
    rating: '6.450',
    link: 'go:mm7',
    cast: 'Emraan Hashmi, Shabana Azmi, Disha Patani, Suvinder Vicky, Vijayant Kohli, Atul Kumar, Aniruddh Rawal, Shriya Saran, Puran Gabbi, Shaad Randhawa',
  },
  {
    title: 'Hogi Pyaar Ki Jeet 1999',
    category: 'Bollywood 90s Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787517459743.jpg',
    rating: '5.600',
    link: 'go:mm6',
    cast: 'Ajay Devgn, Neha, Arshad Warsi, Mayuri Kango, Arjun, Ketki Dave, Mohan Joshi, Adi Irani, Shiva Rindani, Raza Murad',
  },
  {
    title: 'My Best Friend, His Girlfriend and Me 2026',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787689131891.jpg',
    rating: '5.980',
    link: 'go:mm5',
    cast: 'Kostja Ullmann, Janina Uhse, David Kross, Ferdinand Hofer, Clara Immel, Mira Huber, Larissa Sirah Herden, Anna Herrmann, Timon Ballenberger, Thomas Heinze',
  },
  {
    title: 'Anand Ashram 1977',
    category: 'Bengali Movie',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1787738846257.jpg',
    rating: '8.000',
    link: 'go:mm4',
    cast: 'Ashok Kumar, Uttam Kumar, Sharmila Tagore, Rakesh Roshan, Moushumi Chatterjee, Utpal Dutt, Anita Guha',
  },
  {
    title: 'The Bay 2026',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1788120721884.jpg',
    rating: '5.800',
    link: 'go:mm3',
    cast: "Francesca Eastwood, Dani Oliveros, Alexander Wraith, Ta'imua, Calan Scherer, Destiny Benner",
  },
  {
    title: 'The Last Sunrise 2026',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1788121606234.jpg',
    rating: '6.981',
    link: 'go:mm2',
    cast: 'Maia Reficco, Eva Longoria, Fernando Lindez, Chloé Sweetlove, Andrés Velencoso, Stefanie Martini, Sabrina Bartlett, Àlex Peracaula, Molly B. Thomas, Razan Nassar',
  },
  {
    title: 'Evil Dead Burn 2026',
    category: 'Hollywood Hindi Dubbed',
    poster: 'https://cdn.jsdelivr.net/gh/appcreator05/768@main/5/1788122147137.jpg',
    rating: '7.784',
    link: 'go:mm1',
    cast: 'Souheila Yacoub, Tandi Wright, Hunter Doohan, Luciane Buchanan, Erroll Shand, Maude Davey, George Pullar, Greta van den Brink, Keanu Karim, Victory Ndukwe',
  },
];

// Map user categories to system CategoryKey
export function mapUserCategory(cat: string): CategoryKey {
  const normalized = cat.toLowerCase().trim();
  if (normalized.includes('90s') || normalized.includes('90')) return 'bollywood-90s';
  if (normalized.includes('bollywood')) return 'bollywood';
  if (normalized.includes('horror')) return 'horror-hindi';
  if (normalized.includes('hollywood')) return 'hollywood-hindi';
  if (normalized.includes('tagalog')) return 'tagalog';
  if (normalized.includes('bengali') || normalized.includes('bangla')) return 'bengali';
  if (normalized.includes('south')) return 'south-hindi';
  return 'bollywood';
}

export function transformRawMovie(raw: RawUserMovie, idx: number): Movie {
  // Extract year if title ends with 4 digits e.g. "Welcome to the Jungle 2026"
  const yearMatch = raw.title.match(/(\d{4})$/);
  const year = yearMatch ? parseInt(yearMatch[1], 10) : 2025;
  const cleanTitle = raw.title.replace(/\s*\d{4}$/, '').trim();
  const slug = `${cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${year}`;

  const ratingNum = parseFloat(raw.rating) || 5.0;
  const mainCat = mapUserCategory(raw.category);

  // Derive categories: always has mainCat, plus trending if rating >= 5.8 or idx < 6
  const categories: CategoryKey[] = [mainCat];
  if (ratingNum >= 5.8 || idx < 6) {
    categories.push('trending');
  }

  // Cast list
  const castList = raw.cast
    ? raw.cast.split(',').map((c) => c.trim()).filter(Boolean)
    : ['Cast details in credits'];

  // Audio configuration based on category
  let audio = 'Hindi (Org DD5.1)';
  if (mainCat === 'hollywood-hindi') audio = 'Hindi Dubbed + English (Dual Audio)';
  else if (mainCat === 'horror-hindi') audio = 'Hindi Dubbed + English (5.1 Atmos)';
  else if (mainCat === 'bollywood-90s') audio = 'Hindi (Original Classic Audio)';
  else if (mainCat === 'tagalog') audio = 'Tagalog (Original Audio) + Eng Sub';
  else if (mainCat === 'bengali') audio = 'Bengali (Original Audio)';

  // Genres
  let genres = ['Drama'];
  if (mainCat === 'horror-hindi' || cleanTitle.toLowerCase().includes('dead') || cleanTitle.toLowerCase().includes('demon')) {
    genres = ['Horror', 'Thriller', 'Mystery'];
  } else if (mainCat === 'hollywood-hindi') {
    genres = ['Action', 'Adventure', 'Sci-Fi'];
  } else if (mainCat === 'bollywood-90s') {
    genres = ['Romance', 'Action', 'Musical'];
  } else if (mainCat === 'tagalog') {
    genres = ['Romance', 'Drama', 'Sensual'];
  } else if (mainCat === 'bengali') {
    genres = ['Classic', 'Drama', 'Family'];
  } else {
    genres = ['Action', 'Comedy', 'Thriller'];
  }

  const codeId = raw.link ? raw.link.replace('go:', '') : `m${idx}`;

  return {
    id: slug,
    title: cleanTitle,
    bengaliTitle: cleanTitle,
    year,
    rating: ratingNum,
    categories,
    genres,
    duration: '2h 14m',
    qualityBadge: ratingNum > 7.0 ? '4K UHD' : '1080p WEB-DL',
    qualitiesAvailable: ['480p', '720p', '1080p', '4K UHD'],
    audio,
    subtitles: ['English', 'Hindi'],
    posterUrl: raw.poster,
    backdropUrl: raw.poster,
    synopsis: `${cleanTitle} (${year}) - Full movie stream and fast high-speed download with pristine ${audio} quality. Starring ${castList.slice(0, 3).join(', ')}.`,
    bengaliSynopsis: `${cleanTitle} (${year}) - সম্পূর্ণ মুভি অনলাইনে উপভোগ করুন এবং হাই-স্পিড সার্ভার থেকে সরাসরি ডাউনলোড করুন।`,
    director: castList[0] ? `Directed with ${castList[0]}` : 'Director',
    cast: castList,
    totalSize: '2.4 GB',
    rawLink: raw.link,
    downloadLinks: [
      {
        resolution: '480p SD',
        fileSize: '420 MB',
        servers: [
          { name: 'Direct Cloud Server 1', speed: '50 Mbps', url: `https://download.cineflix.workers.dev/${codeId}/480p` },
          { name: 'Google Drive Ultra Fast', speed: '120 Mbps', url: `https://drive.google.com/open?id=${codeId}` },
        ],
      },
      {
        resolution: '720p HD',
        fileSize: '1.1 GB',
        servers: [
          { name: 'Direct Cloud Server 1', speed: '50 Mbps', url: `https://download.cineflix.workers.dev/${codeId}/720p` },
          { name: 'Google Drive High Speed', speed: '120 Mbps', url: `https://drive.google.com/open?id=${codeId}` },
          { name: 'VIP Super Fast', speed: '200 Mbps', url: `https://vip.cineflix.download/${codeId}` },
        ],
      },
      {
        resolution: '1080p Full HD',
        fileSize: '2.4 GB',
        servers: [
          { name: 'Google Drive High Speed', speed: '120 Mbps', url: `https://drive.google.com/open?id=${codeId}` },
          { name: 'Fast Direct CDN', speed: '90 Mbps', url: `https://cdn.cineflix.org/${codeId}/1080p` },
          { name: 'VIP 4K Cloud', speed: '300 Mbps', url: `https://vip.cineflix.download/${codeId}` },
        ],
      },
      {
        resolution: '4K Ultra HD',
        fileSize: '5.8 GB',
        servers: [
          { name: 'Google Drive 4K HDR', speed: '200 Mbps', url: `https://drive.google.com/open?id=${codeId}` },
          { name: 'VIP Cloud Direct', speed: '400 Mbps', url: `https://vip.cineflix.download/${codeId}/4k` },
        ],
      },
    ],
    trailerVideoId: 'dQw4w9WgXcQ',
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    screenshots: [
      raw.poster,
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80',
    ],
  };
}

const EXTRA_FALLBACK_MOVIES: Movie[] = MOVIES_DATA.filter(
  (m) => m.categories.includes('south-hindi') || m.categories.includes('web-series')
);

export const USER_MOVIES_DATA: Movie[] = [
  ...BUNDLED_RAW_MOVIES.map(transformRawMovie),
  ...EXTRA_FALLBACK_MOVIES,
];

export const METADATA_CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    title: 'All Movies & Series',
    bengaliTitle: 'সকল সিনেমা ও সিরিজ',
    description: 'Browse complete catalog from remote metadata feed',
  },
  {
    id: 'trending',
    title: 'Trending Releases',
    bengaliTitle: 'জনপ্রিয় ট্রেন্ডিং সিনেমা',
    description: 'Highest rated movies and fresh trending picks',
  },
  {
    id: 'bollywood',
    title: 'Bollywood Hindi Movie',
    bengaliTitle: 'বলিউড হিন্দি মুভি',
    description: 'Latest and popular Bollywood cinema',
  },
  {
    id: 'bollywood-90s',
    title: 'Bollywood 90s Movie',
    bengaliTitle: 'বলিউড ৯০ দশকের ক্লাসিক সিনেমা',
    description: 'Golden era Bollywood hits and evergreen blockbusters',
  },
  {
    id: 'hollywood-hindi',
    title: 'Hollywood Hindi Dubbed',
    bengaliTitle: 'হলিউড হিন্দি ডাবড',
    description: 'Hollywood blockbusters dubbed in clear Hindi',
  },
  {
    id: 'horror-hindi',
    title: 'Horror Hindi Dubbed',
    bengaliTitle: 'হরর হিন্দি ডাবড সিনেমা',
    description: 'Bone-chilling horror and supernatural thrillers',
  },
  {
    id: 'tagalog',
    title: 'Tagalog Movie',
    bengaliTitle: 'তাগালগ সিনেমা',
    description: 'Top trending Tagalog & Filipino cinema',
  },
  {
    id: 'bengali',
    title: 'Bengali Movie',
    bengaliTitle: 'বাংলা ক্লাসিক সিনেমা',
    description: 'Timeless Bengali cinema and masterpieces',
  },
];

// Async function to fetch latest dynamic data from user's remote URL
export async function fetchRemoteMovies(): Promise<{ movies: Movie[]; isLive: boolean }> {
  try {
    const res = await fetch(`${REMOTE_METADATA_URL}?_t=${Date.now()}`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data: RawUserMovie[] = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      const parsed = [...data.map(transformRawMovie), ...EXTRA_FALLBACK_MOVIES];
      try {
        localStorage.setItem('cineflix_cached_remote_movies', JSON.stringify(data));
      } catch {
        // LocalStorage fallback
      }
      return { movies: parsed, isLive: true };
    }
  } catch (err) {
    console.warn('Could not fetch remote metadata, using cached/bundled data:', err);
  }

  // Fallback to localStorage if previously cached
  try {
    const cached = localStorage.getItem('cineflix_cached_remote_movies');
    if (cached) {
      const cachedData: RawUserMovie[] = JSON.parse(cached);
      if (Array.isArray(cachedData) && cachedData.length > 0) {
        return { movies: cachedData.map(transformRawMovie), isLive: false };
      }
    }
  } catch {
    // Ignore
  }

  // Fallback to bundled copy
  return { movies: USER_MOVIES_DATA, isLive: false };
}
