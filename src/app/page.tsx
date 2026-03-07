"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  Stethoscope, MessageCircle, ChevronRight, HeartPulse,
  Microscope, Baby, Star, Sparkles, ShieldCheck
} from "lucide-react"

export default function KlinikaLuxury() {
  const WHATSAPP_NUMBER = "3556XXXXXXXX"; // Vendos numrin tënd këtu
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Përshëndetje! Ju kontaktoj nga faqja për një konsultë.`;

  return (
    <main className="min-h-screen bg-[#fafbff] text-slate-900 font-sans overflow-x-hidden relative">
      
      {/* EFEKTET E SFONDIT */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[120px]" />
      </div>

      {/* --- NAVBAR --- */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed w-full z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/40 backdrop-blur-2xl border border-white/20 px-8 py-3 rounded-3xl shadow-2xl shadow-blue-500/5">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg">
              <HeartPulse className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">ALBANIA<span className="text-blue-600">FERTILITY</span></h1>
          </div>
          
          <Button 
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl px-8 font-bold text-white border-none shadow-xl transition-all"
          >
            KONTAKTO
          </Button>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 lg:pt-60 px-6 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] border border-blue-100/50 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-500" /> TEKNOLOGJIA E ARDHMES
            </div>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-slate-900">
              Më shumë se <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent italic">shkencë.</span>
            </h2>
            <p className="text-xl text-slate-500/80 max-w-lg leading-relaxed font-medium">
              Eksperienca më premium mjekësore në Shqipëri. Ne kombinojmë luksin me rezultatet më të larta në fertilitet.
            </p>
            <div className="flex flex-wrap gap-5">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="h-16 px-12 rounded-[24px] bg-slate-900 text-white font-bold text-lg flex items-center gap-3"
              >
                Fillo Tani <ChevronRight className="w-5 h-5 text-blue-400" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="h-16 px-10 rounded-[24px] border-2 border-white bg-white/50 backdrop-blur-md shadow-xl shadow-blue-500/5 font-bold text-lg flex items-center gap-3"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              >
                <MessageCircle className="text-green-500 w-6 h-6" /> WhatsApp
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[70px] blur-2xl opacity-20 animate-pulse" />
            <motion.div 
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-[60px] overflow-hidden border-[12px] border-white/80 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000" 
                alt="Clinic Luxury" 
                className="w-full h-[650px] object-cover shadow-inner" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-xl p-8 rounded-[35px] shadow-2xl border border-white z-20 flex items-center gap-5"
            >
              <div className="bg-green-100 p-4 rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 leading-none">100%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Konfidencialitet</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SHERBIMET --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tight bg-gradient-to-b from-slate-900 to-slate-500 bg-clip-text text-transparent italic">Procedura Ekskluzive</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Smart IVF", icon: <Microscope className="w-8 h-8" />, color: "from-blue-500 to-blue-700" },
              { title: "Gjenetika Pro", icon: <Star className="w-8 h-8" />, color: "from-purple-500 to-purple-700" },
              { title: "Sporte Cryo", icon: <Baby className="w-8 h-8" />, color: "from-pink-500 to-pink-700" },
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -20, scale: 1.02 }}
                className="bg-white/60 backdrop-blur-sm border border-white p-12 rounded-[50px] shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-10 shadow-xl group-hover:rotate-12 transition-transform`}>
                  {s.icon}
                </div>
                <h4 className="text-2xl font-black mb-5 text-slate-800">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium italic">Standardet më të larta mjekësore në një ambient të kuruar deri në detaje.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FLOATING WHATSAPP --- */}
      <div className="fixed bottom-10 right-10 z-[100]">
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open(WHATSAPP_LINK, '_blank')}
          className="relative bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-[30px] shadow-[0_20px_40px_rgba(34,197,94,0.4)] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <MessageCircle className="w-8 h-8 relative z-10" />
        </motion.button>
      </div>

    </main>
  );
}