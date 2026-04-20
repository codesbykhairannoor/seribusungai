"use client";

import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Cpu, Globe, TrendingUp, Zap, Shield, Rocket, Wifi, Database } from "lucide-react";

export default function VisiDigital() {
  const { t } = useLanguage();

  const initiatives = [
    { title: { id: "Smart Governance", en: "Smart Governance" }, desc: { id: "Pelayanan publik berbasis digital yang transparan dan efisien.", en: "Transparent and efficient digital-based public services." }, icon: Shield, gradient: "from-blue-500 to-river-blue", span: "col-span-2 md:col-span-1" },
    { title: { id: "Smart Environment", en: "Smart Environment" }, desc: { id: "Sistem monitoring sungai dan mitigasi banjir cerdas.", en: "Intelligent river monitoring and flood mitigation systems." }, icon: Zap, gradient: "from-emerald-500 to-teal-600", span: "col-span-2 md:col-span-1" },
    { title: { id: "Smart Economy", en: "Smart Economy" }, desc: { id: "Pendampingan digitalisasi UMKM dan ekosistem startup.", en: "Digitalization support for MSMEs and startup ecosystem." }, icon: TrendingUp, gradient: "from-warm-gold to-amber-600", span: "col-span-2 md:col-span-2" },
    { title: { id: "Smart Mobility", en: "Smart Mobility" }, desc: { id: "Sistem transportasi terintegrasi berbasis data real-time.", en: "Integrated transportation system based on real-time data." }, icon: Wifi, gradient: "from-purple-500 to-violet-600", span: "col-span-2 md:col-span-1" },
    { title: { id: "Smart People", en: "Smart People" }, desc: { id: "Peningkatan literasi digital dan SDM berkualitas.", en: "Improving digital literacy and quality human resources." }, icon: Database, gradient: "from-rose-500 to-pink-600", span: "col-span-2 md:col-span-1" },
    { title: { id: "Smart Living", en: "Smart Living" }, desc: { id: "Kualitas hidup warga yang meningkat melalui teknologi.", en: "Improved quality of life for citizens through technology." }, icon: Cpu, gradient: "from-orange-500 to-red-500", span: "col-span-2 md:col-span-2" },
  ];

  const digitalStats = [
    { value: 5000, suffix: "+", label: { id: "UMKM Digital", en: "Digital MSMEs" } },
    { value: 85, suffix: "%", label: { id: "Konektivitas", en: "Connectivity" } },
    { value: 47, suffix: "+", label: { id: "Layanan Online", en: "Online Services" } },
    { value: 2030, suffix: "", label: { id: "Target Smart City", en: "Smart City Target" } },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>

        <HeroSection
          variant="parallax"
          backgroundSrc="https://commons.wikimedia.org/wiki/Special:FilePath/Gedung_Bank_Indonesia_di_Banjarmasin.jpg"
          backgroundAlt={{ id: "Visi Digital Banjarmasin", en: "Digital Vision Banjarmasin" }}
          eyebrow={{ id: "Smart City 2030", en: "Smart City 2030" }}
          headline={{ id: "Masa Depan di Tepian Sungai", en: "Future on the Riverbanks" }}
          subheadline={{ id: "Mentransformasi Banjarmasin menjadi Smart City yang berkelanjutan, inklusif, dan berdaya saing global.", en: "Transforming Banjarmasin into a sustainable, inclusive, and globally competitive Smart City." }}
          overlayOpacity={0.6}
        />

        {/* ── SMART CITY BENTO GRID ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                {t({ id: "Pilar Smart City", en: "Smart City Pillars" })}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">
                {t({ id: "Menuju Banjarmasin 2030", en: "Towards Banjarmasin 2030" })}
              </h2>
            </FadeInView>

            {/* Bento grid — alternating sizes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {initiatives.map((item, i) => (
                <FadeInView key={i} delay={i * 0.07} className={item.span}>
                  <div className="group relative bg-river-blue-50 rounded-3xl p-7 h-full min-h-[160px] flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all duration-400 border border-transparent hover:border-warm-gold/20">
                    {/* Gradient blob on hover */}
                    <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-river-blue text-lg mb-2">{t(item.title)}</h4>
                      <p className="text-xs text-river-blue/55 leading-relaxed">{t(item.desc)}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ── INFRASTRUKTUR DIGITAL — Horizontal timeline/progress layout ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
                {t({ id: "Fondasi Kota Cerdas", en: "Smart City Foundation" })}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">
                {t({ id: "Infrastruktur Digital", en: "Digital Infrastructure" })}
              </h2>
              <p className="text-river-blue/50 mt-3 max-w-xl font-body">
                {t({ id: "Pilar-pilar teknologi yang mendukung visi Banjarmasin sebagai River Smart City.", en: "Technology pillars supporting Banjarmasin's vision as a River Smart City." })}
              </p>
            </FadeInView>

            {/* Horizontal timeline */}
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-river-blue-50 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  {
                    year: "2020",
                    icon: "🚌",
                    title: { id: "Trans Banjarmasin BRT", en: "Trans Banjarmasin BRT" },
                    desc: { id: "Bus Rapid Transit pertama di Kalimantan Selatan, diluncurkan 2020. Jaringan BRT Banjarbakula diperluas Desember 2021 untuk konektivitas antar kota.", en: "South Kalimantan's first Bus Rapid Transit, launched in 2020. The Banjarbakula BRT network was expanded in December 2021 for inter-city connectivity." },
                    progress: 85,
                    color: "bg-emerald-500",
                    dotColor: "bg-emerald-500",
                  },
                  {
                    year: "2021",
                    icon: "🏛️",
                    title: { id: "OSC One Stop Center", en: "OSC One Stop Center" },
                    desc: { id: "Pusat layanan publik terpadu berbasis digital yang memungkinkan warga mengurus perizinan dan administrasi kota dalam satu atap secara efisien.", en: "Integrated digital-based public service center enabling citizens to handle permits and city administration under one roof efficiently." },
                    progress: 90,
                    color: "bg-river-blue",
                    dotColor: "bg-river-blue",
                  },
                  {
                    year: "2022",
                    icon: "🌊",
                    title: { id: "River IoT Monitoring", en: "River IoT Monitoring" },
                    desc: { id: "Jaringan sensor IoT di sepanjang sungai untuk pemantauan kualitas air, ketinggian muka air, dan sistem peringatan dini banjir secara real-time.", en: "IoT sensor network along rivers for real-time water quality monitoring, water level tracking, and early flood warning systems." },
                    progress: 70,
                    color: "bg-warm-gold",
                    dotColor: "bg-warm-gold",
                  },
                  {
                    year: "2023",
                    icon: "📡",
                    title: { id: "47 Media Terdaftar", en: "47 Registered Media" },
                    desc: { id: "Ekosistem media lokal yang kuat dengan 47 outlet berita terdaftar, termasuk stasiun TV lokal Duta TV dan Banjar TV, mendukung keterbukaan informasi publik.", en: "A strong local media ecosystem with 47 registered news outlets, including local TV stations Duta TV and Banjar TV, supporting public information transparency." },
                    progress: 95,
                    color: "bg-purple-500",
                    dotColor: "bg-purple-500",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.6 }}
                    className="group"
                  >
                    {/* Timeline dot */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-5 h-5 rounded-full ${item.dotColor} ring-4 ring-white shadow-lg shrink-0`} />
                      <span className="text-xs font-bold text-river-blue/40 uppercase tracking-widest">{item.year}</span>
                    </div>
                    {/* Card */}
                    <div className="bg-river-blue-50 rounded-3xl p-6 h-full group-hover:shadow-xl transition-all duration-400 border border-transparent group-hover:border-warm-gold/20">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h4 className="font-heading font-bold text-river-blue text-lg mb-3 leading-tight">{t(item.title)}</h4>
                      <p className="text-xs text-river-blue/55 font-body leading-relaxed mb-5">{t(item.desc)}</p>
                      {/* Progress bar */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[10px] uppercase tracking-widest text-river-blue/40 font-bold">
                            {t({ id: "Implementasi", en: "Implementation" })}
                          </span>
                          <span className="text-xs font-bold text-warm-gold">{item.progress}%</span>
                        </div>
                        <div className="h-1.5 bg-river-blue/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 + 0.3, duration: 0.8 }}
                            className={`h-full rounded-full ${item.color}`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DIGITAL ECONOMY — Overlapping photo + stats ── */}
        <section className="py-20 md:py-28 bg-river-blue-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Photo with floating stat cards */}
              <FadeInView direction="right" className="lg:col-span-6 relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Gedung_Bank_Indonesia_di_Banjarmasin.jpg" alt="Digital economy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/60 to-transparent" />
                </div>
                {/* Floating stat cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl"
                >
                  <div className="text-3xl font-heading font-bold text-river-blue">
                    <AnimatedCounter value={5000} suffix="+" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-warm-gold font-bold mt-1">UMKM Digital</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20, y: -20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                  className="absolute -top-6 -right-6 bg-warm-gold text-white rounded-2xl p-5 shadow-2xl"
                >
                  <div className="text-3xl font-heading font-bold">
                    <AnimatedCounter value={85} suffix="%" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80 font-bold mt-1">Konektivitas</div>
                </motion.div>
              </FadeInView>

              {/* Text */}
              <FadeInView direction="left" className="lg:col-span-6">
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">
                  {t({ id: "Ekonomi Digital", en: "Digital Economy" })}
                </span>
                <h2 className="text-4xl font-heading font-bold text-river-blue mb-8 leading-tight">
                  {t({ id: "Memajukan UMKM Lewat Teknologi", en: "Advancing MSMEs through Technology" })}
                </h2>
                <p className="text-lg text-river-blue/65 mb-10 font-body leading-relaxed">
                  {t({ id: "Dengan lebih dari 5.000 UMKM yang telah go-digital, Banjarmasin kini menjadi hub ekonomi kreatif digital di Kalimantan Selatan. Kami membangun ekosistem di mana tradisi bertemu inovasi.", en: "With over 5,000 MSMEs now go-digital, Banjarmasin is becoming the digital creative economy hub in South Kalimantan. We are building an ecosystem where tradition meets innovation." })}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {digitalStats.slice(2).map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-river-blue/5">
                      <div className="text-4xl font-heading font-bold text-river-blue mb-1">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-warm-gold font-bold">{t(stat.label)}</div>
                    </div>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── INVESTMENT CTA — Full-bleed dark with bento features ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView>
              <div className="relative bg-river-blue rounded-[50px] overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 opacity-10">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Gedung_Bank_Indonesia_di_Banjarmasin.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Globe size={350} />
                </div>

                <div className="relative z-10 p-12 md:p-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">
                        {t({ id: "Investasi", en: "Investment" })}
                      </span>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
                        {t({ id: "Pusat Investasi Berkelanjutan", en: "Hub for Sustainable Investment" })}
                      </h2>
                      <p className="text-xl text-white/60 mb-10 font-body leading-relaxed">
                        {t({ id: "Kami mengundang para investor untuk berkolaborasi dalam membangun infrastruktur cerdas, pariwisata berkelanjutan, dan ekonomi digital masa depan di Banjarmasin.", en: "We invite investors to collaborate in building smart infrastructure, sustainable tourism, and the future digital economy in Banjarmasin." })}
                      </p>
                      <a href="/kontak" className="inline-block px-8 py-4 bg-warm-gold hover:bg-warm-gold-dark text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-warm-gold/20">
                        {t({ id: "Hubungi Kami", en: "Contact Us" })}
                      </a>
                    </div>

                    {/* Bento features */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Rocket, label: { id: "Kemudahan Perizinan", en: "Easy Licensing" }, bg: "bg-white/10" },
                        { icon: Cpu, label: { id: "Infrastruktur Tech", en: "Tech Infrastructure" }, bg: "bg-warm-gold/20" },
                        { icon: TrendingUp, label: { id: "Pertumbuhan Ekonomi", en: "Economic Growth" }, bg: "bg-white/10" },
                        { icon: Globe, label: { id: "Koneksi Global", en: "Global Connection" }, bg: "bg-white/5" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className={`${item.bg} rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors flex flex-col gap-3`}
                        >
                          <item.icon className="text-warm-gold" size={24} />
                          <span className="font-bold text-white text-sm">{t(item.label)}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
