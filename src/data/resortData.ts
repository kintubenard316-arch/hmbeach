export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  iconName: 'waves' | 'ship' | 'users' | 'sunset';
  image: string;
  imageAlt: string;
  summary: string;
}

export interface StayOption {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
}

export interface SocialPlatform {
  id: string;
  name: string;
  handle: string;
  href: string;
}

export const RESORT_CONFIG = {
  brandShort: 'H.M GOLDEN BEACH',
  brandFull: 'H.M GOLDEN BEACH KATOSI',
  locationLabel: 'Katosi, Mukono District, Uganda',
  tagline:
    'A welcoming lakeside beach resort and recreational getaway along the scenic shores of Lake Victoria.',
  // Configurable phone number: set a valid telephone string (e.g. "+256700000000") when provided
  phoneNumber: '',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=H.M+Golden+Beach+Katosi+Mukono+Uganda',
  assets: {
    logo: '/assets/aistudio/image_b68397e1.png',
    headerHero: '/assets/aistudio/image_7587aaa9.png',
    footerBeach: '/assets/aistudio/image_71d8f617.png',
    introShore: '/src/assets/images/intro_lake_victoria_shore_1794838888527.jpg',
  },
};

export const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'EXPERIENCES', href: '#experiences' },
  { label: 'ACCOMMODATION', href: '#accommodation' },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'water-recreation',
    title: 'Water & Beach Recreation',
    description:
      'Enjoy swimming, organized beach games, and exciting speedboat rides on Lake Victoria.',
    image: '/src/assets/images/service_water_recreation_1794838890247.jpg',
    imageAlt: 'Guests enjoying beach volleyball and swimming along the golden shore of Lake Victoria',
    highlights: [
      'Freshwater swimming along our sandy Lake Victoria shoreline',
      'Organized beach games and group lakeside activities',
      'Guided speedboat rides across the open lake waters',
    ],
  },
  {
    id: 'wellness-relaxation',
    title: 'Wellness & Relaxation',
    description:
      'Relax and refresh with our sauna, steam bath, manicured gardens, and scenic waterfront pier.',
    image: '/src/assets/images/service_wellness_gardens_1794838889450.jpg',
    imageAlt: 'Timber wellness pavilion, manicured tropical gardens, and wooden pier over Lake Victoria',
    highlights: [
      'Refreshing on-site sauna and steam bath sessions',
      'Shaded, manicured lakeside gardens for quiet leisure',
      'Scenic waterfront pier ideal for morning and evening strolls',
    ],
  },
  {
    id: 'dining-entertainment',
    title: 'Dining & Entertainment',
    description:
      'Enjoy delicious refreshments, our bar and restaurant, DSTV entertainment, and memorable photo moments.',
    image: '/src/assets/images/service_lakeside_dining_1794838889409.jpg',
    imageAlt: 'Open-air lakeside restaurant and bar overlooking calm Lake Victoria waters',
    highlights: [
      'Lakeside restaurant and bar serving meals and cold refreshments',
      'DSTV entertainment lounge for live sports and relaxing evenings',
      'Picturesque beachfront and garden spots for memorable photos',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'swimming',
    title: 'SWIMMING',
    iconName: 'waves',
    image: '/assets/aistudio/image_71d8f617.png',
    imageAlt: 'Visitors swimming in Lake Victoria beside the sandy shore at H.M Golden Beach Katosi',
    summary:
      'Take a refreshing dip in the gentle waters of Lake Victoria right off our sandy Katosi beachfront.',
  },
  {
    id: 'speedboat-rides',
    title: 'SPEEDBOAT RIDES',
    iconName: 'ship',
    image: '/src/assets/images/exp_speedboat_lake_1794838890322.jpg',
    imageAlt: 'Recreational speedboat cruising across sparkling Lake Victoria waters',
    summary:
      'Feel the lakeside breeze on exhilarating speedboat excursions out over the scenic waters of Lake Victoria.',
  },
  {
    id: 'family-fun',
    title: 'FAMILY FUN',
    iconName: 'users',
    image: '/src/assets/images/exp_family_fun_1794838891140.jpg',
    imageAlt: 'Families and children enjoying outdoor activities along the sunny shoreline',
    summary:
      'Spend quality time together with open sandy play areas, shaded umbrellas, and welcoming spaces for all ages.',
  },
  {
    id: 'sunset-relaxation',
    title: 'SUNSET RELAXATION',
    iconName: 'sunset',
    image: '/src/assets/images/exp_sunset_lake_1794838890289.jpg',
    imageAlt: 'Golden sunset reflecting across calm Lake Victoria waters with palm silhouettes',
    summary:
      'Unwind along the pier or beachfront loungers as golden evening light settles across Lake Victoria.',
  },
];

export const STAY_OPTIONS: StayOption[] = [
  {
    id: 'accommodation',
    title: 'Accommodation',
    image: '/src/assets/images/stay_guest_room_1794838891675.jpg',
    imageAlt: 'Comfortable lakeside resort guest room with natural light and crisp bedding',
    description:
      'Rest comfortably steps from the shoreline in welcoming on-site guest rooms designed for peaceful overnight stays and weekend getaways.',
    highlights: [
      'On-site guest accommodation right beside Lake Victoria',
      'Suitable for couples, families, and weekend retreats',
      'Direct access to resort dining, gardens, and beachfront',
    ],
  },
  {
    id: 'camping-experience',
    title: 'Camping Experience',
    image: '/src/assets/images/stay_lakeside_camping_1794838891855.jpg',
    imageAlt: 'Lakeside canvas camping tents set on green grass overlooking Lake Victoria at dusk',
    description:
      'Wake up to fresh lake breezes and serene sunrise views with our dedicated lakeside camping grounds in Katosi.',
    highlights: [
      'Scenic grassy camping grounds bordering the sandy shoreline',
      'Ideal for group outings, nature lovers, and stargazing nights',
      'Access to resort refreshments, restrooms, and waterfront spaces',
    ],
  },
];

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'H.M Golden Beach Katosi',
    href: 'https://www.facebook.com/search/top?q=H.M%20Golden%20Beach%20Katosi',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@hmgoldenbeachkatosi',
    href: 'https://www.instagram.com/explore/tags/hmgoldenbeachkatosi/',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@hmgoldenbeachkatosi',
    href: 'https://www.tiktok.com/search?q=HM%20Golden%20Beach%20Katosi',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: 'H.M Golden Beach',
    href: 'https://www.youtube.com/results?search_query=HM+Golden+Beach+Katosi',
  },
];
