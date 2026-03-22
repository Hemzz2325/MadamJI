import { motion, AnimatePresence } from 'framer-motion';

const BALLOON_COLORS = [
  '#ff006e', '#ffc6ff', '#bdb2ff', '#ff6eb4',
  '#c084fc', '#f9a8d4', '#a78bfa', '#fb7185',
];

const BALLOONS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  color: BALLOON_COLORS[i % BALLOON_COLORS.length],
  x: 5 + (i * 5.5) % 92,    // spread across screen width (%)
  delay: (i * 0.12),
  size: 32 + (i % 4) * 8,
  sway: (i % 2 === 0 ? 1 : -1) * (10 + (i % 3) * 8),
}));

const BalloonDrop = ({ show }: { show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 45, pointerEvents: 'none', overflow: 'hidden' }}>
          {BALLOONS.map(b => (
            <motion.div
              key={b.id}
              initial={{ y: '-15vh', x: `${b.x}vw`, opacity: 0 }}
              animate={{
                y: ['−15vh', '110vh'],
                x: [`${b.x}vw`, `${b.x + b.sway}vw`, `${b.x}vw`, `${b.x - b.sway}vw`, `${b.x}vw`],
                opacity: [0, 1, 1, 1, 0.6, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 5,
                delay: b.delay,
                ease: 'easeIn',
                x: { duration: 5, repeat: 0, ease: 'easeInOut' },
              }}
              style={{ position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              {/* Balloon body */}
              <div style={{
                width: b.size,
                height: b.size * 1.25,
                borderRadius: '50% 50% 45% 45%',
                background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.45), ${b.color})`,
                boxShadow: `0 4px 16px ${b.color}55`,
                position: 'relative',
              }}>
                {/* Shine */}
                <div style={{
                  position: 'absolute', top: '18%', left: '22%',
                  width: '28%', height: '22%',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.5)',
                  transform: 'rotate(-30deg)',
                }} />
                {/* Knot */}
                <div style={{
                  position: 'absolute', bottom: -5, left: '50%', transform: 'translateX(-50%)',
                  width: 7, height: 7, borderRadius: '50%',
                  background: b.color,
                }} />
              </div>
              {/* String */}
              <div style={{
                width: 1.5,
                height: 36,
                background: `${b.color}90`,
                marginTop: 0,
              }} />
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default BalloonDrop;
