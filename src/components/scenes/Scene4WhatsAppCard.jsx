import { motion } from 'framer-motion';
import {
  Send,
  CheckCheck,
  Sparkles,
  MessageSquare,
  PhoneCall,
  Video,
  MoreVertical,
  Paperclip,
  Camera,
  Smile,
  FileText,
  Download,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Clock,
  Lock,
  Database,
  Building2,
} from 'lucide-react';

export default function Scene4WhatsAppCard({ currentTime }) {
  // Active from 64.0s to 74.0s
  if (currentTime < 64.0) return null;

  const relTime = currentTime - 64.0;

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center p-6 bg-medical-dark-teal/90 backdrop-blur-md font-cairo">
      {/* ── Main Container: Smartphone Frame + Flanking Stats & CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-[980px] flex flex-col items-center relative select-none"
      >
        {/* Flanking Floating Badges (Filling Left & Right Canvas Margins) */}
        {/* Right Side Badges */}
        <div className="absolute -right-2 top-24 space-y-20 pointer-events-none hidden md:flex flex-col z-20">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-3.5 rounded-2xl bg-[#08221F]/95 border-2 border-[#14B8A6]/60 text-white shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#14B8A6]/20 text-[#2DD4BF] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-300 block font-bold font-cairo">رد آلي ذكي</span>
              <strong className="text-sm font-black text-white font-mono">في 3 ثوانٍ ⚡</strong>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-3.5 rounded-2xl bg-[#08221F]/95 border-2 border-emerald-500/60 text-white shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-300 block font-bold font-cairo">اعتماد فوري</span>
              <strong className="text-sm font-black text-emerald-400 font-cairo">عقد تقسيط معتمد ✓</strong>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="p-3.5 rounded-2xl bg-[#08221F]/95 border-2 border-amber-500/60 text-white shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-[#F59E0B] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-300 block font-bold font-cairo">خصوصية المريض</span>
              <strong className="text-sm font-black text-[#F59E0B] font-mono">تشفير 100%</strong>
            </div>
          </motion.div>
        </div>

        {/* Left Side Badges */}
        <div className="absolute -left-2 top-36 space-y-20 pointer-events-none hidden md:flex flex-col z-20">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-3.5 rounded-2xl bg-[#08221F]/95 border-2 border-[#14B8A6]/60 text-white shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#14B8A6]/20 text-[#2DD4BF] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-300 block font-bold font-cairo">جاهزية مستمرة</span>
              <strong className="text-sm font-black text-white font-cairo">24 ساعة / 7 أيام</strong>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-3.5 rounded-2xl bg-[#08221F]/95 border-2 border-emerald-500/60 text-white shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-300 block font-bold font-cairo">تكامل البيانات</span>
              <strong className="text-sm font-black text-emerald-400 font-cairo">ربط لحظي بالعيادة</strong>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="p-3.5 rounded-2xl bg-[#08221F]/95 border-2 border-[#25D366]/60 text-white shadow-xl backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-300 block font-bold font-cairo">تغطية جغرافية</span>
              <strong className="text-sm font-black text-white font-cairo">3 فروع بالقاهرة</strong>
            </div>
          </motion.div>
        </div>

        {/* Top-Right Tilted Yellow Ear-Tag: مخصص لعيادتك (like frame_73s) */}
        <div className="absolute -top-5 right-16 z-40 px-7 py-2.5 rounded-2xl bg-[#F59E0B] text-slate-950 font-black text-2xl shadow-gold-tag border-2 border-slate-950 -rotate-3 flex items-center gap-2 font-cairo">
          <Sparkles className="w-6 h-6 fill-slate-950" />
          <span>مخصص لعيادتك</span>
        </div>

        {/* ── Real Smartphone Mockup Chassis (w-[700px] taking 88-90% width) ── */}
        <div className="w-[700px] rounded-[52px] bg-slate-950 border-[10px] border-slate-800 shadow-teal-brand overflow-hidden relative flex flex-col">
          {/* Dynamic Island / Speaker Notch */}
          <div className="h-7 bg-slate-950 flex items-center justify-center relative z-20">
            <div className="w-28 h-4 bg-black rounded-full flex items-center justify-end px-2">
              <span className="w-2 h-2 rounded-full bg-slate-800" />
            </div>
          </div>

          {/* ── WhatsApp Application Screen ── */}
          <div className="flex-1 bg-[#0B141A] flex flex-col text-right font-cairo">
            {/* 1. WhatsApp Top Bar */}
            <div className="h-16 bg-[#1F2C34] px-4 flex items-center justify-between text-white border-b border-white/10 select-none">
              <div className="flex items-center gap-3">
                {/* Avatar with Verified Badge */}
                <div className="relative">
                  <div className="w-11 h-11 rounded-full border-2 border-[#25D366] overflow-hidden shadow">
                    <img
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
                      alt="Noor El-Shefaa Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-[#25D366] text-slate-950 flex items-center justify-center text-[10px] font-black border border-[#1F2C34]">
                    ✓
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <strong className="text-base font-black text-white font-cairo">
                      مجمع نور الشفاء الطبي
                    </strong>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                      حساب موثق
                    </span>
                  </div>
                  <span className="text-xs text-[#25D366] block font-bold">
                    متصل الآن • خدمة عملاء 24/7
                  </span>
                </div>
              </div>

              {/* Call & Action Icons */}
              <div className="flex items-center gap-4 text-slate-300">
                <Video className="w-5 h-5 text-slate-400" />
                <PhoneCall className="w-5 h-5 text-slate-400" />
                <MoreVertical className="w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* 2. WhatsApp Chat Messages with Large High-Legibility Typography */}
            <div className="p-4 space-y-3.5 bg-[#081219] min-h-[460px] flex flex-col justify-end relative">
              {/* Date Bubble */}
              <div className="self-center px-4 py-1 rounded-xl bg-[#182229] text-slate-300 text-xs font-bold shadow-sm font-mono">
                اليوم
              </div>

              {/* Message 1: Incoming Welcome & Surgery Approval */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: relTime >= 0.1 ? 1 : 0, x: relTime >= 0.1 ? 0 : 20 }}
                className="self-start max-w-[85%] p-3.5 rounded-2xl rounded-tr-xs bg-[#202C33] text-slate-100 shadow-md text-sm space-y-1.5 border border-white/5"
              >
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>الموافقة الائتمانية للعملية الجراحية</span>
                </div>
                <p className="text-slate-200 leading-relaxed text-sm">
                  أهلاً بحضرتك في <strong>مجمع نور الشفاء الطبي</strong> 🏥
                  تمت الموافقة الائتمانية الفورية على تقسيط عملية <strong>(المياه البيضاء بالفاكو)</strong> بقسط شهري <strong>1,167 ج.م</strong> على 24 شهراً بدون فوائد.
                </p>
                <span className="text-[11px] text-slate-400 font-mono block text-left">
                  10:28 ص
                </span>
              </motion.div>

              {/* Message 2: Incoming PDF Agreement Attachment Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: relTime >= 0.4 ? 1 : 0, x: relTime >= 0.4 ? 0 : 20 }}
                className="self-start max-w-[85%] p-3.5 rounded-2xl rounded-tr-xs bg-[#202C33] text-slate-100 shadow-md text-sm border border-white/5 space-y-2"
              >
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111B21] border border-white/10">
                  <div className="w-11 h-11 rounded-lg bg-rose-600/20 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/30">
                    <FileText className="w-6 h-6 text-rose-400" />
                  </div>
                  <div className="flex-1 text-right">
                    <strong className="text-sm font-bold text-white block truncate font-mono" dir="ltr">
                      عقد_تقسيط_معتمد_NS-2026.pdf
                    </strong>
                    <span className="text-xs text-slate-300 font-mono">
                      240 KB • تم الاعتماد والختم رسمياً ✓
                    </span>
                  </div>
                  <Download className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[11px] text-slate-400 font-mono block text-left">
                  10:29 ص
                </span>
              </motion.div>

              {/* Message 3: Outgoing Patient Message "سيستم" */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: relTime >= 0.8 ? 1 : 0, x: relTime >= 0.8 ? 0 : -20 }}
                className="self-end max-w-[70%] px-5 py-3 rounded-2xl rounded-tl-xs bg-[#005C4B] text-white shadow-md text-base font-bold flex items-center gap-3"
              >
                <span className="font-cairo font-black text-lg">سيستم</span>
                <div className="flex items-center gap-1 text-xs text-emerald-200 font-mono">
                  <span>10:30 ص</span>
                  <CheckCheck className="w-4 h-4 text-sky-400" />
                </div>
              </motion.div>

              {/* Message 4: Incoming Automated Booking Confirmation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: relTime >= 1.2 ? 1 : 0, x: relTime >= 1.2 ? 0 : 20 }}
                className="self-start max-w-[85%] p-4 rounded-2xl rounded-tr-xs bg-[#202C33] text-slate-100 shadow-md text-sm space-y-2 border border-white/5"
              >
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-sm">
                  <span>✅ تم تأكيد موعد الكشف والعملية:</span>
                </div>
                <div className="text-xs text-slate-200 space-y-1.5 bg-[#111B21] p-3 rounded-xl border border-white/5 font-cairo">
                  <div>• كود الحجز: <strong className="text-white font-mono text-sm">NS-2026</strong></div>
                  <div>• المريض: <strong className="text-white text-sm">أحمد محمود الديب</strong></div>
                  <div>• العيادة: <strong className="text-indigo-300 text-sm">عيادة رمد 101 (طابور #7)</strong></div>
                  <div>• الميعاد: <strong className="text-emerald-400 text-sm">اليوم 06:30 مساءً</strong></div>
                  <div>• القسط: <strong className="text-[#F59E0B] font-mono text-sm">1,167 ج.م/شهر</strong> (24 شهر)</div>
                </div>
                <span className="text-[11px] text-slate-400 font-mono block text-left">
                  10:30 ص
                </span>
              </motion.div>
            </div>

            {/* 3. WhatsApp Bottom Input Row */}
            <div className="h-14 bg-[#1F2C34] px-3 flex items-center gap-2 border-t border-white/10 select-none">
              <Smile className="w-5 h-5 text-slate-400 shrink-0" />
              <div className="flex-1 bg-[#2A3942] rounded-2xl px-3 py-1.5 text-slate-400 text-xs flex items-center justify-between">
                <span>اكتب رسالة...</span>
                <div className="flex items-center gap-2">
                  <Paperclip className="w-4 h-4 text-slate-400" />
                  <Camera className="w-4 h-4 text-slate-400" />
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#00A884] text-slate-950 flex items-center justify-center shrink-0 shadow">
                <Send className="w-4 h-4 rotate-180 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* ── WhatsApp Direct Phone Number Pill ── */}
        <div className="mt-4 w-[700px] py-3.5 px-6 rounded-2xl bg-[#082C22] border-2 border-[#25D366]/60 text-white font-mono font-black text-xl flex items-center justify-center gap-3 shadow-lg">
          <MessageSquare className="w-6 h-6 fill-[#25D366] text-[#25D366]" />
          <span dir="ltr">+20 100 852 9410</span>
        </div>

        {/* ── Bright Orange / Amber CTA Button (like frame_73s) ── */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-3.5 w-[700px] py-4 rounded-2xl bg-[#F59E0B] hover:bg-amber-400 text-slate-950 font-black text-2xl shadow-gold-tag flex items-center justify-center gap-3 transition cursor-pointer border-2 border-slate-950 font-cairo select-none"
        >
          <span>«ابعتلي «سيستم</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
