import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCheck, Sparkles, MessageSquare, PhoneCall, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function Scene6WhatsAppCTA({ currentTime }) {
  // Active from 62.0s to 74.0s
  if (currentTime < 62.0) return null;

  const relTime = currentTime - 62.0;

  // Typewriter effect for "سيستم"
  const fullWord = 'سيستم';
  let typedText = '';
  if (relTime >= 1.2 && relTime < 3.8) {
    const charsToShow = Math.min(
      fullWord.length,
      Math.floor((relTime - 1.2) * 2.5) + 1
    );
    typedText = fullWord.slice(0, charsToShow);
  } else if (relTime >= 3.8) {
    typedText = ''; // Message sent!
  }

  const isSent = relTime >= 3.8;
  const isReplied = relTime >= 5.5;

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-8 bg-[#061018]/80 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: -40 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        className="w-full max-w-[840px] rounded-[44px] bg-[#0D2230]/95 backdrop-blur-xl border-4 border-[#1FA1B8]/60 shadow-teal-glow p-8 text-white relative overflow-hidden flex flex-col justify-between"
      >
        {/* Glow Aura */}
        <div className="absolute top-0 inset-x-0 h-44 bg-[#1FA1B8]/20 blur-3xl pointer-events-none" />

        {/* Top Floating Badge: مخصص لعيادتك */}
        <motion.div
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: -2 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="absolute -top-4 right-12 z-30 px-6 py-2 rounded-2xl bg-[#F59E0B] text-slate-950 font-black text-xl shadow-gold-tag border-2 border-slate-950 flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5 fill-slate-950" />
          <span>مخصص لعيادتك ولمركزك بالكامل!</span>
        </motion.div>

        {/* WhatsApp App Mockup Header */}
        <div className="flex items-center justify-between border-b border-[#1FA1B8]/30 pb-4 pt-2">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-md border-2 border-emerald-300">
              <MessageSquare className="w-7 h-7 fill-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-black text-white font-cairo">
                  تواصل معنا على الواتساب
                </h3>
                <span className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
              </div>
              <span className="text-xs text-[#7ED3E2] font-mono block mt-0.5">
                متاح الآن للرد الفوري على مجمعات العيادات والمستشفيات
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-4 py-2 rounded-xl bg-[#112B3C] border border-[#1FA1B8]/40 text-xs font-bold text-white flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
              <span>واتساب مباشر</span>
            </div>
          </div>
        </div>

        {/* Chat Conversation Canvas */}
        <div className="my-6 space-y-4">
          {/* Incoming Prompt Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="self-start max-w-[620px] p-5 rounded-3xl rounded-tr-xs bg-[#081824] border border-[#1FA1B8]/30 text-slate-200 text-base shadow-md font-cairo leading-relaxed"
          >
            <p className="font-bold">
              لو بتدير مجمع عيادات أو مركز جراحي وعايز تطبق منظومة تقسيط العمليات والكشف الموحدة بدون أي مخاطرة مالية...
            </p>
            <span className="text-xs text-[#F59E0B] font-black block mt-2">
              ابعت رسالة بكلمة "سيستم" لتحصل على ديمو حي وعرض مالي مخصص لمركزك.
            </span>
          </motion.div>

          {/* Outgoing Message Bubble (Animated once sent) */}
          {isSent && (
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              className="mr-auto max-w-[280px] p-3.5 rounded-2xl rounded-tl-xs bg-emerald-600 text-white shadow-lg flex items-center justify-between gap-3 font-cairo"
            >
              <div className="flex items-center gap-2 font-black text-lg">
                <span>سيستم</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-200 font-mono">
                <span>الآن</span>
                <CheckCheck className="w-4 h-4 text-sky-200" />
              </div>
            </motion.div>
          )}

          {/* Instant Auto-Reply Bubble */}
          {isReplied && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              className="self-start max-w-[600px] p-4 rounded-3xl rounded-tr-xs bg-gradient-to-r from-[#112B3C] to-[#0D2230] border border-emerald-500/40 text-emerald-100 text-sm shadow-md font-cairo"
            >
              <div className="flex items-center gap-2 mb-1 text-emerald-400 font-black">
                <Sparkles className="w-4 h-4" />
                <span>مرحباً بحضرتك في مجمع نور الشفاء الطبي!</span>
              </div>
              <p>تم تجهيز رابط الديمو التفاعلي ودراسة الجدوى المالية لعيادتكم فوراً 🚀</p>
            </motion.div>
          )}
        </div>

        {/* Input Bar & Big Interactive CTA Button */}
        <div className="space-y-3 pt-2 border-t border-[#1FA1B8]/30">
          {/* Simulated WhatsApp Input */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#081824] border border-[#1FA1B8]/40">
            <div className="flex-1 text-right px-3 text-base font-cairo text-white">
              {typedText ? (
                <span className="font-bold text-[#F59E0B] border-l-2 border-white animate-pulse">
                  {typedText}
                </span>
              ) : (
                <span className="text-slate-500 text-sm">اكتب كلمة "سيستم" هنا...</span>
              )}
            </div>
            <button
              className={`p-3 rounded-xl transition-all ${
                typedText ? 'bg-emerald-500 text-slate-950 scale-105' : 'bg-slate-800 text-slate-500'
              }`}
            >
              <Send className="w-5 h-5 rotate-180" />
            </button>
          </div>

          {/* Big Punch Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-2xl bg-[#F59E0B] hover:bg-amber-400 text-slate-950 font-black text-xl shadow-gold-tag flex items-center justify-center gap-3 transition cursor-pointer border-2 border-slate-950 select-none"
          >
            <span>ابعت "سيستم" الآن على الواتساب وابدأ التطبيق</span>
            <ArrowLeft className="w-6 h-6 stroke-[3]" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
