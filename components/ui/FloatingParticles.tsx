"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; size: number;
  speedX: number; speedY: number;
  opacity: number; dir: 1 | -1; color: string;
}

interface FloatingParticlesProps {
  count?: number;
  colors?: string[];
  className?: string;
}

export default function FloatingParticles({
  count = 15, // reduced default
  colors = ["rgba(245,197,24,0.55)", "rgba(255,255,255,0.35)"],
  className = "",
}: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef  = useRef<{ particles: Particle[]; raf: number }>({ particles: [], raf: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const make = (w: number, h: number): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 0.8 + Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -0.15 - Math.random() * 0.3,
      opacity: Math.random() * 0.8,
      dir: Math.random() > 0.5 ? 1 : -1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stateRef.current.particles = Array.from({ length: count }, () => make(canvas.width, canvas.height));
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Throttle: draw every other frame
    let frame = 0;
    const draw = () => {
      stateRef.current.raf = requestAnimationFrame(draw);
      if (++frame % 2 !== 0) return; // skip odd frames → ~30fps

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of stateRef.current.particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${Math.max(0, Math.min(1, p.opacity))})`) ;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += 0.004 * p.dir;
        if (p.opacity > 0.85 || p.opacity < 0.05) p.dir *= -1;
        if (p.y < -8)  p.y = canvas.height + 8;
        if (p.x < -8)  p.x = canvas.width  + 8;
        if (p.x > canvas.width  + 8) p.x = -8;
      }
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(stateRef.current.raf);
    };
  }, [count, colors]);

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />;
}
