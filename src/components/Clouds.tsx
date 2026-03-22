import { motion } from 'framer-motion';

// Cloud shape component using pure CSS/divs
const Cloud = ({ style, delay = 0, size = 1 }: {
  style: React.CSSProperties;
  delay?: number;
  size?: number;
}) => (
  <motion.div
    style={{
      position: 'absolute',
      ...style,
      zIndex: 0,
      pointerEvents: 'none',
    }}
    animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
    transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {/* Main cloud body */}
    <div style={{
      position: 'relative',
      width: `${180 * size}px`,
      height: `${60 * size}px`,
      background: '#ffffff',
      borderRadius: '50px',
      boxShadow: `0 6px 30px rgba(255,198,255,0.4), 0 2px 8px rgba(189,178,255,0.2)`,
      border: '1.5px solid rgba(255,198,255,0.4)',
    }}>
      {/* Left puff */}
      <div style={{
        position: 'absolute',
        top: `${-30 * size}px`,
        left: `${20 * size}px`,
        width: `${80 * size}px`,
        height: `${80 * size}px`,
        background: '#ffffff',
        borderRadius: '50%',
        border: '1.5px solid rgba(255,198,255,0.35)',
        boxShadow: '0 2px 12px rgba(255,198,255,0.3)',
      }} />
      {/* Right puff */}
      <div style={{
        position: 'absolute',
        top: `${-40 * size}px`,
        left: `${70 * size}px`,
        width: `${90 * size}px`,
        height: `${90 * size}px`,
        background: '#ffffff',
        borderRadius: '50%',
        border: '1.5px solid rgba(189,178,255,0.3)',
        boxShadow: '0 2px 16px rgba(189,178,255,0.25)',
      }} />
      {/* Far right puff */}
      <div style={{
        position: 'absolute',
        top: `${-20 * size}px`,
        right: `${15 * size}px`,
        width: `${65 * size}px`,
        height: `${65 * size}px`,
        background: '#ffffff',
        borderRadius: '50%',
        border: '1.5px solid rgba(255,198,255,0.3)',
      }} />
    </div>
  </motion.div>
);

const Clouds = () => (
  <>
    <Cloud style={{ top: '8%', left: '3%' }}         delay={0}   size={1.0} />
    <Cloud style={{ top: '5%', right: '5%' }}         delay={2}   size={0.8} />
    <Cloud style={{ top: '22%', left: '-3%' }}        delay={4}   size={0.7} />
    <Cloud style={{ top: '18%', right: '-2%' }}       delay={1.5} size={0.9} />
    <Cloud style={{ top: '40%', left: '-5%' }}        delay={3}   size={0.6} />
    <Cloud style={{ top: '38%', right: '-4%' }}       delay={2.5} size={0.65} />
    <Cloud style={{ top: '60%', left: '2%' }}         delay={1}   size={0.55} />
    <Cloud style={{ top: '62%', right: '1%' }}        delay={3.5} size={0.6} />
  </>
);

export default Clouds;
