import { BilingualText } from "@/content/types";

export interface NavItem {
  label: BilingualText;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: { id: "Profil", en: "Profile" },
    href: "#",
    children: [
      { label: { id: "Profil Kota", en: "City Profile" }, href: "/profil-kota" },
      { label: { id: "Sejarah", en: "History" }, href: "/sejarah" },
      { label: { id: "Visi Digital", en: "Digital Vision" }, href: "/visi-digital" },
    ],
  },
  {
    label: { id: "Warisan", en: "Heritage" },
    href: "#",
    children: [
      { label: { id: "Budaya", en: "Culture" }, href: "/budaya" },
      { label: { id: "Kuliner", en: "Culinary" }, href: "/kuliner" },
    ],
  },
  {
    label: { id: "Wisata", en: "Tourism" },
    href: "#",
    children: [
      { label: { id: "Destinasi Wisata", en: "Destinations" }, href: "/wisata" },
      { label: { id: "Galeri", en: "Gallery" }, href: "/galeri" },
    ],
  },
  { label: { id: "Panduan", en: "Travel Guide" }, href: "/panduan" },
  { label: { id: "Kontak", en: "Contact" }, href: "/kontak" },
];
