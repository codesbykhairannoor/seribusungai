"use client";

import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import CulinaryCard, { CulinaryItem } from "@/components/ui/CulinaryCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Flame, Star, Leaf, ArrowUpRight } from "lucide-react";

export default function Kuliner() {
  const { t } = useLanguage();

  const iconicDishes: CulinaryItem[] = [
    {
      id: "soto-banjar",
      name: { id: "Soto Banjar", en: "Soto Banjar" },
      description: { id: "Ikon kuliner nomor satu. Soto ayam berkuah bening harum rempah — kayu manis, cengkeh, lawang — disajikan dengan ketupat dan perkedel.", en: "The number one culinary icon. Chicken soup with clear broth fragrant with spices — cinnamon, cloves, star anise — served with ketupat and potato cakes." },
      imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mi_Habang.jpg",
      location: { id: "Hampir di Seluruh Kota", en: "Almost Everywhere In City" },
      tag: { id: "Wajib Coba", en: "Must Try" },
    },
    {
      id: "ketupat-kandangan",
      name: { id: "Ketupat Kandangan", en: "Ketupat Kandangan" },
      description: { id: "Ketupat dengan kuah santan kental gurih, disajikan dengan ikan Haruan yang dipanggang sebelum dimasak.", en: "Ketupat with savory thick coconut milk broth, served with Haruan fish grilled before cooking." },
      imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Iwak_Karing_Kalakai_Masak_Kuning_Sambal_Ramania.jpg",
      location: { id: "Warung Khas Banjar", en: "Typical Banjar Eateries" },
    },
    {
      id: "gangan-asam-banjar",
      name: { id: "Gangan Asam Banjar", en: "Gangan Asam Banjar" },
      description: { id: "Sayur asam khas Banjar dengan ikan haruan atau patin, timun, dan kacang panjang yang menyegarkan.", en: "Banjar style sour vegetable soup with haruan or patin fish, cucumber, and long beans." },
      imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Buras_Banjar_1.jpg",
    },
    {
      id: "nasi-kuning-banjar",
      name: { id: "Nasi Kuning Banjar", en: "Banjar Yellow Rice" },
      description: { id: "Nasi kuning wangi disajikan dengan bumbu masak habang (merah) ikan haruan, ayam, atau telur.", en: "Fragrant yellow rice served with masak habang red sauce haruan fish, chicken, or eggs." },
      imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi_Kuning_Banjar_001.jpg",
    },
    {
      id: "patin-baubar",
      name: { id: "Patin Baubar", en: "Grilled Patin Fish" },
      description: { id: "Ikan Patin segar yang dibakar dengan bumbu rempah khas, menghasilkan rasa manis gurih yang meresap.", en: "Fresh Patin fish grilled with special spices, producing a deep savory-sweet flavor." },
      imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bola_Bola_Kentang_Ikan_Asin.jpg",
    },
    {
      id: "bingka-banjar",
      name: { id: "Bingka Banjar", en: "Bingka Banjar" },
      description: { id: "Kue basah yang sangat lembut, manis, dan gurih dengan aroma kentang dan santan yang kuat. Ikon takjil saat Ramadan.", en: "A very soft, sweet, and savory traditional cake with strong potato and coconut milk aroma. A Ramadan icon." },
      imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Buah_khas_Kalimantan_Selatan.jpg",
      tag: { id: "Kue Tradisional", en: "Traditional Cake" },
    },
    {
      id: "manday",
      name: { id: "Manday", en: "Manday" },
      description: { id: "Kuliner unik dari kulit buah cempedak yang diawetkan dengan garam, kemudian digoreng atau ditumis.", en: "A unique culinary item made from Cempedak fruit skin preserved with salt, then fried or sauteed." },
      imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Pedagang_Makanan_di_Sungai_Martapura.jpg",
    },
    {
      id: "apam-barabai",
      name: { id: "Apam Barabai", en: "Apam Barabai" },
      description: { id: "Kue tradisional berbahan tepung beras dan tape singkong, bertekstur empuk dengan rasa manis gula merah.", en: "Traditional cake made from rice flour and fermented cassava, with a soft texture and brown sugar sweetness." },
      imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Buras_Banjar_1.jpg",
    },
  ];

  const snacks = [
    { id: "es-kelapa", name: { id: "Es Kelapa Muda", en: "Young Coconut Ice" }, desc: { id: "Kesegaran kelapa muda pesisir sungai.", en: "Refreshing young coconut from the riverbank." }, icon: Leaf, color: "bg-emerald-50 text-emerald-600" },
    { id: "wadai-banjar", name: { id: "Wadai Banjar", en: "Banjar Cakes" }, desc: { id: "41 macam wadai (kue) tradisional khas Banjar.", en: "41 types of traditional Banjar cakes." }, icon: Star, color: "bg-warm-gold/10 text-warm-gold" },
    { id: "teh-banjar", name: { id: "Teh Banjar", en: "Banjar Tea" }, desc: { id: "Teh wangi dengan sentuhan rempah lokal.", en: "Fragrant tea with a touch of local spices." }, icon: Flame, color: "bg-earth-terracotta/10 text-earth-terracotta" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>

        <HeroSection
          variant="parallax"
          backgroundSrc="https://commons.wikimedia.org/wiki/Special:FilePath/Pedagang_Makanan_di_Sungai_Martapura.jpg"
          backgroundAlt={{ id: "Kuliner Banjar", en: "Banjar Culinary" }}
          eyebrow={{ id: "Kuliner Khas", en: "Local Cuisine" }}
          headline={{ id: "Cita Rasa Sungai", en: "Tastes of the River" }}
          subheadline={{ id: "Menjelajahi keaslian bumbu dan tradisi kuliner yang melegenda di mulut.", en: "Exploring the authenticity of spices and culinary traditions that are legendary on the palate." }}
          overlayOpacity={0.5}
        />

        {/* ── EDITORIAL FEATURED DISH + OFFSET GRID ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                {t({ id: "Kuliner Ikonik", en: "Iconic Culinary" })}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">
                {t({ id: "8 Rasa yang Wajib Dicoba", en: "8 Tastes You Must Try" })}
              </h2>
            </FadeInView>

            {/* Featured dish — full width editorial */}
            <FadeInView className="mb-8">
              <div className="relative rounded-3xl overflow-hidden h-72 md:h-96 group shadow-2xl">
                <img
                  src={iconicDishes[0].imageSrc}
                  alt={t(iconicDishes[0].name)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="p-8 md:p-14 max-w-xl">
                    <span className="text-warm-gold text-xs font-bold uppercase tracking-widest mb-3 block">
                      {t({ id: "Hidangan Utama", en: "Main Dish" })} #01
                    </span>
                    <h3 className="text-white font-heading font-bold text-3xl md:text-5xl mb-4 leading-tight">
                      {t(iconicDishes[0].name)}
                    </h3>
                    <p className="text-white/70 font-body text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
                      {t(iconicDishes[0].description)}
                    </p>
                    {iconicDishes[0].location && (
                      <div className="inline-flex items-center gap-2 text-warm-gold font-bold text-xs uppercase tracking-widest">
                        <ArrowUpRight size={14} />
                        {t(iconicDishes[0].location)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeInView>

            {/* Offset staggered grid for remaining 7 dishes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-start">
              {iconicDishes.slice(1).map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className={i % 3 === 1 ? "mt-8" : i % 3 === 2 ? "mt-4" : "mt-0"}
                >
                  <CulinaryCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FLOATING MARKET — Overlapping layout ── */}
        <section className="py-20 md:py-28 bg-river-blue-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Photo with overlapping card */}
              <FadeInView direction="right" className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_Terapung_di_Banjarmasin.jpg"
                    alt="Floating market"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-white font-heading font-bold text-lg">Pasar Terapung Lok Baintan</span>
                  </div>
                </div>
                {/* Overlapping badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -top-5 -right-5 bg-warm-gold text-white rounded-2xl p-5 shadow-2xl hidden md:block"
                >
                  <div className="text-3xl font-heading font-bold">05:30</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80">
                    {t({ id: "Buka Subuh", en: "Opens at Dawn" })}
                  </div>
                </motion.div>
              </FadeInView>

              {/* Text — 6 cols */}
              <FadeInView direction="left" className="lg:col-span-6">
                <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-xl border border-river-blue/5">
                  <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">
                    {t({ id: "Pengalaman Unik", en: "Unique Experience" })}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-river-blue mb-6 leading-tight">
                    {t({ id: "Sarapan di Atas Klotok", en: "Breakfast on a Klotok" })}
                  </h2>
                  <p className="text-river-blue/65 font-body leading-relaxed mb-8">
                    {t({ id: "Nikmati sensasi makan soto banjar atau ketupat kandangan langsung di atas klotok sambil terombang-ambing pelan di tengah pasar terapung Lok Baintan.", en: "Enjoy the sensation of eating soto banjar or ketupat kandangan directly on a klotok boat while gently tossing in the middle of Lok Baintan floating market." })}
                  </p>
                  <a href="/wisata/pasar-terapung-lok-baintan" className="inline-block px-8 py-4 bg-river-blue text-white font-bold rounded-full hover:bg-river-blue-900 transition-all hover:scale-105 shadow-xl">
                    {t({ id: "Lihat Destinasi", en: "View Destination" })}
                  </a>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── SNACKS — Horizontal scroll on mobile, 3-col on desktop ── */}
        <SectionWrapper background="white">
          <FadeInView className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue mb-4">
              {t({ id: "Minuman & Jajanan", en: "Drinks & Snacks" })}
            </h2>
            <div className="h-1 w-16 bg-warm-gold mx-auto rounded-full" />
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {snacks.map((snack, i) => (
              <StaggerItem key={snack.id}>
                <div className={`group p-8 rounded-3xl border-2 border-transparent hover:border-warm-gold/20 hover:shadow-xl transition-all duration-400 text-center bg-white ${i === 1 ? "md:mt-8" : ""}`}>
                  <div className={`w-16 h-16 ${snack.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <snack.icon size={28} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-river-blue mb-3">{t(snack.name)}</h4>
                  <p className="text-sm text-river-blue/60 font-body leading-relaxed">{t(snack.desc)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionWrapper>

        {/* ── PASAR & WARUNG IKONIK — Horizontal cards with left accent ── */}
        <section className="py-20 md:py-28 bg-river-blue-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                {t({ id: "Tempat Makan", en: "Where to Eat" })}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">
                {t({ id: "Pasar & Warung Ikonik", en: "Iconic Markets & Eateries" })}
              </h2>
              <p className="text-river-blue/50 mt-3 max-w-xl font-body">
                {t({ id: "Tiga destinasi kuliner yang wajib dikunjungi untuk pengalaman makan autentik Banjarmasin.", en: "Three must-visit culinary destinations for an authentic Banjarmasin dining experience." })}
              </p>
            </FadeInView>

            <div className="space-y-5">
              {[
                {
                  name: { id: "Pasar Terapung Lok Baintan", en: "Lok Baintan Floating Market" },
                  type: { id: "Pasar Tradisional", en: "Traditional Market" },
                  hours: { id: "Pukul 06.00 – 09.00 WIB", en: "6:00 AM – 9:00 AM" },
                  desc: { id: "Sarapan paling ikonik di Banjarmasin — makan soto banjar atau ketupat kandangan langsung di atas klotok sambil menyaksikan aktivitas pedagang perahu di Sungai Martapura. Datang sebelum jam 7 pagi untuk suasana terbaik.", en: "The most iconic breakfast in Banjarmasin — eat soto banjar or ketupat kandangan directly on a klotok boat while watching boat traders on the Martapura River. Arrive before 7 AM for the best atmosphere." },
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_Terapung_di_Banjarmasin.jpg",
                  accent: "border-warm-gold bg-warm-gold/5",
                  accentBar: "bg-warm-gold",
                  badge: { id: "Pengalaman Unik", en: "Unique Experience" },
                  badgeColor: "bg-warm-gold text-white",
                },
                {
                  name: { id: "Warung Soto H. Anang", en: "Warung Soto H. Anang" },
                  type: { id: "Warung Legendaris", en: "Legendary Eatery" },
                  hours: { id: "Pukul 07.00 – 14.00 WIB", en: "7:00 AM – 2:00 PM" },
                  desc: { id: "Salah satu warung soto banjar paling terkenal di kota, telah berdiri selama puluhan tahun. Kuah bening harum rempah dengan ayam kampung pilihan dan ketupat buatan sendiri menjadi daya tarik utama yang membuat pelanggan selalu kembali.", en: "One of the most famous soto banjar eateries in the city, operating for decades. Clear broth fragrant with spices, choice free-range chicken, and homemade ketupat are the main attractions that keep customers coming back." },
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Mi_Habang.jpg",
                  accent: "border-river-blue bg-river-blue/5",
                  accentBar: "bg-river-blue",
                  badge: { id: "Legendaris", en: "Legendary" },
                  badgeColor: "bg-river-blue text-white",
                },
                {
                  name: { id: "Kawasan Kuliner Siring", en: "Siring Culinary District" },
                  type: { id: "Street Food", en: "Street Food" },
                  hours: { id: "Pukul 17.00 – 23.00 WIB", en: "5:00 PM – 11:00 PM" },
                  desc: { id: "Deretan warung dan kios makanan di sepanjang tepian Sungai Martapura yang ramai saat senja. Nikmati berbagai pilihan kuliner Banjar sambil menikmati pemandangan sungai dan lampu kota yang memantul di air.", en: "A row of food stalls and kiosks along the Martapura riverbank that comes alive at dusk. Enjoy a variety of Banjar culinary options while taking in the river view and city lights reflecting on the water." },
                  img: "https://commons.wikimedia.org/wiki/Special:FilePath/Pedagang_Makanan_di_Sungai_Martapura.jpg",
                  accent: "border-earth-terracotta bg-earth-terracotta/5",
                  accentBar: "bg-earth-terracotta",
                  badge: { id: "Sunset Vibes", en: "Sunset Vibes" },
                  badgeColor: "bg-earth-terracotta text-white",
                },
              ].map((place, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 flex items-stretch border-l-4 ${place.accent}`}
                >
                  {/* Left accent bar */}
                  <div className={`w-1.5 shrink-0 ${place.accentBar}`} />
                  {/* Photo */}
                  <div className="relative w-28 md:w-44 shrink-0 overflow-hidden">
                    <img
                      src={place.img}
                      alt={t(place.name)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col justify-center flex-1 gap-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${place.badgeColor}`}>
                        {t(place.badge)}
                      </span>
                      <span className="text-[10px] text-river-blue/40 font-bold uppercase tracking-widest">{t(place.type)}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-river-blue leading-tight">{t(place.name)}</h3>
                    <p className="text-sm text-river-blue/60 font-body leading-relaxed line-clamp-2">{t(place.desc)}</p>
                    <div className="flex items-center gap-1.5 text-xs text-warm-gold font-bold">
                      <span>⏰</span>
                      <span>{t(place.hours)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FULL-WIDTH PHOTO STRIP ── */}
        <div className="grid grid-cols-3 h-56 md:h-80">
          {[
            "https://commons.wikimedia.org/wiki/Special:FilePath/Iwak_Karing_Kalakai_Masak_Kuning_Sambal_Ramania.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Buras_Banjar_1.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi_Kuning_Banjar_001.jpg",
          ].map((src, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }} className="overflow-hidden relative">
              <img src={src} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-river-blue/20 hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
