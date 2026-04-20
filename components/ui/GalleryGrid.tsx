"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualImage } from "@/content/types";
import Lightbox from "./Lightbox";

interface GalleryGridProps {
  images: BilingualImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {images.map((image, i) => {
          // First and last items span 2 columns for visual interest
          const isWide = i === 0 || (images.length > 4 && i === images.length - 1);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={isWide ? "col-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500 ${
                  isWide ? "aspect-video" : "aspect-square"
                }`}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={image.src}
                  alt={t(image.alt)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-river-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30"
                  >
                    <Maximize2 size={20} />
                  </motion.div>
                </div>

                {/* Alt text caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-white text-xs font-medium">{t(image.alt)}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Lightbox
        images={images}
        initialIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
