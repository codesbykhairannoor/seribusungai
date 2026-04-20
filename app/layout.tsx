import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AnimationProvider } from "@/contexts/AnimationContext";
import GlobalAnimations from "@/components/ui/GlobalAnimations";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
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
    <html lang="id" className={`${jakarta.variable}`} suppressHydrationWarning>
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
