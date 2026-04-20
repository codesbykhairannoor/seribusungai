# Requirements Document

## Introduction

Website pariwisata interaktif "Banjarmasin – Kota Seribu Sungai" adalah platform digital multi-halaman yang dibangun untuk kompetisi **Nusantara Digital City – Banjarmasin**. Website ini bukan sekadar portal informasi, melainkan sebuah pengalaman digital imersif yang membawa pengunjung "menjelajah Banjarmasin dari layar" — merasakan denyut kehidupan di atas sungai, kekayaan budaya Banjar, dan visi kota digital masa depan.

Dibangun dengan Next.js + React + Tailwind CSS, website ini menampilkan animasi sinematik, konten bilingual (Bahasa Indonesia & English), arsitektur berbasis komponen, dan internal linking yang terasa seperti sebuah perjalanan (journey), bukan sekadar navigasi.

Target audiens: wisatawan domestik & mancanegara, juri kompetisi, investor, dan masyarakat umum yang ingin mengenal Banjarmasin.

---

## Glossary

- **Website**: Platform web multi-halaman pariwisata Banjarmasin yang dibangun dalam proyek ini.
- **User**: Pengunjung website — wisatawan, juri kompetisi, investor, atau masyarakat umum.
- **Hero Section**: Bagian paling atas setiap halaman yang berfungsi sebagai first impression visual dan emosional.
- **Section**: Unit konten dalam satu halaman, terdiri dari judul, konten, elemen visual, dan interaksi UX.
- **CTA (Call-to-Action)**: Tombol atau tautan yang mengarahkan User ke halaman atau section lain.
- **Internal Link**: Tautan antar halaman dalam Website yang menciptakan alur perjalanan (journey).
- **Bilingual Content**: Konten yang tersedia dalam dua bahasa: Bahasa Indonesia dan English.
- **Animation_Engine**: Sistem animasi berbasis Framer Motion atau GSAP yang mengelola semua transisi dan efek visual.
- **Navigation_System**: Komponen navigasi global (header, footer, breadcrumb) yang tersedia di semua halaman.
- **Page_Router**: Sistem routing Next.js yang mengelola semua URL dan sub-halaman.
- **Component_Library**: Kumpulan komponen React yang dapat digunakan ulang di seluruh halaman.
- **Content_Manager**: Sistem pengelolaan konten yang memisahkan data dari presentasi.
- **Image_Optimizer**: Sistem optimasi gambar bawaan Next.js (next/image) untuk performa loading.
- **Pasar Terapung**: Pasar tradisional di atas sungai, ikon utama Banjarmasin.
- **Klotok**: Perahu kayu bermotor tradisional khas Banjarmasin.
- **Sasirangan**: Kain tenun tradisional khas Banjar dengan motif khas.
- **Sungai Martapura**: Sungai utama yang membelah kota Banjarmasin.

---

## Requirements

### Requirement 1: Arsitektur & Routing Multi-Halaman

**User Story:** As a User, I want to navigate between all pages of the website seamlessly, so that I can explore Banjarmasin's content as a continuous journey.

#### Acceptance Criteria

1. THE Page_Router SHALL provide routing for all 10 main pages: `/`, `/profil-kota`, `/sejarah`, `/budaya`, `/kuliner`, `/wisata`, `/panduan`, `/visi-digital`, `/galeri`, `/kontak`.
2. THE Page_Router SHALL provide routing for 5 destination sub-pages: `/wisata/pasar-terapung-lok-baintan`, `/wisata/menara-pandang-siring`, `/wisata/kampung-sasirangan`, `/wisata/masjid-sultan-suriansyah`, `/wisata/masjid-raya-sabilal-muhtadin`.
3. WHEN a User navigates to any valid URL, THE Page_Router SHALL render the corresponding page within 3 seconds on a standard broadband connection.
4. IF a User navigates to an undefined URL, THEN THE Page_Router SHALL redirect the User to a custom 404 page with a CTA kembali ke halaman utama.
5. THE Component_Library SHALL implement a shared layout wrapper that applies Navigation_System and footer to all pages consistently.

---

### Requirement 2: Sistem Navigasi Global

**User Story:** As a User, I want a clear and beautiful navigation system, so that I always know where I am and can move freely between sections of the website.

#### Acceptance Criteria

1. THE Navigation_System SHALL display a sticky header containing the website logo, main menu links to all 10 pages, and a language toggle (ID/EN) on every page.
2. WHEN a User scrolls down more than 80px on any page, THE Navigation_System SHALL transition the header background from transparent to a semi-opaque dark background with a smooth CSS transition of 300ms.
3. WHEN a User hovers over the "Destinasi Wisata" menu item, THE Navigation_System SHALL display a dropdown showing links to all 5 destination sub-pages.
4. THE Navigation_System SHALL display a footer on every page containing sitemap links, social media icons, copyright information, and a tagline "Banjarmasin – Kota Seribu Sungai".
5. WHEN a User is on a destination sub-page (`/wisata/*`), THE Navigation_System SHALL display a breadcrumb trail showing: Beranda > Destinasi Wisata > [Nama Destinasi].
6. THE Navigation_System SHALL be fully responsive, collapsing the main menu into a hamburger icon on viewport widths below 768px.
7. WHEN a User taps the hamburger icon on mobile, THE Navigation_System SHALL open a full-screen overlay menu with smooth slide-in animation of 400ms.

---

### Requirement 3: Sistem Konten Bilingual

**User Story:** As a User, I want to read all content in either Bahasa Indonesia or English, so that both domestic and international visitors can fully understand the website.

#### Acceptance Criteria

1. THE Content_Manager SHALL store all text content in both Bahasa Indonesia and English for every section across all 15 pages (10 main + 5 sub-pages).
2. WHEN a User clicks the language toggle, THE Website SHALL switch all visible text content to the selected language without a full page reload.
3. THE Content_Manager SHALL persist the User's language preference in localStorage so that the preference is maintained across page navigations within the same session.
4. THE Content_Manager SHALL default to Bahasa Indonesia when no language preference is stored.
5. WHILE a language switch is in progress, THE Animation_Engine SHALL apply a 200ms fade-out and fade-in transition to all text elements being replaced.

---

### Requirement 4: Sistem Animasi & Interaksi Visual

**User Story:** As a User, I want to experience rich animations and visual interactions, so that browsing the website feels like an immersive cinematic journey rather than reading a static page.

#### Acceptance Criteria

1. THE Animation_Engine SHALL implement scroll-triggered entrance animations (fade-in, slide-up, stagger) for all section content using Framer Motion or GSAP ScrollTrigger.
2. THE Animation_Engine SHALL implement parallax scrolling effects on all Hero Section background images, with a parallax depth factor between 0.3 and 0.5.
3. WHEN a User hovers over any card component (wisata card, kuliner card, galeri card), THE Animation_Engine SHALL apply a scale transform of 1.03 and a box-shadow elevation change with a transition duration of 250ms.
4. THE Animation_Engine SHALL implement smooth page transition animations (minimum: fade or slide) between all page navigations using Next.js layout transitions.
5. WHEN a User scrolls on the Home page hero section, THE Animation_Engine SHALL animate a floating klotok illustration or particle effect that responds to scroll position.
6. THE Animation_Engine SHALL respect the `prefers-reduced-motion` media query — WHEN this preference is set to "reduce", THE Animation_Engine SHALL disable all non-essential animations and transitions.

---

### Requirement 5: Halaman Home (/)

**User Story:** As a User, I want the Home page to immediately captivate me emotionally and give me a clear overview of everything Banjarmasin offers, so that I feel compelled to explore further.

#### Acceptance Criteria

1. THE Website SHALL render a Hero Section on the Home page featuring a full-viewport cinematic video background (or high-resolution parallax image) of Sungai Martapura at sunrise/sunset, with an animated headline in Bahasa Indonesia and English, and a primary CTA button "Mulai Perjalanan / Begin the Journey".
2. THE Website SHALL render a "Tentang Banjarmasin" section on the Home page containing a poetic introduction text (bilingual), key statistics (luas kota, jumlah sungai, populasi, tahun berdiri), and a subtle animated counter for each statistic.
3. THE Website SHALL render a "Destinasi Unggulan" section on the Home page displaying a horizontal scroll carousel or grid of minimum 5 destination cards, each with an image, destination name, short description (bilingual), and a CTA linking to the respective `/wisata/*` sub-page.
4. THE Website SHALL render a "Kekayaan Budaya" section on the Home page featuring a split-layout with a visual showcase of Sasirangan fabric, traditional music, and culinary items, with a CTA linking to `/budaya` and `/kuliner`.
5. THE Website SHALL render a "Cerita dari Sungai" section on the Home page containing a featured story or quote from a Banjarmasin local (bilingual), accompanied by a documentary-style photograph.
6. THE Website SHALL render a "Visi Digital Banjarmasin" section on the Home page with a brief overview of the Smart City vision, key digital initiatives, and a CTA linking to `/visi-digital`.
7. THE Website SHALL render a "Jelajahi Lebih Lanjut" section on the Home page displaying navigation cards linking to all 10 main pages with icons and short descriptions.
8. WHEN a User clicks the primary CTA "Mulai Perjalanan / Begin the Journey", THE Page_Router SHALL smoothly scroll to the "Tentang Banjarmasin" section using smooth scroll behavior.

---

### Requirement 6: Halaman Profil Kota (/profil-kota)

**User Story:** As a User, I want to understand Banjarmasin's identity through data and storytelling, so that I gain a deep appreciation for the city before visiting.

#### Acceptance Criteria

1. THE Website SHALL render a Hero Section on the Profil Kota page with a split-layout: left side showing an aerial drone photograph of Banjarmasin's river network, right side showing the city name with animated typography revealing letter by letter.
2. THE Website SHALL render a "Identitas Kota" section containing official city data: nama resmi, luas wilayah (98.46 km²), jumlah penduduk, koordinat geografis, dan julukan resmi "Kota Seribu Sungai" — presented in a visually designed data card layout.
3. THE Website SHALL render a "Geografi & Sungai" section with an illustrated or stylized map showing the major rivers (Sungai Martapura, Sungai Barito) and key landmarks, with interactive hover states revealing river names and facts.
4. THE Website SHALL render a "Pemerintahan & Infrastruktur" section covering struktur pemerintahan kota, infrastruktur transportasi (jembatan, klotok, jalan), dan fasilitas publik utama.
5. THE Website SHALL render a "Ekonomi & Potensi" section covering sektor ekonomi utama (perdagangan, pertambangan, pariwisata), UMKM, dan potensi investasi.
6. THE Website SHALL render a "Banjarmasin dalam Angka" section displaying key statistics in an animated infographic format (minimum 6 data points).
7. EACH section on the Profil Kota page SHALL include a CTA linking to at least one related page (e.g., Sejarah, Wisata, Visi Digital).

---

### Requirement 7: Halaman Sejarah (/sejarah)

**User Story:** As a User, I want to journey through Banjarmasin's history from its origins to the present, so that I understand the cultural roots that shape the city today.

#### Acceptance Criteria

1. THE Website SHALL render a Hero Section on the Sejarah page with a cinematic full-width image of historical Banjarmasin (old photographs or illustrated artwork), with a subtitle "Dari Muara ke Metropolis" (bilingual).
2. THE Website SHALL render a "Asal Usul Kota" section covering the founding of Banjarmasin, the role of the Banjar Sultanate, and the significance of rivers in the city's origin story.
3. THE Website SHALL render an interactive vertical timeline section covering minimum 8 key historical milestones from the 16th century to the present, where WHEN a User clicks a timeline node, THE Website SHALL expand a detail panel showing the event description, year, and a related image.
4. THE Website SHALL render a "Masa Kolonial & Perjuangan" section covering the Dutch colonial period, the role of Banjarmasin in the independence struggle, and key historical figures.
5. THE Website SHALL render a "Warisan Budaya Sungai" section explaining how river life has shaped Banjarmasin's culture, architecture, and social structure from historical times to today.
6. THE Website SHALL render a "Banjarmasin Hari Ini" section connecting historical context to the modern city, with a CTA to `/profil-kota` and `/visi-digital`.

---

### Requirement 8: Halaman Budaya & Tradisi (/budaya)

**User Story:** As a User, I want to explore the richness of Banjar culture and traditions, so that I feel a deep connection to the people and their way of life.

#### Acceptance Criteria

1. THE Website SHALL render a Hero Section on the Budaya page with a full-width video or parallax image of a traditional Banjar ceremony or Sasirangan weaving process.
2. THE Website SHALL render a "Kain Sasirangan" section with a visual gallery of Sasirangan patterns, the history and philosophy behind each motif, the traditional dyeing process, and a CTA to `/wisata/kampung-sasirangan`.
3. THE Website SHALL render a "Seni & Pertunjukan" section covering traditional Banjar performing arts: Mamanda theater, Madihin poetry, Hadrah music, and traditional dance — each with a description, image, and cultural significance.
4. THE Website SHALL render a "Filosofi Hidup Banjar" section exploring the values and philosophy of the Banjar people: gotong royong, hubungan dengan sungai, dan nilai-nilai Islam dalam kehidupan sehari-hari.
5. THE Website SHALL render a "Arsitektur Tradisional" section showcasing Rumah Banjar (traditional house) architecture with labeled diagrams or illustrated breakdowns of architectural elements.
6. THE Website SHALL render a "Upacara & Perayaan" section covering major Banjar ceremonies and festivals: Maulid Nabi, Baayun Maulid, Aruh Adat, and their cultural significance.
7. EACH cultural item card in the Budaya page SHALL display a title, image, short description (bilingual), and a "Pelajari Lebih" expand interaction revealing full content.

---

### Requirement 9: Halaman Kuliner (/kuliner)

**User Story:** As a User, I want to discover Banjarmasin's culinary heritage in a way that makes me crave the food and want to visit, so that culinary tourism becomes a key motivation for my trip.

#### Acceptance Criteria

1. THE Website SHALL render a Hero Section on the Kuliner page with a close-up cinematic food photography layout (soto banjar, ketupat kandangan, nasi kuning) with animated text "Cita Rasa Sungai" (bilingual).
2. THE Website SHALL render a "Kuliner Ikonik" section featuring minimum 8 signature Banjar dishes, each with: nama makanan, foto berkualitas tinggi, deskripsi rasa dan bahan (bilingual), dan lokasi terbaik untuk mencicipinya.
3. THE Website SHALL render a "Wisata Kuliner Pasar Terapung" section specifically about the food experience at Pasar Terapung, with a CTA to `/wisata/pasar-terapung-lok-baintan`.
4. THE Website SHALL render a "Minuman & Jajanan Tradisional" section covering traditional Banjar beverages and snacks: es kelapa muda, kue putu, wadai banjar, and others.
5. THE Website SHALL render a "Peta Kuliner Banjarmasin" section with a stylized illustrated map or list of recommended culinary spots organized by area/neighborhood.
6. THE Website SHALL render a "Resep & Cerita" section featuring one featured recipe with step-by-step instructions (bilingual) and a personal story from a local cook or food vendor.

---

### Requirement 10: Halaman Destinasi Wisata (/wisata)

**User Story:** As a User, I want to see all of Banjarmasin's top tourist destinations in one place, so that I can plan which places to visit and feel excited about each one.

#### Acceptance Criteria

1. THE Website SHALL render a Hero Section on the Wisata page with a horizontal scroll cinematic layout or full-width parallax image showcasing multiple destinations simultaneously.
2. THE Website SHALL render a destination grid/card section displaying all 5 main destinations with: nama destinasi, foto hero, kategori (alam/budaya/religi/kuliner), deskripsi singkat (bilingual), jam operasional, dan CTA ke sub-halaman masing-masing.
3. THE Website SHALL render a "Tips Berkunjung" section with general visitor tips: waktu terbaik berkunjung, transportasi, etika berkunjung, dan perkiraan biaya.
4. THE Website SHALL render a "Peta Destinasi" section with a stylized illustrated map of Banjarmasin showing the location of all 5 destinations with clickable markers.
5. WHEN a User clicks a destination marker on the map, THE Website SHALL display a tooltip or side panel with the destination name, thumbnail image, and a CTA to the destination sub-page.
6. THE Website SHALL render a "Paket Wisata Rekomendasi" section suggesting 2–3 curated itinerary packages (1 hari, 2 hari, wisata religi) with a list of destinations included in each package.

---

### Requirement 11: Sub-Halaman Destinasi Wisata (/wisata/*)

**User Story:** As a User, I want a dedicated, immersive page for each tourist destination, so that I can deeply explore each place before deciding to visit.

#### Acceptance Criteria

1. THE Website SHALL render a dedicated page for each of the 5 destinations: Pasar Terapung Lok Baintan, Menara Pandang Siring, Kampung Sasirangan, Masjid Sultan Suriansyah, and Masjid Raya Sabilal Muhtadin.
2. EACH destination sub-page SHALL render a Hero Section with a full-viewport high-resolution photograph of the destination, the destination name in large animated typography, and a tagline (bilingual).
3. EACH destination sub-page SHALL render a "Tentang [Nama Destinasi]" section with a detailed description (minimum 200 words bilingual), historical background, and cultural significance.
4. EACH destination sub-page SHALL render a photo gallery section with minimum 6 high-quality images displayed in a masonry or lightbox grid layout.
5. WHEN a User clicks an image in the gallery, THE Website SHALL open a full-screen lightbox with navigation arrows to browse all gallery images.
6. EACH destination sub-page SHALL render a "Informasi Praktis" section containing: alamat lengkap, jam operasional, harga tiket masuk (jika ada), tips berkunjung, dan cara menuju lokasi.
7. EACH destination sub-page SHALL render a "Destinasi Terdekat" section with cards linking to the other 4 destination sub-pages, creating a circular journey experience.
8. EACH destination sub-page SHALL render a breadcrumb navigation as specified in Requirement 2, Criterion 5.

---

### Requirement 12: Halaman Panduan Wisata (/panduan)

**User Story:** As a User, I want a comprehensive travel guide for Banjarmasin, so that I can plan my trip with confidence and make the most of my visit.

#### Acceptance Criteria

1. THE Website SHALL render a Hero Section on the Panduan page with an illustrated or photographic layout showing a traveler on a klotok, with the headline "Panduan Lengkap Menjelajah Banjarmasin" (bilingual).
2. THE Website SHALL render a "Cara Menuju Banjarmasin" section covering transportation options: penerbangan ke Bandara Syamsudin Noor, transportasi darat, dan transportasi sungai (klotok).
3. THE Website SHALL render a "Transportasi Lokal" section covering local transportation options: klotok, ojek, taksi online, dan angkutan kota — with estimated costs and tips.
4. THE Website SHALL render a "Akomodasi" section with categories of accommodation (hotel bintang, homestay, penginapan budget) and recommended areas to stay.
5. THE Website SHALL render a "Itinerary Rekomendasi" section with minimum 3 sample itineraries (1 hari, 2 hari, 3 hari) presented in a visual timeline or step-by-step card format.
6. THE Website SHALL render a "Tips & Etika Wisata" section covering cultural etiquette, dress code for religious sites, best times to visit, and safety tips.
7. EACH itinerary in the Panduan page SHALL include internal links to the relevant destination sub-pages for each activity listed.

---

### Requirement 13: Halaman Visi Digital & Potensi (/visi-digital)

**User Story:** As a User (especially competition judges and investors), I want to understand Banjarmasin's digital transformation vision and economic potential, so that I see the city as a forward-thinking Smart City.

#### Acceptance Criteria

1. THE Website SHALL render a Hero Section on the Visi Digital page with a futuristic split-layout: left side showing a modern aerial city view, right side showing animated data visualizations or digital grid overlays.
2. THE Website SHALL render a "Smart City Banjarmasin" section covering the city's digital transformation roadmap, key smart city initiatives (smart transportation, smart environment, smart governance), and progress indicators.
3. THE Website SHALL render a "Ekonomi Digital" section covering the growth of digital economy in Banjarmasin: e-commerce, fintech adoption, digital UMKM, and startup ecosystem.
4. THE Website SHALL render a "Potensi Investasi" section highlighting key investment sectors: pariwisata, teknologi, infrastruktur, dan ekonomi kreatif — with supporting data and statistics.
5. THE Website SHALL render a "Infrastruktur Digital" section covering internet connectivity, digital public services, and technology infrastructure development.
6. THE Website SHALL render a "Masa Depan Banjarmasin" section with a visionary narrative about the city's 2030 goals, presented with animated data counters and forward-looking statistics.
7. EACH statistic displayed on the Visi Digital page SHALL be accompanied by a source citation (nama lembaga/tahun) displayed as a small footnote.

---

### Requirement 14: Halaman Galeri & Cerita (/galeri)

**User Story:** As a User, I want to experience Banjarmasin through visual storytelling and human stories, so that I feel an emotional connection to the city and its people.

#### Acceptance Criteria

1. THE Website SHALL render a Hero Section on the Galeri page with a full-viewport masonry photo collage that animates into place on page load using staggered entrance animations.
2. THE Website SHALL render a "Galeri Foto" section with a filterable photo gallery (minimum 20 images) organized by categories: Sungai & Alam, Budaya & Tradisi, Kuliner, Arsitektur, Kehidupan Sehari-hari.
3. WHEN a User clicks a filter category, THE Website SHALL filter the gallery to show only images in that category with a smooth transition animation of 300ms.
4. THE Website SHALL render a "Cerita dari Warga" section featuring minimum 3 personal stories from Banjarmasin residents (nelayan, pedagang pasar terapung, pengrajin sasirangan) — each with a portrait photograph, name, occupation, and their story in bilingual text.
5. THE Website SHALL render a "Video Dokumenter" section embedding minimum 1 short documentary video (YouTube embed or self-hosted) about life in Banjarmasin.
6. WHEN a User clicks any image in the Galeri Foto section, THE Website SHALL open a full-screen lightbox displaying the image with its caption, photographer credit, and navigation to adjacent images.

---

### Requirement 15: Halaman Kontak & Informasi (/kontak)

**User Story:** As a User, I want to easily find contact information and reach out for more information about visiting Banjarmasin, so that I can get help planning my trip.

#### Acceptance Criteria

1. THE Website SHALL render a Hero Section on the Kontak page with a warm, inviting layout featuring a photograph of Banjarmasin's waterfront at golden hour and the headline "Kami Siap Membantu Perjalanan Anda" (bilingual).
2. THE Website SHALL render a "Informasi Kontak" section displaying: alamat kantor Dinas Pariwisata Banjarmasin, nomor telepon, alamat email, dan jam operasional kantor.
3. THE Website SHALL render a contact form section with fields: Nama Lengkap, Email, Subjek (dropdown: Informasi Wisata / Kerjasama / Lainnya), dan Pesan — with client-side validation.
4. WHEN a User submits the contact form with all required fields filled correctly, THE Website SHALL display a success confirmation message in the User's selected language.
5. IF a User submits the contact form with one or more required fields empty or with an invalid email format, THEN THE Website SHALL display inline validation error messages next to the relevant fields without submitting the form.
6. THE Website SHALL render a "Media Sosial" section with links to official Banjarmasin tourism social media accounts (Instagram, Facebook, YouTube, TikTok) displayed as styled icon cards.
7. THE Website SHALL render a "FAQ" section with minimum 5 frequently asked questions about visiting Banjarmasin, displayed in an accordion expand/collapse format.
8. WHEN a User clicks an FAQ item, THE Website SHALL expand the answer with a smooth height animation of 300ms, and collapse any previously open FAQ item.

---

### Requirement 16: Performa & Optimasi

**User Story:** As a User, I want the website to load fast and perform smoothly on all devices, so that I have a seamless experience regardless of my connection speed or device.

#### Acceptance Criteria

1. THE Image_Optimizer SHALL serve all images using Next.js `next/image` component with automatic WebP conversion, lazy loading, and responsive `srcSet` for all viewport sizes.
2. THE Website SHALL achieve a Lighthouse Performance score of minimum 80 on desktop and minimum 70 on mobile for the Home page.
3. THE Website SHALL achieve a Lighthouse Accessibility score of minimum 90 on all pages.
4. THE Website SHALL be fully responsive and render correctly on viewport widths: 320px (mobile), 768px (tablet), 1024px (laptop), and 1440px (desktop).
5. THE Website SHALL implement Next.js Static Site Generation (SSG) or Incremental Static Regeneration (ISR) for all pages to minimize server response time.
6. THE Component_Library SHALL implement code splitting at the page level using Next.js dynamic imports so that each page only loads its required JavaScript bundle.

---

### Requirement 17: Aksesibilitas & SEO

**User Story:** As a User with accessibility needs, I want the website to be usable with assistive technologies, so that everyone can experience Banjarmasin's story regardless of ability.

#### Acceptance Criteria

1. THE Website SHALL include descriptive `alt` text for all images in both Bahasa Indonesia and English, matching the active language setting.
2. THE Website SHALL implement semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) on all pages.
3. THE Website SHALL ensure all interactive elements (buttons, links, form fields) have a visible focus indicator with a minimum contrast ratio of 3:1 against the background.
4. THE Website SHALL implement Open Graph meta tags (`og:title`, `og:description`, `og:image`) and Twitter Card meta tags on all 15 pages for social media sharing.
5. THE Website SHALL implement structured data (JSON-LD) for TouristAttraction schema on all 5 destination sub-pages.
6. THE Website SHALL implement a `sitemap.xml` and `robots.txt` file for search engine indexing.
7. EACH page SHALL have a unique `<title>` tag and `<meta name="description">` tag in the active language.

---

### Requirement 18: Component Library & Design System

**User Story:** As a developer, I want a consistent and reusable component library, so that the website maintains visual consistency and development is efficient.

#### Acceptance Criteria

1. THE Component_Library SHALL define a design token system in Tailwind CSS configuration including: color palette (primary, secondary, accent, neutral), typography scale (font families, sizes, weights), spacing scale, and border radius values.
2. THE Component_Library SHALL implement the following reusable components: `HeroSection`, `SectionWrapper`, `DestinationCard`, `CulinaryCard`, `GalleryGrid`, `Lightbox`, `Timeline`, `Accordion`, `ContactForm`, `LanguageToggle`, `Breadcrumb`, `NavigationBar`, `Footer`.
3. THE Component_Library SHALL use a consistent color palette reflecting Banjarmasin's identity: deep river blue (`#1B3A5C`), warm gold (`#C9A84C`), earth terracotta (`#8B4513`), and clean white (`#F8F5F0`) as primary design tokens.
4. THE Component_Library SHALL implement a consistent typography system using a serif font for headings (e.g., Playfair Display or Cormorant Garamond) and a sans-serif font for body text (e.g., Inter or Plus Jakarta Sans).
5. EACH component in the Component_Library SHALL accept both Bahasa Indonesia and English content props to support the bilingual system.
