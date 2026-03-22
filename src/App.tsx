import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import IntroChat from './components/IntroChat';
import Clouds from './components/Clouds';
import BorderImages from './components/BorderImages';
import BalloonDrop from './components/BalloonDrop';
import GiftBox from './components/GiftBox';
import CursorFlowers from './components/CursorFlowers';
import RoseFall from './components/RoseFall';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);
  const [showRoses, setShowRoses] = useState(false);

  // Trigger balloons 1s after the main page opens
  useEffect(() => {
    if (introDone) {
      const t = setTimeout(() => setShowBalloons(true), 1000);
      // Roses fall 1s after balloons
      const t2 = setTimeout(() => setShowRoses(true), 2000);
      return () => { clearTimeout(t); clearTimeout(t2); };
    }
  }, [introDone]);

  if (!hasStarted) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', flexDirection: 'column' }}>
        <h1 style={{ color: '#ff006e', fontFamily: "'Dancing Script', cursive", fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: 24, padding: '0 20px', textAlign: 'center' }}>
          A surprise for <br /> Krutika 💜
        </h1>
        <motion.button
          onClick={() => setHasStarted(true)}
          animate={{ boxShadow: ['0 4px 14px rgba(255,0,110,0.3)', '0 12px 28px rgba(255,0,110,0.5)', '0 4px 14px rgba(255,0,110,0.3)'] }}
          transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ padding: '16px 36px', fontSize: '1.2rem', background: 'linear-gradient(135deg, #ff006e, #ffc6ff)', color: '#fff', border: 'none', borderRadius: 50, cursor: 'pointer', fontWeight: 900 }}
        >
          Tap to Open ✨
        </motion.button>
      </div>
    );
  }

  return (
    <>
      {/* Global Elements */}
      <CursorFlowers />
      <MusicPlayer />

      <AnimatePresence>
        {!introDone && <IntroChat onDone={() => setIntroDone(true)} />}
      </AnimatePresence>

      {introDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          style={{ background: '#ffffff', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
        >
          {/* Balloons drop 1s after opening */}
          <BalloonDrop show={showBalloons} />
          <RoseFall show={showRoses} />

          {/* Fixed Dudu border images */}
          <BorderImages />

          {/* Floating clouds along sides */}
          <Clouds />

          {/* Soft pink gradient blobs removed — clouds only */}

          {/* Top accent bar */}
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 5, zIndex: 50, background: 'linear-gradient(to right, #ff006e, #ffc6ff, #bdb2ff, #ffc6ff, #ff006e)' }} />

          {/* Main content */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <Hero />

            {/* Divider */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 60px', marginBottom: 8 }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #ffc6ff, transparent)', opacity: 0.7 }} />
              <span style={{ margin: '0 16px', fontSize: '1.4rem' }}>💜</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #bdb2ff, transparent)', opacity: 0.7 }} />
            </div>

            {/* Big Gift Box — replaces the love cards */}
            <GiftBox />

            {/* Quote section */}
            <section style={{ padding: '40px 24px 60px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                style={{
                  maxWidth: 680, width: '95%', margin: '0 auto',
                  background: 'linear-gradient(145deg, rgba(255,198,255,0.4), rgba(189,178,255,0.25))',
                  border: '2px solid rgba(255,0,110,0.25)',
                  borderRadius: 36, padding: 'clamp(30px, 6vw, 48px) clamp(20px, 4vw, 32px)',
                  boxShadow: '0 12px 48px rgba(255,0,110,0.15), inset 0 2px 18px rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  position: 'relative', overflow: 'hidden'
              }}>
                {/* Floating decor */}
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: 30, left: 30, fontSize: '1.6rem' }}>🎵</motion.div>
                <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', bottom: 30, right: 30, fontSize: '1.6rem' }}>✨</motion.div>
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: 20, right: 40, fontSize: '1.2rem' }}>💖</motion.div>

                {/* Main Mic Icon */}
                <div style={{
                  width: 80, height: 80, marginBottom: 20,
                  background: 'linear-gradient(135deg, #ff006e, #ffc6ff)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2.5rem', boxShadow: '0 8px 24px rgba(255,0,110,0.3)', border: '3px solid #fff'
                }}>
                  🎙️
                </div>

                <h3 style={{ fontSize: 'clamp(1.4rem, 5vw, 1.8rem)', fontWeight: 900, color: '#ff006e', marginBottom: 28, textAlign: 'center', lineHeight: 1.3 }}>
                  A Special Voice Message<br />Just For You, Babyy 💜
                </h3>

                <div style={{
                  width: '100%', maxWidth: 420,
                  background: 'rgba(255,255,255,0.9)',
                  padding: '12px 20px', borderRadius: 50,
                  boxShadow: '0 8px 32px rgba(189,178,255,0.4), inset 0 0 12px rgba(255,198,255,0.5)',
                  border: '2px solid rgba(255,198,255,0.9)',
                  display: 'flex', justifyContent: 'center'
                }}>
                  <audio
                    controls
                    src="/voice.ogg"
                    style={{ width: '100%', height: 44, outline: 'none' }}
                    onPlay={() => window.dispatchEvent(new CustomEvent('pause-bg-music'))}
                    onPause={() => window.dispatchEvent(new CustomEvent('resume-bg-music'))}
                    onEnded={() => window.dispatchEvent(new CustomEvent('resume-bg-music'))}
                  />
                </div>

                <p style={{ marginTop: 28, fontWeight: 900, fontSize: '1.1rem', color: '#ff006e', letterSpacing: '0.05em' }}>
                  — By Hubby ❤️
                </p>
              </motion.div>
            </section>

            {/* Footer */}
            <footer style={{
              textAlign: 'center', padding: '28px 16px',
              borderTop: '1.5px solid rgba(255,0,110,0.12)',
              background: 'rgba(255,198,255,0.08)',
            }}>
              <p style={{ fontWeight: 700, color: '#a070c0', fontSize: '1rem' }}>
                Made with <span style={{ color: '#ff006e' }}>💜</span> by Hema, just for Krutika
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: 4, color: '#bdb2ff' }}>
                Dudu &amp; Bubu Forever 🐻🐷 · 23 March 🎂
              </p>
            </footer>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;
