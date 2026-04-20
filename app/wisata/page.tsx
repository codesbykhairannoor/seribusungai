"use client";

import React from "react";
import Link from "next/link";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import DestinationCard from "@/components/ui/DestinationCard";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { useLanguage } from "@/contexts/LanguageContext";
import { destinations } from "@/content/shared/destinations";
import { motion } from "framer-motion";
import { Calendar, Compass, Info, Clock, Users, ArrowUpRight } from "lucide-react";

export default function Wisata() {
  const { t } = useLanguage();

  const travelTips = [
    { title: { id: "Waktu Terbaik", en: "Best Time" }, desc: { id: "Musim kemarau (Mei–September) untuk eksplorasi sungai yang lancar.", en: "Dry season (May–September) for smooth river exploration." }, icon: Calendar },
    { title: { id: "Transportasi", en: "Transport" }, desc: { id: "Klotok adalah cara terbaik untuk mengunjungi pasar terapung.", en: "Klotok is the best way to visit the floating markets." }, icon: Compass },
    { title: { id: "Etika", en: "Etiquette" }, desc: { id: "Gunakan pakaian sopan saat berkunjung ke situs religi dan rumah ibadah.", en: "Wear modest clothing when visiting religious sites and places of worship." }, icon: Info },
  ];

  const packages = [
    {
      id: "one-day",
      title: { id: "Wisata Sungai 1 Hari", en: "1 Day River Trip" },
      price: "Rp 250k / pax",
      duration: { id: "1 Hari", en: "1 Day" },
      pax: "2–10",
      items: [
        { id: "Subuh ke Lok Baintan", en: "Dawn to Lok Baintan" },
        { id: "Sarapan di atas perahu", en: "Breakfast on boat" },
        { id: "Kunjungi Menara Pandang", en: "Visit Observation Tower" },
        { id: "Belanja Sasirangan", en: "Sasirangan shopping" },
      ],
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Berturutan.jpg",
    },
    {
      id: "religious",
      title: { id: "Wisata Religi", en: "Religious Tour" },
      price: "Rp 150k / pax",
      duration: { id: "1 Hari", en: "1 Day" },
      pax: "2–15",
      items: [
        { id: "Masjid Sultan Suriansyah", en: "Sultan Suriansyah Mosque" },
        { id: "Makam Sultan Suriansyah", en: "Sultan Suriansyah Tomb" },
        { id: "Masjid Raya Sabilal Muhtadin", en: "Sabilal Muhtadin Grand Mosque" },
        { id: "Pusat Kaligrafi", en: "Calligraphy Center" },
      ],
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Raya_Sabilal_Muhtadin_3.jpg",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>

        <HeroSection
          variant="parallax"
          backgroundSrc="https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_Terapung_di_Kota_Banjarmasin.jpg"
          backgroundAlt={{ id: "Wisata Banjarmasin", en: "Banjarmasin Tourism" }}
          eyebrow={{ id: "Destinasi Wisata", en: "Tourism Destinations" }}
          headline={{ id: "Destinasi Impian", en: "Dream Destinations" }}
          subheadline={{ id: "Temukan petualangan tak terlupakan di antara aliran sungai dan kearifan lokal.", en: "Find unforgettable adventures among the river flows and local wisdom." }}
          overlayOpacity={0.4}
        />

        {/* ── DESTINATIONS — Featured + Supporting masonry-style ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="flex items-end justify-between mb-14 flex-wrap gap-4">
              <div>
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                  {t({ id: "Pilih Tujuan Anda", en: "Choose Your Destination" })}
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">
                  {t({ id: "5 Destinasi Ikonik", en: "5 Iconic Destinations" })}
                </h2>
              </div>
            </FadeInView>

            {/* Row 1: 1 big + 2 small */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              {/* Big featured */}
              <FadeInView direction="right" className="md:col-span-2">
                <Link href={`/wisata/${destinations[0].slug}`} className="block group">
                  <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
                    <img src={destinations[0].heroImage.src} alt={t(destinations[0].heroImage.alt)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="bg-warm-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
                        {t({ id: "Unggulan", en: "Featured" })}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-warm-gold text-xs font-bold uppercase tracking-widest mb-2">{destinations[0].category}</p>
                      <h3 className="text-white font-heading font-bold text-2xl md:text-3xl mb-2 leading-tight">{t(destinations[0].name)}</h3>
                      <p className="text-white/65 text-sm font-body line-clamp-1 mb-4">{t(destinations[0].shortDescription)}</p>
                      <div className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                        {t({ id: "Jelajahi", en: "Explore" })} <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInView>

              {/* Small card */}
              <FadeInView delay={0.1}>
                <DestinationCard destination={destinations[1]} />
              </FadeInView>
            </div>

            {/* Row 2: 3 equal cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {destinations.slice(2).map((dest, i) => (
                <FadeInView key={dest.slug} delay={i * 0.08} className={i === 1 ? "md:mt-6" : ""}>
                  <DestinationCard destination={dest} />
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISITOR TIPS — Horizontal cards with left accent ── */}
        <section className="py-20 md:py-28 bg-river-blue-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-river-blue mb-3">
                {t({ id: "Tips Berkunjung", en: "Visitor Tips" })}
              </h2>
              <div className="h-1 w-16 bg-warm-gold rounded-full" />
            </FadeInView>

            <div className="space-y-4">
              {travelTips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-lg transition-all group border-l-4 border-warm-gold/30 hover:border-warm-gold"
                >
                  <div className="w-12 h-12 bg-warm-gold/10 rounded-xl flex items-center justify-center text-warm-gold shrink-0 group-hover:bg-warm-gold group-hover:text-white transition-colors">
                    <tip.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-river-blue text-lg mb-1">{t(tip.title)}</h4>
                    <p className="text-sm text-river-blue/60 font-body">{t(tip.desc)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKAGES — Full-bleed image cards ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue mb-4">
                {t({ id: "Paket Rekomendasi", en: "Recommended Packages" })}
              </h2>
              <div className="h-1 w-16 bg-warm-gold mx-auto rounded-full" />
            </FadeInView>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {packages.map((pkg, i) => (
                <FadeInView key={pkg.id} direction={i % 2 === 0 ? "right" : "left"}>
                  <div className="group relative rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[380px]">
                    <div className="absolute inset-0">
                      <img src={pkg.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-river-blue/80 group-hover:bg-river-blue/75 transition-colors" />
                    </div>
                    <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-heading font-bold text-warm-gold mb-1">{t(pkg.title)}</h3>
                            <div className="text-xs text-white/40 uppercase tracking-widest">{pkg.price}</div>
                          </div>
                          <div className="text-right space-y-1">
                            <div className="flex items-center gap-1.5 text-white/50 text-xs justify-end">
                              <Clock size={12} /><span>{t(pkg.duration)}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-white/50 text-xs justify-end">
                              <Users size={12} /><span>{pkg.pax} pax</span>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {pkg.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-3 text-white/75 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-warm-gold shrink-0" />
                              {t(item)}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="mt-8 px-7 py-3 bg-warm-gold hover:bg-warm-gold-dark text-white rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg self-start">
                        {t({ id: "Pesan Sekarang", en: "Book Now" })}
                      </button>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ── EVENT WISATA TAHUNAN — Full-width cards with background images ── */}
        <section className="py-20 md:py-28 bg-river-blue-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                {t({ id: "Kalender Wisata", en: "Tourism Calendar" })}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">
                {t({ id: "Event Wisata Tahunan", en: "Annual Tourism Events" })}
              </h2>
            </FadeInView>

            <div className="space-y-5">
              {[
                {
                  month: { id: "Mei", en: "May" },
                  title: { id: "Festival Pasar Terapung Banjarmasin", en: "Banjarmasin Floating Market Festival" },
                  duration: { id: "3 Hari", en: "3 Days" },
                  desc: { id: "Perayaan budaya sungai terbesar di Kalimantan Selatan. Lebih dari 250 jukung (perahu kayu) memenuhi Sungai Martapura menampilkan kuliner, kerajinan sasirangan, dan pertunjukan seni tradisional Banjar.", en: "The largest river culture celebration in South Kalimantan. Over 250 jukungs (wooden boats) fill the Martapura River showcasing culinary, sasirangan crafts, and traditional Banjar art performances." },
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin_2.jpg",
                  highlight: "250+ Jukung",
                },
                {
                  month: { id: "Rabiul Akhir", en: "Rabiul Akhir" },
                  title: { id: "Haul Guru Sekumpul", en: "Haul Guru Sekumpul" },
                  duration: { id: "1 Hari", en: "1 Day" },
                  desc: { id: "Peringatan wafatnya ulama besar KH Zaini Abdul Ghani yang mengundang lebih dari 2,5 juta peziarah dari seluruh Nusantara. Salah satu acara keagamaan terbesar di Asia Tenggara.", en: "Commemoration of the passing of great scholar KH Zaini Abdul Ghani drawing over 2.5 million pilgrims from across the archipelago. One of the largest religious events in Southeast Asia." },
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Raya_Sabilal_Muhtadin_3.jpg",
                  highlight: "2,5 Juta Peserta",
                },
                {
                  month: { id: "Agustus", en: "August" },
                  title: { id: "Festival Budaya Banjar", en: "Banjar Cultural Festival" },
                  duration: { id: "1 Minggu", en: "1 Week" },
                  desc: { id: "Festival tahunan yang merayakan kekayaan budaya Banjar melalui pameran sasirangan, pertunjukan mamanda dan madihin, lomba perahu tradisional, serta pameran kuliner dan kerajinan tangan.", en: "Annual festival celebrating the richness of Banjar culture through sasirangan exhibitions, mamanda and madihin performances, traditional boat races, and culinary and handicraft exhibitions." },
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tari_Japin_Sigam_1.jpg",
                  highlight: "50k+ Pengunjung",
                },
              ].map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[180px]"
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img
                      src={event.img}
                      alt={t(event.title)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-river-blue/75 group-hover:bg-river-blue/70 transition-colors" />
                  </div>
                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
                    {/* Month badge */}
                    <div className="shrink-0 text-center bg-warm-gold rounded-2xl px-5 py-4 self-start md:self-auto">
                      <div className="text-white font-heading font-bold text-lg leading-none">{t(event.month)}</div>
                      <div className="text-white/80 text-[10px] uppercase tracking-widest font-bold mt-1">{t(event.duration)}</div>
                    </div>
                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 leading-tight">{t(event.title)}</h3>
                      <p className="text-white/65 text-sm font-body leading-relaxed line-clamp-2">{t(event.desc)}</p>
                    </div>
                    {/* Highlight */}
                    <div className="shrink-0 text-right hidden md:block">
                      <div className="text-warm-gold font-heading font-bold text-xl">{event.highlight}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESTINASI SEKITAR — 3-column cards ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                {t({ id: "Jelajahi Lebih Jauh", en: "Explore Further" })}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">
                {t({ id: "Destinasi Sekitar", en: "Nearby Destinations" })}
              </h2>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: { id: "Pulau Kembang", en: "Pulau Kembang" },
                  tag: { id: "Alam & Satwa", en: "Nature & Wildlife" },
                  desc: { id: "Pulau kecil di tengah Sungai Barito yang menjadi habitat bekantan (proboscis monkey) dan kera ekor panjang. Dapat dicapai dengan klotok sekitar 30 menit dari pusat kota.", en: "A small island in the middle of the Barito River that is home to proboscis monkeys and long-tailed macaques. Reachable by klotok in about 30 minutes from the city center." },
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Monkey_of_kembang_island.jpg",
                  duration: { id: "30 menit dari kota", en: "30 min from city" },
                  tagColor: "bg-emerald-100 text-emerald-700",
                },
                {
                  name: { id: "Pasar Terapung Muara Kuin", en: "Muara Kuin Floating Market" },
                  tag: { id: "Budaya Sungai", en: "River Culture" },
                  desc: { id: "Pasar terapung tertua di Banjarmasin yang berlokasi di pertemuan Sungai Barito dan Sungai Kuin. Aktif sejak subuh, menawarkan pengalaman berbelanja di atas perahu yang autentik.", en: "The oldest floating market in Banjarmasin located at the confluence of the Barito and Kuin Rivers. Active since dawn, offering an authentic boat shopping experience." },
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Pedagang_di_Pasar_Apung_(1).jpg",
                  duration: { id: "Buka 05.00 – 08.00", en: "Open 5:00 – 8:00 AM" },
                  tagColor: "bg-river-blue/10 text-river-blue",
                },
                {
                  name: { id: "Taman Budaya Banjarmasin", en: "Banjarmasin Cultural Park" },
                  tag: { id: "Seni & Budaya", en: "Arts & Culture" },
                  desc: { id: "Pusat kebudayaan kota yang menampilkan pertunjukan seni tradisional Banjar secara rutin, termasuk mamanda, madihin, dan hadrah. Juga menjadi venue pameran kerajinan dan festival budaya.", en: "The city's cultural center that regularly showcases traditional Banjar art performances, including mamanda, madihin, and hadrah. Also serves as a venue for craft exhibitions and cultural festivals." },
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Menara_Pandang_Banjarmasin_001.jpg",
                  duration: { id: "Pusat Kota", en: "City Center" },
                  tagColor: "bg-warm-gold/10 text-warm-gold",
                },
              ].map((dest, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-river-blue/5"
                >
                  {/* Photo */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={dest.img}
                      alt={t(dest.name)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${dest.tagColor}`}>
                        {t(dest.tag)}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-heading font-bold text-river-blue mb-3 leading-tight">{t(dest.name)}</h3>
                    <p className="text-sm text-river-blue/60 font-body leading-relaxed mb-4">{t(dest.desc)}</p>
                    <div className="flex items-center gap-2 text-xs text-warm-gold font-bold border-t border-river-blue/5 pt-4">
                      <Compass size={13} />
                      <span>{t(dest.duration)}</span>
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
