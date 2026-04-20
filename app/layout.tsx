import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AnimationProvider } from "@/contexts/AnimationContext";
import GlobalAnimations from "@/components/ui/GlobalAnimations";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Banjarmasin Tourism",
    default: "Banjarmasin — Kota Seribu Sungai",
  },
  description:
    "Official interactive tourism experience of Banjarmasin. Explore the floating markets, Banjar culture, and digital vision of the city of a thousand rivers.",
  keywords: ["Banjarmasin", "Tourism", "Kalsel", "Pasar Terapung", "River City"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen selection:bg-warm-gold selection:text-white font-body antialiased">
        <LanguageProvider>
          <AnimationProvider>
            {/* Global: loading screen + custom cursor + boat scroll */}
            <GlobalAnimations />
            {children}
          </AnimationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
