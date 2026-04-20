"use client";

import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";
import BoatScrollIndicator from "./BoatScrollIndicator";

export default function GlobalAnimations() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only show loading screen on first visit per session
    const shown = sessionStorage.getItem("bjm-loaded");
    if (shown) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem("bjm-loaded", "1");
  };

  if (!mounted) return null;

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <CustomCursor />
      <BoatScrollIndicator />
    </>
  );
}
