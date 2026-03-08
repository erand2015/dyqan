"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { 
  Scale, 
  ShieldCheck, 
  Gavel, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  ChevronUp,
  Users,
  Briefcase,
  Globe
} from "lucide-react";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import InteractiveGridPattern from "@/components/magicui/interactive-grid";

// --- ANIMACIONET ---
const cardHover: Variants = {
  initial: { y: 0 },
  animate: { y: -10, transition: { duration: 0.3, ease: "easeOut" } }
};

const iconAnimation: Variants = {
  initial: { scale: 1 },
  animate: { scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white antialiased selection:bg-[#c5a059] selection:text-black scroll-smooth overflow-x-hidden text-left">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 w-full z-[100] px-4 md:px-8 transition-all duration-700 ${isScrolled && !isOpen ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}`}>
        <div className="max-w-6xl mx-auto py-6 relative">
          <div className="flex items-center justify-between px-6 md:px-8 py-5 rounded-[24px] bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl relative z-[110]">
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="p-2.5 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 group-hover:bg-[#c5a059] transition-all">
                <Scale className="w-6 h-6 text-[#c5a059] group-hover:text-black" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tighter leading-none uppercase italic text-white">Lex <span className="text-[#c5a059]">Associates</span></span>
                <span className="text-[9px] tracking-[0.3em] uppercase opacity-40 font-bold mt-1 italic">Studio Elitare</span>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
              <Link href="/sherbimet" className="hover:text-[#c5a059] transition-all">Shërbimet</Link>
              <Link href="/kontakt" className="hover:text-[#c5a059] transition-all">Kontakt</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/kontakt" className="hidden md:block">
                <button className="bg-[#c5a059] text-black px-6 py-3 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:bg-white transition-all shadow-lg">Konsultë</button>
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[#c5a059]">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" className="w-full h-full object-cover opacity-20 grayscale" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />
          <InteractiveGridPattern className="opacity-10" />
        </div>
        <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] uppercase mb-10 italic">
            Drejtësi që <br /> <span className="text-[#c5a059]">ju takon.</span>
          </motion.h1>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/kontakt">
              <ShinyButton className="px-12 py-6 bg-[#c5a059] text-black text-lg font-black rounded-2xl shadow-[0_20px_50px_rgba(197,160,89,0.3)]">Rezervo Konsultë</ShinyButton>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-6 relative bg-[#030303]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-left">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a059] font-bold mb-4">Ekspertiza Jonë</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Shërbimet Juridike</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Tregtare (Zezë) */}
            <motion.div whileHover="animate" variants={cardHover} className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[48px] hover:border-[#c5a059]/30 transition-all group relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              <div>
                <motion.div variants={iconAnimation} className="mb-8 w-fit p-4 rounded-2xl bg-[#c5a059]/5 border border-[#c5a059]/10">
                  <Scale className="w-10 h-10 text-[#c5a059]" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter italic">E Drejta Tregtare</h3>
                <p className="text-white/40 leading-relaxed">Konsulencë strategjike për biznesin tuaj dhe mbrojtje të interesave tregtare.</p>
              </div>
              <Link href="/sherbimet" className="flex items-center gap-2 text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all mt-8">Më shumë <ChevronRight size={14} /></Link>
            </motion.div>

            {/* 2. Penale (Zezë) */}
            <motion.div whileHover="animate" variants={cardHover} className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[48px] hover:border-[#c5a059]/30 transition-all relative overflow-hidden group flex flex-col justify-between min-h-[380px]">
              <div className="absolute top-[-20px] right-[-20px] p-8 opacity-[0.03] rotate-12 scale-150"><Gavel size={200} /></div>
              <div>
                <motion.div variants={iconAnimation} className="mb-8 w-fit p-4 rounded-2xl bg-[#c5a059]/5 border border-[#c5a059]/10">
                  <Gavel className="w-10 h-10 text-[#c5a059]" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter italic">Mbrojtje Penale</h3>
                <p className="text-white/40 leading-relaxed">Përfaqësim ligjor i specializuar në çështjet penale me profesionalizëm maksimal.</p>
              </div>
              <Link href="/sherbimet" className="flex items-center gap-2 text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all mt-8">Më shumë <ChevronRight size={14} /></Link>
            </motion.div>

            {/* 3. Siguri Ligjore (GOLD) */}
            <motion.div whileHover={{ y: -10 }} className="bg-[#c5a059] p-10 rounded-[48px] text-black transition-all shadow-2xl flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="mb-8 p-4 rounded-2xl bg-black/10 w-fit">
                  <ShieldCheck className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter italic">Siguri Ligjore</h3>
                <p className="text-black/70 leading-relaxed font-medium italic">Ne sigurohemi që çdo veprim i juaj të jetë në përputhje të plotë me ligjin.</p>
              </div>
              <Link href="/kontakt" className="flex items-center gap-2 text-black text-[10px] font-black uppercase tracking-[0.2em] mt-8">Na Kontaktoni <ChevronRight size={14} /></Link>
            </motion.div>

            {/* 4. Familjare (GOLD - TANI SI SIGURIA LIGJORE) */}
            <motion.div whileHover={{ y: -10 }} className="bg-[#c5a059] p-10 rounded-[48px] text-black transition-all shadow-2xl flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="mb-8 p-4 rounded-2xl bg-black/10 w-fit">
                  <Users className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter italic">E Drejta Familjare</h3>
                <p className="text-black/70 leading-relaxed font-medium italic">Zgjidhje ligjore për çështje të divorcit, trashëgimisë dhe kujdestarisë.</p>
              </div>
              <Link href="/sherbimet" className="flex items-center gap-2 text-black text-[10px] font-black uppercase tracking-[0.2em] mt-8">Më shumë <ChevronRight size={14} /></Link>
            </motion.div>

            {/* 5. E Drejta e Punës (Zezë) */}
            <motion.div whileHover="animate" variants={cardHover} className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[48px] hover:border-[#c5a059]/30 transition-all group flex flex-col justify-between min-h-[380px]">
              <div>
                <motion.div variants={iconAnimation} className="mb-8 w-fit p-4 rounded-2xl bg-[#c5a059]/5 border border-[#c5a059]/10">
                  <Briefcase className="w-10 h-10 text-[#c5a059]" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter italic">Marrëdhëniet e Punës</h3>
                <p className="text-white/40 leading-relaxed">Mbrojtje për punëdhënësit dhe punëmarrësit në mosmarrëveshjet kontraktuale.</p>
              </div>
              <Link href="/sherbimet" className="flex items-center gap-2 text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all mt-8">Më shumë <ChevronRight size={14} /></Link>
            </motion.div>

            {/* 6. Pronësia Intelektuale (Zezë) */}
            <motion.div whileHover="animate" variants={cardHover} className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[48px] hover:border-[#c5a059]/30 transition-all group flex flex-col justify-between min-h-[380px]">
              <div>
                <motion.div variants={iconAnimation} className="mb-8 w-fit p-4 rounded-2xl bg-[#c5a059]/5 border border-[#c5a059]/10">
                  <Globe className="w-10 h-10 text-[#c5a059]" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter italic">Pronësia Intelektuale</h3>
                <p className="text-white/40 leading-relaxed">Mbrojtja e markave, patentave dhe të drejtave të autorit në nivel ndërkombëtar.</p>
              </div>
              <Link href="/sherbimet" className="flex items-center gap-2 text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all mt-8">Më shumë <ChevronRight size={14} /></Link>
            </motion.div>

          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center opacity-20 text-[10px] uppercase tracking-[0.5em] font-bold">
        Lex Associates • 2026 • Studio Juridike Elitare
      </footer>

      {/* --- BACK TO TOP --- */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} onClick={scrollToTop} className="fixed bottom-8 right-8 z-[150] p-4 rounded-full bg-[#c5a059] text-black shadow-2xl hover:bg-white transition-all group">
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

    </main>
  );
}