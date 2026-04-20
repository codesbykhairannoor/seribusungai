"use client";

import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import KnockoutHero from "@/components/ui/KnockoutHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Navigation, Cloud } from "lucide-react";

export default function ProfilKota() {
  const { t } = useLanguage();

  const cityData = [
    { label: { id: "Nama Resmi", en: "Official Name" }, value: "Kota Banjarmasin", icon: MapPin, bg: "bg-river-blue text-white", size: "col-span-2 md:col-span-1" },
    { label: { id: "Luas Wilayah", en: "Total Area" }, value: "98.46 km²", icon: Navigation, bg: "bg-warm-gold/10", size: "col-span-1" },
    { label: { id: "Koordinat", en: "Coordinates" }, value: "3°19'S 114°35'E", icon: Navigation, bg: "bg-river-blue-50", size: "col-span-1" },
    { label: { id: "Julukan", en: "Nickname" }, value: "Kota Seribu Sungai", icon: Cloud, bg: "bg-warm-gold text-white", size: "col-span-2 md:col-span-1" },
  ];

  const statsData = [
    { label: { id: "Kecamatan", en: "Districts" }, value: 5, suffix: "" },
    { label: { id: "Kelurahan", en: "Subdistricts" }, value: 52, suffix: "" },
    { label: { id: "Sungai Aktif", en: "Active Rivers" }, value: 102, suffix: "" },
    { label: { id: "IPM", en: "HDI" }, value: 77, suffix: ".48" },
    { label: { id: "Kemiskinan", en: "Poverty" }, value: 4, suffix: "%" },
    { label: { id: "Tahun Berdiri", en: "Established" }, value: 1526, suffix: "" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>

        {/* ── HERO: 3 Panel + Knockout Text ── */}
        <KnockoutHero />

        {/* ── BENTO IDENTITY GRID ── */}
        <section className="py-20 md:py-28 bg-clean-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue mb-3">
                {t({ id: "Identitas Kota", en: "City Identity" })}
              </h2>
              <p className="text-river-blue/50 max-w-xl font-body">
                {t({ id: "Mengenal lebih dekat jati diri dan karakteristik utama kota gerbang Kalimantan Selatan.", en: "Getting closer to the identity of the main gateway city of South Kalimantan." })}
              </p>
            </FadeInView>

            {/* Bento: 4 identity cards + 1 big photo */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Big photo — spans 1 col 2 rows on md */}
              <FadeInView direction="left" className="col-span-2 md:col-span-1 md:row-span-2">
                <div className="relative h-full min-h-[280px] rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura.jpg"
                    alt="Banjarmasin from above"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <div className="text-warm-gold text-5xl font-heading font-bold">102</div>
                    <div className="text-white text-xs font-bold uppercase tracking-widest mt-1">
                      {t({ id: "Aliran Sungai", en: "River Streams" })}
                    </div>
                  </div>
                </div>
              </FadeInView>

              {/* 4 identity cards */}
              {cityData.map((item, i) => (
                <FadeInView key={i} delay={i * 0.08}>
                  <div className={`${item.bg} rounded-3xl p-6 h-full min-h-[120px] flex flex-col justify-between group hover:scale-[1.02] transition-transform`}>
                    <item.icon size={22} className="opacity-60 mb-3" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold mb-1">{t(item.label)}</div>
                      <div className="font-heading font-bold text-lg leading-tight">{item.value}</div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ── GEOGRAPHY — Magazine editorial ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left: big photo overlapping */}
              <FadeInView direction="right" className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura_di_Pagi_Hari_(1).jpg"
                    alt="River delta"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/60 to-transparent" />
                </div>
                {/* Overlapping card */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-warm-gold text-white rounded-2xl p-6 shadow-2xl w-44"
                >
                  <div className="text-4xl font-heading font-bold">102</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80 mt-1 leading-snug">
                    {t({ id: "Sungai Aktif", en: "Active Rivers" })}
                  </div>
                </motion.div>
              </FadeInView>

              {/* Right: editorial text 7 cols */}
              <FadeInView direction="left" className="lg:col-span-7 lg:pt-8">
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">
                  {t({ id: "Geografi & Sungai", en: "Geography & Rivers" })}
                </span>
                {/* Pull quote */}
                <blockquote className="text-3xl md:text-4xl font-heading font-bold text-river-blue mb-8 leading-tight border-l-4 border-warm-gold pl-6">
                  {t({ id: "Wilayah Delta yang Dinamis", en: "A Dynamic Delta Region" })}
                </blockquote>
                <p className="text-lg text-river-blue/65 font-body leading-relaxed mb-8">
                  {t({ id: "Banjarmasin terletak di confluence (pertemuan) Sungai Martapura dan Sungai Barito. Lokasinya yang berada di bawah permukaan laut menjadikan sistem drainase alami berupa 102 sungai kecil sangat krusial bagi kehidupan kota.", en: "Banjarmasin is located at the confluence of the Martapura and Barito Rivers. Its location below sea level makes the natural drainage system of 102 small rivers crucial for city life." })}
                </p>
                {/* Fact pills */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: "Delta Sungai Barito", en: "Barito River Delta" },
                    { id: "0.16m – 1m dpl", en: "0.16m – 1m asl" },
                    { id: "Iklim Tropis", en: "Tropical Climate" },
                  ].map((fact, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="px-4 py-2 bg-river-blue-50 text-river-blue rounded-full text-sm font-bold"
                    >
                      {t(fact)}
                    </motion.span>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── EKONOMI KOTA — Bento grid with big number highlights ── */}
        <section className="py-20 md:py-28 bg-clean-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                {t({ id: "Perekonomian", en: "Economy" })}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">
                {t({ id: "Ekonomi Kota", en: "City Economy" })}
              </h2>
              <p className="text-river-blue/50 mt-3 max-w-xl font-body">
                {t({ id: "Pusat perdagangan dan industri terbesar di Kalimantan Selatan dengan pertumbuhan ekonomi yang konsisten.", en: "The largest trade and industrial center in South Kalimantan with consistent economic growth." })}
              </p>
            </FadeInView>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Big photo — spans 2 cols 2 rows */}
              <FadeInView direction="right" className="col-span-2 row-span-2">
                <div className="relative h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Pelabuhan_Petikemas_Trisakti_di_Sungai_Barito,_Banjarmasin_-_panoramio.jpg"
                    alt="Port of Trisakti Banjarmasin"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/80 via-river-blue/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-warm-gold text-[10px] font-bold uppercase tracking-widest mb-1">
                      {t({ id: "Pelabuhan Trisakti", en: "Port of Trisakti" })}
                    </p>
                    <p className="text-white font-heading font-bold text-xl leading-tight">
                      {t({ id: "Gerbang Ekspor Kalimantan", en: "Kalimantan's Export Gateway" })}
                    </p>
                    <p className="text-white/60 text-xs mt-1 font-body">
                      {t({ id: "98,3 juta ton ekspor/tahun", en: "98.3 million tons exports/year" })}
                    </p>
                  </div>
                </div>
              </FadeInView>

              {/* GDP Card */}
              <FadeInView delay={0.08} className="col-span-2 md:col-span-1">
                <div className="bg-river-blue text-white rounded-3xl p-6 h-full min-h-[140px] flex flex-col justify-between group hover:scale-[1.02] transition-transform">
                  <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
                    {t({ id: "PDB Kota 2023", en: "City GDP 2023" })}
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold leading-none">Rp 42T</div>
                    <div className="text-xs text-warm-gold font-bold mt-1">US$ 2,76 Miliar</div>
                  </div>
                </div>
              </FadeInView>

              {/* Growth Card */}
              <FadeInView delay={0.12} className="col-span-2 md:col-span-1">
                <div className="bg-warm-gold text-white rounded-3xl p-6 h-full min-h-[140px] flex flex-col justify-between group hover:scale-[1.02] transition-transform">
                  <div className="text-[10px] uppercase tracking-widest opacity-70 font-bold">
                    {t({ id: "Pertumbuhan Ekonomi", en: "Economic Growth" })}
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-bold leading-none">5,7%</div>
                    <div className="text-xs opacity-80 font-bold mt-1">
                      {t({ id: "Per Tahun 2023", en: "Per Year 2023" })}
                    </div>
                  </div>
                </div>
              </FadeInView>

              {/* Industry Card */}
              <FadeInView delay={0.16} className="col-span-2 md:col-span-1">
                <div className="bg-river-blue-50 rounded-3xl p-6 h-full min-h-[140px] flex flex-col justify-between group hover:scale-[1.02] transition-transform">
                  <div className="text-[10px] uppercase tracking-widest text-river-blue/50 font-bold">
                    {t({ id: "Perusahaan Industri", en: "Industrial Companies" })}
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-bold text-river-blue leading-none">3.014</div>
                    <div className="text-xs text-warm-gold font-bold mt-1">
                      {t({ id: "62% Industri Pangan", en: "62% Food Processing" })}
                    </div>
                  </div>
                </div>
              </FadeInView>

              {/* Sectors Card */}
              <FadeInView delay={0.2} className="col-span-2 md:col-span-1">
                <div className="bg-white border border-river-blue/8 rounded-3xl p-6 h-full min-h-[140px] flex flex-col justify-between shadow-sm group hover:scale-[1.02] transition-transform">
                  <div className="text-[10px] uppercase tracking-widest text-river-blue/50 font-bold">
                    {t({ id: "Sektor Unggulan", en: "Leading Sectors" })}
                  </div>
                  <div className="space-y-1.5 mt-2">
                    {[
                      { label: { id: "Manufaktur", en: "Manufacturing" }, pct: "17,19%" },
                      { label: { id: "Perdagangan", en: "Trade" }, pct: "12,57%" },
                      { label: { id: "Keuangan", en: "Finance" }, pct: "12,29%" },
                    ].map((s, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-xs text-river-blue/65 font-body">{t(s.label)}</span>
                        <span className="text-xs font-bold text-warm-gold">{s.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── STATS — Dark section with large numbers ── */}
        <SectionWrapper background="dark">
          <FadeInView className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-3">
              {t({ id: "Banjarmasin dalam Angka", en: "Banjarmasin in Numbers" })}
            </h2>
            <p className="text-white/40">{t({ id: "Statistik kunci pertumbuhan kota.", en: "Key statistics of city growth." })}</p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" staggerDelay={0.08}>
            {statsData.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center group cursor-default">
                  <div className="text-4xl font-heading font-bold text-warm-gold mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">{t(stat.label)}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionWrapper>

        {/* ── PHOTO STRIP — full bleed ── */}
        <div className="grid grid-cols-4 h-48 md:h-64">
          {[
            "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Berturutan.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Taman_Siring_Banjarmasin.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura_di_Pagi_Hari_(2).jpg",
          ].map((src, i) => (
            <motion.div key={i} whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
