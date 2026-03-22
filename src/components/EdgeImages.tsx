import { motion } from 'framer-motion';

// 5 Dudu & Bubu images placed at the top edges of the hero section
// Replace these URLs with /dudu1.png through /dudu5.png once you drop the images in public/
const DUDU_IMAGES = [
  {
    src: 'https://media.tenor.com/TL7BjFu9kUAAAAAM/mochi-peach-cat.gif',
    alt: 'I love you my bubbah',
    style: { left: '-20px', top: '60px', rotate: '-12deg', width: '130px' },
  },
  {
    src: 'https://media.tenor.com/UJyqPSaC6DEAAAAC/dudu-bubu.gif',
    alt: 'Every Dudu needs a Bubu',
    style: { left: '100px', top: '-15px', rotate: '5deg', width: '120px' },
  },
  {
    src: 'https://media.tenor.com/images/7ce086b97ac471dc228ddfbc5aa63fe1/tenor.gif',
    alt: 'Dudu Bubu hug',
    style: { right: '90px', top: '-10px', rotate: '-6deg', width: '125px' },
  },
  {
    src: 'https://media.tenor.com/73bcca577db744a5e0b7fc80e340db38/tenor.gif',
    alt: 'Dudu Bubu fireworks',
    style: { right: '-15px', top: '70px', rotate: '10deg', width: '135px' },
  },
  {
    src: 'https://media.tenor.com/9e6af8ab5a89e3f2fdb3cdde3aef8faf/tenor.gif',
    alt: 'Happy Birthday cake',
    style: { left: '50%', top: '-30px', rotate: '0deg', width: '140px' },
  },
];

// Use the user's local images if placed in public/
const LOCAL_IMAGES = [
  { src: '/dudu1.png', alt: 'I love you my bubbah',      style: { left: '-10px',  top: '50px',  rotate: '-12deg', width: '130px' } },
  { src: '/dudu2.png', alt: 'Every Dudu needs a Bubu',   style: { left: '80px',   top: '-20px', rotate: '5deg',   width: '120px' } },
  { src: '/dudu3.png', alt: 'Dudu Bubu hug',             style: { right: '80px',  top: '-20px', rotate: '-6deg',  width: '125px' } },
  { src: '/dudu4.png', alt: 'Dudu Bubu fireworks',       style: { right: '-10px', top: '60px',  rotate: '10deg',  width: '135px' } },
  { src: '/dudu5.png', alt: 'Happy Birthday',            style: { left: '50%', transform: 'translateX(-50%)', top: '-35px', rotate: '0deg', width: '140px' } },
];

const EdgeImages = () => {
  return (
    <div className="absolute inset-x-0 top-0 pointer-events-none z-20" style={{ height: '260px' }}>
      {LOCAL_IMAGES.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -30, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: i * 0.18, type: 'spring', stiffness: 200, damping: 16 }}
          style={{
            position: 'absolute',
            ...img.style,
            rotate: undefined,
            transform: `${(img.style as { transform?: string }).transform ?? ''} rotate(${img.style.rotate})`,
          }}
        >
          <motion.img
            src={img.src}
            alt={img.alt}
            onError={(e) => {
              // fallback to tenor gifs if local not found
              const fallbacks = [
                'https://media.tenor.com/TL7BjFu9kUAAAAAM/mochi-peach-cat.gif',
                'https://media.tenor.com/UJyqPSaC6DEAAAAC/dudu-bubu.gif',
                'https://media.tenor.com/images/7ce086b97ac471dc228ddfbc5aa63fe1/tenor.gif',
                'https://media.tenor.com/images/73bcca577db744a5e0b7fc80e340db38/tenor.gif',
                'https://media.tenor.com/images/9e6af8ab5a89e3f2fdb3cdde3aef8faf/tenor.gif',
              ];
              (e.target as HTMLImageElement).src = fallbacks[i];
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: img.style.width,
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 8px 28px rgba(189,178,255,0.35), 0 2px 8px rgba(255,198,255,0.3)',
              border: '2px solid rgba(255,198,255,0.5)',
              background: 'white',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default EdgeImages;
