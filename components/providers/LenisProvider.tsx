"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LenisContext = createContext<Lenis | null>(null);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // 1. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: false, // Core: Let GSAP handle the RAF loop for perfect sync
    });

    // 3. Synchronize Lenis with ScrollTrigger
    // This tells ScrollTrigger to use Lenis's simplified scroll proxy
    lenisInstance.on('scroll', ScrollTrigger.update);

    // 4. Create custom GSAP Ticker for Lenis
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    // Optional: Reset lag smoothing for ultra-consistent frame timing
    gsap.ticker.lagSmoothing(0);

    setLenis(lenisInstance);

    // Cleanup
    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(() => { });
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  const context = useContext(LenisContext);
  return context;
}
