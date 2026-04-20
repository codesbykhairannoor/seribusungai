"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Navigation, Cloud } from "lucide-react";

const PANELS = [
  {
    src: "https://commons.wikimedia.org/w/thumb.php?f=Jukung_Pasar_Terapung.jpg&w=1200",
    label: "Pasar Terapung",
    num: "01",
    flex: "flex-1",
    anim: { x: -60 },
  },
  {
    src: "https://commons.wikimedia.org/w/thumb.php?f=Menara_Pandang_Banjarmasin.JPG&w=1200",
    label: "Menara Pandang",
    num: "02",
    flex: "flex-[1.2]",
    anim: { y: -40 },
  },
  {
    src: "https://commons.wikimedia.org/w/thumb.php?f=Sunrise_on_the_Martapura_river.jpg&w=1200",
    label: "Sungai Martapura",
    num: "03",
    flex: "flex-1",
    anim: { x: 60 },
  },
];

export default function ProfilKota() {
  const { t } = useLanguage();
  const [loadedCount, setLoadedCount] = useState(0);
  const isHeroReady = loadedCount >= 3;

  const handleImageLoad = () => setLoadedCount(prev => prev + 1);

  const cityData = [
    { label: { id: "Nama Resmi", en: "Official Name" }, value: "Kota Banjarmasin", icon: MapPin, bg: "bg-river-blue text-white", size: "col-span-2 md:col-span-1" },
    { label: { id: "Luas Wilayah", en: "Total Area" }, value: "98.46 km²", icon: Navigation, bg: "bg-warm-gold/10", size: "col-span-1" },
    { label: { id: "Koordinat", en: "Coordinates" }, value: "3°19'S 114°35'E", icon: Navigation, bg: "bg-river-blue-50", size: "col-span-1" },
    { label: { id: "Julukan", en: "Nickname" }, value: "Kota Seribu Sungai", icon: Cloud, bg: "bg-warm-gold text-white", size: "col-span-2 md:col-span-1" },
  ];

  const statsData = [
    { label: { id: "Kecamatan", en: "Districts" }, value: 5, suffix: "" },
    { label: { id: "Kelurahan", en: "Subdistricts" }, value: 52, suffix: "" },
    { label: { id: "Sungai Aktif", en: "Active Rivers" }, value: 102, suffix: "" },
    { label: { id: "IPM", en: "HDI" }, value: 77, suffix: ".48" },
    { label: { id: "Kemiskinan", en: "Poverty" }, value: 4, suffix: "%" },
    { label: { id: "Tahun Berdiri", en: "Established" }, value: 1526, suffix: "" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>

        {/* ── HERO: Inlined 3 Panel ── */}
        <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#050a14]">
          <div className="absolute inset-0 flex gap-1 sm:gap-2 p-1 sm:p-2 opacity-80 z-0">
            {PANELS.map((p, i) => (
              <motion.div
                key={i}
                className={`relative ${p.flex} rounded-xl sm:rounded-2xl overflow-hidden bg-black/40`}
                style={{ willChange: "transform, opacity" }}
                initial={{ opacity: 0, ...p.anim }}
                animate={isHeroReady ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 1.0, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="relative w-full h-full"
                  initial={{ scale: 1.15 }}
                  animate={isHeroReady ? { scale: 1 } : {}}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                  style={{ willChange: "transform" }}
                >
                  <Image
                    src={p.src}
                    alt={p.label}
                    fill
                    priority
                    className="object-cover grayscale-[0.2] contrast-[1.1] brightness-[0.55]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onLoad={handleImageLoad}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHeroReady ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="absolute bottom-6 left-6 z-10 hidden sm:block"
                >
                  <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em] block mb-1 opacity-70">
                    {p.num}
                  </span>
                  <span className="text-white/60 text-xs font-medium tracking-wide">
                    {p.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,10,20,0.85)_100%)]" />

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isHeroReady ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex items-center gap-4 mb-8 md:mb-12"
            >
              <div className="h-px w-10 bg-white/20" />
              <span className="text-white font-heading font-medium uppercase tracking-[0.5em] text-xs md:text-sm">
                {t({ id: "Profil Kota", en: "City Profile" })}
              </span>
              <div className="h-px w-10 bg-white/20" />
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 blur-[40px] bg-warm-gold/20 pointer-events-none select-none translate-z-0" />
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="font-heading font-black text-center leading-none select-none whitespace-nowrap"
                style={{
                  fontSize: "clamp(2.5rem, 8.5vw, 8.5rem)",
                  background: "linear-gradient(to bottom, #ffffff 0%, #f0f0f0 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.5))",
                  willChange: "transform, opacity"
                }}
              >
                Kota Seribu Sungai
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-8 md:mt-12"
            >
              <span className="text-white font-body font-light uppercase tracking-[0.6em] text-[10px] md:text-xs">
                Banjarmasin, Kalimantan Selatan
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex items-center gap-8 md:gap-16 mt-12 md:mt-20 px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
            >
              {[
                { value: "1526", label: { id: "Berdiri", en: "Est." } },
                { value: "102", label: { id: "Sungai", en: "Rivers" } },
                { value: "681k", label: { id: "Penduduk", en: "Population" } },
              ].map((stat, i) => (
                <div key={i} className="text-center translate-z-0">
                  <div className="text-white font-heading font-bold text-lg md:text-2xl leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                    {t(stat.label)}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroReady ? { opacity: 1 } : {}}
            transition={{ delay: 2.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
          >
            <span className="text-white/20 text-[9px] uppercase tracking-[0.5em] font-bold">Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-10 bg-gradient-to-b from-warm-gold to-transparent"
            />
          </motion.div>
        </section>

        {/* ── BENTO IDENTITY GRID ── */}
        <section className="py-20 md:py-28 bg-clean-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue mb-3">
                {t({ id: "Identitas Kota", en: "City Identity" })}
              </h2>
              <p className="text-river-blue/50 max-w-xl font-body">
                {t({ id: "Mengenal lebih dekat jati diri dan karakteristik utama kota gerbang Kalimantan Selatan.", en: "Getting closer to the identity of the main gateway city of South Kalimantan." })}
              </p>
            </FadeInView>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <FadeInView direction="left" className="col-span-2 md:col-span-1 md:row-span-2">
                <div className="relative h-full min-h-[280px] rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    src="https://commons.wikimedia.org/w/thumb.php?f=Sungai_Martapura.jpg&w=1000"
                    alt="Banjarmasin river"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <div className="text-warm-gold text-5xl font-heading font-bold">102</div>
                    <div className="text-white text-xs font-bold uppercase tracking-widest mt-1">
                      {t({ id: "Aliran Sungai", en: "River Streams" })}
                    </div>
                  </div>
                </div>
              </FadeInView>

              {cityData.map((item, i) => (
                <FadeInView key={i} delay={i * 0.08}>
                  <div className={`${item.bg} rounded-3xl p-6 h-full min-h-[120px] flex flex-col justify-between group hover:scale-[1.02] transition-transform`}>
                    <item.icon size={22} className="opacity-60 mb-3" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold mb-1">{t(item.label)}</div>
                      <div className="font-heading font-bold text-lg leading-tight">{item.value}</div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ── GEOGRAPHY ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <FadeInView direction="right" className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://commons.wikimedia.org/w/thumb.php?f=Sungai_Martapura_di_Pagi_Hari_(1).jpg&w=1000"
                    alt="River delta"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/60 to-transparent" />
                </div>
              </FadeInView>
              <FadeInView direction="left" className="lg:col-span-7 lg:pt-8">
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">
                  {t({ id: "Geografi & Sungai", en: "Geography & Rivers" })}
                </span>
                <blockquote className="text-3xl md:text-4xl font-heading font-bold text-river-blue mb-8 leading-tight border-l-4 border-warm-gold pl-6">
                  {t({ id: "Wilayah Delta yang Dinamis", en: "A Dynamic Delta Region" })}
                </blockquote>
                <p className="text-lg text-river-blue/65 font-body leading-relaxed mb-8">
                  {t({ id: "Banjarmasin terletak di confluence (pertemuan) Sungai Martapura dan Sungai Barito. Lokasinya yang berada di bawah permukaan laut menjadikan sistem drainase alami berupa 102 sungai kecil sangat krusial bagi kehidupan kota.", en: "Banjarmasin is located at the confluence of the Martapura and Barito Rivers. Its location below sea level makes the natural drainage system of 102 small rivers crucial for city life." })}
                </p>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── STATS SECTION ── */}
        <SectionWrapper background="dark">
          <FadeInView className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-3">{t({ id: "Banjarmasin dalam Angka", en: "Banjarmasin in Numbers" })}</h2>
          </FadeInView>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" staggerDelay={0.08}>
            {statsData.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-warm-gold mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">{t(stat.label)}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionWrapper>

        {/* ── PHOTO STRIP ── */}
        <div className="grid grid-cols-4 h-48 md:h-64">
          {[
            "https://commons.wikimedia.org/w/thumb.php?f=Pasar_terapung_Banjarmasin.jpg&w=800",
            "https://commons.wikimedia.org/w/thumb.php?f=Jukung_Berturutan.jpg&w=800",
            "https://commons.wikimedia.org/w/thumb.php?f=Taman_Siring_Banjarmasin.jpg&w=800",
            "https://commons.wikimedia.org/w/thumb.php?f=Sungai_Martapura_di_Pagi_Hari_(2).jpg&w=800",
          ].map((src, i) => (
            <motion.div key={i} whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
