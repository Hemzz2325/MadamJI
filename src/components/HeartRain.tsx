import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeartRainProps {
  active: boolean;
  onComplete: () => void;
}

// Generate a fixed set of heart particle configs (so they are stable)
const HEARTS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,          // % left
  delay: Math.random() * 0.9,       // stagger delay
  duration: 1.2 + Math.random() * 1,// fall duration
  size: 18 + Math.floor(Math.random() * 32), // px
  rotate: -40 + Math.random() * 80, // initial rotation
  rotateEnd: -80 + Math.random() * 160,
  emoji: i % 5 === 0 ? '🩷' : i % 5 === 1 ? '💜' : i % 5 === 2 ? '❤️' : i % 5 === 3 ? '🤍' : '💕',
}));

const HeartRain = ({ active, onComplete }: HeartRainProps) => {
  const doneFired = useRef(false);

  useEffect(() => {
    if (active && !doneFired.current) {
      doneFired.current = true;
      // Give hearts ~2.2s to fill the screen, then call onComplete
      const t = setTimeout(onComplete, 2200);
      return () => clearTimeout(t);
    }
  }, [active, onComplete]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(255,255,255,0.10)',
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          {HEARTS.map(heart => (
            <motion.div
              key={heart.id}
              initial={{
                x: `${heart.x}vw`,
                y: '-10vh',
                opacity: 0,
                rotate: heart.rotate,
                scale: 0.4,
              }}
              animate={{
                y: '110vh',
                opacity: [0, 1, 1, 0.8, 0],
                rotate: heart.rotateEnd,
                scale: [0.4, 1.1, 1, 0.9],
              }}
              transition={{
                duration: heart.duration,
                delay: heart.delay,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                fontSize: heart.size,
                lineHeight: 1,
                userSelect: 'none',
                willChange: 'transform',
              }}
            >
              {heart.emoji}
            </motion.div>
          ))}

          {/* Central burst flash */}
          <motion.div
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 6, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 120, height: 120,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,0,110,0.35) 0%, rgba(255,198,255,0.2) 60%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeartRain;
