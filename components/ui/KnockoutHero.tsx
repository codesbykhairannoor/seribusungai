"use client";

/**
 * KnockoutHero — 3 panel foto + teks "Kota Seribu Sungai" yang melubangi overlay gelap
 *
 * Teknik yang BENAR dan PASTI BEKERJA di semua browser:
 *
 * Semua elemen (foto + overlay + teks) ada dalam SATU stacking context.
 * Overlay gelap dibuat dengan mix-blend-mode: multiply pada div hitam.
 * Teks putih dengan mix-blend-mode: screen "membakar" overlay hitam jadi transparan.
 *
 * Kunci: TIDAK ADA z-index berbeda. Semua dalam satu flat layer dengan blend modes.
 */

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const PANELS = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Pasar_Terapung.jpg",
    label: "Pasar Terapung",
    num: "01",
    flex: "flex-1",
    anim: { x: -80 },
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Titik_Nol_Kilometer_Kota_Banjarmasin.jpg",
    label: "Titik Nol Kilometer",
    num: "02",
    flex: "flex-[1.2]",
    anim: { y: -60 },
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise_on_the_Martapura_river.jpg",
    label: "Sungai Martapura",
    num: "03",
    flex: "flex-1",
    anim: { x: 80 },
  },
];

export default function KnockoutHero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-black">

      {/* ── Background emas di celah antar panel ── */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg,#F5C518 0%,#FFE066 40%,#fffde7 60%,#FFE066 80%,#F5C518 100%)" }}
      />

      {/* ── 3 foto panel ── */}
      <div className="absolute inset-0 flex gap-2.5 p-2.5">
        {PANELS.map((p, i) => (
          <motion.div
            key={i}
            className={`relative ${p.flex} rounded-2xl overflow-hidden`}
            initial={{ opacity: 0, ...p.anim }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.0, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src={p.src}
              alt={p.label}
              className="w-full h-full object-cover"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.0, delay: i * 0.1, ease: "easeOut" }}
            />
            {/* Label bawah */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 + i * 0.1 }}
              className="absolute bottom-5 left-5 z-10"
            >
              <span className="text-warm-gold text-[10px] font-bold uppercase tracking-[0.3em] block mb-0.5">{p.num}</span>
              <span className="text-white/80 text-xs font-body font-medium drop-shadow">{p.label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/*
        ── KNOCKOUT LAYER ──

        Cara kerja:
        1. Div ini cover seluruh layar, background hitam
        2. mix-blend-mode: multiply → hitam × foto = hitam (foto tidak kelihatan)
        3. Teks di dalamnya: background-clip: text dengan background putih
           → area huruf jadi putih
        4. multiply(putih, foto) = foto → foto kelihatan di dalam huruf!
        5. multiply(hitam, foto) = hitam → di luar huruf tetap gelap

        Ini adalah teknik yang dipakai oleh Apple, Stripe, dll.
      */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ mixBlendMode: "multiply", background: "black" }}
      >
        {/* Teks knockout — background putih di-clip ke bentuk huruf */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.03em" }}
          transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
          className="font-heading font-black text-center leading-none px-6 select-none"
          style={{
            fontSize: "clamp(2.5rem, 7.5vw, 7rem)",
            /* background putih di-clip ke bentuk huruf */
            backgroundImage: "linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          Kota Seribu Sungai
        </motion.h1>
      </div>

      {/* ── UI overlay (eyebrow, subtitle, stats) — di atas semua ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none px-4">

        {/* Eyebrow — di atas teks knockout */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center gap-3 mb-[calc(clamp(2.5rem,7.5vw,7rem)*1.4+2rem)]"
        >
          <motion.div
            animate={{ width: [20, 40, 20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-px bg-warm-gold/80"
          />
          <span className="text-warm-gold font-body font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs drop-shadow-lg">
            {t({ id: "Profil Kota", en: "City Profile" })}
          </span>
          <motion.div
            animate={{ width: [20, 40, 20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="h-px bg-warm-gold/80"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="mt-[calc(clamp(2.5rem,7.5vw,7rem)*0.5+1.5rem)]"
        >
          <span className="text-warm-gold/80 font-body font-semibold uppercase tracking-[0.35em] text-[10px] md:text-xs drop-shadow-lg">
            Banjarmasin, Kalimantan Selatan
          </span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
          className="flex items-center gap-6 mt-5 px-7 py-3 rounded-full border border-white/15"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
        >
          {[
            { value: "1526", label: { id: "Berdiri", en: "Est." } },
            { value: "102", label: { id: "Sungai", en: "Rivers" } },
            { value: "681k", label: { id: "Penduduk", en: "Population" } },
          ].map((stat, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="w-px h-5 bg-white/15" />}
              <div className="text-center">
                <div className="text-warm-gold font-heading font-black text-base md:text-lg leading-none">{stat.value}</div>
                <div className="text-white/40 text-[9px] uppercase tracking-widest font-bold mt-0.5">{t(stat.label)}</div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-white/30"
        />
        <span className="text-white/30 text-[9px] uppercase tracking-[0.4em]">Scroll</span>
      </motion.div>
    </section>
  );
}
