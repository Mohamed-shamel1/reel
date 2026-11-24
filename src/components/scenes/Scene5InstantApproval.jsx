import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, QrCode, Printer, MessageCircle, Sparkles, CheckCheck, FileText } from 'lucide-react';

export default function Scene5InstantApproval({ currentTime }) {
  // Active from 52.0s to 62.0s
  if (currentTime < 52.0 || currentTime > 62.0) return null;

  const relTime = currentTime - 52.0;

  // Choreographed Phases:
  // Phase 1 (0 to 3s / 52s to 55s): Large centered iPhone mockup with "بضغطة واحدة" badge
  // Phase 2 (3 to 6s / 55s to 58s): Phone slides left, Large Thermal Printer feeds white receipt right
  // Phase 3 (6 to 10s / 58s to 62s): WhatsApp confirmation bubble pops up below
  const isPhase1 = relTime < 3.0;
  const isPhase2 = relTime >= 3.0;
  const isPhase3 = relTime >= 6.0;

  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 pt-16 bg-[#061018]">
      {/* ── Cream Lined Notebook Canvas ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="w-full h-full rounded-[44px] notebook-ruled shadow-notebook border-4 border-[#E2DAC8] flex flex-col justify-between p-10 relative overflow-hidden text-right"
      >
        {/* Notebook Header Bar */}
        <div className="flex items-center justify-between border-b-2 border-slate-300 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="px-5 py-2 rounded-2xl bg-[#F59E0B] text-slate-950 font-black text-2xl shadow-gold-tag -rotate-2 border-2 border-slate-950">
              ٣ الموافقة في ثواني
            </span>
            <h2 className="text-3xl font-black text-[#0A2540] font-cairo">
              اعتماد فوري وطباعة إيصال رسمي للمريض
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-[#0F5F6D] bg-[#E9F7FA] px-3.5 py-1.5 rounded-xl border border-[#1FA1B8]/40">
            زمن المعالجة: أقل من 15 ثانية ⚡
          </span>
        </div>

        {/* ── Middle Canvas: Choreographed Phone & Thermal Printer ── */}
        <div className="relative my-auto z-10 h-[560px] flex items-center justify-center">
          {/* Left/Center iPhone Mockup */}
          <motion.div
            animate={{
              x: isPhase2 ? -200 : 0,
              scale: isPhase2 ? 0.94 : 1,
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="w-[360px] rounded-[52px] bg-slate-950 p-4 shadow-2xl border-4 border-slate-800 ring-4 ring-slate-900/50 absolute"
          >
            {/* Dynamic Island */}
            <div className="w-24 h-5 bg-black rounded-full mx-auto mb-3" />

            {/* Screen Content */}
            <div className="bg-[#0A1926] rounded-[38px] p-5 text-white space-y-3.5 text-center border border-white/10">
              {/* Green Verified Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="w-16 h-16 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30"
              >
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </motion.div>

              <div>
                <span className="text-[11px] text-[#4EC4D8] font-bold block uppercase tracking-wider">
                  تم اعتماد التمويل الجراحي
                </span>
                <h4 className="text-xl font-black text-white mt-0.5">
                  موافقة ائتمانية فورية ✅
                </h4>
              </div>

              {/* Bold "بضغطة واحدة" Badge */}
              <div className="py-2 px-4 rounded-xl bg-[#F59E0B] text-slate-950 font-black text-sm shadow-gold-tag flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>بضغطة واحدة من الاستقبال</span>
              </div>

              {/* Patient Details */}
              <div className="p-3.5 rounded-2xl bg-[#0D2230] border border-white/10 text-xs text-start space-y-1.5 font-cairo">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">المريض:</span>
                  <span className="font-bold text-white">أحمد محمود الديب</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">العملية:</span>
                  <span className="font-bold text-[#7ED3E2]">مياه بيضاء (فاكو)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">كود الحجز:</span>
                  <span className="font-mono font-bold text-[#F59E0B]">NS-2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">الدور بالعيادة:</span>
                  <span className="font-mono font-black text-emerald-400 text-sm">طابور #7</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-emerald-950 text-emerald-300 font-bold text-xs border border-emerald-500/30">
                خطة التقسيط: 24 شهر • 0% فوائد • 1,167 ج.م/ش
              </div>
            </div>
          </motion.div>

          {/* Right Thermal Printer & Self-Feeding Receipt (Enters at relTime >= 3.0s) */}
          <motion.div
            initial={{ opacity: 0, x: 260, scale: 0.9 }}
            animate={{
              opacity: isPhase2 ? 1 : 0,
              x: isPhase2 ? 200 : 260,
              scale: isPhase2 ? 1 : 0.9,
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="w-[340px] absolute flex flex-col items-center"
          >
            {/* Thermal Printer Hardware Unit */}
            <div className="w-full rounded-t-3xl bg-[#0D2230] border-2 border-slate-700 p-4 shadow-2xl relative z-20 text-center">
              <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                <span className="flex items-center gap-1.5 text-[#4EC4D8] font-bold">
                  <Printer className="w-4 h-4 text-[#F59E0B]" />
                  <span>طابعة الإيصالات الفورية</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ONLINE</span>
                </span>
              </div>
              <div className="w-48 h-1.5 bg-slate-950 rounded-full mx-auto mt-2" />
            </div>

            {/* Self-Feeding Animated White Receipt Slip */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isPhase2 ? 370 : 0,
                opacity: isPhase2 ? 1 : 0,
              }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="w-[300px] bg-white text-slate-900 shadow-2xl relative z-10 px-5 pt-4 pb-6 overflow-hidden border-x border-slate-300"
            >
              {/* Receipt Content */}
              <div className="text-center border-b border-dashed border-slate-300 pb-2 mb-2">
                <strong className="text-sm font-black text-slate-950 block font-cairo">
                  مجمع نور الشفاء الطبي
                </strong>
                <span className="text-[10px] text-slate-500 font-mono block">
                  فرع مصر الجديدة • إيصال معتمد
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-start font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-cairo">كود الحجز:</span>
                  <span className="font-black text-[#0F5F6D]">NS-2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-cairo">المريض:</span>
                  <span className="font-bold text-slate-900 font-cairo">أحمد الديب</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-cairo">العملية:</span>
                  <span className="font-bold text-slate-900 font-cairo">مياه بيضاء فاكو</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-cairo">القسط الشهري:</span>
                  <span className="font-black text-emerald-700">1,167 ج.م/شهر</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-cairo">الفترة:</span>
                  <span className="font-black text-slate-900">24 شهراً (0% فوائد)</span>
                </div>
              </div>

              {/* Barcode Graphic */}
              <div className="mt-3 pt-2 border-t border-dashed border-slate-300 flex flex-col items-center">
                <div className="flex items-center gap-1 h-8">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-full ${
                        i % 3 === 0 ? 'w-1 bg-black' : i % 2 === 0 ? 'w-0.5 bg-black' : 'w-1 bg-transparent'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[9px] font-mono text-slate-500 mt-1">
                  * NS-2026-CATARACT-APPROVED *
                </span>
              </div>

              {/* Bottom Paper Tear Edge */}
              <div className="absolute bottom-0 inset-x-0 h-3 receipt-tear" />
            </motion.div>
          </motion.div>
        </div>

        {/* ── Phase 3: Crisp WhatsApp Notification Bubble (relTime >= 6.0s) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isPhase3 ? 1 : 0,
            y: isPhase3 ? 0 : 30,
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative z-20 p-4 rounded-3xl bg-[#0D2230] border-2 border-emerald-500/70 shadow-2xl flex items-center justify-between"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black shadow-md">
              <MessageCircle className="w-6 h-6 fill-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <strong className="text-sm font-black text-white font-cairo">
                  تم إرسال إيصال الحجز وخطة التقسيط لواتساب المريض
                </strong>
                <span className="flex items-center text-emerald-400 text-xs">
                  <CheckCheck className="w-4 h-4" />
                </span>
              </div>
              <span className="text-xs text-[#7ED3E2] font-mono block">
                ملف مرفق: NS-2026_Approval_Receipt.pdf • تم الاستلام
              </span>
            </div>
          </div>

          <span className="px-3 py-1 rounded-xl bg-emerald-950 text-emerald-300 text-xs font-bold font-mono border border-emerald-500/30">
            DELIVERED ✓
          </span>
        </motion.div>

        {/* Footer Note */}
        <div className="pt-2 border-t border-slate-300 flex justify-between items-center text-xs text-slate-500 font-bold relative z-10">
          <span>كل خطوة موثقة ومربوطة بالخزينة ورسائل الواتساب الفورية</span>
          <span className="text-emerald-700 font-mono font-bold">الخطوة القادمة ⬅</span>
        </div>
      </motion.div>
    </div>
  );
}
