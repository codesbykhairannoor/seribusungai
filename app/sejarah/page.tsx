"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import DomeGallery from "@/components/ui/DomeGallery";
import VintageSeparator from "@/components/ui/VintageSeparator";
import HistoryTimelineItem from "@/components/ui/HistoryTimelineItem";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Clock, History, ArrowRight } from "lucide-react";

export default function Sejarah() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const years = [
    {
      year: "1526",
      title: { id: "Kelahiran Kesultanan Banjar", en: "Birth of the Banjar Sultanate" },
      desc: { 
        id: "24 September 1526, Pangeran Samudera memeluk Islam dan bergelar Sultan Suriansyah, menandai lahirnya peradaban baru di muara sungai.", 
        en: "September 24, 1526, Prince Samudera embraced Islam as Sultan Suriansyah, establishing a new civilization at the river estuary." 
      },
      image: "/images/sejarah/Sultanate_of_Banjar_under_Sulayman,_1810s.png"
    },
    {
      year: "1859",
      title: { id: "Era Perlawanan: Perang Banjar", en: "Era of Resistance: The Banjar War" },
      desc: { 
        id: "Dibawah seruan 'Haram Manyarah', Pangeran Antasari memimpin rakyat melawan kolonialisme untuk kedaulatan tanah Banjar.", 
        en: "Under the cry of 'Haram Manyarah', Prince Antasari led the people against colonialism for the sovereignty of Banjar land." 
      },
      image: "/images/sejarah/PERANG_BANJAR_1857-1859.jpg"
    },
    {
      year: "1905",
      title: { id: "Pusat Perdagangan Hindia Belanda", en: "Dutch East Indies Trade Hub" },
      desc: { 
        id: "Banjarmasin berkembang menjadi pelabuhan lada dan karet strategis di pertemuan dua sungai besar Kalimantan.", 
        en: "Banjarmasin evolved into a strategic pepper and rubber port at the confluence of Kalimantan's major rivers." 
      },
      image: "/images/sejarah/Emmahaven_-_Page_73_-_Boekoe_Peringatan_dari_Staatsspoor-en_Tramwegen_di_Hindia-Belanda_1875-1925.jpg"
    },
    {
      year: "1945",
      title: { id: "Republik & Masa Depan", en: "The Republic & The Future" },
      desc: { 
        id: "Sejarah baru terukir saat Banjarmasin bergabung dalam kedaulatan Republik Indonesia, bertransformasi menjadi metropolis digital.", 
        en: "A new history was written as Banjarmasin joined the Indonesian Republic, eventually transforming into a digital metropolis." 
      },
      image: "/images/sejarah/1920px-Museum_Lambung_Mangkurat.png"
    }
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#fdfcf9] selection:bg-warm-gold/20 selection:text-river-blue">
      <NavigationBar />
      
      <PageTransitionWrapper>
        {/* ── VINTAGE HERO: DOME GALLERY ── */}
        <header className="relative w-full h-[100vh] bg-[#06283d] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <DomeGallery
              images={[
                "/images/sejarah/Sultanate_of_Banjar_under_Sulayman,_1810s.png",
                "/images/sejarah/PERANG_BANJAR_1857-1859.jpg",
                "/images/sejarah/Emmahaven_-_Page_73_-_Boekoe_Peringatan_dari_Staatsspoor-en_Tramwegen_di_Hindia-Belanda_1875-1925.jpg",
                "/images/sejarah/1920px-Museum_Lambung_Mangkurat.png",
                "/images/sejarah/Pangeran_Antasari_Museum_Lambung_Mangkurat.jpg",
                "/images/sejarah/Sultanate_of_Banjar_under_Sulayman,_1810s.png"
              ]}
              fit={0.45}
              minRadius={900}
              maxVerticalRotationDeg={0}
              segments={30}
              dragDampening={2.5}
              grayscale={true}
              overlayBlurColor="#06283d"
            />
          </div>
          
          {/* Radial Scrim to Focus on Text */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,40,61,0.5)_0%,rgba(6,40,61,0.8)_50%,rgba(6,40,61,0.95)_100%)]" />

          {/* Hero Overlay Text */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none pt-24">
            <FadeInView>
               <div className="flex flex-col items-center text-center px-6">
                  <div className="inline-flex items-center gap-3 px-6 py-2 border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl rounded-full mb-12">
                     <div className="w-2 h-2 rounded-full bg-warm-gold animate-pulse" />
                     <span className="font-serif italic text-xs tracking-widest text-white/90 uppercase">
                       Est. 1526 — {t({ id: "Arsip Warisan", en: "Heritage Archive" })}
                     </span>
                  </div>
                  
                  <h1 className="font-heading font-black text-5xl md:text-8xl text-white leading-[0.85] mb-10 tracking-tight text-center">
                    {t({ id: "Menyapa", en: "Greeting" })} <br />
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-warm-gold via-white to-warm-gold bg-[length:200%_auto] animate-gradient-flow">
                       {t({ id: "Masa Lalu.", en: "The Past." })}
                    </span>
                  </h1>

                  <p className="max-w-xl mx-auto text-lg md:text-2xl text-white/60 leading-relaxed font-serif italic text-center drop-shadow-sm">
                    {t({ 
                      id: "Susuri jejak peradaban sungai yang telah mengalir selama berabad-abad, dari kerajaan legendaris hingga metropolis modern.", 
                      en: "Trace the footsteps of a river civilization that has flowed for centuries, from legendary kingdoms to modern metropolises." 
                    })}
                  </p>

                  <div className="mt-16 flex flex-col items-center gap-4">
                     <div className="w-px h-20 bg-gradient-to-b from-warm-gold to-transparent" />
                     <div className="text-[10px] text-warm-gold/60 uppercase tracking-[0.4em] font-bold animate-pulse">
                       {t({ id: "GESER UNTUK MENELUSURI", en: "DRAG TO EXPLORE" })}
                     </div>
                  </div>
               </div>
            </FadeInView>
          </div>

          {/* Global vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.8)] z-30" />
        </header>

        {/* ── THE FOUNDING STORY ── */}
        <SectionWrapper className="bg-white border-y border-slate-100 py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <FadeInView direction="right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-warm-gold/5 -rotate-2 rounded-[3rem] -z-10" />
                  <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                     <Image 
                       src="/images/sejarah/Sultanate_of_Banjar_under_Sulayman,_1810s.png" 
                       alt="Kesultanan Banjar" 
                       fill 
                       className="object-cover"
                     />
                  </div>
                  <div className="absolute bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-premium-deep max-w-xs border border-slate-100">
                     <Clock className="text-river-blue mb-4" size={32} />
                     <p className="font-heading font-black text-river-blue text-lg leading-relaxed">
                       "{t({ id: "Banjarmasin didirikan pada momen konvergensi spiritual dan perdagangan.", en: "Banjarmasin was founded at a moment of spiritual and trade convergence." })}"
                     </p>
                  </div>
                </div>
              </FadeInView>

              <FadeInView direction="left">
                 <h2 className="font-heading font-black text-4xl md:text-5xl text-river-blue mb-8 leading-tight">
                    {t({ id: "Sultan Suriansyah & Fajar Kuin", en: "Sultan Suriansyah & Dawn of Kuin" })}
                 </h2>
                 <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-body">
                    <p>
                      {t({
                        id: "Semua bermula di Kuin, muara sungai Martapura. Pangeran Samudera, yang kemudian bergelar Sultan Suriansyah, meletakkan fondasi Banjarmasin sebagai pusat kekuatan baru di selatan Kalimantan.",
                        en: "It all began in Kuin, the mouth of the Martapura river. Prince Samudera, later known as Sultan Suriansyah, laid the foundation of Banjarmasin as a new power hub in southern Kalimantan."
                      })}
                    </p>
                    <p>
                      {t({
                        id: "Pelabuhan Kuin segera tumbuh menjadi magnet bagi pedagang lada dari seluruh dunia, menciptakan percampuran budaya unik antara Melayu, Banjar, dan bangsa-bangsa samudra.",
                        en: "The port of Kuin quickly became a magnet for pepper traders from around the world, creating a unique cultural blend between Malay, Banjar, and oceanic nations."
                      })}
                    </p>
                    <motion.button 
                      whileHover={{ x: 10 }}
                      className="inline-flex items-center gap-3 text-river-blue font-heading font-black italic text-xl border-b-2 border-river-blue/20 pb-1 mt-8"
                    >
                      {t({ id: "Baca Arsip Kolonial", en: "Read Colonial Archives" })}
                      <ArrowRight size={20} />
                    </motion.button>
                 </div>
              </FadeInView>
            </div>
          </div>
        </SectionWrapper>

        <VintageSeparator />

        {/* ── CHRONOLOGICAL TIMELINE ── */}
        <section className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-32">
                 <h2 className="font-heading font-black text-4xl md:text-5xl text-river-blue mb-6">
                    {t({ id: "Garis Waktu Peradaban", en: "Timeline of Civilization" })}
                 </h2>
                 <p className="text-slate-500 font-heading font-black italic">{t({ id: "Dari Kesultanan hingga Masa Depan", en: "From Sultanate to the Future" })}</p>
              </div>

              <div className="relative">
                 {/* Center Line for desktop */}
                 <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
                 
                 {years.map((y, i) => (
                   <HistoryTimelineItem 
                    key={y.year}
                    {...y}
                    index={i}
                   />
                 ))}
              </div>
            </div>
        </section>

        {/* ── HERITAGE FOCUS: PANGERAN ANTASARI ── */}
        <section className="bg-river-blue py-32 text-white overflow-hidden relative">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] -z-0" />
           
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <FadeInView direction="right">
                    <span className="text-warm-gold font-heading font-black italic text-xl mb-6 block">{t({ id: "Haram Manyarah, Waja Sampai Kaputing", en: "Defeat is Forbidden, Spirit remains until the end" })}</span>
                    <h2 className="font-heading font-black text-4xl md:text-6xl mb-8 leading-tight">
                       Pangeran Antasari <br />
                       & <span className="italic opacity-70">{t({ id: "Jiwa Banjar.", en: "Banjar Soul." })}</span>
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-10 font-body lg:pr-20">
                       {t({
                         id: "Perang Banjar (1859) bukan sekadar perang wilayah, melainkan perlawanan martabat. Semangat Pangeran Antasari mengukuhkan identitas rakyat Banjar yang tak kenal menyerah menghadapi ketidakadilan kolonial.",
                         en: "The Banjar War (1859) was not just a war over territory, but a defense of dignity. Prince Antasari's spirit cemented the identity of the Banjar people, never surrendering to colonial injustice."
                       })}
                    </p>
                    <div className="grid grid-cols-2 gap-10">
                       <div>
                          <div className="text-3xl font-heading font-black text-warm-gold mb-2">1862</div>
                          <div className="text-xs uppercase tracking-widest opacity-60">Wafat sebagai Pahlawan</div>
                       </div>
                       <div>
                          <div className="text-3xl font-heading font-black text-warm-gold mb-2">12+</div>
                          <div className="text-xs uppercase tracking-widest opacity-60">Wilayah Perlawanan</div>
                       </div>
                    </div>
                 </FadeInView>

                 <FadeInView direction="left">
                    <div className="relative group">
                       <div className="absolute -inset-4 border border-white/20 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform" />
                       <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl">
                          <Image 
                            src="/images/sejarah/Pangeran_Antasari_Museum_Lambung_Mangkurat.jpg" 
                            alt="Pangeran Antasari" 
                            fill 
                            className="object-cover"
                          />
                       </div>
                    </div>
                 </FadeInView>
              </div>
           </div>
        </section>

        {/* ── CALL TO ACTION ── */}
        <section className="py-32 bg-white text-center">
           <FadeInView>
              <History size={64} className="mx-auto text-river-blue/20 mb-8" />
              <h2 className="font-heading font-black text-4xl text-river-blue mb-8">
                 {t({ id: "Lihat Masa Depan Digital Kami", en: "See Our Digital Future" })}
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                 <a href="/visi-digital" className="px-10 py-4 bg-river-blue text-white rounded-full font-heading font-black italic text-lg shadow-premium-glow hover:scale-105 transition-transform">
                    {t({ id: "Visi Digital 2026", en: "Digital Vision 2026" })}
                 </a>
                 <button className="px-10 py-4 border border-river-blue text-river-blue rounded-full font-heading font-black italic text-lg hover:bg-slate-50 transition-colors">
                    {t({ id: "Arsip Lengkap", en: "Full Archives" })}
                 </button>
              </div>
           </FadeInView>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
