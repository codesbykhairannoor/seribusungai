/** Teks bilingual — selalu memiliki versi ID dan EN */
export interface BilingualText {
  id: string;   // Bahasa Indonesia
  en: string;   // English
}

/** Gambar dengan alt text bilingual */
export interface BilingualImage {
  src: string;
  alt: BilingualText;
  width: number;
  height: number;
  photographer?: string;
}

/** Halaman Metadata */
export interface PageMeta {
  title: BilingualText;
  description: BilingualText;
  ogImage: string;
}

/** Hero Section Content */
export interface HeroContent {
  backgroundSrc: string;
  backgroundAlt: BilingualText;
  headline: BilingualText;
  subheadline?: BilingualText;
  cta?: {
    label: BilingualText;
    href: string;
  };
}

/** Section Content */
export interface SectionContent {
  id: string;
  title: BilingualText;
  content: BilingualText | BilingualText[];
  image?: BilingualImage;
  cta?: {
    label: BilingualText;
    href: string;
  };
}

/** Destination Summary */
export interface DestinationSummary {
  slug: string;
  name: BilingualText;
  tagline: BilingualText;
  category: 'alam' | 'budaya' | 'religi' | 'kuliner';
  heroImage: BilingualImage;
  shortDescription: BilingualText;
  operatingHours: BilingualText;
  ticketPrice: BilingualText;
}

/** Destination Detail */
export interface DestinationDetail extends DestinationSummary {
  fullDescription: BilingualText;
  historicalBackground: BilingualText;
  culturalSignificance: BilingualText;
  gallery: BilingualImage[];
  practicalInfo: {
    address: BilingualText;
    operatingHours: BilingualText;
    ticketPrice: BilingualText;
    visitingTips: BilingualText[];
    howToGetThere: BilingualText;
  };
  nearbyDestinations: string[]; // slugs
}
