"use client";

import React from "react";
import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

export default function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.2,
  className = "",
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        initial: {},
        animate: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.21, 1.11, 0.81, 0.99],
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
