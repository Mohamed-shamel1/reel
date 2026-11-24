import { motion } from 'framer-motion';
import { Landmark, Printer, CheckCircle2, ShieldCheck, QrCode, FileText, ArrowDownLeft, Clock, Calendar, User, Stethoscope } from 'lucide-react';

export default function Scene3Proof({ currentTime }) {
  // Active from 52.0s to 64.0s
  if (currentTime < 52.0 || currentTime > 64.0) return null;

  const relTime = currentTime - 52.0;

  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 pt-16 bg-medical-dark-teal font-cairo">
      {/* ── Unified Dark Medical Green-Teal Canvas (#0A2E2A to #071917) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full rounded-[44px] bg-gradient-to-b from-[#0E3833] via-[#0A2E2A] to-[#071917] border-4 border-[#14B8A6]/60 shadow-teal-brand flex flex-col justify-between p-8 relative overflow-hidden text-right"
      >
        {/* Decorative corner glows */}
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -left-16 w-80 h-80 bg-[#14B8A6]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header with Numbered Ear-Tag 3 (like @abdaal.dev frame_60s) */}
        <div className="flex items-center justify-between border-b border-[#14B8A6]/30 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="px-5 py-2 rounded-2xl bg-[#F59E0B] text-slate-950 font-black text-2xl shadow-gold-tag -rotate-2 border-2 border-slate-950 font-cairo">
              ٣ كشف الحساب
            </span>
            <h2 className="text-3xl font-black text-white font-cairo">
              الإثبات: مطابقة الخزينة والموافقة الفورية
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-3.5 py-1.5 rounded-xl border border-emerald-500/40">
            مطابقة محاسبية 100% ✓
          </span>
        </div>

        {/* ── Middle Area: Thermal Printer on Right (RTL child 1) & Zoomed Screenshots on Left (RTL child 2) ── */}
        <div className="relative z-10 my-auto grid grid-cols-12 gap-5 items-start w-full">
          {/* 1. Right Column (5 cols): Thermal Receipt Printer (Away from bottom-left PiP) */}
          <div className="col-span-5 flex flex-col items-center">
            {/* Thermal Printer Hardware Unit */}
            <div className="w-full rounded-t-3xl bg-[#08221F] border-2 border-[#14B8A6]/60 p-3 shadow-2xl relative z-20 text-center">
              <div className="flex items-center justify-between text-xs text-slate-200 font-mono">
                <span className="flex items-center gap-1.5 text-[#2DD4BF] font-bold font-cairo">
                  <Printer className="w-4 h-4 text-[#F59E0B]" />
                  <span>طابعة الإيصالات الحرارية</span>
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="w-32 h-1.5 bg-slate-950 rounded-full mx-auto mt-2" />
            </div>

            {/* Feeding White Thermal Receipt Slip - Large High-Legibility Typography */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 430 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="w-[94%] bg-white text-slate-950 shadow-2xl relative z-10 px-4 pt-3.5 pb-6 overflow-hidden border-x border-slate-300 text-right font-mono"
            >
              {/* Receipt Header */}
              <div className="text-center border-b border-dashed border-slate-300 pb-2 mb-2 font-cairo">
                <strong className="text-base font-black text-slate-950 block">
                  مجمع نور الشفاء الطبي
                </strong>
                <span className="text-xs text-slate-600 block font-bold">
                  فرع مصر الجديدة • إيصال حجز وعقد تقسيط رسمي
                </span>
              </div>

              {/* Booking & Installment Details Grid */}
              <div className="space-y-1.5 text-xs">
                {/* 1. Booking Info */}
                <div className="flex justify-between">
                  <span className="text-slate-600 font-cairo font-bold text-xs">كود الحجز:</span>
                  <strong className="text-[#0A2E2A] font-black text-sm">NS-2026</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-cairo font-bold text-xs">اسم المريض:</span>
                  <strong className="font-cairo text-slate-900 text-sm">أحمد محمود الديب</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-cairo font-bold text-xs">العيادة والدور:</span>
                  <strong className="font-cairo text-indigo-900 font-black text-sm">طابور #7 (رمد 101)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-cairo font-bold text-xs">الميعاد:</span>
                  <strong className="font-cairo text-slate-900 text-xs">اليوم • 06:30 م</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-cairo font-bold text-xs">الطبيب:</span>
                  <strong className="font-cairo text-slate-800 text-xs font-bold">أ.د. حازم القاضي</strong>
                </div>

                {/* 2. Installment Terms */}
                <div className="border-t border-dashed border-slate-300 pt-1.5 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-cairo font-bold text-xs">العملية الجراحية:</span>
                    <strong className="font-cairo text-[#0A2E2A] text-xs font-bold">مياه بيضاء فاكو</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-cairo font-bold text-xs">تكلفة العملية:</span>
                    <strong className="text-sm font-black">28,000 ج.م</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-cairo font-bold text-xs">المقدم:</span>
                    <strong className="text-emerald-700 font-black text-xs">0 ج.م (0% مقدم)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-cairo font-bold text-xs">المدة:</span>
                    <strong className="text-xs">24 شهراً (0% فوائد)</strong>
                  </div>
                  <div className="flex justify-between bg-emerald-50 px-2 py-1 rounded border border-emerald-300 text-emerald-900">
                    <span className="font-cairo font-black text-xs">القسط الشهري:</span>
                    <strong className="font-black text-base">1,167 ج.م/شهر</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-cairo font-bold text-xs">المتبقي:</span>
                    <strong className="text-slate-900 text-xs font-bold">26,833 ج.م</strong>
                  </div>
                </div>
              </div>

              {/* Barcode */}
              <div className="mt-2.5 pt-1.5 border-t border-dashed border-slate-300 flex flex-col items-center">
                <div className="flex items-center gap-1 h-5">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-full ${
                        i % 3 === 0 ? 'w-1 bg-black' : i % 2 === 0 ? 'w-0.5 bg-black' : 'w-1 bg-transparent'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[9px] text-slate-500 mt-0.5">
                  * NS-2026-CONFIRMED *
                </span>
              </div>

              {/* Paper Tear Bottom */}
              <div className="absolute bottom-0 inset-x-0 h-3 receipt-tear" />
            </motion.div>
          </div>

          {/* 2. Left Column (7 cols): Zoomed System Screenshots (Focused on core numbers) */}
          <div className="col-span-7 space-y-3">
            {/* Real Vault Screenshot - Zoomed In on Vault Balance */}
            <div className="rounded-2xl bg-[#08221F] border-2 border-[#14B8A6]/50 shadow-xl overflow-hidden relative">
              <div className="h-7 bg-[#051412] px-3 flex items-center justify-between border-b border-white/10 text-[10px] text-slate-300 font-mono">
                <span className="text-[#2DD4BF] font-bold">noor-elshefaa.eg/clinic-manager/vault</span>
                <span className="text-emerald-400 font-bold font-cairo">خزينة فرع مصر الجديدة</span>
              </div>
              <div className="h-[200px] overflow-hidden bg-slate-950 relative">
                <img
                  src="/screenshots/real_vault.png"
                  alt="Real Vault Screenshot"
                  className="w-full h-full object-cover object-top scale-115 origin-top-right"
                />

                {/* Animated Neon Highlight Box on Vault Balance */}
                <motion.div
                  animate={{ scale: [1, 1.03, 1], borderColor: ['#14B8A6', '#F59E0B', '#14B8A6'] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-[#08221F]/95 border-2 shadow-2xl backdrop-blur-md text-right"
                >
                  <span className="text-[10px] text-slate-300 block font-cairo font-bold">رصيد الخزينة بالفرع:</span>
                  <strong className="text-lg font-black text-[#F59E0B] font-mono">485,200 ج.م</strong>
                </motion.div>
              </div>
            </div>

            {/* Real Credit Requests Screenshot - Zoomed In on Approved Row */}
            <div className="rounded-2xl bg-[#08221F] border-2 border-[#14B8A6]/50 shadow-xl overflow-hidden">
              <div className="h-7 bg-[#051412] px-3 flex items-center justify-between border-b border-white/10 text-[10px] text-slate-300 font-mono">
                <span className="text-[#2DD4BF] font-bold">noor-elshefaa.eg/credit/requests</span>
                <span className="text-emerald-400 font-bold font-cairo">صندوق استقبال طلبات التقسيط</span>
              </div>
              <div className="h-[155px] overflow-hidden bg-slate-950">
                <img
                  src="/screenshots/real_credit_requests.png"
                  alt="Real Credit Requests Screenshot"
                  className="w-full h-full object-cover object-top scale-115 origin-top"
                />
              </div>
            </div>

            {/* Micro Feature Badges */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded-xl bg-[#08221F] border border-[#14B8A6]/30 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-300 block font-bold font-cairo">تسوية فورية</span>
                  <strong className="text-xs font-black text-white font-cairo">بدون عجز مالي بالدرج</strong>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#08221F] border border-[#14B8A6]/30 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-[#F59E0B] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-300 block font-bold font-cairo">ترحيل لحظي</span>
                  <strong className="text-xs font-black text-white font-mono">في 0.05 ثانية</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mathematical Accuracy Banner (485,200 ج.م) ── */}
        <div className="relative z-10 p-3.5 rounded-3xl bg-gradient-to-r from-[#08221F] via-[#0A2E2A] to-[#0E3833] border-2 border-emerald-500/60 shadow-xl flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black shadow-md">
              <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <strong className="text-sm font-black text-white font-cairo">
                  صافي النقدية بالدرج بعد قيد العملية:
                </strong>
                <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 text-[10px] font-black font-cairo">
                  مطابقة 100%
                </span>
              </div>
              <span className="text-xs text-[#2DD4BF] font-cairo font-bold">
                (رصيد سابق: 456,750 + قسط فاكو: 28,000 + كشف: 450 = مطابقة تامة)
              </span>
            </div>
          </div>

          <div className="text-left font-mono">
            <strong className="text-2xl font-black text-[#F59E0B]">
              485,200 ج.م
            </strong>
            <span className="text-[10px] text-emerald-400 block font-cairo font-bold">
              ✓ الفارق المالي = 0.00 ج.م
            </span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-slate-300 font-bold relative z-10 font-cairo">
          <span>طباعة فورية للإيصال ومطابقة لحظية للخزينة بدون عجز مليم</span>
          <span className="text-[#2DD4BF] font-mono font-bold">دعوة التواصل ⬅</span>
        </div>
      </motion.div>
    </div>
  );
}
