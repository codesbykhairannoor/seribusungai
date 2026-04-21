"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MotifBackground from "@/components/ui/MotifBackground";
import ParallaxBackgroundText from "@/components/ui/ParallaxBackgroundText";
import SmartCityGrid from "@/components/ui/SmartCityGrid";
import AppShowcase from "@/components/ui/AppShowcase";
import { 
  RiverWaves, 
  SasiranganParallax, 
  TopoLines, 
  EditorialNoise 
} from "@/components/ui/SectionBackgrounds";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tilt from "react-parallax-tilt";
import { 
  ShieldCheck, 
  Bus, 
  Zap, 
  Users, 
  Compass, 
  Waves, 
  Droplets, 
  Anchor,
  Navigation,
  ArrowRight
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BanjarmasinMap = dynamic(() => import("@/components/ui/BanjarmasinMap"), { 
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-gray-100 rounded-[3rem] animate-pulse flex items-center justify-center font-heading text-river-blue/20">Loading Interactive Map...</div>
});

const PANELS = [
  {
    src: "/images/profilkota/Jukung_Pasar_Terapung.jpg",
    label: { id: "Pasar Terapung", en: "Floating Market" },
    anim: { x: -60 },
    priority: true,
  },
  {
    src: "/images/profilkota/Menara_Pandang_Banjarmasin.JPG",
    label: { id: "Menara Pandang", en: "Menara Pandang" },
    anim: { y: -40 },
    priority: true,
  },
  {
    src: "/images/profilkota/Sunrise_on_the_Martapura_river.jpg",
    label: { id: "Sungai Martapura", en: "Martapura River" },
    anim: { x: 60 },
    priority: true,
  },
];

export default function ProfilKota() {
  const { t } = useLanguage();
  const [loadedCount, setLoadedCount] = useState(0);
  const isHeroReady = loadedCount >= 3;
  const heroRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  const handleImageLoad = () => setLoadedCount(prev => prev + 1);

  useGSAP(() => {
    if (!isHeroReady || !panelsRef.current) return;
    gsap.to(panelsRef.current, {
      y: 80,
      opacity: 0.3,
      scale: 0.98,
      force3D: true,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: heroRef, dependencies: [isHeroReady] });

  const missions = [
    { 
      title: { id: "Generasi Berkarakter", en: "Character Generation" }, 
      desc: { id: "Pendidikan berkualitas untuk melahirkan generasi cerdas, beretika, dan berdaya saing global.", en: "Quality education to produce smart, ethical, and globally competitive generations." }, 
      icon: Users 
    },
    { 
      title: { id: "Layanan Digital", en: "Digital Services" }, 
      desc: { id: "Transformasi layanan publik melalui sistem praktis berbasis aplikasi dengan prinsip Satu Data.", en: "Transformation of public services through practical app-based systems with One Data principles." }, 
      icon: Zap 
    },
    { 
      title: { id: "Ekonomi Berdaya Saing", en: "Competitive Economy" }, 
      desc: { id: "Penguatan ekosistem UMKM lokal dan ekonomi kreatif melalui inkubasi layanan terpadu.", en: "Strengthening the local MSME ecosystem and creative economy through integrated service incubation." }, 
      icon: ShieldCheck 
    },
    { 
      title: { id: "Infrastruktur Hijau", en: "Green Infrastructure" }, 
      desc: { id: "Pembangunan berkelanjutan dengan tata ruang yang menyatu dengan kelestarian sungai.", en: "Sustainable development with spatial planning that integrates with river conservation." }, 
      icon: Navigation 
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden relative">
      <EditorialNoise />
      <NavigationBar />
      <PageTransitionWrapper>

        {/* ── HERO ── */}
        <section ref={heroRef} className="relative h-screen min-h-[640px] overflow-hidden bg-[#050a14]">
          <div ref={panelsRef} className="absolute inset-0 flex gap-1 sm:gap-2 p-1 sm:p-2 opacity-80 z-0">
            {PANELS.map((p, i) => (
              <motion.div
                key={i}
                className="relative flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-black/40 will-change-transform"
                initial={{ opacity: 0, ...p.anim }}
                animate={isHeroReady ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={p.src}
                    alt={t(p.label)}
                    fill
                    priority={p.priority}
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover grayscale-[0.2] contrast-[1.1] brightness-[0.55]"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,10,20,0.85)_100%)]" />

          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={isHeroReady ? { opacity: 1 } : {}}
          >
            <FadeInView delay={0.8} className="mb-12">
               <span className="text-white font-heading font-medium uppercase tracking-[0.5em] text-xs md:text-sm">
                 {t({ id: "Profil Kota", en: "City Profile" })}
               </span>
            </FadeInView>
            <motion.h1
              className="font-heading font-black text-center text-white drop-shadow-2xl"
              style={{ fontSize: "clamp(2rem, 7vw, 6rem)" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isHeroReady ? { scale: 1, opacity: 1 } : {}}
            >
              Kota Seribu Sungai
            </motion.h1>
            
            <FadeInView delay={1.5} className="mt-20">
               <div className="flex gap-12 text-center text-white/40 font-heading">
                  {[
                    { v: "1526", l: { id: "Berdiri", en: "Est." } },
                    { v: "102", l: { id: "Sungai", en: "Rivers" } },
                    { v: "700k", l: { id: "Warga", en: "People" } }
                  ].map((s, i) => (
                    <div key={i}>
                       <div className="text-xl font-black text-white mb-1">{s.v}</div>
                       <div className="text-[9px] font-black uppercase tracking-widest">{t(s.l)}</div>
                    </div>
                  ))}
               </div>
            </FadeInView>
          </motion.div>
        </section>

        {/* ── SECTION: VISI ROADMAP ── */}
        <section ref={roadmapRef} className="py-24 md:py-48 bg-white relative overflow-hidden">
          <RiverWaves />
          <ParallaxBackgroundText text="JOURNEY" className="absolute top-1/2 -translate-y-1/2 left-0 opacity-[0.02]" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24 max-w-2xl mx-auto">
               <FadeInView>
                  <span className="text-warm-gold font-black uppercase tracking-[0.3em] text-[9px] mb-3 block">Strategic Roadmap</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black text-river-blue mb-6 leading-tight">
                    {t({ id: "Visi Strategis", en: "Strategic Vision" })} <br /> <span className="text-warm-gold italic">2025 - 2029</span>
                  </h2>
               </FadeInView>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block">
                 <svg className="w-full h-full stroke-river-blue/10 stroke-1" fill="none">
                    <line x1="50%" y1="0" x2="50%" y2="100%" />
                 </svg>
                 <motion.div 
                    style={{ scaleY: pathLength, originY: 0 }}
                    className="absolute inset-0 bg-warm-gold w-1 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]" 
                 />
              </div>

              <div className="space-y-32">
                {missions.map((mission, idx) => (
                  <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                    <div className="flex-1 w-full lg:text-left">
                       <FadeInView direction={idx % 2 === 0 ? "right" : "left"}>
                          <div className={`p-10 md:p-16 rounded-[4rem] border border-river-blue/5 shadow-sm bg-white group hover:shadow-2xl transition-all duration-700 relative overflow-hidden ${idx % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                             <div className={`w-16 h-16 rounded-[2rem] bg-river-blue/5 flex items-center justify-center text-river-blue mb-8 group-hover:bg-river-blue group-hover:text-white transition-all transform group-hover:rotate-12 ${idx % 2 === 0 ? "lg:ml-auto" : ""}`}>
                                <mission.icon size={32} />
                             </div>
                             <h3 className="text-xl font-heading font-black text-river-blue mb-4 tracking-tight">
                                {t(mission.title)}
                             </h3>
                             <p className="text-river-blue/50 text-sm leading-relaxed font-body">
                                {t(mission.desc)}
                             </p>
                             <div className={`absolute top-0 opacity-[0.03] font-heading font-black text-9xl pointer-events-none transition-all duration-1000 group-hover:opacity-[0.08] ${idx % 2 === 0 ? "left-0" : "right-0"}`}>
                                0{idx + 1}
                             </div>
                          </div>
                       </FadeInView>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-river-blue shadow-xl z-20 flex-shrink-0 flex items-center justify-center hidden lg:flex">
                       <div className="w-3 h-3 rounded-full bg-warm-gold animate-ping" />
                    </div>
                    <div className="flex-1 hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION: 6 PILAR ── */}
        <section className="py-20 md:py-24 bg-gray-50 overflow-hidden relative">
          <SasiranganParallax />
          <MotifBackground variant="sasirangan" opacity={0.02} />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <FadeInView className="text-center mb-24 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-heading font-black text-river-blue mb-4">
                 {t({ id: "6 Pilar Transformasi", en: "6 Pillars of Transformation" })}
               </h2>
               <p className="text-river-blue/50 font-body text-sm leading-relaxed">
                 {t({ 
                   id: "Kerangka kerja strategis yang mengintegrasikan tata kelola digital, ekonomi kreatif, dan kualitas hidup masyarakat dalam satu ekosistem berkelanjutan.", 
                   en: "A strategic framework integrating digital governance, creative economy, and community quality of life in one sustainable ecosystem." 
                 })}
               </p>
            </FadeInView>
            <SmartCityGrid />
          </div>
        </section>

        {/* ── SECTION: APP SHOWCASE ── */}
        <section className="py-24 md:py-32 bg-river-blue text-white relative overflow-hidden">
          <TopoLines />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                <div className="lg:col-span-5">
                   <FadeInView direction="right">
                      <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Super App Ecology</span>
                      <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">Banjarmasin <br /> <span className="text-warm-gold italic">Pintar v3.0</span></h2>
                      <p className="text-white/60 font-body mb-10 text-sm leading-relaxed">
                        {t({ id: "Platform integrasi layanan publik pertama di Kalsel. Urus segalanya dari satu aplikasi.", en: "The first public service integration platform in Kalsel. Handle everything in one app." })}
                      </p>
                      <button className="flex items-center gap-4 group px-10 py-5 bg-warm-gold text-river-blue rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
                         Get the App <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                   </FadeInView>
                </div>
                <div className="lg:col-span-7 flex justify-center">
                   <AppShowcase />
                </div>
             </div>
          </div>
        </section>

        {/* ── SECTION: GEOGRAPHY & INTERACTIVE MAP ── */}
        <section className="py-20 md:py-24 bg-river-blue-50 relative overflow-hidden">
          <RiverWaves />
          <TopoLines />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
             <div className="flex flex-col items-center mb-20 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-river-blue mb-6">
                   {t({ id: "Peta Administrasi Digital", en: "Digital Administrative Map" })}
                </h2>
                <p className="text-river-blue/50 font-body text-sm leading-relaxed">
                   {t({ 
                     id: "Visualisasi data geospasial real-time yang memetakan persebaran layanan publik, jaringan transportasi, dan topografi delta Kota Banjarmasin.", 
                     en: "Real-time geospatial data visualization mapping the distribution of public services, transport networks, and the delta topography of Banjarmasin." 
                   })}
                </p>
             </div>
             
             <FadeInView>
                <BanjarmasinMap />
             </FadeInView>

             <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Droplets, val: "-0.16m", label: { id: "Di Bawah Permukaan Laut", en: "Below Sea Level" } },
                  { icon: Waves, val: "102", label: { id: "Sungai Aktif Terdata", en: "Mapped Active Rivers" } },
                  { icon: Compass, val: "98.46", label: { id: "Luas Wilayah (km²)", en: "Total Area (km²)" } }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-12 rounded-[4rem] border border-river-blue/5 shadow-sm text-center group hover:shadow-2xl transition-all duration-700">
                     <item.icon className="mx-auto mb-8 text-warm-gold group-hover:scale-125 transition-transform" size={40} />
                     <p className="text-5xl font-heading font-black text-river-blue mb-2">{item.val}</p>
                     <p className="text-[10px] font-black uppercase text-river-blue/40 tracking-widest">{t(item.label)}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
