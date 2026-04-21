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
import { 
  Plane, 
  Bus, 
  Ship, 
  Bed, 
  HelpCircle, 
  CheckCircle2, 
  UtensilsCrossed, 
  ShoppingBag,
  Star,
  MapPin,
  Clock
} from "lucide-react";

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

  const hotels = [
    {
      name: "Galaxy Hotel Banjarmasin",
      type: "Luxury / 5-Star",
      vibe: { id: "Modern & Elegan", en: "Modern & Elegant" },
      feature: { id: "Kolam Renang & Spa Terbaik", en: "Best Pool & Spa" },
      price: "Rp 1.2M+"
    },
    {
      name: "Mercure Banjarmasin",
      type: "Premium / 4-Star",
      vibe: { id: "Terhubung ke Mall", en: "Connected to Mall" },
      feature: { id: "Akses Duta Mall Banjarmasin", en: "Duta Mall Access" },
      price: "Rp 900k+"
    },
    {
      name: "Swiss-Belhotel Borneo",
      type: "Mid-Range / 4-Star",
      vibe: { id: "Pemandangan Sungai", en: "River View" },
      feature: { id: "Dekat Siring & Pasar Terapung", en: "Near Siring & Floating Market" },
      price: "Rp 800k+"
    },
    {
      name: "Hotel Rattan Inn",
      type: "Business / 4-Star",
      vibe: { id: "Nuansa Resort", en: "Resort Ambience" },
      feature: { id: "Area Hijau Luas & Kuliner Jepang", en: "Large Green Area & Japanese Dining" },
      price: "Rp 750k+"
    }
  ];

  const eatAndShop = [
    {
      category: "culinary",
      items: [
        { name: "Soto Banjar Bang Amat", desc: { id: "Makan Soto Banjar legendaris di pinggir sungai dengan iringan musik Panting.", en: "Legendary Soto Banjar by the river with Panting music." } },
        { name: "Lontong Orari", desc: { id: "Porsi besar dengan tekstur lontong unik, favorit warga lokal.", en: "Hearty portions with unique texture, a local favorite." } },
        { name: "Depot Mie Bancir", desc: { id: "Mie khas Banjar dengan bumbu rempah yang kuat, kreasi koki ternama.", en: "Banjar-style noodles with strong spices, created by top chefs." } }
      ]
    },
    {
      category: "shopping",
      items: [
        { name: "Kampung Sasirangan", desc: { id: "Pusat tekstil tradisional Banjar, bisa melihat proses pembuatan langsung.", en: "Traditional Banjar textiles, watch the making process live." } },
        { name: "Wadai Banjar", desc: { id: "Toko oleh-oleh makanan khas: Bingka, Amplang, hingga Sambal Acan.", en: "Local food treats: Bingka, Amplang, to Acan Chili Sauce." } },
        { name: "Pasar Intan Martapura", desc: { id: "Pusat batu mulia dan perhiasan terbaik di Indonesia.", en: "The best gemstone and jewelry center in Indonesia." } }
      ]
    }
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

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <NavigationBar />

      <PageTransitionWrapper>
        <HeroSection
          variant="parallax"
          pageKey="panduan"
          backgroundSrc="/images/wisata/Taman_Siring_Banjarmasin.jpg"
          backgroundAlt={{ id: "Panduan Wisata", en: "Travel Guide" }}
          eyebrow={{ id: "Panduan Perjalanan", en: "Travel Guide" }}
          headline={{ id: "Rencanakan Eksplorasi Anda.", en: "Plan Your Exploration." }}
          subheadline={{
            id: "Informasi praktis, akomodasi terbaik, dan kurasi tempat makan untuk perjalanan tak terlupakan.",
            en: "Practical info, best stays, and curated dining for an unforgettable journey.",
          }}
          overlayOpacity={0.45}
        />

        {/* ── Transport ── */}
        <SectionWrapper background="white">
          <div className="text-center mb-16">
            <FadeInView>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-river-blue mb-4">
                {t({ id: "Cara Menuju & Berkeliling", en: "Getting There & Around" })}
              </h2>
              <div className="h-1 w-16 bg-warm-gold mx-auto rounded-full" />
            </FadeInView>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {transportation.map((item, i) => (
              <StaggerItem key={i}>
                <div className="group p-10 rounded-[3rem] border border-slate-100 hover:border-warm-gold/30 hover:shadow-2xl transition-all duration-700 bg-white">
                  <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-river-blue mb-8 group-hover:bg-warm-gold group-hover:text-white transition-all transform group-hover:rotate-6">
                    <item.icon size={36} />
                  </div>
                  <h4 className="text-2xl font-black text-river-blue mb-4 leading-tight">{t(item.title)}</h4>
                  <p className="text-sm text-river-blue/50 font-medium leading-relaxed mb-6">{t(item.desc)}</p>
                  <div className="text-[10px] font-black text-warm-gold uppercase tracking-[0.2em] border-t border-slate-50 pt-6">
                    {t(item.detail)}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionWrapper>

        {/* ── Hotels: Curated Stays ── */}
        <SectionWrapper background="light" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <FadeInView>
                  <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Recommended Stays</span>
                  <h2 className="text-5xl md:text-7xl font-black text-river-blue tracking-tighter leading-none">
                    {t({ id: "Istirahat Berkelas.", en: "Stay in Class." })}
                  </h2>
               </FadeInView>
               <FadeInView delay={0.2} className="md:text-right">
                  <p className="text-river-blue/40 font-medium max-w-sm ml-auto">
                    {t({ id: "Pilihan hotel terbaik untuk kenyamanan maksimal Anda selama di Banjarmasin.", en: "Top hotel selections for your maximum comfort during your stay in Banjarmasin." })}
                  </p>
               </FadeInView>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hotels.map((hotel, i) => (
                  <FadeInView key={i} delay={i * 0.1}>
                    <div className="bg-white p-8 rounded-[3rem] border border-slate-100 hover:shadow-premium transition-all duration-700 group flex flex-col h-full">
                       <div className="mb-6 flex justify-between items-start">
                          <div className="w-12 h-12 bg-river-blue/5 rounded-2xl flex items-center justify-center text-river-blue group-hover:bg-river-blue group-hover:text-white transition-all">
                             <Bed size={22} />
                          </div>
                          <div className="text-[9px] font-black uppercase tracking-widest text-warm-gold px-3 py-1 bg-warm-gold/5 rounded-full border border-warm-gold/10">
                            {hotel.type}
                          </div>
                       </div>
                       <h4 className="text-xl font-black text-river-blue mb-4 tracking-tight leading-tight group-hover:text-warm-gold transition-colors">{hotel.name}</h4>
                       
                       <div className="space-y-4 mb-8">
                          <div className="flex items-center gap-3 text-xs text-river-blue/40 font-bold">
                             <Star size={14} className="text-warm-gold" />
                             {t(hotel.vibe)}
                          </div>
                          <div className="flex items-center gap-3 text-xs text-river-blue/40 font-bold">
                             <MapPin size={14} />
                             {t(hotel.feature)}
                          </div>
                       </div>

                       <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                          <span className="text-[10px] font-black text-river-blue/20 uppercase tracking-widest leading-none">Starts from</span>
                          <span className="text-sm font-black text-river-blue">{hotel.price}</span>
                       </div>
                    </div>
                  </FadeInView>
                ))}
             </div>
          </div>
        </SectionWrapper>

        {/* ── Itineraries: Large Bento Format ── */}
        <section className="py-40 bg-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                <FadeInView>
                  <h2 className="text-5xl md:text-8xl font-black text-river-blue tracking-tighter leading-none mb-8">
                    Suggested <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-warm-gold to-river-blue">Itinerary.</span>
                  </h2>
                  <p className="text-river-blue/30 font-black uppercase text-[10px] tracking-[0.4em]">Optimized 48-Hour Experience</p>
                </FadeInView>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {itineraries.map((itinerary, i) => (
                  <FadeInView key={i} direction={i % 2 === 0 ? "right" : "left"}>
                    <div className="bg-slate-50/50 p-12 md:p-20 rounded-[4rem] group hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-premium transition-all duration-700 h-full">
                      <div className="flex items-baseline gap-6 mb-12">
                        <span className="text-7xl md:text-9xl font-black text-river-blue/5 group-hover:text-warm-gold/10 transition-colors">0{itinerary.day}</span>
                        <h3 className="text-3xl md:text-4xl font-black text-river-blue tracking-tight">{t(itinerary.title)}</h3>
                      </div>
                      <div className="space-y-8">
                        {itinerary.items.map((item, j) => (
                          <div key={j} className="flex gap-8 items-start group/item">
                            <span className="text-xs font-black text-river-blue/30 w-14 pt-1 shrink-0">{item.time}</span>
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 mt-2.5 shrink-0 group-hover/item:scale-150 group-hover/item:bg-warm-gold transition-all" />
                            <p className="text-lg text-river-blue/70 font-semibold group-hover/item:text-river-blue transition-colors leading-tight">{t(item.text)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
           </div>
        </section>

        {/* ── Culinary & Shopping ── */}
        <SectionWrapper background="dark" className="py-40">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 {eatAndShop.map((section, idx) => (
                   <FadeInView key={idx}>
                      <div className="flex items-center gap-4 mb-14">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-warm-gold">
                           {section.category === "culinary" ? <UtensilsCrossed size={28} /> : <ShoppingBag size={28} />}
                        </div>
                        <h2 className="text-4xl font-black text-white tracking-tight">
                           {section.category === "culinary" ? t({ id: "Rasa Lokal", en: "Local Tastes" }) : t({ id: "Oleh-Oleh", en: "Souvenirs" })}
                        </h2>
                      </div>
                      <div className="grid gap-6">
                         {section.items.map((item, i) => (
                            <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-500">
                               <h4 className="text-xl font-black text-warm-gold mb-3">{item.name}</h4>
                               <p className="text-sm text-white/40 font-medium leading-relaxed">{t(item.desc)}</p>
                            </div>
                         ))}
                      </div>
                   </FadeInView>
                 ))}
              </div>
           </div>
        </SectionWrapper>

        {/* ── Practical Info ── */}
        <SectionWrapper background="white" className="py-40 border-t border-slate-50">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24 max-w-2xl mx-auto">
                <FadeInView>
                  <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Traveler Essentials</span>
                  <h2 className="text-4xl md:text-6xl font-black text-river-blue tracking-tighter leading-tight">
                    {t({ id: "Informasi Penting.", en: "Key Information." })}
                  </h2>
                </FadeInView>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { icon: Clock, label: { id: "Zona Waktu", en: "Time Zone" }, val: "WITA (UTC+8)", sub: { id: "1 Jam lebih cepat dari Jakarta", en: "1 Hour ahead of Jakarta" } },
                   { icon: Star, label: { id: "Pakaian", en: "Attire" }, val: "Sopan & Nyaman", sub: { id: "Gunakan katun tipis untuk udara lembab", en: "Light cotton for humid weather" } },
                   { icon: HelpCircle, label: { id: "Panggilan Darurat", en: "Emergency" }, val: "112 / 110", sub: { id: "Polisi & Ambulans terdata", en: "Police & Ambulance" } }
                 ].map((item, i) => (
                    <FadeInView key={i} delay={i * 0.1}>
                       <div className="p-12 bg-slate-50/50 rounded-[3.5rem] border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-premium transition-all duration-700 text-center">
                          <div className="w-16 h-16 bg-river-blue/5 rounded-[1.5rem] flex items-center justify-center text-warm-gold mx-auto mb-8">
                             <item.icon size={30} />
                          </div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-river-blue/20 mb-3">{t(item.label)}</p>
                          <h4 className="text-2xl font-black text-river-blue mb-2 tracking-tight">{item.val}</h4>
                          <p className="text-xs text-river-blue/40 font-bold uppercase tracking-wide">{t(item.sub)}</p>
                       </div>
                    </FadeInView>
                 ))}
              </div>
           </div>
        </SectionWrapper>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}

const Landmark = ({ size = 24, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 21h18" />
    <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3" />
    <path d="M5 21V10.85" />
    <path d="M19 21V10.85" />
    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
  </svg>
);
