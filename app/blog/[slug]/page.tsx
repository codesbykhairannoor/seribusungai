"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/content/blog/posts";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  Bookmark,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function BlogDetail() {
  const { t } = useLanguage();
  const params = useParams();
  const router = useRouter();
  
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    if (typeof window !== "undefined") router.push("/blog");
    return null;
  }

  const currentIndex = blogPosts.indexOf(post);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];
  const prevPost = blogPosts[(currentIndex - 1 + blogPosts.length) % blogPosts.length];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <NavigationBar />
      <PageTransitionWrapper>
        
        {/* ── IMMERSIVE HERO ── */}
        <section className="relative h-[80vh] flex items-end overflow-hidden bg-river-blue">
           <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0"
           >
              <Image
                 src={post.image}
                 alt={t(post.title)}
                 fill
                 className="object-cover brightness-[0.4] contrast-[1.1]"
                 priority
              />
           </motion.div>
           
           <div className="absolute inset-0 bg-gradient-to-t from-river-blue via-river-blue/20 to-transparent z-10" />

           <div className="relative z-20 max-w-5xl mx-auto px-6 pb-24 w-full">
              <FadeInView>
                 <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-warm-gold transition-colors text-[10px] uppercase font-black tracking-widest mb-12">
                    <ArrowLeft size={14} /> Back to Journal
                 </Link>
                 <div className="flex gap-4 mb-8">
                    <span className="px-4 py-1 rounded-full bg-warm-gold text-river-blue font-black text-[9px] uppercase tracking-widest">
                       {t(post.category)}
                    </span>
                 </div>
                 <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-12">
                    {t(post.title)}
                 </h1>
                 <div className="flex flex-wrap items-center gap-8 text-white/40 text-[10px] font-black uppercase tracking-widest">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-warm-gold flex items-center justify-center text-river-blue">
                          <User size={14} />
                       </div>
                       <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2"><Calendar size={14} /> {post.date}</div>
                    <div className="flex items-center gap-2"><Clock size={14} /> {post.readTime} reading</div>
                 </div>
              </FadeInView>
           </div>
        </section>

        {/* ── CONTENT ── */}
        <SectionWrapper className="py-32">
           <div className="max-w-4xl mx-auto px-6">
              <FadeInView>
                 <div className="relative group mb-20 overflow-hidden rounded-[3rem] p-12 bg-slate-50 border border-slate-100 font-heading text-2xl md:text-3xl text-river-blue/80 leading-relaxed text-center">
                    <div className="absolute top-0 left-0 w-2 h-full bg-warm-gold" />
                    "{t(post.excerpt)}"
                 </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                 <div className="prose prose-2xl prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:font-medium prose-p:text-river-blue/70 prose-p:leading-[1.8] font-body">
                    <p className="text-2xl first-letter:text-7xl first-letter:font-black first-letter:text-warm-gold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                       {t(post.content)}
                    </p>
                    
                    <p className="mt-8">
                       {/* This is a placeholder for actual multi-paragraph content. 
                           In a real app, 'post.content' would be multiple strings or markdown.
                           For this demo, we can append some thematic filler based on the topic. */}
                       {t({
                         id: "Keberlanjutan narasi ini adalah bukti bahwa Banjarmasin bukan sekadar koordinat di peta, melainkan kumpulan ingatan yang terus mengalir. Setiap sudut kota, dari sungai hingga gedung modern, menyimpan lapisan cerita yang menunggu untuk dikupas kembali oleh generasi mendatang.",
                         en: "The continuation of this narrative is proof that Banjarmasin is not just a coordinate on a map, but a collection of flowing memories. Every corner of the city, from the river to modern buildings, holds layers of stories waiting to be peeled back by future generations."
                       })}
                    </p>
                 </div>
              </FadeInView>

              {/* Interaction Footer */}
              <FadeInView delay={0.4}>
                 <div className="mt-24 pt-12 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex gap-4">
                       <button className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-river-blue/40 hover:bg-river-blue hover:text-white transition-all">
                          <Share2 size={20} />
                       </button>
                       <button className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-river-blue/40 hover:bg-warm-gold hover:text-white transition-all">
                          <Bookmark size={20} />
                       </button>
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-river-blue/20">
                       Shared from Banjarmasin Archive
                    </div>
                 </div>
              </FadeInView>
           </div>
        </SectionWrapper>

        {/* ── NAVIGATION ── */}
        <section className="bg-slate-50 border-t border-slate-100 py-24">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
                 <Link href={`/blog/${prevPost.slug}`} className="bg-slate-50 p-12 group flex items-center gap-8 hover:bg-white transition-colors">
                    <ChevronLeft size={32} className="text-river-blue/20 group-hover:text-warm-gold transition-colors shrink-0" />
                    <div className="text-left">
                       <span className="text-[9px] font-black uppercase tracking-widest text-river-blue/20 mb-2 block">Previous Reading</span>
                       <h4 className="text-xl font-black text-river-blue group-hover:text-warm-gold transition-colors line-clamp-1">{t(prevPost.title)}</h4>
                    </div>
                 </Link>
                 <Link href={`/blog/${nextPost.slug}`} className="bg-slate-50 p-12 group flex items-center justify-end gap-8 hover:bg-white transition-colors text-right">
                    <div className="text-right">
                       <span className="text-[9px] font-black uppercase tracking-widest text-river-blue/20 mb-2 block">Next Reading</span>
                       <h4 className="text-xl font-black text-river-blue group-hover:text-warm-gold transition-colors line-clamp-1">{t(nextPost.title)}</h4>
                    </div>
                    <ChevronRight size={32} className="text-river-blue/20 group-hover:text-warm-gold transition-colors shrink-0" />
                 </Link>
              </div>
           </div>
        </section>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
