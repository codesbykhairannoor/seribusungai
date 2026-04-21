"use client";

import { useEffect } from "react";
import { useScroll } from "framer-motion";

export default function TabBoatScroll() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const originalTitle = document.title.split(" | ")[0] || "Banjarmasin";
    const TRACK_LENGTH = 12;

    const unsubscribe = scrollYProgress.on("change", (v) => {
      const pos = Math.round(v * TRACK_LENGTH);
      const track = Array(TRACK_LENGTH + 1).fill("~");
      track[pos] = "🛶";
      document.title = `${track.join("")} | ${originalTitle}`;
    });

    return () => {
      unsubscribe();
      document.title = originalTitle;
    };
  }, [scrollYProgress]);

  return null;
}
