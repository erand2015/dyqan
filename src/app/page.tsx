"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scale, 
  ShieldCheck, 
  Gavel, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

// Komponentet e MagicUI - Sigurohu qe ekzistojne ne projektin tend
import ShinyButton from "@/components/magicui/shiny-button";
import InteractiveGridPattern from "@/components/magicui/interactive-grid";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] text-white antialiased overflow-x-hidden selection:bg-[#c5a059]">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-[100] px-4 md:px-8 transition-all duration-500 ${isScrolled && !isOpen ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"}`}>
        <div className="max-w-6xl mx-auto py-6 relative">
          <div className="flex items-center justify-between px-6 py-5 rounded-[24px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
            <Link href="/" className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-[#c5a059]" />
              <span className="text-xl font-black uppercase italic italic tracking-tighter">Lex <span className="text-[#c5a059]">Associates</span></span>
            </Link>

            <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/50">
              <Link href="/sherbimet" className="hover:text-[#c5a059]">Shërbimet</Link>
              <Link href="/kontakt" className="hover:text-[#c5a059]">Kontakt</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/kontakt" className="hidden md:block">
                <button className="bg-[#c5a059] text-black px-5 py-2.5 rounded-xl font-bold text-[10px] uppercase">Konsultë</button>
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[#c5a059]">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-[110%] left-0 right-0 bg-[#0a0a0a] border border-white/10 rounded-[30px] p-8 lg:hidden z-[150] shadow-2xl mx-2">
                <div className="flex flex-col gap-6 text-center">
                  <Link href="/sherbimet" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase">Shërbimet</Link>
                  <Link href="/kontakt" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase">Kontakt</Link>
                  <Link href="/kontakt" onClick={() => setIsOpen(false)} className="w-full bg-[#c5a059] text-black py-4 rounded-xl font-bold uppercase text-xs">Rezervo Konsultë</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303] z-10" />
          <InteractiveGridPattern className="opacity-10" />
        </div>
        <div className="relative z-20 px-6 max-w-6xl mx-auto w-full text-left">
          <h1 className="text-6xl md:text-[100px] font-black uppercase leading-[0.85] italic mb-10">Drejtësi që <br/><span className="text-[#c5a059]">ju takon.</span></h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt"><ShinyButton className="px-10 py-5 bg-[#c5a059] text-black font-black rounded-xl">Rezervo Konsultë</ShinyButton></Link>
            <Link href="/sherbimet"><button className="px-10 py-5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest">Eksploro</button></Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[40px] text-left">
          <Scale className="w-10 h-10 text-[#c5a059] mb-6" />
          <h3 className="text-xl font-bold mb-4 uppercase italic">Tregtare</h3>
          <p className="text-white/40 text-sm mb-6 uppercase tracking-tighter leading-tight">Mbrojtje për biznesin tuaj në çdo hap.</p>
          <Link href="/sherbimet" className="text-[#c5a059] text-[10px] font-bold uppercase">Më shumë</Link>
        </div>
        <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[40px] text-left">
          <Gavel className="w-10 h-10 text-[#c5a059] mb-6" />
          <h3 className="text-xl font-bold mb-4 uppercase italic">Penale</h3>
          <p className="text-white/40 text-sm mb-6 uppercase tracking-tighter leading-tight">Përfaqësim profesional dhe mbrojtje rigoroze.</p>
          <Link href="/sherbimet" className="text-[#c5a059] text-[10px] font-bold uppercase">Më shumë</Link>
        </div>
        <div className="bg-[#c5a059] p-10 rounded-[40px] text-black text-left shadow-2xl shadow-[#c5a059]/10">
          <ShieldCheck className="w-10 h-10 text-black mb-6" />
          <h3 className="text-xl font-bold mb-4 uppercase italic">Siguri</h3>
          <p className="text-black/70 text-sm mb-6 uppercase tracking-tighter leading-tight font-bold">Zgjidhje ligjore të sigurta për ju.</p>
          <Link href="/kontakt" className="text-black text-[10px] font-extrabold uppercase">Na Kontaktoni</Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center opacity-20 text-[10px] uppercase tracking-[0.5em] font-bold">
        Lex Associates • 2026
      </footer>
    </main>
  );
}