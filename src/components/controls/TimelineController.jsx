import { Play, Pause, RotateCcw, FastForward, Maximize2, Minimize2, Eye, ShieldAlert, Sparkles, Download } from 'lucide-react';
import { DURATION, SCENE_CHAPTERS } from '../../data/timelineData';

export default function TimelineController({
  currentTime,
  onSeek,
  isPlaying,
  onTogglePlay,
  playbackRate,
  onRateChange,
  cleanMode,
  onToggleCleanMode,
  showSafeGuides,
  onToggleGuides,
  onOpenDownload,
}) {
  const progressPct = (currentTime / DURATION) * 100;

  // Format MM:SS.SS
  const mins = Math.floor(currentTime / 60);
  const secs = (currentTime % 60).toFixed(1);
  const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(4, '0')}`;

  const totalMins = Math.floor(DURATION / 60);
  const totalSecs = (DURATION % 60).toFixed(0);
  const totalFormatted = `${String(totalMins).padStart(2, '0')}:${String(totalSecs).padStart(2, '0')}`;

  return (
    <div className="w-full bg-[#081824] border-t border-[#1FA1B8]/30 p-4 sm:p-5 flex flex-col gap-3.5 shadow-2xl z-50 text-white font-cairo">
      {/* ── Top Bar: Scene Chapters Jump Bar ── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
        <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1 text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>المشاهد:</span>
        </span>
        {SCENE_CHAPTERS.map((ch) => {
          const isActive = currentTime >= ch.start && currentTime < ch.end;
          return (
            <button
              key={ch.id}
              onClick={() => onSeek(ch.start)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all text-xs border ${
                isActive
                  ? 'bg-[#F59E0B] text-slate-950 border-amber-300 shadow-gold-tag'
                  : 'bg-[#0D2230] text-slate-300 border-white/10 hover:border-[#1FA1B8] hover:text-white'
              }`}
            >
              {ch.title} ({ch.start}s)
            </button>
          );
        })}
      </div>

      {/* ── Middle Bar: Interactive Timeline Scrubber ── */}
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm font-black text-[#F59E0B] min-w-[70px] text-center bg-[#061018] px-2 py-1 rounded-lg border border-white/10">
          {timeFormatted}
        </span>

        {/* Custom Range Scrubber */}
        <div className="relative flex-1 flex items-center">
          <input
            type="range"
            min="0"
            max={DURATION}
            step="0.05"
            value={currentTime}
            onChange={(e) => onSeek(Number(e.target.value))}
            className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-[#F59E0B] bg-[#061018] border border-white/10 relative z-10"
          />
          {/* Progress fill bar */}
          <div
            className="absolute h-2.5 rounded-lg bg-gradient-to-r from-[#1FA1B8] to-[#F59E0B] pointer-events-none"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <span className="font-mono text-xs font-bold text-slate-400 min-w-[45px] text-center">
          {totalFormatted}
        </span>
      </div>

      {/* ── Bottom Bar: Play Controls, Speed, Guides & Fullscreen ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        {/* Playback Controls */}
        <div className="flex items-center gap-2">
          {/* Restart */}
          <button
            onClick={() => onSeek(0)}
            title="إعادة من البداية"
            className="p-2.5 rounded-xl bg-[#0D2230] hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Play / Pause Toggle */}
          <button
            onClick={onTogglePlay}
            className="px-5 py-2.5 rounded-2xl bg-[#F59E0B] hover:bg-amber-400 text-slate-950 font-black text-sm shadow-gold-tag flex items-center gap-2 transition active:scale-95 border border-amber-300"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-slate-950" />
                <span>إيقاف مؤقت</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-slate-950" />
                <span>تشغيل الريل</span>
              </>
            )}
          </button>

          {/* Speed Selector */}
          <div className="flex items-center rounded-xl bg-[#0D2230] p-1 border border-white/10 text-xs font-mono">
            {[0.5, 1, 1.5, 2].map((r) => (
              <button
                key={r}
                onClick={() => onRateChange(r)}
                className={`px-2.5 py-1 rounded-lg font-bold transition ${
                  playbackRate === r
                    ? 'bg-[#1FA1B8] text-slate-950 font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {r}x
              </button>
            ))}
          </div>
        </div>

        {/* Studio Canvas Options */}
        <div className="flex items-center gap-2">
          {/* Download Video Button */}
          {onOpenDownload && (
            <button
              onClick={onOpenDownload}
              className="px-3.5 py-2 rounded-xl text-xs font-black bg-[#F59E0B] hover:bg-amber-400 text-slate-950 transition flex items-center gap-1.5 shadow-gold-tag border border-amber-300"
            >
              <Download className="w-3.5 h-3.5 fill-slate-950" />
              <span>تحميل الفيديو 📥</span>
            </button>
          )}

          {/* Safe Guides Toggle */}
          <button
            onClick={onToggleGuides}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 ${
              showSafeGuides
                ? 'bg-red-500/20 text-red-300 border-red-500/40'
                : 'bg-[#0D2230] text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>هوامش السوشيال ميديا</span>
          </button>

          {/* Clean Fullscreen Play Mode (For Screen Recording at 1080x1920) */}
          <button
            onClick={onToggleCleanMode}
            className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center gap-2 shadow-lg border ${
              cleanMode
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-emerald-500/30'
                : 'bg-gradient-to-r from-[#1FA1B8] to-[#0F5F6D] text-white border-[#1FA1B8]/40 hover:brightness-110'
            }`}
          >
            {cleanMode ? (
              <>
                <Minimize2 className="w-4 h-4 text-[#F59E0B]" />
                <span>خروج من العرض النظيف (ESC)</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4 text-[#F59E0B]" />
                <span>Clean Fullscreen Play (1080x1920) 🎥</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
