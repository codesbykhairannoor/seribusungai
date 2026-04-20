"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualText } from "@/content/types";

interface TimelineEvent {
  year: string;
  title: BilingualText;
  description: BilingualText;
  imageSrc?: string;
  imageAlt?: BilingualText;
}

interface TimelineProps {
  events: TimelineEvent[];
}

function TimelineItem({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center gap-0">
      {/* Left side */}
      <div className="flex-1 w-full md:pr-12 md:text-right order-2 md:order-1 pb-8 md:pb-0">
        {isEven ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-3 md:ml-auto md:max-w-sm"
          >
            <span className="text-warm-gold font-heading text-5xl font-bold block">{event.year}</span>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-river-blue leading-tight">
              {t(event.title)}
            </h3>
            <p className="text-river-blue/60 font-body leading-relaxed text-sm md:text-base">
              {t(event.description)}
            </p>
          </motion.div>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* Center node */}
      <div className="relative z-10 shrink-0 order-1 md:order-2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-14 h-14 rounded-full border-4 border-white bg-warm-gold shadow-xl shadow-warm-gold/30 flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-3 h-3 bg-white rounded-full"
          />
        </motion.div>
      </div>

      {/* Right side */}
      <div className="flex-1 w-full md:pl-12 order-3 pb-8 md:pb-0">
        {!isEven ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-3 md:max-w-sm"
          >
            <span className="text-warm-gold font-heading text-5xl font-bold block">{event.year}</span>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-river-blue leading-tight">
              {t(event.title)}
            </h3>
            <p className="text-river-blue/60 font-body leading-relaxed text-sm md:text-base">
              {t(event.description)}
            </p>
          </motion.div>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>
    </div>
  );
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative py-8">
      {/* Animated central line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ originY: 0 }}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-warm-gold/10 via-warm-gold/40 to-warm-gold/10 -translate-x-1/2 hidden md:block"
      />

      <div className="space-y-12 md:space-y-20">
        {events.map((event, i) => (
          <TimelineItem key={i} event={event} index={i} />
        ))}
      </div>
    </div>
  );
}
