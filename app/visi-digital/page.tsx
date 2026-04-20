"use client";

import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
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

        {/* ── HERO: Futuristic — teks kiri, stats kanan, grid background ── */}
        <section className="relative h-screen min-h-[640px] overflow-hidden bg-river-blue-900 flex items-center">
          {/* Animated grid background — CSS only, no JS */}
          <div className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(245,197,24,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              animation: "gridPulse 4s ease-in-out infinite",
            }}
          />
          <style>{`
            @keyframes gridPulse {
              0%,100% { opacity: 0.08; }
              50%      { opacity: 0.15; }
            }
          `}</style>

          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl pointer-events-none"/>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"/>

          {/* Photo overlay */}
          <div className="absolute inset-0 z-[1]">
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Gedung_Bank_Indonesia_di_Banjarmasin.jpg" alt="" className="w-full h-full object-cover opacity-10"/>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-14 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <motion.span
                initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6, delay:0.2 }}
                className="inline-flex items-center gap-2 text-warm-gold font-bold uppercase tracking-[0.3em] text-xs mb-8 px-4 py-2 rounded-full border border-warm-gold/30 bg-warm-gold/10"
              >
                <motion.div animate={{ scale:[1,1.4,1], opacity:[1,0.5,1] }} transition={{ duration:2, repeat:Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-warm-gold"/>
                Smart City 2030
              </motion.span>

              <motion.h1
                initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.4 }}
                className="font-heading font-black text-white text-4xl md:text-6xl leading-tight mb-6"
              >
                {t({ id: "Masa Depan", en: "Future" })}<br/>
                <span className="text-warm-gold">{t({ id: "di Tepian", en: "on the" })}</span><br/>
                {t({ id: "Sungai", en: "Riverbanks" })}
              </motion.h1>

              <motion.p
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.65 }}
                className="text-white/50 font-body text-base leading-relaxed max-w-md mb-10"
              >
                {t({ id: "Mentransformasi Banjarmasin menjadi Smart City yang berkelanjutan, inklusif, dan berdaya saing global.", en: "Transforming Banjarmasin into a sustainable, inclusive, and globally competitive Smart City." })}
              </motion.p>

              <motion.div
                initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.9 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-8 bg-warm-gold/40"/>
                <span className="text-white/30 text-xs font-body">
                  {t({ id: "Visi Banjarmasin (D)River Smart City", en: "Banjarmasin (D)River Smart City Vision" })}
                </span>
              </motion.div>
            </div>

            {/* Right: live stats */}
            <div className="grid grid-cols-2 gap-4">
              {digitalStats.map((stat, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}
                  transition={{ duration:0.5, delay: 0.5 + i*0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl font-heading font-bold text-warm-gold mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix}/>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{t(stat.label)}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
            <motion.div animate={{ y:[0,6,0] }} transition={{ repeat:Infinity, duration:1.8 }}
              className="w-px h-10 bg-warm-gold/30"/>
            <span className="text-white/20 text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          </motion.div>
        </section>

        {/* ── SMART CITY BENTO ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">{t({ id: "Pilar Smart City", en: "Smart City Pillars" })}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">{t({ id: "Menuju Banjarmasin 2030", en: "Towards Banjarmasin 2030" })}</h2>
            </FadeInView>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {initiatives.map((item, i) => (
                <FadeInView key={i} delay={i*0.07} className={item.span}>
                  <div className="group relative bg-river-blue-50 rounded-3xl p-7 h-full min-h-[160px] flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all duration-400 border border-transparent hover:border-warm-gold/20">
                    <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}/>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}><item.icon size={22}/></div>
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

        {/* ── INFRASTRUKTUR DIGITAL ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">{t({ id: "Fondasi Kota Cerdas", en: "Smart City Foundation" })}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">{t({ id: "Infrastruktur Digital", en: "Digital Infrastructure" })}</h2>
            </FadeInView>
            <div className="relative">
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-river-blue-50 z-0"/>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { year:"2020", icon:"🚌", title:{ id:"Trans Banjarmasin BRT", en:"Trans Banjarmasin BRT" }, desc:{ id:"Bus Rapid Transit pertama di Kalimantan Selatan, diluncurkan 2020.", en:"South Kalimantan's first Bus Rapid Transit, launched in 2020." }, progress:85, color:"bg-emerald-500", dotColor:"bg-emerald-500" },
                  { year:"2021", icon:"🏛️", title:{ id:"OSC One Stop Center", en:"OSC One Stop Center" }, desc:{ id:"Pusat layanan publik terpadu berbasis digital.", en:"Integrated digital-based public service center." }, progress:90, color:"bg-river-blue", dotColor:"bg-river-blue" },
                  { year:"2022", icon:"🌊", title:{ id:"River IoT Monitoring", en:"River IoT Monitoring" }, desc:{ id:"Jaringan sensor IoT di sepanjang sungai untuk pemantauan real-time.", en:"IoT sensor network along rivers for real-time monitoring." }, progress:70, color:"bg-warm-gold", dotColor:"bg-warm-gold" },
                  { year:"2023", icon:"📡", title:{ id:"47 Media Terdaftar", en:"47 Registered Media" }, desc:{ id:"Ekosistem media lokal yang kuat mendukung keterbukaan informasi.", en:"A strong local media ecosystem supporting public information transparency." }, progress:95, color:"bg-purple-500", dotColor:"bg-purple-500" },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.12, duration:0.6 }} className="group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-5 h-5 rounded-full ${item.dotColor} ring-4 ring-white shadow-lg shrink-0`}/>
                      <span className="text-xs font-bold text-river-blue/40 uppercase tracking-widest">{item.year}</span>
                    </div>
                    <div className="bg-river-blue-50 rounded-3xl p-6 h-full group-hover:shadow-xl transition-all duration-400 border border-transparent group-hover:border-warm-gold/20">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h4 className="font-heading font-bold text-river-blue text-lg mb-3 leading-tight">{t(item.title)}</h4>
                      <p className="text-xs text-river-blue/55 font-body leading-relaxed mb-5">{t(item.desc)}</p>
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[10px] uppercase tracking-widest text-river-blue/40 font-bold">{t({ id:"Implementasi", en:"Implementation" })}</span>
                          <span className="text-xs font-bold text-warm-gold">{item.progress}%</span>
                        </div>
                        <div className="h-1.5 bg-river-blue/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width:0 }} whileInView={{ width:`${item.progress}%` }} viewport={{ once:true }} transition={{ delay: i*0.12+0.3, duration:0.8 }}
                            className={`h-full rounded-full ${item.color}`}/>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DIGITAL ECONOMY ── */}
        <section className="py-20 md:py-28 bg-river-blue-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <FadeInView direction="right" className="lg:col-span-6 relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Gedung_Bank_Indonesia_di_Banjarmasin.jpg" alt="Digital economy" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/60 to-transparent"/>
                </div>
                <motion.div initial={{ opacity:0, x:-20, y:20 }} whileInView={{ opacity:1, x:0, y:0 }} viewport={{ once:true }} transition={{ delay:0.3 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl">
                  <div className="text-3xl font-heading font-bold text-river-blue"><AnimatedCounter value={5000} suffix="+"/></div>
                  <div className="text-[10px] uppercase tracking-widest text-warm-gold font-bold mt-1">UMKM Digital</div>
                </motion.div>
                <motion.div initial={{ opacity:0, x:20, y:-20 }} whileInView={{ opacity:1, x:0, y:0 }} viewport={{ once:true }} transition={{ delay:0.45 }}
                  className="absolute -top-6 -right-6 bg-warm-gold text-white rounded-2xl p-5 shadow-2xl">
                  <div className="text-3xl font-heading font-bold"><AnimatedCounter value={85} suffix="%"/></div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80 font-bold mt-1">Konektivitas</div>
                </motion.div>
              </FadeInView>
              <FadeInView direction="left" className="lg:col-span-6">
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">{t({ id:"Ekonomi Digital", en:"Digital Economy" })}</span>
                <h2 className="text-4xl font-heading font-bold text-river-blue mb-8 leading-tight">{t({ id:"Memajukan UMKM Lewat Teknologi", en:"Advancing MSMEs through Technology" })}</h2>
                <p className="text-lg text-river-blue/65 mb-10 font-body leading-relaxed">{t({ id:"Dengan lebih dari 5.000 UMKM yang telah go-digital, Banjarmasin kini menjadi hub ekonomi kreatif digital di Kalimantan Selatan.", en:"With over 5,000 MSMEs now go-digital, Banjarmasin is becoming the digital creative economy hub in South Kalimantan." })}</p>
                <div className="grid grid-cols-2 gap-4">
                  {digitalStats.slice(2).map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-river-blue/5">
                      <div className="text-4xl font-heading font-bold text-river-blue mb-1"><AnimatedCounter value={stat.value} suffix={stat.suffix}/></div>
                      <div className="text-[10px] uppercase tracking-widest text-warm-gold font-bold">{t(stat.label)}</div>
                    </div>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── INVESTMENT CTA ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView>
              <div className="relative bg-river-blue rounded-[50px] overflow-hidden">
                <div className="absolute inset-0 opacity-10"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Gedung_Bank_Indonesia_di_Banjarmasin.jpg" alt="" className="w-full h-full object-cover"/></div>
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><Globe size={350}/></div>
                <div className="relative z-10 p-12 md:p-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">{t({ id:"Investasi", en:"Investment" })}</span>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">{t({ id:"Pusat Investasi Berkelanjutan", en:"Hub for Sustainable Investment" })}</h2>
                      <p className="text-xl text-white/60 mb-10 font-body leading-relaxed">{t({ id:"Kami mengundang para investor untuk berkolaborasi dalam membangun infrastruktur cerdas, pariwisata berkelanjutan, dan ekonomi digital masa depan di Banjarmasin.", en:"We invite investors to collaborate in building smart infrastructure, sustainable tourism, and the future digital economy in Banjarmasin." })}</p>
                      <a href="/kontak" className="inline-block px-8 py-4 bg-warm-gold hover:bg-warm-gold-dark text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-warm-gold/20">{t({ id:"Hubungi Kami", en:"Contact Us" })}</a>
                    </div>
                    <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                      {[{ icon:Rocket, label:{ id:"Kemudahan Perizinan", en:"Easy Licensing" }, bg:"bg-white/10" }, { icon:Cpu, label:{ id:"Infrastruktur Tech", en:"Tech Infrastructure" }, bg:"bg-warm-gold/20" }, { icon:TrendingUp, label:{ id:"Pertumbuhan Ekonomi", en:"Economic Growth" }, bg:"bg-white/10" }, { icon:Globe, label:{ id:"Koneksi Global", en:"Global Connection" }, bg:"bg-white/5" }].map((item, i) => (
                        <StaggerItem key={i}>
                          <div className={`${item.bg} rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors flex flex-col gap-3`}>
                            <item.icon className="text-warm-gold" size={24}/>
                            <span className="font-bold text-white text-sm">{t(item.label)}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
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
