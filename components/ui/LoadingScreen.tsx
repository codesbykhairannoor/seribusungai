"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"logo" | "text" | "wave" | "done">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 500);
    const t2 = setTimeout(() => setPhase("wave"), 1400);
    const t3 = setTimeout(() => setPhase("done"), 2400);
    const t4 = setTimeout(() => onComplete(), 2800);
    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
      clearTimeout(t3); 
      clearTimeout(t4); 
    };
  }, [onComplete]);

  const letters = "BANJARMASIN".split("");

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#0D1E30", willChange: "opacity" }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-[#0D1E30]" />
          <motion.div
            className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_100%,#1B3A5C_0%,#0D1E30_70%)]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
          />

          {/* Animated water waves - Optimized paths */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-48 pointer-events-none z-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 left-0 right-0 h-full"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
                style={{ willChange: "transform", opacity: 0.05 + i * 0.05 }}
              >
                <svg
                  viewBox="0 0 1440 200"
                  preserveAspectRatio="none"
                  className="w-[200%] h-full fill-warm-gold"
                >
                  <path d="M0,100 C200,50 400,150 600,100 C800,50 1000,150 1200,100 C1400,50 1500,100 1600,100 L1600,200 L0,200 Z" />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-14 h-14 rounded-full bg-warm-gold flex items-center justify-center mb-10 shadow-3xl shadow-warm-gold/20"
            >
              <span className="text-white font-heading font-black text-xl">B</span>
            </motion.div>

            {/* BANJARMASIN letters */}
            <div className="flex items-center gap-[0.02em] mb-4">
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={phase !== "logo" ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-heading font-black text-white text-4xl md:text-6xl tracking-widest"
                  style={{ willChange: "transform, opacity" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={phase !== "logo" ? { opacity: 0.7 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="h-px w-6 bg-warm-gold/40" />
              <span className="text-warm-gold font-body text-[10px] uppercase tracking-[0.5em] font-bold">
                Kota Seribu Sungai
              </span>
              <div className="h-px w-6 bg-warm-gold/40" />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-40 h-[1px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-warm-gold"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.0, ease: "easeInOut" }}
                style={{ willChange: "width" }}
              />
            </div>
          </div>

          {/* Smooth Sweep transition out */}
          <AnimatePresence>
            {phase === "wave" && (
              <motion.div
                key="sweep"
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent, #0D1E30, transparent)", willChange: "transform" }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
