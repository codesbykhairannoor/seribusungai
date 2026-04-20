"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function BoatScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const boatX = useTransform(scrollYProgress, [0, 1], ["0px", "calc(100vw - 72px)"]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", v => setVisible(v > 0.02 && v < 0.98));
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed bottom-5 left-0 z-[100] pointer-events-none"
      style={{ x: boatX }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Simple static klotok — no per-frame motion children */}
      <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
        {/* Wake line */}
        <line x1="0" y1="30" x2="-40" y2="30"
          stroke="rgba(245,197,24,0.3)" strokeWidth="1"
          strokeDasharray="4 3"/>
        {/* Hull */}
        <path d="M3 22 C3 22 7 28 26 28 C45 28 49 22 49 22 L46 17 L6 17 Z"
          fill="#F5C518" stroke="#D4A800" strokeWidth="0.8"/>
        {/* Cabin */}
        <rect x="16" y="10" width="18" height="9" rx="2.5"
          fill="#1B3A5C" stroke="#F5C518" strokeWidth="0.8"/>
        {/* Windows */}
        <rect x="19" y="12" width="4" height="4" rx="1"
          fill="rgba(245,197,24,0.35)" stroke="#F5C518" strokeWidth="0.4"/>
        <rect x="25" y="12" width="4" height="4" rx="1"
          fill="rgba(245,197,24,0.35)" stroke="#F5C518" strokeWidth="0.4"/>
        {/* Chimney */}
        <rect x="31" y="5" width="4" height="7" rx="1.2"
          fill="#1B3A5C" stroke="#F5C518" strokeWidth="0.6"/>
        {/* Smoke — CSS animation, no JS */}
        <circle cx="33" cy="4" r="2" fill="rgba(255,255,255,0.15)"
          style={{ animation: "smokeUp 1.8s ease-out infinite" }}/>
        <circle cx="33" cy="4" r="3" fill="rgba(255,255,255,0.08)"
          style={{ animation: "smokeUp 1.8s ease-out infinite 0.6s" }}/>
        {/* Flag */}
        <line x1="6" y1="17" x2="6" y2="8" stroke="#F5C518" strokeWidth="1"/>
        <path d="M6 8 L13 11 L6 14 Z" fill="#F5C518"
          style={{ animation: "flagWave 1.4s ease-in-out infinite", transformOrigin: "6px 11px" }}/>
        {/* Water */}
        <ellipse cx="26" cy="29.5" rx="20" ry="2.5" fill="rgba(245,197,24,0.1)"/>
      </svg>

      <style>{`
        @keyframes smokeUp {
          0%   { transform: translateY(0) scale(1);   opacity: 0.3; }
          100% { transform: translateY(-10px) scale(2); opacity: 0; }
        }
        @keyframes flagWave {
          0%,100% { transform: scaleX(1); }
          50%      { transform: scaleX(0.65) skewY(8deg); }
        }
      `}</style>
    </motion.div>
  );
}
