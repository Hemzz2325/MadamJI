import { motion } from 'framer-motion';

interface LoveCardProps {
  title: string;
  message: string;
  image: string;
  delay?: number;
}

// Simple, clean 3D-flip card — no complex layering
const LoveCard = ({ title, message, image, delay = 0 }: LoveCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, margin: '-80px' }}
      style={{ perspective: '800px' }}
    >
      <motion.div
        whileHover={{ rotateY: 180 }}
        style={{ transformStyle: 'preserve-3d', position: 'relative', height: 360 }}
        transition={{ duration: 0.6 }}
      >
        {/* ── Front ── */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          background: '#ffffff',
          borderRadius: 24,
          border: '1.5px solid rgba(189,178,255,0.35)',
          boxShadow: '0 4px 24px rgba(189,178,255,0.15)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 28, textAlign: 'center',
        }}>
          <img
            src={image}
            alt={title}
            style={{
              width: 120, height: 120,
              objectFit: 'cover',
              borderRadius: '50%',
              border: '3px solid #ffc6ff',
              boxShadow: '0 4px 16px rgba(255,0,110,0.15)',
              marginBottom: 18,
            }}
          />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ff006e', marginBottom: 8 }}>
            {title}
          </h3>
          <p style={{ fontSize: '0.8rem', color: '#bdb2ff', fontWeight: 600 }}>
            Hover to read ✨
          </p>
        </div>

        {/* ── Back ── */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'linear-gradient(135deg, #ffc6ff 0%, #bdb2ff 100%)',
          borderRadius: 24,
          border: '1.5px solid rgba(255,255,255,0.6)',
          boxShadow: '0 8px 32px rgba(255,0,110,0.2)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 28, textAlign: 'center',
        }}>
          <p style={{ fontSize: '1.5rem', marginBottom: 12 }}>💜</p>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a0033', marginBottom: 12 }}>
            {title}
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#2a0040', fontWeight: 500 }}>
            "{message}"
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            {['💜','🩷','💜'].map((e, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                style={{ fontSize: '1.3rem' }}
              >{e}</motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoveCard;
