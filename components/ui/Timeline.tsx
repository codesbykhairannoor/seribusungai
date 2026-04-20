"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualText } from "@/content/types";
import { ArrowRight, History, Map, Users, Zap, Landmark } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: BilingualText;
  description: BilingualText;
  imageSrc?: string;
  imageAlt?: BilingualText;
  icon?: any;
}

interface HistoryHubProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: HistoryHubProps) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeEvent = events[activeIndex];

  return (
    <div className="w-full">
      {/* ── Year Navigation (Tab Bar) ── */}
      <div className="flex overflow-x-auto pb-4 mb-20 scrollbar-hide gap-12 md:gap-20 border-b border-river-blue/5">
        {events.map((event, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`flex flex-col items-start gap-2 min-w-max pb-6 transition-all relative ${
              activeIndex === idx ? "opacity-100" : "opacity-30 hover:opacity-100"
            }`}
          >
            <span className={`text-xl md:text-2xl font-heading font-black tracking-tighter ${
              activeIndex === idx ? "text-river-blue" : "text-river-blue/40"
            }`}>
              {event.year}
            </span>
            {activeIndex === idx && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-warm-gold rounded-full" 
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Content Area ── */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
          >
            {/* Left: Illustration/Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl group">
                <Image
                  src={activeEvent.imageSrc || "https://commons.wikimedia.org/w/thumb.php?f=Masjid_Jami_Banjarmasin.jpg&w=800"}
                  alt={t(activeEvent.title)}
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-river-blue/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10">
                   <div className="w-16 h-16 rounded-[2rem] bg-warm-gold text-white flex items-center justify-center shadow-2xl mb-4">
                      {activeEvent.icon ? <activeEvent.icon size={24} /> : <History size={24} />}
                   </div>
                   <span className="text-white/60 font-black uppercase tracking-[0.3em] text-[10px]">
                      Historical Snapshot
                   </span>
                </div>
              </div>
            </div>

            {/* Right: Narrative Content */}
            <div className="lg:col-span-7 py-8">
              <span className="text-warm-gold font-black uppercase tracking-[0.5em] text-[9px] mb-6 block">
                {activeEvent.year} Era
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-river-blue mb-8 leading-[1.1] tracking-tighter">
                {t(activeEvent.title)}
              </h2>
              <p className="text-river-blue/60 font-body text-sm leading-relaxed mb-10">
                {t(activeEvent.description)}
              </p>

              <div className="grid grid-cols-2 gap-8 text-river-blue">
                 <div className="p-8 rounded-[2.5rem] bg-river-blue/5 border border-river-blue/5">
                    <div className="font-heading font-black text-[10px] uppercase tracking-widest text-warm-gold mb-3">Key Figure</div>
                    <div className="font-heading font-black text-base">Sultan / Hero</div>
                 </div>
                 <div className="p-8 rounded-[2.5rem] bg-river-blue/5 border border-river-blue/5">
                    <div className="font-heading font-black text-[10px] uppercase tracking-widest text-warm-gold mb-3">Location</div>
                    <div className="font-heading font-black text-base">Delta River</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
