import { BilingualText } from "@/content/types";
import { 
  Building2, 
  History, 
  Smartphone, 
  Palette, 
  Utensils, 
  Palmtree, 
  Camera,
  Map,
  Users
} from "lucide-react";

export interface NavItem {
  label: BilingualText;
  description?: BilingualText;
  icon?: any;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: { id: "Profil", en: "Profile" },
    href: "#",
    children: [
      { 
        label: { id: "Profil Kota", en: "City Profile" }, 
        description: { id: "Informasi umum dan statistik kota.", en: "General information and city statistics." },
        icon: Building2,
        href: "/profil-kota" 
      },
      { 
        label: { id: "Sejarah", en: "History" }, 
        description: { id: "Menelusuri jejak masa lalu kota.", en: "Tracing the city's historical footsteps." },
        icon: History,
        href: "/sejarah" 
      },
      { 
        label: { id: "Visi Digital", en: "Digital Vision" }, 
        description: { id: "Transformasi menuju Smart City.", en: "Transformation towards a Smart City." },
        icon: Smartphone,
        href: "/visi-digital" 
      },
    ],
  },
  {
    label: { id: "Warisan", en: "Heritage" },
    href: "#",
    children: [
      { 
        label: { id: "Budaya", en: "Culture" }, 
        description: { id: "Seni, adat, dan tradisi lokal.", en: "Local arts, customs, and traditions." },
        icon: Palette,
        href: "/budaya" 
      },
      { 
        label: { id: "Kuliner", en: "Culinary" }, 
        description: { id: "Cita rasa khas seribu sungai.", en: "Signature flavors of the thousand rivers." },
        icon: Utensils,
        href: "/kuliner" 
      },
    ],
  },
  {
    label: { id: "Wisata", en: "Tourism" },
    href: "#",
    children: [
      { 
        label: { id: "Destinasi Wisata", en: "Destinations" }, 
        description: { id: "Tempat menarik untuk dikunjungi.", en: "Interesting places to visit." },
        icon: Palmtree,
        href: "/wisata" 
      },
      { 
        label: { id: "Galeri", en: "Gallery" }, 
        description: { id: "Dokumentasi visual Banjarmasin.", en: "Visual documentation of Banjarmasin." },
        icon: Camera,
        href: "/galeri" 
      },
    ],
  },
  { label: { id: "Panduan", en: "Travel Guide" }, href: "/panduan" },
  { label: { id: "Kontak", en: "Contact" }, href: "/kontak" },
];
