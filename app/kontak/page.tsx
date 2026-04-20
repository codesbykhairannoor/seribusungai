"use client";

import React, { useState } from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import Accordion from "@/components/ui/Accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Instagram, Facebook, Youtube } from "@/components/ui/BrandIcons";

export default function Kontak() {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      id: "faq-1",
      title: { id: "Kapan waktu terbaik berkunjung ke Pasar Terapung?", en: "When is the best time to visit the Floating Market?" },
      content: {
        id: "Waktu terbaik adalah sepagi mungkin, mulai jam 05:30 hingga 08:30 WITA. Disarankan berangkat subuh agar tidak ketinggalan keramaian transaksi.",
        en: "The best time is as early as possible, from 5:30 AM to 8:30 AM WITA. It's recommended to leave at dawn to catch the height of the transactions.",
      },
    },
    {
      id: "faq-2",
      title: { id: "Berapa biaya sewa klotok?", en: "How much is the klotok boat rental?" },
      content: {
        id: "Biaya sewa klotok bervariasi antara Rp 350.000 hingga Rp 500.000 per perahu, tergantung rute dan kapasitas (bisa diisi hingga 10 orang).",
        en: "Klotok rental costs vary between IDR 350,000 to IDR 500,000 per boat, depending on the route and capacity (can accommodate up to 10 people).",
      },
    },
    {
      id: "faq-3",
      title: { id: "Apakah ada biaya masuk ke masjid bersejarah?", en: "Is there an entry fee for historical mosques?" },
      content: {
        id: "Masjid Sultan Suriansyah dan Sabilal Muhtadin tidak memungut biaya masuk. Namun, sumbangan sukarela sangat diapresiasi dan diharapkan berpakaian sopan.",
        en: "Sultan Suriansyah and Sabilal Muhtadin mosques do not charge an entry fee. However, voluntary donations are appreciated and modest clothing is expected.",
      },
    },
    {
      id: "faq-4",
      title: { id: "Bagaimana cara menuju Banjarmasin dari Jakarta?", en: "How to get to Banjarmasin from Jakarta?" },
      content: {
        id: "Penerbangan langsung tersedia dari Bandara Soekarno-Hatta ke Bandara Syamsudin Noor (BDJ) dengan durasi sekitar 1,5–2 jam. Beberapa maskapai melayani rute ini setiap hari.",
        en: "Direct flights are available from Soekarno-Hatta Airport to Syamsudin Noor Airport (BDJ) with a duration of about 1.5–2 hours. Several airlines serve this route daily.",
      },
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: { id: "Alamat Kantor", en: "Office Address" },
      value: "Jl. Jendral Sudirman No. 1, Kel. Kertak Baru Ulu, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70114",
    },
    {
      icon: Phone,
      label: { id: "Telepon / WhatsApp", en: "Phone / WhatsApp" },
      value: "+62 (511) 123-4567 / +62 811-555-000",
    },
    {
      icon: Mail,
      label: { id: "Email", en: "Email" },
      value: "info@banjarmasintourism.go.id",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 6000);
    }, 1500);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />

      <PageTransitionWrapper>
        <HeroSection
          variant="parallax"
          backgroundSrc="https://commons.wikimedia.org/wiki/Special:FilePath/Taman_Siring_Banjarmasin.jpg"
          backgroundAlt={{ id: "Kontak Dinas Pariwisata", en: "Contact Tourism Office" }}
          eyebrow={{ id: "Hubungi Kami", en: "Get in Touch" }}
          headline={{ id: "Mari Terhubung", en: "Let's Connect" }}
          subheadline={{
            id: "Kami siap membantu merencanakan pengalaman tak terlupakan Anda di Banjarmasin.",
            en: "We are ready to help plan your unforgettable experience in Banjarmasin.",
          }}
          overlayOpacity={0.45}
        />

        {/* ── Contact + Form ── */}
        <SectionWrapper background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <FadeInView direction="right">
              <h2 className="text-4xl font-heading font-bold text-river-blue mb-10">
                {t({ id: "Informasi Kontak", en: "Contact Information" })}
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-5 items-start group"
                  >
                    <div className="w-14 h-14 bg-river-blue-50 rounded-2xl flex items-center justify-center text-river-blue shrink-0 group-hover:bg-warm-gold group-hover:text-white transition-colors duration-300">
                      <info.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-river-blue uppercase tracking-widest text-[10px] mb-2">
                        {t(info.label)}
                      </h4>
                      <p className="text-river-blue/60 leading-relaxed text-sm">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <h4 className="font-bold text-river-blue uppercase tracking-[0.2em] text-[10px] mb-5">
                {t({ id: "Media Sosial Kami", en: "Our Social Media" })}
              </h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-2xl bg-warm-gold/8 flex items-center justify-center text-warm-gold hover:bg-warm-gold hover:text-white transition-colors shadow-sm"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 aspect-video rounded-3xl overflow-hidden shadow-xl relative">
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Titik_Nol_Kilometer_Kota_Banjarmasin.jpg"
                  alt="Banjarmasin location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-river-blue/30 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl">
                    <div className="flex items-center gap-2 text-river-blue font-bold text-sm">
                      <MapPin size={16} className="text-warm-gold" />
                      Banjarmasin, Kalimantan Selatan
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>

            {/* Form */}
            <FadeInView direction="left">
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-river-blue/5">
                <h3 className="text-2xl font-heading font-bold text-river-blue mb-8">
                  {t({ id: "Kirim Pesan", en: "Send a Message" })}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-river-blue/40 ml-1">
                        {t({ id: "Nama Lengkap", en: "Full Name" })}
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-river-blue-50 border-2 border-transparent rounded-2xl p-4 focus:outline-none focus:border-warm-gold transition-all text-river-blue placeholder:text-river-blue/30"
                        placeholder={t({ id: "Nama Anda", en: "Your Name" })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-river-blue/40 ml-1">
                        {t({ id: "Email", en: "Email" })}
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full bg-river-blue-50 border-2 border-transparent rounded-2xl p-4 focus:outline-none focus:border-warm-gold transition-all text-river-blue placeholder:text-river-blue/30"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-river-blue/40 ml-1">
                      {t({ id: "Subjek", en: "Subject" })}
                    </label>
                    <select className="w-full bg-river-blue-50 border-2 border-transparent rounded-2xl p-4 focus:outline-none focus:border-warm-gold transition-all text-river-blue appearance-none">
                      <option>{t({ id: "Informasi Wisata", en: "Tourism Information" })}</option>
                      <option>{t({ id: "Kerjasama", en: "Partnership" })}</option>
                      <option>{t({ id: "Lainnya", en: "Other" })}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-river-blue/40 ml-1">
                      {t({ id: "Pesan", en: "Message" })}
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-river-blue-50 border-2 border-transparent rounded-2xl p-4 focus:outline-none focus:border-warm-gold transition-all text-river-blue placeholder:text-river-blue/30 resize-none"
                      placeholder={t({ id: "Tulis pesan Anda di sini...", en: "Write your message here..." })}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-warm-gold hover:bg-warm-gold-dark text-white font-bold rounded-2xl shadow-xl shadow-warm-gold/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={18} />
                        {t({ id: "Kirim Pesan", en: "Send Message" })}
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {formStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-emerald-50 text-emerald-700 rounded-2xl text-center text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <CheckCircle size={18} />
                        {t({ id: "Pesan berhasil terkirim! Kami akan menghubungi Anda segera.", en: "Message sent successfully! We will contact you soon." })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </FadeInView>
          </div>
        </SectionWrapper>

        {/* ── FAQ ── */}
        <SectionWrapper background="light">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <FadeInView>
                <h2 className="text-4xl font-heading font-bold text-river-blue mb-4">
                  {t({ id: "Pertanyaan Umum", en: "Frequently Asked Questions" })}
                </h2>
                <p className="text-river-blue/50 font-body">
                  {t({ id: "Pertanyaan yang sering diajukan seputar wisata Banjarmasin.", en: "Frequently asked questions about touring Banjarmasin." })}
                </p>
              </FadeInView>
            </div>
            <FadeInView>
              <Accordion items={faqs} />
            </FadeInView>
          </div>
        </SectionWrapper>
      </PageTransitionWrapper>

      <Footer />
    </main>
  );
}
