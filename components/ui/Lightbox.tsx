"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualImage } from "@/content/types";

interface LightboxProps {
  images: BilingualImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const { t } = useLanguage();

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
        >
          {/* Controls */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-white p-2 z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white p-4 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white p-4 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image */}
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <motion.img
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[currentIndex].src}
              alt={t(images[currentIndex].alt)}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl"
            />
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-8 text-center"
            >
              <p className="text-white text-lg font-heading font-medium">
                {t(images[currentIndex].alt)}
              </p>
              <p className="text-white/40 text-sm mt-2 font-body uppercase tracking-widest">
                {currentIndex + 1} / {images.length}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
