import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeartRain from './HeartRain';

interface Message {
  from: 'hema' | 'kruti';
  text: string;
  delay: number;
}

// Sweet conversation between Hema and Da
const MESSAGES: Message[] = [
  { from: 'hema',  text: "hello da yen madakati",                        delay: 0 },
  { from: 'kruti', text: "yen ella looo mokondini",                      delay: 1100 },
  { from: 'hema',  text: "baby u know one thing?",                       delay: 2200 },
  { from: 'kruti', text: "yen da",                                       delay: 3200 },
  { from: 'hema',  text: "lee nin Bday le evatttttt",                    delay: 4200 },
  { from: 'hema',  text: "babyyyy u truned 22 this year! AND HAPPY BIRTHDAY BABY 🎉💜", delay: 5600 },
];

const REVEAL_DELAY = 6800;

const TypingBubble = () => (
  <div style={{
    display: 'flex', gap: 5, alignItems: 'center', padding: '10px 14px',
    background: '#f3eeff', borderRadius: '4px 16px 16px 16px',
    border: '1.5px solid rgba(189,178,255,0.3)', width: 56,
  }}>
    {[0, 1, 2].map(i => (
      <motion.span
        key={i}
        style={{ width: 7, height: 7, borderRadius: '50%', background: '#bdb2ff', display: 'block' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
  </div>
);

const Avatar = ({ name, isRight }: { name: string; isRight: boolean }) => (
  <div style={{
    width: 38, height: 38, borderRadius: '50%', flexShrink: 0, alignSelf: 'flex-end',
    background: isRight
      ? 'linear-gradient(135deg,#bdb2ff,#8b70d8)'
      : 'linear-gradient(135deg,#ff006e,#ffc6ff)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 11, fontWeight: 800, color: '#fff',
    marginLeft: isRight ? 8 : 0,
    marginRight: isRight ? 0 : 8,
  }}>{name}</div>
);

const ChatBubble = ({ msg }: { msg: Message }) => {
  const isKruti = msg.from === 'kruti';
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.88 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{ display: 'flex', justifyContent: isKruti ? 'flex-end' : 'flex-start', width: '100%' }}
    >
      {!isKruti && <Avatar name="Hema" isRight={false} />}
      <div style={{
        maxWidth: '70%', padding: '10px 16px', fontSize: '0.95rem', fontWeight: 500,
        borderRadius: isKruti ? '16px 16px 4px 16px' : '4px 16px 16px 16px',
        background: isKruti
          ? 'linear-gradient(135deg,#bdb2ff,#8b70d8)'
          : '#f3eeff',
        color: isKruti ? '#fff' : '#2a0040',
        border: isKruti ? 'none' : '1.5px solid rgba(189,178,255,0.3)',
        boxShadow: isKruti ? '0 4px 14px rgba(140,112,216,0.25)' : '0 2px 8px rgba(189,178,255,0.1)',
      }}>
        {msg.text}
      </div>
      {isKruti && <Avatar name="da" isRight={true} />}
    </motion.div>
  );
};

const IntroChat = ({ onDone }: { onDone: () => void }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping]     = useState(false);
  const [showReveal, setShowReveal]     = useState(false);
  const [showHearts, setShowHearts]     = useState(false);
  const [goingIn, setGoingIn]           = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    MESSAGES.forEach((msg, i) => {
      if (i > 0)
        timers.push(setTimeout(() => setShowTyping(true), msg.delay - 700));
      timers.push(setTimeout(() => { setShowTyping(false); setVisibleCount(i + 1); }, msg.delay));
    });
    timers.push(setTimeout(() => setShowReveal(true), REVEAL_DELAY));
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => setShowHearts(true);
  const handleHeartsComplete = () => { setGoingIn(true); setTimeout(onDone, 400); };

  return (
    <motion.div
      style={{
        position: 'fixed', inset: 0, zIndex: 50, background: '#ffffff',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}
      animate={goingIn ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Top rainbow bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: 'linear-gradient(to right, #ff006e, #ffc6ff, #bdb2ff, #ffc6ff, #ff006e)' }} />
      {/* Bottom bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 5, background: 'linear-gradient(to right, #bdb2ff, #ffc6ff, #ff006e, #ffc6ff, #bdb2ff)' }} />

      {/* ALL Dudu images around all borders of convo page */}
      {/* Top-left */}
      <motion.img src="/dudu1.png.jfif" alt="" className="border-dudu" animate={{ y: [0,-7,0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position:'absolute', top:14, left:14, width:80, borderRadius:14, border:'2px solid #ffc6ff', boxShadow:'0 4px 14px rgba(255,0,110,0.15)', background:'#fff', objectFit:'cover' }}
      />
      {/* Top-right */}
      <motion.img src="/dudu2.png.jfif" alt="" className="border-dudu" animate={{ y: [0,-8,0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{ position:'absolute', top:14, right:14, width:80, borderRadius:14, border:'2px solid #bdb2ff', boxShadow:'0 4px 14px rgba(189,178,255,0.2)', background:'#fff', objectFit:'cover' }}
      />
      {/* Mid-left */}
      <motion.img src="/dud3.png.jfif" alt="" className="border-dudu" animate={{ y: [0,-6,0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ position:'absolute', top:'40%', left:10, width:75, borderRadius:14, border:'2px solid #ffc6ff', boxShadow:'0 4px 14px rgba(255,0,110,0.12)', background:'#fff', objectFit:'cover' }}
      />
      {/* Mid-right */}
      <motion.img src="/dudu4.png.jfif" alt="" className="border-dudu" animate={{ y: [0,-7,0] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{ position:'absolute', top:'40%', right:10, width:75, borderRadius:14, border:'2px solid #bdb2ff', boxShadow:'0 4px 14px rgba(189,178,255,0.18)', background:'#fff', objectFit:'cover' }}
      />
      {/* Bottom-left */}
      <motion.img src="/dudu5.png.jfif" alt="" className="border-dudu" animate={{ y: [0,-6,0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        style={{ position:'absolute', bottom:20, left:14, width:75, borderRadius:14, border:'2px solid #ffc6ff', boxShadow:'0 4px 14px rgba(255,0,110,0.12)', background:'#fff', objectFit:'cover' }}
      />
      {/* Bottom-right */}
      <motion.img src="/dudu6.jfif" alt="" className="border-dudu" animate={{ y: [0,-8,0] }} transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        style={{ position:'absolute', bottom:20, right:14, width:75, borderRadius:14, border:'2px solid #bdb2ff', boxShadow:'0 4px 14px rgba(189,178,255,0.18)', background:'#fff', objectFit:'cover' }}
        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />

      {/* Chat window */}
      <div style={{ width: '100%', maxWidth: 480, padding: '0 20px', display: 'flex', flexDirection: 'column', height: '80vh', justifyContent: 'flex-end' }}>
        <p style={{ textAlign: 'center', color: '#bdb2ff', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>
          💬 Hema &amp; Kruti
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto', flex: 1, justifyContent: 'flex-end', paddingBottom: 12 }}>
          {MESSAGES.slice(0, visibleCount).map((msg, i) => (
            <ChatBubble key={i} msg={msg} />
          ))}
          <AnimatePresence>
            {showTyping && (
              <motion.div key="t" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 8 }}>
                <Avatar name={MESSAGES[visibleCount]?.from === 'kruti' ? 'Kruti' : 'Hema'} isRight={false} />
                <TypingBubble />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showReveal && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              style={{ textAlign: 'center', marginTop: 16, marginBottom: 8 }}
            >
              <p style={{ color: '#8a3a6a', fontWeight: 600, marginBottom: 14, fontSize: '1rem' }}>
                🎉 Hema made something special for you Kruti!
              </p>
              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                animate={{ boxShadow: ['0 0 16px rgba(255,0,110,0.3)', '0 0 40px rgba(255,0,110,0.6)', '0 0 16px rgba(255,0,110,0.3)'] }}
                transition={{ boxShadow: { duration: 1.6, repeat: Infinity } }}
                style={{
                  padding: '14px 36px',
                  background: 'linear-gradient(135deg, #ff006e, #ffc6ff)',
                  borderRadius: 50, fontSize: '1.05rem', fontWeight: 900,
                  color: '#ffffff', border: 'none', cursor: 'pointer',
                }}
              >
                click this babyyy 🎁💖
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <HeartRain active={showHearts} onComplete={handleHeartsComplete} />
    </motion.div>
  );
};

export default IntroChat;
