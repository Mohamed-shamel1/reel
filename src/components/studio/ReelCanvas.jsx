import PiPVideoLayer from '../pip/PiPVideoLayer';
import SubtitleLayer from '../subtitles/SubtitleLayer';
import Scene0Intro from '../scenes/Scene0Intro';
import Scene1Problem from '../scenes/Scene1Problem';
import Scene2Solution from '../scenes/Scene2Solution';
import Scene3Proof from '../scenes/Scene3Proof';
import Scene4WhatsAppCard from '../scenes/Scene4WhatsAppCard';
import { getPipState } from '../../data/timelineData';

function getSceneBackgroundClass(currentTime) {
  if (currentTime >= 16.0 && currentTime < 32.0) {
    return 'bg-cream-notebook';
  }
  if (currentTime >= 32.0) {
    return 'bg-medical-dark-teal';
  }
  return 'bg-medical-dark-intro';
}

export default function ReelCanvas({
  currentTime,
  isPlaying,
  showSafeGuides = false,
  cleanMode = false,
  videoSrc = '/talking_head.mp4',
}) {
  const pipState = getPipState(currentTime);
  const bgClass = getSceneBackgroundClass(currentTime);

  return (
    <div
      id="reel-canvas"
      className={`relative w-[1080px] h-[1920px] ${bgClass} overflow-hidden shadow-2xl select-none flex-shrink-0 transition-colors duration-500`}
      style={{
        width: '1080px',
        height: '1920px',
      }}
    >
      {/* ── Background Patterns for dark scenes only (Notebook paper is clean in Scene 1) ── */}
      {currentTime < 16.0 && (
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      )}
      {currentTime >= 32.0 && (
        <div className="absolute inset-0 bg-grid-dots opacity-40 pointer-events-none" />
      )}

      {/* ── Layer 1: PiP / Talking Head Video Layer (z-0 in fullscreen, z-35 in PiP circle) ── */}
      <PiPVideoLayer
        currentTime={currentTime}
        isPlaying={isPlaying}
        pipState={pipState}
        videoSrc={videoSrc}
      />

      {/* ── Layer 2: 3 Numbered Sections + Intro & WhatsApp CTA ── */}
      {/* Intro (0 - 16s) */}
      <Scene0Intro currentTime={currentTime} />

      {/* Section 1: "١ المشكلة" (16 - 32s) */}
      <Scene1Problem currentTime={currentTime} />

      {/* Section 2: "٢ الحل: شاشة واحدة" (32 - 52s) */}
      <Scene2Solution currentTime={currentTime} />

      {/* Section 3: "٣ كشف الحساب والإثبات" (52 - 64s) */}
      <Scene3Proof currentTime={currentTime} />

      {/* Final WhatsApp CTA Card (64 - 74s - exact @abdaal.dev replica) */}
      <Scene4WhatsAppCard currentTime={currentTime} />

      {/* ── Layer 3: Synchronized Caption Pill with Highlight (z-40) ── */}
      <SubtitleLayer currentTime={currentTime} />

      {/* ── Optional Layer 4: Social Media Safe Zones (Reels / TikTok UI overlay) ── */}
      {showSafeGuides && !cleanMode && (
        <div className="absolute inset-0 pointer-events-none z-50 border-4 border-dashed border-red-500/30">
          <div className="absolute top-0 inset-x-0 h-[160px] bg-red-500/10 border-b border-red-500/40 flex items-center justify-center text-red-300 font-mono text-lg font-bold">
            منطقة شريط الحالة العلوي (160px)
          </div>
          <div className="absolute right-0 top-[200px] bottom-[260px] w-[140px] bg-red-500/10 border-l border-red-500/40 flex items-center justify-center text-red-300 font-mono text-sm font-bold rotate-90">
            أزرار التفاعل الجانبية (Like / Share)
          </div>
          <div className="absolute bottom-0 inset-x-0 h-[240px] bg-red-500/10 border-t border-red-500/40 flex items-center justify-center text-red-300 font-mono text-lg font-bold">
            منطقة شريط الوصف والصوت السفلية (240px)
          </div>
        </div>
      )}
    </div>
  );
}
