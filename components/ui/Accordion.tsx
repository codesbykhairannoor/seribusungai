"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualText } from "@/content/types";

interface AccordionItem {
  id: string;
  title: BilingualText;
  content: BilingualText;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const { t } = useLanguage();

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
              isOpen
                ? "border-warm-gold/30 shadow-lg shadow-warm-gold/5"
                : "border-river-blue/8 shadow-sm hover:shadow-md hover:border-river-blue/15"
            } bg-white`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-offset-2 rounded-2xl"
            >
              <span className="font-heading font-bold text-lg text-river-blue pr-4 leading-snug">
                {t(item.title)}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 0 : 0 }}
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isOpen ? "bg-warm-gold text-white" : "bg-river-blue-50 text-river-blue"
                }`}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 text-river-blue/65 font-body leading-relaxed border-t border-river-blue/5 pt-4">
                    {t(item.content)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
