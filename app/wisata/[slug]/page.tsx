"use client";

import React, { use } from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GalleryGrid from "@/components/ui/GalleryGrid";
import Breadcrumb from "@/components/layout/Breadcrumb";
import DestinationCard from "@/components/ui/DestinationCard";
import FadeInView from "@/components/animations/FadeInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { destinations } from "@/content/shared/destinations";
import { notFound } from "next/navigation";
import { MapPin, Clock, Ticket, Navigation } from "lucide-react";

// Unique gallery images per destination
const GALLERY_SETS: Record<string, string[]> = {
  "pasar-terapung-lok-baintan": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin_2.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin_3.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pedagang_di_Pasar_Apung_(1).jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pedagang_di_Pasar_Apung_(2).jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Lok_Baintan_Floating_Market,_Martapura,_South_Kalimantan,_2018-07-28_01.jpg",
  ],
  "menara-pandang-siring": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Menara_Pandang_Banjarmasin_001.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Taman_Siring_Banjarmasin.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Titik_Nol_Kilometer_Kota_Banjarmasin.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Patung_Bekantan_Banjarmasin.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Daerah_sungai_siring.jpg",
  ],
  "kampung-sasirangan": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Peserta_Karnaval_FBPT_2018_001.JPG",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sanggar_Seni_Galuh_Banjar_1.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sanggar_Seni_Galuh_Banjar_2.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Tari_Japin_Sigam_1.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Tari_Japin_Sigam_2.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Grup_Musik_Panting.jpg",
  ],
};

const DEFAULT_GALLERY = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Taman_Siring_Banjarmasin.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Raya_Sabilal_Muhtadin_3.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura_di_Pagi_Hari_(1).jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Berenteng.jpg",
];

export default function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t } = useLanguage();

  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  const relatedDestinations = destinations.filter((d) => d.slug !== slug).slice(0, 3);

  const gallerySrcs = GALLERY_SETS[slug] ?? DEFAULT_GALLERY;
  const galleryImages = gallerySrcs.map((src, i) => ({
    src,
    alt: { id: `${t(destination.name)} foto ${i + 1}`, en: `${t(destination.name)} photo ${i + 1}` },
    width: 1200,
    height: 800,
  }));

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />

      <PageTransitionWrapper>
        <HeroSection
          variant="parallax"
          backgroundSrc={destination.heroImage.src}
          backgroundAlt={destination.heroImage.alt}
          headline={destination.name}
          subheadline={destination.tagline}
          overlayOpacity={0.5}
        >
          <div className="mt-8 flex justify-center">
            <Breadcrumb
              items={[
                { label: { id: "Wisata", en: "Tourism" }, href: "/wisata" },
                { label: destination.name },
              ]}
            />
          </div>
        </HeroSection>

        {/* ── Main Content ── */}
        <SectionWrapper background="white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Description + Gallery */}
            <div className="lg:col-span-2">
              <FadeInView direction="right">
                <h2 className="text-3xl font-heading font-bold text-river-blue mb-6">
                  {t({ id: "Tentang", en: "About" })} {t(destination.name)}
                </h2>
                <div className="space-y-5 text-river-blue/65 font-body leading-relaxed text-lg mb-14">
                  <p>{t(destination.shortDescription)}</p>
                  <p>
                    {t({
                      id: "Destinasi ini menawarkan pengalaman unik yang memadukan keindahan alam sungai Banjarmasin dengan kearifan lokal yang telah terjaga selama generasi ke generasi. Setiap sudutnya menyimpan cerita sejarah dan nilai budaya yang mendalam.",
                      en: "This destination offers a unique experience that combines the natural beauty of Banjarmasin's rivers with local wisdom preserved for generations. Every corner holds historical stories and deep cultural values.",
                    })}
                  </p>
                </div>

                <h3 className="text-2xl font-heading font-bold text-river-blue mb-8">
                  {t({ id: "Galeri Foto", en: "Photo Gallery" })}
                </h3>
                <GalleryGrid images={galleryImages} />
              </FadeInView>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeInView direction="left" className="sticky top-32">
                <div className="bg-river-blue-50 rounded-[40px] p-10 space-y-8 border border-river-blue/5">
                  <h3 className="text-2xl font-heading font-bold text-river-blue">
                    {t({ id: "Informasi Praktis", en: "Practical Info" })}
                  </h3>

                  <div className="space-y-7">
                    {[
                      { icon: MapPin, label: { id: "Alamat", en: "Address" }, value: "Banjarmasin, Kalimantan Selatan" },
                      { icon: Clock, label: { id: "Jam Operasional", en: "Hours" }, value: t(destination.operatingHours) },
                      { icon: Ticket, label: { id: "Harga Tiket", en: "Ticket Price" }, value: t(destination.ticketPrice) },
                    ].map((info, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-warm-gold shadow-sm shrink-0">
                          <info.icon size={18} />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase font-bold tracking-widest text-river-blue/40 mb-1">
                            {t(info.label)}
                          </div>
                          <p className="text-sm font-body text-river-blue/75">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-river-blue/10">
                    <button className="w-full bg-river-blue text-white py-4 rounded-full font-bold shadow-xl hover:bg-river-blue-900 transition-all hover:scale-105 flex items-center justify-center gap-2">
                      <Navigation size={18} />
                      {t({ id: "Petunjuk Arah", en: "Get Directions" })}
                    </button>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </SectionWrapper>

        {/* ── Related Destinations ── */}
        <SectionWrapper background="light">
          <div className="text-center mb-14">
            <FadeInView>
              <h2 className="text-4xl font-heading font-bold text-river-blue mb-4">
                {t({ id: "Destinasi Lainnya", en: "Other Destinations" })}
              </h2>
              <div className="h-1 w-16 bg-warm-gold mx-auto rounded-full" />
            </FadeInView>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {relatedDestinations.map((dest, i) => (
              <FadeInView key={dest.slug} delay={i * 0.1}>
                <DestinationCard destination={dest} />
              </FadeInView>
            ))}
          </div>
        </SectionWrapper>
      </PageTransitionWrapper>

      <Footer />
    </main>
  );
}
