"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ShieldCheck, 
  Tag, 
  Coins, 
  Leaf, 
  Users, 
  HeartPulse,
  Monitor
} from "lucide-react";

const PILLARS = [
  {
    id: "governance",
    title: { id: "Smart Governance", en: "Smart Governance" },
    program: "Si Mantab",
    desc: { 
      id: "Layanan perizinan dan tata kelola pemerintah berbasis digital yang transparan.", 
      en: "Transparent digital-based licensing and government governance services." 
    },
    icon: ShieldCheck,
    color: "text-blue-500"
  },
  {
    id: "branding",
    title: { id: "Smart Branding", en: "Smart Branding" },
    program: "Sungaiku Baiman",
    desc: { 
      id: "Strategi promosi wajah kota melalui keindahan dan kebersihan sungai.", 
      en: "City branding strategy through the beauty and cleanliness of the rivers." 
    },
    icon: Tag,
    color: "text-orange-500"
  },
  {
    id: "economy",
    title: { id: "Smart Economy", en: "Smart Economy" },
    program: "Baiman Store",
    desc: { 
      id: "Pemberdayaan UMKM melalui platform e-commerce lokal yang terintegrasi.", 
      en: "SME empowerment through an integrated local e-commerce platform." 
    },
    icon: Coins,
    color: "text-green-500"
  },
  {
    id: "environment",
    title: { id: "Smart Environment", en: "Smart Environment" },
    program: "Waste to Energy",
    desc: { 
      id: "Pengelolaan sampah cerdas yang diubah menjadi energi terbarukan.", 
      en: "Smart waste management transformed into renewable energy." 
    },
    icon: Leaf,
    color: "text-emerald-500"
  },
  {
    id: "society",
    title: { id: "Smart Society", en: "Smart Society" },
    program: "Literasi Digital",
    desc: { 
      id: "Peningkatan kecakapan digital masyarakat untuk menghadapi era 4.0.", 
      en: "Improving digital literacy of the community to face the 4.0 era." 
    },
    icon: Users,
    color: "text-purple-500"
  },
  {
    id: "living",
    title: { id: "Smart Living", en: "Smart Living" },
    program: "Bakawan RTLH",
    desc: { 
      id: "Layanan perumahan layak huni dan kesehatan yang terintegrasi penuh.", 
      en: "Fully integrated decent housing and healthcare services." 
    },
    icon: HeartPulse,
    color: "text-red-500"
  }
];

export default function SmartCityGrid() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
      {PILLARS.map((pillar) => {
        const PillarIcon = pillar.icon;
        
        return (
          <motion.div
            key={pillar.id}
            onMouseEnter={() => setActive(pillar.id)}
            onMouseLeave={() => setActive(null)}
            whileHover={{ y: -10 }}
            className={`group relative h-80 rounded-[2.5rem] bg-white border transition-all duration-500 overflow-hidden cursor-default ${
              active === pillar.id 
                ? "border-river-blue shadow-[0_20px_50px_rgba(4,65,116,0.1)]" 
                : "border-river-blue/5 shadow-sm"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent transition-opacity duration-500 ${
              active === pillar.id ? "opacity-100" : "opacity-0"
            }`} />

            <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-river-blue/5 flex items-center justify-center ${pillar.color} mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-river-blue group-hover:text-white`}>
                  <PillarIcon size={28} />
                </div>
                <h3 className="text-2xl font-heading font-black text-river-blue mb-2">
                  {t(pillar.title)}
                </h3>
                <div className="flex items-center gap-2">
                   <div className="h-px w-4 bg-warm-gold opacity-40" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-warm-gold italic">
                     {pillar.program}
                   </p>
                </div>
              </div>

              <p className={`text-sm leading-relaxed font-body transition-all duration-500 ${
                active === pillar.id ? "text-river-blue/60" : "text-river-blue/30"
              }`}>
                {t(pillar.desc)}
              </p>
            </div>

            <div className={`absolute -bottom-4 -right-4 text-river-blue opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-1000 group-hover:scale-125`}>
              <Monitor size={160} strokeWidth={1} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
