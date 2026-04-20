"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

interface VideoHeroProps {
  videoSrc: string;
  posterSrc?: string;
}

export default function VideoHero({ videoSrc, posterSrc }: VideoHeroProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, 50]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden flex items-center justify-center">

      {/* ── LAYER 1: Poster image — always visible as base ── */}
      {posterSrc && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${posterSrc})` }}
        />
      )}

      {/* ── LAYER 2: Video — fades in when loaded ── */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-1000"
        style={{ opacity: videoLoaded ? 1 : 0 }}
      />

      {/* ── LAYER 3: Dark overlay ── */}
      <div className="absolute inset-0 z-[2] bg-black/50" />

      {/* ── LAYER 4: Giant BANJARMASIN text with gradient ── */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none select-none"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(3rem, 12vw, 11rem)",
            letterSpacing: "0.06em",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            backgroundImage: "linear-gradient(180deg, #ffffff 0%, #E8D08A 50%, #ffffff 100%)",
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          BANJARMASIN
        </motion.h1>
      </motion.div>

      {/* ── LAYER 5: UI content — eyebrow, tagline, CTA ── */}
      <div className="absolute inset-0 z-[4] flex flex-col items-center justify-center pointer-events-none select-none px-4">

        {/* Eyebrow — sits above the text block */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-3 mb-[min(8vw,7rem)] md:mb-[min(10vw,9rem)]"
        >
          <div className="h-px w-10 bg-warm-gold/60" />
          <span className="text-warm-gold font-body font-semibold uppercase tracking-[0.4em] text-[10px] md:text-xs">
            {t({ id: "Kota Seribu Sungai", en: "City of a Thousand Rivers" })}
          </span>
          <div className="h-px w-10 bg-warm-gold/60" />
        </motion.div>

        {/* Tagline — sits below the text block */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-white/65 font-body text-sm md:text-base text-center max-w-lg mt-[min(8vw,7rem)] md:mt-[min(10vw,9rem)] leading-relaxed"
        >
          {t({
            id: "Rasakan harmoni kehidupan di atas air dan kekayaan budaya Banjar yang tak lekang oleh waktu.",
            en: "Experience the harmony of life on the water and the timeless richness of Banjar culture.",
          })}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex items-center gap-4 mt-8 pointer-events-auto"
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
      </div>

      {/* ── DECORATIVE: location badge top-left ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute top-24 left-6 md:left-10 z-[5]"
      >
        <div className="flex items-center gap-2.5 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
          <div className="w-1.5 h-1.5 rounded-full bg-warm-gold animate-pulse" />
          <span className="text-white/55 text-[9px] font-bold uppercase tracking-[0.3em]">
            {t({ id: "Kalimantan Selatan, Indonesia", en: "South Kalimantan, Indonesia" })}
          </span>
        </div>
      </motion.div>

      {/* ── DECORATIVE: year top-right ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="absolute top-24 right-6 md:right-10 z-[5] text-right"
      >
        <div className="text-white/12 font-heading font-black text-5xl md:text-7xl leading-none select-none">
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
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-white/25 text-[9px] uppercase tracking-[0.4em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-white/25"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade to white (smooth transition to next section) ── */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
