"use client";

import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Plane, Bus, Ship, Bed, HelpCircle, CheckCircle2 } from "lucide-react";

export default function Panduan() {
  const { t } = useLanguage();

  const transportation = [
    {
      title: { id: "Udara", en: "By Air" },
      desc: { id: "Bandara Syamsudin Noor (BDJ) melayani penerbangan domestik utama dari Jakarta, Surabaya, dan kota besar lainnya.", en: "Syamsudin Noor Airport (BDJ) serves major domestic flights from Jakarta, Surabaya, and other major cities." },
      icon: Plane,
      detail: { id: "±2 jam dari Jakarta", en: "±2 hours from Jakarta" },
    },
    {
      title: { id: "Sungai", en: "By River" },
      desc: { id: "Klotok adalah transportasi ikonik untuk menjelajah kanal dan sungai. Tersedia di dermaga utama Siring.", en: "Klotok is the iconic transport for exploring canals and rivers. Available at the main Siring dock." },
      icon: Ship,
      detail: { id: "Rp 350k–500k / perahu", en: "IDR 350k–500k / boat" },
    },
    {
      title: { id: "Darat", en: "By Land" },
      desc: { id: "Taksi, ojek online, dan angkutan kota tersedia di seluruh penjuru kota dengan tarif terjangkau.", en: "Taxis, ride-hailing, and city transport are available city-wide at affordable rates." },
      icon: Bus,
      detail: { id: "Ojek online tersedia 24 jam", en: "Ride-hailing available 24 hours" },
    },
  ];

  const itineraries = [
    {
      day: "1",
      title: { id: "Eksplorasi Sungai Klasik", en: "Classic River Exploration" },
      items: [
        { time: "05:00", text: { id: "Pasar Terapung Lok Baintan", en: "Lok Baintan Floating Market" } },
        { time: "09:00", text: { id: "Sarapan Soto Banjar", en: "Soto Banjar Breakfast" } },
        { time: "11:00", text: { id: "Kampung Sasirangan", en: "Sasirangan Village" } },
        { time: "14:00", text: { id: "Menara Pandang Siring", en: "Siring Observation Tower" } },
        { time: "17:00", text: { id: "Susur Sungai Martapura", en: "Martapura River Cruise" } },
      ],
    },
    {
      day: "2",
      title: { id: "Jejak Budaya & Religi", en: "Culture & Religion Trail" },
      items: [
        { time: "09:00", text: { id: "Masjid Sultan Suriansyah", en: "Sultan Suriansyah Mosque" } },
        { time: "11:00", text: { id: "Museum Wasaka", en: "Wasaka Museum" } },
        { time: "13:00", text: { id: "Makan Siang Ikan Patin", en: "Patin Fish Lunch" } },
        { time: "15:00", text: { id: "Masjid Raya Sabilal Muhtadin", en: "Sabilal Muhtadin Grand Mosque" } },
        { time: "19:00", text: { id: "Makan Malam di Tepian Sungai", en: "Riverside Dinner" } },
      ],
    },
  ];

  const tips = [
    { id: "Pakaian", title: { id: "Pakaian Sopan", en: "Modest Clothing" }, desc: { id: "Gunakan pakaian sopan saat berkunjung ke tempat ibadah.", en: "Wear modest clothing when visiting places of worship." } },
    { id: "Sampah", title: { id: "Jaga Kebersihan", en: "Keep Clean" }, desc: { id: "Jangan membuang sampah ke sungai. Gunakan tempat sampah yang tersedia.", en: "Do not throw trash in the river. Use available trash bins." } },
    { id: "Foto", title: { id: "Izin Memotret", en: "Photo Permission" }, desc: { id: "Mintalah izin sebelum memotret penduduk lokal atau upacara adat.", en: "Ask permission before photographing locals or traditional ceremonies." } },
    { id: "Tawar", title: { id: "Tawar Menawar", en: "Bargaining" }, desc: { id: "Tawar menawar secara wajar diperbolehkan di pasar tradisional.", en: "Reasonable bargaining is allowed in traditional markets." } },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />

      <PageTransitionWrapper>
        <HeroSection
          variant="parallax"
          pageKey="panduan"
          backgroundSrc="https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura_di_Pagi_Hari_(3).jpg"
          backgroundAlt={{ id: "Panduan Wisata", en: "Travel Guide" }}
          eyebrow={{ id: "Panduan Perjalanan", en: "Travel Guide" }}
          headline={{ id: "Panduan Lengkap Menjelajah", en: "Complete Exploration Guide" }}
          subheadline={{
            id: "Semua informasi yang Anda butuhkan untuk merencanakan perjalanan sempurna ke Kota Seribu Sungai.",
            en: "All the information you need to plan your perfect trip to the City of a Thousand Rivers.",
          }}
          overlayOpacity={0.45}
        />

        {/* ── Transportation ── */}
        <SectionWrapper background="white">
          <div className="text-center mb-16">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-river-blue mb-4">
                {t({ id: "Cara Menuju & Berkeliling", en: "Getting There & Around" })}
              </h2>
              <div className="h-1 w-16 bg-warm-gold mx-auto rounded-full" />
            </FadeInView>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {transportation.map((item, i) => (
              <StaggerItem key={i}>
                <div className="group p-8 rounded-3xl border border-river-blue/8 hover:border-warm-gold/30 hover:shadow-xl transition-all duration-400 bg-white">
                  <div className="w-16 h-16 bg-river-blue-50 rounded-2xl flex items-center justify-center text-river-blue mb-6 group-hover:bg-warm-gold group-hover:text-white transition-colors duration-300">
                    <item.icon size={30} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-river-blue mb-3">{t(item.title)}</h4>
                  <p className="text-sm text-river-blue/60 font-body leading-relaxed mb-4">{t(item.desc)}</p>
                  <div className="text-xs font-bold text-warm-gold uppercase tracking-widest border-t border-river-blue/5 pt-4">
                    {t(item.detail)}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionWrapper>

        {/* ── Itineraries ── */}
        <SectionWrapper background="light">
          <div className="text-center mb-16">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-river-blue mb-4">
                {t({ id: "Rencana Perjalanan", en: "Suggested Itineraries" })}
              </h2>
              <div className="h-1 w-16 bg-warm-gold mx-auto rounded-full" />
            </FadeInView>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {itineraries.map((itinerary, i) => (
              <FadeInView key={i} direction={i % 2 === 0 ? "right" : "left"}>
                <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-river-blue/5 hover:shadow-xl transition-all duration-400">
                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-6xl font-heading font-bold text-warm-gold/30">0{itinerary.day}</span>
                    <h3 className="text-2xl font-heading font-bold text-river-blue">{t(itinerary.title)}</h3>
                  </div>
                  <div className="space-y-5">
                    {itinerary.items.map((item, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08, duration: 0.4 }}
                        className="flex gap-5 items-start group"
                      >
                        <span className="text-sm font-bold text-river-blue/35 w-14 pt-0.5 shrink-0">{item.time}</span>
                        <div className="w-2 h-2 rounded-full bg-warm-gold mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-river-blue/75 font-medium">{t(item.text)}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </SectionWrapper>

        {/* ── Accommodation ── */}
        <SectionWrapper background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInView direction="right">
              <div className="w-14 h-14 bg-warm-gold/10 rounded-2xl flex items-center justify-center text-warm-gold mb-8">
                <Bed size={28} />
              </div>
              <h2 className="text-4xl font-heading font-bold text-river-blue mb-6">
                {t({ id: "Tempat Menginap", en: "Where to Stay" })}
              </h2>
              <p className="text-lg text-river-blue/65 mb-8 font-body leading-relaxed">
                {t({
                  id: "Pilihlah penginapan di area Siring atau pusat kota untuk akses mudah ke dermaga klotok dan pusat kuliner. Tersedia berbagai pilihan mulai dari hotel berbintang hingga homestay yang ramah di kantong.",
                  en: "Choose accommodation in the Siring area or city center for easy access to klotok docks and culinary hubs. Options range from luxury hotels to budget-friendly homestays.",
                })}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { id: "Hotel Bintang", en: "Star Hotels" },
                  { id: "Homestay", en: "Homestay" },
                  { id: "Boutique Hotel", en: "Boutique Hotel" },
                  { id: "Guest House", en: "Guest House" },
                ].map((type, i) => (
                  <span key={i} className="px-4 py-2 bg-river-blue-50 text-river-blue rounded-full text-xs font-bold uppercase tracking-widest hover:bg-warm-gold/10 hover:text-warm-gold transition-colors cursor-default">
                    {t(type)}
                  </span>
                ))}
              </div>
            </FadeInView>

            <FadeInView direction="left">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Kampung_Biru_Banjarmasin.jpg"
                  alt="Accommodation in Banjarmasin"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-river-blue/40 to-transparent" />
              </div>
            </FadeInView>
          </div>
        </SectionWrapper>

        {/* ── INFORMASI PRAKTIS — Info-card grid ── */}
        <SectionWrapper background="light">
          <div className="text-center mb-16">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-river-blue mb-4">
                {t({ id: "Informasi Praktis", en: "Practical Information" })}
              </h2>
              <div className="h-1 w-16 bg-warm-gold mx-auto rounded-full" />
              <p className="text-river-blue/50 mt-4 max-w-xl mx-auto font-body">
                {t({ id: "Semua yang perlu Anda ketahui sebelum berkunjung ke Banjarmasin.", en: "Everything you need to know before visiting Banjarmasin." })}
              </p>
            </FadeInView>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Climate */}
            <FadeInView delay={0.05}>
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-river-blue/5 hover:shadow-xl transition-all duration-400 h-full">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-2xl mb-5">☀️</div>
                <h4 className="font-heading font-bold text-river-blue text-lg mb-3">
                  {t({ id: "Iklim", en: "Climate" })}
                </h4>
                <div className="space-y-2 text-sm text-river-blue/65 font-body">
                  <div className="flex justify-between">
                    <span>{t({ id: "Suhu", en: "Temperature" })}</span>
                    <span className="font-bold text-river-blue">26–38°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t({ id: "Musim Hujan", en: "Rainy Season" })}</span>
                    <span className="font-bold text-river-blue">
                      {t({ id: "Nov – Jun", en: "Nov – Jun" })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t({ id: "Musim Kemarau", en: "Dry Season" })}</span>
                    <span className="font-bold text-river-blue">
                      {t({ id: "Jul – Okt", en: "Jul – Oct" })}
                    </span>
                  </div>
                  <p className="text-xs text-river-blue/45 pt-2 border-t border-river-blue/5">
                    {t({ id: "Waktu terbaik: Mei–September untuk wisata sungai.", en: "Best time: May–September for river tourism." })}
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Currency */}
            <FadeInView delay={0.1}>
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-river-blue/5 hover:shadow-xl transition-all duration-400 h-full">
                <div className="w-12 h-12 bg-warm-gold/10 rounded-2xl flex items-center justify-center text-2xl mb-5">💰</div>
                <h4 className="font-heading font-bold text-river-blue text-lg mb-3">
                  {t({ id: "Mata Uang", en: "Currency" })}
                </h4>
                <div className="space-y-2 text-sm text-river-blue/65 font-body">
                  <div className="flex justify-between">
                    <span>{t({ id: "Mata Uang", en: "Currency" })}</span>
                    <span className="font-bold text-river-blue">IDR (Rp)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t({ id: "ATM", en: "ATM" })}</span>
                    <span className="font-bold text-river-blue">
                      {t({ id: "Tersedia luas", en: "Widely available" })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t({ id: "Kartu Kredit", en: "Credit Card" })}</span>
                    <span className="font-bold text-river-blue">
                      {t({ id: "Hotel & Mall", en: "Hotels & Malls" })}
                    </span>
                  </div>
                  <p className="text-xs text-river-blue/45 pt-2 border-t border-river-blue/5">
                    {t({ id: "Pasar tradisional umumnya hanya menerima tunai.", en: "Traditional markets generally accept cash only." })}
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Language */}
            <FadeInView delay={0.15}>
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-river-blue/5 hover:shadow-xl transition-all duration-400 h-full">
                <div className="w-12 h-12 bg-river-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-5">🗣️</div>
                <h4 className="font-heading font-bold text-river-blue text-lg mb-3">
                  {t({ id: "Bahasa", en: "Language" })}
                </h4>
                <div className="space-y-2 text-sm text-river-blue/65 font-body">
                  <div className="flex justify-between">
                    <span>{t({ id: "Resmi", en: "Official" })}</span>
                    <span className="font-bold text-river-blue">Bahasa Indonesia</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t({ id: "Lokal", en: "Local" })}</span>
                    <span className="font-bold text-river-blue">Basa Banjar</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t({ id: "Inggris", en: "English" })}</span>
                    <span className="font-bold text-river-blue">
                      {t({ id: "Terbatas", en: "Limited" })}
                    </span>
                  </div>
                  <p className="text-xs text-river-blue/45 pt-2 border-t border-river-blue/5">
                    {t({ id: "Frasa dasar Bahasa Indonesia sangat membantu.", en: "Basic Bahasa Indonesia phrases are very helpful." })}
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Emergency Contacts */}
            <FadeInView delay={0.2}>
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-river-blue/5 hover:shadow-xl transition-all duration-400 h-full">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-2xl mb-5">🚨</div>
                <h4 className="font-heading font-bold text-river-blue text-lg mb-3">
                  {t({ id: "Kontak Darurat", en: "Emergency Contacts" })}
                </h4>
                <div className="space-y-2 text-sm font-body">
                  {[
                    { label: { id: "Polisi", en: "Police" }, number: "110" },
                    { label: { id: "Ambulans", en: "Ambulance" }, number: "118" },
                    { label: { id: "Pemadam Kebakaran", en: "Fire Dept." }, number: "113" },
                    { label: { id: "SAR / Basarnas", en: "SAR / Basarnas" }, number: "115" },
                  ].map((c, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-river-blue/65">{t(c.label)}</span>
                      <span className="font-bold text-rose-600 font-mono">{c.number}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>

            {/* Best Photo Spots */}
            <FadeInView delay={0.25} className="md:col-span-2 lg:col-span-1">
              <div className="bg-river-blue text-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-400 h-full">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-5">📸</div>
                <h4 className="font-heading font-bold text-white text-lg mb-3">
                  {t({ id: "Spot Foto Terbaik", en: "Best Photo Spots" })}
                </h4>
                <div className="space-y-2">
                  {[
                    { id: "Pasar Terapung Lok Baintan (subuh)", en: "Lok Baintan Floating Market (dawn)" },
                    { id: "Taman Siring saat senja", en: "Siring Park at dusk" },
                    { id: "Masjid Sultan Suriansyah", en: "Sultan Suriansyah Mosque" },
                    { id: "Patung Bekantan (6,5m)", en: "Bekantan Statue (6.5m)" },
                    { id: "Susur Sungai Martapura", en: "Martapura River Cruise" },
                  ].map((spot, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-warm-gold shrink-0" />
                      {t(spot)}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>

            {/* Airport Info */}
            <FadeInView delay={0.3}>
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-river-blue/5 hover:shadow-xl transition-all duration-400 h-full">
                <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-2xl mb-5">✈️</div>
                <h4 className="font-heading font-bold text-river-blue text-lg mb-3">
                  {t({ id: "Bandara", en: "Airport" })}
                </h4>
                <div className="space-y-2 text-sm text-river-blue/65 font-body">
                  <div className="flex justify-between">
                    <span>{t({ id: "Nama", en: "Name" })}</span>
                    <span className="font-bold text-river-blue text-right">Syamsudin Noor</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t({ id: "Kode IATA", en: "IATA Code" })}</span>
                    <span className="font-bold text-river-blue">BDJ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t({ id: "Jarak ke Kota", en: "Distance to City" })}</span>
                    <span className="font-bold text-river-blue">29 km</span>
                  </div>
                  <p className="text-xs text-river-blue/45 pt-2 border-t border-river-blue/5">
                    {t({ id: "Taksi bandara tersedia 24 jam.", en: "Airport taxis available 24 hours." })}
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </SectionWrapper>

        {/* ── Tips & Etiquette ── */}
        <SectionWrapper background="dark">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-14 justify-center">
              <HelpCircle size={28} className="text-warm-gold" />
              <h2 className="text-3xl font-heading font-bold text-white">
                {t({ id: "Tips & Etika Wisata", en: "Travel Tips & Etiquette" })}
              </h2>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.1}>
              {tips.map((tip) => (
                <StaggerItem key={tip.id}>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors flex gap-4">
                    <CheckCircle2 className="text-warm-gold shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-bold text-warm-gold mb-1">{t(tip.title)}</h4>
                      <p className="text-sm text-white/50 leading-relaxed">{t(tip.desc)}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionWrapper>
      </PageTransitionWrapper>

      <Footer />
    </main>
  );
}
