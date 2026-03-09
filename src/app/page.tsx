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
  ChevronUp,
  Users,
  Briefcase,
  Globe
} from "lucide-react";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import InteractiveGridPattern from "@/components/magicui/interactive-grid";

// --- ANIMACIONET E REFINUARA (PA GODITJE / SMOOTH) ---
const titleContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const titleItem: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1] // Quintic Out për ndalim super të butë
    } 
  }
};

const revealVariant: Variants = {
  hidden: { opacity: 0, y: 25, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const iconAnimation: Variants = {
  initial: { scale: 1 },
  animate: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }
};

const dropdownVariants: Variants = {
  closed: { opacity: 0, y: -15, transition: { duration: 0.2 } },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

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
              <div className="p-2.5 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/20 group-hover:bg-[#c5a059] transition-all duration-500">
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

          <AnimatePresence>
            {isOpen && (
              <motion.div variants={dropdownVariants} initial="closed" animate="open" exit="closed" className="absolute top-full left-0 w-full mt-4 px-2 lg:hidden z-[105]">
                <div className="bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 shadow-3xl flex flex-col gap-6 text-left">
                  <Link href="/sherbimet" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase italic tracking-tighter flex items-center justify-between group">
                    Shërbimet <ChevronRight size={20} className="text-[#c5a059]" />
                  </Link>
                  <Link href="/kontakt" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase italic tracking-tighter flex items-center justify-between group">
                    Kontakt <ChevronRight size={20} className="text-[#c5a059]" />
                  </Link>
                  <div className="h-[1px] bg-white/5 w-full my-2" />
                  <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-[#c5a059] text-black py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl">Rezervo Konsultë</button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" className="w-full h-full object-cover opacity-20 grayscale" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />
          <InteractiveGridPattern className="opacity-10" />
        </div>
        
        <div className="relative z-10 px-6 max-w-6xl mx-auto w-full text-left">
          <motion.div variants={titleContainer} initial="hidden" animate="visible" className="flex flex-col">
            <motion.h1 variants={titleItem} className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] uppercase italic text-white">Drejtësi që</motion.h1>
            <motion.h1 variants={titleItem} className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] uppercase italic text-[#c5a059] mb-10">ju takon.</motion.h1>
            <motion.div variants={titleItem}>
              <Link href="/kontakt">
                <ShinyButton 
                  text="Rezervo Konsultë" 
                  className="px-12 py-6 bg-[#c5a059] text-black text-lg font-black rounded-2xl shadow-[0_20px_50px_rgba(197,160,89,0.3)]" 
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-6 relative bg-[#030303]">
        <div className="max-w-6xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={revealVariant} className="mb-16 text-left">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a059] font-bold mb-4">Ekspertiza Jonë</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Shërbimet Juridike</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              { icon: Scale, title: "E Drejta Tregtare", desc: "Konsulencë strategjike për biznesin tuaj dhe mbrojtje të interesave tregtare.", gold: false },
              { icon: Gavel, title: "Mbrojtje Penale", desc: "Përfaqësim ligjor i specializuar në çështjet penale me profesionalizëm maksimal.", gold: false, extra: true },
              { icon: ShieldCheck, title: "Siguri Ligjore", desc: "Ne sigurohemi që çdo veprim i juaj të jetë në përputhje të plotë me ligjin.", gold: true },
              { icon: Users, title: "E Drejta Familjare", desc: "Zgjidhje ligjore për çështje të divorcit, trashëgimisë dhe kujdestarisë.", gold: true },
              { icon: Briefcase, title: "Marrëdhëniet e Punës", desc: "Mbrojtje për punëdhënësit dhe punëmarrësit në mosmarrëveshjet kontraktuale.", gold: false },
              { icon: Globe, title: "Pronësia Intelektuale", desc: "Mbrojtja e markave, patentave dhe të drejtave të autorit në nivel ndërkombëtar.", gold: false }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.2 }} 
                variants={revealVariant} 
                whileHover="animate"
                className={`${service.gold ? "bg-[#c5a059] text-black shadow-2xl" : "bg-[#0a0a0a] border border-white/5 text-white hover:border-[#c5a059]/30"} p-10 rounded-[48px] transition-all group relative overflow-hidden flex flex-col justify-between min-h-[380px]`}
              >
                {service.extra && <div className="absolute top-[-20px] right-[-20px] p-8 opacity-[0.03] rotate-12 scale-150"><Gavel size={200} /></div>}
                <div>
                  <motion.div variants={iconAnimation} className={`mb-8 w-fit p-4 rounded-2xl ${service.gold ? "bg-black/10" : "bg-[#c5a059]/5 border border-[#c5a059]/10"}`}>
                    <service.icon className={`w-10 h-10 ${service.gold ? "text-black" : "text-[#c5a059]"}`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter italic">{service.title}</h3>
                  <p className={`leading-relaxed ${service.gold ? "text-black/70 font-medium italic" : "text-white/40"}`}>{service.desc}</p>
                </div>
                <Link href={service.gold ? "/kontakt" : "/sherbimet"} className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all mt-8 ${service.gold ? "text-black" : "text-[#c5a059]"}`}>
                  {service.gold ? "Na Kontaktoni" : "Më shumë"} <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
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