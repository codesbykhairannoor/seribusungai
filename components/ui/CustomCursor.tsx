"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Ripple { id: number; x: number; y: number }

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isMobile, setIsMobile] = useState(true);
  const rippleId = useRef(0);

  // Both cursor and ring track mouse directly — ring just has a slight CSS transition
  const mouse = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const addRipple = useCallback((x: number, y: number) => {
    const id = rippleId.current++;
    setRipples(p => [...p.slice(-2), { id, x, y }]);
    setTimeout(() => setRipples(p => p.filter(r => r.id !== id)), 650);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Move boat cursor exactly at mouse position
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 14}px, ${e.clientY - 10}px)`;
      }
      // Ring follows with a tiny CSS transition (set on the element itself)
      if (ringRef.current) {
        const size = isHovering ? 44 : 32;
        ringRef.current.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button,[role='button'],input,textarea,select"))
        setIsHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button,[role='button'],input,textarea,select"))
        setIsHovering(false);
    };
    const onDown = (e: MouseEvent) => {
      setIsClicking(true);
      addRipple(e.clientX, e.clientY);
    };
    const onUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout",  onOut,  { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup",   onUp,   { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout",  onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
    };
  }, [isMobile, isHovering, addRipple]);

  if (isMobile) return null;

  const ringSize = isHovering ? 44 : 32;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Ring — same position as cursor, tiny CSS transition for smooth size change */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2"
        style={{
          width: ringSize,
          height: ringSize,
          borderColor: isHovering ? "rgba(245,197,24,0.9)" : "rgba(245,197,24,0.5)",
          transform: "translate(-200px, -200px)",
          transition: "width 0.15s ease, height 0.15s ease, border-color 0.15s ease",
          willChange: "transform",
        }}
      />

      {/* Klotok boat — exact mouse position */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: "translate(-200px, -200px)",
          willChange: "transform",
        }}
      >
        <svg
          width="28" height="20" viewBox="0 0 28 20" fill="none"
          style={{
            transform: `scale(${isClicking ? 0.82 : isHovering ? 1.25 : 1}) rotate(${isHovering ? -12 : 0}deg)`,
            transition: "transform 0.12s ease",
            transformOrigin: "14px 10px",
          }}
        >
          <path d="M2 13 C2 13 4 16 14 16 C24 16 26 13 26 13 L24 10 L4 10 Z"
            fill="#F5C518" stroke="#D4A800" strokeWidth="0.8"/>
          <rect x="9" y="6" width="10" height="5" rx="1.5"
            fill="#1B3A5C" stroke="#F5C518" strokeWidth="0.6"/>
          <rect x="17" y="3" width="2.5" height="4" rx="0.8"
            fill="#1B3A5C" stroke="#F5C518" strokeWidth="0.5"/>
          <ellipse cx="14" cy="17" rx="8" ry="1.5" fill="rgba(245,197,24,0.2)"/>
        </svg>
      </div>

      {/* Click ripples */}
      <AnimatePresence>
        {ripples.map(r => (
          <motion.div key={r.id}
            className="fixed pointer-events-none z-[9997]"
            style={{ left: r.x, top: r.y, translateX: "-50%", translateY: "-50%" }}
          >
            {[0, 1].map(i => (
              <motion.div key={i}
                className="absolute rounded-full border border-warm-gold/50"
                style={{ left: "50%", top: "50%", translateX: "-50%", translateY: "-50%" }}
                initial={{ width: 0, height: 0, opacity: 0.7 }}
                animate={{ width: 56 + i * 28, height: 56 + i * 28, opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
