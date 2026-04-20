"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnimationConfig } from "@/contexts/AnimationContext";
import { BilingualText } from "@/content/types";
import { ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import FloatingParticles from "./FloatingParticles";
import WaterRippleHero from "./WaterRippleHero";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Per-page ambient config — counts reduced for performance
const AMBIENT_CONFIG: Record<string, {
  particles: boolean;
  ripple: boolean;
  particleColors?: string[];
  particleCount?: number;
}> = {
  default:        { particles: true,  ripple: true,  particleColors: ["rgba(245,197,24,0.5)", "rgba(255,255,255,0.3)"], particleCount: 12 },
  sejarah:        { particles: true,  ripple: false, particleColors: ["rgba(245,197,24,0.3)", "rgba(255,255,255,0.15)"], particleCount: 10 },
  budaya:         { particles: true,  ripple: false, particleColors: ["rgba(245,197,24,0.55)", "rgba(196,113,58,0.35)"], particleCount: 12 },
  kuliner:        { particles: true,  ripple: false, particleColors: ["rgba(255,165,0,0.4)", "rgba(245,197,24,0.4)"], particleCount: 10 },
  wisata:         { particles: true,  ripple: true,  particleColors: ["rgba(245,197,24,0.5)", "rgba(255,255,255,0.3)"], particleCount: 12 },
  galeri:         { particles: true,  ripple: false, particleColors: ["rgba(255,255,255,0.4)", "rgba(245,197,24,0.3)"], particleCount: 10 },
  "visi-digital": { particles: true,  ripple: false, particleColors: ["rgba(100,200,255,0.3)", "rgba(245,197,24,0.3)"], particleCount: 12 },
  panduan:        { particles: true,  ripple: false, particleColors: ["rgba(245,197,24,0.4)", "rgba(255,255,255,0.25)"], particleCount: 10 },
  kontak:         { particles: true,  ripple: true,  particleColors: ["rgba(245,197,24,0.4)", "rgba(255,255,255,0.3)"], particleCount: 10 },
};

interface HeroSectionProps {
  variant?: "video" | "parallax" | "split" | "cinematic";
  backgroundSrc: string;
  backgroundAlt?: BilingualText;
  headline: BilingualText;
  subheadline?: BilingualText;
  cta?: {
    label: BilingualText;
    href: string;
    variant: "primary" | "secondary";
  };
  overlayOpacity?: number;
  parallaxFactor?: number;
  children?: React.ReactNode;
  eyebrow?: BilingualText;
  /** Pass page key to get page-specific ambient animations */
  pageKey?: string;
}

export default function HeroSection({
  variant = "parallax",
  backgroundSrc,
  backgroundAlt,
  headline,
  subheadline,
  cta,
  overlayOpacity = 0.45,
  parallaxFactor = 0.35,
  children,
  eyebrow,
  pageKey = "default",
}: HeroSectionProps) {
  const { t } = useLanguage();
  const { reducedMotion } = useAnimationConfig();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 600 * parallaxFactor]);

  const ambient = AMBIENT_CONFIG[pageKey] ?? AMBIENT_CONFIG.default;

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {variant === "video" ? (
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src={backgroundSrc} type="video/mp4" />
          </video>
        ) : (
          <motion.div
            style={{ y: reducedMotion ? 0 : y }}
            className="h-[130%] w-full -top-[15%] absolute"
          >
            <img
              src={backgroundSrc}
              alt={backgroundAlt ? t(backgroundAlt) : ""}
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}

        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-river-blue" style={{ opacity: overlayOpacity }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── AMBIENT: Water ripple ── */}
      {!reducedMotion && ambient.ripple && <WaterRippleHero />}

      {/* ── AMBIENT: Floating particles ── */}
      {!reducedMotion && ambient.particles && (
        <FloatingParticles
          count={ambient.particleCount ?? 20}
          colors={ambient.particleColors}
          className="z-[2]"
        />
      )}

      {/* Content Layer */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {eyebrow && (
            <motion.span
              custom={0}
              variants={textVariants}
              className="inline-block text-warm-gold font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 px-4 py-2 rounded-full border border-warm-gold/30 bg-warm-gold/10 backdrop-blur-sm"
            >
              {t(eyebrow)}
            </motion.span>
          )}

          <motion.h1
            custom={eyebrow ? 1 : 0}
            variants={textVariants}
            className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.05] max-w-5xl mx-auto tracking-tight"
          >
            {t(headline)}
          </motion.h1>

          {subheadline && (
            <motion.p
              custom={eyebrow ? 2 : 1}
              variants={textVariants}
              className="text-lg md:text-xl font-body font-light mb-10 max-w-2xl mx-auto text-white/80 leading-relaxed"
            >
              {t(subheadline)}
            </motion.p>
          )}

          {cta && (
            <motion.div
              custom={eyebrow ? 3 : 2}
              variants={textVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={cta.href}
                className={cn(
                  "px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 group",
                  cta.variant === "primary"
                    ? "bg-warm-gold text-white hover:bg-warm-gold-dark shadow-xl shadow-warm-gold/20 hover:shadow-warm-gold/40 hover:scale-105"
                    : "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 hover:scale-105"
                )}
              >
                {t(cta.label)}
              </a>
            </motion.div>
          )}

          {children}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-white/40"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}


