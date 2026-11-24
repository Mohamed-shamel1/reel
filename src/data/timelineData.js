export const DURATION = 74; // 74 seconds (1m 14s)

export const PIP_STATES = {
  FULLSCREEN: 'fullscreen',
  PIP_CIRCLE: 'pip_circle',
};

// Pacing:
// 0:00 - 0:16: Fullscreen Talking Head + Intro Overlay (Hook & Question)
// 0:16 - 0:32: Section 1 "١ المشكلة" (PiP circle bottom-left)
// 0:32 - 0:52: Section 2 "٢ الحل: شاشة واحدة" (PiP circle bottom-left)
// 0:52 - 1:04: Section 3 "٣ كشف الحساب والإثبات" (PiP circle bottom-left)
// 1:04 - 1:14: Fullscreen + WhatsApp CTA Card (@abdaal.dev style)
export function getPipState(time) {
  if (time >= 0 && time < 16) return PIP_STATES.FULLSCREEN;
  if (time >= 16 && time < 64) return PIP_STATES.PIP_CIRCLE;
  return PIP_STATES.FULLSCREEN; // 64 - 74 (Full screen with WhatsApp CTA Card)
}

export function getCurrentSection(time) {
  if (time < 16) return 0; // Intro hook & question
  if (time < 32) return 1; // Section 1: المشكلة
  if (time < 52) return 2; // Section 2: الحل: شاشة واحدة
  if (time < 64) return 3; // Section 3: كشف الحساب والموافقات
  return 4; // Final CTA: كارت الواتساب
}

export const getCurrentScene = getCurrentSection;

// Natural Egyptian Arabic Captions with Highlight Words
export const SUBTITLES = [
  {
    start: 0,
    end: 3.8,
    text: 'لو مجمع عيادات طلب منك سيستم يدير 1000 دكتور...',
    highlight: 'مجمع عيادات',
  },
  {
    start: 3.8,
    end: 8.0,
    text: 'ويقسّط العمليات الجراحية للمرضى بـ 0% فوائد؟',
    highlight: '0% فوائد',
  },
  {
    start: 8.0,
    end: 12.0,
    text: 'تفتكر السيستم اللي هو محتاجه عبارة عن إيه؟',
    highlight: 'عبارة عن إيه؟',
  },
  {
    start: 12.0,
    end: 16.0,
    text: 'السؤال اللي بيتسأل كل يوم: ينفع أقسّط العملية الجراحية؟',
    highlight: 'ينفع أقسّط العملية؟',
  },
  // Section 1: المشكلة (16s - 32s)
  {
    start: 16.0,
    end: 20.0,
    text: '١. المشكلة: المريض بيلف بين الاستقبال، التمريض، والدكتور...',
    highlight: 'المشكلة',
  },
  {
    start: 20.0,
    end: 24.5,
    text: 'وعلى ما يوصل للخزينة، الورقة بتضيع والإكسيل مليان أخطاء!',
    highlight: 'الإكسيل مليان أخطاء',
  },
  {
    start: 24.5,
    end: 28.5,
    text: '٣ فروع شغالة مع بعض بموافقات ائتمانية متأخرة أيام!',
    highlight: '3 فروع منفصلة',
  },
  {
    start: 28.5,
    end: 32.0,
    text: 'والنتيجة عجز وفروقات حسابية بتضيع ملايين كل شهر!',
    highlight: 'عجز وفروقات',
  },
  // Section 2: الحل (32s - 52s)
  {
    start: 32.0,
    end: 36.5,
    text: '٢. الحل: شاشة واحدة ذكية بتربط الكشف بالتقسيط فوري!',
    highlight: 'شاشة واحدة',
  },
  {
    start: 36.5,
    end: 41.5,
    text: 'المريض بيحسب قسط عمليته بـ 0% فوائد على 24 شهر...',
    highlight: '24 شهر',
  },
  {
    start: 41.5,
    end: 46.5,
    text: 'والدكتور بيكتب التشخيص والروشتة وتتحول للتقسيط في ثانية!',
    highlight: 'في ثانية',
  },
  {
    start: 46.5,
    end: 52.0,
    text: 'موافقة ائتمانية فورية بدون ضامن ولا ورق معقد!',
    highlight: 'موافقة فورية',
  },
  // Section 3: الإثبات (52s - 64s)
  {
    start: 52.0,
    end: 56.0,
    text: '٣. كشف الحساب: كل مليم بيتسجل لحظي في خزينة الفروع!',
    highlight: 'كشف الحساب',
  },
  {
    start: 56.0,
    end: 60.0,
    text: 'طابعة الإيصالات بتطبع إيصال الحجز المعتمد فوراً للمريض!',
    highlight: 'إيصال الحجز',
  },
  {
    start: 60.0,
    end: 64.0,
    text: 'وصافي الخزينة بيتطابق بالجنيه: 485,200 ج.م بدون عجز مليم!',
    highlight: '485,200 ج.م',
  },
  // Final CTA (64s - 74s)
  {
    start: 64.0,
    end: 69.0,
    text: 'لو عايز سيستم زي ده مخصص لعيادتك بالكامل يضاعف العمليات...',
    highlight: 'مخصص لعيادتك',
  },
  {
    start: 69.0,
    end: 74.0,
    text: 'ابعت كلمة "سيستم" في رسالة واتساب وخلينا نبدأ!',
    highlight: '«سيستم»',
  },
];

export const SCENE_CHAPTERS = [
  { id: 1, title: 'المقدمة والسؤال', start: 0, end: 16 },
  { id: 2, title: '١. المشكلة (الورق والإكسيل)', start: 16, end: 32 },
  { id: 3, title: '٢. الحل (شاشة واحدة)', start: 32, end: 52 },
  { id: 4, title: '٣. كشف الحساب والإثبات', start: 52, end: 64 },
  { id: 5, title: 'خاتمة: كارت الواتساب', start: 64, end: 74 },
];
