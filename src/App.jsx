import { useState, useEffect, useRef, useCallback } from 'react';
import ReelCanvas from './components/studio/ReelCanvas';
import TimelineController from './components/controls/TimelineController';
import { DURATION, getPipState, getCurrentScene } from './data/timelineData';
import { Film, Upload, Download, Sparkles, Layers, Smartphone, CheckCircle2, Video } from 'lucide-react';

export default function App() {
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const initialT = searchParams ? parseFloat(searchParams.get('t') || '0') : 0;
  const [currentTime, setCurrentTime] = useState(initialT || 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [cleanMode, setCleanMode] = useState(false);
  const [showSafeGuides, setShowSafeGuides] = useState(false);
  const [userVideoSrc, setUserVideoSrc] = useState('/talking_head.mp4');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [isRecordingBrowser, setIsRecordingBrowser] = useState(false);

  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.42);

  const isExportMode = typeof window !== 'undefined' && (
    new URLSearchParams(window.location.search).get('export') === 'true' ||
    new URLSearchParams(window.location.search).get('clean') === 'true'
  );

  // Auto-play in automated export mode
  useEffect(() => {
    if (isExportMode) {
      setCleanMode(true);
      if (searchParams?.get('export') === 'true') {
        const timer = setTimeout(() => {
          setIsPlaying(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    }
  }, [isExportMode]);

  // Responsive scale calculation to fit the 1080x1920 canvas into viewport
  const calculateScale = useCallback(() => {
    if (isExportMode) {
      setScale(1);
      return;
    }
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    if (cleanMode) {
      const scaleH = (clientHeight - 20) / 1920;
      const scaleW = (clientWidth - 20) / 1080;
      setScale(Math.min(scaleH, scaleW));
    } else {
      const availableH = clientHeight - 20;
      const availableW = clientWidth - 40;
      const scaleH = availableH / 1920;
      const scaleW = availableW / 1080;
      setScale(Math.min(scaleH, scaleW, 0.46));
    }
  }, [cleanMode, isExportMode]);

  useEffect(() => {
    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, [calculateScale]);

  // High-precision requestAnimationFrame playback loop
  useEffect(() => {
    if (!isPlaying) return;

    let lastTime = performance.now();
    let frameId;

    const tick = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      setCurrentTime((prev) => {
        const next = prev + delta * playbackRate;
        if (next >= DURATION) {
          setIsPlaying(false);
          return DURATION;
        }
        return next;
      });

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying, playbackRate]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        setCurrentTime((t) => Math.max(0, t - 2));
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        setCurrentTime((t) => Math.min(DURATION, t + 2));
      } else if (e.code === 'KeyF') {
        e.preventDefault();
        setCleanMode((c) => !c);
      } else if (e.code === 'Escape') {
        if (cleanMode && !isExportMode) {
          e.preventDefault();
          setCleanMode(false);
        }
        if (downloadModalOpen) {
          setDownloadModalOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cleanMode, isExportMode, downloadModalOpen]);

  // Handle local video file upload
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setUserVideoSrc(objectUrl);
    }
  };

  // In-Browser Screen Recording trigger
  const handleStartBrowserRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { displaySurface: 'browser', frameRate: 60 },
      });

      const chunks = [];
      const mime = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
        ? 'video/webm;codecs=vp9'
        : 'video/webm';
      const recorder = new MediaRecorder(stream, { mimeType: mime });

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `noor_elshefaa_reel_1080x1920.webm`;
        a.click();
        setIsRecordingBrowser(false);
        stream.getTracks().forEach((t) => t.stop());
      };

      recorder.start(100);
      setIsRecordingBrowser(true);
      setDownloadModalOpen(false);
      setCleanMode(true);
      setCurrentTime(0);
      setIsPlaying(true);

      // Auto-stop at duration
      setTimeout(() => {
        if (recorder.state === 'recording') {
          recorder.stop();
        }
      }, (DURATION + 2) * 1000);
    } catch (err) {
      console.warn('Screen recording not permitted or cancelled:', err);
      setIsRecordingBrowser(false);
    }
  };

  const currentScene = getCurrentScene(currentTime);
  const currentPip = getPipState(currentTime);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#061018] text-slate-100 font-cairo">
      {/* ── Studio Top Header Bar (Hidden in Clean Fullscreen / Export Mode) ── */}
      {!cleanMode && !isExportMode && (
        <header className="h-16 px-6 bg-[#081824] border-b border-[#1FA1B8]/30 flex items-center justify-between z-30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1FA1B8] to-[#F59E0B] flex items-center justify-center shadow-md">
              <Film className="w-5 h-5 text-slate-950 font-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-black text-white">
                  Noor Al-Shefaa — Reel Studio
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-[#F59E0B] text-slate-950 font-black text-[10px] uppercase font-mono shadow-xs">
                  1080 × 1920 (9:16)
                </span>
              </div>
              <p className="text-[11px] text-[#7ED3E2] font-cairo font-medium">
                استوديو إنتاج ريلز التقسيط الجراحي لمجمع نور الشفاء الطبي (@abdaal.dev Style)
              </p>
            </div>
          </div>

          {/* Center Info Indicators */}
          <div className="hidden md:flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0D2230] border border-white/10 font-bold">
              <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>المشهد النشط:</span>
              <span className="text-[#F59E0B] font-black font-mono">#{currentScene}</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0D2230] border border-white/10 font-bold">
              <Smartphone className="w-3.5 h-3.5 text-[#4EC4D8]" />
              <span>نمط الفيديو (PiP):</span>
              <span className="text-[#4EC4D8] font-black font-mono uppercase">
                {currentPip === 'fullscreen' ? 'Fullscreen (100%)' : 'Circle PiP (220px)'}
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Download Video Button */}
            <button
              onClick={() => setDownloadModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F59E0B] hover:bg-amber-400 text-slate-950 text-xs font-black transition shadow-gold-tag active:scale-95 border border-amber-300"
            >
              <Download className="w-4 h-4 fill-slate-950" />
              <span>تحميل الفيديو (Download Video)</span>
            </button>

            <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D2230] hover:bg-slate-800 text-slate-200 border border-white/15 cursor-pointer text-xs font-bold transition shadow-xs">
              <Upload className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>تحميل فيديو المذيع (/talking_head.mp4)</span>
              <input
                type="file"
                accept="video/mp4,video/webm"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
        </header>
      )}

      {/* ── Main Canvas Viewport ── */}
      <main
        ref={containerRef}
        className={`flex-1 relative flex items-center justify-center overflow-hidden bg-grid-pattern ${
          cleanMode || isExportMode ? 'p-0 bg-black' : 'p-4'
        }`}
      >
        {/* Scaled 1080x1920 Reel Canvas */}
        <div
          style={{
            transform: isExportMode ? 'none' : `scale(${scale})`,
            transformOrigin: isExportMode ? '0 0' : 'center center',
          }}
          className={`transition-transform duration-200 ease-out flex items-center justify-center ${
            isExportMode
              ? 'w-[1080px] h-[1920px] rounded-none shadow-none ring-0'
              : 'rounded-[56px] shadow-[0_25px_80px_rgba(0,0,0,0.85)] ring-8 ring-slate-900/80'
          }`}
        >
          <ReelCanvas
            currentTime={currentTime}
            isPlaying={isPlaying}
            showSafeGuides={showSafeGuides}
            cleanMode={cleanMode || isExportMode}
            videoSrc={userVideoSrc}
          />
        </div>

        {/* Clean Mode Floating ESC Pill */}
        {cleanMode && !isExportMode && (
          <div className="fixed top-6 left-6 z-50">
            <button
              onClick={() => setCleanMode(false)}
              className="px-4 py-2 rounded-full bg-slate-900/90 text-white text-xs font-bold shadow-xl border border-white/20 backdrop-blur-md hover:bg-slate-800 transition flex items-center gap-2"
            >
              <span>خروج من العرض النظيف (ESC)</span>
            </button>
          </div>
        )}
      </main>

      {/* ── Bottom Timeline Controls (Hidden in Clean Fullscreen / Export Mode) ── */}
      {!cleanMode && !isExportMode && (
        <TimelineController
          currentTime={currentTime}
          onSeek={(t) => setCurrentTime(t)}
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying((p) => !p)}
          playbackRate={playbackRate}
          onRateChange={(r) => setPlaybackRate(r)}
          cleanMode={cleanMode}
          onToggleCleanMode={() => setCleanMode((c) => !c)}
          showSafeGuides={showSafeGuides}
          onToggleGuides={() => setShowSafeGuides((g) => !g)}
          onOpenDownload={() => setDownloadModalOpen(true)}
        />
      )}

      {/* ── Download / Export Modal ── */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061018]/85 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-[560px] rounded-[36px] bg-[#0A1926] border-2 border-[#1FA1B8]/50 shadow-teal-glow p-7 text-right relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#1FA1B8]/20 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B] text-slate-950 flex items-center justify-center shadow-md">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white font-cairo">
                    تنزيل وتقييم فيديو الريل (1080x1920)
                  </h3>
                  <span className="text-xs text-[#7ED3E2] font-mono font-bold">
                    Case Study Reel • 74 ثانية • 9:16
                  </span>
                </div>
              </div>
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="w-9 h-9 rounded-xl bg-[#0D2230] text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold border border-white/10"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* Option 1: Direct File Download */}
              <div className="p-5 rounded-2xl bg-gradient-to-l from-[#112B3C] to-[#0D2230] border border-[#1FA1B8]/40 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-white font-cairo">
                      تحميل الفيديو الجاهز المصدر (1080x1920)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#1FA1B8] text-slate-950 text-[10px] font-black">
                      موصى به
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-cairo">
                    فيديو WebM بدقة 1080x1920 كامل المشاهد الستة وانتقالات الـ PiP والترجمة.
                  </p>
                </div>

                <a
                  href="/exported_reel_1080x1920.webm"
                  download="noor_elshefaa_case_study_reel_1080x1920.webm"
                  className="px-4 py-2.5 rounded-xl bg-[#F59E0B] hover:bg-amber-400 text-slate-950 font-black text-xs shadow-gold-tag shrink-0 transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>تنزيل الملف</span>
                </a>
              </div>

              {/* Option 2: Record Live in Browser */}
              <div className="p-5 rounded-2xl bg-[#081824] border border-white/10 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-sm font-black text-white font-cairo block">
                    تسجيل حي من المتصفح (Screen Record & Download)
                  </span>
                  <p className="text-xs text-slate-400 font-cairo">
                    يبدأ من 0:00 بشاشة كاملة نظيفة ويسجل الـ 74 ثانية وينزل الملف تلقائياً.
                  </p>
                </div>

                <button
                  onClick={handleStartBrowserRecording}
                  className="px-4 py-2.5 rounded-xl bg-[#1FA1B8] hover:bg-[#157A8C] text-slate-950 font-bold text-xs shrink-0 transition flex items-center gap-2 border border-[#4EC4D8]/40"
                >
                  <Video className="w-4 h-4" />
                  <span>بدء التسجيل</span>
                </button>
              </div>

              {/* Option 3: Terminal Command for 60fps Automated Script */}
              <div className="p-4 rounded-2xl bg-black/60 border border-slate-800 text-xs font-mono text-slate-400 space-y-2">
                <span className="text-[11px] text-[#4EC4D8] font-bold block font-cairo">
                  أو يمكنك تشغيل سكريبت التصدير فائق الدقة (Playwright 60fps):
                </span>
                <div className="p-2.5 rounded-xl bg-[#061018] text-[#F59E0B] border border-white/10 select-all font-bold">
                  npm run export:video
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
