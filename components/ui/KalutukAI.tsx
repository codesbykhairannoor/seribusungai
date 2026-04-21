"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ArrowRight,
  Info,
  Ship
} from "lucide-react";
import { useChatLimit } from "@/hooks/useChatLimit";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  role: "user" | "ai";
  content: string;
}

const TEMPLATES = [
  { id: "Kenapa Banjarmasin disebut Kota Seribu Sungai?", en: "Why is Banjarmasin called City of 1000 Rivers?" },
  { id: "Apa saja kuliner wajib di Banjarmasin?", en: "What are the must-try cuisines in Banjarmasin?" },
  { id: "Ceritakan tentang sejarah Pelabuhan Lama.", en: "Tell me about the history of Old Harbor." },
  { id: "Bagaimana filosofi kain Sasirangan?", en: "What is Sasirangan cloth philosophy?" }
];

export default function KalutukAI() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { count, isLimited, incrementLimit, limit } = useChatLimit();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (content: string) => {
    if (!content.trim() || isLoading || isLimited) return;

    const userMessage: Message = { role: "user", content };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      if (data.content) {
        setMessages(prev => [...prev, { role: "ai", content: data.content }]);
        incrementLimit();
      } else {
        throw new Error(data.error || "Gagal mendapatkan respons");
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: "ai", content: "Maaf, dingsanak. Ada kendala teknis. Silakan coba lagi nanti." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-body">
      {/* ── FLOATING LABEL ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 0 }}
            animate={{ opacity: 1, x: 0, y: -20 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 30,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
            className="absolute bottom-full right-0 mb-4 whitespace-nowrap"
          >
            <div className="bg-white px-4 py-2 rounded-2xl shadow-premium-soft border border-slate-100 flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-warm-gold animate-pulse" />
               <span className="text-[10px] font-black text-river-blue uppercase tracking-widest">
                  {language === "id" ? "Chat dengan KalutukAI" : "Chat with KalutukAI"}
               </span>
               {/* Arrow pointing down */}
               <div className="absolute top-full right-6 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45 -translate-y-1.5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FLOAT BUTTON ── */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-river-blue text-white shadow-premium-glow flex items-center justify-center relative overflow-hidden group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
               <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
               <Ship size={24} className="group-hover:rotate-12 transition-transform" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-tr from-warm-gold/20 to-transparent" />
      </motion.button>

      {/* ── CHAT WINDOW ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[90vw] md:w-[420px] h-[600px] bg-white rounded-[2.5rem] shadow-premium-deep border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-river-blue p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-warm-gold flex items-center justify-center text-river-blue">
                   <Ship size={20} />
                </div>
                <div>
                   <h3 className="text-white font-black text-sm tracking-tight">KalutukAI</h3>
                   <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Asisten Lokal Banjarmasin</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                 <span className="text-[10px] font-black text-warm-gold">{count}/{limit}</span>
              </div>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.length === 0 && (
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <p className="text-river-blue/60 text-sm leading-relaxed">
                      {language === "id" 
                        ? "Halo dingsanak! Saya **KalutukAI**, pemandu digital Anda di Kota Seribu Sungai. Tak usah supan (malu), silakan kunci (tanya) apa saja tentang sejarah, budaya, atau wisata di sini."
                        : "Hello friends! I'm **KalutukAI**, your digital guide in the City of a Thousand Rivers. Don't be shy, feel free to ask anything about history, culture, or tourism here."}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-[10px] uppercase font-black text-slate-300 tracking-[0.2em] px-2 text-center">Topik Populer:</p>
                    {TEMPLATES.map((tmpl, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(language === "id" ? tmpl.id : tmpl.en)}
                        className="w-full text-left p-4 rounded-2xl bg-white border border-slate-100 text-xs font-bold text-river-blue hover:bg-river-blue hover:text-white transition-all group flex items-center justify-between"
                      >
                         {language === "id" ? tmpl.id : tmpl.en} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-warm-gold text-river-blue" : "bg-slate-100 text-river-blue/40"}`}>
                       {msg.role === "user" ? <User size={14} /> : <Ship size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-river-blue text-white rounded-tr-none" : "bg-slate-50 text-river-blue/80 rounded-tl-none border border-slate-100"}`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-river-blue/40">
                       <Ship size={14} />
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100 flex gap-1">
                       <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-river-blue/30 rounded-full" />
                       <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-river-blue/30 rounded-full" />
                       <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-river-blue/30 rounded-full" />
                    </div>
                  </div>
                </div>
              )}

              {isLimited && (
                <div className="p-4 bg-warm-gold/10 border border-warm-gold/20 rounded-2xl flex gap-3 items-center">
                   <Info size={16} className="text-warm-gold shrink-0" />
                   <p className="text-[10px] font-bold text-river-blue/60 leading-tight">
                     Dingsanak, Anda telah mencapai batas 10 pesan harian. Terima kasih sudah menggunakan KalutukAI!
                   </p>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-slate-100">
               <form 
                 onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                 className="relative"
               >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading || isLimited}
                    placeholder={isLimited ? "Limit harian tercapai..." : (language === "id" ? "Tanya KalutukAI..." : "Ask KalutukAI...")}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 pr-12 text-sm font-bold text-river-blue focus:outline-none focus:border-warm-gold transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading || isLimited}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-river-blue text-white flex items-center justify-center hover:bg-warm-gold hover:text-river-blue transition-all disabled:opacity-20"
                  >
                     <Send size={18} />
                  </button>
               </form>
               <div className="mt-4 flex items-center justify-center gap-2 opacity-10">
                  <span className="text-[7px] font-black uppercase tracking-[0.4em] text-river-blue">Archive Journal AI</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
