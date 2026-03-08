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
  ArrowRight 
} from "lucide-react";
import ShinyButton from "@/components/magicui/shiny-button";
import InteractiveGridPattern from "@/components/magicui/interactive-grid";
import Link from "next/link"; // SIGUROHU QE ESHTE "next/link"

// --- ANIMACIONET ---
const menuVariants = {
  closed: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.2 } 
  },
  open: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      
      {/* --- NAVBAR --- */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] px-4 md:px-8 transition-all duration-700 ${
          isScrolled && !isOpen
            ? "opacity-0 -translate-y-full pointer-events-none" 
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-6xl mx-auto py-6 relative">
          <div className="flex items-center justify-between px-6 md:px-8 py-5 rounded-[24px] bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl relative z-[120]">
            
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20">
                <Scale className="w-5 h-5 text-[#c5a059]" />
              </div>
              <span className="text-lg font-black tracking-tighter uppercase italic">
                Lex <span className="text-[#c5a059]">Associates</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              <Link href="/sherbimet" className="hover:text-[#c5a059]">Shërbimet</Link>
              <Link href="/kontakt" className="hover:text-[#c5a059]">Kontakt</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/kontakt" className="hidden md:block">
                <button className="bg-[#c5a059] text-black px-6 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider">
                  Konsultë
                </button>
              </Link>
              
              {/* BUTONI I MENU-SE (CELULAR) */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden p-2 text-[#c5a059] bg-white/5 rounded-lg border border-white/10"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* --- MOBILE MENU DROPDOWN --- */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute top-[110%] left-0 right-0 bg-[#0a0a0a] border border-white/10 rounded-[30px] p-8 shadow-2xl lg:hidden z-[115] mx-2"
              >
                <div className="flex flex-col gap-6 text-center">
                  <Link 
                    href="/sherbimet" 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter"
                  >
                    Shërbimet
                  </Link>
                  <Link 
                    href="/kontakt" 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter"
                  >
                    Kontakt
                  </Link>
                  <div className="h-[1px] bg-white/5 w-full" />
                  <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-[#c5a059] text-black py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px]">
                      Rezervo Konsultë
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-left">
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
            <h1 className="text-6xl md:text-[100px] font-black tracking-tighter leading-[0.85] uppercase mb-10 italic">
              Drejtësi që <br /> <span className="text-[#c5a059]">ju takon.</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
                <ShinyButton className="px-10 py-5 bg-[#c5a059] text-black text-sm font-black rounded-xl">
                  Rezervo Konsultë
                </ShinyButton>
              </Link>
              <Link href="/sherbimet">
                <button className="px-10 py-5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/5 backdrop-blur-md">
                  Eksploro Shërbimet
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SHËRBIMET --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[40px]">
            <Scale className="w-10 h-10 text-[#c5a059] mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase italic">E Drejta Tregtare</h3>
            <p className="text-white/40 text-sm mb-6">Mbrojtje për biznesin tuaj.</p>
            <Link href="/sherbimet" className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest">Më shumë</Link>
          </div>
          <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[40px]">
            <Gavel className="w-10 h-10 text-[#c5a059] mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase italic">Mbrojtje Penale</h3>
            <p className="text-white/40 text-sm mb-6">Përfaqësim profesional.</p>
            <Link href="/sherbimet" className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest">Më shumë</Link>
          </div>
          <div className="bg-[#c5a059] p-10 rounded-[40px] text-black">
            <ShieldCheck className="w-10 h-10 text-black mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase italic">Siguri Ligjore</h3>
            <p className="text-black/70 text-sm mb-6">Gjithmonë pranë jush.</p>
            <Link href="/kontakt" className="text-black text-[10px] font-bold uppercase tracking-widest">Na Kontaktoni</Link>
          </div>
        </div>
      </section>

    </main>
  );
}