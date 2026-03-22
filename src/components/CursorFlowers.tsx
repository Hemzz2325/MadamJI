import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FLOWERS = ['🌸', '🌺', '💮', '🌼', '🌷', '💐', '🌻', '🏵️'];
const COLORS  = ['#ff006e', '#ffc6ff', '#bdb2ff', '#ff6eb4', '#c084fc', '#f9a8d4', '#a78bfa', '#fb7185'];

interface Particle {
  id: number;
  x: number;
  y: number;
  flowers: { emoji: string; angle: number; dist: number; color: string }[];
}

let nextId = 0;

const CursorFlowers = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const spawnFlowers = useCallback((x: number, y: number) => {
    const count = 5 + Math.floor(Math.random() * 4); // 5–8 flowers per click
    const burst: Particle = {
      id: nextId++,
      x,
      y,
      flowers: Array.from({ length: count }, (_, i) => ({
        emoji: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
        angle: (360 / count) * i + Math.random() * 20,
        dist: 40 + Math.random() * 45,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })),
    };
    setParticles(prev => [...prev, burst]);
    // Auto-remove after animation completes
    setTimeout(() => setParticles(prev => prev.filter(p => p.id !== burst.id)), 900);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => spawnFlowers(e.clientX, e.clientY);
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, [spawnFlowers]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none', overflow: 'hidden' }}>
      <AnimatePresence>
        {particles.map(p =>
          p.flowers.map((f, fi) => {
            const rad = (f.angle * Math.PI) / 180;
            const tx = Math.cos(rad) * f.dist;
            const ty = Math.sin(rad) * f.dist;
            return (
              <motion.span
                key={`${p.id}-${fi}`}
                initial={{ x: p.x, y: p.y, scale: 0, opacity: 1 }}
                animate={{ x: p.x + tx, y: p.y + ty, scale: [0, 1.3, 0.9], opacity: [1, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  position: 'fixed',
                  top: 0, left: 0,
                  fontSize: 18 + Math.random() * 8,
                  userSelect: 'none',
                  filter: `drop-shadow(0 2px 4px ${f.color}88)`,
                  transformOrigin: 'center',
                }}
              >
                {f.emoji}
              </motion.span>
            );
          })
        )}
      </AnimatePresence>
    </div>
  );
};

export default CursorFlowers;
