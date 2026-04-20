"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * 🌊 RiverWaves Component
 * Animated SVG paths that mimic river currents.
 * Updated: Increased density and added dual-color contrast.
 */
export const RiverWaves = () => (
  <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden text-river-blue/40">
    <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={i}
          d={`M0,${300 + i * 50} C${400 + i * 100},${250 + i * 40} ${800 - i * 50},${350 + i * 60} 1440,${300 + i * 50}`}
          stroke={i % 2 === 0 ? "currentColor" : "#D4AF37"}
          strokeWidth={1.5 - i * 0.2}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ 
            duration: 5 + i, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "easeInOut",
            delay: i * 0.5 
          }}
        />
      ))}
    </svg>
  </div>
);

/**
 * ✨ SasiranganParallax
 * Cultural motifs floating with scroll-based movement.
 * Updated: Increased count and added varying shapes.
 */
export const SasiranganParallax = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -800]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-100, -600]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      {/* Circle Motif */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-[5%] w-48 h-48 border-[3px] border-river-blue/40 rounded-full flex items-center justify-center">
         <div className="w-full h-px bg-warm-gold/40 rotate-45" />
         <div className="w-full h-px bg-warm-gold/40 -rotate-45" />
      </motion.div>
      
      {/* Diamond/Square Motif */}
      <motion.div style={{ y: y2 }} className="absolute top-[10%] right-[10%] w-72 h-72 border-2 border-warm-gold/40 rounded-[4rem] rotate-[15deg]" />
      
      {/* Floating Blobs */}
      <motion.div style={{ y: y3 }} className="absolute top-1/2 left-1/4 w-32 h-32 bg-river-blue/5 rounded-full blur-3xl" />
      <motion.div style={{ y: y1 }} className="absolute bottom-20 right-1/4 w-56 h-56 border border-river-blue/20 rounded-full" />
      
      {/* Small Accents */}
      <motion.div style={{ y: y2 }} className="absolute top-2/3 left-[15%] w-12 h-12 bg-warm-gold/20 rotate-45" />
      <motion.div style={{ y: y3 }} className="absolute top-[80%] right-[5%] w-24 h-24 border border-river-blue/40 rounded-xl rotate-12" />
    </div>
  );
};

/**
 * 🗺️ TopoLines
 * Subtle topographic contour lines for the digital city feel.
 * Updated: Sharper lines and more complex network.
 */
export const TopoLines = () => (
  <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden text-river-blue/30">
    <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Horizontal Network */}
      <path d="M-100,200 Q150,150 250,300 T500,250 T800,400 T1100,300" />
      <path d="M-100,400 Q250,350 450,500 T700,450 T900,600 T1200,500" stroke="#D4AF37" strokeOpacity="0.5" />
      <path d="M-100,600 Q350,550 550,700 T800,650 T1000,800 T1300,700" />
      
      {/* Vertical Network */}
      <path d="M200,-100 Q150,150 300,250 T250,500 T400,800 T300,1100" />
      <path d="M500,-100 Q450,250 600,450 T550,700 T700,900 T600,1200" stroke="#D4AF37" strokeOpacity="0.3" />
      <path d="M800,-100 Q750,350 900,550 T850,800 T1000,1000 T900,1300" />
    </svg>
  </div>
);

/**
 * 🎞️ EditorialNoise
 * Updated: More localized grain for better visibility but less overall distraction.
 */
export const EditorialNoise = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.08] mix-blend-soft-light">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

/**
 * 🧩 MotifBackground
 * versatile background pattern component for cultural sections.
 */
export const MotifBackground = ({ variant = "sasirangan", opacity = 0.05 }: { variant?: string, opacity?: number }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
    {variant === "sasirangan" && (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sasirangan-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
             <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
             <circle cx="50" cy="50" r="5" fill="currentColor" fillOpacity="0.3" />
             <path d="M0 50 H10 M90 50 H100 M50 0 V10 M50 90 V100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sasirangan-pattern)" />
      </svg>
    )}
  </div>
);
