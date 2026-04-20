"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface Ripple {
  x: number; y: number;
  radius: number; opacity: number; speed: number;
}

export default function WaterRippleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useRef<{ ripples: Ripple[]; raf: number; interval: ReturnType<typeof setInterval> | null }>({
    ripples: [], raf: 0, interval: null,
  });

  const addRipple = useCallback((x: number, y: number) => {
    const s = state.current;
    if (s.ripples.length >= 6) s.ripples.shift(); // max 6
    s.ripples.push({ x, y, radius: 0, opacity: 0.45, speed: 0.7 + Math.random() * 0.5 });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Spawn every 2s (was 1.2s)
    state.current.interval = setInterval(() => {
      const c = canvasRef.current;
      if (c) addRipple(Math.random() * c.width, Math.random() * c.height);
    }, 2000);

    const draw = () => {
      const s = state.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      s.ripples = s.ripples.filter(r => r.opacity > 0.02);

      for (const r of s.ripples) {
        // Only 2 rings (was 3)
        for (let i = 0; i < 2; i++) {
          const rad = r.radius - i * 14;
          if (rad < 0) continue;
          ctx.beginPath();
          ctx.arc(r.x, r.y, rad, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245,197,24,${r.opacity * (1 - i * 0.4)})`;
          ctx.lineWidth = 1.2 - i * 0.3;
          ctx.stroke();
        }
        r.radius  += r.speed;
        r.opacity *= 0.975;
      }
      s.raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (state.current.interval) clearInterval(state.current.interval);
      cancelAnimationFrame(state.current.raf);
    };
  }, [addRipple]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
      style={{ mixBlendMode: "screen", opacity: 0.7 }}
    />
  );
}
