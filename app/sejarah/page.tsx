"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Timeline from "@/components/ui/Timeline";
import FadeInView from "@/components/animations/FadeInView";
import { HistoryBento, BentoCard } from "@/components/ui/HistoryBento";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { RiverWaves, TopoLines, EditorialNoise } from "@/components/ui/SectionBackgrounds";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Landmark, 
  Map, 
  Shield, 
  Users, 
  Anchor, 
  ScrollText, 
  ArrowRight,
  Compass,
  History
} from "lucide-react";

const HISTORY_IMAGES = [
  "https://commons.wikimedia.org/w/thumb.php?f=Masjid_Jami_Banjarmasin.jpg&w=1200",
  "https://commons.wikimedia.org/w/thumb.php?f=Sungai_Martapura_di_Pagi_Hari_(1).jpg&w=1200",
  "https://commons.wikimedia.org/w/thumb.php?f=Pasar_terapung_Banjarmasin.jpg&w=1200",
  "https://commons.wikimedia.org/w/thumb.php?f=Rumah_Adat_Bubungan_Tinggi_Banjarmasin.jpg&w=1200",
];

export default function Sejarah() {
  const { t } = useLanguage();
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // ── Client-side Mounting ──
  useEffect(() => {
    setMounted(true);
    
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % HISTORY_IMAGES.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, []);

  const timelineEvents = [
    { 
      year: "1526", 
      title: { id: "Kelahiran Kesultanan Banjar", en: "Birth of the Banjar Sultanate" }, 
      description: { id: "Momentum besar saat Pengeran Samudera memeluk Islam dan mendirikan peradaban baru di muara sungai.", en: "The pivotal moment when Prince Samudera embraced Islam and founded a new civilization at the river delta." },
      imageSrc: "https://commons.wikimedia.org/w/thumb.php?f=Masjid_Jami_Banjarmasin.jpg&w=800",
      icon: Landmark
    },
    { 
      year: "1859", 
      title: { id: "Perang Banjar", en: "The Banjar War" }, 
      description: { id: "Perlawanan heroik rakyat Banjar melawan monopoli Belanda yang dipimpin oleh Pangeran Antasari.", en: "The heroic resistance of the Banjar people against Dutch monopoly, led by Prince Antasari." },
      imageSrc: "https://commons.wikimedia.org/w/thumb.php?f=Sungai_Martapura.jpg&w=800",
      icon: Shield
    },
    { 
      year: "1945", 
      title: { id: "Fajar Kemerdekaan", en: "Dawn of Independence" }, 
      description: { id: "Banjarmasin bertransformasi menjadi pusat administratif penting bagi kedaulatan Republik Indonesia.", en: "Banjarmasin transformed into a vital administrative center for the sovereignty of the Republic of Indonesia." },
      imageSrc: "https://commons.wikimedia.org/w/thumb.php?f=Pasar_terapung_Banjarmasin.jpg&w=800",
      icon: Users
    },
    { 
      year: "2024", 
      title: { id: "Metropolis Digital", en: "Digital Metropolis" }, 
      description: { id: "Menjadi hub ekonomi dan teknologi di Kalimantan dengan tetap menjaga warisan Seribu Sungai.", en: "Becoming an economic and technology hub in Kalimantan while preserving the 'Thousand Rivers' heritage." },
      imageSrc: "https://commons.wikimedia.org/w/thumb.php?f=Menara_Pandang_Banjarmasin.JPG&w=800",
      icon: Compass
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <NavigationBar />
      <PageTransitionWrapper>
        {/* ── PREMIUM HERO: THE MONUMENT ── */}
        <header className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden bg-white">
          {/* 1. Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[700px] h-full bg-warm-gold/5 rounded-full blur-[120px] -z-10 animate-pulse" />
          
          {/* 2. Visual Textures */}
          <div className="absolute inset-0 bg-pattern-grid opacity-[0.03] -z-10" />

          {/* 3. Floating Objects */}
          <div className="absolute top-48 left-[10%] w-16 h-16 bg-white/60 backdrop-blur-xl rounded-2xl shadow-premium-soft flex items-center justify-center text-2xl animate-float hidden xl:flex border border-white/80 z-20">
            📜
          </div>
          <div className="absolute bottom-48 right-[12%] w-14 h-14 bg-white/40 backdrop-blur-md rounded-xl shadow-premium-soft flex items-center justify-center text-xl animate-bounce-slow hidden xl:flex border border-white/40 z-20">
            ⏳
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <FadeInView>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 font-bold text-[10px] tracking-[0.2em] uppercase shadow-sm mb-12">
                <span className="flex h-1.5 w-1.5 rounded-full bg-warm-gold"></span>
                {t({ id: "JEJAK PERADABAN", en: "CIVILIZATION TRACES" })}
              </div>

              <h1 className="text-5xl md:text-8xl font-[900] tracking-monumental leading-monumental text-river-blue mb-10 max-w-5xl mx-auto">
                {t({ id: "Menembus Lorong", en: "Journey Through" })} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-river-blue via-warm-gold to-river-blue bg-[length:200%_auto] animate-gradient-flow text-glow">
                  Waktu.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed opacity-80 max-w-2xl mx-auto mb-16">
                {t({
                  id: "Arsip sejarah Banjarmasin dari era Kesultanan hingga masa kini, dikurasi dengan standar digital preservasi internasional.",
                  en: "Banjarmasin historical archives from the Sultanate era to the present day, curated with international digital preservation standards.",
                })}
              </p>
            </FadeInView>
          </div>
        </header>

        {/* ── BENTO HUB ── */}
        <section id="hub" className="py-40 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-warm-gold/5 rounded-full blur-[100px] -z-10" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeInView className="mb-20">
              <h2 className="text-4xl md:text-6xl font-[900] text-river-blue tracking-monumental leading-monumental mb-8">
                Pusat Kendali Sejarah.
              </h2>
            </FadeInView>
            <HistoryBento />
          </div>
        </section>

        {/* ── SECTION: FOUNDATION BENTO ── */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          <RiverWaves />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <FadeInView>
                <span className="text-river-blue/40 font-black uppercase tracking-[0.3em] text-[8px] mb-3 block">The Beginning</span>
                <h2 className="text-3xl md:text-4xl font-heading font-black text-river-blue mb-4 tracking-tighter">Puncak Kejayaan <span className="text-warm-gold">1526</span></h2>
              </FadeInView>
            </div>

            <HistoryBento>
               <BentoCard 
                  className="md:col-span-2 h-[450px]"
                  badge={{ id: "Era Kesultanan", en: "Sultanate Era" }}
                  title={{ id: "Lahirnya Peradaban Maritim", en: "Rise of Maritime Civilization" }}
                  description={{ id: "Banjarmasin didirikan di atas delta sungai yang strategis, menghubungkan perdagangan rempah nusantara dengan dunia luar.", en: "Banjarmasin was founded on a strategic river delta, connecting the archipelago's spice trade with the outside world." }}
                  image="https://commons.wikimedia.org/w/thumb.php?f=Sungai_Martapura_di_Pagi_Hari_(1).jpg&w=1200"
                  icon={<Anchor size={32} />}
               />
               <BentoCard 
                  className="md:col-span-2 h-[450px]"
                  badge={{ id: "Tokoh Utama", en: "Key Figure" }}
                  title={{ id: "Sultan Suriansyah: Sang Pelopor", en: "Sultan Suriansyah: The Pioneer" }}
                  description={{ id: "Raja pertama yang memeluk Islam, mengubah jalan sejarah Banjar menjadi pusat penyebaran nilai-nilai religi di Kalimantan.", en: "The first king to embrace Islam, changing the course of Banjar history into a center for religious values in Kalimantan." }}
                  image="https://commons.wikimedia.org/w/thumb.php?f=Masjid_Jami_Banjarmasin.jpg&w=1200"
                  icon={<Users size={32} />}
               />
            </HistoryBento>
          </div>
        </section>

        {/* ── SECTION: HISTORY HUB (TIMELINE) ── */}
        <section className="py-24 md:py-48 bg-gray-50 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <Timeline events={timelineEvents} />
          </div>
        </section>

        {/* ── SECTION: THE TRANSFORMATION (BEFORE/AFTER) ── */}
        <section className="py-24 md:py-48 bg-white relative overflow-hidden">
          <TopoLines />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-24">
               <div className="lg:col-span-5">
                  <FadeInView direction="right">
                    <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-[9px] mb-5 block">Evolution</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-river-blue mb-6 leading-tight">Gema <span className="text-warm-gold italic">Metamorfosa.</span></h2>
                    <p className="text-river-blue/50 text-sm leading-relaxed mb-10">
                       {t({ id: "Saksikanlah bagaimana wajah kota ini berubah dari pelabuhan lada kuno menjadi pusat Smart City yang tetap menjaga harmoni sungainya.", en: "Witness how the face of this city changed from an ancient pepper port to a Smart City hub that maintains its river harmony." })}
                    </p>
                  </FadeInView>
               </div>
               <div className="lg:col-span-7">
                  <BeforeAfterSlider 
                    beforeImg="https://commons.wikimedia.org/w/thumb.php?f=Masjid_Jami_Banjarmasin.jpg&w=1200"
                    afterImg="https://commons.wikimedia.org/w/thumb.php?f=Menara_Pandang_Banjarmasin.JPG&w=1200"
                    beforeLabel="Historical Era"
                    afterLabel="Modern Metropolis"
                  />
               </div>
            </div>
          </div>
        </section>

        {/* ── SECTION: ARTIFACT BENTO ── */}
        <section className="py-24 md:py-48 bg-river-blue text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
               <FadeInView>
                  <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-[9px] mb-4 block">The Archives</span>
                  <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter">Galeri <span className="text-warm-gold">Benda Pusaka</span></h2>
               </FadeInView>
            </div>

            <HistoryBento>
               <BentoCard 
                  className="bg-white/5 border-white/10 !p-10"
                  badge={{ id: "Senjata", en: "Weaponry" }}
                  title={{ id: "Keris Banjar", en: "Banjar Keris" }}
                  description={{ id: "Simbol kedaulatan dan keberanian prajurit Kesultanan Banjar dalam menjaga kehormatan tanah air.", en: "A symbol of sovereignty and the bravery of Banjar Sultanate warriors in guarding their homeland's honor." }}
                  image="https://commons.wikimedia.org/w/thumb.php?f=Keris_Banjar.JPG&w=800"
                  icon={<Shield size={24} />}
               />
               <BentoCard 
                  className="bg-white/5 border-white/10 !p-10 md:mt-12"
                  badge={{ id: "Arsitektur", en: "Architecture" }}
                  title={{ id: "Rumah Bubungan Tinggi", en: "Bubungan Tinggi House" }}
                  description={{ id: "Puncak estetika arsitektur panggung yang didesain adaptif terhadap pasang surut sungai.", en: "The pinnacle of stilted architectural aesthetics, designed to adapt to river tides." }}
                  image="https://commons.wikimedia.org/w/thumb.php?f=Rumah_Adat_Bubungan_Tinggi_Banjarmasin.jpg&w=800"
                  icon={<Landmark size={24} />}
               />
               <BentoCard 
                  className="bg-white/5 border-white/10 !p-10"
                  badge={{ id: "Navigasi", en: "Navigation" }}
                  title={{ id: "Jukung Berenteng", en: "Jukung Berenteng" }}
                  description={{ id: "Armada perdagangan tradisional yang menjadi urat nadi ekonomi pasar terapung.", en: "The traditional trading fleet that became the economic vein of the floating market." }}
                  image="https://commons.wikimedia.org/w/thumb.php?f=Jukung_Berenteng.jpg&w=800"
                  icon={<History size={24} />}
               />
               <BentoCard 
                  className="bg-white/5 border-white/10 !p-10 md:mt-12"
                  badge={{ id: "Seni Lukis", en: "Art" }}
                  title={{ id: "Motif Sasirangan", en: "Sasirangan Motifs" }}
                  description={{ id: "Tekstil tradisional yang setiap goresannya menyimpan doa dan identitas filosofis kearifan lokal.", en: "Traditional textiles where every stroke holds prayers and the philosophical identity of local wisdom." }}
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sasirangan_Banjarmasin.JPG/800px-Sasirangan_Banjarmasin.JPG"
                  icon={<Map size={24} />}
               />
            </HistoryBento>
          </div>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
