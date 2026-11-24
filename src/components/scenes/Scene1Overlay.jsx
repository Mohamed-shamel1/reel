import { motion } from 'framer-motion';
import { Calendar, FileText, CreditCard, Wallet, Stethoscope, Sparkles, Building2, ShieldCheck } from 'lucide-react';

export default function Scene1Overlay({ currentTime }) {
  // Visible from 0s to 11.5s
  if (currentTime > 11.5) return null;

  return (
    <div className="absolute inset-0 z-20 pointer-events-none p-12 flex flex-col justify-between overflow-hidden">
      {/* Top Floating Badges */}
      <div className="pt-24 flex flex-col gap-6 items-start">
        {/* Tag 1: لو مجمع عيادات كبير */}
        <motion.div
          initial={{ scale: 0, x: 80, rotate: -8 }}
          animate={{ scale: 1, x: 0, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25, delay: 0.2 }}
          className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#0D2230] to-[#112B3C] text-white font-black text-2xl shadow-xl flex items-center gap-3 border-2 border-[#1FA1B8] backdrop-blur-md"
        >
          <Building2 className="w-7 h-7 text-[#1FA1B8]" />
          <span>لو بتدير مجمع عيادات أو مركز طبي...</span>
        </motion.div>

        {/* Tag 2: 1000+ دكتور واستشاري */}
        <motion.div
          initial={{ scale: 0, x: -80, rotate: 10 }}
          animate={{ scale: 1, x: 0, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25, delay: 1.8 }}
          className="self-end px-7 py-3.5 rounded-2xl bg-[#1FA1B8] text-slate-950 font-black text-2xl shadow-teal-glow flex items-center gap-3 border-2 border-white/40"
        >
          <Stethoscope className="w-7 h-7 text-slate-950" />
          <span>بيدير أكثر من 1000 دكتور واستشاري؟</span>
        </motion.div>

        {/* Tag 3: تقسيط العمليات 0% فوائد */}
        <motion.div
          initial={{ scale: 0, y: 50, rotate: -12 }}
          animate={{ scale: 1, y: 0, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 4.0 }}
          className="px-8 py-4 rounded-3xl bg-[#F59E0B] text-slate-950 font-black text-3xl shadow-gold-tag flex items-center gap-3.5 border-4 border-slate-950"
        >
          <span className="w-9 h-9 rounded-full bg-slate-950 text-[#F59E0B] flex items-center justify-center font-mono text-xl">
            ١
          </span>
          <span>السر في خطوة واحدة ذكية: تقسيط العمليات!</span>
          <Sparkles className="w-7 h-7 fill-slate-950" />
        </motion.div>
      </div>

      {/* Floating Medical Capability Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Icon 1: Calendar */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            y: [0, -15, 0],
            rotate: [-6, 6, -6],
            scale: 1,
          }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-[35%] right-14 p-4 rounded-2xl bg-[#0D2230]/90 border border-[#1FA1B8]/40 text-[#1FA1B8] shadow-xl backdrop-blur-md"
        >
          <Calendar className="w-10 h-10 text-[#1FA1B8]" />
          <span className="block text-xs font-bold text-white text-center mt-1">مواعيد</span>
        </motion.div>

        {/* Icon 2: Rx File */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            y: [0, 18, 0],
            rotate: [8, -8, 8],
            scale: 1,
          }}
          transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 1.2 }}
          className="absolute top-[48%] left-14 p-4 rounded-2xl bg-[#0D2230]/90 border border-[#1FA1B8]/40 text-[#1FA1B8] shadow-xl backdrop-blur-md"
        >
          <FileText className="w-10 h-10 text-[#1FA1B8]" />
          <span className="block text-xs font-bold text-white text-center mt-1">روشتة</span>
        </motion.div>

        {/* Icon 3: Installments */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.9, 1, 0.9],
            y: [0, -20, 0],
            rotate: [-8, 8, -8],
            scale: 1,
          }}
          transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 2.1 }}
          className="absolute bottom-[34%] right-16 p-4 rounded-2xl bg-[#F59E0B] text-slate-950 shadow-gold-tag border-2 border-slate-950 font-black"
        >
          <CreditCard className="w-10 h-10 text-slate-950" />
          <span className="block text-xs font-black text-slate-950 text-center mt-1">تقسيط 0%</span>
        </motion.div>

        {/* Icon 4: Vault */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            y: [0, 16, 0],
            rotate: [6, -6, 6],
            scale: 1,
          }}
          transition={{ repeat: Infinity, duration: 4.0, ease: 'easeInOut', delay: 2.8 }}
          className="absolute bottom-[38%] left-16 p-4 rounded-2xl bg-[#0D2230]/90 border border-[#1FA1B8]/40 text-[#1FA1B8] shadow-xl backdrop-blur-md"
        >
          <Wallet className="w-10 h-10 text-[#1FA1B8]" />
          <span className="block text-xs font-bold text-white text-center mt-1">خزينة</span>
        </motion.div>
      </div>
    </div>
  );
}
