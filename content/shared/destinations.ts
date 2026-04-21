import { DestinationSummary } from "@/content/types";

export const destinations: DestinationSummary[] = [
  {
    slug: "pasar-terapung-lok-baintan",
    name: { id: "Pasar Terapung Lok Baintan", en: "Lok Baintan Floating Market" },
    tagline: { id: "Denyut Nadi Sungai Martapura", en: "The Heartbeat of Martapura River" },
    category: "budaya",
    heroImage: {
      src: "/images/budaya/Pasar_terapung_Banjarmasin_7.jpg",
      alt: { id: "Pasar terapung Lok Baintan", en: "Lok Baintan floating market" },
      width: 1200,
      height: 800,
    },
    shortDescription: {
      id: "Pasar tradisional di atas perahu yang telah ada sejak zaman Kesultanan Banjar, menawarkan keaslian budaya sungai.",
      en: "A traditional market on boats that has existed since the Banjar Sultanate era, offering authentic river culture.",
    },
    operatingHours: { id: "06:00 – 09:00 WITA", en: "6:00 AM – 9:00 AM" },
    ticketPrice: { id: "Gratis", en: "Free" },
  },
  {
    slug: "menara-pandang-siring",
    name: { id: "Menara Pandang Siring", en: "Siring Observation Tower" },
    tagline: { id: "Ikon Modern Kota Sungai", en: "Modern Icon of the River City" },
    category: "alam",
    heroImage: {
      src: "/images/budaya/Menara_Pandang_Banjarmasin_001.jpg",
      alt: { id: "Menara Pandang Siring", en: "Siring Observation Tower" },
      width: 1200,
      height: 800,
    },
    shortDescription: {
      id: "Pusat rekreasi keluarga di tepian Sungai Martapura dengan pemandangan kota dari ketinggian.",
      en: "A family recreation center on the banks of the Martapura River with city views from above.",
    },
    operatingHours: { id: "Setiap Hari", en: "Every Day" },
    ticketPrice: { id: "Gratis", en: "Free" },
  },
  {
    slug: "kampung-sasirangan",
    name: { id: "Kampung Sasirangan", en: "Sasirangan Village" },
    tagline: { id: "Warna-warni Budaya Banjar", en: "Colors of Banjar Culture" },
    category: "budaya",
    heroImage: {
      src: "/images/budaya/Kain_Sasirangan_di_Kampung_Sasirangan_Banjarmasin.jpg",
      alt: { id: "Kain Sasirangan khas Banjar", en: "Banjar Sasirangan cloth" },
      width: 1200,
      height: 800,
    },
    shortDescription: {
      id: "Sentra kerajinan kain tradisional khas suku Banjar dengan motif jelujur yang unik.",
      en: "Traditional cloth craft center of the Banjar people with unique basting motifs.",
    },
    operatingHours: { id: "08:00 – 17:00 WITA", en: "8:00 AM – 5:00 PM" },
    ticketPrice: { id: "Gratis", en: "Free" },
  },
  {
    slug: "museum-wasaka",
    name: { id: "Museum Wasaka", en: "Wasaka Museum" },
    tagline: { id: "Waja Sampai Kaputing", en: "Steel to the End" },
    category: "sejarah",
    heroImage: {
      src: "/images/sejarah/1920px-Museum_Lambung_Mangkurat.png", // Temporarily using Lambung Mangkurat as placeholder
      alt: { id: "Museum Wasaka Banjarmasin", en: "Wasaka Museum Banjarmasin" },
      width: 1200,
      height: 800,
    },
    shortDescription: {
      id: "Rumah tradisonal Banjar yang dialihfungsikan menjadi museum perjuangan rakyat Kalimantan Selatan melawan penjajahan.",
      en: "A traditional Banjar house repurposed into a museum documenting the South Kalimantan people's struggle against colonialism.",
    },
    operatingHours: { id: "09:00 – 15:00 WITA", en: "9:00 AM – 3:00 PM" },
    ticketPrice: { id: "Gratis", en: "Free" },
  },
  {
    slug: "masjid-sultan-suriansyah",
    name: { id: "Masjid Sultan Suriansyah", en: "Sultan Suriansyah Mosque" },
    tagline: { id: "Situs Sejarah Tertua", en: "The Oldest Historical Site" },
    category: "religi",
    heroImage: {
      src: "/images/wisata/Interior_masjid_Sultan_Suriansyah_(1).jpg",
      alt: { id: "Masjid Sultan Suriansyah", en: "Sultan Suriansyah Mosque" },
      width: 1200,
      height: 800,
    },
    shortDescription: {
      id: "Masjid tertua di Kalimantan Selatan dengan arsitektur rumah panggung tradisional Banjar.",
      en: "The oldest mosque in South Kalimantan with traditional Banjar stilted house architecture.",
    },
    operatingHours: { id: "Setiap Hari (Waktu Shalat)", en: "Every Day (Prayer Times)" },
    ticketPrice: { id: "Gratis", en: "Free" },
  },
  {
    slug: "masjid-raya-sabilal-muhtadin",
    name: { id: "Masjid Raya Sabilal Muhtadin", en: "Sabilal Muhtadin Grand Mosque" },
    tagline: { id: "Kemegahan Spiritual Kota", en: "Spiritual Grandeur of the City" },
    category: "religi",
    heroImage: {
      src: "/images/wisata/Masjid_Raya_Sabilal_Muhtadin_3.jpg",
      alt: { id: "Masjid Raya Sabilal Muhtadin", en: "Sabilal Muhtadin Grand Mosque" },
      width: 1200,
      height: 800,
    },
    shortDescription: {
      id: "Masjid terbesar di Banjarmasin yang menjadi simbol kebanggaan umat Islam di Kalimantan Selatan.",
      en: "The largest mosque in Banjarmasin, which is a symbol of pride for Muslims in South Kalimantan.",
    },
    operatingHours: { id: "Setiap Hari (Waktu Shalat)", en: "Every Day (Prayer Times)" },
    ticketPrice: { id: "Gratis", en: "Free" },
  },
];
