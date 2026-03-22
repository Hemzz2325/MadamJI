import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BIRTHDAY_DATE = new Date('2026-03-23T00:00:00');

const getCountdown = () => {
  const now = new Date();
  const diff = BIRTHDAY_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div style={{
      width: 64, height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '1.5rem', fontWeight: 900,
      background: 'linear-gradient(135deg,#ffc6ff33,#bdb2ff33)',
      border: '2px solid #bdb2ff',
      borderRadius: 16,
      color: '#ff006e',
      boxShadow: '0 2px 12px rgba(255,0,110,0.15)',
    }}>
      {String(value).padStart(2, '0')}
    </div>
    <span style={{ fontSize: 10, fontWeight: 700, marginTop: 4, color: '#bdb2ff', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
      {label}
    </span>
  </div>
);

const Hero = () => {
  const [countdown, setCountdown] = useState(getCountdown());
  const isBirthday = countdown === null;

  useEffect(() => {
    const t = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-8 gap-6">
      
      {/* Floating ribbon */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ fontSize: 52, userSelect: 'none' }}
      >
        🎀
      </motion.div>

      {/* Main heading — centred, photo below */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', textAlign: 'center' }}
      >
        {/* "To my dearest" label — centred */}
        <p style={{ color: '#bdb2ff', fontSize: 13, letterSpacing: '0.4em', fontWeight: 700, textTransform: 'uppercase', marginBottom: 12, width: '100%', textAlign: 'center' }}>
          To my dearest ✨
        </p>

        {/* Big heading */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 10vw, 7rem)',
          fontWeight: 900,
          lineHeight: 1.15,
          color: '#ff006e',
          fontFamily: "'Dancing Script', cursive",
          filter: 'drop-shadow(0 4px 16px rgba(255,0,110,0.2))',
          width: '100%',
          textAlign: 'center',
        }}>
          Happy Birthday<br />
          <span style={{ fontSize: 'clamp(2.8rem, 11vw, 7.5rem)' }}>Babyy ❤️</span>
        </h1>

        {/* "March 23rd" — centred */}
        <p style={{ marginTop: 12, fontSize: '1.2rem', fontWeight: 600, color: '#ff006e', width: '100%', textAlign: 'center' }}>
          🎂 March 23rd — Your Special Day 🎂
        </p>

        {/* Krutika's photo — below the text */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ marginTop: 28, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{ position: 'relative', width: 160, height: 160 }}>
            {/* Spinning gradient ring */}
            <div style={{
              position: 'absolute', inset: -6,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff006e, #ffc6ff, #bdb2ff, #ff006e)',
              animation: 'spin 4s linear infinite',
              zIndex: 0,
            }} />
            {/* White spacer ring */}
            <div style={{
              position: 'absolute', inset: -2,
              borderRadius: '50%',
              background: '#fff',
              zIndex: 1,
            }} />
            <img
              src="/kru1.jpeg"
              alt="Krutika"
              style={{
                position: 'relative', zIndex: 2,
                width: 160, height: 160,
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                boxShadow: '0 8px 32px rgba(255,0,110,0.35)',
              }}
            />
            {/* Heart badge */}
            <div style={{
              position: 'absolute', bottom: 6, right: 6, zIndex: 3,
              background: '#fff', borderRadius: '50%',
              width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(255,0,110,0.3)', fontSize: 16,
            }}>❤️</div>
          </div>
          <p style={{ marginTop: 10, fontSize: '0.9rem', fontWeight: 700, color: '#ff006e', letterSpacing: '0.1em' }}>
            My Wifeyyy 💍❤️
          </p>
        </motion.div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ fontSize: '1.1rem', maxWidth: 480, color: '#8a3a6a', lineHeight: 1.7, fontWeight: 500 }}
      >
        Even from far away, my heart celebrates you today ✨<br />
        This is our little Dudu & Bubu world, just for you.
      </motion.p>

      {/* Countdown */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2, type: 'spring' }}
      >
        {isBirthday ? (
          <motion.p
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ff006e' }}
          >
            🎉 Today is your Special Day, Krutika! 🎉
          </motion.p>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', marginBottom: 12, color: '#bdb2ff', fontWeight: 700, textTransform: 'uppercase' }}>
              Your special day arrives in…
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <CountdownUnit value={countdown!.days}    label="Days" />
              <span style={{ fontSize: '2rem', fontWeight: 900, marginTop: 8, color: '#ffc6ff' }}>:</span>
              <CountdownUnit value={countdown!.hours}   label="Hours" />
              <span style={{ fontSize: '2rem', fontWeight: 900, marginTop: 8, color: '#ffc6ff' }}>:</span>
              <CountdownUnit value={countdown!.minutes} label="Mins" />
              <span style={{ fontSize: '2rem', fontWeight: 900, marginTop: 8, color: '#ffc6ff' }}>:</span>
              <CountdownUnit value={countdown!.seconds} label="Secs" />
            </div>
          </div>
        )}
      </motion.div>

    </div>
  );
};

export default Hero;
