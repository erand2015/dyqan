"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Scale, ShieldCheck, Gavel, FileText, Menu, X, ChevronRight } from "lucide-react";
import ShinyButton from "@/components/magicui/shiny-button";
import InteractiveGridPattern from "@/components/magicui/interactive-grid";
import Link from "next/link";

// --- ANIMACIONET ---
const gavelVariants: Variants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: [-25, 15, -20, 10, 0], 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const scaleVariants: Variants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: [-10, 10, -10, 10, 0], 
    transition: { duration: 1.2, ease: "easeInOut" } 
  }
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitoron levizjen e mouse (scroll)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] text-white antialiased selection:bg-[#c5a059] selection:text-black scroll-smooth overflow-x-hidden">
      
      {/* --- NAVBAR DINAMIK --- */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] px-4 md:px-8 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? "opacity-0 -translate-y-full pointer-events-none" 
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-6xl mx-auto py-6">
          <div className="flex items-center justify-between px-6 md:px-8 py-5 rounded-[24px] bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl relative z-[110]">
            
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="p-2.5 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 group-hover:bg-[#c5a059] transition-all">
                <Scale className="w-6 h-6 text-[#c5a059] group-hover:text-black" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tighter leading-none uppercase italic">
                  Lex <span className="text-[#c5a059]">Associates</span>
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase opacity-40 font-bold mt-1 italic">Studio Elitare</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
              <Link href="/sherbimet" className="hover:text-[#c5a059] transition-all">Shërbimet</Link>
              <Link href="/kontakt" className="hover:text-[#c5a059] transition-all">Kontakt</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/kontakt">
                <button className="hidden md:block bg-[#c5a059] text-black px-6 py-3 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:bg-white transition-all shadow-lg">
                  Konsultë
                </button>
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[#c5a059]">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden text-left">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />
          <InteractiveGridPattern className="opacity-10" />
        </div>

        <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.85] uppercase mb-10 italic">
              Drejtësi që <br /> <span className="text-[#c5a059]">ju takon.</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-start">
              <Link href="/kontakt">
                <ShinyButton className="px-12 py-6 bg-[#c5a059] text-black text-lg font-black rounded-2xl shadow-[0_20px_50px_rgba(197,160,89,0.3)]">
                  Rezervo Konsultë
                </ShinyButton>
              </Link>
              <Link href="/sherbimet">
                <button className="px-12 py-6 border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-[0.3em] hover:bg-white/5 backdrop-blur-md transition-all">
                  Eksploro Shërbimet
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div whileHover="animate" className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[40px] hover:border-[#c5a059]/30 transition-all text-left">
              <motion.div variants={scaleVariants} className="mb-8 w-fit">
                <Scale className="w-12 h-12 text-[#c5a059]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">E Drejta Tregtare</h3>
              <p className="text-white/40 leading-relaxed mb-6">Konsulencë strategjike për biznesin tuaj dhe mbrojtje të interesave tregtare.</p>
              <Link href="/sherbimet" className="flex items-center gap-2 text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em]">
                Më shumë <ChevronRight size={14} />
              </Link>
            </motion.div>

            <motion.div whileHover="animate" className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[40px] hover:border-[#c5a059]/30 transition-all relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 p-8 opacity-5"><Gavel size={120} /></div>
              <motion.div variants={gavelVariants} className="mb-8 w-fit">
                <Gavel className="w-12 h-12 text-[#c5a059]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Mbrojtje Penale</h3>
              <p className="text-white/40 leading-relaxed mb-6">Përfaqësim ligjor i specializuar në çështjet penale me profesionalizëm maksimal.</p>
              <Link href="/sherbimet" className="flex items-center gap-2 text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em]">
                Më shumë <ChevronRight size={14} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="bg-[#c5a059] p-10 rounded-[40px] text-black transition-all text-left">
              <div className="mb-8"><ShieldCheck className="w-12 h-12 text-black" /></div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Siguri Ligjore</h3>
              <p className="text-black/70 leading-relaxed mb-6 font-medium">Ne sigurohemi që çdo veprim i juaj të jetë në përputhje të plotë me ligjin.</p>
              <Link href="/kontakt" className="flex items-center gap-2 text-black text-[10px] font-black uppercase tracking-[0.2em]">
                Na Kontaktoni <ChevronRight size={14} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center">
        <div className="opacity-20 text-[10px] uppercase tracking-[0.5em]">
          Lex Associates • 2026 • Studio Juridike Elitare
        </div>
      </footer>
    </main>
  );
}