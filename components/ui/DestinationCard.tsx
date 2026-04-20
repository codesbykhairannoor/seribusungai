"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
        whileHover={{ y: -10 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-premium-deep transition-all duration-700 border border-slate-100 h-full p-4 group-hover:bg-slate-50/50"
        style={{ willChange: "transform" }}
      >
        {/* Image */}
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <Image
              src={destination.heroImage.src}
              alt={t(destination.heroImage.alt)}
              fill
              unoptimized
              className="object-cover transition-transform duration-1000"
            />
          </motion.div>
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`${categoryColors[destination.category] ?? "bg-river-blue"} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg block`}
            >
              {t(categoryLabels[destination.category] ?? { id: destination.category, en: destination.category })}
            </span>
          </div>

          {/* Arrow icon on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg">
              <ArrowUpRight size={16} className="text-river-blue" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-1">
          <div className="text-[10px] font-[900] uppercase tracking-[0.2em] text-warm-gold mb-3">
             {t(categoryLabels[destination.category] ?? { id: destination.category, en: destination.category })}
          </div>
          <h3 className="font-[900] text-2xl text-river-blue mb-3 group-hover:text-warm-gold transition-colors duration-300 tracking-tight leading-none">
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
