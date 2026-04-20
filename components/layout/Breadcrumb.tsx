"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualText } from "@/content/types";

interface BreadcrumbItem {
  label: BilingualText;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center text-xs font-medium uppercase tracking-widest text-white/50 mb-6">
      <Link href="/" className="hover:text-warm-gold transition-colors flex items-center gap-1">
        <Home size={12} />
        {t({ id: "Beranda", en: "Home" })}
      </Link>
      
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <ChevronRight size={12} className="mx-2 opacity-30" />
          {item.href ? (
            <Link href={item.href} className="hover:text-warm-gold transition-colors">
              {t(item.label)}
            </Link>
          ) : (
            <span className="text-warm-gold">{t(item.label)}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
