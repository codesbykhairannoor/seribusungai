"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Compass } from "lucide-react";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <NavigationBar />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-32 h-32 bg-warm-gold/10 rounded-full flex items-center justify-center text-warm-gold mx-auto mb-8"
          >
            <Compass size={64} className="animate-spin-slow" />
          </motion.div>

          <h1 className="text-8xl font-heading font-bold text-river-blue mb-4">404</h1>
          <h2 className="text-2xl font-heading font-bold text-river-blue mb-8 uppercase tracking-widest">Halaman Tidak Ditemukan</h2>
          
          <p className="text-river-blue/60 max-w-md mx-auto mb-12 font-body">
            Sepertinya Anda tersesat di tengah riaknya sungai Martapura. Mari kembali ke dermaga utama.
          </p>

          <Link 
            href="/" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-river-blue text-white rounded-full font-bold shadow-xl hover:bg-river-blue-900 transition-all"
          >
            <Home size={20} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
