"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualText } from "@/content/types";

export interface CulinaryItem {
  id: string;
  name: BilingualText;
  description: BilingualText;
  imageSrc: string;
  location?: BilingualText;
  tag?: BilingualText;
  mapLink?: string;
}

interface CulinaryCardProps {
  item: CulinaryItem;
}

export default function CulinaryCard({ item }: CulinaryCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-river-blue/5 hover:shadow-xl transition-shadow duration-500 h-full flex flex-col group"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          src={item.imageSrc}
          alt={t(item.name)}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Name overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-heading font-bold text-lg text-white leading-tight drop-shadow-md">
            {t(item.name)}
          </h3>
          {item.tag && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-warm-gold-light">
              {t(item.tag)}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-river-blue/60 text-sm font-body leading-relaxed flex-1">
          {t(item.description)}
        </p>

        {item.location && (
          <div className="flex items-center justify-between border-t border-river-blue/5 pt-4 mt-4">
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-warm-gold">
              <MapPin size={11} />
              <span>{t(item.location)}</span>
            </div>
            {item.mapLink && (
              <a 
                href={item.mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-river-blue/40 hover:text-river-blue transition-colors flex items-center gap-1"
              >
                MAPS <ArrowUpRight size={10} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
