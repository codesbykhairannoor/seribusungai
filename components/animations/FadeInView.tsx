"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationConfig } from "@/contexts/AnimationContext";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export default function FadeInView({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  className,
  once = true,
}: FadeInViewProps) {
  const { reducedMotion } = useAnimationConfig();

  const getOffset = () => {
    if (reducedMotion || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":    return { x: 0,   y: 40 };
      case "down":  return { x: 0,   y: -40 };
      case "left":  return { x: 40,  y: 0 };
      case "right": return { x: -40, y: 0 };
      default:      return { x: 0,   y: 40 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
