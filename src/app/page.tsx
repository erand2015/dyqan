"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Scale, ShieldCheck, Gavel, FileText, Phone, ChevronRight, Menu, X } from "lucide-react";
import ShinyButton from "@/components/magicui/shiny-button";
import InteractiveGridPattern from "@/components/magicui/interactive-grid";

// --- ANIMACIONET ---
const gavelVariants: Variants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: [-25, 15, -20, 10, 0], 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const 
    } 
  }
};

const scaleVariants: Variants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: [-10, 10, -10, 10, 0], 
    transition: { 
      duration: 1.2, 
      ease: "easeInOut" as const 
    } 
  }
};

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: -10 },
  open: { opacity: 1, x: 0 }
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const CONTACT_LINK = "tel:+3556XXXXXXXX";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <main className="min-h-screen bg-[#030303] text-white antialiased selection:bg-[#c5a059] selection:text-black scroll-smooth overflow-x-hidden text-left">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8">
        <div className="max-w-6xl mx-auto py-6">
          <div className="flex items-center justify-between px-6 md:px-8 py-5 rounded-[24px] bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl">
            
            {/* Logo */}
            <motion.div whileHover="animate" initial="initial" className="flex items-center gap-3 cursor-pointer group text-left">
              <div className="p-2.5 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 group-hover:bg-[#c5a059] transition-all">
                <motion.div variants={scaleVariants}>
                  <Scale className="w-6 h-6 text-[#c5a059] group-hover:text-black" />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none uppercase">
                  Lex <span className="text-[#c5a059]">Associates</span>
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase opacity-40 font-bold mt-1">Studio Elitare</span>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10 text-[12px] font-bold uppercase tracking-widest text-white/50">
              <a href="#services" className="hover:text-white transition-all">Shërbimet</a>
              <a href="#contact" className="hover:text-white transition-all">Kontakt</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.location.href = CONTACT_LINK}
                className="hidden md:block bg-[#c5a059] text-black px-6 py-3 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:bg-white transition-all shadow-lg"
              >
                Konsultë
              </button>

              {/* Hamburger Button (Mobile Only) */}
              <button 
                onClick={toggleMenu}
                className="lg:hidden p-2 text-[#c5a059] hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden absolute top-[110px] left-4 right-4 bg-[#0a0a0a] border border-white/10 p-8 rounded-[32px] shadow-2xl z-50 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-8 text-center">
                <motion.a 
                  variants={itemVariants}
                  href="#services" 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold uppercase tracking-[0.2em] text-white/80 hover:text-[#c5a059]"
                >
                  Shërbimet
                </motion.a>
                <motion.a 
                  variants={itemVariants}
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold uppercase tracking-[0.2em] text-white/80 hover:text-[#c5a059]"
                >
                  Kontakt
                </motion.a>
                <motion.div variants={itemVariants} className="pt-4">
                  <button 
                    onClick={() => { window.location.href = CONTACT_LINK; setIsOpen(false); }}
                    className="w-full bg-[#c5a059] text-black py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl"
                  >
                    Konsultë Telefonike
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-left">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
            alt="Law and Justice" 
            className="w-full h-full object-cover opacity-30 grayscale-[50%] sepia-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]" />
          <InteractiveGridPattern className="opacity-10" />
        </div>

        <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#c5a059]/30 bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md">
              Mbrojtje • Integritet • Rezultate
            </div>

            <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter leading-[0.9] md:leading-[0.85]">
              Drejtësi që <br />
              <span className="text-[#c5a059] italic font-serif">ju takon.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
              Përfaqësim ligjor elitar për individë dhe korporata. Ne mbrojmë interesat tuaja me strategji moderne dhe integritet të palëkundur.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <ShinyButton
                onClick={() => window.location.href = CONTACT_LINK}
                className="px-12 py-5 bg-[#c5a059] text-black text-lg font-black rounded-xl shadow-[0_10px_40px_rgba(197,160,89,0.3)]"
              >
                Rezervo Konsultë
              </ShinyButton>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 border border-white/20 rounded-xl text-sm font-bold hover:bg-white/10 transition-all uppercase tracking-widest backdrop-blur-sm"
              >
                Eksploro Shërbimet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 md:py-40 scroll-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10 }} className="bg-[#0b0b0c] p-10 md:p-12 rounded-[32px] border border-white/5 hover:border-[#c5a059]/20 transition-all">
            <ShieldCheck className="w-10 h-10 text-[#c5a059] mb-8" />
            <h3 className="text-2xl font-bold mb-4">E Drejta Tregtare</h3>
            <p className="text-white/40 leading-relaxed">Konsulencë ligjore për bizneset dhe mbrojtjen e investimeve kapitale.</p>
          </motion.div>

          <motion.div initial="initial" whileHover="animate" className="bg-gradient-to-br from-[#c5a059] to-[#9e7b39] p-10 md:p-12 rounded-[32px] text-black shadow-2xl cursor-pointer relative overflow-hidden group">
            <motion.div variants={gavelVariants} className="origin-bottom-right inline-block">
              <Gavel className="w-12 h-12 mb-8" />
            </motion.div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-left">Mbrojtje Penale</h3>
            <p className="text-black/70 font-bold leading-relaxed text-left">Mbrojtje agresive në çdo fazë të procesit hetimor dhe gjyqësor.</p>
            <ChevronRight className="absolute bottom-10 right-10 w-8 h-8 opacity-20 group-hover:translate-x-2 transition-transform" />
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-[#0b0b0c] p-10 md:p-12 rounded-[32px] border border-white/5 hover:border-[#c5a059]/20 transition-all">
            <FileText className="w-10 h-10 text-[#c5a059] mb-8" />
            <h3 className="text-2xl font-bold mb-4">Litigim Civil</h3>
            <p className="text-white/40 leading-relaxed">Zgjidhja e mosmarrëveshjeve pronësore me saktësi dhe diskrecion.</p>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-20 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 font-bold mb-4 text-[#c5a059] opacity-30 uppercase tracking-[0.4em] text-[10px]">
          <Scale className="w-4 h-4" /> Lex Associates — Est. 2026
        </div>
      </footer>

    </main>
  );
}