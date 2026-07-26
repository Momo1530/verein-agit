"use client";
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const minDuration = 2000;

    // Animate pixel reveal
    const interval = setInterval(() => {
      setProgress(prev => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min(100, (elapsed / minDuration) * 100);
        return pct;
      });
    }, 16); // ~60fps

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);
      setTimeout(() => {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setPhase('complete');
          setTimeout(() => setVisible(false), 900);
        }, 200);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(interval);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader-overlay ${phase === 'complete' ? 'preloader-fade' : ''}`}>
      <div className="preloader-inner">
        <div className="image-container">
          <div
            className="pixel-reveal"
            style={{
              backgroundImage: 'url(/preloader-drawing.jpg)',
              clipPath: `inset(0 ${100 - progress}% 0 0)`,
            }}
          />
          <div
            className="pixel-scanline"
            style={{
              left: `${progress}%`,
            }}
          />
        </div>

        <div className="preloader-bar-track">
          <div className="preloader-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <p className="preloader-subtitle" style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}>
          PRÄVENTION - INTERVENTION - VERÄNDERUNG
        </p>

        <p className="preloader-brand">AGIT</p>
      </div>

      <style jsx>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.9s ease;
        }
        .preloader-fade {
          opacity: 0;
          pointer-events: none;
        }
        .preloader-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        .image-container {
          width: 80vw;
          max-width: 640px;
          height: auto;
          aspect-ratio: 1280 / 853;
          position: relative;
          background: #0a0a0a;
          overflow: hidden;
          border-radius: 4px;
        }
        .pixel-reveal {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          image-rendering: pixelated;
          transition: none;
        }
        .pixel-scanline {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: rgba(255, 255, 255, 0.3);
          transform: translateX(-50%);
          pointer-events: none;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.15);
        }
        .preloader-bar-track {
          width: 220px;
          height: 2px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          overflow: hidden;
        }
        .preloader-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #666, #aaa, #666);
          background-size: 200% 100%;
          border-radius: 4px;
          transition: width 0.05s linear;
          animation: shimmer 1.2s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .preloader-brand {
          font-family: 'Oswald', sans-serif;
          font-size: 1rem;
          letter-spacing: 8px;
          color: rgba(255, 255, 255, 0.25);
          text-transform: uppercase;
          animation: breathe 1.6s ease-in-out infinite;
        }
        .preloader-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 4px;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          white-space: nowrap;
          transition: none;
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
