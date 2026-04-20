"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Smartphone, 
  UserCheck, 
  Stethoscope, 
  Cctv, 
  LayoutGrid,
  Bell,
  Settings,
  Fingerprint
} from "lucide-react";

const SCREENS = [
  {
    id: "home",
    title: { id: "Eco-System SSO", en: "SSO Ecosystem" },
    icon: Fingerprint,
    content: { 
      id: "Satu identitas NIK untuk seluruh layanan publik Banjarmasin.", 
      en: "Single national identity for all Banjarmasin public services." 
    },
    color: "bg-blue-600"
  },
  {
    id: "health",
    title: { id: "BaApik Health", en: "BaApik Health" },
    icon: Stethoscope,
    content: { 
      id: "Pendaftaran antrean Puskesmas secara online tanpa antre fisik.", 
      en: "Online Puskesmas queue registration without physical waiting." 
    },
    color: "bg-emerald-600"
  },
  {
    id: "admin",
    title: { id: "Parak Acil", en: "Parak Acil" },
    icon: UserCheck,
    content: { 
      id: "Urus KTP, Akta, dan KIA langsung dari genggaman tangan.", 
      en: "Manage ID cards, certificates, and more right from your hand." 
    },
    color: "bg-orange-600"
  },
  {
    id: "traffic",
    title: { id: "ATCS Live", en: "ATCS Live" },
    icon: Cctv,
    content: { 
      id: "Pantau arus lalu lintas kota secara real-time via CCTV.", 
      en: "Monitor city traffic flow in real-time via CCTV." 
    },
    color: "bg-red-600"
  }
];

export default function AppShowcase() {
  const { t } = useLanguage();
  const [activeScreen, setActiveScreen] = useState(0);

  const ActiveIcon = SCREENS[activeScreen].icon;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-16">
      {/* Phone Mockup */}
      <div className="relative w-72 h-[580px] bg-black rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden flex-shrink-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50" />
        
        {/* Screen Content */}
        <div className="absolute inset-0 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="h-full flex flex-col"
            >
              <div className={`${SCREENS[activeScreen].color} p-8 pt-12 text-white`}>
                <div className="flex justify-between items-center mb-10 opacity-60">
                   <div className="text-xs font-bold">9:41</div>
                   <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-full opacity-50" />
                      <div className="w-2 h-2 bg-white rounded-full" />
                   </div>
                </div>
                <ActiveIcon size={40} className="mb-4" />
                <h3 className="text-2xl font-heading font-black leading-tight">
                   {t(SCREENS[activeScreen].title)}
                </h3>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <p className="text-river-blue/60 text-sm leading-relaxed font-body">
                   {t(SCREENS[activeScreen].content)}
                </p>
                <div className="space-y-3">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="h-2 w-full bg-river-blue/5 rounded-full" />
                   ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Nav Mockup */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-gray-100 flex items-center justify-around px-4">
           <LayoutGrid size={20} className="text-river-blue" />
           <Bell size={20} className="text-gray-300" />
           <Settings size={20} className="text-gray-300" />
        </div>
      </div>

      {/* Selectors */}
      <div className="flex-1 space-y-4">
        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-river-blue/30 mb-8">
           {t({ id: "Pilih Modul untuk Tes", en: "Select Module to Test" })}
        </h4>
        {SCREENS.map((screen, idx) => {
          const BtnIcon = screen.icon;
          return (
            <button
              key={screen.id}
              onClick={() => setActiveScreen(idx)}
              className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center gap-6 group ${
                activeScreen === idx 
                  ? "bg-white border-river-blue shadow-xl scale-[1.02]" 
                  : "bg-river-blue-50/50 border-transparent hover:bg-white hover:border-river-blue/20"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                activeScreen === idx ? screen.color + " text-white" : "bg-white text-river-blue/40"
              }`}>
                <BtnIcon size={20} />
              </div>
              <div>
                 <div className={`font-heading font-bold text-lg ${activeScreen === idx ? "text-river-blue" : "text-river-blue/40"}`}>
                   {t(screen.title)}
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-river-blue/20">
                   {t({ id: "Ketuk untuk eksplorasi", en: "Tap to explore" })}
                 </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
