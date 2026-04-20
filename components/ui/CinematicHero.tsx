"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function CinematicHero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* ── Layer 0: Full-Bleed Atmospheric Background ── */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Sungai_Martapura_di_Pagi_Hari_%281%29.jpg"
          alt="Atmospheric Martapura River"
          fill
          className="object-cover saturate-[0.8] contrast-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </motion.div>

      {/* ── Layer 1: Centered Immersive Typography ── */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <span className="text-warm-gold font-body font-black uppercase tracking-[0.5em] text-xs md:text-sm mb-6 block">
            Welcome to the Heart of Borneo
          </span>
          <h1 className="text-white font-heading text-6xl md:text-8xl lg:text-[7rem] leading-[1] font-black tracking-tighter mb-8 max-w-5xl">
            Banjarmasin <br />
            <span className="text-white/40 italic font-serif font-light">The Soul of Water</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed mb-12">
            Experience a millennium of river civilization where every ripple tells a story of harmony, heritage, and the spirit of the Banjar people.
          </p>
        </motion.div>

        {/* Scroll CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-px h-24 bg-gradient-to-b from-warm-gold to-transparent" />
          <span className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-black">Begin the Journey</span>
        </motion.div>
      </div>

      {/* Side HUD Details */}
      <div className="absolute bottom-12 right-12 z-20 hidden md:block">
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-white/40 text-[10px] uppercase font-black tracking-widest leading-none mb-1">Location</p>
            <p className="text-white font-body font-bold text-sm">Martapura Riverside</p>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-right">
            <p className="text-white/40 text-[10px] uppercase font-black tracking-widest leading-none mb-1">Status</p>
            <p className="text-white font-body font-bold text-sm">Sunrise 05:42 WITA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
