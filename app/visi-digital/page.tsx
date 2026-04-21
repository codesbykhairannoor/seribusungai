"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Globe, 
  TrendingUp, 
  Zap, 
  Shield, 
  Rocket, 
  Wifi, 
  Database,
  Smartphone,
  CheckCircle2,
  Lock,
  ArrowRight,
  Layers,
  Network
} from "lucide-react";

export default function VisiDigital() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    { 
      id: "gov",
      title: { id: "Smart Governance", en: "Smart Governance" }, 
      desc: { id: "Pemerintahan yang transparan dan efisien melalui sistem Single Sign-On (SSO) di aplikasi Banjarmasin Pintar.", en: "Transparent and efficient government through the Single Sign-On (SSO) system in the Banjarmasin Pintar app." },
      icon: Shield,
      color: "bg-blue-600"
    },
    { 
      id: "brand",
      title: { id: "Smart Branding", en: "Smart Branding" }, 
      desc: { id: "Meningkatkan daya saing daerah dengan mempromosikan wisata sungai dan kearifan lokal secara digital.", en: "Increasing regional competitiveness by digitally promoting river tourism and local wisdom." },
      icon: Globe,
      color: "bg-teal-600"
    },
    { 
      id: "econ",
      title: { id: "Smart Economy", en: "Smart Economy" }, 
      desc: { id: "Dukungan penuh bagi 5.000+ UMKM untuk go-digital dan akses ke literasi keuangan non-tunai.", en: "Full support for 5.000+ MSMEs to go-digital and access to cashless financial literacy." },
      icon: TrendingUp,
      color: "bg-amber-600"
    },
    { 
      id: "env",
      title: { id: "Smart Environment", en: "Smart Environment" }, 
      desc: { id: "Sistem cerdas pemantauan sungai dan pengelolaan sampah yang terintegrasi dengan sensor IoT.", en: "Smart river monitoring and waste management systems integrated with IoT sensors." },
      icon: Zap,
      color: "bg-emerald-600"
    },
    { 
      id: "live",
      title: { id: "Smart Living", en: "Smart Living" }, 
      desc: { id: "Meningkatkan kualitas hidup warga lewat kemudahan akses layanan kesehatan dan transportasi cerdas.", en: "Improving citizen quality of life through easy access to health services and smart transportation." },
      icon: Smartphone,
      color: "bg-rose-600"
    },
    { 
      id: "soc",
      title: { id: "Smart Society", en: "Smart Society" }, 
      desc: { id: "Mewujudkan masyarakat yang komunikatif dan produktif dengan literasi digital yang tinggi.", en: "Creating a communicative and productive society with high digital literacy." },
      icon: Network,
      color: "bg-indigo-600"
    }
  ];

  const appFeatures = [
    { title: "One-Stop Service", desc: { id: "Akses semua layanan pemerintah dalam satu aplikasi.", en: "Access all government services in one single application." } },
    { title: "SSO Security", desc: { id: "Keamanan Single Sign-On untuk data warga yang terlindungi.", en: "Single Sign-On security for protected citizen data." } },
    { title: "Report & Track", desc: { id: "Laporkan masalah kota dan pantau progres perbaikannya.", en: "Report city issues and track its repair progress." } },
    { title: "Daily Assistance", desc: { id: "Info cuaca, transportasi, dan berita kota secara real-time.", en: "Real-time weather, transport, and city news information." } }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <NavigationBar />
      
      <PageTransitionWrapper>
        {/* ── DRIVER SMART CITY HERO ── */}
        <header className="relative pt-32 pb-40 lg:pt-48 lg:pb-60 overflow-hidden bg-river-blue text-white">
           <div className="absolute inset-0 bg-pattern-grid opacity-5 -z-10" />
           <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-400/5 blur-[150px] -z-20" />

           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                 <div className="lg:col-span-7">
                    <FadeInView direction="right">
                       <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-warm-gold font-bold text-[10px] tracking-widest uppercase mb-8">
                          <Rocket size={14} className="animate-bounce" />
                          (D)River Smart City 2026
                       </div>
                       <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.9] mb-8">
                          {t({ id: "Transformasi Digital", en: "Digital Transformation" })} <br />
                          <span className="text-cyan-400 italic">{t({ id: "di Tepian Sungai.", en: "at the River's Edge." })}</span>
                       </h1>
                       <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
                          {t({ 
                            id: "Menjadikan Banjarmasin sebagai pusat inovasi yang mengintegrasikan teknologi modern dengan kearifan lokal sungai yang abadi.", 
                            en: "Turning Banjarmasin into an innovation hub that integrates modern technology with the eternal local river wisdom." 
                          })}
                       </p>
                       <div className="flex flex-wrap gap-4">
                          <button className="px-8 py-4 bg-warm-gold text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
                             {t({ id: "Lihat Roadmap", en: "View Roadmap" })}
                          </button>
                          <button className="px-8 py-4 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-colors">
                             {t({ id: "Download Aplikasi", en: "Download App" })}
                          </button>
                       </div>
                    </FadeInView>
                 </div>

                 <div className="lg:col-span-5 relative">
                    <FadeInView direction="left" delay={0.4}>
                       <div className="relative">
                          <div className="absolute -inset-10 bg-cyan-400/10 blur-[60px] rounded-full" />
                          <div className="relative aspect-square md:aspect-[4/5] bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center backdrop-blur-3xl p-1">
                             <div className="w-full h-full rounded-[2.8rem] bg-gradient-to-br from-slate-900 to-river-blue overflow-hidden relative shadow-2xl">
                                {/* Mockup content */}
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/40 rounded-full" />
                                <div className="pt-24 px-8">
                                   <div className="text-warm-gold text-xs font-bold mb-2">Banjarmasin Pintar</div>
                                   <div className="h-2 w-20 bg-white/20 rounded-full mb-8" />
                                   <div className="grid grid-cols-2 gap-4">
                                      <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                                      <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                                      <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                                      <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                                   </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-river-blue to-transparent pointer-events-none" />
                             </div>
                          </div>
                       </div>
                    </FadeInView>
                 </div>
              </div>
           </div>
        </header>

        {/* ── 6 DIMENSIONS SECTION ── */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-20">
                 <FadeInView>
                    <span className="text-river-blue font-bold tracking-widest text-xs uppercase mb-4 block">Our Digital Pillars</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-river-blue">{t({ id: "6 Dimensi Smart City", en: "6 Dimensions of Smart City" })}</h2>
                 </FadeInView>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {pillars.map((p, i) => (
                    <FadeInView key={p.id} delay={i * 0.1}>
                       <div className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-premium-soft border border-transparent hover:border-slate-100 transition-all duration-500 h-full group">
                          <div className={`w-14 h-14 rounded-2xl ${p.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                             <p.icon size={28} />
                          </div>
                          <h3 className="text-2xl font-bold text-river-blue mb-4">{t(p.title)}</h3>
                          <p className="text-slate-500 leading-relaxed">
                             {t(p.desc)}
                          </p>
                       </div>
                    </FadeInView>
                 ))}
              </div>
           </div>
        </section>

        {/* ── DETAIL APLIKASI: BANJARMASIN PINTAR ── */}
        <SectionWrapper className="bg-river-blue py-32 text-white overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 relative">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <FadeInView direction="right">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                       Satu Aplikasi <br />
                       <span className="text-warm-gold">Untuk Kota Sejuta Harapan.</span>
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-12">
                       {t({
                         id: "Aplikasi 'Banjarmasin Pintar' adalah pintu digital bagi setiap warga. Nikmati kemudahan layanan publik dalam genggaman handphone Anda, kapan saja dan di mana saja.",
                         en: "'Banjarmasin Pintar' is the digital gateway for every citizen. Enjoy the convenience of public services in your pocket, anytime and anywhere."
                       })}
                    </p>
                    <div className="space-y-6">
                       {appFeatures.map((f, i) => (
                          <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                             <CheckCircle2 className="text-cyan-400 shrink-0" />
                             <div>
                                <h4 className="font-bold text-white mb-1">{f.title}</h4>
                                <p className="text-sm text-white/50">{t(f.desc)}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </FadeInView>

                 <FadeInView direction="left" className="relative">
                    <div className="relative aspect-square max-w-md mx-auto">
                       <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-river-blue rounded-[3rem] border border-white/10 flex items-center justify-center p-12 overflow-hidden group">
                          <motion.div 
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-10 border-2 border-dashed border-cyan-400/30 rounded-full"
                          />
                          <Smartphone size={160} className="text-white drop-shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
                          
                          <div className="absolute bottom-8 left-0 right-0 text-center">
                             <div className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Single Sign-On Security</div>
                          </div>
                       </div>
                       
                       <div className="absolute -top-6 -right-6 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl animate-pulse">
                          <Shield size={32} className="text-warm-gold" />
                       </div>
                    </div>
                 </FadeInView>
              </div>
           </div>
        </SectionWrapper>

        {/* ── ROADMAP 2024-2026 ── */}
        <section className="py-24 bg-white relative overflow-hidden">
           <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-20">
                 <FadeInView>
                    <h2 className="text-3xl md:text-5xl font-bold text-river-blue mb-4">{t({ id: "Roadmap Digital", en: "Digital Roadmap" })}</h2>
                    <p className="text-slate-500">{t({ id: "Langkah pasti menuju ekosistem digital yang matang.", en: "Definite steps toward a mature digital ecosystem." })}</p>
                 </FadeInView>
              </div>

              <div className="relative space-y-12">
                 <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 -z-10" />
                 
                 {[
                   { year: "2024", task: { id: "Digital Literacy Surge", en: "Digital Literacy Surge" }, detail: { id: "Peningkatan 200% literasi digital untuk UMKM dan masyarakat luas.", en: "200% surge in digital literacy for MSMEs and the general public." } },
                   { year: "2025", task: { id: "AI Powered Services", en: "AI Powered Services" }, detail: { id: "Implementasi chatbot AI dan analisis data untuk layanan darurat.", en: "Implementation of AI chatbots and data analysis for emergency services." } },
                   { year: "2026", task: { id: "Total (D)River Smart City", en: "Total (D)River Smart City" }, detail: { id: "Integrasi penuh IoT pada sensor kualitas air dan navigasi sungai.", en: "Full IoT integration on water quality sensors and river navigation." } }
                 ].map((item, i) => (
                    <FadeInView key={item.year} delay={i * 0.1}>
                       <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                          <div className="md:flex-1 w-full text-left md:text-right px-6">
                             <div className={`md:inline-block hidden ${i % 2 !== 0 ? "text-left" : "text-right"}`}>
                                <h3 className="text-3xl font-bold text-river-blue mb-2">{item.year}</h3>
                                <p className="text-slate-500">{t(item.task)}</p>
                             </div>
                          </div>
                          <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-river-blue flex items-center justify-center shrink-0 shadow-lg">
                             <div className="w-4 h-4 rounded-full bg-river-blue animate-ping" />
                          </div>
                          <div className="flex-1 px-8 md:px-0">
                             <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-river-blue/20 transition-all group">
                                <div className="text-xl font-bold text-river-blue mb-2 md:hidden">{item.year}</div>
                                <h4 className="text-river-blue font-bold text-lg mb-2 group-hover:text-cyan-600 transition-colors">{t(item.task)}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{t(item.detail)}</p>
                             </div>
                          </div>
                       </div>
                    </FadeInView>
                 ))}
              </div>
           </div>
        </section>

        {/* ── SECURITY & TRUST ── */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6">
              <FadeInView className="flex flex-col md:flex-row items-center gap-12 justify-center">
                 <div className="flex items-center gap-4 text-river-blue/40">
                    <Shield size={40} />
                    <div>
                       <div className="font-bold uppercase tracking-widest text-[10px]">Data Protection</div>
                       <div className="text-xs">AES-256 Encryption</div>
                    </div>
                 </div>
                 <div className="h-px w-20 bg-slate-200 hidden md:block" />
                 <div className="flex items-center gap-4 text-river-blue/40">
                    <Lock size={40} />
                    <div>
                       <div className="font-bold uppercase tracking-widest text-[10px]">Security</div>
                       <div className="text-xs">2FA Authenticated</div>
                    </div>
                 </div>
                 <div className="h-px w-20 bg-slate-200 hidden md:block" />
                 <div className="flex items-center gap-4 text-river-blue/40">
                    <Database size={40} />
                    <div>
                       <div className="font-bold uppercase tracking-widest text-[10px]">Reliability</div>
                       <div className="text-xs">99.9% Cloud Uptime</div>
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
