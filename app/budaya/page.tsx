"use client";

import React from "react";
import Image from "next/image";
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
import { History, Palette, Music, Landmark, Users, Heart, Camera, Map } from "lucide-react";

// ── HEPER: PORTRAIT CARD ──
const PortraitCard = ({ src, label, delay = 0, bgColor = "bg-rose-50", size = "md", className = "" }: any) => {
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
      className={cn("relative group cursor-pointer shrink-0 shrink-0 select-none", className)}
    >
      <div className={cn("relative rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700", bgColor, sizeClasses[size as keyof typeof sizeClasses])}>
        <Image
          src={src}
          alt={label}
          fill
          unoptimized={true}
          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/95 backdrop-blur-md rounded-lg border border-white/10 shadow-lg opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all z-20 whitespace-nowrap">
         <span className="text-[7px] font-black text-river-blue uppercase tracking-widest">{label}</span>
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
        {/* ── HERO: High Density "Crowd" Layout ── */}
        <section className="relative flex flex-col items-center pt-20 pb-16 overflow-hidden bg-white">
          <div className="relative z-20 text-center max-w-2xl px-6 mb-12">
            <FadeInView>
              <span className="inline-flex items-center gap-2 text-violet-600 font-bold uppercase tracking-[0.4em] text-[8px] mb-4 py-1 px-3 rounded-full bg-violet-50 border border-violet-100/50">
                <Heart size={8} className="fill-current" />
                {t({ id: "BORNEO CULTURAL ARCHIVE", en: "BORNEO CULTURAL ARCHIVE" })}
              </span>
              <h1 className="font-heading font-black text-river-blue text-4xl md:text-6xl tracking-tightest leading-[0.95] mb-6">
                Kami Adalah <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-river-blue via-warm-gold to-river-blue bg-[length:200%_auto] animate-gradient-flow">
                   Banjarmasin.
                </span>
              </h1>
              <p className="text-river-blue/40 font-body text-xs md:text-sm leading-relaxed max-w-lg mx-auto mb-8">
                {t({ 
                  id: "Konvergensi antara keluhuran budaya sungai, ketajaman seni, dan jiwa yang ramah. Inilah wajah peradaban kami.", 
                  en: "The convergence of river cultural nobility, artistic sharpness, and friendly souls. This is the face of our civilization." 
                })}
              </p>
              <div className="flex items-center justify-center">
                 <button className="px-10 py-4 bg-river-blue text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-river-blue-900 transition-all shadow-2xl shadow-river-blue/20 transform hover:scale-105">
                    {t({ id: "Jelajahi Warisan", en: "Explore Heritage" })}
                 </button>
              </div>
            </FadeInView>
          </div>

          {/* HIGH DENSITY 13+ PORTRAIT GRID WITH WAVE STAGGERING */}
          <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden">
             {/* Edge Masking Effect */}
             <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-white via-transparent to-white lg:from-white/80 lg:to-white/80" />
             
             {mounted && (
               <div className="flex items-center justify-center gap-3 md:gap-5 min-h-[350px] md:min-h-[500px]">
                 
                 {/* COLUMN 1: Outer Left (Faded) */}
                 <div className="flex flex-col gap-4 -translate-y-12">
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sasirangan_Banjarmasin.JPG/800px-Sasirangan_Banjarmasin.JPG" label="Workshop" delay={0.4} size="sm" bgColor="bg-emerald-50" />
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Pasar_Terapung_Lok_Baintan_1.jpg/800px-Pasar_Terapung_Lok_Baintan_1.jpg" label="Merchant" delay={0.5} size="sm" bgColor="bg-blue-50" />
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Sabilal_Muhtadin_Interior.jpg/800px-Sabilal_Muhtadin_Interior.jpg" label="Archive" delay={0.6} size="sm" bgColor="bg-rose-50" />
                 </div>

                 {/* COLUMN 2: Inner Left */}
                 <div className="flex flex-col gap-4 translate-y-8">
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pemain_panting_banjar.jpg/800px-Pemain_panting_banjar.jpg" label="Musician" delay={0.2} size="md" bgColor="bg-amber-50" />
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Madihin_Performer.jpg/800px-Madihin_Performer.jpg" label="Orator" delay={0.3} size="md" bgColor="bg-emerald-50" />
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Banjar_Tradition.jpg/800px-Banjar_Tradition.jpg" label="Customs" delay={0.4} size="md" bgColor="bg-violet-50" />
                 </div>

                 {/* COLUMN 3: Center (The Large One) */}
                 <div className="flex flex-col gap-4 -translate-y-4 z-10">
                   <PortraitCard 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Nanang_Galuh_Banjarmasin_2013.jpg/800px-Nanang_Galuh_Banjarmasin_2013.jpg" 
                      label="Nanang & Galuh" 
                      delay={0}
                      size="lg"
                      bgColor="bg-white"
                      className="shadow-2xl ring-8 ring-white"
                   />
                 </div>

                 {/* COLUMN 4: Inner Right */}
                 <div className="flex flex-col gap-4 translate-y-8">
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Baksa_Kembang_Banjar.jpg/800px-Baksa_Kembang_Banjar.jpg" label="Dancer" delay={0.1} size="md" bgColor="bg-rose-50" />
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Galuh_Banjar_2011.jpg/800px-Galuh_Banjar_2011.jpg" label="Ambassador" delay={0.2} size="md" bgColor="bg-blue-50" />
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sinoman_Hadrah.jpg/800px-Sinoman_Hadrah.jpg" label="Tradition" delay={0.3} size="md" bgColor="bg-amber-50" />
                 </div>

                 {/* COLUMN 5: Outer Right (Faded) */}
                 <div className="flex flex-col gap-4 -translate-y-12">
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tari_Topeng_Banjar.jpg/800px-Tari_Topeng_Banjar.jpg" label="Mask Art" delay={0.5} size="sm" bgColor="bg-violet-50" />
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pedagang_Pasar_Terapung.jpg/800px-Pedagang_Pasar_Terapung.jpg" label="Floating Market" delay={0.6} size="sm" bgColor="bg-emerald-50" />
                   <PortraitCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tari_Japin_Sigam_2.jpg/800px-Tari_Japin_Sigam_2.jpg" label="Perform" delay={0.7} size="sm" bgColor="bg-rose-50" />
                 </div>
               </div>
             )}
          </div>
        </section>

        {/* ── SECTION: SASIRANGAN (Motif Background) ── */}
        <section className="py-24 md:py-48 bg-stone-50 relative overflow-hidden">
          <MotifBackground variant="sasirangan" opacity={0.03} />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <FadeInView direction="right" className="lg:col-span-5">
                <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Living Canvas</span>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-river-blue mb-8 leading-none tracking-tighter">Goresan <span className="text-warm-gold italic">Doa.</span></h2>
                <p className="text-river-blue/50 font-body text-sm leading-relaxed mb-10">
                   {t({ 
                     id: "Sasirangan bukan sekadar kain. Setiap lipatan dan teknik ikat celupnya adalah doa visual yang diwariskan turun-temurun untuk kesehatan dan kemuliaan.", 
                     en: "Sasirangan is not just a cloth. Every fold and tie-dye technique is a visual prayer passed down for health and glory." 
                   })}
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-warm-gold/10 flex items-center justify-center text-warm-gold">
                      <Palette size={20} />
                   </div>
                   <span className="text-[11px] font-black uppercase tracking-widest text-river-blue">100% Hand-Dyed Traditional Technique</span>
                </div>
              </FadeInView>
              <div className="lg:col-span-7">
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {motifs.map((motif, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-river-blue/5 flex flex-col items-center text-center group"
                      >
                         <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", motif.color)}>
                            <div className="font-black text-lg">{motif.name[0]}</div>
                         </div>
                         <h3 className="text-[13px] font-black uppercase tracking-widest text-river-blue mb-2">{motif.name}</h3>
                         <span className="text-[10px] font-black text-river-blue/30 uppercase tracking-[0.2em]">{t(motif.desc)}</span>
                      </motion.div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION: ARTS (River Waves) ── */}
        <section className="py-24 md:py-48 bg-white relative overflow-hidden">
          <RiverWaves />
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mb-24">
            <FadeInView>
              <span className="text-river-blue/40 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Performing Arts</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-river-blue tracking-tighter">Ekspresi <span className="text-warm-gold">Jiwa.</span></h2>
            </FadeInView>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
             <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden group">
                   <Image 
                      src="https://commons.wikimedia.org/w/thumb.php?f=Tari_Japin_Sigam_1.jpg&w=1200" 
                      alt="Art" 
                      fill 
                      unoptimized={true}
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-river-blue/80 via-transparent to-transparent opacity-60" />
                   <div className="absolute bottom-12 left-12">
                      <div className="w-14 h-14 rounded-2xl bg-warm-gold text-white flex items-center justify-center shadow-2xl mb-4">
                         <Music size={24} />
                      </div>
                      <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Ancient Melodies</span>
                   </div>
                </div>
             </div>
             <div className="lg:col-span-7">
                <div className="space-y-6">
                   {culturalArts.map((art, idx) => (
                     <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-[2.5rem] bg-river-blue/5 border border-river-blue/5 hover:bg-river-blue/10 transition-all group"
                     >
                        <h3 className="text-xl font-heading font-black text-river-blue mb-4 group-hover:text-warm-gold transition-colors">{t(art.title)}</h3>
                        <p className="text-river-blue/50 text-sm leading-relaxed">{t(art.content)}</p>
                     </motion.div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* ── SECTION: ARCHITECTURE (Dark & Topo) ── */}
        <section className="py-24 md:py-48 bg-[#0a0f1a] text-white relative overflow-hidden">
          <TopoLines />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="relative aspect-[16/10] rounded-[3.5rem] overflow-hidden shadow-2xl">
                  <Image 
                     src="https://commons.wikimedia.org/w/thumb.php?f=Rumah_Adat_Bubungan_Tinggi_Banjarmasin.jpg&w=1200" 
                     alt="Architecture" 
                     fill 
                     unoptimized={true}
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-river-blue/20 mix-blend-overlay" />
               </div>
               <div>
                  <FadeInView direction="left">
                    <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Sacred Structure</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8 leading-none tracking-tighter">Rumah <br /><span className="text-warm-gold italic">Bubungan Tinggi.</span></h2>
                    <p className="text-white/40 font-body text-sm leading-relaxed mb-10">
                       {t({ 
                         id: "Puncak estetika arsitektur panggung yang didesain adaptif terhadap pasang surut sungai. Setiap ukiran ornamennya menyimpan filosofi ketuhanan dan harmoni alam.", 
                         en: "The pinnacle of stilted architecture designed to adapt to river tides. Each ornamental carving stores philosophies of divinity and natural harmony." 
                       })}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5">
                          <div className="text-warm-gold font-black text-xs uppercase tracking-widest mb-2">Structure</div>
                          <div className="text-[13px] font-black">Stilted Deck</div>
                       </div>
                       <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5">
                          <div className="text-warm-gold font-black text-xs uppercase tracking-widest mb-2">Status</div>
                          <div className="text-[13px] font-black">Royal Heritage</div>
                       </div>
                    </div>
                  </FadeInView>
               </div>
            </div>
          </div>
        </section>

        {/* ── UPACARA & TRADISI ── */}
        <section className="py-20 md:py-28 bg-clean-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">{t({ id: "Adat & Ritual", en: "Customs & Rituals" })}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">{t({ id: "Upacara & Tradisi", en: "Ceremonies & Traditions" })}</h2>
            </FadeInView>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: { id: "Haul Guru Sekumpul", en: "Haul Guru Sekumpul" }, category: { id: "Religi Islam", en: "Islamic Religious" }, desc: { id: "Peringatan tahunan wafatnya ulama besar KH Zaini Abdul Ghani yang dihadiri lebih dari 2,5 juta peziarah.", en: "Annual commemoration of the passing of great scholar KH Zaini Abdul Ghani attended by over 2.5 million pilgrims." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Raya_Sabilal_Muhtadin_3.jpg", accentColor: "border-emerald-400", tagColor: "bg-emerald-100 text-emerald-700" },
                { title: { id: "Upacara Malanuh", en: "Malanuh Ceremony" }, category: { id: "Tradisi Hindu-Buddha", en: "Hindu-Buddhist Tradition" }, desc: { id: "Ritual persembahan kepada makhluk gaib yang mencerminkan pengaruh Hindu-Buddha pra-Islam dalam budaya Banjar.", en: "Offering ritual to supernatural beings reflecting pre-Islamic Hindu-Buddhist influence in Banjar culture." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tari_Japin_Sigam_2.jpg", accentColor: "border-amber-400", tagColor: "bg-amber-100 text-amber-700" },
                { title: { id: "Baayun Maulid", en: "Baayun Maulid" }, category: { id: "Tradisi Kelahiran", en: "Birth Tradition" }, desc: { id: "Tradisi mengayun bayi dalam ayunan berhias indah sebagai ungkapan syukur dan doa keselamatan.", en: "Tradition of swinging babies in beautifully decorated cradles as an expression of gratitude and prayer for safety." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sanggar_Seni_Galuh_Banjar_1.jpg", accentColor: "border-rose-400", tagColor: "bg-rose-100 text-rose-700" },
                { title: { id: "Aruh Ganal", en: "Aruh Ganal" }, category: { id: "Festival Panen Dayak", en: "Dayak Harvest Festival" }, desc: { id: "Festival panen besar suku Dayak yang merayakan hasil bumi dengan tarian, musik tradisional, dan sesaji.", en: "Grand harvest festival of the Dayak people celebrating the earth's bounty with dances, traditional music, and offerings." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Grup_Musik_Panting.jpg", accentColor: "border-violet-400", tagColor: "bg-violet-100 text-violet-700" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1, duration:0.6 }}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row border-l-4 ${item.accentColor}`}>
                  <div className="relative w-full md:w-48 h-52 md:h-auto shrink-0 overflow-hidden">
                    <img src={item.img} alt={t(item.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  </div>
                  <div className="p-7 flex flex-col justify-center flex-1">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-3 ${item.tagColor}`}>{t(item.category)}</span>
                    <h3 className="text-xl font-heading font-bold text-river-blue mb-3 leading-tight">{t(item.title)}</h3>
                    <p className="text-sm text-river-blue/60 font-body leading-relaxed">{t(item.desc)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="py-20 md:py-28 bg-river-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-warm-gold)_0%,_transparent_70%)]"/>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="max-w-2xl mb-16">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">{t({ id: "Filosofi Hidup", en: "Philosophy of Life" })}</span>
              <p className="text-4xl md:text-5xl font-heading italic text-warm-gold mb-6 leading-tight">"Waja Sampai Kaputing"</p>
              <p className="text-lg text-white/55 font-body leading-relaxed">{t({ id: "Semangat perjuangan yang tak pernah padam hingga akhir — tentang ketangguhan, keramahtamahan, dan hubungan harmonis dengan alam.", en: "A fighting spirit that never fades until the end — about resilience, hospitality, and harmonious relationships with nature." })}</p>
            </FadeInView>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {philosophyValues.map((val, i) => (
                <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
                  className={`rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors ${i===0?"bg-warm-gold/20":"bg-white/5"}`}>
                  <div className="font-bold text-white text-xl mb-2">{val.title}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">{t(val.sub)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
