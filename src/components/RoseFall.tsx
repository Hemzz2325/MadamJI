import { motion, AnimatePresence } from 'framer-motion';

const ROSES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: 2 + (i * 3.3) % 96,          // spread across full width
  delay: i * 0.18,
  duration: 2.8 + Math.random() * 1.6,
  size: 22 + Math.floor(i % 4) * 8,
  rotate: -50 + (i % 7) * 20,
  sway: (i % 2 === 0 ? 1 : -1) * (12 + (i % 5) * 6),
  emoji: i % 6 === 0 ? '🌹' : i % 6 === 1 ? '🥀' : i % 6 === 2 ? '❤️' : i % 6 === 3 ? '🌹' : i % 6 === 4 ? '💋' : '🌹',
}));

const RoseFall = ({ show }: { show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 44, pointerEvents: 'none', overflow: 'hidden' }}>
          {ROSES.map(r => (
            <motion.div
              key={r.id}
              initial={{ y: '-12vh', x: `${r.x}vw`, opacity: 0, rotate: r.rotate }}
              animate={{
                y: '110vh',
                x: [`${r.x}vw`, `${r.x + r.sway}vw`, `${r.x}vw`, `${r.x - r.sway * 0.6}vw`, `${r.x}vw`],
                opacity: [0, 1, 1, 1, 0.7, 0],
                rotate: [r.rotate, r.rotate + 60, r.rotate + 120, r.rotate + 180],
              }}
              transition={{
                duration: r.duration,
                delay: r.delay,
                ease: 'easeIn',
                x: { duration: r.duration, ease: 'easeInOut' },
                rotate: { duration: r.duration, ease: 'linear' },
              }}
              style={{ position: 'absolute', top: 0, left: 0, fontSize: r.size, userSelect: 'none' }}
            >
              {r.emoji}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default RoseFall;
