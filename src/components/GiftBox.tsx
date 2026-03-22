import { useState } from 'react';
import { motion } from 'framer-motion';

const GiftBox = () => {
  const [opened, setOpened] = useState(false);

  return (
    <section style={{
      padding: '60px 16px 80px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      position: 'relative', zIndex: 10,
    }}>
      <h2 style={{
        fontSize: 'clamp(1.8rem,5vw,2.8rem)', fontWeight: 900,
        textAlign: 'center', marginBottom: 8,
        background: 'linear-gradient(135deg,#ff006e,#ffc6ff,#bdb2ff)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>
        A Special Surprise Awaits You 🎀
      </h2>
      <p style={{ color: '#8a60b0', fontWeight: 500, marginBottom: 40, textAlign: 'center' }}>
        Tap the gift to open it, Kruti! 💜
      </p>

      {/* ── Gift Box (hidden once opened) ── */}
      {!opened && (
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, -2, 2, -2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => setOpened(true)}
          whileTap={{ scale: 0.9 }}
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}
        >
          {/* Bow */}
          <div style={{ display: 'flex', gap: 4, marginBottom: -8, zIndex: 2, position: 'relative' }}>
            <div style={{ width: 42, height: 32, background: '#ff006e', borderRadius: '50% 0 50% 0', transform: 'rotate(-20deg)', boxShadow: '0 2px 8px rgba(255,0,110,0.4)' }} />
            <div style={{ width: 42, height: 32, background: '#ffc6ff', borderRadius: '0 50% 0 50%', transform: 'rotate(20deg)', boxShadow: '0 2px 8px rgba(255,198,255,0.4)' }} />
          </div>
          {/* Lid */}
          <div style={{ width: 230, height: 52, background: 'linear-gradient(135deg,#ff006e,#ffc6ff)', borderRadius: '12px 12px 0 0', boxShadow: '0 -4px 16px rgba(255,0,110,0.25)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 22, height: '100%', background: 'rgba(255,255,255,0.35)', borderRadius: 4 }} />
          </div>
          {/* Body */}
          <div style={{ width: 230, height: 210, background: 'linear-gradient(180deg,#ffc6ff,#bdb2ff)', borderRadius: '0 0 18px 18px', boxShadow: '0 16px 48px rgba(189,178,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, width: 22, background: 'rgba(255,255,255,0.3)', borderRadius: 4 }} />
            <div style={{ position: 'absolute', left: 0, right: 0, height: 22, top: '42%', background: 'rgba(255,255,255,0.3)', borderRadius: 4 }} />
            <span style={{ fontSize: '4.5rem', position: 'relative', zIndex: 2 }}>🎁</span>
          </div>
          <p style={{ marginTop: 18, color: '#bdb2ff', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.12em' }}>
            TAP TO OPEN ✨
          </p>
        </motion.div>
      )}

      {/* ── Reveal Cards (shown once opened) ── */}
      {opened && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', width: '100%' }}>
          {/* Card 1: Hema's Message */}
          <motion.div
            key="hema-reveal"
            initial={{ scale: 0.5, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 14 }}
            style={{
              maxWidth: 400, width: '90%',
              background: '#fff',
              borderRadius: 28,
              border: '2.5px solid rgba(255,0,110,0.2)',
              boxShadow: '0 12px 48px rgba(255,0,110,0.18), 0 4px 24px rgba(189,178,255,0.25)',
              padding: '36px 28px',
              textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}
          >
            {/* Burst */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.6, 1] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ fontSize: '2.5rem', marginBottom: 12 }}
            >
              ✨🎊✨
            </motion.div>

            {/* Kruti's photo (from Hema) */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.25 }}
              style={{ marginBottom: 20 }}
            >
              <img
                src="/kru2.jpeg"
                alt="Kruti"
                style={{
                  width: 140, height: 140,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #ffc6ff',
                  boxShadow: '0 6px 28px rgba(255,0,110,0.25)',
                  display: 'block',
                }}
              />
            </motion.div>

            {/* Hema's Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ff006e', marginBottom: 12 }}>
                🌸 Surprise Babyy! 🌸
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#4a2060', fontWeight: 500, fontStyle: 'italic' }}>
                "Happy Birthday my love! 🎂💜<br />
                You are the best thing that ever happened to me!<br />
                I love you sooooo much! 🌸<br />
                You are my sunshine! ☀️<br />
                — Forever yours, Hema ❤️"
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 20 }}>
                {['🎂', '💜', '🌸', '🥺', '☀️'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -8, 0], scale: [1, 1.25, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.22 }}
                    style={{ fontSize: '1.5rem', display: 'inline-block' }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2: Hrithi's Message */}
          <motion.div
            key="hrithi-reveal"
            initial={{ scale: 0.5, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.4 }}
            style={{
              maxWidth: 400, width: '90%',
              background: '#fff',
              borderRadius: 28,
              border: '2.5px solid rgba(189,178,255,0.4)',
              boxShadow: '0 12px 48px rgba(189,178,255,0.18), 0 4px 24px rgba(255,198,255,0.25)',
              padding: '36px 28px',
              textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}
          >
            {/* Burst */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.6, 1] }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              style={{ fontSize: '2.5rem', marginBottom: 12 }}
            >
              🐣🌸🐣
            </motion.div>

            {/* Hrithi's photo */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.65 }}
              style={{ marginBottom: 20 }}
            >
              <img
                src="/hrithi.jfif"
                alt="Hrithi"
                style={{
                  width: 140, height: 140,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #bdb2ff',
                  boxShadow: '0 6px 28px rgba(189,178,255,0.25)',
                  display: 'block',
                }}
              />
            </motion.div>

            {/* Hrithi's Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6 }}
            >
              <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#8a3a6a', marginBottom: 12 }}>
                🐣 Happy Birthday Mumma! 🐣
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#4a2060', fontWeight: 500, fontStyle: 'italic' }}>
                "You are the bestest mumma in the whole world!<br />
                I love you sooooo much! 🌸<br />
                Mumma, you are my sunshine! ☀️<br />
                — Your little Hrithi 🐣"
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 20 }}>
                {['🎈', '🧸', '🌸', '🍼', '☀️'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -8, 0], scale: [1, 1.25, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.22 }}
                    style={{ fontSize: '1.5rem', display: 'inline-block' }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default GiftBox;
