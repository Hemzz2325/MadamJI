import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    let unmounted = false;
    const audio = new Audio('/finding her.mp3');
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    const onInteract = () => {
      if (unmounted) return;
      if (hasInteracted.current) return;
      hasInteracted.current = true;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
      removeListeners();
    };

    const attachListeners = () => {
      document.addEventListener('click', onInteract);
      document.addEventListener('touchstart', onInteract);
      document.addEventListener('keydown', onInteract);
    };

    const removeListeners = () => {
      document.removeEventListener('click', onInteract);
      document.removeEventListener('touchstart', onInteract);
      document.removeEventListener('keydown', onInteract);
    };

    // Try to auto-play immediately (works if browser allows)
    audio.play().then(() => {
      if (unmounted) {
        audio.pause();
        return;
      }
      setIsPlaying(true);
    }).catch(() => {
      // Browser blocked autoplay — wait for first touch/click anywhere
      attachListeners();
    });

    const handlePauseBg = () => {
      audio.pause();
      setIsPlaying(false);
    };

    const handleResumeBg = () => {
      if (unmounted) return;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    window.addEventListener('pause-bg-music', handlePauseBg as EventListener);
    window.addEventListener('resume-bg-music', handleResumeBg as EventListener);

    return () => {
      unmounted = true;
      audio.pause();
      removeListeners();
      window.removeEventListener('pause-bg-music', handlePauseBg as EventListener);
      window.removeEventListener('resume-bg-music', handleResumeBg as EventListener);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 100 }}>
      <button
        onClick={togglePlay}
        style={{
          position: 'relative',
          width: 56, height: 56,
          borderRadius: '50%',
          border: 'none', cursor: 'pointer',
          background: 'linear-gradient(135deg, #ff006e, #ffc6ff)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: isPlaying
            ? '0 0 0 4px rgba(255,0,110,0.2), 0 6px 24px rgba(255,0,110,0.4)'
            : '0 4px 16px rgba(255,0,110,0.25)',
          transition: 'box-shadow 0.3s',
        }}
      >
        {isPlaying && (
          <span style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'rgba(255,0,110,0.2)',
            animation: 'ping 1s cubic-bezier(0,0,0.2,1) infinite',
          }} />
        )}
        {isPlaying
          ? <Pause size={22} color="#fff" />
          : <Play  size={22} color="#fff" style={{ marginLeft: 2 }} />
        }
      </button>
      {isPlaying && (
        <div style={{ position: 'absolute', bottom: 64, right: 0, background: '#fff', border: '1.5px solid #ffc6ff', borderRadius: 10, padding: '6px 12px', whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(189,178,255,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Music size={12} color="#ff006e" />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#8a3a6a' }}>Finding Her 🎵</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
