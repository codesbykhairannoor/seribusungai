"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import DestinationCard from "@/components/ui/DestinationCard";
import FadeInView from "@/components/animations/FadeInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { destinations } from "@/content/shared/destinations";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  MapPin, 
  ArrowUpRight, 
  Camera, 
  Calendar, 
  Users, 
  Clock,
  Sparkles,
  Navigation,
  ChevronDown
} from "lucide-react";

export default function Wisata() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroBackgrounds = [
    { src: "/images/budaya/Pasar_terapung_Banjarmasin_7.jpg", span: "col-span-8 row-span-2" },
    { src: "/images/wisata/Jembatan_Sei_Alalak,_Banjarmasin.jpg", span: "col-span-4 row-span-1" },
    { src: "/images/wisata/Masjid_Raya_Sabilal_Muhtadin_3.jpg", span: "col-span-4 row-span-1" },
    { src: "/images/wisata/Taman_Siring_Banjarmasin.jpg", span: "col-span-4 row-span-1" },
    { src: "/images/wisata/Tugu_Pal_Nol_Banjarmasin.jpg", span: "col-span-4 row-span-1" },
    { src: "/images/wisata/Interior_masjid_Sultan_Suriansyah_(1).jpg", span: "col-span-4 row-span-1" }
  ];

  const categories = [
    { id: "budaya", label: { id: "Warisan Budaya", en: "Cultural Heritage" }, icon: Sparkles },
    { id: "alam", label: { id: "Pesona Alam", en: "Nature Wonders" }, icon: Compass },
    { id: "religi", label: { id: "Wisata Religi", en: "Spiritual Sites" }, icon: Landmark },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <NavigationBar />
      <PageTransitionWrapper>

        {/* ── HERO: Asymmetric Background Grid ── */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-river-blue">
          {/* Background Grid Layer */}
          <div className="absolute inset-0 z-0 grid grid-cols-4 lg:grid-cols-12 gap-1 p-1 opacity-40">
             {mounted && heroBackgrounds.map((bg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                  className={`relative overflow-hidden ${bg.span}`}
                >
                  <Image
                    src={bg.src}
                    alt="Banjarmasin"
                    fill
                    className="object-cover brightness-75 contrast-125"
                    priority={i < 2}
                  />
                </motion.div>
             ))}
          </div>

          {/* Contrast Overlays */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-river-blue/80 via-river-blue/20 to-river-blue/90" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,40,61,0.4)_100%)]" />

          {/* Content Layer */}
          <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
             <FadeInView>
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-warm-gold font-black text-[10px] uppercase tracking-[0.3em] mb-8">
                   <Sparkles size={14} />
                   {t({ id: "Destinasi Impian", en: "Dream Destinations" })}
                </div>
                <h1 
                  className="text-white font-heading font-[900] tracking-tighter leading-[0.9] mb-10"
                  style={{ fontSize: "clamp(3rem, 12vw, 8.5rem)" }}
                >
                  Indahnya <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-gold via-white to-warm-gold animate-gradient-flow">Banjarmasin.</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                   {t({ 
                     id: "Jelajahi setiap kanal, sudut sejarah, dan keramahtamahan di Kota Seribu Sungai.", 
                     en: "Explore every canal, historical corner, and hospitality in the City of a Thousand Rivers." 
                   })}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                   <button className="px-10 py-5 bg-warm-gold text-river-blue rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-premium-glow">
                      {t({ id: "Mulai Jelajah", en: "Start Exploring" })}
                   </button>
                   <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                      {t({ id: "Lihat Panduan", en: "View Guide" })}
                   </button>
                </div>
             </FadeInView>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/30 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
             <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
             <ChevronDown size={20} />
          </motion.div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="py-24 bg-white border-b border-slate-100 relative z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {categories.map((cat, i) => (
                <FadeInView key={cat.id} delay={i * 0.1}>
                  <div className="flex gap-6 items-start group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-river-blue group-hover:bg-warm-gold group-hover:text-white transition-all shadow-sm">
                      <cat.icon size={26} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-river-blue mb-2 group-hover:text-warm-gold transition-colors">{t(cat.label)}</h4>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed">
                        {t({ 
                          id: "Temukan keunikan Banjarmasin melalui pilar kekayaan lokal.", 
                          en: "Discover Banjarmasin's uniqueness through its local pillars." 
                        })}
                      </p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED DESTINATIONS ── */}
        <SectionWrapper className="bg-slate-50/50 py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <FadeInView className="max-w-2xl">
                 <span className="text-warm-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Recommended Selection</span>
                 <h2 className="text-5xl md:text-7xl font-[900] text-river-blue tracking-tighter leading-none mb-8">
                   {t({ id: "Ikon Yang Abadi.", en: "The Eternal Icons." })}
                 </h2>
               </FadeInView>
               <FadeInView delay={0.3} className="md:text-right">
                  <p className="text-river-blue/40 font-medium max-w-sm ml-auto">
                    {t({ 
                      id: "Kurasi destinasi yang merangkum esensi Banjarmasin sebagai Kota Seribu Sungai.", 
                      en: "A curated selection summarizing the essence of Banjarmasin as the City of a Thousand Rivers." 
                    })}
                  </p>
               </FadeInView>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {destinations.map((dest, i) => (
                  <FadeInView key={dest.slug} delay={i * 0.1}>
                    <DestinationCard destination={dest} />
                  </FadeInView>
                ))}
             </div>
          </div>
        </SectionWrapper>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}

const Landmark = ({ size = 24, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 21h18" />
    <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3" />
    <path d="M5 21V10.85" />
    <path d="M19 21V10.85" />
    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
  </svg>
);
