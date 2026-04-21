"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function TopBoatProgress() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth out the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setIsVisible(v > 0.01 && v < 0.99);
    });
  }, [scrollYProgress]);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[4px] bg-river-blue/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* ── THE WATER TRAIL (Blue) ── */}
      <motion.div 
        className="absolute top-0 left-0 h-full bg-river-blue origin-left shadow-[0_0_10px_rgba(27,58,92,0.3)]"
        style={{ 
          scaleX,
          // Subtle wave effect using a filter
          filter: "contrast(1.1) brightness(1.1)"
        }}
      />

      {/* ── THE GOLDEN PATH (Gold) ── */}
      <motion.div 
        className="absolute top-[1px] left-0 h-[2px] bg-warm-gold/60 origin-left"
        style={{ scaleX }}
      />

      {/* ── THE SAILING BOAT (Klotok) ── */}
      <motion.div
        className="absolute top-0"
        style={{ 
           left: useTransform(scaleX, (v) => `${v * 100}%`),
           x: "-80%", // Shift back a bit to sit "on" the line
           y: "-12px" // Float slightly above the bar
        }}
      >
        <div className="relative">
          {/* Wake Effect (behind the boat) */}
          <motion.div 
            className="absolute right-full top-1/2 -translate-y-1/2 w-16 h-[2px] bg-gradient-to-l from-river-blue/80 to-transparent"
            style={{ 
              originX: 1,
              scaleX: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          <svg width="28" height="28" viewBox="0 0 52 36" fill="none" className="drop-shadow-md">
            {/* Wake lines in the water */}
            <motion.path 
              d="M0 30 Q 15 25 30 30" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.5"
              animate={{ opacity: [0, 1, 0], x: [-5, 5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />

            {/* Hull */}
            <path d="M3 22 C3 22 7 28 26 28 C45 28 49 22 49 22 L46 17 L6 17 Z"
              fill="#F5C518" stroke="#D4A800" strokeWidth="0.8"/>
            {/* Cabin */}
            <rect x="16" y="10" width="18" height="9" rx="2.5"
              fill="#1B3A5C" stroke="#F5C518" strokeWidth="0.8"/>
            {/* Windows */}
            <rect x="19" y="12" width="4" height="4" rx="1"
              fill="rgba(245,197,24,0.35)" stroke="#F5C518" strokeWidth="0.4"/>
            {/* Chimney */}
            <rect x="31" y="5" width="4" height="7" rx="1.2"
              fill="#1B3A5C" stroke="#F5C518" strokeWidth="0.6"/>
            {/* Smoke */}
            <motion.circle 
              cx="33" cy="4" r="2" fill="rgba(255,255,255,0.6)"
              animate={{ y: [-2, -10], scale: [1, 2], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
