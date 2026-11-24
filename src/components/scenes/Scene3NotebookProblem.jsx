import { motion } from 'framer-motion';
import { User, ClipboardList, HeartPulse, Stethoscope, Landmark, AlertTriangle, FileSpreadsheet, XCircle } from 'lucide-react';

export default function Scene3NotebookProblem({ currentTime }) {
  // Active from 16.0s to 29.0s
  if (currentTime < 16.0 || currentTime > 29.0) return null;

  const relTime = currentTime - 16.0;

  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 pt-16 bg-[#061018]">
      {/* ── Cream Lined Notebook Canvas ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -40 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="w-full h-full rounded-[44px] notebook-ruled shadow-notebook border-4 border-[#E2DAC8] flex flex-col justify-between p-10 relative overflow-hidden text-right"
      >
        {/* Notebook Header Bar */}
        <div className="flex items-center justify-between border-b-2 border-slate-300 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="px-5 py-2 rounded-2xl bg-[#F59E0B] text-slate-950 font-black text-2xl shadow-gold-tag -rotate-2 border-2 border-slate-950">
              ١ المشكلة
            </span>
            <h2 className="text-3xl font-black text-[#0A2540] font-cairo">
              المريض بيلف في دوامة ورقية بين العيادات!
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-rose-600 bg-rose-100 px-3 py-1 rounded-xl border border-rose-300">
            CASE STUDY #2026 • الإجراءات اليدوية
          </span>
        </div>

        {/* ── Upper Section: Bold Animated SVG Flow Diagram (5 Nodes) ── */}
        <div className="relative z-10 mt-4 mb-2">
          {/* Node Grid (5 steps) */}
          <div className="grid grid-cols-5 gap-3 w-full">
            {/* Step 1: المريض */}
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: relTime >= 0.2 ? 1 : 0, y: relTime >= 0.2 ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-3.5 rounded-2xl bg-white border-2 border-slate-300 shadow-md flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-1.5 shadow-sm">
                <User className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-400">١. وصول</span>
              <strong className="text-sm font-black text-slate-900">المريض</strong>
            </motion.div>

            {/* Step 2: الاستقبال */}
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: relTime >= 1.2 ? 1 : 0, y: relTime >= 1.2 ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-3.5 rounded-2xl bg-white border-2 border-slate-300 shadow-md flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-1.5 shadow-sm">
                <ClipboardList className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-400">٢. ملف ورقي</span>
              <strong className="text-sm font-black text-slate-900">الاستقبال</strong>
            </motion.div>

            {/* Step 3: التمريض */}
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: relTime >= 2.2 ? 1 : 0, y: relTime >= 2.2 ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-3.5 rounded-2xl bg-white border-2 border-slate-300 shadow-md flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#0F5F6D] flex items-center justify-center mb-1.5 shadow-sm">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-400">٣. قياسات</span>
              <strong className="text-sm font-black text-slate-900">التمريض</strong>
            </motion.div>

            {/* Step 4: الدكتور */}
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: relTime >= 3.2 ? 1 : 0, y: relTime >= 3.2 ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-3.5 rounded-2xl bg-white border-2 border-slate-300 shadow-md flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-1.5 shadow-sm">
                <Stethoscope className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-400">٤. قرار العملية</span>
              <strong className="text-sm font-black text-slate-900">الدكتور</strong>
            </motion.div>

            {/* Step 5: الخزينة */}
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: relTime >= 4.2 ? 1 : 0, y: relTime >= 4.2 ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-3.5 rounded-2xl bg-white border-2 border-rose-400 shadow-md flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-1.5 shadow-sm">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-rose-500">٥. التقسيط؟</span>
              <strong className="text-sm font-black text-rose-900">الخزينة</strong>
            </motion.div>
          </div>

          {/* Self-Drawing Connecting Arrows SVG */}
          <div className="w-full px-6 -mt-1">
            <svg viewBox="0 0 900 45" className="w-full h-10 overflow-visible">
              {/* Path 1 -> 2 */}
              <motion.path
                d="M 90 22 C 130 5, 140 40, 180 22"
                fill="none"
                stroke="#1FA1B8"
                strokeWidth="4"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: relTime >= 1.0 ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              />
              {/* Path 2 -> 3 */}
              <motion.path
                d="M 270 22 C 310 40, 320 5, 360 22"
                fill="none"
                stroke="#1FA1B8"
                strokeWidth="4"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: relTime >= 2.0 ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              />
              {/* Path 3 -> 4 */}
              <motion.path
                d="M 450 22 C 490 5, 500 40, 540 22"
                fill="none"
                stroke="#1FA1B8"
                strokeWidth="4"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: relTime >= 3.0 ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              />
              {/* Path 4 -> 5 */}
              <motion.path
                d="M 630 22 C 670 40, 680 5, 720 22"
                fill="none"
                stroke="#E11D48"
                strokeWidth="5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: relTime >= 4.0 ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              />
            </svg>
          </div>
        </div>

        {/* ── Lower Section: Handwritten Slip + Crisp Broken Excel Grid + Sticky Notes ── */}
        <div className="relative z-10 space-y-4 my-auto">
          {/* Handwritten Incident Alert Slip (Animates in at relTime >= 2.0s) */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: -1 }}
            animate={{ opacity: relTime >= 2.0 ? 1 : 0, x: relTime >= 2.0 ? 0 : 40 }}
            transition={{ type: 'spring' }}
            className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-rose-500 text-white font-bold text-xs">
                تأخير يدوي!
              </span>
              <p className="text-sm font-bold text-slate-800">
                الملف الورقي بياخد 45 دقيقة تنقل بين الاستقبال والتمريض والدكتور!
              </p>
            </div>
            <span className="text-xs font-mono text-rose-600 font-bold">
              تضييع وقت المريض ⏳
            </span>
          </motion.div>

          {/* Crisp Excel (XLSX) Grid with #REF! errors (Animates in at relTime >= 4.5s) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: relTime >= 4.5 ? 1 : 0, y: relTime >= 4.5 ? 0 : 30 }}
            transition={{ type: 'spring' }}
            className="p-4 rounded-3xl bg-white border-2 border-slate-300 shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-700 font-black">
                <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                <span>حسابات_العمليات_والخزينة_يدوي_2026.xlsx</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-bold font-mono">
                أخطاء مطابقة #REF!
              </span>
            </div>

            <table className="w-full text-right text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-600 border-b border-slate-200 font-bold">
                  <th className="p-2">كود المريض</th>
                  <th className="p-2">العملية الجراحية</th>
                  <th className="p-2">الفرع</th>
                  <th className="p-2">تكلفة العملية</th>
                  <th className="p-2">مطابقة الخزينة</th>
                </tr>
              </thead>
              <tbody className="font-mono divide-y divide-slate-100">
                <tr>
                  <td className="p-2 font-bold text-slate-800">NS-1042</td>
                  <td className="p-2 font-cairo text-slate-700">تغيير مفصل الركبة</td>
                  <td className="p-2 font-cairo text-slate-700">فرع مصر الجديدة</td>
                  <td className="p-2 font-bold text-slate-900">95,000 ج.م</td>
                  <td className="p-2 text-rose-600 font-bold bg-rose-50 flex items-center gap-1 font-cairo">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>فاتورة مفقودة</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-800">NS-1043</td>
                  <td className="p-2 font-cairo text-slate-700">عملية مياه بيضاء (فاكو)</td>
                  <td className="p-2 font-cairo text-slate-700">فرع المهندسين</td>
                  <td className="p-2 font-bold text-slate-900">28,000 ج.م</td>
                  <td className="p-2 text-rose-600 font-black bg-rose-100">
                    #REF! خطأ صيغة
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-bold">عجز المطابقة بين الفروع:</span>
              <strong className="text-rose-600 font-mono font-black text-sm">
                - 42,500 ج.م (فروقات غير مسجلة ❌)
              </strong>
            </div>
          </motion.div>

          {/* Sticky Notes (Animates in at relTime >= 6.5s) */}
          <div className="grid grid-cols-3 gap-4 pt-1">
            {/* Note 1 */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{
                scale: relTime >= 6.5 ? 1 : 0,
                rotate: relTime >= 6.5 ? -3 : -10,
              }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              className="p-3.5 rounded-2xl bg-[#FEF08A] text-slate-950 shadow-md border border-amber-300 font-bold text-xs"
            >
              <div className="flex items-center gap-1 text-amber-800 font-black mb-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>3 فروع منفصلة</span>
              </div>
              <p>كل فرع شغال بملفات وإكسيل لوحده بدون ربط مركزي!</p>
            </motion.div>

            {/* Note 2 */}
            <motion.div
              initial={{ scale: 0, rotate: 12 }}
              animate={{
                scale: relTime >= 7.5 ? 1 : 0,
                rotate: relTime >= 7.5 ? 3 : 12,
              }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              className="p-3.5 rounded-2xl bg-[#FECDD3] text-rose-950 shadow-md border border-rose-300 font-bold text-xs"
            >
              <div className="flex items-center gap-1 text-rose-800 font-black mb-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>موافقات متأخرة</span>
              </div>
              <p>موافقة قسط العملية بتاخد من 48 إلى 72 ساعة انتظار!</p>
            </motion.div>

            {/* Note 3 */}
            <motion.div
              initial={{ scale: 0, rotate: -8 }}
              animate={{
                scale: relTime >= 8.5 ? 1 : 0,
                rotate: relTime >= 8.5 ? -2 : -8,
              }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              className="p-3.5 rounded-2xl bg-[#FED7AA] text-orange-950 shadow-md border border-orange-300 font-bold text-xs"
            >
              <div className="flex items-center gap-1 text-orange-800 font-black mb-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>فقدان العمليات</span>
              </div>
              <p>المرضى بيمشوا ومبيعملوش العمليات بسبب تعقيد السداد!</p>
            </motion.div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 border-t border-slate-300 flex justify-between items-center text-xs text-slate-500 font-bold relative z-10">
          <span>النتيجة: إرهاق للطاقم الطبي وخسارة ملايين في العمليات الجراحية</span>
          <span className="text-rose-600 font-mono font-bold">الحل قادم في الثواني التالية ⬅</span>
        </div>
      </motion.div>
    </div>
  );
}
