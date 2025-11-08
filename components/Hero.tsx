'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-2xl)',
      position: 'relative',
      background: 'var(--bg)',
      overflow: 'hidden'
    }}>
      {/* Subtle animated gradient background */}
      <div className="hero-bg" style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.08), transparent 50%), radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.06), transparent 50%)',
        pointerEvents: 'none'
      }} />

      {/* Floating code symbols */}
      <div className="hero-symbols" style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.15
      }}>
        <div className="symbol" style={{ position: 'absolute', top: '15%', left: '10%', fontSize: '2rem' }}>{'{ }'}</div>
        <div className="symbol" style={{ position: 'absolute', top: '25%', right: '15%', fontSize: '1.5rem' }}>{'</>'}</div>
        <div className="symbol" style={{ position: 'absolute', bottom: '30%', left: '20%', fontSize: '1.8rem' }}>{'<>'}</div>
        <div className="symbol" style={{ position: 'absolute', bottom: '20%', right: '10%', fontSize: '2rem' }}>{'[ ]'}</div>
        <div className="symbol" style={{ position: 'absolute', top: '40%', right: '25%', fontSize: '1.5rem' }}>{'=>'}</div>
        <div className="symbol" style={{ position: 'absolute', top: '60%', left: '15%', fontSize: '1.6rem' }}>{'( )'}</div>
      </div>

      <div style={{
        maxWidth: '900px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s, transform 0.6s'
      }}>
        <h1 style={{
          fontSize: 'clamp(3.5rem, 10vw, 7rem)',
          fontWeight: 600,
          marginBottom: 'var(--space-xl)',
          color: 'var(--text)',
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          background: 'linear-gradient(135deg, var(--text) 0%, var(--text-secondary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Logan Nitzsche
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
          color: 'var(--accent)',
          marginBottom: 'var(--space-2xl)',
          fontWeight: 500,
          letterSpacing: '-0.01em'
        }}>
          Full-Stack Software Engineer
        </p>

                <p style={{
          fontSize: 'clamp(1.0625rem, 2.5vw, 1.25rem)',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-xl)',
          lineHeight: 1.7,
          maxWidth: '750px',
          margin: '0 auto var(--space-3xl)'
        }}>
          M.S. Computer Science '25 • Building production-ready applications with modern web technologies and scalable architecture.
          <br /><br />
          <span style={{ color: 'var(--text)', fontWeight: 500 }}>React</span> •{' '}
          <span style={{ color: 'var(--text)', fontWeight: 500 }}>TypeScript</span> •{' '}
          <span style={{ color: 'var(--text)', fontWeight: 500 }}>JavaScript</span> •{' '}
          <span style={{ color: 'var(--text)', fontWeight: 500 }}>Node.js</span> •{' '}
          <span style={{ color: 'var(--text)', fontWeight: 500 }}>PostgreSQL</span> •{' '}
          <span style={{ color: 'var(--text)', fontWeight: 500 }}>Python</span> •{' '}
          <span style={{ color: 'var(--text)', fontWeight: 500 }}>FastAPI</span>
        </p>

        <div style={{
          display: 'flex',
          gap: 'var(--space-lg)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <a
            href="https://github.com/lmnitzsche"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/logan-nitzsche/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:logan@example.com"
            className="hero-social-link"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
