"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxBackgroundTextProps {
  text: string;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
}

export default function ParallaxBackgroundText({ 
  text, 
  className = "", 
  speed = 100, 
  direction = "left" 
}: ParallaxBackgroundTextProps) {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Use useGSAP for safe, automatic cleanup in Next.js/React environments
  useGSAP(() => {
    if (!container.current || !textRef.current) return;

    const movement = direction === "left" ? -speed : speed;

    gsap.to(textRef.current, {
      x: movement,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, { scope: container, dependencies: [speed, direction] });

  return (
    <div ref={container} className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <div 
        ref={textRef} 
        className="whitespace-nowrap font-heading font-black text-[20vw] leading-none text-river-blue opacity-[0.03] uppercase tracking-tighter"
      >
        {text} {text} {text}
      </div>
    </div>
  );
}
