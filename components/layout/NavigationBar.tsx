"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NAV_ITEMS, NavItem } from "@/lib/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const scrollY = useScrollPosition();
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const isScrolled = scrollY > 80;

  // Homepage uses ImageHero (light bg) — all other pages have dark hero
  const isHomePage = pathname === "/";
  // When not scrolled: homepage = dark text, other pages = white text (dark hero)
  const navTextColor = isScrolled
    ? "text-river-blue"
    : isHomePage
    ? "text-white"
    : "text-river-blue";

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl transition-all duration-500",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl py-3 shadow-premium-soft rounded-b-[2rem] border-b border-x border-white/50" 
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto px-8 flex items-center h-14">
        {/* Logo container */}
        <div className="flex-1 basis-0 flex justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-warm-gold rounded-2xl flex items-center justify-center text-white font-[900] text-xl group-hover:scale-110 transition-transform shadow-premium-glow">
              B
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-[900] text-lg leading-none tracking-tight transition-colors",
                isScrolled ? "text-river-blue" : isHomePage ? "text-white" : "text-river-blue"
              )}>
                Banjarmasin
              </span>
              <span className={cn(
                "text-[8px] font-black uppercase tracking-[0.3em] transition-colors mt-1 opacity-60",
                isScrolled ? "text-river-blue" : isHomePage ? "text-white" : "text-river-blue"
              )}>
                Archive
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu - Centered */}
        <ul className="hidden xl:flex items-center gap-8 justify-center">
          {NAV_ITEMS.map((item) => (
            <li 
              key={item.label.en} 
              className="relative group"
              onMouseEnter={() => item.children && setActiveDropdown(item.label.en)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-[13px] font-bold tracking-tight transition-all hover:text-warm-gold flex items-center gap-1",
                  pathname === item.href
                    ? "text-warm-gold"
                    : isScrolled ? "text-river-blue" : isHomePage ? "text-white" : "text-river-blue"
                )}
              >
                {t(item.label)}
                {item.children && <ChevronDown size={12} />}
              </Link>

              {/* Dropdown */}
              {item.children && (
                <AnimatePresence>
                  {activeDropdown === item.label.en && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[400px] bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-premium-deep p-4 grid grid-cols-1 gap-1 border border-white/50 z-[100]"
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="flex items-start gap-4 p-3 rounded-2xl hover:bg-river-blue/5 transition-all group/item"
                          >
                            <div className="w-10 h-10 rounded-xl bg-warm-gold/10 flex items-center justify-center text-warm-gold group-hover/item:bg-warm-gold group-hover/item:text-white transition-all shrink-0">
                              {child.icon ? <child.icon size={20} /> : <div className="w-5 h-5 bg-warm-gold/20 rounded-full" />}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-black text-river-blue group-hover/item:text-warm-gold transition-colors">
                                {t(child.label)}
                              </span>
                              {child.description && (
                                <span className="text-[11px] text-river-blue/50 font-medium leading-snug mt-0.5">
                                  {t(child.description)}
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Actions container */}
        <div className="flex-1 basis-0 flex justify-end items-center gap-4 min-w-[200px]">
          <button
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl border text-[11px] font-bold tracking-tight transition-all",
              isScrolled
                ? "border-river-blue/10 text-river-blue hover:bg-river-blue/5"
                : isHomePage
                ? "border-river-blue/10 text-river-blue hover:bg-river-blue/5"
                : "border-white/20 text-white hover:bg-white/10"
            )}
            aria-label="Toggle Language"
          >
            <Globe size={14} />
            {language}
          </button>

          <button
            className={cn(
              "xl:hidden p-2 rounded-md transition-colors",
              isScrolled
                ? "text-river-blue hover:bg-river-blue/5"
                : isHomePage
                ? "text-white hover:bg-white/10"
                : "text-river-blue hover:bg-river-blue/5"
            )}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-river-blue flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <span className="font-heading text-white text-xl font-bold">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-md"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <ul className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label.en} className="border-b border-white/5 pb-2">
                    <Link
                      href={item.href}
                      className={cn(
                        "text-xl font-heading font-medium text-white/90 hover:text-warm-gold block",
                        pathname === item.href && "text-warm-gold"
                      )}
                    >
                      {t(item.label)}
                    </Link>
                    {item.children && (
                      <ul className="ml-4 mt-2 flex flex-col gap-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="text-white/60 text-sm hover:text-warm-gold"
                            >
                              {t(child.label)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border-t border-white/10 flex flex-col items-center gap-2">
              <p className="text-white/40 text-xs uppercase tracking-widest">Banjarmasin — Kota Seribu Sungai</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
