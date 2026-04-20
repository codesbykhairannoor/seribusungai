"use client";

import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Timeline from "@/components/ui/Timeline";
import FadeInView from "@/components/animations/FadeInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function Sejarah() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 500], [0, 80]);

  const timelineEvents = [
    { year: "1526", title: { id: "Berdirinya Kota Banjarmasin", en: "Founding of Banjarmasin City" }, description: { id: "Pangeran Samudera memeluk Islam dan bergelar Sultan Suriansyah, menandai berdirinya Kesultanan Banjar dengan Banjarmasin sebagai pusatnya.", en: "Prince Samudera converted to Islam and took the title Sultan Suriansyah, marking the founding of the Banjar Sultanate with Banjarmasin as its center." } },
    { year: "1550", title: { id: "Pembangunan Masjid Sultan Suriansyah", en: "Building of Sultan Suriansyah Mosque" }, description: { id: "Pembangunan masjid tertua di Kalimantan Selatan yang menjadi pusat penyebaran Islam dan identitas budaya Banjar.", en: "The construction of the oldest mosque in South Kalimantan, which became the center for Islamic dissemination and Banjar cultural identity." } },
    { year: "1606", title: { id: "Kontak Pertama dengan Belanda", en: "First Contact with the Dutch" }, description: { id: "Tiba pertama kalinya armada Belanda (VOC) di wilayah Kesultanan Banjar untuk menjajaki perdagangan lada.", en: "The first arrival of the Dutch fleet (VOC) in the Banjar Sultanate territory to explore the pepper trade." } },
    { year: "1859", title: { id: "Perang Banjar", en: "The Banjar War" }, description: { id: "Perjuangan heroik rakyat Banjar melawan penjajahan Belanda yang dipimpin oleh Pangeran Antasari.", en: "The heroic struggle of the Banjar people against Dutch colonization led by Prince Antasari." } },
    { year: "1905", title: { id: "Penghapusan Kesultanan", en: "Abolition of the Sultanate" }, description: { id: "Belanda secara sepihak menghapuskan Kesultanan Banjar, namun semangat perlawanan rakyat tetap berkobar.", en: "The Dutch unilaterally abolished the Banjar Sultanate, but the spirit of popular resistance remained." } },
    { year: "1945", title: { id: "Era Kemerdekaan", en: "Independence Era" }, description: { id: "Banjarmasin menjadi bagian dari Republik Indonesia setelah Proklamasi, menandai babak baru sebagai kota modern.", en: "Banjarmasin became part of the Republic of Indonesia after the Proclamation, marking a new chapter as a modern city." } },
    { year: "1957", title: { id: "Ibukota Provinsi", en: "Provincial Capital" }, description: { id: "Banjarmasin ditetapkan sebagai ibukota Provinsi Kalimantan Selatan yang baru terbentuk.", en: "Banjarmasin was designated as the capital of the newly formed South Kalimantan Province." } },
    { year: "2020", title: { id: "Menuju Smart City", en: "Towards a Smart City" }, description: { id: "Transformasi Banjarmasin menjadi kota digital yang modern tanpa meninggalkan akar budaya sungainya.", en: "The transformation of Banjarmasin into a modern digital city without losing its river cultural roots." } },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>

        {/* ── HERO: Split 40/60 — teks kiri, foto kanan zoom-in ── */}
        <section className="relative h-screen min-h-[640px] flex overflow-hidden bg-river-blue-900">
          {/* LEFT — dark panel with text */}
          <div className="relative z-10 w-full lg:w-[42%] flex flex-col justify-end pb-16 px-8 md:px-14 bg-river-blue-900">
            <FloatingParticles count={10} colors={["rgba(245,197,24,0.3)","rgba(255,255,255,0.15)"]} className="z-0" />
            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-warm-gold font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
              >
                {t({ id: "Linimasa Sejarah", en: "Historical Timeline" })}
              </motion.span>

              {/* Giant year decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-[7rem] md:text-[10rem] font-heading font-black text-white/5 leading-none select-none -mb-6"
              >
                1526
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-heading font-black text-white text-4xl md:text-6xl leading-tight mb-6 relative z-10"
              >
                {t({ id: "Menapaki Jejak Perjalanan Waktu", en: "Tracing the Footsteps of Time" })}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-white/55 font-body text-base leading-relaxed max-w-sm mb-8"
              >
                {t({ id: "Dari pusat kesultanan maritim hingga menjadi metropolis digital yang dinamis.", en: "From the center of a maritime sultanate to a dynamic digital metropolis." })}
              </motion.p>

              {/* Timeline dots preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-2"
              >
                {["1526","1859","1945","2020"].map((y, i) => (
                  <div key={y} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-warm-gold" />
                    <span className="text-warm-gold/60 text-[10px] font-bold">{y}</span>
                    {i < 3 && <div className="w-6 h-px bg-warm-gold/20" />}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* RIGHT — photo zoom-in */}
          <div className="hidden lg:block absolute right-0 top-0 w-[62%] h-full overflow-hidden">
            <motion.img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Jami_Banjarmasin.jpg"
              alt="Sejarah Banjarmasin"
              className="w-full h-full object-cover"
              style={{ y: imgY }}
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-river-blue-900 via-river-blue-900/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-river-blue-900/60 to-transparent" />
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
            className="absolute bottom-8 left-8 md:left-14 z-20 flex items-center gap-3"
          >
            <motion.div animate={{ y: [0,6,0] }} transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-px h-10 bg-warm-gold/40" />
            <span className="text-white/30 text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          </motion.div>
        </section>

        {/* ── ORIGIN ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <FadeInView direction="right" className="lg:col-span-6">
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">
                  {t({ id: "Asal Usul Kota", en: "City Origins" })}
                </span>
                <div className="text-[8rem] md:text-[10rem] font-heading font-black text-river-blue-50 leading-none -mb-8 select-none">1526</div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-river-blue mb-8 leading-tight relative z-10">
                  {t({ id: "Lahir dari Pertemuan Sungai dan Iman", en: "Born from the Confluence of River and Faith" })}
                </h2>
                <div className="space-y-5 text-river-blue/65 font-body leading-relaxed text-lg">
                  <p>{t({ id: "Banjarmasin berawal dari sebuah perkampungan di delta Sungai Barito yang dihuni oleh suku Dayak dan Banjar.", en: "Banjarmasin began as a settlement in the Barito River delta inhabited by Dayak and Banjar tribes." })}</p>
                  <p>{t({ id: "Titik balik sejarah terjadi pada abad ke-16 ketika Pangeran Samudera meminta bantuan Kesultanan Demak untuk memenangkan perebutan kekuasaan.", en: "A historical turning point occurred in the 16th century when Prince Samudera requested help from the Demak Sultanate to win a power struggle." })}</p>
                </div>
              </FadeInView>
              <FadeInView direction="left" className="lg:col-span-6 relative h-[420px] hidden lg:block">
                <div className="absolute top-0 right-0 w-4/5 h-72 rounded-3xl overflow-hidden shadow-xl rotate-2">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura_di_Pagi_Hari_(1).jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 w-4/5 h-72 rounded-3xl overflow-hidden shadow-2xl -rotate-2 border-4 border-white">
                  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_terapung_Banjarmasin.jpg" alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-river-blue/50 to-transparent" />
                </div>
                <motion.div initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-warm-gold text-white rounded-2xl p-5 shadow-2xl text-center z-10">
                  <div className="text-3xl font-heading font-bold">1526</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Berdiri</div>
                </motion.div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <SectionWrapper background="light">
          <FadeInView className="text-center mb-16">
            <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-4 block">{t({ id: "Linimasa Sejarah", en: "Historical Timeline" })}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue mb-4">{t({ id: "Perjalanan Hingga Kini", en: "A Journey Through Time" })}</h2>
            <div className="h-1 w-16 bg-warm-gold mx-auto rounded-full" />
          </FadeInView>
          <Timeline events={timelineEvents} />
        </SectionWrapper>

        {/* ── TOKOH BERSEJARAH ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">{t({ id: "Pahlawan & Pemimpin", en: "Heroes & Leaders" })}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">{t({ id: "Tokoh Bersejarah", en: "Historical Figures" })}</h2>
            </FadeInView>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Sultan Suriansyah", year: "1526", role: { id: "Pendiri Kesultanan Banjar", en: "Founder of the Banjar Sultanate" }, desc: { id: "Lahir sebagai Raden Samudra, ia memeluk Islam dan mendirikan Kesultanan Banjar pada 24 September 1526.", en: "Born as Raden Samudra, he converted to Islam and founded the Banjar Sultanate on 24 September 1526." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Jami_Banjarmasin.jpg", accent: "bg-warm-gold" },
                { name: "Pangeran Antasari", year: "1859", role: { id: "Pahlawan Perang Banjar", en: "Hero of the Banjar War" }, desc: { id: "Memimpin perlawanan heroik rakyat Banjar melawan penjajahan Belanda dalam Perang Banjar (1859–1863).", en: "Led the heroic resistance of the Banjar people against Dutch colonization in the Banjar War (1859–1863)." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sungai_Martapura.jpg", accent: "bg-earth-terracotta" },
                { name: "Guru Sekumpul", year: "Abad XX", role: { id: "Ulama Besar Kalimantan", en: "Great Scholar of Kalimantan" }, desc: { id: "KH Muhammad Zaini Abdul Ghani, ulama paling berpengaruh di Kalimantan Selatan era modern.", en: "KH Muhammad Zaini Abdul Ghani, the most influential Islamic scholar in modern South Kalimantan." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Raya_Sabilal_Muhtadin_3.jpg", accent: "bg-river-blue" },
              ].map((fig, i) => (
                <motion.div key={i} initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.12, duration:0.7 }}
                  className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${i===1?"md:mt-10":""}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img src={fig.img} alt={fig.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                    <div className={`absolute top-4 right-4 ${fig.accent} text-white rounded-xl px-3 py-1.5 text-center`}>
                      <div className="text-sm font-heading font-bold leading-none">{fig.year}</div>
                    </div>
                  </div>
                  <div className="bg-white p-7">
                    <div className={`h-1 w-10 ${fig.accent} rounded-full mb-4`}/>
                    <p className="text-[10px] uppercase tracking-widest text-warm-gold font-bold mb-2">{t(fig.role)}</p>
                    <h3 className="text-2xl font-heading font-bold text-river-blue mb-4 leading-tight">{fig.name}</h3>
                    <p className="text-sm text-river-blue/60 font-body leading-relaxed">{t(fig.desc)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RIVER HERITAGE ── */}
        <section className="relative overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Senja_di_Sungai_Martapura_1.jpg" alt="" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-river-blue/75"/>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeInView direction="right">
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">{t({ id: "Warisan Sungai", en: "River Heritage" })}</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">{t({ id: "Arsitektur dan Kehidupan Sosial", en: "Architecture and Social Life" })}</h2>
                <p className="text-lg text-white/65 font-body leading-relaxed">{t({ id: "Keterikatan mendalam dengan sungai telah menciptakan gaya arsitektur unik seperti Rumah Banjar yang panggung dan sistem transportasi sungai yang masih lestari hingga saat ini.", en: "A deep bond with the river has created unique architectural styles like the stilted Banjar House and a river transportation system that survives to this day." })}</p>
              </FadeInView>
              <FadeInView direction="left">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: { id: "Rumah Lanting", en: "Lanting House" }, desc: { id: "Hunian terapeutik di atas air.", en: "Floating therapeutic dwellings." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Rumah_Adat_Bubungan_Tinggi_Banjarmasin.jpg" },
                    { title: { id: "Klotok", en: "Klotok Boat" }, desc: { id: "Urat nadi transportasi sungai.", en: "The veins of river transport." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Jukung_Berenteng.jpg" },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.15 }}
                      className={`rounded-2xl overflow-hidden shadow-xl ${i===1?"mt-8":""}`}>
                      <div className="aspect-square relative">
                        <img src={item.img} alt={t(item.title)} className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="text-white font-bold text-sm">{t(item.title)}</div>
                          <div className="text-white/60 text-xs">{t(item.desc)}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
