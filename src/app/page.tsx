"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  MessageCircle, ChevronRight, HeartPulse,
  Microscope, Baby, Star, Sparkles, ShieldCheck, 
  Leaf, Sun, Heart
} from "lucide-react"

export default function KlinikaFertilityPremium() {
  const WHATSAPP_LINK = `https://wa.me/3556XXXXXXXX?text=Përshëndetje! Ju kontaktoj nga faqja për një konsultë.`;

  return (
    <main className="min-h-screen bg-[#fffcfb] text-slate-800 font-sans overflow-x-hidden relative">
      
      {/* SFONDI ME NGJYRA TË BUTA (WARM GRADIENTS) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      {/* --- NAVBAR ELEGANTE --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-[100] px-4 py-4 md:py-6"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-xl border border-rose-100 px-6 py-3 rounded-[24px] shadow-sm">
          <div className="flex items-center gap-2">
            <div className="bg-rose-500 p-2 rounded-xl shadow-md">
              <Baby className="text-white w-5 h-5" />
            </div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 italic">
              ALBANIA<span className="text-rose-500 font-black">FERTILITY</span>
            </h1>
          </div>
          
          <Button 
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 font-bold shadow-lg shadow-rose-200 transition-all border-none"
          >
            KONTAKTO
          </Button>
        </div>
      </motion.nav>

      {/* --- HERO SECTION: NGROHTËSI DHE BESIM --- */}
      <section className="relative pt-36 pb-16 md:pt-56 md:pb-32 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest border border-rose-100">
              <Sun className="w-3 h-3 animate-spin-slow" /> KUJDESI QË MERITONI
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-slate-900">
              Ku fillon <br />
              <span className="text-rose-500">jeta.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg mx-auto lg:mx-0">
              Më shumë se një klinikë, ne jemi partnerët tuaj në rrugëtimin drejt krijimit të familjes me teknologjinë më të avancuar në Ballkan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.button 
                whileHover={{ scale: 1.03, boxShadow: "0 20px 30px rgba(244, 63, 94, 0.2)" }}
                className="h-16 px-10 rounded-full bg-slate-900 text-white font-bold text-lg flex items-center justify-center gap-2"
              >
                Fillo Rrugëtimin <ChevronRight />
              </motion.button>
              <motion.button 
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                className="h-16 px-10 rounded-full bg-white border-2 border-rose-100 text-rose-600 font-bold text-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle /> Konsultë Falas
              </motion.button>
            </div>
          </motion.div>
          
          {/* FOTO ME FORMË "ORGANIK" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-rose-100/50 rounded-full blur-3xl opacity-50 animate-pulse" />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative z-10 rounded-[80px] md:rounded-[120px] overflow-hidden border-[12px] border-white shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000" 
                alt="Fertility Care" 
                className="w-full h-[400px] md:h-[550px] object-cover" 
              />
            </motion.div>

            {/* FLOATING STATS */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute -top-4 -right-2 md:top-10 md:-right-10 bg-white p-6 rounded-3xl shadow-xl border border-rose-50 z-20"
            >
              <div className="text-3xl font-black text-rose-500">94%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Suksesi IVF</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SEKSIONI I BESIMIT --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
                title: "Teknologji Moderne", 
                desc: "Laboratorë të certifikuar sipas standardeve më të larta europiane.",
                icon: <Microscope className="w-8 h-8 text-blue-500" />
            },
            { 
                title: "Kujdes Human", 
                desc: "Një staf që ju qëndron pranë në çdo hap emocional dhe mjekësor.",
                icon: <Heart className="w-8 h-8 text-rose-500" />
            },
            { 
                title: "Privatësi e Plotë", 
                desc: "Trajtimi juaj është tërësisht konfidencial dhe i mbrojtur.",
                icon: <ShieldCheck className="w-8 h-8 text-green-500" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- KONTAKTI I SHPEJTË (MOBILE READY) --- */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open(WHATSAPP_LINK, '_blank')}
          className="bg-green-500 text-white p-5 rounded-full shadow-2xl flex items-center justify-center"
        >
          <MessageCircle className="w-8 h-8" />
        </motion.button>
      </div>

    </main>
  );
}