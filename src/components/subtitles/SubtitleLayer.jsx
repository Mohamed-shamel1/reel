import { motion, AnimatePresence } from 'framer-motion';
import { SUBTITLES, getPipState, PIP_STATES } from '../../data/timelineData';

export default function SubtitleLayer({ currentTime }) {
  // Find current active subtitle slice
  const activeSub = SUBTITLES.find(
    (s) => currentTime >= s.start && currentTime <= s.end
  );

  const pipState = getPipState(currentTime);
  const isPipCircle = pipState === PIP_STATES.PIP_CIRCLE;

  if (!activeSub) return null;

  const { text, highlight } = activeSub;
  const parts = highlight ? text.split(highlight) : [text];

  return (
    <div
      className={`absolute z-40 flex items-center pointer-events-none select-none transition-all duration-300 ${
        isPipCircle
          ? 'bottom-[245px] left-[285px] right-[48px] justify-start'
          : 'bottom-[260px] inset-x-12 justify-center'
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSub.start}
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className={`relative px-6 py-3.5 rounded-3xl transition-all shadow-xl bg-[#0A2E2A]/95 text-white border-2 border-[#14B8A6]/70 shadow-teal-brand backdrop-blur-md ${
            isPipCircle ? 'text-right max-w-full' : 'text-center max-w-[940px]'
          }`}
        >
          <p
            className={`font-black leading-snug tracking-tight font-cairo ${
              isPipCircle ? 'text-[22px] sm:text-[25px]' : 'text-[26px] sm:text-[30px]'
            } text-white`}
          >
            {parts[0]}
            {highlight && (
              <motion.span
                initial={{ scale: 0.88, rotate: -3 }}
                animate={{ scale: [1, 1.08, 1], rotate: [-2, 1, -1] }}
                transition={{ duration: 0.35, type: 'spring' }}
                className="inline-block mx-2 px-3 py-0.5 rounded-xl bg-[#F59E0B] text-slate-950 font-black shadow-gold-tag -rotate-1 border border-slate-950"
              >
                {highlight}
              </motion.span>
            )}
            {parts[1] || ''}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
