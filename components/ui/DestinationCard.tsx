"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { DestinationSummary } from "@/content/types";

const categoryColors: Record<string, string> = {
  alam:    "bg-emerald-500",
  budaya:  "bg-warm-gold",
  religi:  "bg-earth-terracotta",
  kuliner: "bg-orange-500",
};

const categoryLabels: Record<string, { id: string; en: string }> = {
  alam:    { id: "Alam",    en: "Nature" },
  budaya:  { id: "Budaya",  en: "Culture" },
  religi:  { id: "Religi",  en: "Religious" },
  kuliner: { id: "Kuliner", en: "Culinary" },
};

interface DestinationCardProps {
  destination: DestinationSummary;
  variant?: "grid" | "featured";
}

export default function DestinationCard({
  destination,
  variant = "grid",
}: DestinationCardProps) {
  const { t } = useLanguage();

  return (
    <Link href={`/wisata/${destination.slug}`} className="block h-full group">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 border border-river-blue/5 h-full"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            src={destination.heroImage.src}
            alt={t(destination.heroImage.alt)}
            className="h-full w-full object-cover"
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`${categoryColors[destination.category] ?? "bg-river-blue"} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg`}
            >
              {t(categoryLabels[destination.category] ?? { id: destination.category, en: destination.category })}
            </span>
          </div>

          {/* Arrow icon on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg">
              <ArrowUpRight size={16} className="text-river-blue" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-heading font-bold text-xl text-river-blue mb-2 group-hover:text-warm-gold transition-colors duration-300 leading-tight">
            {t(destination.name)}
          </h3>
          <p className="text-river-blue/55 text-sm line-clamp-2 mb-5 font-body leading-relaxed flex-1">
            {t(destination.shortDescription)}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-river-blue/5">
            <div className="flex items-center gap-2 text-xs text-river-blue/45">
              <Clock size={13} className="text-warm-gold" />
              <span>{t(destination.operatingHours)}</span>
            </div>
            <span className="text-xs font-bold text-warm-gold">
              {t(destination.ticketPrice)}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
