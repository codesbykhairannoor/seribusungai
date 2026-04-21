"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/content/blog/posts";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Droplets, 
  Map as MapIcon, 
  Calendar, 
  Users, 
  MoveRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Compass
} from "lucide-react";
import WaterRippleHero from "@/components/ui/WaterRippleHero";
import FloatingParticles from "@/components/ui/FloatingParticles";

// ── HERO COMPONENTS ──

const CinematicHero = ({ data, t }: { data: any, t: any }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 1.2 }}
    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
  >
    <div className="absolute inset-0 z-0">
      <Image src={data.image} alt="" fill priority className="object-cover brightness-[0.35] contrast-[1.1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-river-blue/60 via-transparent to-river-blue/80" />
    </div>
    
    <div className="relative z-10 max-w-5xl">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-warm-gold font-bold uppercase tracking-[0.6em] text-[10px] mb-8 block px-6 py-2 border border-warm-gold/20 rounded-full backdrop-blur-sm mx-auto w-fit"
      >
        {data.subtitle}
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="font-heading font-black text-white leading-[1.1] tracking-tight mb-12 text-5xl md:text-8xl lg:text-[7rem]"
      >
        {t(data.title)}
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <Link href="/wisata" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-warm-gold hover:text-river-blue hover:border-warm-gold transition-all group mx-auto">
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

const MosaicHero = ({ data, t }: { data: any, t: any }) => {
  const images = [
    "/images/budaya/Pasar_terapung_Banjarmasin_7.jpg",
    "/images/sejarah/PERANG_BANJAR_1857-1859.jpg",
    "/images/wisata/Jembatan_Sei_Alalak,_Banjarmasin.jpg",
    "/images/budaya/Menara_Pandang_Banjarmasin_001.jpg",
    "/images/wisata/Menara_Pandang_Siring_Martapura.jpg",
    "/images/budaya/Tradisi_Banjarmasin.jpg"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 flex items-center bg-river-blue px-10 py-32"
    >
      <div className="grid grid-cols-12 grid-rows-6 w-full h-full gap-4 relative">
        {/* The Grid Mosaic Background */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-40">
           <div className="col-span-4 row-span-4 relative rounded-3xl overflow-hidden"><Image src={images[0]} alt="" fill className="object-cover" /></div>
           <div className="col-span-3 row-span-2 relative rounded-3xl overflow-hidden"><Image src={images[1]} alt="" fill className="object-cover" /></div>
           <div className="col-span-5 row-span-3 relative rounded-3xl overflow-hidden"><Image src={images[2]} alt="" fill className="object-cover" /></div>
           <div className="col-span-3 row-span-4 relative rounded-3xl overflow-hidden"><Image src={images[3]} alt="" fill className="object-cover" /></div>
           <div className="col-span-2 row-span-3 relative rounded-3xl overflow-hidden"><Image src={images[4]} alt="" fill className="object-cover" /></div>
           <div className="col-span-3 row-span-2 relative rounded-3xl overflow-hidden"><Image src={images[5]} alt="" fill className="object-cover" /></div>
        </div>

        {/* Text Overlay */}
        <div className="col-span-12 md:col-span-6 row-span-6 flex flex-col justify-center relative z-10 pl-10">
           <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
           >
              <span className="text-warm-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">{data.subtitle}</span>
              <h1 className="font-heading font-black text-white leading-[1] tracking-tight mb-8 text-6xl md:text-8xl">
                 {t(data.title)}
              </h1>
              <p className="text-white/40 max-w-md text-sm leading-relaxed mb-10 font-medium whitespace-pre-line">
                 Archive Chapters: Heritage, Culture, and the Living River.
              </p>
              <Link href="/wisata" className="inline-flex items-center gap-4 text-warm-gold font-black uppercase text-[10px] tracking-widest group border-b border-warm-gold/20 pb-2 hover:border-warm-gold transition-all">
                 Browse The Mosaic <MoveRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const SplitHero = ({ data, t }: { data: any, t: any }) => (
  <motion.div 
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "-100%" }}
    transition={{ type: "spring", stiffness: 50, damping: 20 }}
    className="absolute inset-0 flex bg-white"
  >
    {/* Left Side: Content */}
    <div className="w-full lg:w-1/2 h-full flex flex-col justify-center p-12 lg:p-32 bg-river-blue text-white">
       <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
       >
          <Compass className="text-warm-gold mb-10" size={48} />
          <span className="text-warm-gold font-bold uppercase tracking-[0.6em] text-[10px] mb-6 block">{data.subtitle}</span>
          <h1 className="font-heading font-black leading-[1.1] tracking-tight mb-12 text-5xl md:text-7xl">
             {t(data.title)}
          </h1>
          <div className="grid grid-cols-2 gap-10 border-l border-white/10 pl-10">
             <div>
                <div className="text-3xl font-bold text-warm-gold mb-1">102+</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Active Rivers</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-warm-gold mb-1">500</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Years Archive</div>
             </div>
          </div>
          <Link href="/wisata" className="mt-20 inline-block px-12 py-5 bg-warm-gold text-river-blue rounded-full font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
             Portal Borneo
          </Link>
       </motion.div>
    </div>

    {/* Right Side: High-res Portrait */}
    <div className="hidden lg:block lg:w-1/2 h-full relative">
       <Image src={data.image} alt="" fill className="object-cover" />
       <div className="absolute inset-0 bg-gradient-to-r from-river-blue to-transparent" />
       <div className="absolute inset-0 bg-river-blue/20" />
    </div>
  </motion.div>
);


const MagneticPillar = ({ pillar, i }: { pillar: any; i: number }) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 25);
    mouseY.set((e.clientY - centerY) / 25);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Link 
      href={pillar.href}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex-1 group min-h-[500px] lg:min-h-0 overflow-hidden border-r border-white/5 last:border-0"
    >
      <motion.div 
        className="absolute inset-0 z-0 h-[120%] w-[120%] left-[-10%] top-[-10%]"
        style={{ x: mouseX, y: mouseY }}
      >
        <Image
          src={pillar.image}
          alt={t(pillar.title)}
          fill
          className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-river-blue via-river-blue/40 to-transparent z-10" />
      
      <div className="relative z-20 h-full flex flex-col justify-end p-12 lg:p-20">
        <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block transform group-hover:-translate-y-2 transition-transform duration-500">
          Chapter 0{i + 1}
        </span>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 group-hover:text-warm-gold transition-colors duration-500">
          {t(pillar.title)}
        </h3>
        <p className="text-white/40 font-medium max-w-xs group-hover:text-white/80 transition-colors duration-500 leading-relaxed text-sm">
          {t(pillar.desc)}
        </p>
        
        <div className="mt-12 overflow-hidden h-4">
          <div className="flex items-center gap-3 text-white font-black text-[9px] uppercase tracking-[0.3em] translate-y-full group-hover:translate-y-0 transition-transform duration-700">
            Explore The Archive <ArrowRight size={14} className="text-warm-gold" />
          </div>
        </div>
      </div>
    </Link>
  );
};

// ── MAIN PAGE COMPONENT ──

export default function Home() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: { id: "Banjarmasin: Kota Seribu Sungai", en: "Banjarmasin: City of a Thousand Rivers" },
      subtitle: "The Soul of Martapura",
      image: "/images/budaya/Menara_Pandang_Banjarmasin_001.jpg",
      type: "cinematic"
    },
    {
      title: { id: "Harmoni Budaya Banjar", en: "Culture Harmony" },
      subtitle: "Living Heritage",
      image: "/images/budaya/Pasar_terapung_Banjarmasin_7.jpg",
      type: "mosaic"
    },
    {
      title: { id: "Gerbang Digital Kalimantan", en: "Borneo Digital Gateway" },
      subtitle: "Looking Ahead",
      image: "/images/wisata/Jembatan_Sei_Alalak,_Banjarmasin.jpg",
      type: "split"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 10000); // 10 seconds per structural shift
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { label: { id: "Luas Wilayah", en: "Total Area" }, value: "98.46", suffix: "km²", icon: MapIcon },
    { label: { id: "Jumlah Sungai", en: "Rivers" }, value: "102", suffix: "+", icon: Droplets },
    { label: { id: "Populasi", en: "Population" }, value: "700k", suffix: "+", icon: Users },
    { label: { id: "Sejarah", en: "History" }, value: "500", suffix: "yr+", icon: Calendar },
  ];

  const horizontalX = useTransform(scrollYProgress, [0.4, 0.75], ["0%", "-75%"]);

  return (
    <main ref={containerRef} className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <NavigationBar />
      <PageTransitionWrapper>
        
        {/* ── DYNAMIC MULTI-LAYOUT HERO ── */}
        <section className="relative w-full h-screen overflow-hidden bg-river-blue">
          
          <div className="relative w-full h-full overflow-hidden z-10">
            <AnimatePresence mode="wait">
               {activeSlide === 0 && <CinematicHero key="cinematic" data={slides[0]} t={t} />}
               {activeSlide === 1 && <MosaicHero key="mosaic" data={slides[1]} t={t} />}
               {activeSlide === 2 && <SplitHero key="split" data={slides[2]} t={t} />}
            </AnimatePresence>

            {/* Navigation Dots (Global Overlay) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[100] flex gap-4 bg-river-blue/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
               {slides.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all ${i === activeSlide ? "bg-warm-gold w-8" : "bg-white/40"}`}
                  />
               ))}
            </div>
            
            <WaterRippleHero />
          </div>
        </section>

        {/* ── SECTION 1: THE PULSE ── */}
        <section className="relative py-80 overflow-hidden bg-white">
           <FadeInView>
              <div className="max-w-7xl mx-auto px-6 text-center">
                 <h2 className="text-[15vw] font-black text-river-blue/[0.03] tracking-tighter leading-none select-none absolute inset-0 flex items-center justify-center pointer-events-none">
                    PULSE
                 </h2>
                 <p className="relative z-10 text-3xl md:text-5xl font-bold text-river-blue tracking-tight max-w-3xl mx-auto leading-relaxed">
                    {t({ 
                      id: "Denyut kehidupan yang mengalir deras melintasi zaman, kini bertransformasi menjadi masa depan.", 
                      en: "The pulse of life that flows strongly across time, now transforming into the future." 
                    })}
                 </p>
                 <div className="h-0.5 w-16 bg-warm-gold/30 mx-auto mt-20" />
              </div>
           </FadeInView>
        </section>

        {/* ── SECTION 2: THE ARCHIVE CHAPTERS ── */}
        <section className="relative h-screen min-h-[900px] flex flex-col lg:flex-row bg-river-blue overflow-hidden">
           <MagneticPillar 
             i={0}
             pillar={{ 
               title: { id: "Sejarah", en: "History" }, 
               desc: { id: "Dari Kesultanan Banjar hingga era kolonial, temukan arsip masa lalu.", en: "From the Banjarmasin Sultanate to the colonial era, discover the archives." },
               href: "/sejarah",
               image: "/images/sejarah/PERANG_BANJAR_1857-1859.jpg"
             }} 
           />
           <MagneticPillar 
             i={1}
             pillar={{ 
               title: { id: "Warisan Budaya", en: "Culture" }, 
               desc: { id: "Ritme harian di atas sungai dan kilauan warna kain Sasirangan.", en: "Daily rhythms above the river and the sparkle of Sasirangan." },
               href: "/budaya",
               image: "/images/budaya/Pasar_terapung_Banjarmasin_7.jpg"
             }} 
           />
           <MagneticPillar 
             i={2}
             pillar={{ 
               title: { id: "Destinasi Wisata", en: "Tourism" }, 
               desc: { id: "Permata tersembunyi di setiap kanal dan jembatan yang menghubungkan mimpi.", en: "Hidden gems in every canal and bridge that connect dreams." },
               href: "/wisata",
               image: "/images/wisata/Jembatan_Sei_Alalak,_Banjarmasin.jpg"
             }} 
           />
        </section>

        {/* ── SECTION 3: THE JOURNAL ── */}
        <section className="relative h-[300vh] bg-slate-50">
           <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 w-full mb-20">
                 <FadeInView>
                    <span className="text-warm-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Monthly Archive</span>
                    <h2 className="text-4xl md:text-7xl font-bold text-river-blue tracking-tight">
                       The Rivers Journal.
                    </h2>
                 </FadeInView>
              </div>

              <motion.div style={{ x: horizontalX }} className="flex gap-16 px-[10vw]">
                 {blogPosts.map((post, i) => (
                    <Link 
                      key={i} 
                      href={`/blog/${post.slug}`}
                      className="w-[85vw] md:w-[42vw] shrink-0 group"
                    >
                       <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-10 shadow-premium-soft border border-slate-100">
                          <Image src={post.image} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
                          <div className="absolute inset-0 bg-river-blue/10 group-hover:bg-transparent transition-colors duration-700" />
                          <div className="absolute bottom-8 right-8">
                             <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-river-blue shadow-lg group-hover:bg-warm-gold transition-colors">
                                <ArrowUpRight size={20} />
                             </div>
                          </div>
                       </div>
                       <div className="px-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-warm-gold mb-3 block">{t(post.category)}</span>
                          <h3 className="text-2xl md:text-3xl font-bold text-river-blue mb-4 leading-tight group-hover:text-warm-gold transition-colors">{t(post.title)}</h3>
                          <p className="text-river-blue/40 font-medium text-sm line-clamp-2 leading-relaxed">{t(post.excerpt)}</p>
                       </div>
                    </Link>
                 ))}
                 
                 <div className="w-[30vw] shrink-0 flex items-center justify-center">
                    <Link href="/blog" className="flex flex-col items-center gap-8 group">
                       <div className="w-40 h-40 rounded-full border border-river-blue/5 flex items-center justify-center group-hover:bg-river-blue transition-all">
                          <MoveRight size={48} className="text-river-blue/20 group-hover:text-white transition-colors" />
                       </div>
                       <span className="font-bold text-[10px] uppercase tracking-[0.4em] text-river-blue/30">View More Stories</span>
                    </Link>
                 </div>
              </motion.div>
           </div>
        </section>

        {/* ── SECTION 4: ATLAS ── */}
        <SectionWrapper className="py-60 bg-white border-t border-slate-50">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div>
                    <FadeInView>
                       <span className="text-warm-gold font-bold uppercase tracking-[0.6em] text-[10px] mb-8 block">Quantified City</span>
                       <h2 className="text-5xl md:text-[6rem] font-bold text-river-blue tracking-tight leading-[0.9] mb-12">
                          Statistical <br />Atlas.
                       </h2>
                    </FadeInView>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, i) => (
                      <FadeInView key={i} delay={i * 0.1}>
                         <div className="aspect-square bg-slate-50/50 border border-slate-100 rounded-[2.5rem] p-12 flex flex-col justify-between group hover:bg-river-blue transition-all duration-700">
                            <stat.icon size={28} className="text-river-blue group-hover:text-warm-gold transition-colors" />
                            <div>
                               <div className="text-4xl md:text-5xl font-bold text-river-blue group-hover:text-white transition-colors tracking-tight mb-2">
                                  {stat.value}
                               </div>
                               <div className="text-[10px] font-bold uppercase tracking-widest text-river-blue/30 group-hover:text-warm-gold transition-colors">
                                  {t(stat.label)}
                               </div>
                            </div>
                         </div>
                      </FadeInView>
                    ))}
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* ── FINAL CTA ── */}
        <section className="py-60 bg-river-blue text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,197,24,0.1),transparent_70%)]" />
           <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <FadeInView>
                 <Sparkles className="mx-auto text-warm-gold mb-16" size={56} />
                 <h2 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-16">
                    Start Your <br /><span className="text-warm-gold">Legacy</span> Today.
                 </h2>
                 <div className="flex flex-wrap justify-center gap-8">
                    <Link href="/wisata" className="px-16 py-8 bg-warm-gold text-river-blue rounded-full font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-premium-glow">
                       Explore The Archive
                    </Link>
                 </div>
              </FadeInView>
           </div>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
