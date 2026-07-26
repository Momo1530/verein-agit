"use client";
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const handleLoad = () => {
      setPhase('complete');
      setTimeout(() => setVisible(false), 900);
    };
    if (document.readyState === 'complete') {
      setTimeout(handleLoad, 2000);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!visible) return null;

  const rows = 6;
  const cols = 8;
  const pieces = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      pieces.push({ r, c, delay: (r * cols + c) * 0.025 });
    }
  }

  return (
    <div className={`preloader-overlay ${phase === 'complete' ? 'preloader-fade' : ''}`}>
      <div className="preloader-inner">
        <div className="puzzle-container">
          <div className="puzzle-grid">
            {pieces.map(({ r, c, delay }) => (
              <div
                key={`${r}-${c}`}
                className="puzzle-piece"
                style={{
                  animationDelay: `${delay}s`,
                  backgroundImage: 'url(/preloader-drawing.jpg)',
                  backgroundSize: `${cols * 100}% ${rows * 100}%`,
                  backgroundPosition: `${-c * 100}% ${-r * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="preloader-bar-track">
          <div className="preloader-bar-fill" />
        </div>

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
        .puzzle-container {
          width: 300px;
          height: 400px;
        }
        .puzzle-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(6, 1fr);
          gap: 2px;
          width: 100%;
          height: 100%;
        }
        .puzzle-piece {
          width: 100%;
          height: 100%;
          border-radius: 3px;
          opacity: 0;
          transform: scale(0.2) rotate(25deg);
          animation: pieceIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          box-shadow: inset 0 0 0 0.5px rgba(255,255,255,0.06);
          filter: brightness(1.05) contrast(1.05);
        }
        @keyframes pieceIn {
          0% { opacity: 0; transform: scale(0.2) rotate(25deg); }
          60% { opacity: 1; }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
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
          width: 0%;
          background: linear-gradient(90deg, #666, #aaa, #666);
          background-size: 200% 100%;
          border-radius: 4px;
          animation: fillBar 2s ease-in-out forwards, shimmer 1.2s linear infinite;
        }
        @keyframes fillBar {
          0% { width: 0%; }
          40% { width: 55%; }
          75% { width: 82%; }
          100% { width: 100%; }
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
        @keyframes breathe {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
