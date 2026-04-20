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
import { Play, Quote } from "lucide-react";

const ALL_IMAGES = [
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin.jpg", alt: { id: "Pasar Terapung Lok Baintan", en: "Lok Baintan Floating Market" }, width: 1200, height: 800, cat: "sungai" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Taman_Siring_Banjarmasin.jpg", alt: { id: "Siring Martapura", en: "Martapura Siring" }, width: 1200, height: 800, cat: "arsitektur" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Peserta_Karnaval_FBPT_2018_001.JPG", alt: { id: "Kain Sasirangan", en: "Sasirangan Cloth" }, width: 1200, height: 800, cat: "budaya" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi_Kuning_Banjar_001.jpg", alt: { id: "Kuliner Banjar", en: "Banjar Culinary" }, width: 1200, height: 800, cat: "kuliner" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura.jpg", alt: { id: "Alam Kalimantan", en: "Kalimantan Nature" }, width: 1200, height: 800, cat: "sungai" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Rumah_Adat_Bubungan_Tinggi_Banjarmasin.jpg", alt: { id: "Masakan Tradisional", en: "Traditional Cuisine" }, width: 1200, height: 800, cat: "budaya" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mi_Habang.jpg", alt: { id: "Nasi Kuning Banjar", en: "Banjar Yellow Rice" }, width: 1200, height: 800, cat: "kuliner" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Buras_Banjar_1.jpg", alt: { id: "Sup Tradisional", en: "Traditional Soup" }, width: 1200, height: 800, cat: "kuliner" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Berenteng.jpg", alt: { id: "Ikan Bakar", en: "Grilled Fish" }, width: 1200, height: 800, cat: "sungai" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sanggar_Seni_Galuh_Banjar_1.jpg", alt: { id: "Kue Tradisional", en: "Traditional Cake" }, width: 1200, height: 800, cat: "budaya" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Iwak_Karing_Kalakai_Masak_Kuning_Sambal_Ramania.jpg", alt: { id: "Makanan Khas", en: "Local Food" }, width: 1200, height: 800, cat: "kuliner" },
  { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kampung_Biru_Banjarmasin.jpg", alt: { id: "Kue Manis", en: "Sweet Cake" }, width: 1200, height: 800, cat: "arsitektur" },
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
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pedagang_di_Pasar_Apung_(1).jpg",
      quote: {
        id: "Sungai adalah rumah kami. Di sini kami bekerja, bersosialisasi, dan menjaga tradisi leluhur agar tidak hilang ditelan zaman.",
        en: "The river is our home. Here we work, socialize, and preserve our ancestral traditions so they aren't lost to time.",
      },
    },
    {
      name: "Acil Aminah",
      role: { id: "Pengrajin Sasirangan", en: "Sasirangan Artisan" },
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pedagang_di_Pasar_Apung_(2).jpg",
      quote: {
        id: "Setiap motif Sasirangan yang saya buat adalah doa untuk pemakainya. Saya bangga budaya ini kini dikenal dunia.",
        en: "Every Sasirangan motif I create is a prayer for the wearer. I'm proud this culture is now known to the world.",
      },
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />

      <PageTransitionWrapper>
        {/* ── Cinematic Header ── */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          {/* Background collage */}
          <div className="absolute inset-0 grid grid-cols-3">
            {[
              "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin.jpg",
              "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin_2.jpg",
              "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin_3.jpg",
            ].map((src, i) => (
              <div key={i} className="overflow-hidden">
                <motion.img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-river-blue/60 via-river-blue/50 to-river-blue/90" />

          <div className="relative z-10 container mx-auto px-4 pb-20 pt-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-warm-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                {t({ id: "Galeri Visual", en: "Visual Gallery" })}
              </span>
              <h1 className="text-white font-heading text-5xl md:text-7xl font-bold mb-4 leading-tight">
                {t({ id: "Lensa Banjarmasin", en: "Banjarmasin Lens" })}
              </h1>
              <p className="text-white/60 text-xl font-body max-w-xl">
                {t({ id: "Menangkap setiap detak jantung kota melalui visual dan cerita.", en: "Capturing every heartbeat of the city through visuals and stories." })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Filterable Gallery ── */}
        <SectionWrapper background="white">
          {/* Filter pills */}
          <FadeInView>
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeFilter === cat.id
                      ? "bg-warm-gold text-white shadow-lg shadow-warm-gold/20 scale-105"
                      : "bg-river-blue-50 text-river-blue hover:bg-river-blue-100"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <GalleryGrid images={filtered} />
            </motion.div>
          </AnimatePresence>
        </SectionWrapper>

        {/* ── Stories from Locals ── */}
        <SectionWrapper background="light">
          <div className="text-center mb-16">
            <FadeInView>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-river-blue mb-5">
                {t({ id: "Cerita dari Sungai", en: "Stories from the River" })}
              </h2>
              <div className="h-1 w-16 bg-warm-gold mx-auto rounded-full" />
            </FadeInView>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {stories.map((story, i) => (
              <FadeInView key={i} direction={i % 2 === 0 ? "right" : "left"}>
                <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm flex flex-col md:flex-row gap-8 items-center border border-river-blue/5 hover:shadow-xl transition-all duration-400">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden shrink-0 shadow-xl">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <Quote className="text-warm-gold opacity-25 mb-3" size={36} />
                    <p className="text-lg md:text-xl font-heading italic text-river-blue mb-5 leading-relaxed">
                      "{t(story.quote)}"
                    </p>
                    <div className="font-bold text-river-blue">{story.name}</div>
                    <div className="text-[10px] uppercase tracking-widest text-warm-gold font-bold mt-1">
                      {t(story.role)}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </SectionWrapper>

        {/* ── Documentary Video ── */}
        <SectionWrapper background="white">
          <FadeInView>
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video rounded-[40px] overflow-hidden group shadow-2xl cursor-pointer">
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin.jpg"
                  alt="Documentary cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-river-blue/50 group-hover:bg-river-blue/40 transition-colors" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-20 h-20 bg-warm-gold text-white rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-warm-gold rounded-full animate-ping opacity-30" />
                    <Play fill="currentColor" size={28} className="ml-1" />
                  </motion.button>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">
                    Banjarmasin: The Soul of the River
                  </h3>
                  <p className="text-white/50 font-body uppercase tracking-[0.2em] text-xs">
                    Full Documentary 2026
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>
        </SectionWrapper>
      </PageTransitionWrapper>

      <Footer />
    </main>
  );
}
