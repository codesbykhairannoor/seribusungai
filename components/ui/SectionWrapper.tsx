"use client";

import React from "react";
import FadeInView from "@/components/animations/FadeInView";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionWrapperProps {
  id?: string;
  className?: string;
  animationVariant?: "fade" | "slide-up" | "none";
  background?: "white" | "light" | "dark" | "gradient" | "river";
  children: React.ReactNode;
  containerSize?: "default" | "small" | "large" | "full";
  animationDelay?: number;
  noPadding?: boolean;
}

export default function SectionWrapper({
  id,
  className,
  animationVariant = "slide-up",
  background = "white",
  children,
  containerSize = "default",
  animationDelay = 0,
  noPadding = false,
}: SectionWrapperProps) {
  const getBgClass = () => {
    switch (background) {
      case "white":    return "bg-white";
      case "light":    return "bg-clean-white";
      case "dark":     return "bg-river-blue text-white";
      case "river":    return "bg-river-blue-50";
      case "gradient": return "bg-gradient-to-b from-white to-river-blue-50";
      default:         return "bg-white";
    }
  };

  const getContainerClass = () => {
    switch (containerSize) {
      case "small":  return "max-w-4xl";
      case "large":  return "max-w-7xl";
      case "full":   return "max-w-full px-0";
      default:       return "max-w-6xl";
    }
  };

  const content = (
    <div
      className={cn(
        "mx-auto px-4 md:px-6",
        containerSize !== "full" && getContainerClass()
      )}
    >
      {children}
    </div>
  );

  return (
    <section
      id={id}
      className={cn(
        !noPadding && "py-20 md:py-28",
        "overflow-hidden",
        getBgClass(),
        className
      )}
    >
      {animationVariant === "none" ? (
        content
      ) : (
        <FadeInView delay={animationDelay}>{content}</FadeInView>
      )}
    </section>
  );
}
