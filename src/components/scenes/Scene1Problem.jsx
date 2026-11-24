import { motion } from 'framer-motion';
import {
  User,
  ClipboardList,
  HeartPulse,
  Stethoscope,
  Landmark,
  AlertTriangle,
  FileSpreadsheet,
  XCircle,
  Clock,
  FileWarning,
  TrendingDown,
  Layers,
  FileText,
  Search,
} from 'lucide-react';

export default function Scene1Problem({ currentTime }) {
  // Active from 16.0s to 32.0s
  if (currentTime < 16.0 || currentTime > 32.0) return null;

  const relTime = currentTime - 16.0;

  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-start gap-4 p-8 pt-16 bg-cream-notebook text-slate-900 font-cairo overflow-hidden">
      {/* Red vertical notebook margin line on right side (Arabic Notebook style) */}
      <div className="absolute right-[80px] inset-y-0 w-0.5 bg-rose-400/80 pointer-events-none z-0" />

      {/* ── Section Header with Numbered Ear-Tag 1 ── */}
      <div className="flex items-center justify-between border-b-2 border-slate-300/80 pb-3 relative z-10">
        <div className="flex items-center gap-3">
          <span className="px-5 py-2 rounded-2xl bg-[#F59E0B] text-slate-950 font-black text-2xl shadow-gold-tag -rotate-2 border-2 border-slate-950 font-cairo">
            ١ المشكلة
          </span>
          <h2 className="text-3xl font-black text-slate-900 font-cairo tracking-tight">
            إدارة العيادات الورقية والمبعثرة
          </h2>
        </div>
        <span className="text-xs font-mono font-bold text-rose-700 bg-rose-100 px-3.5 py-1.5 rounded-xl border border-rose-300 shadow-sm">
          CASE STUDY #2026 • الإجراءات اليدوية
        </span>
      </div>

      {/* ── 1. Flow Diagram: 5 Steps with Dark Teal Cards for High Contrast on Cream Paper ── */}
      <div className="relative z-10">
        <div className="grid grid-cols-5 gap-3 w-full">
          {/* Step 1: المريض */}
          <motion.div
            initial={{ scale: 0, y: 15 }}
            animate={{ scale: relTime >= 0.1 ? 1 : 0, y: relTime >= 0.1 ? 0 : 15 }}
            className="p-3.5 rounded-2xl bg-[#0A2E2A] text-white border-2 border-[#14B8A6]/50 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/20 text-[#2DD4BF] flex items-center justify-center mb-1.5 border border-[#14B8A6]/40">
              <User className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-slate-300">١. وصول</span>
            <strong className="text-sm font-black text-white font-cairo">المريض</strong>
          </motion.div>

          {/* Step 2: الاستقبال */}
          <motion.div
            initial={{ scale: 0, y: 15 }}
            animate={{ scale: relTime >= 0.25 ? 1 : 0, y: relTime >= 0.25 ? 0 : 15 }}
            className="p-3.5 rounded-2xl bg-[#0A2E2A] text-white border-2 border-[#14B8A6]/50 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-900 text-teal-300 flex items-center justify-center mb-1.5 border border-teal-500/40">
              <ClipboardList className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-slate-300">٢. ملف ورقي</span>
            <strong className="text-sm font-black text-white font-cairo">الاستقبال</strong>
          </motion.div>

          {/* Step 3: التمريض */}
          <motion.div
            initial={{ scale: 0, y: 15 }}
            animate={{ scale: relTime >= 0.4 ? 1 : 0, y: relTime >= 0.4 ? 0 : 15 }}
            className="p-3.5 rounded-2xl bg-[#0A2E2A] text-white border-2 border-[#14B8A6]/50 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-900 text-cyan-300 flex items-center justify-center mb-1.5 border border-cyan-500/40">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-slate-300">٣. قياسات</span>
            <strong className="text-sm font-black text-white font-cairo">التمريض</strong>
          </motion.div>

          {/* Step 4: الدكتور */}
          <motion.div
            initial={{ scale: 0, y: 15 }}
            animate={{ scale: relTime >= 0.55 ? 1 : 0, y: relTime >= 0.55 ? 0 : 15 }}
            className="p-3.5 rounded-2xl bg-[#0A2E2A] text-white border-2 border-[#14B8A6]/50 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center mb-1.5 border border-emerald-500/40">
              <Stethoscope className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-slate-300">٤. تشخيص</span>
            <strong className="text-sm font-black text-white font-cairo">الدكتور</strong>
          </motion.div>

          {/* Step 5: الخزينة */}
          <motion.div
            initial={{ scale: 0, y: 15 }}
            animate={{ scale: relTime >= 0.7 ? 1 : 0, y: relTime >= 0.7 ? 0 : 15 }}
            className="p-3.5 rounded-2xl bg-rose-950 text-white border-2 border-rose-500 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-900 text-rose-300 flex items-center justify-center mb-1.5 border border-rose-500/40">
              <Landmark className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-rose-300">٥. التقسيط؟</span>
            <strong className="text-sm font-black text-rose-200 font-cairo">الخزينة</strong>
          </motion.div>
        </div>

        {/* Animated Connecting SVG Arrows */}
        <div className="w-full px-6 -mt-1">
          <svg viewBox="0 0 900 45" className="w-full h-8 overflow-visible">
            <motion.path
              d="M 90 22 C 130 5, 140 40, 180 22"
              fill="none"
              stroke="#0A2E2A"
              strokeWidth="4"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: relTime >= 0.3 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              d="M 270 22 C 310 40, 320 5, 360 22"
              fill="none"
              stroke="#0A2E2A"
              strokeWidth="4"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: relTime >= 0.45 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              d="M 450 22 C 490 5, 500 40, 540 22"
              fill="none"
              stroke="#0A2E2A"
              strokeWidth="4"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: relTime >= 0.6 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              d="M 630 22 C 670 40, 680 5, 720 22"
              fill="none"
              stroke="#E11D48"
              strokeWidth="5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: relTime >= 0.75 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </div>
      </div>

      {/* ── 2. Middle Visual Centerpiece: Manila Paper Clinical Chaos Folder ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="relative z-10 p-5 rounded-3xl bg-white/95 border-2 border-rose-400 shadow-xl overflow-hidden"
      >
        {/* Header of paper incident card */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black shadow">
              <FileWarning className="w-6 h-6" />
            </div>
            <div>
              <strong className="text-base font-black text-slate-900 font-cairo block">
                أزمة الملفات الورقية المفقودة بين الأقسام
              </strong>
              <span className="text-xs text-slate-500 font-cairo font-bold">
                سجل حركة مريض في العيادات الخارجية • مستندات ورقية غير مربوطة بالنظام
              </span>
            </div>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-700 font-mono text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <Search className="w-4 h-4 animate-pulse text-rose-600" />
            <span>مفقود قيد البحث بالاستقبال ⚠️</span>
          </div>
        </div>

        {/* 3 Physical Paper Slips Showing the Disconnect */}
        <div className="grid grid-cols-3 gap-3.5">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-300 space-y-1.5 text-right font-cairo">
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-1 font-mono">
              <span>ملف ورقي #1042</span>
              <span className="text-amber-700 font-bold">الاستقبال</span>
            </div>
            <strong className="text-sm text-slate-900 block">روشتة ورقية غير مقروءة</strong>
            <p className="text-xs text-slate-600 leading-snug">
              خط يد غير واضح أدى لتأخير صرف الدواء 35 دقيقة إضافية
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-300 space-y-1.5 text-right font-cairo">
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-1 font-mono">
              <span>إيصال سداد يدوي</span>
              <span className="text-rose-700 font-bold">الخزينة</span>
            </div>
            <strong className="text-sm text-slate-900 block">عجز نقدية بالدرج</strong>
            <p className="text-xs text-slate-600 leading-snug">
              سداد 28,000 ج.م كاش بدون قيد مركزي أدى لتضارب الرصيد
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-300 space-y-1.5 text-right font-cairo">
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-1 font-mono">
              <span>طلب تقسيط يدوي</span>
              <span className="text-indigo-700 font-bold">الائتمان</span>
            </div>
            <strong className="text-sm text-slate-900 block">موافقة مؤجلة 72 ساعة</strong>
            <p className="text-xs text-slate-600 leading-snug">
              المريض غادر المستشفى وألغى الجراحة لتعطل الموافقة
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── 3. Incident Delay Callout Banner ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-400 flex items-center justify-between text-amber-950 shadow-md"
      >
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-black text-xs font-cairo shadow">
            تأخير يدوي فادح!
          </span>
          <p className="text-sm font-bold font-cairo text-amber-950">
            الملف الورقي بياخد 45 دقيقة تنقل بين الاستقبال والتمريض وعيادة الدكتور!
          </p>
        </div>
        <span className="text-xs font-mono text-rose-700 font-bold flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-amber-300">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          <span>إهدار وقت المريض ⏳</span>
        </span>
      </motion.div>

      {/* ── 4. 3 Diagnostic Sticky Cards ── */}
      <div className="relative z-10 grid grid-cols-3 gap-3.5">
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] text-slate-950 shadow-md font-bold text-xs -rotate-1 border border-amber-300">
          <div className="flex items-center gap-1.5 text-amber-900 font-black mb-1">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <span className="font-cairo text-sm font-black">3 فروع منفصلة</span>
          </div>
          <p className="font-cairo text-slate-800 text-xs leading-snug">
            كل فرع شغال بملفات ورقية وشيتات إكسيل منعزلة بدون ربط مركزي!
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FFE4E6] to-[#FECDD3] text-rose-950 shadow-md font-bold text-xs rotate-1 border border-rose-300">
          <div className="flex items-center gap-1.5 text-rose-900 font-black mb-1">
            <Clock className="w-4 h-4 text-rose-700" />
            <span className="font-cairo text-xs font-black">موافقات معطلة</span>
          </div>
          <p className="font-cairo text-slate-800 text-xs leading-snug">
            طلب تقسيط العملية الجراحية بياخد 48 إلى 72 ساعة انتظار ومراجعات!
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FFEDD5] to-[#FED7AA] text-orange-950 shadow-md font-bold text-xs -rotate-1 border border-orange-300">
          <div className="flex items-center gap-1.5 text-orange-900 font-black mb-1">
            <TrendingDown className="w-4 h-4 text-orange-700" />
            <span className="font-cairo text-xs font-black">خسارة العمليات</span>
          </div>
          <p className="font-cairo text-slate-800 text-xs leading-snug">
            30% من مرضى العمليات بيمشوا ومبيعملوش الجراحة لصعوبة السداد!
          </p>
        </div>
      </div>

      {/* ── 5. Crisp Broken Excel Grid with Discrepancy Evidence (Deep Teal on Cream Paper) ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 p-4 rounded-3xl bg-[#0A2E2A] text-white border-2 border-slate-700 shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-black">
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs">حسابات_العمليات_والخزينة_يدوي_2026.xlsx</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-md bg-rose-950 text-rose-300 font-bold font-mono text-[11px] border border-rose-500/50">
            أخطاء مطابقة #REF!
          </span>
        </div>

        <table className="w-full text-right text-xs border-collapse">
          <thead>
            <tr className="bg-[#081F1C] text-slate-300 border-b border-slate-700 font-bold font-cairo">
              <th className="p-2">كود المريض</th>
              <th className="p-2">العملية الجراحية</th>
              <th className="p-2">الفرع</th>
              <th className="p-2">تكلفة العملية</th>
              <th className="p-2">مطابقة الخزينة</th>
            </tr>
          </thead>
          <tbody className="font-mono divide-y divide-slate-800 text-slate-200">
            <tr>
              <td className="p-2 font-bold text-white">NS-1042</td>
              <td className="p-2 font-cairo">تغيير مفصل الركبة</td>
              <td className="p-2 font-cairo">مصر الجديدة</td>
              <td className="p-2 font-bold text-white">95,000 ج.م</td>
              <td className="p-2 text-rose-400 font-bold bg-rose-950/40 flex items-center gap-1 font-cairo">
                <XCircle className="w-3.5 h-3.5" />
                <span>فاتورة مفقودة</span>
              </td>
            </tr>
            <tr>
              <td className="p-2 font-bold text-white">NS-1043</td>
              <td className="p-2 font-cairo">مياه بيضاء (فاكو)</td>
              <td className="p-2 font-cairo">المهندسين</td>
              <td className="p-2 font-bold text-white">28,000 ج.م</td>
              <td className="p-2 text-rose-400 font-black bg-rose-900/40">
                #REF! خطأ صيغة
              </td>
            </tr>
            <tr>
              <td className="p-2 font-bold text-white">NS-1044</td>
              <td className="p-2 font-cairo">تكميم معدة بالمنظار</td>
              <td className="p-2 font-cairo">التجمع الخامس</td>
              <td className="p-2 font-bold text-white">65,000 ج.م</td>
              <td className="p-2 text-rose-400 font-bold bg-rose-950/40 flex items-center gap-1 font-cairo">
                <XCircle className="w-3.5 h-3.5" />
                <span>طلب تقسيط معلق</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-2.5 pt-2 border-t border-slate-700 flex items-center justify-between text-xs">
          <span className="text-slate-300 font-bold font-cairo">عجز المطابقة بين الفروع:</span>
          <strong className="text-rose-400 font-mono font-black text-sm">
            - 42,500 ج.م (فروقات غير مسجلة ❌)
          </strong>
        </div>
      </motion.div>

      {/* Footer Note */}
      <div className="pt-2 border-t border-slate-300 flex justify-between items-center text-xs text-slate-600 font-bold relative z-10 font-cairo mt-auto">
        <span>النتيجة: إرهاق للطاقم الطبي وخسارة ملايين في العمليات الجراحية</span>
        <span className="text-[#0A2E2A] font-mono font-bold">الحل قادم في الثواني التالية ⬅</span>
      </div>
    </div>
  );
}
