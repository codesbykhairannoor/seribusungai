"use client";

import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import Accordion from "@/components/ui/Accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function Budaya() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const imgScale = useTransform(scrollY, [0, 400], [1.08, 1]);

  const culturalArts = [
    { id: "mamanda", title: { id: "Teater Mamanda", en: "Mamanda Theater" }, content: { id: "Seni teater tradisional suku Banjar yang bersifat improvisasi dengan tema kerajaan atau kehidupan sehari-hari yang disisipi kritik sosial dan humor.", en: "Traditional improvisational theater of the Banjar people with royal or daily life themes, interspersed with social criticism and humor." } },
    { id: "madihin", title: { id: "Seni Madihin", en: "Madihin Art" }, content: { id: "Seni puisi lisan khas Banjar yang dinyanyikan secara spontan dengan iringan alat musik gendang atau terbang (rebana).", en: "Banjar oral poetry art sung spontaneously accompanied by a drum or tambourine (rebana)." } },
    { id: "hadrah", title: { id: "Musik Hadrah", en: "Hadrah Music" }, content: { id: "Musik religius bernapaskan Islam dengan iringan rebana dan syair-syair berisi pujian kepada Allah dan teladan Nabi.", en: "Islamic religious music accompanied by tambourines and lyrics containing praise to Allah and the Prophet's example." } },
    { id: "baayun", title: { id: "Baayun Maulid", en: "Baayun Maulid" }, content: { id: "Tradisi mengayun bayi dalam ayunan berhias sebagai ungkapan syukur dan doa keselamatan, dilaksanakan pada peringatan Maulid Nabi.", en: "Tradition of swinging babies in decorated cradles as an expression of gratitude and prayer for safety, held during the Prophet's Birthday commemoration." } },
  ];

  const motifs = [
    { name: "Iris Pudak", desc: { id: "Keharuman", en: "Fragrance" }, color: "bg-amber-100 text-amber-800" },
    { name: "Kambang Raja", desc: { id: "Martabat", en: "Dignity" }, color: "bg-rose-100 text-rose-800" },
    { name: "Ombak Sinapur", desc: { id: "Keberanian", en: "Courage" }, color: "bg-blue-100 text-blue-800" },
    { name: "Bayam Raja", desc: { id: "Kekuatan", en: "Strength" }, color: "bg-emerald-100 text-emerald-800" },
    { name: "Daun Jaruju", desc: { id: "Perlindungan", en: "Protection" }, color: "bg-violet-100 text-violet-800" },
    { name: "Kambang Tanjung", desc: { id: "Keindahan", en: "Beauty" }, color: "bg-orange-100 text-orange-800" },
  ];

  const philosophyValues = [
    { title: "Kayuh Baimbai", sub: { id: "Bekerjasama", en: "Working Together" } },
    { title: "Adab Banjar",   sub: { id: "Kesantunan", en: "Politeness" } },
    { title: "Religiusitas",  sub: { id: "Spiritualitas", en: "Spirituality" } },
    { title: "Sungai",        sub: { id: "Adaptabilitas", en: "Adaptability" } },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <PageTransitionWrapper>

        {/* ── HERO: Panoramic Split ── */}
        <section className="relative h-screen min-h-[700px] flex flex-col lg:flex-row overflow-hidden bg-river-blue-900 border-b border-white/5">
          {/* Vertical Split Sections */}
          <div className="absolute inset-0 flex flex-col lg:flex-row z-0">
            {[
              { src: "https://images.unsplash.com/photo-1545620958-39e25042bc83?auto=format&fit=crop&q=80&w=1600", label: { id: "Seni & Tari", en: "Art & Dance" } },
              { src: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&w=1600", label: { id: "Tradisi & Sejarah", en: "Tradition & History" } },
              { src: "https://images.unsplash.com/photo-1440778303588-435521a205bc?auto=format&fit=crop&q=80&w=1600", label: { id: "Kehidupan Sungai", en: "River Life" } }
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="relative flex-1 h-full min-h-[33vh] lg:min-h-0 overflow-hidden group border-b lg:border-b-0 lg:border-r border-white/10 last:border-0"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={section.src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 brightness-[0.55] group-hover:brightness-[0.75]"
                  />
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-river-blue-900/95 via-river-blue-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity pointer-events-none" />
                
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none group-hover:scale-110 transition-transform duration-500 w-full px-4">
                  <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.4em] block mb-2">{t(section.label)}</span>
                  <div className="w-12 h-0.5 bg-warm-gold/60 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-river-blue-900/60 via-transparent to-river-blue-900/90" />

          {/* Centered Overlay Text */}
          <div className="relative z-20 w-full flex flex-col items-center justify-center pointer-events-none select-none px-6 pt-44">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <span className="inline-block text-warm-gold font-body font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs mb-8 py-2 px-6 rounded-full border border-warm-gold/20 bg-warm-gold/5 backdrop-blur-md">
                {t({ id: "Warisan Budaya Nusantara", en: "Indonesian Cultural Heritage" })}
              </span>
              
              <h1 className="font-heading font-black text-white text-5xl md:text-7xl lg:text-8xl leading-none drop-shadow-2xl">
                {t({ id: "Jiwa &", en: "Soul &" })} <br />
                <span className="text-warm-gold">{t({ id: "Tradisi", en: "Tradition" })}</span>
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1, delay: 1.2 }}
                className="h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto mt-12"
              />
            </motion.div>
          </div>
        </section>

        {/* ── SASIRANGAN ── */}
        <section className="py-20 md:py-28 bg-white overflow-hidden border-b border-river-blue/5">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <FadeInView direction="right" className="lg:col-span-5">
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">{t({ id: "Kain Sasirangan", en: "Sasirangan Cloth" })}</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue mb-8 leading-tight">{t({ id: "Tenunan Doa dalam Setiap Motif", en: "Weaving Prayers in Every Motif" })}</h2>
                <p className="text-lg text-river-blue/65 font-body leading-relaxed mb-10">{t({ id: "Sasirangan bukan sekadar kain tradisional. Dahulu, kain ini digunakan sebagai media penyembuhan (batatamba) di mana setiap motifnya memiliki makna filosofis dan doa tertentu.", en: "Sasirangan is not just a traditional cloth. Historically, it was used as a healing medium (batatamba) where every motif has a specific philosophical meaning and prayer." })}</p>
                <a href="/wisata/kampung-sasirangan" className="inline-flex items-center gap-2 text-warm-gold font-bold hover:underline">{t({ id: "Kunjungi Kampung Sasirangan →", en: "Visit Sasirangan Village →" })}</a>
              </FadeInView>
              <div className="lg:col-span-7">
                <FadeInView direction="left" className="relative mb-4">
                  <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-700">
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Peserta_Karnaval_FBPT_2018_017.JPG" alt="Sasirangan" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-river-blue/40 to-transparent"/>
                  </div>
                </FadeInView>
                <StaggerContainer className="grid grid-cols-3 gap-3" staggerDelay={0.07}>
                  {motifs.map((motif, i) => (
                    <StaggerItem key={i}>
                      <div className={`${motif.color} rounded-2xl p-4 text-center hover:scale-105 transition-transform cursor-default shadow-sm hover:shadow-md`}>
                        <div className="font-bold text-xs md:text-sm mb-1">{motif.name}</div>
                        <div className="text-[10px] opacity-70 uppercase tracking-widest">{t(motif.desc)}</div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTS ── */}
        <section className="py-20 md:py-28 bg-clean-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeInView direction="right">
                <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">{t({ id: "Seni & Pertunjukan", en: "Arts & Performances" })}</span>
                <h2 className="text-4xl font-heading font-bold text-river-blue mb-8 leading-tight">{t({ id: "Ekspresi Jiwa Banjar", en: "Expression of the Banjar Soul" })}</h2>
                <div className="relative h-80">
                  <div className="absolute top-0 left-0 w-3/4 aspect-video rounded-2xl overflow-hidden shadow-xl group">
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Tari_Japin_Sigam_1.jpg" alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"/>
                  </div>
                  <div className="absolute bottom-0 right-0 w-2/3 aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Sanggar_Seni_Galuh_Banjar_2.jpg" alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"/>
                  </div>
                </div>
              </FadeInView>
              <FadeInView direction="left" className="lg:pt-16">
                <Accordion items={culturalArts}/>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── ARCHITECTURE — full-bleed ── */}
        <section className="relative overflow-hidden">
          <div className="relative h-[60vh] md:h-[70vh]">
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Rumah_Adat_Bubungan_Tinggi_Banjarmasin.jpg" alt="Rumah Bubungan Tinggi" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-clean-white"/>
            <div className="absolute inset-0 bg-gradient-to-r from-river-blue/30 to-transparent"/>
            <div className="absolute top-8 left-8 md:top-16 lg:left-24">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">{t({ id: "Arsitektur", en: "Architecture" })}</span>
              <h2 className="text-white font-heading font-bold text-3xl md:text-5xl max-w-lg leading-tight drop-shadow-lg">{t({ id: "Rumah Banjar Bubungan Tinggi", en: "Bubungan Tinggi Banjar House" })}</h2>
            </div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 -mt-24 pb-20">
            <FadeInView>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 border border-river-blue/5">
                <div className="md:col-span-2">
                  <p className="text-lg text-river-blue/65 font-body leading-relaxed mb-8">{t({ id: "Arsitektur tradisional Banjar dicirikan oleh struktur panggung yang adaptif terhadap lingkungan rawa dan sungai. Rumah Bubungan Tinggi merupakan kasta tertinggi yang dahulu hanya didiami oleh kaum bangsawan.", en: "Traditional Banjar architecture is characterized by stilted structures adaptive to swamp and river environments. The Bubungan Tinggi house is the highest caste, formerly only occupied by royalty." })}</p>
                </div>
                <div className="space-y-4">
                  {[{ id: "Atap tumpang melambangkan hubungan vertikal dengan Tuhan.", en: "Layered roofs symbolize vertical contact with God." }, { id: "Ukiran ornamen dari flora lokal Kalimantan.", en: "Ornamental carvings from local Kalimantan flora." }, { id: "Struktur panggung adaptasi terhadap banjir.", en: "Stilted structure adapts to floods." }].map((fact, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-warm-gold/10 flex items-center justify-center text-warm-gold text-xs font-bold shrink-0 mt-0.5">{i+1}</div>
                      <p className="text-sm text-river-blue/65 font-body">{t(fact)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* ── UPACARA & TRADISI ── */}
        <section className="py-20 md:py-28 bg-clean-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="mb-14">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-3 block">{t({ id: "Adat & Ritual", en: "Customs & Rituals" })}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-river-blue">{t({ id: "Upacara & Tradisi", en: "Ceremonies & Traditions" })}</h2>
            </FadeInView>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: { id: "Haul Guru Sekumpul", en: "Haul Guru Sekumpul" }, category: { id: "Religi Islam", en: "Islamic Religious" }, desc: { id: "Peringatan tahunan wafatnya ulama besar KH Zaini Abdul Ghani yang dihadiri lebih dari 2,5 juta peziarah.", en: "Annual commemoration of the passing of great scholar KH Zaini Abdul Ghani attended by over 2.5 million pilgrims." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Masjid_Raya_Sabilal_Muhtadin_3.jpg", accentColor: "border-emerald-400", tagColor: "bg-emerald-100 text-emerald-700" },
                { title: { id: "Upacara Malanuh", en: "Malanuh Ceremony" }, category: { id: "Tradisi Hindu-Buddha", en: "Hindu-Buddhist Tradition" }, desc: { id: "Ritual persembahan kepada makhluk gaib yang mencerminkan pengaruh Hindu-Buddha pra-Islam dalam budaya Banjar.", en: "Offering ritual to supernatural beings reflecting pre-Islamic Hindu-Buddhist influence in Banjar culture." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tari_Japin_Sigam_2.jpg", accentColor: "border-amber-400", tagColor: "bg-amber-100 text-amber-700" },
                { title: { id: "Baayun Maulid", en: "Baayun Maulid" }, category: { id: "Tradisi Kelahiran", en: "Birth Tradition" }, desc: { id: "Tradisi mengayun bayi dalam ayunan berhias indah sebagai ungkapan syukur dan doa keselamatan.", en: "Tradition of swinging babies in beautifully decorated cradles as an expression of gratitude and prayer for safety." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sanggar_Seni_Galuh_Banjar_1.jpg", accentColor: "border-rose-400", tagColor: "bg-rose-100 text-rose-700" },
                { title: { id: "Aruh Ganal", en: "Aruh Ganal" }, category: { id: "Festival Panen Dayak", en: "Dayak Harvest Festival" }, desc: { id: "Festival panen besar suku Dayak yang merayakan hasil bumi dengan tarian, musik tradisional, dan sesaji.", en: "Grand harvest festival of the Dayak people celebrating the earth's bounty with dances, traditional music, and offerings." }, img: "https://commons.wikimedia.org/wiki/Special:FilePath/Grup_Musik_Panting.jpg", accentColor: "border-violet-400", tagColor: "bg-violet-100 text-violet-700" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1, duration:0.6 }}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row border-l-4 ${item.accentColor}`}>
                  <div className="relative w-full md:w-48 h-52 md:h-auto shrink-0 overflow-hidden">
                    <img src={item.img} alt={t(item.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  </div>
                  <div className="p-7 flex flex-col justify-center flex-1">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-3 ${item.tagColor}`}>{t(item.category)}</span>
                    <h3 className="text-xl font-heading font-bold text-river-blue mb-3 leading-tight">{t(item.title)}</h3>
                    <p className="text-sm text-river-blue/60 font-body leading-relaxed">{t(item.desc)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="py-20 md:py-28 bg-river-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-warm-gold)_0%,_transparent_70%)]"/>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView className="max-w-2xl mb-16">
              <span className="text-warm-gold font-bold uppercase tracking-[0.25em] text-xs mb-5 block">{t({ id: "Filosofi Hidup", en: "Philosophy of Life" })}</span>
              <p className="text-4xl md:text-5xl font-heading italic text-warm-gold mb-6 leading-tight">"Waja Sampai Kaputing"</p>
              <p className="text-lg text-white/55 font-body leading-relaxed">{t({ id: "Semangat perjuangan yang tak pernah padam hingga akhir — tentang ketangguhan, keramahtamahan, dan hubungan harmonis dengan alam.", en: "A fighting spirit that never fades until the end — about resilience, hospitality, and harmonious relationships with nature." })}</p>
            </FadeInView>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {philosophyValues.map((val, i) => (
                <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
                  className={`rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors ${i===0?"bg-warm-gold/20":"bg-white/5"}`}>
                  <div className="font-bold text-white text-xl mb-2">{val.title}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">{t(val.sub)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
