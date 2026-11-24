import { motion } from 'framer-motion';
import { HelpCircle, Sparkles, CheckCircle2, Stethoscope } from 'lucide-react';

export default function Scene2Question({ currentTime }) {
  // Active from 11.5s to 16.0s
  if (currentTime < 11.5 || currentTime > 16.0) return null;

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-8 bg-[#061018]/80 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: -30 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        className="w-full max-w-[880px] p-10 rounded-[44px] bg-gradient-to-b from-[#0D2230] via-[#0A1926] to-[#07131D] border-2 border-[#1FA1B8]/60 shadow-teal-glow text-center relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-36 bg-[#1FA1B8]/20 blur-2xl pointer-events-none" />

        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#112B3C] border border-[#1FA1B8]/40 text-[#4EC4D8] text-sm font-bold mb-6">
          <HelpCircle className="w-5 h-5 text-[#F59E0B]" />
          <span>السؤال اللي بيتسأل كل يوم في استقبال المستشفى:</span>
        </div>

        {/* Patient Speech Bubble */}
        <motion.div
          initial={{ scale: 0.82, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 350, damping: 25 }}
          className="relative mx-auto my-4 max-w-[700px] p-6 rounded-3xl bg-white text-slate-900 shadow-2xl flex items-center gap-5 text-right border border-slate-200"
        >
          {/* Patient Avatar */}
          <div className="w-18 h-18 rounded-2xl bg-sky-100 border-2 border-[#1FA1B8] overflow-hidden shrink-0 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
              alt="المريض"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <span className="text-xs text-[#0F5F6D] font-bold block mb-1">مريض بالاستقبال</span>
            <h3 className="text-3xl font-black text-slate-950 leading-tight">
              "يا دكتور... ينفع أقسّط العملية الجراحية؟"
            </h3>
          </div>

          {/* Speech Bubble Tail */}
          <div className="absolute -bottom-3 right-14 w-6 h-6 bg-white rotate-45 border-r border-b border-slate-200" />
        </motion.div>

        {/* Punch Badge: 0% فوائد • 24 شهر */}
        <motion.div
          initial={{ scale: 0, rotate: -6 }}
          animate={{ scale: [0, 1.1, 1], rotate: [-6, 3, -1] }}
          transition={{ delay: 1.1, type: 'spring', stiffness: 400, damping: 22 }}
          className="mt-8 inline-block px-8 py-5 rounded-3xl bg-[#F59E0B] text-slate-950 font-black text-3xl shadow-gold-tag border-4 border-slate-950"
        >
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-slate-950 text-[#F59E0B] flex items-center justify-center font-mono text-xl">
              ✓
            </span>
            <span>نعم! تقسيط 0% فوائد حتى 24 شهر (موافقة فورية)</span>
            <Sparkles className="w-7 h-7 fill-slate-950" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
