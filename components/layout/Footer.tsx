"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Instagram, Facebook, Youtube, Twitter } from "@/components/ui/BrandIcons";
import { useLanguage } from "@/contexts/LanguageContext";
import { NAV_ITEMS } from "@/lib/navigation";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-river-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-warm-gold rounded-full flex items-center justify-center text-white font-heading text-xl font-bold">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-tight">
                  Banjarmasin
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-warm-gold-light">
                  Kota Seribu Sungai
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              {t({
                id: "Menjelajahi keindahan budaya, sejarah, dan pesona alam kota sungai yang memikat di jantung Kalimantan Selatan.",
                en: "Exploring the cultural beauty, history, and enchanting natural charms of the river city in the heart of South Kalimantan."
              })}
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-warm-gold transition-colors text-white/80 hover:text-white">
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-warm-gold">
              {t({ id: "Navigasi", en: "Navigation" })}
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  return item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="text-sm text-white/60 hover:text-warm-gold transition-colors">
                        {t(child.label)}
                      </Link>
                    </li>
                  ));
                }
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/60 hover:text-warm-gold transition-colors">
                      {t(item.label)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-warm-gold">
              {t({ id: "Hubungi Kami", en: "Contact Us" })}
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="text-warm-gold shrink-0" size={18} />
                <span>Jl. Jendral Sudirman No. 1, Banjarmasin, Kalimantan Selatan</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Phone className="text-warm-gold shrink-0" size={18} />
                <span>+62 (511) 123-4567</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Mail className="text-warm-gold shrink-0" size={18} />
                <span>info@banjarmasintourism.go.id</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-warm-gold">
              {t({ id: "Newsletter", en: "Newsletter" })}
            </h4>
            <p className="text-sm text-white/60 mb-4">
              {t({
                id: "Dapatkan info terbaru tentang event dan destinasi menarik.",
                en: "Get the latest info about exciting events and destinations."
              })}
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder={t({ id: "Email Anda", en: "Your Email" })}
                className="bg-white/10 border border-white/20 rounded px-3 py-2 text-sm flex-1 focus:outline-none focus:border-warm-gold transition-colors"
              />
              <button className="bg-warm-gold hover:bg-warm-gold-dark text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                {t({ id: "Kirim", en: "Send" })}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/40 font-medium">
          <p>© 2026 DINAS PARIWISATA KOTA BANJARMASIN. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-warm-gold">PRIVACY POLICY</Link>
            <Link href="#" className="hover:text-warm-gold">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
