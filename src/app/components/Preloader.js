"use client";
import { useState, useEffect } from 'react';

const ACCESS_CODE = 'Hallo';

export default function Preloader() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState('loading');
  const [progress, setProgress] = useState(0);

  // Check if already unlocked this session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('agit_unlocked')) {
        setUnlocked(true);
      }
      if (window.location.pathname !== '/' || sessionStorage.getItem('preloader_shown')) {
        setVisible(false);
      }
    }
  }, []);

  // Preloader animation (only when unlocked)
  useEffect(() => {
    if (!unlocked) return;

    const startTime = Date.now();
    const minDuration = 2000;

    const interval = setInterval(() => {
      setProgress(prev => {
        const elapsed = Date.now() - startTime;
        return Math.min(100, (elapsed / minDuration) * 100);
      });
    }, 16);

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);
      setTimeout(() => {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setPhase('complete');
          sessionStorage.setItem('preloader_shown', '1');
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
  }, [unlocked]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === ACCESS_CODE) {
      setError(false);
      sessionStorage.setItem('agit_unlocked', '1');
      setUnlocked(true);
    } else {
      setError(true);
      setCode('');
      setTimeout(() => setError(false), 2000);
    }
  };

  // If already unlocked and preloader was shown, hide everything
  if (!visible) return null;

  // Show lock screen if not unlocked
  if (!unlocked) {
    return (
      <div className="preloader-overlay">
        <div className="lock-screen">
          <div className="lock-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <p className="lock-title">Geschützter Bereich</p>
          <p className="lock-subtitle">Bitte geben Sie den Zugangscode ein</p>
          <form onSubmit={handleSubmit} className="lock-form">
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={`lock-input ${error ? 'lock-input-error' : ''}`}
              placeholder="Code"
              autoFocus
            />
            <button type="submit" className="lock-btn">Eintreten</button>
          </form>
          {error && <p className="lock-error">Falscher Code. Versuchen Sie es erneut.</p>}
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
          }
          .lock-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 2rem;
          }
          .lock-icon {
            opacity: 0.5;
            animation: lockPulse 2s ease-in-out infinite;
          }
          @keyframes lockPulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          .lock-title {
            font-family: 'Oswald', sans-serif;
            font-size: 1.3rem;
            letter-spacing: 4px;
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
            margin: 0;
          }
          .lock-subtitle {
            font-family: 'Inter', sans-serif;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.25);
            margin: 0;
          }
          .lock-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            width: 100%;
            max-width: 280px;
          }
          .lock-input {
            width: 100%;
            padding: 0.8rem 1rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.7);
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            text-align: center;
            letter-spacing: 4px;
            outline: none;
            transition: all 0.3s ease;
          }
          .lock-input:focus {
            border-color: rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.08);
          }
          .lock-input-error {
            border-color: rgba(255, 80, 80, 0.5);
            animation: shake 0.4s ease;
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-8px); }
            75% { transform: translateX(8px); }
          }
          .lock-btn {
            width: 100%;
            padding: 0.8rem;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.6);
            font-family: 'Inter', sans-serif;
            font-size: 0.85rem;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
          }
          .lock-btn:hover {
            background: rgba(255, 255, 255, 0.12);
            color: rgba(255, 255, 255, 0.8);
          }
          .lock-error {
            font-family: 'Inter', sans-serif;
            font-size: 0.75rem;
            color: rgba(255, 80, 80, 0.7);
            margin: 0;
            animation: fadeIn 0.3s ease;
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  // Show preloader animation
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
            style={{ left: `${progress}%` }}
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
