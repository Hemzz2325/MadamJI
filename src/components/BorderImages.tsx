import { motion } from 'framer-motion';

// Dudu & Bubu border images — files are .jfif in public/
const IMAGES = [
  // TOP-LEFT area
  { src: '/dudu1.png.jfif', alt: 'Dudu Bubu 1', top: '8px',   left: '8px',   right: 'auto',  bottom: 'auto',  rotate: '-8deg',  width: 110 },
  // TOP-RIGHT area  
  { src: '/dudu2.png.jfif', alt: 'Dudu Bubu 2', top: '8px',   left: 'auto',   right: '8px',   bottom: 'auto',  rotate: '8deg',   width: 110 },
  // MID-LEFT
  { src: '/dud3.png.jfif',  alt: 'Dudu Bubu 3', top: '38%',   left: '4px',   right: 'auto',  bottom: 'auto',  rotate: '-5deg',  width: 100 },
  // MID-RIGHT
  { src: '/dudu4.png.jfif', alt: 'Dudu Bubu 4', top: '38%',   left: 'auto',   right: '4px',   bottom: 'auto',  rotate: '5deg',   width: 100 },
  // BOTTOM-LEFT
  { src: '/dudu5.png.jfif', alt: 'Dudu Bubu 5', top: 'auto',  left: '8px',   right: 'auto',  bottom: '8px',   rotate: '-10deg', width: 110 },
];

const BorderImages = () => {
  return (
    <>
      {IMAGES.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: i * 0.2, type: 'spring', stiffness: 150 }}
          style={{
            position: 'fixed',
            top:    img.top,
            left:   img.left,
            right:  img.right,
            bottom: img.bottom,
            zIndex: 40,
            pointerEvents: 'none',
          }}
        >
          <motion.img
            src={img.src}
            alt={img.alt}
            className="border-dudu"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: `${img.width}px`,
              height: 'auto',
              transform: `rotate(${img.rotate})`,
              borderRadius: '20px',
              background: 'white',
              boxShadow: '0 6px 24px rgba(255,0,110,0.18), 0 2px 10px rgba(189,178,255,0.25)',
              border: '2px solid rgba(255,198,255,0.6)',
              padding: '4px',
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default BorderImages;
