"use client";

import React from "react";
import { motion } from "framer-motion";

interface MotifBackgroundProps {
  variant?: "sasirangan" | "digital-grid" | "river-waves";
  opacity?: number;
  className?: string;
}

export default function MotifBackground({
  variant = "sasirangan",
  opacity = 0.05,
  className = "",
}: MotifBackgroundProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {variant === "sasirangan" && (
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          opacity={opacity}
        >
          <defs>
            <pattern 
              id="sasirangan-pattern" 
              x="0" 
              y="0" 
              width="120" 
              height="120" 
              patternUnits="userSpaceOnUse"
            >
              {/* Kambang Raja Motif - Simplified Geometric Vector */}
              <g transform="translate(60, 60) scale(0.8)">
                <path 
                   d="M0 -30 L10 -10 L30 0 L10 10 L0 30 L-10 10 L-30 0 L-10 -10 Z" 
                   fill="var(--color-warm-gold)" 
                   fillOpacity="0.8"
                />
                <circle cx="0" cy="0" r="4" fill="var(--color-warm-gold)" />
                {/* Accent dots */}
                <circle cx="0" cy="-45" r="2" fill="var(--color-warm-gold)" opacity="0.4" />
                <circle cx="0" cy="45" r="2" fill="var(--color-warm-gold)" opacity="0.4" />
                <circle cx="-45" cy="0" r="2" fill="var(--color-warm-gold)" opacity="0.4" />
                <circle cx="45" cy="0" r="2" fill="var(--color-warm-gold)" opacity="0.4" />
              </g>
              
              {/* Secondary Motif (Iris Pudak stylized) */}
              <g transform="translate(0, 0) scale(0.4)" opacity="0.3">
                 <rect x="0" y="0" width="10" height="40" fill="var(--color-warm-gold)" transform="rotate(45)" />
                 <rect x="0" y="0" width="10" height="40" fill="var(--color-river-blue)" transform="rotate(-45)" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sasirangan-pattern)" />
        </svg>
      )}

      {variant === "digital-grid" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--color-river-blue) 1px, transparent 1px),
                linear-gradient(to bottom, var(--color-river-blue) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(circle at center, black, transparent)",
              opacity: opacity,
            }}
          />
          <motion.div
            animate={{
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--color-warm-gold)_0%,_transparent_50%)]"
            style={{ opacity: 0.05 }}
          />
        </>
      )}

      {variant === "river-waves" && (
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: opacity }}
        >
          <filter id="wave-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.05"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
          </filter>
          <motion.path
            animate={{
              d: [
                "M-100,200 Q200,100 500,200 T1100,200",
                "M-100,200 Q200,300 500,200 T1100,200",
                "M-100,200 Q200,100 500,200 T1100,200",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            d="M-100,200 Q200,150 500,200 T1100,200"
            stroke="var(--color-river-blue)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
}
