"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/animations/FadeInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/content/blog/posts";
import { motion } from "framer-motion";
import { Clock, User, ArrowRight, Calendar } from "lucide-react";

export default function Blog() {
  const { t } = useLanguage();
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <NavigationBar />
      <PageTransitionWrapper>
        
        {/* ── HEADER ── */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
           <div className="max-w-7xl mx-auto px-6">
              <FadeInView>
                 <span className="text-warm-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4 block text-center">Journal & Archive</span>
                 <h1 className="text-6xl md:text-8xl font-black text-river-blue tracking-tighter leading-none text-center mb-16">
                    Membuka <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-gold to-river-blue">Cerita.</span>
                 </h1>
              </FadeInView>

              {/* Featured Post */}
              <FadeInView delay={0.2}>
                 <Link href={`/blog/${featuredPost.slug}`} className="group block relative rounded-[4rem] overflow-hidden bg-river-blue aspect-[21/9] min-h-[400px]">
                    <Image
                       src={featuredPost.image}
                       alt={t(featuredPost.title)}
                       fill
                       className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-river-blue via-river-blue/20 to-transparent" />
                    
                    <div className="absolute bottom-16 left-16 right-16">
                       <span className="px-4 py-1 rounded-full bg-warm-gold text-river-blue font-black text-[9px] uppercase tracking-widest mb-6 inline-block">
                          {t(featuredPost.category)}
                       </span>
                       <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 group-hover:text-warm-gold transition-colors">
                          {t(featuredPost.title)}
                       </h2>
                       <p className="text-white/60 font-medium max-w-2xl mb-8 leading-relaxed line-clamp-2">
                          {t(featuredPost.excerpt)}
                       </p>
                       <div className="flex items-center gap-8 text-white/40 text-xs font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-2"><User size={14} /> {featuredPost.author}</span>
                          <span className="flex items-center gap-2"><Calendar size={14} /> {featuredPost.date}</span>
                          <span className="flex items-center gap-2"><Clock size={14} /> {featuredPost.readTime}</span>
                       </div>
                    </div>
                 </Link>
              </FadeInView>
           </div>
        </section>

        {/* ── GRID ── */}
        <SectionWrapper className="py-32">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {otherPosts.map((post, i) => (
                    <FadeInView key={post.slug} delay={i * 0.1}>
                       <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white rounded-[3.5rem] border border-slate-100 overflow-hidden hover:shadow-premium transition-all duration-700">
                          <div className="relative aspect-[16/10] overflow-hidden">
                             <Image
                                src={post.image}
                                alt={t(post.title)}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                             />
                             <div className="absolute inset-0 bg-river-blue/10 group-hover:bg-transparent transition-colors" />
                             <div className="absolute top-8 left-8">
                                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-river-blue font-black text-[8px] uppercase tracking-widest border border-slate-100">
                                   {t(post.category)}
                                </span>
                             </div>
                          </div>
                          
                          <div className="p-10 flex flex-col flex-1">
                             <div className="flex items-center gap-4 text-[10px] font-black text-river-blue/20 uppercase tracking-widest mb-6">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 rounded-full bg-river-blue/20" />
                                <span>{post.readTime}</span>
                             </div>
                             <h3 className="text-2xl font-black text-river-blue mb-6 tracking-tight leading-tight group-hover:text-warm-gold transition-colors">
                                {t(post.title)}
                             </h3>
                             <p className="text-sm text-river-blue/50 font-medium leading-relaxed mb-8 line-clamp-3">
                                {t(post.excerpt)}
                             </p>
                             <div className="mt-auto flex items-center gap-2 text-warm-gold font-black text-[10px] uppercase tracking-widest">
                                Read More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                             </div>
                          </div>
                       </Link>
                    </FadeInView>
                 ))}
              </div>
           </div>
        </SectionWrapper>

      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
