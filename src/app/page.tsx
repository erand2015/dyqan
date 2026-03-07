"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion" // Biblioteka e efekteve
import { 
  Stethoscope, MessageCircle, ChevronRight, HeartPulse,
  Microscope, Baby, MapPin, Clock, Phone, Star
} from "lucide-react"
import Link from "next/link"

// Zëvendëso bllokun e vjetër me këtë:
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { 
    duration: 0.6, 
    ease: [0.22, 1, 0.36, 1] // Kjo zëvendëson "easeOut" me kurbë matematike që TypeScript e kupton
  }
};
const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

export default function KlinikaMeEfekte() {
  const WHATSAPP_NUMBER = "3556XXXXXXXX"; 
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Përshëndetje! Ju kontaktoj nga faqja e klinikës.`;

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      
      {/* --- NAVBAR ME EFEKT BLUR --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-blue-600 p-2 rounded-xl">
              <HeartPulse className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter italic">ALBANIA<span className="text-blue-600">FERTILITY</span></h1>
          </motion.div>
          
          <Button 
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 font-bold shadow-lg shadow-blue-200 transition-all hover:shadow-blue-400"
          >
            REZERVO
          </Button>
        </div>
      </motion.nav>

      {/* --- HERO SECTION ME EFEKT FLOAT --- */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-black tracking-wide border border-blue-100">
              <Star className="w-4 h-4 fill-blue-600" /> TEKNOLOGJIA E FUNDIT 2024
            </div>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85]">
              Krijojmë <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Mrekulli.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
              Klinika lider në Ballkan për trajtimet IVF, me një shkallë suksesi që kalon 90%.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-16 px-10 rounded-2xl bg-slate-900 text-white font-bold text-lg shadow-2xl shadow-slate-300 flex items-center gap-2"
              >
                Fillo Rrugëtimin <ChevronRight />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, borderColor: "#22c55e" }}
                className="h-16 px-10 rounded-2xl border-2 border-slate-200 font-bold text-lg flex items-center gap-2"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              >
                <MessageCircle className="text-green-500" /> WhatsApp
              </motion.button>
            </div>
          </motion.div>
          
          {/* FOTO ME EFEKT "LUNDRUES" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-[60px] overflow-hidden border-[16px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000" 
                alt="Clinic" 
                className="w-full h-[600px] object-cover" 
              />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-slate-50">
              <div className="text-5xl font-black text-blue-600">94%</div>
              <div className="text-sm font-bold text-slate-400">Suksesi IVF</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SHERBIMET ME EFEKT "REVEAL" --- */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Ekselencë Mjekësore</h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "IVF Profesionale", icon: <Microscope className="w-8 h-8"/>, color: "bg-blue-500" },
              { title: "Gjenetikë", icon: <Stethoscope className="w-8 h-8"/>, color: "bg-cyan-500" },
              { title: "Kryoprezervim", icon: <Baby className="w-8 h-8"/>, color: "bg-indigo-500" },
            ].map((s, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -15 }}
                className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-2xl transition-all"
              >
                <div className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                  {s.icon}
                </div>
                <h4 className="text-2xl font-black mb-4">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-6">Zgjidhje të personalizuara duke përdorur teknologjinë më të avancuar në botë.</p>
                <Link href="#" className="font-bold text-blue-600 flex items-center gap-2 group">
                  Mëso më shumë <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FLOATING WHATSAPP ME PULSIM --- */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-8 right-8 z-[100]"
      >
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open(WHATSAPP_LINK, '_blank')}
          className="relative bg-green-500 text-white p-5 rounded-full shadow-2xl group"
        >
          <motion.span 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />
          <MessageCircle className="w-8 h-8 relative z-10" />
        </motion.button>
      </motion.div>

    </main>
  );
}