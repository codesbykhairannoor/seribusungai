"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import WaterRippleHero from "./WaterRippleHero";
import FloatingParticles from "./FloatingParticles";

interface ImageHeroProps {
  imageSrc: string;
  imageAlt?: string;
}

export default function ImageHero({ imageSrc, imageAlt = "" }: ImageHeroProps) {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Parallax: image moves slower than scroll
  const imageY = useTransform(scrollY, [0, 600], [0, 120]);
  const textY = useTransform(scrollY, [0, 600], [0, 50]);

  // Breathing animation for headline
  const [breathe, setBreathe] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setBreathe((b) => !b), 3000);
    return () => clearInterval(id);
  }, []);

  const words = ["Jelajahi", "Rasakan", "Temukan"];
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden flex items-center justify-center bg-river-blue-900">

      {/* ── PARALLAX IMAGE ── */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── OVERLAYS ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-river-blue-900/60 via-river-blue/30 to-river-blue-900/80" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-river-blue-900/30 via-transparent to-river-blue-900/30" />

      {/* ── WATER RIPPLE AMBIENT ── */}
      <WaterRippleHero />

      {/* ── FLOATING PARTICLES ── */}
      <FloatingParticles
        count={30}
        colors={["rgba(245,197,24,0.5)", "rgba(255,255,255,0.3)"]}
        className="z-[3]"
      />

      {/* ── MAIN CONTENT ── */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 z-[4] flex flex-col items-center justify-center pointer-events-none select-none px-4"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <motion.div
            animate={{ width: [32, 48, 32] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-px bg-warm-gold/60"
          />
          <span className="text-warm-gold/90 font-body font-semibold uppercase tracking-[0.4em] text-[10px] md:text-xs">
            {t({ id: "Kota Seribu Sungai", en: "City of a Thousand Rivers" })}
          </span>
          <motion.div
            animate={{ width: [32, 48, 32] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="h-px bg-warm-gold/60"
          />
        </motion.div>

        {/* Rotating word + fixed text */}
        <div className="text-center mb-4">
          {/* Rotating word */}
          <div className="overflow-hidden h-[1.2em] mb-1">
            <motion.div
              key={wordIdx}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="font-heading font-black text-warm-gold block"
                style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 1.1 }}
              >
                {words[wordIdx]}
              </span>
            </motion.div>
          </div>

          {/* Fixed headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h1
              animate={{ y: breathe ? -3 : 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="font-heading font-black text-white leading-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 1.05 }}
            >
              {t({ id: "Pesona Banjarmasin", en: "Banjarmasin" })}
            </motion.h1>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-20 h-px bg-warm-gold/50 mb-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-white/70 font-body text-sm md:text-base text-center max-w-lg leading-relaxed mb-8"
        >
          {t({
            id: "Rasakan harmoni kehidupan di atas air dan kekayaan budaya Banjar yang tak lekang oleh waktu.",
            en: "Experience the harmony of life on the water and the timeless richness of Banjar culture.",
          })}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center gap-4 pointer-events-auto"
        >
          <Link
            href="#tentang"
            className="px-7 py-3.5 bg-warm-gold hover:bg-warm-gold-dark text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all hover:scale-105 shadow-xl shadow-warm-gold/30"
          >
            {t({ id: "Mulai Perjalanan", en: "Begin Journey" })}
          </Link>
          <Link
            href="/wisata"
            className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all border border-white/25 hover:scale-105 backdrop-blur-sm"
          >
            {t({ id: "Destinasi", en: "Destinations" })}
          </Link>
        </motion.div>
      </motion.div>

      {/* ── LOCATION BADGE ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute top-24 left-6 md:left-10 z-[5]"
      >
        <div className="flex items-center gap-2.5 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-warm-gold"
          />
          <span className="text-white/60 text-[9px] font-bold uppercase tracking-[0.3em]">
            {t({ id: "Kalimantan Selatan, Indonesia", en: "South Kalimantan, Indonesia" })}
          </span>
        </div>
      </motion.div>

      {/* ── YEAR BADGE ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.9, duration: 0.6 }}
        className="absolute top-24 right-6 md:right-10 z-[5] text-right"
      >
        <div className="text-white/10 font-heading font-black text-5xl md:text-7xl leading-none select-none">
          1526
        </div>
        <div className="text-white/20 text-[9px] uppercase tracking-[0.35em] font-medium mt-1">
          {t({ id: "Berdiri", en: "Est." })}
        </div>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/25 text-[9px] uppercase tracking-[0.4em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-white/25"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* ── BOTTOM FADE ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
