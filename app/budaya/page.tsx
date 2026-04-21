"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import Accordion from "@/components/ui/Accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { RiverWaves, TopoLines, EditorialNoise, MotifBackground } from "@/components/ui/SectionBackgrounds";
import Waves from "@/components/ui/Waves";
import { History, Palette, Music, Landmark, Users, Heart, Camera, Map } from "lucide-react";

// ── HEPER: PORTRAIT CARD ──
const PortraitCard = ({ src, label, delay = 0, bgColor = "bg-rose-50", size = "md", className = "", priority = false, t }: any) => {
  const sizeClasses = {
    sm: "aspect-[4/5] w-20 md:w-28",
    md: "aspect-[4/5] w-28 md:w-40",
    lg: "aspect-[4/5] w-44 md:w-60",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("relative group cursor-pointer shrink-0 select-none", className)}
    >
      <div className={cn("relative rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700", bgColor, sizeClasses[size as keyof typeof sizeClasses])}>
        <Image
          src={src}
          alt={typeof label === "string" ? label : (t(label) || "Banjarmasin Culture")}
          fill
          priority={priority}
          sizes="(max-width: 768px) 160px, 240px"
          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/95 backdrop-blur-md rounded-lg border border-white/10 shadow-lg opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all z-20 whitespace-nowrap">
         <span className="text-[7px] font-black text-river-blue uppercase tracking-widest">{typeof label === "string" ? label : t(label)}</span>
      </div>
    </motion.div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

export default function Budaya() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const imgScale = useTransform(scrollY, [0, 400], [1.08, 1]);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const culturalArts = [
    { id: "mamanda", title: { id: "Teater Mamanda", en: "Mamanda Theater" }, content: { id: "Seni teater tradisional suku Banjar yang bersifat improvisasi dengan tema kerajaan atau kehidupan sehari-hari yang disisipi kritik sosial dan humor.", en: "Traditional improvisational theater of the Banjar people with royal or daily life themes, interspersed with social criticism and humor." } },
    { id: "madihin", title: { id: "Seni Madihin", en: "Madihin Art" }, content: { id: "Seni puisi lisan khas Banjar yang dinyanyikan secara spontan dengan iringan alat musik gendang atau terbang (rebana).", en: "Banjar oral poetry art sung spontaneously accompanied by a drum or tambourine (rebana)." } },
    { id: "hadrah", title: { id: "Musik Hadrah", en: "Hadrah Music" }, content: { id: "Musik religius bernapaskan Islam dengan iringan rebana dan syair-syair berisi pujian kepada Allah dan teladan Nabi.", en: "Islamic religious music accompanied by tambourines and lyrics containing praise to Allah and the Prophet's example." } },
    { id: "baayun", title: { id: "Baayun Maulid", en: "Baayun Maulid" }, content: { id: "Tradisi mengayun bayi dalam ayunan berhias sebagai ungkapan syukur dan doa keselamatan, dilaksanakan pada peringatan Maulid Nabi.", en: "Tradition of swinging babies in decorated cradles as an expression of gratitude and prayer for safety, held during the Prophet's Birthday commemoration." } },
  ];

  const motifs = [
    { name: "Iris Pudak", desc: { id: "Keharuman", en: "Fragrance" }, color: "bg-amber-100 text-amber-800" },
    { name: "Kambang Raja", desc: { id: "Martabat", en: "Dignity" }, color: "bg-rose-100 text-rose-800" },
    { name: "Ombak Sinapur", desc: { id: "Keberanian", en: "Courage" }, color: "bg-blue-100 text-blue-800" },
    { name: "Bayam Raja", desc: { id: "Kekuatan", en: "Strength" }, color: "bg-emerald-100 text-emerald-800" },
    { name: "Daun Jaruju", desc: { id: "Perlindungan", en: "Protection" }, color: "bg-violet-100 text-violet-800" },
    { name: "Kambang Tanjung", desc: { id: "Keindahan", en: "Beauty" }, color: "bg-orange-100 text-orange-800" },
  ];

  const philosophyValues = [
    { title: "Kayuh Baimbai", sub: { id: "Bekerjasama", en: "Working Together" } },
    { title: "Adab Banjar",   sub: { id: "Kesantunan", en: "Politeness" } },
    { title: "Religiusitas",  sub: { id: "Spiritualitas", en: "Spirituality" } },
    { title: "Sungai",        sub: { id: "Adaptabilitas", en: "Adaptability" } },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>
        {/* ── PREMIUM HERO: THE MONUMENT ── */}
        <header className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
          {/* 1. Heritage Background */}
          <MotifBackground variant="sasirangan" opacity={0.08} />
          
          {/* 2. Interactive Water Background (ReactBits) */}
          <div className="absolute inset-0 z-0">
             <Waves
                lineColor="rgba(6, 40, 61, 0.08)"
                backgroundColor="transparent"
                waveSpeedX={0.0125}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
             />
          </div>
          
          {/* 3. Visual Textures */}
          <div className="absolute inset-0 bg-pattern-grid opacity-[0.02] -z-10" />

          {/* 3. Floating Emojis (Accent) */}
          <div className="absolute top-32 left-[5%] w-16 h-16 bg-white/60 backdrop-blur-xl rounded-2xl shadow-premium-soft flex items-center justify-center text-2xl animate-float hidden xl:flex border border-white/80 z-20">
            🎭
          </div>
          <div className="absolute top-48 right-[8%] w-12 h-12 bg-white/60 backdrop-blur-xl rounded-2xl shadow-premium-soft flex items-center justify-center text-xl animate-bounce-slow hidden xl:flex border border-white/80 z-20">
            🎨
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-4 pb-32">
            <FadeInView className="relative z-30">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 font-bold text-[10px] tracking-[0.2em] uppercase shadow-sm mb-10">
                <span className="flex h-1.5 w-1.5 rounded-full bg-warm-gold animate-pulse"></span>
                {t({ id: "WARISAN BUDAYA", en: "CULTURAL HERITAGE" })}
              </div>

              <h1 
                className="font-heading font-black text-river-blue leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto"
                style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
              >
                Kami Adalah <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-river-blue via-warm-gold to-river-blue bg-[length:200%_auto] animate-gradient-flow">
                   Banjarmasin.
                </span>
              </h1>
              
              <p className="text-lg text-river-blue/60 font-medium leading-relaxed max-w-xl mx-auto opacity-80">
                {t({ 
                  id: "Konvergensi antara keluhuran budaya sungai, ketajaman seni, dan jiwa yang ramah. Inilah wajah peradaban kami.", 
                  en: "The convergence of river cultural nobility, artistic sharpness, and friendly souls. This is the face of our civilization." 
                })}
              </p>
            </FadeInView>

            {/* ── PREMIUM ORBITAL CLOUD: 6 Verified Local Assets (Wide Arc) ── */}
            {mounted && (
              <div className="absolute inset-0 -z-10 pointer-events-none select-none">
                {/* 1. Menara Pandang (Top Left) - Adjusted to clear navbar */}
                <div className="absolute top-[12%] left-[2%] md:left-[8%]">
                  <PortraitCard t={t} 
                    src="/images/budaya/Menara_Pandang_Banjarmasin_001.jpg" 
                    label={{ id: "Menara Pandang", en: "Observation Tower" }} 
                    delay={0.2} size="sm" 
                    priority={true}
                    className="animate-float" 
                    style={{ animationDuration: "11s" }}
                  />
                </div>

                {/* 2. Masjid Raya (Top Right) - Adjusted to clear navbar */}
                <div className="absolute top-[18%] right-[2%] md:right-[5%]">
                  <PortraitCard t={t} 
                    src="/images/budaya/Masjid_Raya_Sabilal_Muhtadin.jpg" 
                    label={{ id: "Masjid Raya", en: "Great Mosque" }} 
                    delay={0.4} size="md" 
                    priority={true}
                    className="animate-float"
                    style={{ animationDuration: "14s", animationDelay: "1.5s" }}
                  />
                </div>

                {/* 3. Kain Sasirangan (Middle Left) */}
                <div className="absolute top-[35%] left-[-2%] md:left-[1%]">
                  <PortraitCard t={t} 
                    src="/images/budaya/Kain_Sasirangan_di_Kampung_Sasirangan_Banjarmasin.jpg" 
                    label={{ id: "Kain Sasirangan", en: "Sasirangan Textile" }} 
                    delay={0.3} size="md" 
                    className="animate-float"
                    style={{ animationDuration: "9s", animationDelay: "0.5s" }}
                  />
                </div>

                {/* 4. Baksa Kembang (Middle Right) */}
                <div className="absolute top-[40%] right-[-1%] md:right-[1%]">
                  <PortraitCard t={t} 
                    src="/images/budaya/Baksa_Kembang_welcome_dance,_Aria_Barito_Hotel,_Banjarmasin_2018-07-27_01.jpg" 
                    label={{ id: "Tari Tradisional", en: "Traditional Dance" }} 
                    delay={0.5} size="sm" 
                    className="animate-float"
                    style={{ animationDuration: "12s", animationDelay: "2s" }}
                  />
                </div>

                {/* 5. Pasar Terapung (Bottom Left) */}
                <div className="absolute bottom-[-15%] lg:bottom-[-25%] left-[5%] md:left-[10%]">
                  <PortraitCard t={t} 
                    src="/images/budaya/Pasar_terapung_Banjarmasin_7.jpg" 
                    label={{ id: "Pasar Terapung", en: "Floating Market" }} 
                    delay={0.6} size="md" 
                    className="animate-float"
                    style={{ animationDuration: "13s", animationDelay: "1s" }}
                  />
                </div>

                {/* 6. Peserta Karnaval (Bottom Right) */}
                <div className="absolute bottom-[-15%] lg:bottom-[-25%] right-[5%] md:right-[10%]">
                  <PortraitCard t={t} 
                    src="/images/budaya/Peserta_Karnaval_FBPT_2018_001.JPG" 
                    label={{ id: "Budaya Lokal", en: "Local Culture" }} 
                    delay={0.7} size="md" 
                    className="animate-float"
                    style={{ animationDuration: "11.5s", animationDelay: "0.8s" }}
                  />
                </div>
              </div>
            )}
          </div>
        </header>

        {/* ── SECTION 1: ARCHITECTURAL SYMPHONY (Masjid Raya) ── */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-river-blue">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ scale: imgScale }}
          >
            <Image 
              src="/images/budaya/Masjid_Raya_Sabilal_Muhtadin.jpg" 
              alt="Masjid Raya Sabilal Muhtadin" fill className="object-cover opacity-60 contrast-125" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-river-blue/80 via-transparent to-river-blue" />
          </motion.div>
          
          <div className="relative z-10 text-center max-w-4xl px-6">
             <FadeInView>
               <h2 
                 className="text-white font-[900] mb-6 leading-none tracking-tighter"
                 style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}
               >
                 {t({ id: "Fondasi Spiritual.", en: "Spiritual Foundation." })}
               </h2>
               <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto italic leading-relaxed">
                 {t({ 
                   id: "Masjid Raya Sabilal Muhtadin — Megahnya arsitektur yang berakar pada keteguhan iman masyarakat sungai.", 
                   en: "Sabilal Muhtadin Great Mosque — Architecture's grandeur rooted in the river community's unwavering faith." 
                 })}
               </p>
             </FadeInView>
          </div>
        </section>

        {/* ── SECTION 2: THE LIVING CANVAS (Sasirangan Editorial) ── */}
        <SectionWrapper className="bg-stone-50 py-32 md:py-48 overflow-hidden relative">
          <MotifBackground variant="sasirangan" opacity={0.02} />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <FadeInView direction="left">
                 <div className="inline-flex items-center gap-2 mb-6 text-warm-gold font-black text-[10px] tracking-[0.3em] uppercase">
                    <Palette size={14} />
                    {t({ id: "Kekayaan Tekstil", en: "Textile Heritage" })}
                 </div>
                 <h2 className="text-5xl md:text-7xl font-[900] text-river-blue mb-8 tracking-tighter leading-none">
                    {t({ id: "Goresan Doa di Atas Kain.", en: "Woven Prayers Upon Canvas." })}
                 </h2>
                 <p className="text-lg text-river-blue/60 mb-12 leading-relaxed font-medium max-w-lg">
                    {t({ 
                      id: "Sasirangan lahir dari tradisi pengobatan 'Pamali', bertransformasi menjadi identitas visual yang memukau. Setiap motifnya menyimpan filosofi mendalam masyarakat Banjar.", 
                      en: "Born from the 'Pamali' healing tradition, Sasirangan has transformed into a stunning visual identity. Each motif encapsulates the deep philosophy of the Banjar people." 
                    })}
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4">
                    {motifs.slice(0, 4).map((m, i) => (
                      <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-premium-soft hover:shadow-2xl transition-all group">
                         <div className="text-sm font-black text-river-blue mb-1 group-hover:text-warm-gold transition-colors">{m.name}</div>
                         <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{t(m.desc)}</div>
                      </div>
                    ))}
                 </div>
              </FadeInView>

              <div className="relative">
                <div className="relative z-10 flex gap-6 mt-12 lg:mt-0">
                  <motion.div 
                    className="w-2/3 aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white"
                    style={{ y: useTransform(scrollY, [1200, 2200], [0, 80]) }}
                  >
                    <Image 
                      src="/images/budaya/Kain_Sasirangan_di_Kampung_Sasirangan_Banjarmasin.jpg" 
                      alt="Sasirangan Detail" fill className="object-cover" 
                    />
                  </motion.div>
                  <motion.div 
                    className="w-1/2 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl mt-24 border-8 border-white relative"
                    style={{ y: useTransform(scrollY, [1200, 2200], [0, -60]) }}
                  >
                    <Image 
                      src="/images/budaya/Peserta_Karnaval_FBPT_2018_001.JPG" 
                      alt="Production" fill className="object-cover" 
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* ── SECTION 3: THE SOUND OF THOUSAND RIVERS (Arts Gallery) ── */}
        <SectionWrapper className="bg-white py-40 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <FadeInView className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-4 text-river-blue/40 font-black text-[10px] tracking-widest uppercase">
                  <Music size={14} />
                  {t({ id: "Seni & Pertunjukan", en: "Fine Arts & Performances" })}
                </div>
                <h2 className="text-5xl md:text-8xl font-[900] text-river-blue tracking-tighter leading-[0.85]">
                  {t({ id: "Nada yang Mengalir.", en: "Rhythms that Flow." })}
                </h2>
              </FadeInView>
              <FadeInView delay={0.3} className="max-w-sm text-right">
                 <p className="text-river-blue/60 font-medium leading-relaxed">
                   {t({ 
                     id: "Dari petikan Panting hingga rima Madihin, suara kami adalah pantulan riak sungai Martapura yang tak pernah diam.", 
                     en: "From the strings of Panting to the rhymes of Madihin, our voices resonate as the ever-moving ripples of the Martapura river." 
                   })}
                 </p>
              </FadeInView>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-16 items-center">
              <div className="w-full md:w-1/3">
                 <Accordion items={culturalArts} />
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-10">
                 <motion.div 
                   className="rounded-[4rem] overflow-hidden aspect-[4/5] relative shadow-premium-deep border-4 border-slate-50"
                   whileHover={{ scale: 1.02 }}
                 >
                    <Image src="/images/budaya/Tari_Japin_Sigam_1.jpg" alt="Art Performance" fill className="object-cover" />
                    <div className="absolute inset-0 bg-warm-gold/20 mix-blend-overlay" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <motion.div 
                         animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                         transition={{ duration: 4, repeat: Infinity }}
                         className="w-32 h-32 rounded-full border border-white/50"
                       />
                    </div>
                 </motion.div>
                 
                 <div className="pt-24 lg:pt-32">
                    <motion.div 
                      className="rounded-[4rem] overflow-hidden aspect-[3/4] relative shadow-premium-deep border-4 border-slate-50"
                      whileHover={{ scale: 1.02 }}
                    >
                       <Image src="/images/budaya/Baksa_Kembang_welcome_dance,_Aria_Barito_Hotel,_Banjarmasin_2018-07-27_01.jpg" alt="Dance" fill className="object-cover" />
                    </motion.div>
                 </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* ── SECTION 4: RITUALS IN MOTION (Identity & Philosophy) ── */}
        <section className="bg-river-blue py-32 md:py-56 relative overflow-hidden">
          <TopoLines color="rgba(255,255,255,0.05)" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
             <div className="text-center mb-32">
                <FadeInView>
                   <span className="text-warm-gold font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">
                      {t({ id: "Nilai & Tradisi", en: "Identity & Values" })}
                   </span>
                   <h2 
                    className="text-white font-[900] tracking-tighter leading-none mb-10"
                    style={{ fontSize: "clamp(3.5rem, 12vw, 12rem)" }}
                   >
                      Kayuh <br className="md:hidden" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-gold via-white to-warm-gold bg-[length:200%_auto] animate-gradient-flow whitespace-nowrap">Baimbai.</span>
                   </h2>
                   <p className="text-xl text-white/40 font-medium max-w-2xl mx-auto italic leading-relaxed">
                      {t({ 
                        id: "Satu komando dalam barisan, satu tujuan dalam kayuhan. Manifestasi solidaritas spiritual masyarakat sungai.", 
                        en: "One command in rank, one goal in stroke. A manifestation of the river community's spiritual solidarity." 
                      })}
                   </p>
                </FadeInView>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {philosophyValues.map((v, i) => (
                  <FadeInView key={i} delay={i * 0.15}>
                    <div className="group p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white hover:shadow-2xl transition-all duration-700">
                       <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-warm-gold mb-10 group-hover:bg-river-blue group-hover:text-white transition-all">
                          <Heart size={28} />
                       </div>
                       <h3 className="text-2xl font-black text-white group-hover:text-river-blue transition-colors mb-3 leading-tight">{v.title}</h3>
                       <p className="text-white/40 group-hover:text-river-blue/60 font-bold uppercase tracking-widest text-[10px] transition-colors">{t(v.sub)}</p>
                    </div>
                  </FadeInView>
                ))}
             </div>
             
             <FadeInView delay={0.6} className="mt-32 text-center">
                <Link href="/wisata" className="inline-flex items-center gap-3 px-10 py-5 bg-warm-gold text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-river-blue transition-all shadow-premium-glow">
                   {t({ id: "Lihat Wisata Budaya", en: "Explore Cultural Sites" })}
                   <Landmark size={18} />
                </Link>
             </FadeInView>
          </div>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
