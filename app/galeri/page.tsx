"use client";

import React, { useState } from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, Camera, Sparkles } from "lucide-react";
import Image from "next/image";

const ALL_IMAGES = [
  // Sungai & Alam
  { src: "/images/budaya/Pasar_terapung_Banjarmasin_7.jpg", alt: { id: "Pasar Terapung Lok Baintan", en: "Lok Baintan Floating Market" }, width: 1200, height: 800, cat: "sungai" },
  { src: "/images/wisata/Taman_Siring_Banjarmasin.jpg", alt: { id: "Siring Martapura", en: "Martapura Siring" }, width: 1200, height: 800, cat: "sungai" },
  { src: "/images/profilkota/Sunrise_on_the_Martapura_river.jpg", alt: { id: "Senja di Martapura", en: "Sunset at Martapura" }, width: 1200, height: 800, cat: "sungai" },
  
  // Budaya & Tradisi
  { src: "/images/budaya/Kain_Sasirangan_di_Kampung_Sasirangan_Banjarmasin.jpg", alt: { id: "Kain Sasirangan", en: "Sasirangan Cloth" }, width: 1200, height: 800, cat: "budaya" },
  { src: "/images/budaya/Peserta_Karnaval_FBPT_2018_001.JPG", alt: { id: "Karnaval Budaya", en: "Cultural Carnival" }, width: 1200, height: 800, cat: "budaya" },
  { src: "/images/budaya/Tari_Japin_Sigam_1.jpg", alt: { id: "Tari Japin", en: "Japin Dance" }, width: 1200, height: 800, cat: "budaya" },
  { src: "/images/budaya/Baksa_Kembang_welcome_dance,_Aria_Barito_Hotel,_Banjarmasin_2018-07-27_01.jpg", alt: { id: "Baksa Kembang", en: "Baksa Kembang" }, width: 1200, height: 800, cat: "budaya" },

  // Kuliner
  { src: "/images/kuliner/Soto_banjar,_Pak_Ahmat,_Martapura,_South_Kalimantan,_2018-07-28_02.jpg", alt: { id: "Soto Banjar", en: "Soto Banjar" }, width: 1200, height: 800, cat: "kuliner" },
  { src: "/images/kuliner/1920px-Katupat_Kandangan_in_Kandangan.jpg", alt: { id: "Ketupat Kandangan", en: "Ketupat Kandangan" }, width: 1200, height: 800, cat: "kuliner" },

  // Arsitektur & Landmark
  { src: "/images/budaya/Menara_Pandang_Banjarmasin_001.jpg", alt: { id: "Menara Pandang", en: "Observation Tower" }, width: 1200, height: 800, cat: "arsitektur" },
  { src: "/images/wisata/Masjid_Raya_Sabilal_Muhtadin_3.jpg", alt: { id: "Masjid Raya", en: "Great Mosque" }, width: 1200, height: 800, cat: "arsitektur" },
  { src: "/images/wisata/Jembatan_Sei_Alalak,_Banjarmasin.jpg", alt: { id: "Jembatan Alalak", en: "Alalak Bridge" }, width: 1200, height: 800, cat: "arsitektur" },
  { src: "/images/wisata/Tugu_Pal_Nol_Banjarmasin.jpg", alt: { id: "Tugu Nol Kilometer", en: "Zero Kilometer Column" }, width: 1200, height: 800, cat: "arsitektur" },
];

export default function Galeri() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all",       label: { id: "Semua",           en: "All" } },
    { id: "sungai",    label: { id: "Sungai & Alam",   en: "River & Nature" } },
    { id: "budaya",    label: { id: "Budaya & Tradisi", en: "Culture & Tradition" } },
    { id: "kuliner",   label: { id: "Kuliner",          en: "Culinary" } },
    { id: "arsitektur",label: { id: "Arsitektur",       en: "Architecture" } },
  ];

  const filtered = activeFilter === "all"
    ? ALL_IMAGES
    : ALL_IMAGES.filter((img) => img.cat === activeFilter);

  const stories = [
    {
      name: "Abah Iyan",
      role: { id: "Pedagang Pasar Terapung", en: "Floating Market Trader" },
      image: "/images/profilkota/Jukung_Pasar_Terapung.jpg",
      quote: {
        id: "Sungai adalah rumah kami. Di sini kami bekerja, bersosialisasi, dan menjaga tradisi leluhur agar tidak hilang ditelan zaman.",
        en: "The river is our home. Here we work, socialize, and preserve our ancestral traditions so they aren't lost to time.",
      },
    },
    {
      name: "Acil Aminah",
      role: { id: "Pengrajin Sasirangan", en: "Sasirangan Artisan" },
      image: "/images/budaya/Kain_Sasirangan_di_Kampung_Sasirangan_Banjarmasin.jpg",
      quote: {
        id: "Setiap motif Sasirangan yang saya buat adalah doa untuk pemakainya. Saya bangga budaya ini kini dikenal dunia.",
        en: "Every Sasirangan motif I create is a prayer for the wearer. I'm proud this culture is now known to the world.",
      },
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <NavigationBar />

      <PageTransitionWrapper>
        {/* ── Cinematic Header: 3-Panel Background ── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-river-blue">
          {/* Background grid */}
          <div className="absolute inset-0 grid grid-cols-3 gap-1 p-1 opacity-50">
            {[
              "/images/budaya/Pasar_terapung_Banjarmasin_7.jpg",
              "/images/wisata/Jembatan_Sei_Alalak,_Banjarmasin.jpg",
              "/images/wisata/Masjid_Raya_Sabilal_Muhtadin_3.jpg",
            ].map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <motion.div
                   initial={{ scale: 1.2 }}
                   animate={{ scale: 1 }}
                   transition={{ duration: 2, ease: "easeOut" }}
                   className="w-full h-full"
                >
                   <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover brightness-50"
                   />
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-river-blue via-river-blue/20 to-transparent z-10" />

          <div className="relative z-20 container mx-auto px-6 pb-24 pt-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-warm-gold font-black text-[10px] uppercase tracking-[0.4em] mb-6">
                <Camera size={14} />
                {t({ id: "Galeri Visual", en: "Visual Gallery" })}
              </div>
              <h1 className="text-white font-heading text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                {t({ id: "Lensa Banjarmasin.", en: "Banjarmasin Lens." })}
              </h1>
              <p className="text-white/60 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                {t({ id: "Menangkap setiap detak jantung kota melalui visual dan cerita.", en: "Capturing every heartbeat of the city through visuals and stories." })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Filterable Gallery ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Filter pills */}
            <FadeInView>
              <div className="flex flex-wrap gap-4 mb-20 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 border ${
                      activeFilter === cat.id
                        ? "bg-river-blue text-white border-river-blue shadow-xl scale-105"
                        : "bg-white text-river-blue/40 border-slate-100 hover:border-river-blue/20"
                    }`}
                  >
                    {t(cat.label)}
                  </button>
                ))}
              </div>
            </FadeInView>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <GalleryGrid images={filtered} />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── Stories from Locals ── */}
        <SectionWrapper background="light" className="py-40">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24 max-w-2xl mx-auto">
                <FadeInView>
                  <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Voices of Martapura</span>
                  <h2 className="text-4xl md:text-6xl font-black text-river-blue tracking-tighter leading-tight">
                    {t({ id: "Cerita dari Sungai.", en: "Stories from the River." })}
                  </h2>
                </FadeInView>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {stories.map((story, i) => (
                  <FadeInView key={i} direction={i % 2 === 0 ? "right" : "left"}>
                    <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm flex flex-col md:flex-row gap-10 items-center border border-slate-100 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-700">
                      <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] overflow-hidden shrink-0 shadow-premium-soft">
                        <Image
                          src={story.image}
                          alt={story.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                      </div>
                      <div>
                        <Quote className="text-warm-gold opacity-30 mb-6" size={48} />
                        <p className="text-lg md:text-xl font-heading italic text-river-blue mb-8 leading-relaxed font-medium">
                          "{t(story.quote)}"
                        </p>
                        <div className="font-black text-river-blue text-lg tracking-tight">{story.name}</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-warm-gold font-black mt-2">
                          {t(story.role)}
                        </div>
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
           </div>
        </SectionWrapper>

        {/* ── Documentary Video ── */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInView>
              <div className="max-w-5xl mx-auto">
                <div className="relative aspect-video rounded-[3.5rem] overflow-hidden group shadow-premium-deep cursor-pointer">
                  <Image
                    src="/images/wisata/Jembatan_Sei_Alalak,_Banjarmasin.jpg"
                    alt="Documentary cover"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-river-blue/40 group-hover:bg-river-blue/20 transition-colors duration-700" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative w-24 h-24 bg-warm-gold text-river-blue rounded-full flex items-center justify-center shadow-premium-glow"
                    >
                      <div className="absolute inset-0 bg-warm-gold rounded-full animate-ping opacity-20" />
                      <Play fill="currentColor" size={28} className="ml-1" />
                    </motion.button>
                  </div>

                  <div className="absolute bottom-12 left-12 right-12 z-20">
                     <span className="text-warm-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Original Production</span>
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2">
                       Banjarmasin: The Soul of the River
                    </h3>
                    <p className="text-white/50 font-black uppercase tracking-[0.3em] text-[10px]">
                      Full Documentary Cinematic Experience
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>
      </PageTransitionWrapper>

      <Footer />
    </main>
  );
}
