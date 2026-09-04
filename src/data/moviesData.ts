import { Movie, CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'trending',
    title: 'Featured & Trending',
    bengaliTitle: 'জনপ্রিয় ও নতুন রিলিজ',
    description: 'Hot picks and most downloaded movies right now'
  },
  {
    id: 'bollywood',
    title: 'Bollywood Hindi Movie',
    bengaliTitle: 'বলিউড হিন্দি মুভি',
    description: 'Blockbuster Bollywood cinema in pure Hindi DD5.1'
  },
  {
    id: 'bollywood-90s',
    title: 'Bollywood 90s Movie',
    bengaliTitle: 'বলিউড ৯০ দশকের ক্লাসিক মুভি',
    description: 'Golden era 90s nostagia & timeless hits'
  },
  {
    id: 'south-hindi',
    title: 'South Indian Hindi Dubbed',
    bengaliTitle: 'সাউথ ইন্ডিয়ান হিন্দি ডাবড মুভি',
    description: 'High-octane action from Tollywood, Kollywood & Sandalwood in Hindi'
  },
  {
    id: 'hollywood-hindi',
    title: 'Hollywood Hindi Dubbed',
    bengaliTitle: 'হলিউড হিন্দি ডাবড মুভি',
    description: 'Worldwide blockbusters with clear Hindi audio'
  },
  {
    id: 'horror-hindi',
    title: 'Horror Hindi Dubbed',
    bengaliTitle: 'হরর হিন্দি ডাবড সিনেমা',
    description: 'Spine-chilling horror and supernatural thrillers'
  },
  {
    id: 'tagalog',
    title: 'Tagalog Movie',
    bengaliTitle: 'তাগালগ সিনেমা',
    description: 'Top trending Tagalog & Filipino cinema'
  },
  {
    id: 'bengali',
    title: 'Bengali Movie',
    bengaliTitle: 'বাংলা সিনেমা',
    description: 'Timeless Bengali cinema and classics'
  },
  {
    id: 'web-series',
    title: 'Web Series & Shows',
    bengaliTitle: 'ওয়েব সিরিজ ও শো',
    description: 'Binge-worthy series with complete episodes'
  }
];

export const MOVIES_DATA: Movie[] = [
  // Exact from screenshot top & bollywood row:
  {
    id: 'ragini-mms-2',
    title: 'Ragini MMS 2',
    bengaliTitle: 'রাগিনী এমএমএস ২',
    year: 2014,
    rating: 4.713,
    categories: ['bollywood', 'trending'],
    genres: ['Horror', 'Thriller', 'Mystery'],
    duration: '1h 59m',
    qualityBadge: '1080p WEB-DL',
    qualitiesAvailable: ['480p', '720p', '1080p'],
    audio: 'Hindi Original DD 5.1 (Clean)',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'A passionate film director plans to shoot an erotic horror film inside an infamous haunted manor where supernatural entities await the naive film crew.',
    bengaliSynopsis: 'একটি ভয়ঙ্কর অভিশপ্ত পুরনো বাংলোতে হরর ছবি শুট করতে যায় একদল ক্রু, কিন্তু সেখানে তাদের জন্য অপেক্ষা করে অশুভ অতিলৌকিক শক্তি।',
    director: 'Bhushan Patel',
    cast: ['Sunny Leone', 'Saahir Khan', 'Sandhya Mridul', 'Parvin Dabas'],
    totalSize: '450MB - 2.8GB',
    downloadLinks: [
      {
        resolution: '480p SD',
        fileSize: '450 MB',
        servers: [
          { name: 'Google Drive Fast', speed: '50 Mbps', url: 'https://download.cineflix.demo/ragini-mms-2-480p' },
          { name: 'Direct Cloud Mirror', speed: '100 Mbps', url: 'https://cdn.cineflix.demo/stream/ragini-mms-2-480p' }
        ]
      },
      {
        resolution: '720p HD [x264]',
        fileSize: '1.2 GB',
        servers: [
          { name: 'Google Drive Fast', speed: '80 Mbps', url: 'https://download.cineflix.demo/ragini-mms-2-720p' },
          { name: 'Mega Cloud HighSpeed', speed: '120 Mbps', url: 'https://mega.cineflix.demo/ragini-mms-2-720p' }
        ]
      },
      {
        resolution: '1080p Full HD [6CH]',
        fileSize: '2.6 GB',
        servers: [
          { name: 'Direct CDN VIP Server', speed: '200 Mbps', url: 'https://vip.cineflix.demo/ragini-mms-2-1080p' },
          { name: 'MultiCloud Mirror', speed: '100 Mbps', url: 'https://cloud.cineflix.demo/ragini-mms-2-1080p' }
        ]
      }
    ],
    trailerVideoId: 'uypnF09Vl68',
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    screenshots: [
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'welcome-to-the-jungle',
    title: 'Welcome to the Jungle',
    bengaliTitle: 'ওয়েলকাম টু দ্য জঙ্গল',
    year: 2024,
    rating: 5.080,
    categories: ['bollywood', 'trending'],
    genres: ['Comedy', 'Adventure', 'Action'],
    duration: '2h 35m',
    qualityBadge: '4K UHD',
    qualitiesAvailable: ['480p', '720p', '1080p', '4K UHD'],
    audio: 'Hindi Original Audio DD 5.1',
    subtitles: ['English', 'Hindi', 'Bengali'],
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'The chaotic gang returns in an all-out jungle safari comedy filled with hilarious blunders, wild mercenaries, and non-stop madness.',
    bengaliSynopsis: 'হাসির ধামাকা নিয়ে জঙ্গলে ফেঁসে যাওয়া এক রোমাঞ্চকর অ্যাডভেঞ্চার এবং কমেডি কাহিনী।',
    director: 'Ahmed Khan',
    cast: ['Akshay Kumar', 'Suniel Shetty', 'Sanjay Dutt', 'Arshad Warsi', 'Jacqueline Fernandez', 'Disha Patani'],
    totalSize: '550MB - 6.2GB',
    downloadLinks: [
      {
        resolution: '720p HD HEVC',
        fileSize: '1.1 GB',
        servers: [
          { name: 'GDrive Direct Fast', speed: '90 Mbps', url: '#' },
          { name: 'FastCloud Mirror', speed: '150 Mbps', url: '#' }
        ]
      },
      {
        resolution: '1080p Full HD [Dual Audio]',
        fileSize: '2.8 GB',
        servers: [
          { name: 'VIP SuperServer 1', speed: '200 Mbps', url: '#' },
          { name: 'Google Drive Ultra', speed: '120 Mbps', url: '#' }
        ]
      },
      {
        resolution: '4K Ultra HD HDR 10bit',
        fileSize: '5.9 GB',
        servers: [
          { name: 'Direct 4K Torrent Seedbox', speed: '350 Mbps', url: '#' },
          { name: 'FastCloud 4K Direct', speed: '250 Mbps', url: '#' }
        ]
      }
    ],
    trailerVideoId: '8hP9D6kZseM',
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    screenshots: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'krrish-3',
    title: 'Krrish 3',
    bengaliTitle: 'কৃষ ৩',
    year: 2013,
    rating: 4.825,
    categories: ['bollywood'],
    genres: ['Action', 'Sci-Fi', 'Superhero'],
    duration: '2h 32m',
    qualityBadge: '1080p WEB-DL',
    qualitiesAvailable: ['480p', '720p', '1080p'],
    audio: 'Hindi DD 5.1 Surround',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'India\'s greatest superhero Krrish battles a sinister evil genius named Kaal and his team of mutated telekinetic supervillains aiming to spread a deadly virus worldwide.',
    bengaliSynopsis: 'ভারতের সুপারহিরো কৃষ এক অশুভ মিউট্যান্ট দলের নেতা কালের বিরুদ্ধে প্রাণপণ লড়াইয়ে নামে।',
    director: 'Rakesh Roshan',
    cast: ['Hrithik Roshan', 'Priyanka Chopra', 'Kangana Ranaut', 'Vivek Oberoi'],
    totalSize: '500MB - 3.1GB',
    downloadLinks: [
      {
        resolution: '720p HD x264',
        fileSize: '1.3 GB',
        servers: [
          { name: 'GDrive Server', speed: '80 Mbps', url: '#' }
        ]
      },
      {
        resolution: '1080p 60FPS Remastered',
        fileSize: '3.1 GB',
        servers: [
          { name: 'VIP SuperServer', speed: '180 Mbps', url: '#' }
        ]
      }
    ],
    trailerVideoId: 'MCCVVgtI5vA',
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    screenshots: [
      'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'night-bus',
    title: 'Night Bus',
    bengaliTitle: 'নাইট বাস',
    year: 2024,
    rating: 4.620,
    categories: ['trending'],
    genres: ['Thriller', 'Mystery', 'Suspense'],
    duration: '1h 48m',
    qualityBadge: '1080p WEB-DL',
    qualitiesAvailable: ['720p', '1080p'],
    audio: 'Hindi Dubbed + English',
    subtitles: ['English'],
    posterUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'A desolate late-night bus traveling through foggy mountain passes harbors passengers with dangerous secrets and an unseen predator on board.',
    bengaliSynopsis: 'কুয়াশাচ্ছন্ন পাহাড়ি রাস্তায় মধ্যরাতে চলা এক বাসে আটকে পড়া অচেনা যাত্রীদের শ্বাসরুদ্ধকর সাসপেন্স থ্রিলার।',
    director: 'R. K. Verma',
    cast: ['Vikram Soni', 'Alia Sen', 'Deepak Joshi'],
    totalSize: '600MB - 2.2GB',
    downloadLinks: [
      {
        resolution: '720p HDRip',
        fileSize: '950 MB',
        servers: [{ name: 'FastCloud', speed: '75 Mbps', url: '#' }]
      },
      {
        resolution: '1080p WEB-DL',
        fileSize: '2.1 GB',
        servers: [{ name: 'Google Drive VIP', speed: '150 Mbps', url: '#' }]
      }
    ],
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    screenshots: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'terror',
    title: 'Terror: Reign of Fear',
    bengaliTitle: 'টেরর: রেইন অফ ফিয়ার',
    year: 2024,
    rating: 4.890,
    categories: ['trending', 'hollywood-hindi'],
    genres: ['Horror', 'Action', 'Survival'],
    duration: '2h 05m',
    qualityBadge: '4K UHD',
    qualitiesAvailable: ['480p', '720p', '1080p', '4K UHD'],
    audio: 'Dual Audio (Hindi + English) DD 5.1',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Trapped in an ancient isolated fortress, a group of mercenaries must battle ancient supernatural horrors awakened from deep catacombs.',
    bengaliSynopsis: 'প্রাচীন দুর্গের পাতাল থেকে জেগে ওঠা অতিলৌকিক ভয় ও টিকে থাকার লড়াই।',
    director: 'Marcus Vance',
    cast: ['Carl Weber', 'Elena Rostova', 'Johnathan Davis'],
    totalSize: '480MB - 5.4GB',
    downloadLinks: [
      {
        resolution: '1080p WEB-DL',
        fileSize: '2.3 GB',
        servers: [{ name: 'High Speed Direct', speed: '120 Mbps', url: '#' }]
      }
    ],
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // Bollywood 90s Classics:
  {
    id: 'ddlj-1995',
    title: 'Dilwale Dulhania Le Jayenge',
    bengaliTitle: 'দিলওয়ালে দুলহনিয়া লে জায়েঙ্গে (DDLJ)',
    year: 1995,
    rating: 4.965,
    categories: ['bollywood-90s'],
    genres: ['Romance', 'Drama', 'Musical'],
    duration: '3h 10m',
    qualityBadge: '1080p WEB-DL',
    qualitiesAvailable: ['720p', '1080p'],
    audio: 'Hindi Original Audio DD 5.1 (Remastered)',
    subtitles: ['English', 'Bengali'],
    posterUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Raj and Simran meet on a European train voyage and fall deeply in love. Raj must win the respect and heart of Simran\'s conservative family before her arranged marriage.',
    bengaliSynopsis: 'রাজ ও সিমরানের অমর ভালোবাসার রূপকথা, যা ৯০ এর দশককে বদলে দিয়েছিল।',
    director: 'Aditya Chopra',
    cast: ['Shah Rukh Khan', 'Kajol', 'Amrish Puri', 'Anupam Kher', 'Farida Jalal'],
    totalSize: '950MB - 3.4GB',
    downloadLinks: [
      {
        resolution: '720p Remastered HD',
        fileSize: '1.4 GB',
        servers: [{ name: 'Google Drive Ultra', speed: '90 Mbps', url: '#' }]
      },
      {
        resolution: '1080p 60fps BluRay',
        fileSize: '3.4 GB',
        servers: [{ name: 'Direct Cloud Speed', speed: '150 Mbps', url: '#' }]
      }
    ],
    trailerVideoId: 'c25GKl5VNeY',
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    screenshots: [
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'baazigar-1993',
    title: 'Baazigar',
    bengaliTitle: 'বাজিগর',
    year: 1993,
    rating: 4.882,
    categories: ['bollywood-90s'],
    genres: ['Crime', 'Thriller', 'Romance'],
    duration: '2h 55m',
    qualityBadge: '1080p WEB-DL',
    qualitiesAvailable: ['720p', '1080p'],
    audio: 'Hindi DD 5.1 Clean Sound',
    subtitles: ['English'],
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'A cold-blooded young man embarks on a calculated quest for vengeance against the ruthless businessman who destroyed his father and family.',
    bengaliSynopsis: 'পরিবার ধ্বংসের প্রতিশোধ নিতে উদ্যত এক যুবকের বুদ্ধিদীপ্ত ও রোমাঞ্চকর রহস্যময় পরিকল্পনা।',
    director: 'Abbas-Mustan',
    cast: ['Shah Rukh Khan', 'Kajol', 'Shilpa Shetty', 'Dalip Tahil'],
    totalSize: '900MB - 2.9GB',
    downloadLinks: [
      {
        resolution: '1080p HD Rip',
        fileSize: '2.5 GB',
        servers: [{ name: 'GDrive VIP', speed: '110 Mbps', url: '#' }]
      }
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'karan-arjun-1995',
    title: 'Karan Arjun',
    bengaliTitle: 'করণ অর্জুন',
    year: 1995,
    rating: 4.810,
    categories: ['bollywood-90s'],
    genres: ['Action', 'Fantasy', 'Drama'],
    duration: '2h 55m',
    qualityBadge: '720p HDRip',
    qualitiesAvailable: ['480p', '720p', '1080p'],
    audio: 'Hindi Original Audio',
    subtitles: ['English'],
    posterUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Two brothers murdered by their ruthless uncle are reincarnated in different parts of India, compelled by their mother\'s faith to unite and avenge their deaths.',
    bengaliSynopsis: 'মায়ের বিশ্বাস ও পুনর্জন্মের পর দুই ভাইয়ের এক হয়ে অন্যায়ের প্রতিশোধ নেওয়ার কিংবদন্তি গল্প।',
    director: 'Rakesh Roshan',
    cast: ['Salman Khan', 'Shah Rukh Khan', 'Raakhee Gulzar', 'Kajol', 'Mamta Kulkarni', 'Amrish Puri'],
    totalSize: '850MB - 2.8GB',
    downloadLinks: [
      {
        resolution: '720p HD Clean',
        fileSize: '1.2 GB',
        servers: [{ name: 'GDrive Mirror', speed: '90 Mbps', url: '#' }]
      }
    ],
    screenshots: ['https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 'mohra-1994',
    title: 'Mohra',
    bengaliTitle: 'মোহরা',
    year: 1994,
    rating: 4.770,
    categories: ['bollywood-90s'],
    genres: ['Action', 'Crime', 'Thriller'],
    duration: '2h 58m',
    qualityBadge: '720p HDRip',
    qualitiesAvailable: ['480p', '720p'],
    audio: 'Hindi DD 2.0',
    subtitles: ['English'],
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'An honest man wrongly imprisoned is released by a scheming media tycoon to commit hits under the radar, crossing paths with a relentless police officer.',
    bengaliSynopsis: 'অক্ষয় কুমার ও সুনীল শেঠির বিখ্যাত অ্যাকশন ক্লাসিক ও ব্লকবাস্টার গানসমৃদ্ধ সিনেমা।',
    director: 'Rajiv Rai',
    cast: ['Akshay Kumar', 'Suniel Shetty', 'Raveena Tandon', 'Naseeruddin Shah', 'Paresh Rawal'],
    totalSize: '800MB - 2.2GB',
    downloadLinks: [
      {
        resolution: '720p HDRip',
        fileSize: '1.3 GB',
        servers: [{ name: 'FastCloud', speed: '90 Mbps', url: '#' }]
      }
    ],
    screenshots: ['https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80']
  },

  // South Indian Hindi Dubbed:
  {
    id: 'pushpa-2-the-rule',
    title: 'Pushpa 2: The Rule',
    bengaliTitle: 'পুষ্পা ২: দ্য রুল',
    year: 2024,
    rating: 4.950,
    categories: ['south-hindi', 'trending'],
    genres: ['Action', 'Crime', 'Thriller'],
    duration: '3h 15m',
    qualityBadge: '4K UHD',
    qualitiesAvailable: ['480p', '720p', '1080p', '4K UHD'],
    audio: 'Hindi (Org DD 5.1) + Telugu + Tamil',
    subtitles: ['English', 'Hindi', 'Bengali'],
    posterUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Pushpa Raj reigns supreme over the red sandalwood empire as Bhanwar Singh Shekhawat vows fierce retribution in a high-stakes war of egos and power.',
    bengaliSynopsis: 'রক্তচন্দনের সম্রাজ্যের সম্রাট পুষ্পা রাজ এবং এসপি শেখাওয়াতের মধ্যকার দ্বৈরথের মহা বিস্ফোরণ।',
    director: 'Sukumar',
    cast: ['Allu Arjun', 'Rashmika Mandanna', 'Fahadh Faasil', 'Jagapathi Babu'],
    totalSize: '650MB - 7.5GB',
    downloadLinks: [
      {
        resolution: '720p HD x264',
        fileSize: '1.4 GB',
        servers: [{ name: 'GDrive 1 Click', speed: '120 Mbps', url: '#' }]
      },
      {
        resolution: '1080p Full HD [6CH]',
        fileSize: '3.2 GB',
        servers: [{ name: 'Ultra HighSpeed Mirror', speed: '200 Mbps', url: '#' }]
      },
      {
        resolution: '4K UHD 2160p HDR',
        fileSize: '7.1 GB',
        servers: [{ name: 'VIP Seedbox Cloud', speed: '350 Mbps', url: '#' }]
      }
    ],
    trailerVideoId: '1kVK0MZlbI4',
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    screenshots: ['https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 'kalki-2898-ad',
    title: 'Kalki 2898 AD',
    bengaliTitle: 'কল্কি ২৮৯৮ এডি',
    year: 2024,
    rating: 4.910,
    categories: ['south-hindi', 'trending'],
    genres: ['Sci-Fi', 'Action', 'Mythology'],
    duration: '3h 01m',
    qualityBadge: '4K UHD',
    qualitiesAvailable: ['480p', '720p', '1080p', '4K UHD'],
    audio: 'Hindi Original Audio DD 5.1 + Telugu',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'In a post-apocalyptic dystopian world in the year 2898 AD, Ashwatthama awaits the arrival of Kalki, the final avatar, to protect a miraculous unborn child from the Complex.',
    bengaliSynopsis: '২৮৯৮ খ্রিস্টাব্দের ভবিষ্যতের ধ্বংসপ্রাপ্ত বিশ্বে মহাভারতের অশ্বত্থামা ও কাল্পনিক অবতারের মহাকাব্যিক বিজ্ঞান-কল্পকাহিনী।',
    director: 'Nag Ashwin',
    cast: ['Prabhas', 'Amitabh Bachchan', 'Kamal Haasan', 'Deepika Padukone', 'Disha Patani'],
    totalSize: '700MB - 6.8GB',
    downloadLinks: [
      {
        resolution: '1080p Web-DL Hindi',
        fileSize: '3.1 GB',
        servers: [{ name: 'GDrive VIP', speed: '140 Mbps', url: '#' }]
      },
      {
        resolution: '4K Ultra HD HDR 10bit',
        fileSize: '6.8 GB',
        servers: [{ name: 'FastCloud Direct', speed: '300 Mbps', url: '#' }]
      }
    ],
    trailerVideoId: 'y1ZEl43PWlI',
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    screenshots: ['https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 'kgf-chapter-2',
    title: 'K.G.F: Chapter 2',
    bengaliTitle: 'কেজিএফ চ্যাপ্টার ২',
    year: 2022,
    rating: 4.935,
    categories: ['south-hindi'],
    genres: ['Action', 'Crime', 'Drama'],
    duration: '2h 48m',
    qualityBadge: '4K UHD',
    qualitiesAvailable: ['480p', '720p', '1080p', '4K UHD'],
    audio: 'Hindi Original Audio DD 5.1',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Rocky takes over Kolar Gold Fields, but must face Adheera, the government, and bloodthirsty enemies trying to regain power.',
    bengaliSynopsis: 'রকি ভাইয়ের সোনার খনি দখল ও অধীরার বিরুদ্ধে মহাযুদ্ধের অবিস্মরণীয় সিনেমা।',
    director: 'Prashanth Neel',
    cast: ['Yash', 'Sanjay Dutt', 'Raveena Tandon', 'Srinidhi Shetty'],
    totalSize: '600MB - 5.5GB',
    downloadLinks: [
      {
        resolution: '1080p IMAX Enhanced',
        fileSize: '2.9 GB',
        servers: [{ name: 'GDrive Server', speed: '120 Mbps', url: '#' }]
      }
    ],
    trailerVideoId: 'JKa05nyUmuQ',
    screenshots: ['https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80']
  },

  // Bollywood Hindi Modern:
  {
    id: 'stree-2',
    title: 'Stree 2: Sarkate Ka Aatank',
    bengaliTitle: 'স্ত্রী ২: সারকাটে কা আতঙ্ক',
    year: 2024,
    rating: 4.895,
    categories: ['bollywood', 'trending'],
    genres: ['Comedy', 'Horror'],
    duration: '2h 27m',
    qualityBadge: '1080p WEB-DL',
    qualitiesAvailable: ['480p', '720p', '1080p'],
    audio: 'Hindi DD 5.1 (Clean)',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'The town of Chanderi faces a gruesome new headless terror named Sarkata. Vicky and his fearless friends must summon Stree herself to save the women.',
    bengaliSynopsis: 'চান্দেরি শহরে সারকাটার ভয়াল হামলা এবং রক্ষা করতে স্ত্রীর আবির্ভাব নিয়ে ভরপুর বিনোদন ও হাসির হরর কমেডি।',
    director: 'Amar Kaushik',
    cast: ['Rajkummar Rao', 'Shraddha Kapoor', 'Pankaj Tripathi', 'Abhishek Banerjee', 'Aparshakti Khurana'],
    totalSize: '550MB - 2.8GB',
    downloadLinks: [
      {
        resolution: '720p HDRip',
        fileSize: '1.2 GB',
        servers: [{ name: 'GDrive Direct', speed: '95 Mbps', url: '#' }]
      },
      {
        resolution: '1080p WEB-DL',
        fileSize: '2.6 GB',
        servers: [{ name: 'FastCloud VIP', speed: '160 Mbps', url: '#' }]
      }
    ],
    trailerVideoId: 'KVnhe9uJ6g8',
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    screenshots: ['https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 'shaitaan',
    title: 'Shaitaan',
    bengaliTitle: 'শয়তান',
    year: 2024,
    rating: 4.815,
    categories: ['bollywood'],
    genres: ['Horror', 'Psychological Thriller'],
    duration: '2h 12m',
    qualityBadge: '1080p WEB-DL',
    qualitiesAvailable: ['480p', '720p', '1080p'],
    audio: 'Hindi Original Audio DD 5.1',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'A family\'s weekend vacation turns into a terrifying living nightmare when an uninvited mysterious stranger hypnotizes and takes control of their teenage daughter.',
    bengaliSynopsis: 'অচেনা এক কালো জাদুকর এসে একটি পরিবারের মেয়েকে সম্মোহিত করে নিজের কব্জায় নিয়ে নেয়, শুরু হয় পিতা-মাতার চরম লড়াই।',
    director: 'Vikas Bahl',
    cast: ['Ajay Devgn', 'R. Madhavan', 'Jyothika', 'Janki Bodiwala'],
    totalSize: '500MB - 2.5GB',
    downloadLinks: [
      {
        resolution: '1080p Web-DL',
        fileSize: '2.4 GB',
        servers: [{ name: 'Direct Cloud Mirror', speed: '120 Mbps', url: '#' }]
      }
    ],
    trailerVideoId: 'wF_B_P2-H1s',
    screenshots: ['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80']
  },

  // Hollywood Hindi Dubbed:
  {
    id: 'deadpool-and-wolverine',
    title: 'Deadpool & Wolverine',
    bengaliTitle: 'ডেডপুল অ্যান্ড উলভারিন',
    year: 2024,
    rating: 4.920,
    categories: ['hollywood-hindi', 'trending'],
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    duration: '2h 08m',
    qualityBadge: '4K UHD',
    qualitiesAvailable: ['480p', '720p', '1080p', '4K UHD'],
    audio: 'Dual Audio (Hindi Clean + English) DD 5.1',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Wade Wilson\'s peaceful civilian life is upended when the TVA pulls him into a multiverse mission, forcing him to team up with a cynical, battle-hardened Wolverine.',
    bengaliSynopsis: 'ডেডপুল এবং উলভারিনের মহাজোট ও মাল্টিভার্স বাঁচানোর হাসির ও ধুন্ধুমার অ্যাকশন বিস্ফোরণ।',
    director: 'Shawn Levy',
    cast: ['Ryan Reynolds', 'Hugh Jackman', 'Emma Corrin', 'Matthew Macfadyen'],
    totalSize: '650MB - 6.2GB',
    downloadLinks: [
      {
        resolution: '1080p Dual Audio Web-DL',
        fileSize: '2.8 GB',
        servers: [{ name: 'FastCloud VIP', speed: '170 Mbps', url: '#' }]
      },
      {
        resolution: '4K 2160p HDR IMAX',
        fileSize: '6.2 GB',
        servers: [{ name: 'Google Drive Ultra', speed: '320 Mbps', url: '#' }]
      }
    ],
    trailerVideoId: '73_1biulkYk',
    previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    screenshots: ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 'dune-part-2',
    title: 'Dune: Part Two',
    bengaliTitle: 'ডিউন: পার্ট টু',
    year: 2024,
    rating: 4.960,
    categories: ['hollywood-hindi'],
    genres: ['Sci-Fi', 'Adventure', 'Action'],
    duration: '2h 46m',
    qualityBadge: '4K UHD',
    qualitiesAvailable: ['720p', '1080p', '4K UHD'],
    audio: 'Dual Audio (Hindi + English) Atmos',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family, facing a fateful galactic choice.',
    bengaliSynopsis: 'অ্যারাকিসের মরুভূমিতে পল অ্যাট্রাইডিসের প্রতিশোধ ও ভাগ্য নির্ধারণী মহাকাব্য।',
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Javier Bardem', 'Austin Butler'],
    totalSize: '1.2GB - 8.2GB',
    downloadLinks: [
      {
        resolution: '4K Dolby Vision 10bit',
        fileSize: '8.1 GB',
        servers: [{ name: 'HighSpeed Seedbox', speed: '380 Mbps', url: '#' }]
      }
    ],
    trailerVideoId: 'Way9Dexny3w',
    screenshots: ['https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80']
  },

  // Web Series:
  {
    id: 'mirzapur-season-3',
    title: 'Mirzapur (Season 3)',
    bengaliTitle: 'মির্জাপুর (সিজন ৩)',
    year: 2024,
    rating: 4.885,
    categories: ['web-series', 'trending'],
    genres: ['Crime', 'Action', 'Drama'],
    duration: '10 Episodes (Complete)',
    qualityBadge: '1080p WEB-DL',
    qualitiesAvailable: ['480p', '720p', '1080p'],
    audio: 'Hindi Original Audio DD 5.1',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'With Munna Tripathi dead and Akhandanand wounded, Guddu Pandit and Golu fight desperately to retain the throne of Purvanchal amidst incoming rivals.',
    bengaliSynopsis: 'মির্জাপুরের সিংহাসন দখলের রক্তাক্ত রক্তক্ষয়ী সংঘাত ও গুড্ডু পণ্ডিতের আধিপত্যের নতুন অধ্যায়।',
    director: 'Gurmmeet Singh',
    cast: ['Pankaj Tripathi', 'Ali Fazal', 'Shweta Tripathi', 'Rasika Dugal', 'Vijay Varma'],
    totalSize: '2.5GB - 7.8GB',
    downloadLinks: [
      {
        resolution: '720p Complete Zip [Ep 1-10]',
        fileSize: '3.4 GB',
        servers: [{ name: 'GDrive Episode Pack', speed: '140 Mbps', url: '#' }]
      },
      {
        resolution: '1080p Complete Zip [Ep 1-10]',
        fileSize: '7.8 GB',
        servers: [{ name: 'FastCloud Direct Pack', speed: '240 Mbps', url: '#' }]
      }
    ],
    trailerVideoId: 'S-7G8_0-j20',
    screenshots: ['https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 'panchayat-season-3',
    title: 'Panchayat (Season 3)',
    bengaliTitle: 'পঞ্চায়েত (সিজন ৩)',
    year: 2024,
    rating: 4.960,
    categories: ['web-series'],
    genres: ['Comedy', 'Drama'],
    duration: '8 Episodes (Complete)',
    qualityBadge: '1080p WEB-DL',
    qualitiesAvailable: ['720p', '1080p'],
    audio: 'Hindi Original Audio DD 5.1',
    subtitles: ['English', 'Hindi'],
    posterUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=600&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Abhishek Tripathi navigates the heated village elections of Phulera, political rivalries, and his own career ambitions with his beloved village allies.',
    bengaliSynopsis: 'ফুলেরার পঞ্চায়েত নির্বাচন এবং অভিষেক সচিবজির হৃদয়স্পর্শী ও হাস্যরসাত্মক গল্প।',
    director: 'Deepak Kumar Mishra',
    cast: ['Jitendra Kumar', 'Neena Gupta', 'Raghubir Yadav', 'Chandan Roy', 'Faisal Malik'],
    totalSize: '1.8GB - 5.2GB',
    downloadLinks: [
      {
        resolution: '720p Ep 1-8 Pack',
        fileSize: '2.4 GB',
        servers: [{ name: 'Google Drive VIP', speed: '120 Mbps', url: '#' }]
      }
    ],
    trailerVideoId: '9g97yLrq72s',
    screenshots: ['https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=800&q=80']
  }
];
