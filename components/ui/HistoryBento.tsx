"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualText } from "@/content/types";

interface BentoCardProps {
  title: BilingualText;
  description?: BilingualText;
  image?: string;
  className?: string;
  badge?: BilingualText;
  icon?: React.ReactNode;
  delay?: number;
}

export const BentoCard = ({ title, description, image, className, badge, icon, delay = 0 }: BentoCardProps) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-river-blue/5 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col ${className}`}
    >
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={t(title)}
            fill
            unoptimized={true}
            className="object-cover opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
      )}
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          {badge && (
            <span className="px-3 py-1 bg-river-blue/5 text-river-blue text-[9px] font-black uppercase tracking-widest rounded-full border border-river-blue/5">
              {t(badge)}
            </span>
          )}
          {icon && <div className="text-warm-gold opacity-40 group-hover:opacity-100 transition-opacity transform group-hover:rotate-12">{icon}</div>}
        </div>

        <h3 className="text-base md:text-lg font-heading font-black text-river-blue mb-3 leading-tight tracking-tighter">
          {t(title)}
        </h3>
        
        {description && (
          <p className="text-river-blue/50 font-body text-[12px] leading-relaxed mt-auto">
            {t(description)}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export const HistoryBento = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 ${className}`}>
      {children}
    </div>
  );
};
