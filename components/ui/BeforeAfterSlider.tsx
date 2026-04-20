"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
}

export const BeforeAfterSlider = ({ beforeImg, afterImg, beforeLabel, afterLabel }: BeforeAfterSliderProps) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ("touches" in e) ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    if (position >= 0 && position <= 100) {
      setSliderPos(position);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[3.5rem] overflow-hidden cursor-ew-resize select-none border-8 border-white shadow-2xl group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image src={afterImg} alt={afterLabel} fill unoptimized={true} className="object-cover" />
        <div className="absolute top-8 right-8 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest z-20">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image src={beforeImg} alt={beforeLabel} fill unoptimized={true} className="object-cover grayscale" />
        <div className="absolute top-8 left-8 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-river-blue text-[10px] font-black uppercase tracking-widest z-20 shadow-lg">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center gap-1 group-hover:scale-110 transition-transform">
           <div className="w-1 h-3 bg-river-blue/20 rounded-full" />
           <div className="w-1 h-5 bg-river-blue rounded-full" />
           <div className="w-1 h-3 bg-river-blue/20 rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 px-6 py-3 bg-river-blue text-white rounded-2xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform pointer-events-none shadow-2xl">
        Drag to see the transformation
      </div>
    </div>
  );
};
