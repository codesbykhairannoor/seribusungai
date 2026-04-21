"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualText } from "@/content/types";

interface HistoryTimelineItemProps {
  year: string;
  title: BilingualText;
  desc: BilingualText;
  image: string;
  index: number;
}

export default function HistoryTimelineItem({ year, title, desc, image, index }: HistoryTimelineItemProps) {
  const { t } = useLanguage();
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-32 relative ${isEven ? "" : "md:flex-row-reverse"}`}>
      {/* Connector Node */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 hidden md:flex flex-col items-center">
         <div className="w-12 h-12 rounded-full bg-white border-2 border-river-blue flex items-center justify-center z-10 shadow-lg">
            <div className="w-4 h-4 rounded-full bg-warm-gold animate-pulse" />
         </div>
      </div>

      {/* Content Area */}
      <div className={`flex-1 w-full ${isEven ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block py-2 px-6 bg-river-blue text-white font-heading font-black italic text-2xl mb-6 rounded-full shadow-lg">
            {year}
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-black text-river-blue mb-6 leading-tight">
            {t(title)}
          </h3>
          <p className="text-slate-500 text-lg leading-relaxed font-body">
            {t(desc)}
          </p>
        </motion.div>
      </div>

      {/* Image Area */}
      <div className="flex-1 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-premium-deep border-8 border-white group"
        >
          <Image 
            src={image} 
            alt={t(title)} 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-river-blue/10 group-hover:bg-transparent transition-colors" />
        </motion.div>
      </div>
    </div>
  );
}
