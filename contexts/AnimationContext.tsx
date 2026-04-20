"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

interface AnimationContextType {
  reducedMotion: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <AnimationContext.Provider value={{ reducedMotion: !!reducedMotion }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationConfig() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimationConfig must be used within an AnimationProvider");
  }
  return context;
}
