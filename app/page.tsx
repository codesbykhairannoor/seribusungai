"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import DestinationCard from "@/components/ui/DestinationCard";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { useLanguage } from "@/contexts/LanguageContext";
import { destinations } from "@/content/shared/destinations";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Users, Droplets, Map as MapIcon, Calendar, ArrowRight, ArrowUpRight } from "lucide-react";
import WaterRippleHero from "@/components/ui/WaterRippleHero";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function Home() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  // Parallax effects
  const imageY = useTransform(scrollY, [0, 600], [0, 100]);
  const textY = useTransform(scrollY, [0, 600], [0, 40]);

  const words = ["Jelajahi", "Rasakan", "Temukan"];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    if (!isHeroLoaded) return;
    const id = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 3000);
    return () => clearInterval(id);
  }, [isHeroLoaded]);

  const stats = [
    { label: { id: "Luas Wilayah", en: "Total Area" }, value: "98.46", suffix: "km²", icon: MapIcon },
    { label: { id: "Jumlah Sungai", en: "Rivers" }, value: "102", suffix: "+", icon: Droplets },
    { label: { id: "Populasi", en: "Population" }, value: "700k", suffix: "+", icon: Users },
    { label: { id: "Tahun Berdiri", en: "Founded" }, value: "1526", suffix: "", icon: Calendar },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>
        {/* ── REVERTED HERO: Pesona Banjarmasin ── */}
        <section className="relative w-full h-screen min-h-[640px] overflow-hidden flex items-center justify-center bg-[#0a0f1a]">
          <motion.div
            style={{ y: imageY, willChange: "transform" }}
            className="absolute inset-0 z-0 scale-105"
          >
            <Image
              src="https://commons.wikimedia.org/w/thumb.php?f=Menara_Pandang_Banjarmasin_001.jpg&w=1600"
              alt="Menara Pandang Siring Banjarmasin"
              fill
              priority
              className="w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: isHeroLoaded ? 0.9 : 0 }}
              sizes="100vw"
              onLoad={() => setIsHeroLoaded(true)}
            />
          </motion.div>

          <div 
            className="absolute inset-0 z-[1] pointer-events-none" 
            style={{ 
              background: `radial-gradient(circle at center, transparent 0%, rgba(10,15,26,0.4) 60%, rgba(10,15,26,0.9) 100%)`,
              opacity: isHeroLoaded ? 1 : 0,
              transition: "opacity 1s ease"
            }} 
          />

          {isHeroLoaded && (
            <>
              <WaterRippleHero />
              <FloatingParticles
                count={15}
                colors={["rgba(245,197,24,0.4)", "rgba(255,255,255,0.2)"]}
                className="z-[3]"
              />
            </>
          )}

          <AnimatePresence>
            {isHeroLoaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ y: textY, willChange: "transform, opacity" }}
                className="absolute inset-0 z-[4] flex flex-col items-center justify-center pointer-events-none select-none px-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="h-px w-8 md:w-12 bg-warm-gold/40" />
                  <span className="text-warm-gold font-body font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">
                    {t({ id: "Kota Seribu Sungai", en: "City of a Thousand Rivers" })}
                  </span>
                  <div className="h-px w-8 md:w-12 bg-warm-gold/40" />
                </motion.div>

                <div className="text-center mb-6">
                  <div className="overflow-hidden h-[1.1em] mb-2">
                    <motion.div
                      key={wordIdx}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span
                        className="font-heading font-black text-warm-gold block drop-shadow-glow tracking-tighter"
                        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: 1 }}
                      >
                        {words[wordIdx]}
                      </span>
                    </motion.div>
                  </div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="font-heading font-black text-white leading-none tracking-tighter"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
                  >
                    {t({ id: "Pesona Banjarmasin", en: "Banjarmasin" })}
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-white font-body text-sm md:text-base text-center max-w-xl leading-relaxed mb-12 px-6"
                >
                  {t({
                    id: "Rasakan harmoni kehidupan di atas air dan kekayaan budaya Banjar yang tak lekang oleh waktu.",
                    en: "Experience the harmony of life on the water and the timeless richness of Banjar culture.",
                  })}
                </motion.p>

                <div className="flex flex-wrap justify-center items-center gap-6 pointer-events-auto">
                  <Link
                    href="#tentang"
                    className="px-10 py-4 bg-warm-gold hover:bg-warm-gold-dark text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all hover:scale-105 shadow-2xl shadow-warm-gold/20"
                  >
                    {t({ id: "Mulai Perjalanan", en: "Begin Journey" })}
                  </Link>
                  <Link
                    href="/wisata"
                    className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all border border-white/20 hover:scale-105 backdrop-blur-md"
                  >
                    {t({ id: "Destinasi", en: "Destinations" })}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isHeroLoaded && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="absolute top-28 left-6 md:left-12 z-[5]"
                >
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-warm-gold animate-pulse" />
                    <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em]">
                      {t({ id: "Kalimantan Selatan", en: "South Kalimantan" })}
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.8 }}
                  className="absolute top-28 right-6 md:right-12 z-[5] text-right"
                >
                  <div className="text-white/5 font-heading font-black text-6xl md:text-8xl leading-none select-none">
                    1526
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-4 pointer-events-none"
          >
            <span className="text-white/10 text-[9px] uppercase tracking-[0.5em] font-bold">Discover</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
            />
          </motion.div>
        </section>

        {/* ── BENTO GRID — About + Stats ── */}
        <section id="tentang" className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-12 text-center md:text-left">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-[10px] mb-3 block">
                {t({ id: "Tentang Banjarmasin", en: "About Banjarmasin" })}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-river-blue leading-[1.1] max-w-2xl tracking-tighter">
                {t({ id: "Di Mana Sungai Adalah Nafas Kehidupan", en: "Where the River is the Breath of Life" })}
              </h2>
            </FadeInView>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <FadeInView direction="right" className="col-span-2 row-span-2">
                <div className="relative h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin.jpg"
                    alt="Banjarmasin river life"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/70 to-transparent" />
                </div>
              </FadeInView>

              {stats.map((stat, i) => (
                <FadeInView key={i} delay={i * 0.08}>
                  <div className="bg-river-blue-50 rounded-3xl p-6 h-full min-h-[130px] flex flex-col justify-between group hover:bg-river-blue-100 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-river-blue group-hover:bg-warm-gold group-hover:text-white transition-colors">
                      <stat.icon size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-black text-river-blue tracking-tighter">
                        {stat.value}<span className="text-xs opacity-40 ml-1">{stat.suffix}</span>
                      </div>
                      <div className="text-[10px] uppercase font-bold text-warm-gold mt-1">
                        {t(stat.label)}
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}

              <FadeInView delay={0.2} className="col-span-2">
                <div className="bg-river-blue rounded-3xl p-8 h-full flex flex-col justify-between">
                  <p className="text-white/70 font-body text-sm md:text-base">
                    {t({ id: "Selama berabad-abad, sungai-sungai di Banjarmasin telah membentuk identitas, ekonomi, dan budaya masyarakatnya.", en: "For centuries, the rivers of Banjarmasin have shaped the identity, economy, and culture of its people." })}
                  </p>
                  <Link href="/profil-kota" className="inline-flex items-center gap-2 text-warm-gold font-bold text-sm mt-6">
                    {t({ id: "Pelajari Lebih Lanjut", en: "Learn More" })} <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── FEATURED DESTINATIONS ── */}
        <section className="py-20 md:py-28 bg-clean-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-river-blue tracking-tighter">
                {t({ id: "Temukan Tempat Favorit Anda", en: "Find Your Favorite Spot" })}
              </h2>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <FadeInView direction="right" className="lg:col-span-2 lg:row-span-2">
                <Link href={`/wisata/${destinations[0].slug}`} className="block h-full group">
                  <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={destinations[0].heroImage.src}
                      alt={t(destinations[0].heroImage.alt)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-white font-heading font-bold text-2xl md:text-4xl mb-2">
                        {t(destinations[0].name)}
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeInView>

              {destinations.slice(1, 5).map((dest, i) => (
                <FadeInView key={dest.slug} delay={i * 0.08}>
                  <DestinationCard destination={dest} />
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
