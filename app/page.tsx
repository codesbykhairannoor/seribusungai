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
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
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
    if (!isHeroLoaded) {
      // Fallback: Force reveal after 1.5s if image onLoad fails
      const timeout = setTimeout(() => setIsHeroLoaded(true), 1500);
      return () => clearTimeout(timeout);
    }
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
        {/* ── RESTORED HERO: Pesona Banjarmasin (Unified with Profil Logic) ── */}
        <section className="relative w-full h-screen min-h-[640px] overflow-hidden flex items-center justify-center bg-[#050a14]">
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0 z-0 scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHeroLoaded ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="https://commons.wikimedia.org/w/thumb.php?f=Menara_Pandang_Banjarmasin_001.jpg&w=1600"
              alt="Menara Pandang Siring Banjarmasin"
              fill
              priority
              unoptimized={true}
              className="w-full h-full object-cover grayscale-[0.1] contrast-[1.1] brightness-[0.6]"
              onLoad={() => setIsHeroLoaded(true)}
            />
          </motion.div>

          {/* Unified Gradient Overlay (Lighter than before to prevent total blackness) */}
          <div 
            className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,10,20,0.75)_100%)] transition-opacity duration-1000" 
            style={{ opacity: isHeroLoaded ? 1 : 0 }}
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ y: textY }}
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
                  <div className="overflow-hidden h-[1.1em] mb-2 text-center">
                    <motion.div
                      key={wordIdx}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span
                        className="font-heading font-[900] text-warm-gold block shadow-premium-glow tracking-tighter"
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
                    className="font-heading font-[900] text-white leading-none tracking-tighter"
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
        </section>        {/* ── BENTO GRID: ABOUT + STATS (Blueprint Section) ── */}
        <section id="tentang" className="relative py-40 overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warm-gold/5 rounded-full blur-[100px] -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeInView className="mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-lg border border-slate-200 text-warm-gold font-black text-[9px] tracking-widest uppercase mb-6">
                 {t({ id: "Warisan Budaya", en: "Cultural Heritage" })}
              </div>
              <h2 className="text-4xl md:text-6xl font-[900] text-river-blue mb-8 max-w-3xl">
                {t({ id: "Di Mana Sungai Adalah Nafas Kehidupan.", en: "Where the River is the Breath of Life." })}
              </h2>
            </FadeInView>
 
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-premium-deep group">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pasar_Terapung_Muara_Kuin.jpg/1200px-Pasar_Terapung_Muara_Kuin.jpg"
                    alt="Banjarmasin river life"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/60 to-transparent" />
                </div>
              </div>
              
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <FadeInView key={i} delay={i * 0.1}>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-premium-soft transition-all group">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-river-blue group-hover:bg-warm-gold group-hover:text-white transition-all mb-6">
                        <stat.icon size={22} />
                      </div>
                      <div className="text-3xl font-[900] text-river-blue tracking-monumental mb-2">
                        {stat.value}<span className="text-sm opacity-40 ml-1">{stat.suffix}</span>
                      </div>
                      <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest">
                        {t(stat.label)}
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </div>
        </section>
           {/* ── FEATURED DESTINATIONS: Premium Cards ── */}
        <section className="relative py-40 overflow-hidden bg-white">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-river-blue/5 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-7xl mx-auto px-6">
            <FadeInView className="mb-20">
              <h2 className="text-4xl md:text-6xl font-[900] text-river-blue tracking-monumental leading-monumental mb-6">
                {t({ id: "Temukan Tempat Favorit Anda.", en: "Find Your Favorite Spot." })}
              </h2>
              <p className="text-lg text-slate-400 font-medium max-w-xl">
                 {t({ id: "Koleksi destinasi pilihan yang merangkum keajaiban arsitektur dan alam Banjarmasin.", en: "A curated collection of destinations showcasing the architectural and natural wonders of Banjarmasin." })}
              </p>
            </FadeInView>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {destinations.slice(0, 6).map((dest, i) => (
                <FadeInView key={dest.slug} delay={i * 0.1}>
                  <div className="group relative bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 p-4 hover:bg-white hover:shadow-premium-deep transition-all duration-500">
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8">
                       <Image
                         src={dest.heroImage.src}
                         alt={t(dest.name)}
                         fill
                         className="object-cover group-hover:scale-105 transition-transform duration-1000"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="px-4 pb-4">
                       <h3 className="text-2xl font-black text-river-blue mb-2 tracking-tight">{t(dest.name)}</h3>
                       <div className="text-[10px] font-black uppercase tracking-widest text-warm-gold mb-4">{dest.category}</div>
                       <Link href={`/wisata/${dest.slug}`} className="inline-flex items-center gap-2 text-xs font-black text-river-blue group-hover:text-warm-gold transition-colors">
                          EXPLORE <ArrowUpRight size={14} />
                       </Link>
                    </div>
                  </div>
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
