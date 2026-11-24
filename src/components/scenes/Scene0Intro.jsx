import { motion } from 'framer-motion';
import {
  Calendar,
  FileText,
  CreditCard,
  Wallet,
  Stethoscope,
  Sparkles,
  Building2,
  HelpCircle,
  User,
  MessageCircle,
} from 'lucide-react';

export default function Scene0Intro({ currentTime }) {
  // Visible from 0s to 16.0s
  if (currentTime > 16.0) return null;

  const isQuestionPhase = currentTime >= 12.0;

  return (
    <div className="absolute inset-0 z-20 pointer-events-none p-12 flex flex-col justify-between overflow-hidden">
      {/* ── Phase A (0 - 12s): Floating Hook Badges ── */}
      {!isQuestionPhase && (
        <>
          <div className="pt-24 flex flex-col gap-6 items-start">
            {/* Tag 1: لو مجمع عيادات */}
            <motion.div
              initial={{ scale: 0, x: 80, rotate: -8 }}
              animate={{ scale: 1, x: 0, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25, delay: 0.2 }}
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#0E3833] to-[#0A2E2A] text-white font-black text-2xl shadow-xl flex items-center gap-3 border-2 border-[#14B8A6] backdrop-blur-md"
            >
              <Building2 className="w-7 h-7 text-[#14B8A6]" />
              <span>لو بتدير مجمع عيادات أو مركز طبي...</span>
            </motion.div>

            {/* Tag 2: 1000+ دكتور */}
            <motion.div
              initial={{ scale: 0, x: -80, rotate: 10 }}
              animate={{ scale: 1, x: 0, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25, delay: 1.8 }}
              className="self-end px-7 py-3.5 rounded-2xl bg-[#14B8A6] text-slate-950 font-black text-2xl shadow-teal-brand flex items-center gap-3 border-2 border-white/40"
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

          {/* Floating Capability Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Calendar */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute top-[35%] right-14 p-4 rounded-2xl bg-[#0A2E2A]/90 border border-[#14B8A6]/40 text-[#14B8A6] shadow-xl backdrop-blur-md"
            >
              <Calendar className="w-10 h-10 text-[#14B8A6]" />
              <span className="block text-xs font-bold text-white text-center mt-1">مواعيد</span>
            </motion.div>

            {/* Rx File */}
            <motion.div
              animate={{ y: [0, 18, 0], rotate: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
              className="absolute top-[48%] left-14 p-4 rounded-2xl bg-[#0A2E2A]/90 border border-[#14B8A6]/40 text-[#14B8A6] shadow-xl backdrop-blur-md"
            >
              <FileText className="w-10 h-10 text-[#14B8A6]" />
              <span className="block text-xs font-bold text-white text-center mt-1">روشتة</span>
            </motion.div>

            {/* Installments */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
              className="absolute bottom-[34%] right-16 p-4 rounded-2xl bg-[#F59E0B] text-slate-950 shadow-gold-tag border-2 border-slate-950 font-black"
            >
              <CreditCard className="w-10 h-10 text-slate-950" />
              <span className="block text-xs font-black text-slate-950 text-center mt-1">تقسيط 0%</span>
            </motion.div>

            {/* Vault */}
            <motion.div
              animate={{ y: [0, 16, 0], rotate: [6, -6, 6] }}
              transition={{ repeat: Infinity, duration: 4.0, ease: 'easeInOut' }}
              className="absolute bottom-[38%] left-16 p-4 rounded-2xl bg-[#0A2E2A]/90 border border-[#14B8A6]/40 text-[#14B8A6] shadow-xl backdrop-blur-md"
            >
              <Wallet className="w-10 h-10 text-[#14B8A6]" />
              <span className="block text-xs font-bold text-white text-center mt-1">خزينة</span>
            </motion.div>
          </div>
        </>
      )}

      {/* ── Phase B (12 - 16s): Question Hook Speech Bubble (NO stock photo) ── */}
      {isQuestionPhase && (
        <div className="absolute inset-0 flex items-center justify-center p-8 bg-[#061018]/85 backdrop-blur-md pointer-events-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: -25 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="w-full max-w-[920px] p-9 rounded-[44px] bg-gradient-to-b from-[#0E3833] via-[#0A2E2A] to-[#071917] border-3 border-[#14B8A6]/60 shadow-teal-brand text-center relative overflow-hidden"
          >
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#08221F] border border-[#14B8A6]/40 text-[#2DD4BF] text-sm font-bold mb-4 font-cairo">
              <HelpCircle className="w-5 h-5 text-[#F59E0B]" />
              <span>السؤال اللي بيتسأل كل يوم في استقبال العيادات:</span>
            </div>

            {/* Speech Bubble (Stylized with User Icon, NO Stock Photo) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative mx-auto my-4 max-w-[780px] p-6 rounded-[32px] rounded-br-xs bg-[#081F1C] border-2 border-[#14B8A6]/70 shadow-2xl flex items-center gap-5 text-right text-white"
            >
              {/* Clean Medical User Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#14B8A6]/20 border-2 border-[#14B8A6]/50 flex items-center justify-center shrink-0 text-[#14B8A6] shadow-md">
                <User className="w-8 h-8" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#14B8A6]/20 text-[#2DD4BF] text-xs font-bold font-cairo border border-[#14B8A6]/30">
                    مريض بالاستقبال
                  </span>
                  <span className="text-xs text-slate-400 font-mono">10:30 ص</span>
                </div>
                <h3 className="text-3xl font-black text-white leading-snug font-cairo">
                  "يا دكتور.. ينفع أقسّط تكلفة العملية الجراحية؟"
                </h3>
              </div>
            </motion.div>

            {/* Answer Tag */}
            <div className="mt-6 inline-block px-8 py-4 rounded-3xl bg-[#F59E0B] text-slate-950 font-black text-2xl shadow-gold-tag border-4 border-slate-950 font-cairo">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-950 text-[#F59E0B] flex items-center justify-center font-mono text-lg font-black">
                  ✓
                </span>
                <span>نعم! تقسيط 0% فوائد حتى 24 شهر (موافقة فورية)</span>
                <Sparkles className="w-6 h-6 fill-slate-950" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
