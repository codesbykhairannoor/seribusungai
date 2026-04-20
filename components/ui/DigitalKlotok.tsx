"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DigitalKlotok() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative w-full max-w-2xl aspect-square flex items-center justify-center p-12"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
      
      {/* Floating Boat Frame */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [-1, 1, -1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6, 
          ease: "easeInOut" 
        }}
        className="relative w-full h-full drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]"
      >
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Hull Top */}
          <path
            d="M100 350 L700 350 L750 300 H150 L100 350Z"
            fill="#111827"
            stroke="#10b981"
            strokeWidth="2"
          />
          {/* Main Hull */}
          <path
            d="M100 350 L180 500 H620 L700 350 H100Z"
            fill="#0a0f1a"
            stroke="#10b981"
            strokeWidth="3"
          />
          
          {/* Digital Accents on Hull */}
          <motion.path
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 3 }}
            d="M140 380 H660 M160 420 H640 M180 460 H620"
            stroke="#34d399"
            strokeWidth="1"
            strokeDasharray="5 10"
          />

          {/* Cabin Base */}
          <rect
            x="250"
            y="240"
            width="300"
            height="110"
            fill="#0f172a"
            stroke="#10b981"
            strokeWidth="2"
            rx="8"
          />
          
          {/* Windows */}
          <rect x="280" y="270" width="50" height="50" rx="4" fill="#10b981" fillOpacity="0.1" stroke="#34d399" strokeWidth="1" />
          <rect x="350" y="270" width="100" height="50" rx="4" fill="#10b981" fillOpacity="0.1" stroke="#34d399" strokeWidth="1" />
          <rect x="470" y="270" width="50" height="50" rx="4" fill="#10b981" fillOpacity="0.1" stroke="#34d399" strokeWidth="1" />

          {/* Cabin Roof */}
          <path
            d="M230 240 H570 L550 200 H250 L230 240Z"
            fill="#111827"
            stroke="#f5c518"
            strokeWidth="3"
          />

          {/* Digital Rings / Nodes */}
          <motion.circle
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4 }}
            cx="400" cy="180" r="40"
            stroke="#f5c518"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <motion.circle
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 5 }}
            cx="400" cy="180" r="60"
            stroke="#10b981"
            strokeWidth="1"
            strokeDasharray="8 8"
          />
          
          {/* Data Lines */}
          <path d="M400 120 V140 M360 180 H340 M440 180 H460" stroke="#f5c518" strokeWidth="2" />
        </svg>

        {/* Particles / Bubbles underneath */}
        <div className="absolute bottom-1/4 left-1/4 right-1/4 h-12 flex justify-around pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -40],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2 + i * 0.5, 
                delay: i * 0.3,
                ease: "easeOut"
              }}
              className="w-1 h-1 rounded-full bg-emerald-400/40"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
