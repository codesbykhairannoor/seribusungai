"use client";

import React from "react";
import Link from "next/link";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import VideoHero from "@/components/ui/VideoHero";
import DestinationCard from "@/components/ui/DestinationCard";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { useLanguage } from "@/contexts/LanguageContext";
import { destinations } from "@/content/shared/destinations";
import { motion } from "framer-motion";
import { Users, Droplets, Map as MapIcon, Calendar, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { label: { id: "Luas Wilayah", en: "Total Area" }, value: "98.46", suffix: "km²", icon: MapIcon, span: "col-span-1" },
    { label: { id: "Jumlah Sungai", en: "Rivers" }, value: "102", suffix: "+", icon: Droplets, span: "col-span-1" },
    { label: { id: "Populasi", en: "Population" }, value: "700k", suffix: "+", icon: Users, span: "col-span-1" },
    { label: { id: "Tahun Berdiri", en: "Founded" }, value: "1526", suffix: "", icon: Calendar, span: "col-span-1" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>

        {/* ── VIDEO HERO — Knockout Text Effect ── */}
        <VideoHero
          videoSrc="/videos/River_scene_with_202604201050.mp4"
          posterSrc="https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura_di_Pagi_Hari_(1).jpg"
        />

        {/* ── BENTO GRID — About + Stats ── */}
        <section id="tentang" className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-12">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                {t({ id: "Tentang Banjarmasin", en: "About Banjarmasin" })}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue leading-[1.1] max-w-2xl">
                {t({ id: "Di Mana Sungai Adalah Nafas Kehidupan", en: "Where the River is the Breath of Life" })}
              </h2>
            </FadeInView>

            {/* Bento grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-4">

              {/* Big photo — spans 2 cols 2 rows */}
              <FadeInView direction="right" className="col-span-2 row-span-2">
                <div className="relative h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin.jpg"
                    alt="Banjarmasin river life"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-heading font-bold text-xl mb-1">
                      {t({ id: "Kehidupan di Tepian Sungai", en: "Life Along the River" })}
                    </p>
                    <p className="text-white/60 text-sm font-body">Sungai Martapura, Banjarmasin</p>
                  </div>
                </div>
              </FadeInView>

              {/* Stat cards — each 1 col */}
              {stats.map((stat, i) => (
                <FadeInView key={i} delay={i * 0.08}>
                  <div className="bg-river-blue-50 rounded-3xl p-6 flex flex-col justify-between h-full min-h-[130px] hover:bg-river-blue-100 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-river-blue shadow-sm mb-3 group-hover:bg-warm-gold group-hover:text-white transition-colors">
                      <stat.icon size={20} />
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-river-blue leading-none">
                        {stat.value}<span className="text-sm text-river-blue/40 ml-1">{stat.suffix}</span>
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-warm-gold font-bold mt-1">
                        {t(stat.label)}
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}

              {/* Text block — spans 2 cols */}
              <FadeInView delay={0.2} className="col-span-2">
                <div className="bg-river-blue rounded-3xl p-8 h-full flex flex-col justify-between">
                  <p className="text-white/70 font-body leading-relaxed text-sm md:text-base">
                    {t({ id: "Selama berabad-abad, sungai-sungai di Banjarmasin telah membentuk identitas, ekonomi, dan budaya masyarakatnya.", en: "For centuries, the rivers of Banjarmasin have shaped the identity, economy, and culture of its people." })}
                  </p>
                  <Link href="/profil-kota" className="inline-flex items-center gap-2 text-warm-gold font-bold text-sm mt-6 hover:gap-3 transition-all">
                    {t({ id: "Pelajari Lebih Lanjut", en: "Learn More" })} <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeInView>

              {/* Gold badge — 1 col */}
              <FadeInView delay={0.3}>
                <div className="bg-warm-gold rounded-3xl p-6 text-white flex flex-col justify-end h-full min-h-[130px]">
                  <span className="text-4xl font-heading font-bold">500+</span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80 mt-1 leading-snug">
                    {t({ id: "Tahun Tradisi", en: "Years of Tradition" })}
                  </span>
                </div>
              </FadeInView>

              {/* Second photo — 1 col */}
              <FadeInView delay={0.35}>
                <div className="rounded-3xl overflow-hidden h-full min-h-[130px] shadow-md">
                  <img
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Sanggar_Seni_Galuh_Banjar_1.jpg"
                    alt="Banjarmasin culture"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </FadeInView>

            </div>
          </div>
        </section>

        {/* ── FEATURED DESTINATIONS — Featured + Supporting ── */}
        <section className="py-20 md:py-28 bg-clean-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                  {t({ id: "Destinasi Unggulan", en: "Top Destinations" })}
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">
                  {t({ id: "Temukan Tempat Favorit Anda", en: "Find Your Favorite Spot" })}
                </h2>
              </div>
              <Link href="/wisata" className="inline-flex items-center gap-2 font-bold text-river-blue hover:text-warm-gold transition-colors group shrink-0">
                {t({ id: "Lihat Semua", en: "View All" })}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInView>

            {/* Featured + supporting grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Featured — spans 2 cols on lg */}
              <FadeInView direction="right" className="lg:col-span-2 lg:row-span-2">
                <Link href={`/wisata/${destinations[0].slug}`} className="block h-full group">
                  <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={destinations[0].heroImage.src}
                      alt={t(destinations[0].heroImage.alt)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="bg-warm-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                        {t({ id: "Unggulan", en: "Featured" })}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-warm-gold text-xs font-bold uppercase tracking-widest mb-2">{destinations[0].category}</p>
                      <h3 className="text-white font-heading font-bold text-2xl md:text-3xl mb-2 leading-tight">
                        {t(destinations[0].name)}
                      </h3>
                      <p className="text-white/70 text-sm font-body line-clamp-2 mb-4">
                        {t(destinations[0].shortDescription)}
                      </p>
                      <div className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                        {t({ id: "Jelajahi", en: "Explore" })} <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInView>

              {/* Supporting cards */}
              {destinations.slice(1, 5).map((dest, i) => (
                <FadeInView key={dest.slug} delay={i * 0.08}>
                  <DestinationCard destination={dest} />
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ── CULTURAL CTA — Full-bleed overlapping ── */}
        <section className="relative overflow-hidden bg-river-blue">
          {/* Background image with parallax feel */}
          <div className="absolute inset-0">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Tari_Japin_Sigam_1.jpg"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Text — 7 cols */}
              <FadeInView direction="right" className="lg:col-span-7">
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">
                  {t({ id: "Warisan Budaya", en: "Cultural Heritage" })}
                </span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-[1.05]">
                  {t({ id: "Warisan Budaya yang Berdenyut", en: "A Pulsating Cultural Heritage" })}
                </h2>
                <p className="text-xl text-white/60 mb-10 font-body leading-relaxed max-w-xl">
                  {t({ id: "Dari kain Sasirangan yang ikonik hingga seni pertunjukan Mamanda, mari selami kekayaan tradisi yang menjadikan Banjarmasin begitu istimewa.", en: "From iconic Sasirangan fabrics to Mamanda performing arts, let's dive into the rich traditions that make Banjarmasin so special." })}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/budaya" className="px-8 py-4 bg-warm-gold hover:bg-warm-gold-dark text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-warm-gold/20">
                    {t({ id: "Jelajahi Budaya", en: "Explore Culture" })}
                  </Link>
                  <Link href="/kuliner" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20 hover:scale-105">
                    {t({ id: "Cicipi Kuliner", en: "Taste Culinary" })}
                  </Link>
                </div>
              </FadeInView>

              {/* Stacked photos — 5 cols, overlapping */}
              <FadeInView direction="left" className="lg:col-span-5 relative h-80 md:h-96 hidden lg:block">
                <div className="absolute top-0 right-0 w-3/4 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl rotate-3">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Peserta_Karnaval_FBPT_2018_001.JPG" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 w-3/4 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl -rotate-3 border-4 border-river-blue">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Sanggar_Seni_Galuh_Banjar_2.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </FadeInView>

            </div>
          </div>
        </section>

        {/* ── EVENT & FESTIVAL — 3-card horizontal layout ── */}
        <section className="py-20 md:py-28 bg-clean-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="flex items-end justify-between mb-14 flex-wrap gap-4">
              <div>
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                  {t({ id: "Kalender Budaya", en: "Cultural Calendar" })}
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">
                  {t({ id: "Event & Festival", en: "Events & Festivals" })}
                </h2>
              </div>
              <Link href="/wisata" className="inline-flex items-center gap-2 font-bold text-river-blue hover:text-warm-gold transition-colors group shrink-0">
                {t({ id: "Lihat Semua", en: "View All" })}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: { id: "Haul Guru Sekumpul", en: "Haul Guru Sekumpul" },
                  date: { id: "Rabiul Akhir (Kalender Hijriah)", en: "Rabiul Akhir (Hijri Calendar)" },
                  desc: { id: "Peringatan wafatnya ulama besar KH Zaini Abdul Ghani. Mengundang lebih dari 2,5 juta peziarah dari seluruh Nusantara — menjadikannya salah satu acara keagamaan terbesar di Asia Tenggara.", en: "Commemoration of the passing of great scholar KH Zaini Abdul Ghani. Draws over 2.5 million pilgrims from across the archipelago — making it one of the largest religious gatherings in Southeast Asia." },
                  tag: { id: "Religi", en: "Religious" },
                  tagColor: "bg-emerald-100 text-emerald-700",
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Raya_Sabilal_Muhtadin_3.jpg",
                  attendees: "2.5M+",
                },
                {
                  title: { id: "Festival Pasar Terapung", en: "Floating Market Festival" },
                  date: { id: "Mei — 3 Hari", en: "May — 3 Days" },
                  desc: { id: "Perayaan budaya sungai terbesar di Kalimantan Selatan. Lebih dari 250 jukung (perahu kayu) memenuhi Sungai Martapura, menampilkan kuliner, kerajinan, dan pertunjukan seni tradisional.", en: "The largest river culture celebration in South Kalimantan. Over 250 jukungs (wooden boats) fill the Martapura River, showcasing culinary, crafts, and traditional art performances." },
                  tag: { id: "Budaya", en: "Cultural" },
                  tagColor: "bg-river-blue/10 text-river-blue",
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin_2.jpg",
                  attendees: "250+",
                },
                {
                  title: { id: "Festival Budaya Pasar Terapung", en: "Pasar Terapung Cultural Festival" },
                  date: { id: "Agustus", en: "August" },
                  desc: { id: "Festival tahunan yang merayakan kearifan lokal Banjar melalui pameran sasirangan, pertunjukan mamanda, lomba perahu, dan kuliner tradisional di sepanjang tepian Sungai Martapura.", en: "Annual festival celebrating Banjar local wisdom through sasirangan exhibitions, mamanda performances, boat races, and traditional culinary along the Martapura riverbank." },
                  tag: { id: "Seni & Budaya", en: "Arts & Culture" },
                  tagColor: "bg-warm-gold/10 text-warm-gold",
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tari_Japin_Sigam_2.jpg",
                  attendees: "50k+",
                },
              ].map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  {/* Photo */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={event.img}
                      alt={t(event.title)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${event.tagColor}`}>
                        {t(event.tag)}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-center">
                      <div className="text-lg font-heading font-bold text-river-blue leading-none">{event.attendees}</div>
                      <div className="text-[9px] uppercase tracking-widest text-warm-gold font-bold">
                        {t({ id: "Peserta", en: "Attendees" })}
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={13} className="text-warm-gold shrink-0" />
                      <span className="text-xs font-bold text-warm-gold uppercase tracking-widest">{t(event.date)}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-river-blue mb-3 leading-tight">{t(event.title)}</h3>
                    <p className="text-sm text-river-blue/60 font-body leading-relaxed flex-1">{t(event.desc)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RIVER LIFE — Offset staggered photo strip ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-river-blue">
                {t({ id: "Kehidupan Sungai", en: "River Life" })}
              </h2>
              <p className="text-river-blue/50 mt-3 font-body">
                {t({ id: "Sekilas kehidupan autentik Kota Seribu Sungai", en: "A glimpse of authentic life in the City of a Thousand Rivers" })}
              </p>
            </FadeInView>

            {/* Offset staggered grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
              {[
                { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin.jpg", mt: "mt-0", label: { id: "Pasar Terapung", en: "Floating Market" } },
                { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Berenteng.jpg", mt: "mt-10", label: { id: "Kain Sasirangan", en: "Sasirangan Cloth" } },
                { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Taman_Siring_Banjarmasin.jpg", mt: "mt-5", label: { id: "Siring Martapura", en: "Martapura Siring" } },
                { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura.jpg", mt: "mt-14", label: { id: "Alam Kalimantan", en: "Kalimantan Nature" } },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className={`${item.mt} group`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 relative">
                    <img src={item.src} alt={t(item.label)} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white text-xs font-bold uppercase tracking-widest">{t(item.label)}</p>
                    </div>
                  </div>
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
