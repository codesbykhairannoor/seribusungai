"use client";

import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import CulinaryCard, { CulinaryItem } from "@/components/ui/CulinaryCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Flame, Star, Leaf, ArrowUpRight } from "lucide-react";
import Plasma from "@/components/ui/Plasma";

export default function Kuliner() {
  const { t } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const iconicDishes: CulinaryItem[] = [
    { 
      id: "soto-banjar", 
      name: { id: "Soto Banjar Bang Amat", en: "Soto Banjar Bang Amat" }, 
      description: { id: "Soto ayam ikonik Banjarmasin dengan kuah rempah harum, disajikan di tepian sungai dengan suasana yang asri.", en: "Iconic Banjarmasin chicken soup with fragrant spice broth, served by the river with a refreshing atmosphere." }, 
      imageSrc: "/images/kuliner/Soto_banjar,_Pak_Ahmat,_Martapura,_South_Kalimantan,_2018-07-28_02.jpg", 
      location: { id: "Banua Anyar, Banjarmasin", en: "Banua Anyar, Banjarmasin" }, 
      tag: { id: "Legendaris", en: "Legendary" },
      mapLink: "https://www.google.com/maps/search/?api=1&query=Soto+Bang+Amat+Banjarmasin"
    },
    { 
      id: "ketupat-kandangan", 
      name: { id: "Ketupat Kandangan H. Irshadi", en: "Ketupat Kandangan H. Irshadi" }, 
      description: { id: "Ketupat dengan kuah santan kental gurih dan ikan Haruan asap yang otentik khas Hulu Sungai.", en: "Ketupat with savory thick coconut milk broth and authentic smoked Haruan fish from Hulu Sungai." }, 
      imageSrc: "/images/kuliner/1920px-Katupat_Kandangan_in_Kandangan.jpg", 
      location: { id: "Jl. A. Yani, Banjarmasin", en: "A. Yani St, Banjarmasin" },
      mapLink: "https://www.google.com/maps/search/?api=1&query=Ketupat+Kandangan+H.+Irshadi+Banjarmasin"
    },
    { 
      id: "nasi-kuning-cempaka", 
      name: { id: "Nasi Kuning Cempaka", en: "Cempaka Yellow Rice" }, 
      description: { id: "Nasi kuning legendaris dengan bumbu masak habang yang meresap sempurna pada ikan haruan dan telur.", en: "Legendary yellow rice with red chili sauce (masak habang) perfectly infused into haruan fish and eggs." }, 
      imageSrc: "/images/kuliner/Nasi_Kuning_Banjar_001.jpg", 
      location: { id: "Jl. Niaga Timur, Banjarmasin", en: "Niaga Timur St, Banjarmasin" },
      mapLink: "https://www.google.com/maps/search/?api=1&query=Nasi+Kuning+Cempaka+Banjarmasin"
    },
    { 
      id: "bingka-bunda", 
      name: { id: "Bingka Bunda", en: "Bingka Bunda" }, 
      description: { id: "Kue tradisional Bingka dengan tekstur lembut dan rasa manis gurih yang telah menjadi standar oleh-oleh kota.", en: "Traditional Bingka cake with soft texture and savory-sweet flavor that has become the city's souvenir standard." }, 
      imageSrc: "/images/kuliner/Bingka.jpg", 
      tag: { id: "Oleh-oleh", en: "Souvenir" },
      location: { id: "Kawasan A. Yani, Banjarmasin", en: "A. Yani Area, Banjarmasin" },
      mapLink: "https://www.google.com/maps/search/?api=1&query=Bingka+Bunda+Banjarmasin"
    },
    { 
      id: "nasi-itik-tenda-biru", 
      name: { id: "Nasi Itik Tenda Biru", en: "Tenda Biru Duck Rice" }, 
      description: { id: "Daging itik empuk dengan bumbu habang (merah) khas Gambut yang manis dan gurih.", en: "Tender duck meat with Gambut's signature sweet and savory red chili sauce (habang)." }, 
      imageSrc: "/images/kuliner/Nasi_Itik_Gambut_Tenda_Biru.JPG", 
      location: { id: "Gambut, Kab. Banjar", en: "Gambut, Banjar Reg." },
      mapLink: "https://www.google.com/maps/search/?api=1&query=Nasi+Itik+Tenda+Biru+Gambut"
    },
    { 
        id: "gangan-asam", 
        name: { id: "Gangan Asam Kepala Patin", en: "Sour Patin Head Soup" }, 
        description: { id: "Kesegaran kuah kuning asam dengan kepala ikan patin yang lembut dan kaya akan bumbu dapur.", en: "Refreshing sour yellow broth with soft patin fish head rich in local spices." }, 
        imageSrc: "/images/kuliner/Gangan_asam_kepala_ikan_di_Cempaka,_Banjarbaru.jpg"
    }
  ];

  const snacks = [
    { id: "es-kelapa", name: { id: "Es Kelapa Muda", en: "Young Coconut Ice" }, desc: { id: "Kesegaran kelapa muda pesisir sungai.", en: "Refreshing young coconut from the riverbank." }, icon: Leaf, color: "bg-emerald-50 text-emerald-600" },
    { id: "wadai-banjar", name: { id: "41 Macam Wadai", en: "41 Types of Cakes" }, desc: { id: "Ragam kue tradisional warisan budaya Banjar.", en: "Variety of traditional Banjar heritage cakes." }, icon: Star, color: "bg-warm-gold/10 text-warm-gold" },
    { id: "teh-banjar", name: { id: "Teh Rempah", en: "Spiced Tea" }, desc: { id: "Seduhan teh dengan aroma kayu manis lokal.", en: "Tea brew with local cinnamon aroma." }, icon: Flame, color: "bg-earth-terracotta/10 text-earth-terracotta" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>

        {/* ── HERO: Plasma Background ── */}
        <section className="relative h-screen min-h-[700px] overflow-hidden bg-river-blue flex flex-col items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Plasma 
                    color="#F5C518"
                    speed={0.6}
                    direction="forward"
                    scale={1.1}
                    opacity={0.8}
                    mouseInteractive={true}
                />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-river-blue/40 via-river-blue/60 to-river-blue z-10" />

            <div className="relative z-20 text-center px-6 max-w-7xl pt-32 pb-44">
                <FadeInView>
                    <motion.span className="text-warm-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 block">
                        {t({ id: "Perjalanan Rasa", en: "A Culinary Journey" })}
                    </motion.span>

                    <h1 className="font-heading font-black text-white leading-none mb-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:whitespace-nowrap overflow-visible">
                        {t({ id: "Simfoni Rasa Seribu Sungai", en: "Symphony of a Thousand Flavors" })}
                    </h1>

                    <p className="text-white/80 font-body text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 drop-shadow-sm">
                        {t({ 
                            id: "Jelajahi keaslian bumbu warisan dan kehangatan kuliner sungai yang melegenda di tiap suapan.", 
                            en: "Explore the authenticity of heritage spices and the legendary warmth of river cuisine in every bite." 
                        })}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="w-px h-16 bg-gradient-to-b from-warm-gold/60 to-transparent" />
                    </div>
                </FadeInView>
            </div>

            {/* Horizontal Infinite Marquee */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden py-10 z-20 pointer-events-none select-none">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-river-blue to-transparent z-30" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-river-blue to-transparent z-30" />
                
                <motion.div
                    className="flex gap-6 w-fit"
                    animate={{ x: [0, -1500] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...iconicDishes, ...iconicDishes].map((item, i) => (
                        <div
                            key={`${item.id}-${i}`}
                            className="relative w-72 md:w-80 aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shrink-0 shadow-2xl"
                        >
                            <img
                                src={item.imageSrc}
                                alt={t(item.name)}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-6">
                                <span className="text-white font-heading font-black text-xs uppercase tracking-widest">{t(item.name)}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* ── SIMFONI RASA SECTION ── */}
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeInView direction="right">
                        <span className="text-warm-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Harmony of Flavors</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-river-blue mb-8 leading-[0.9]">
                            {t({ id: "Warisan Rasa di Tiap Sudut.", en: "Heritage in Every Corner." })}
                        </h2>
                        <p className="text-river-blue/60 text-lg leading-relaxed mb-8">
                            {t({
                                id: "Di Banjarmasin, kuliner bukan sekadar pengganjal lapar. Ia adalah simfoni antara kekayaan rempah Nusantara dengan kearifan sungai yang telah mengalir selama ratusan tahun.",
                                en: "In Banjarmasin, cuisine is more than just hunger relief. It's a symphony between the rich spices of the Archipelago and the river wisdom that has flowed for hundreds of years."
                            })}
                        </p>
                    </FadeInView>
                    
                    <FadeInView direction="left" delay={0.2}>
                        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img src="/images/kuliner/Soto_banjar,_Pak_Ahmat,_Martapura,_South_Kalimantan,_2018-07-28_02.jpg" alt="Culinary Heritage" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-river-blue/10" />
                        </div>
                    </FadeInView>
                </div>
            </div>
        </section>

        {/* ── ICONIC DISHES GRID ── */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInView className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-black text-river-blue mb-4">
                {t({ id: "Menu Wajib", en: "The Must-Haves" })}
              </h2>
              <p className="text-slate-500 font-body">{t({ id: "Pilihan terbaik yang menentukan identitas rasa utama Banjarmasin.", en: "The best selections that define Banjarmasin's primary flavor identity." })}</p>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {iconicDishes.map((item, i) => (
                <FadeInView key={item.id} delay={i * 0.1}>
                  <CulinaryCard item={item} />
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ── FLOATING MARKET BREAKFAST ── */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <FadeInView direction="right" className="lg:col-span-7">
                <div className="relative rounded-[3rem] overflow-hidden h-[500px] group shadow-2xl">
                  <img src="/images/kuliner/buras.png" alt="Pasar Terapung" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <h3 className="text-4xl font-heading font-black mb-2">Pasar Terapung Lok Baintan</h3>
                    <p className="opacity-80 font-body">Kawasan Sungai Martapura</p>
                  </div>
                </div>
              </FadeInView>
              
              <FadeInView direction="left" className="lg:col-span-5 bg-river-blue text-white p-12 lg:p-16 rounded-[3rem] relative">
                  <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-6 block">{t({ id: "Sensasi Unik", en: "Unique Sensation" })}</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-black mb-8 leading-tight">
                    {t({ id: "Sarapan di Pelukan Arus.", en: "Breakfast in the Flow." })}
                  </h2>
                  <p className="text-white/60 font-body leading-relaxed mb-10 text-lg">
                    {t({ id: "Rasakan magisnya pagi hari dengan menyantap Katupat atau Soto langsung dari perahu jukung di tengah pasar terapung yang riuh namun damai.", en: "Experience the morning magic by eating Katupat or Soto directly from a jukung boat in the middle of a bustling yet peaceful floating market." })}
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Pasar+Terapung+Lok+Baintan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-warm-gold text-river-blue font-black rounded-full hover:bg-white transition-all hover:translate-x-1"
                  >
                    {t({ id: "Petunjuk Lokasi", en: "Get Directions" })}
                    <ArrowUpRight size={20} />
                  </a>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── SNACKS SECTION ── */}
        <SectionWrapper className="bg-slate-50 py-24">
          <FadeInView className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black text-river-blue mb-4">{t({ id: "Manis Berkesan", en: "Memorable Sweetness" })}</h2>
            <div className="h-1.5 w-20 bg-warm-gold mx-auto rounded-full" />
          </FadeInView>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {snacks.map((snack) => (
              <FadeInView key={snack.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 ${snack.color} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
                  <snack.icon size={32} />
                </div>
                <h4 className="text-2xl font-heading font-black text-river-blue mb-4">{t(snack.name)}</h4>
                <p className="text-river-blue/60 font-body leading-relaxed">{t(snack.desc)}</p>
              </FadeInView>
            ))}
          </div>
        </SectionWrapper>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
