import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Volume2, Mic, Sparkles, Stethoscope } from 'lucide-react';
import { PIP_STATES } from '../../data/timelineData';

export default function PiPVideoLayer({
  currentTime,
  isPlaying,
  pipState = PIP_STATES.FULLSCREEN,
  videoSrc = '/talking_head.mp4',
}) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [useWebcam, setUseWebcam] = useState(false);
  const webcamVideoRef = useRef(null);

  // Sync video time with timeline scrub
  useEffect(() => {
    if (!videoRef.current || !videoLoaded) return;
    const v = videoRef.current;
    if (Math.abs(v.currentTime - currentTime) > 0.3) {
      v.currentTime = currentTime;
    }
    if (isPlaying && v.paused) {
      v.play().catch(() => {});
    } else if (!isPlaying && !v.paused) {
      v.pause();
    }
  }, [currentTime, isPlaying, videoLoaded]);

  // Optional Webcam integration
  const toggleWebcam = async () => {
    if (!useWebcam) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        if (webcamVideoRef.current) {
          webcamVideoRef.current.srcObject = stream;
          webcamVideoRef.current.play();
        }
        setUseWebcam(true);
      } catch (err) {
        console.warn('Webcam permission denied or unavailable:', err);
      }
    } else {
      if (webcamVideoRef.current?.srcObject) {
        webcamVideoRef.current.srcObject.getTracks().forEach((t) => t.stop());
      }
      setUseWebcam(false);
    }
  };

  const isPipCircle = pipState === PIP_STATES.PIP_CIRCLE;

  // Format mm:ss for badge
  const mins = Math.floor(currentTime / 60);
  const secs = Math.floor(currentTime % 60);
  const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return (
    <motion.div
      initial={false}
      animate={
        isPipCircle
          ? {
              bottom: 240,
              left: 48,
              width: 220,
              height: 220,
              borderRadius: 9999,
              zIndex: 35,
            }
          : {
              bottom: 0,
              left: 0,
              width: 1080,
              height: 1920,
              borderRadius: 0,
              zIndex: 0,
            }
      }
      transition={{
        type: 'spring',
        stiffness: 280,
        damping: 30,
        mass: 0.8,
      }}
      className={`absolute overflow-hidden ${
        isPipCircle
          ? 'border-4 border-[#1FA1B8] shadow-pip'
          : 'border-0 shadow-none'
      }`}
    >
      {/* Video Container */}
      <div className="relative w-full h-full bg-[#061018] flex items-center justify-center overflow-hidden">
        {/* Real MP4 Video element */}
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          muted
          loop
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
          className={`absolute inset-0 w-full h-full object-cover ${
            videoLoaded && !useWebcam ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Live Webcam Stream if toggled */}
        {useWebcam && (
          <video
            ref={webcamVideoRef}
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
          />
        )}

        {/* Cinematic Realistic Presenter in Frame when no local MP4 is supplied */}
        {(!videoLoaded || useWebcam === false) && (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0A2540] via-[#0D2230] to-[#061018] text-center select-none overflow-hidden">
            {/* Ambient Medical Teal Aura */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(31,161,184,0.30)_0%,rgba(6,16,24,0)_70%)] pointer-events-none" />

            {/* Presenter Portrait */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative">
                <div
                  className={`rounded-full border-4 border-[#1FA1B8] overflow-hidden shadow-2xl relative transition-all duration-300 ${
                    isPipCircle ? 'w-24 h-24' : 'w-56 h-56'
                  }`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
                    alt="المتحدث - مجمع نور الشفاء"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Speaking overlay animation */}
                  {isPlaying && (
                    <motion.div
                      animate={{ opacity: [0.1, 0.25, 0.1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="absolute inset-0 bg-[#1FA1B8]/20 mix-blend-overlay"
                    />
                  )}
                </div>

                {/* Stethoscope / Mic Badge */}
                <span
                  className={`absolute bottom-0 right-1 rounded-full bg-[#1FA1B8] text-slate-950 flex items-center justify-center shadow-lg border-2 border-[#0A2540] transition-all duration-300 ${
                    isPipCircle ? 'w-6 h-6' : 'w-10 h-10'
                  }`}
                >
                  <Stethoscope className={isPipCircle ? 'w-3 h-3 text-slate-950' : 'w-5 h-5 text-slate-950'} />
                </span>
              </div>

              {!isPipCircle && (
                <div className="mt-6 space-y-2">
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1FA1B8] text-slate-950 font-black text-base shadow-teal-glow">
                    <Sparkles className="w-5 h-5 fill-slate-950" />
                    <span>مجمع نور الشفاء الطبي</span>
                  </div>
                  <p className="text-xs text-[#7ED3E2] font-cairo font-bold">
                    منظومة إدارة العيادات وتقسيط العمليات الجراحية
                  </p>
                </div>
              )}
            </div>

            {/* Audio Wave Visualizer in Fullscreen */}
            {!isPipCircle && (
              <div className="absolute bottom-36 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={
                      isPlaying
                        ? {
                            height: [6, 12 + ((i * 5) % 24), 6],
                            backgroundColor: i % 2 === 0 ? '#1FA1B8' : '#F59E0B',
                          }
                        : { height: 6, backgroundColor: '#1FA1B8' }
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 0.7 + (i % 4) * 0.1,
                      ease: 'easeInOut',
                    }}
                    className="w-1.5 rounded-full"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* PiP Ear-Tag Yellow Badge (Pinned to top edge of circular PiP like @abdaal.dev) */}
        <AnimatePresence>
          {isPipCircle && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-40 bg-[#F59E0B] text-slate-950 font-mono font-black text-[11px] px-3 py-0.5 rounded-full shadow-gold-tag flex items-center gap-1.5 border border-slate-950 select-none whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span>REC • {timeFormatted}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
