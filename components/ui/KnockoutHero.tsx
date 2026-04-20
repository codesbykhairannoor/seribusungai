"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cloud, Clock as ClockIcon, ArrowRight, Anchor } from "lucide-react";

export default function KnockoutHero() {
  const { t } = useLanguage();
  const [time, setTime] = useState("");
  const { scrollY } = useScroll();

  // Premium Parallax Depth
  const yBg = useTransform(scrollY, [0, 500], [0, 120]);
  const yText = useTransform(scrollY, [0, 500], [0, -80]);
  const yTower = useTransform(scrollY, [0, 500], [0, 40]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Makassar",
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[850px] w-full overflow-hidden flex items-center justify-center bg-[#050b14]">
      {/* ── Layer 0: High-Fidelity Atmospheric Backdrop ── */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 scale-105">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Sungai_Martapura_di_Pagi_Hari_%281%29.jpg"
          alt="Banjarmasin Landscape"
          fill
          className="object-cover opacity-40 saturate-[0.7] contrast-125 transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-[#050b14]/60" />
      </motion.div>

      {/* ── Layer 1: Elegant Signature Typography ── */}
      <motion.div 
        style={{ y: yText }} 
        className="absolute inset-x-0 z-10 flex items-center justify-center pointer-events-none select-none opacity-20"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-body font-black text-display-xl tracking-tight text-white/10"
          style={{ transform: "translateY(-10%)" }}
        >
          BANJARMASIN
        </motion.h1>
      </motion.div>

      {/* ── Layer 2: The Landmark centerpiece (YOUR Image) ── */}
      <motion.div 
        style={{ y: yTower }}
        className="absolute inset-0 z-20 flex items-center justify-center pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative h-[85%] w-full max-w-6xl flex justify-center items-center"
        >
          <Image
            src="/images/menara pandang.png"
            alt="Menara Pandang Banjarmasin"
            width={1200}
            height={1200}
            className="object-contain h-full w-auto drop-shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
            priority
          />
        </motion.div>
      </motion.div>

      {/* ── Layer 3: Strategic Widgets ── */}
      <div className="absolute inset-0 z-30 container mx-auto px-6 pointer-events-none">
        {/* Weather */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-[22%] left-[10%] pointer-events-auto"
        >
          <div className="bg-white/5 backdrop-blur-3xl border border-white/20 p-5 rounded-[2.5rem] shadow-2xl flex items-center gap-5">
            <div className="w-14 h-14 bg-warm-gold rounded-full flex items-center justify-center text-river-blue shadow-xl">
              <Cloud size={28} />
            </div>
            <div className="pr-4 text-white">
              <p className="text-[10px] uppercase font-black tracking-widest text-[#F5C518]/80 mb-1">CITY CLIMATE</p>
              <p className="text-white font-heading text-2xl tracking-tighter">32°C <span className="text-sm font-body font-normal opacity-50 ml-1 italic">Sunny</span></p>
            </div>
          </div>
        </motion.div>

        {/* Live Pulse */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute top-[40%] right-[10%] pointer-events-auto"
        >
          <div className="bg-[#050b14]/60 backdrop-blur-3xl border border-warm-gold/20 p-6 rounded-[2.5rem] shadow-2xl flex flex-col gap-5 border-l-warm-gold border-l-4">
            <div className="flex items-center gap-5 text-white">
              <div className="w-12 h-12 rounded-full border border-warm-gold/20 flex items-center justify-center bg-warm-gold/10 text-warm-gold">
                <Anchor size={24} />
              </div>
              <div>
                <p className="text-white font-heading text-2xl leading-none tracking-tight font-bold">2,481</p>
                <p className="text-white/40 text-[9px] uppercase font-black tracking-widest mt-2">Active Explorers</p>
              </div>
            </div>
            <div className="flex -space-x-3 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-[#050b14] bg-gray-800 overflow-hidden shadow-2xl">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=explorer${i}`} alt="user" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-4 border-[#050b14] bg-warm-gold flex items-center justify-center text-[10px] text-river-blue font-black">+8k</div>
            </div>
          </div>
        </motion.div>

        {/* WITA Clock */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
          className="absolute bottom-[10%] left-[10%] pointer-events-auto"
        >
          <div className="flex items-center gap-8 p-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl px-12 shadow-2xl">
            <ClockIcon size={28} className="text-warm-gold animate-pulse" />
            <div className="h-10 w-px bg-white/20" />
            <div className="text-white">
              <p className="text-4xl font-heading font-black tracking-widest leading-none mb-1">{time}</p>
              <p className="text-[10px] uppercase font-black tracking-[0.5em] text-white/30">Banjarmasin WITA</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Layer 4: Clear Call to Action ── */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-end pb-32 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 1.5, ease: "easeOut" }}
          className="text-center pointer-events-auto"
        >
          <h2 className="text-white font-heading text-5xl md:text-6xl mb-12 leading-[1.1] tracking-tight max-w-4xl px-6 font-black drop-shadow-2xl">
            Explore the <span className="text-[#F5C518] italic font-serif">Original</span> Soul of<br />South Kalimantan
          </h2>
          <div className="flex justify-center">
            <Link
              href="/wisata"
              className="group relative px-14 py-7 bg-white hover:bg-warm-gold text-river-blue-900 font-extrabold rounded-full flex items-center gap-6 transition-all duration-700 shadow-2xl group"
            >
              <span className="relative z-10 text-sm uppercase tracking-[0.3em] font-black">{t({ id: "Mulai Petualangan", en: "Start Adventure" })}</span>
              <ArrowRight size={28} className="relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
