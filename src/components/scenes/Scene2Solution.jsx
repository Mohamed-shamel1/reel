import { motion } from 'framer-motion';
import {
  Calculator,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Building2,
  Globe,
  Clock,
  Zap,
  FileText,
  QrCode,
  ArrowDownLeft,
  Stamp,
  Award,
} from 'lucide-react';

export default function Scene2Solution({ currentTime }) {
  // Active from 32.0s to 52.0s
  if (currentTime < 32.0 || currentTime > 52.0) return null;

  const relTime = currentTime - 32.0;

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
        {/* Decorative Watermark Aura */}
        <div className="absolute top-1/4 -right-16 w-96 h-96 bg-[#14B8A6]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-16 w-96 h-96 bg-[#F59E0B]/12 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header with Numbered Ear-Tag 2 (like @abdaal.dev frame_30s) */}
        <div className="flex items-center justify-between border-b border-[#14B8A6]/30 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="px-5 py-2 rounded-2xl bg-[#F59E0B] text-slate-950 font-black text-2xl shadow-gold-tag -rotate-2 border-2 border-slate-950 font-cairo">
              ٢ الحل: شاشة واحدة
            </span>
            <h2 className="text-3xl font-black text-white font-cairo">
              منظومة نور الشفاء للتقسيط الطبي الموحد
            </h2>
          </div>
          <span className="px-3.5 py-1.5 rounded-xl bg-[#08221F] text-[#2DD4BF] text-xs font-bold border border-[#14B8A6]/40 font-cairo">
            ربط لحظي بين 3 فروع
          </span>
        </div>

        {/* ── Content Area: Sized at 88-90% frame width from the very first frame ── */}
        <div className="relative z-10 my-auto space-y-4 w-full">
          {/* 1. Real Browser Window Mockup with Zoomed-In Focus on Installments */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full rounded-3xl bg-[#071C19] border-2 border-[#14B8A6]/60 shadow-2xl overflow-hidden"
          >
            {/* macOS Chrome Header */}
            <div className="h-9 bg-[#051412] border-b border-white/10 px-4 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>

              <div className="flex items-center gap-2 px-4 py-0.5 rounded-lg bg-[#0A2E2A] border border-white/10 text-xs font-mono text-[#2DD4BF] w-[380px] justify-center">
                <Globe className="w-3 h-3 text-[#14B8A6]" />
                <span>noor-elshefaa.eg/installments?demo=true</span>
              </div>

              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/40">
                0% BNPL LIVE
              </span>
            </div>

            {/* Real Screenshot from noor_elshefaa_FE - Zoomed in on Core Surgery Installment Card */}
            <div className="relative h-[250px] overflow-hidden bg-slate-950">
              <img
                src="/screenshots/real_installments.png"
                alt="Noor El-Shefaa Installments System"
                className="w-full h-full object-cover object-top scale-120 origin-top"
              />

              {/* Dynamic Overlay Floating Highlight Pill */}
              <motion.div
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.25, type: 'spring' }}
                className="absolute top-3 left-3 p-3.5 rounded-2xl bg-[#08221F]/95 border-2 border-[#F59E0B] shadow-2xl backdrop-blur-md text-start space-y-1"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-200 font-bold font-cairo">العملية المحددة:</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-[10px] font-cairo">
                    0% فوائد معتمدة
                  </span>
                </div>
                <strong className="text-sm font-black text-white block font-cairo">
                  عملية المياه البيضاء بالفاكو (28,000 ج.م)
                </strong>
                <div className="flex items-baseline gap-2 pt-0.5 border-t border-white/10 font-mono">
                  <span className="text-lg font-black text-[#F59E0B]">1,167 ج.م / شهر</span>
                  <span className="text-xs text-slate-300 font-cairo">(على 24 شهراً)</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 2. 3 Real Feature Stat Badges (In Deep Medical Teal) */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-[#08221F] border border-[#14B8A6]/40 shadow flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#14B8A6]/20 text-[#2DD4BF] flex items-center justify-center shrink-0 border border-[#14B8A6]/30">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-start">
                <span className="text-[11px] text-slate-300 block font-bold font-cairo">سرعة التعميد</span>
                <strong className="text-sm font-black text-white font-mono">موافقة في 15 دقيقة</strong>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#08221F] border border-[#14B8A6]/40 shadow flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#F59E0B]/30">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-start">
                <span className="text-[11px] text-slate-300 block font-bold font-cairo">نسبة القبول</span>
                <strong className="text-sm font-black text-[#F59E0B] font-mono">98.4% قبول فوري</strong>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#08221F] border border-[#14B8A6]/40 shadow flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-start">
                <span className="text-[11px] text-slate-300 block font-bold font-cairo">الضمانات المطلوبة</span>
                <strong className="text-sm font-black text-emerald-400 font-cairo">بالبطاقة الشخصية فقط</strong>
              </div>
            </div>
          </div>

          {/* 3. Official Surgical Installment Agreement Document Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="w-full rounded-3xl bg-slate-50 border-4 border-[#14B8A6] shadow-2xl p-5 text-slate-950 relative overflow-hidden"
          >
            {/* Watermark seal behind agreement */}
            <div className="absolute right-12 top-10 w-52 h-52 border-8 border-slate-200/50 rounded-full flex items-center justify-center pointer-events-none rotate-12">
              <span className="text-3xl font-black text-slate-200/60 font-cairo">معتمد رسمي</span>
            </div>

            {/* Document Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2.5 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#0A2E2A] text-white flex items-center justify-center font-black shadow-md">
                  <FileText className="w-6 h-6 text-[#2DD4BF]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-950 font-cairo leading-tight">
                    عقد تمويل وتقسيط جراحي رسمي معتمد
                  </h3>
                  <span className="text-xs text-slate-600 font-cairo font-bold block">
                    مجمع نور الشفاء الطبي • وحدة التقسيط الصحي والائتمان المباشر
                  </span>
                </div>
              </div>

              <div className="text-left font-mono">
                <div className="px-3 py-1 rounded-lg bg-slate-200 text-slate-800 text-xs font-black border border-slate-300">
                  كود العقد: <span className="text-[#0A2E2A]">NS-AGR-2026-8821</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold font-cairo block mt-0.5">
                  ✓ تم الفحص والتعميد الإلكتروني
                </span>
              </div>
            </div>

            {/* Contract Key Details Grid - Larger Text for Easy Reading */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs border-b-2 border-slate-200 pb-3">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-slate-600 font-cairo font-bold text-xs">المريض:</span>
                <strong className="font-cairo text-slate-950 text-sm font-black">أحمد محمود الديب</strong>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-slate-600 font-cairo font-bold text-xs">الرقم القومي:</span>
                <strong className="font-mono text-slate-950 text-sm font-bold">28803150102456</strong>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-slate-600 font-cairo font-bold text-xs">التدخل الجراحي:</span>
                <strong className="font-cairo text-[#0A2E2A] text-sm font-black">مياه بيضاء (فاكو)</strong>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-slate-600 font-cairo font-bold text-xs">تكلفة العملية:</span>
                <strong className="font-mono text-slate-950 font-black text-sm">28,000 ج.م</strong>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-slate-600 font-cairo font-bold text-xs">المقدم المسدد:</span>
                <strong className="font-mono text-emerald-800 font-black text-sm">0 ج.م (0% مقدم)</strong>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-slate-600 font-cairo font-bold text-xs">المدة والفائدة:</span>
                <strong className="font-mono text-slate-950 font-black text-sm">24 شهراً (0% فوائد)</strong>
              </div>
            </div>

            {/* Installment Callout Box with Pulsing Badge */}
            <div className="mt-3 flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-[#F59E0B] relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B] text-slate-950 flex items-center justify-center font-black shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-amber-950 font-black font-cairo">
                      القسط الشهري النهائي المستحق:
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-black font-cairo">
                      سعر ثابت بدون مصاريف خفية
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 font-cairo block mt-0.5">
                    المبلغ المتبقي للسداد: <strong className="font-mono text-slate-900 font-bold">26,833 ج.م</strong> موزعة على 23 شهراً متبقياً
                  </span>
                </div>
              </div>

              {/* Pulsing Highlight Box */}
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                  className="px-4 py-2 rounded-xl bg-slate-950 text-[#F59E0B] font-mono font-black text-2xl shadow-xl flex items-center gap-2"
                >
                  <span>1,167 ج.م / شهر</span>
                </motion.div>
                <div className="absolute -top-3 -right-2 px-2 py-0.5 rounded bg-rose-600 text-white text-[10px] font-black font-cairo shadow">
                  مطلوب ⬅
                </div>
              </div>
            </div>

            {/* Stamp & Signatures Footer */}
            <div className="mt-2.5 pt-2 flex items-center justify-between text-xs text-slate-600 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full border-2 border-dashed border-emerald-700 text-emerald-800 flex items-center justify-center font-bold text-[9px] text-center font-cairo">
                  خاتم معتمد
                </div>
                <div>
                  <strong className="text-slate-950 block font-cairo font-bold text-xs">
                    معتمد من إدارة الائتمان الطبي • مجمع نور الشفاء
                  </strong>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Electronic Digital Hash: 8F2A-99B4-2026
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-slate-800 bg-slate-200/80 px-3 py-1 rounded-lg">
                <QrCode className="w-4 h-4 text-slate-900" />
                <span className="text-xs font-bold">مسح للتحقق الفوري</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-slate-300 font-bold relative z-10 font-cairo">
          <span>شاشة واحدة تجمع حاسبة التقسيط، الطبيب المعالج، وعقد التمويل المعتمد</span>
          <span className="text-[#2DD4BF] font-mono font-bold">كشف الحساب والمطابقة ⬅</span>
        </div>
      </motion.div>
    </div>
  );
}
