"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"logo" | "text" | "wave" | "done">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 600);
    const t2 = setTimeout(() => setPhase("wave"), 1600);
    const t3 = setTimeout(() => setPhase("done"), 2600);
    const t4 = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  const letters = "BANJARMASIN".split("");

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#0D1E30" }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse at 50% 100%, #1B3A5C 0%, #0D1E30 60%)",
                "radial-gradient(ellipse at 50% 80%, #1B3A5C 0%, #0D1E30 60%)",
                "radial-gradient(ellipse at 50% 100%, #1B3A5C 0%, #0D1E30 60%)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated water waves at bottom */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-48 pointer-events-none">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 left-0 right-0"
                style={{ height: `${80 + i * 20}px` }}
                animate={{ x: ["-100%", "0%"] }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
              >
                <svg
                  viewBox="0 0 1440 80"
                  preserveAspectRatio="none"
                  className="w-[200%] h-full"
                  style={{ opacity: 0.08 + i * 0.04 }}
                >
                  <path
                    d={i === 0
                      ? "M0,40 C180,10 360,70 540,40 C720,10 900,70 1080,40 C1260,10 1440,70 1440,40 L1440,80 L0,80 Z"
                      : i === 1
                      ? "M0,50 C200,20 400,80 600,50 C800,20 1000,80 1200,50 C1400,20 1440,60 1440,50 L1440,80 L0,80 Z"
                      : "M0,35 C150,5 300,65 450,35 C600,5 750,65 900,35 C1050,5 1200,65 1350,35 C1440,20 1440,50 1440,35 L1440,80 L0,80 Z"
                    }
                    fill="#F5C518"
                  />
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
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 rounded-full bg-warm-gold flex items-center justify-center mb-8 shadow-2xl shadow-warm-gold/30"
            >
              <span className="text-white font-heading font-black text-2xl">B</span>
            </motion.div>

            {/* BANJARMASIN letters */}
            <div className="flex items-center gap-[0.04em] overflow-hidden mb-4">
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={phase === "text" || phase === "wave"
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-heading font-black text-white"
                  style={{ fontSize: "clamp(2rem, 8vw, 5rem)", letterSpacing: "0.08em" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={phase === "text" || phase === "wave" ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-8 bg-warm-gold/60" />
              <span className="text-warm-gold/80 font-body text-xs uppercase tracking-[0.4em] font-semibold">
                Kota Seribu Sungai
              </span>
              <div className="h-px w-8 bg-warm-gold/60" />
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-10 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-warm-gold rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, delay: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* Wave sweep exit */}
          <AnimatePresence>
            {phase === "wave" && (
              <motion.div
                key="sweep"
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                className="absolute inset-0 z-20"
                style={{ background: "linear-gradient(to bottom, #0D1E30, #1B3A5C)" }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
