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
    ? "text-white/90"
    : isHomePage
    ? "text-river-blue"
    : "text-white/90";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-river-blue/90 backdrop-blur-md py-3 shadow-lg" 
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-warm-gold rounded-full flex items-center justify-center text-white font-heading text-xl font-bold group-hover:scale-110 transition-transform">
            B
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-heading font-bold text-xl leading-tight transition-colors",
              isScrolled ? "text-white" : isHomePage ? "text-river-blue" : "text-white"
            )}>
              Banjarmasin
            </span>
            <span className={cn(
              "text-[10px] uppercase tracking-[0.2em] transition-colors",
              isScrolled ? "text-warm-gold-light" : isHomePage ? "text-river-blue/70" : "text-warm-gold/80"
            )}>
              Kota Seribu Sungai
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-8">
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
                  "text-sm font-medium transition-colors hover:text-warm-gold flex items-center gap-1",
                  pathname === item.href
                    ? "text-warm-gold"
                    : navTextColor
                )}
              >
                {t(item.label)}
                {item.children && <ChevronDown size={14} />}
              </Link>

              {/* Dropdown */}
              {item.children && (
                <AnimatePresence>
                  {activeDropdown === item.label.en && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 overflow-hidden border border-river-blue/10"
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-river-blue hover:bg-river-blue/5 hover:text-warm-gold transition-colors"
                          >
                            {t(child.label)}
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

        {/* Actions (Language Toggle + Mobile Menu Trigger) */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all",
              isScrolled
                ? "border-white/20 text-white hover:bg-white/10"
                : isHomePage
                ? "border-river-blue/20 text-river-blue hover:bg-river-blue/5"
                : "border-white/25 text-white/90 hover:bg-white/10"
            )}
            aria-label="Toggle Language"
          >
            <Globe size={14} />
            {language.toUpperCase()}
          </button>

          <button
            className={cn(
              "xl:hidden p-2 rounded-md transition-colors",
              isScrolled
                ? "text-white hover:bg-white/10"
                : isHomePage
                ? "text-river-blue hover:bg-river-blue/5"
                : "text-white/90 hover:bg-white/10"
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
