"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
  const [isLoaded, setIsLoaded] = useState(false);
  
  const y = useTransform(scrollY, [0, 600], [0, 600 * parallaxFactor]);

  const ambient = AMBIENT_CONFIG[pageKey] ?? AMBIENT_CONFIG.default;

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {variant === "video" ? (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover opacity-80"
            onLoadedData={() => setIsLoaded(true)}
          >
            <source src={backgroundSrc} type="video/mp4" />
          </video>
        ) : (
          <motion.div
            style={{ y: reducedMotion ? 0 : y, willChange: "transform" }}
            className="h-[120%] w-full -top-[10%] absolute"
          >
            <Image
              src={backgroundSrc}
              alt={backgroundAlt ? t(backgroundAlt) : ""}
              fill
              priority
              unoptimized
              className="h-full w-full object-cover transition-opacity duration-1000"
              style={{ opacity: isLoaded ? 1 : 0 }}
              onLoadingComplete={() => setIsLoaded(true)}
            />
          </motion.div>
        )}

        {/* Optimized Multi-layer overlay - CSS optimized */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: `
              linear-gradient(to bottom, rgba(10,30,48,${overlayOpacity}) 0%, transparent 40%, rgba(0,0,0,0.7) 100%),
              linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 50%)
            ` 
          }} 
        />
      </div>

      {/* Grain texture - Performance optimized */}
      <div className="absolute inset-0 z-[1] opacity-[0.02] pointer-events-none mix-blend-overlay" />

      {/* ── AMBIENT animations ── */}
      {isLoaded && !reducedMotion && (
        <>
          {ambient.ripple && <WaterRippleHero />}
          {ambient.particles && (
            <FloatingParticles
              count={ambient.particleCount ?? 12}
              colors={ambient.particleColors}
              className="z-[2]"
            />
          )}
        </>
      )}

      {/* Content Layer */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="flex flex-col items-center"
          style={{ willChange: "transform, opacity" }}
        >
          {eyebrow && (
            <motion.span
              custom={0}
              variants={textVariants}
              className="inline-block text-warm-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-6 px-4 py-2 rounded-full border border-warm-gold/20 bg-warm-gold/5 backdrop-blur-md"
            >
              {t(eyebrow)}
            </motion.span>
          )}

          <motion.h1
            custom={eyebrow ? 1 : 0}
            variants={textVariants}
            className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] max-w-5xl mx-auto tracking-tight drop-shadow-2xl"
          >
            {t(headline)}
          </motion.h1>

          {subheadline && (
            <motion.p
              custom={eyebrow ? 2 : 1}
              variants={textVariants}
              className="text-base md:text-xl font-body font-light mb-10 max-w-2xl mx-auto text-white/70 leading-relaxed"
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
                  "px-8 py-4 rounded-full font-bold text-[10px] md:text-sm uppercase tracking-widest transition-all duration-500 overflow-hidden relative group",
                  cta.variant === "primary"
                    ? "bg-warm-gold text-white shadow-xl shadow-warm-gold/10 hover:shadow-warm-gold/30 hover:scale-105"
                    : "bg-white/5 backdrop-blur-md text-white border border-white/20 hover:bg-white/10 hover:scale-105"
                )}
              >
                <span className="relative z-10">{t(cta.label)}</span>
              </a>
            </motion.div>
          )}

          {children}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-white/20"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
