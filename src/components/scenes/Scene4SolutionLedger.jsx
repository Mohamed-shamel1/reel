import { motion } from 'framer-motion';
import { Calculator, Stethoscope, Landmark, CheckCircle2, TrendingUp, Sparkles, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Scene4SolutionLedger({ currentTime }) {
  // Active from 29.0s to 50.0s
  if (currentTime < 29.0 || currentTime > 50.0) return null;

  const relTime = currentTime - 29.0;

  // 3 Dynamic Beats:
  // Beat A: 0 to 7s (29s to 36s) - Real UI Mockups (Calculator + Doctor screen)
  // Beat B: 7 to 14s (36s to 43s) - Accurate Live Treasury Ledger (456,750 + 28,000 + 450 = 485,200)
  // Beat C: 14 to 21s (43s to 50s) - Executive Multi-Branch Card (4,440,000 ج.م + عجز 0 ج.م)

  const isBeatA = relTime < 7.0;
  const isBeatB = relTime >= 7.0 && relTime < 14.0;
  const isBeatC = relTime >= 14.0;

  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 pt-16 bg-[#061018]">
      {/* ── Dark Medical Futuristic Solution Canvas ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="w-full h-full rounded-[44px] bg-gradient-to-b from-[#0D2230] via-[#0A1926] to-[#07131D] border-4 border-[#1FA1B8]/50 shadow-teal-glow flex flex-col justify-between p-10 relative overflow-hidden text-right"
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 inset-x-0 h-44 bg-[#1FA1B8]/15 blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#1FA1B8]/30 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="px-5 py-2 rounded-2xl bg-[#F59E0B] text-slate-950 font-black text-2xl shadow-gold-tag -rotate-2 border-2 border-amber-300">
              ٢ الحل
            </span>
            <h2 className="text-3xl font-black text-white font-cairo">
              منظومة نور الشفاء: ربط الكشف بالتقسيط بالخزينة فوري
            </h2>
          </div>
          <span className="px-3.5 py-1.5 rounded-xl bg-[#112B3C] text-[#4EC4D8] text-xs font-bold border border-[#1FA1B8]/40">
            3 فروع متصلة لحظياً
          </span>
        </div>

        {/* ── BEAT A: Real UI Mockups (0s to 7s / 29s to 36s) ── */}
        {isBeatA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="my-auto z-10 grid grid-cols-2 gap-6"
          >
            {/* Card 1: Live Installments Calculator */}
            <div className="p-6 rounded-3xl bg-[#081824] border-2 border-[#1FA1B8]/50 shadow-xl space-y-4 text-start">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-2xl bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40">
                  <Calculator className="w-6 h-6" />
                </span>
                <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/50">
                  0% فوائد • معتمد
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 block font-bold">عملية جراحية مختارة:</span>
                <h4 className="text-lg font-black text-white mt-0.5">عملية المياه البيضاء بالفاكو</h4>
                <div className="flex items-baseline justify-between mt-2">
                  <strong className="text-3xl font-black text-white font-mono">28,000 ج.م</strong>
                  <span className="text-sm text-[#F59E0B] font-black font-mono">
                    {relTime < 3.0 ? '2,333 ج.م / شهر' : '1,167 ج.م / شهر'}
                  </span>
                </div>
              </div>

              {/* Animated Months Slider Mockup */}
              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <div className="flex justify-between text-xs text-slate-300 font-bold">
                  <span>مدة التقسيط:</span>
                  <span className="text-[#1FA1B8] font-mono font-black">
                    {relTime < 3.0 ? '12 شهر' : '24 شهر (أطول فترة)'}
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-800 relative overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#1FA1B8] to-[#F59E0B] rounded-full"
                    animate={{ width: relTime < 3.0 ? '50%' : '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#112B3C] text-[11px] text-[#7ED3E2] font-bold flex items-center gap-2 border border-[#1FA1B8]/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>موافقة ائتمانية فورية بدون ضامن أو مقدم</span>
              </div>
            </div>

            {/* Card 2: Doctor Consultation & Prescription Screen */}
            <div className="p-6 rounded-3xl bg-[#081824] border-2 border-[#1FA1B8]/50 shadow-xl space-y-4 text-start">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-2xl bg-[#1FA1B8]/20 text-[#1FA1B8] border border-[#1FA1B8]/40">
                  <Stethoscope className="w-6 h-6" />
                </span>
                <span className="text-xs font-bold text-[#7ED3E2] bg-[#112B3C] px-3 py-1 rounded-full border border-[#1FA1B8]/40">
                  عيادة الرمد 101
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 block font-bold">استشاري جراحة العيون:</span>
                <h4 className="text-lg font-black text-white mt-0.5">أ.د. حسام البدري</h4>
                <p className="text-xs text-[#7ED3E2] mt-1 line-clamp-1">
                  تشخيص: مياه بيضاء متقدمة بالعين اليمنى تحتاج لعملية فاكو وزرع عدسة
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 space-y-1 text-xs">
                <span className="text-slate-400 block font-bold">الروشتة الرقمية المعتمدة:</span>
                <span className="font-mono text-emerald-400 font-bold block">
                  1. Vigamox 0.5% Eye Drops
                </span>
                <span className="font-mono text-emerald-400 font-bold block">
                  2. Nevanac 0.1% Ophthalmic Susp
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-950/80 text-[11px] text-emerald-300 font-bold flex items-center gap-2 border border-emerald-500/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>تم تحويل القرار الطبي تلقائياً لطلب التقسيط الفوري ✓</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── BEAT B: Accurate Live Treasury Ledger (7s to 14s / 36s to 43s) ── */}
        {isBeatB && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="my-auto z-10 space-y-4"
          >
            <div className="p-6 rounded-3xl bg-[#FBF9F3] border-4 border-[#1FA1B8] shadow-2xl text-slate-900 relative overflow-hidden">
              <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Landmark className="w-6 h-6 text-[#0F5F6D]" />
                  <h3 className="text-xl font-black text-[#0A2540]">
                    دفتر خزينة فرع مصر الجديدة (تسجيل قيود فوري)
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-black border border-emerald-300">
                  تحديث لحظي تلقائي ✓
                </span>
              </div>

              {/* 100% Accurate Math Ledger Rows */}
              <div className="space-y-3 font-mono">
                {/* Row 1: Opening Balance */}
                <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-between text-sm">
                  <span className="font-cairo font-bold text-slate-700">
                    رصيد سابق بالخزينة (قبل العملية):
                  </span>
                  <strong className="text-slate-900 text-base font-black">456,750 ج.م</strong>
                </div>

                {/* Row 2: Surgery Installment Addition (Animates in at relTime >= 8.5s) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: relTime >= 8.5 ? 1 : 0.3, x: 0 }}
                  className="p-3 rounded-2xl bg-emerald-50 border-2 border-emerald-300 flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-xs font-cairo">
                      تلقائي ✓
                    </span>
                    <span className="font-cairo font-black text-emerald-950">
                      + قسط عملية مياه بيضاء بالفاكو (المريض: أحمد الديب)
                    </span>
                  </div>
                  <strong className="text-emerald-700 text-lg font-black">+ 28,000 ج.م</strong>
                </motion.div>

                {/* Row 3: Doctor Consultation Addition (Animates in at relTime >= 10.5s) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: relTime >= 10.5 ? 1 : 0.3, x: 0 }}
                  className="p-3 rounded-2xl bg-cyan-50 border-2 border-cyan-300 flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#1FA1B8] text-white font-bold text-xs font-cairo">
                      تلقائي ✓
                    </span>
                    <span className="font-cairo font-black text-cyan-950">
                      + كشف استشاري رمد (عيادة 101)
                    </span>
                  </div>
                  <strong className="text-[#0F5F6D] text-lg font-black">+ 450 ج.م</strong>
                </motion.div>

                {/* Row 4: Grand Total Banner (Animates at relTime >= 11.5s) */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: relTime >= 11.5 ? 1 : 0.95 }}
                  className="p-4 rounded-2xl bg-gradient-to-r from-[#0A2540] to-[#0D2230] text-white border-2 border-[#1FA1B8] flex items-center justify-between shadow-xl"
                >
                  <div>
                    <span className="text-xs text-[#7ED3E2] font-cairo font-bold block">
                      الرصيد الإجمالي المحقق بالخزينة:
                    </span>
                    <span className="text-[11px] text-slate-300 font-cairo">
                      (456,750 + 28,000 + 450 ج.م = مطابقة تامة 100%)
                    </span>
                  </div>
                  <strong className="text-3xl font-black text-[#F59E0B] font-mono">
                    485,200 ج.م
                  </strong>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── BEAT C: Multi-Branch Executive Oversight (14s to 21s / 43s to 50s) ── */}
        {isBeatC && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="my-auto z-10 space-y-4"
          >
            {/* Top 3 Branch Revenue Cards */}
            <div className="grid grid-cols-3 gap-4">
              {/* Branch 1: Heliopolis */}
              <div className="p-4 rounded-3xl bg-[#081824] border-2 border-[#1FA1B8] shadow-lg text-start space-y-2">
                <span className="text-xs text-[#7ED3E2] font-bold block">فرع مصر الجديدة</span>
                <strong className="text-2xl font-black text-white font-mono block">
                  1,680,000 ج.م
                </strong>
                <span className="text-[11px] text-emerald-400 font-bold block">
                  12 عملية جراحية اليوم ✓
                </span>
              </div>

              {/* Branch 2: Fifth Settlement */}
              <div className="p-4 rounded-3xl bg-[#081824] border-2 border-[#1FA1B8] shadow-lg text-start space-y-2">
                <span className="text-xs text-[#7ED3E2] font-bold block">فرع التجمع الخامس</span>
                <strong className="text-2xl font-black text-white font-mono block">
                  1,520,000 ج.م
                </strong>
                <span className="text-[11px] text-emerald-400 font-bold block">
                  9 عمليات جراحية اليوم ✓
                </span>
              </div>

              {/* Branch 3: Mohandessin */}
              <div className="p-4 rounded-3xl bg-[#081824] border-2 border-[#1FA1B8] shadow-lg text-start space-y-2">
                <span className="text-xs text-[#7ED3E2] font-bold block">فرع المهندسين</span>
                <strong className="text-2xl font-black text-white font-mono block">
                  1,240,000 ج.م
                </strong>
                <span className="text-[11px] text-emerald-400 font-bold block">
                  8 عمليات جراحية اليوم ✓
                </span>
              </div>
            </div>

            {/* Total Combined Revenue Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0A2540] via-[#0D2230] to-[#112B3C] border-2 border-[#F59E0B] shadow-2xl flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs text-[#F59E0B] font-bold font-mono">
                    TOTAL COMBINED REVENUE
                  </span>
                </div>
                <h3 className="text-lg font-black text-white font-cairo">
                  إجمالي إيراد العمليات الجراحية عبر الـ 3 فروع
                </h3>
              </div>
              <strong className="text-4xl font-black text-[#F59E0B] font-mono">
                4,440,000 ج.م
              </strong>
            </div>

            {/* Zero Discrepancy Assurance Badge */}
            <div className="p-3.5 rounded-2xl bg-emerald-950/80 border-2 border-emerald-500/60 flex items-center justify-between text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold font-cairo text-sm">
                  عجز الخزينة في الفروع الثلاثة: 0 ج.م ✓ (مطابقة رقمية فورية)
                </span>
              </div>
              <span className="font-mono text-emerald-400 font-black text-sm">
                100% AUDIT MATCH
              </span>
            </div>
          </motion.div>
        )}

        {/* Footer Note */}
        <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-slate-400 font-bold relative z-10">
          <span>المنظومة تربط الطاقم الطبي والحسابات في ثوانٍ بدون أي تدخل يدوي</span>
          <span className="text-[#1FA1B8] font-mono font-bold">الموافقة الفورية التالية ⬅</span>
        </div>
      </motion.div>
    </div>
  );
}
