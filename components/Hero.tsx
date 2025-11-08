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
      background: 'var(--bg)'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.05), transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '900px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s, transform 0.6s'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 20px',
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: 'var(--radius-full)',
          marginBottom: 'var(--space-2xl)',
          fontSize: '0.875rem',
          color: 'rgba(139, 92, 246, 0.9)',
          fontWeight: 500
        }}>
          🎓 Graduating December 2025
        </div>

        <h1 style={{
          fontSize: 'clamp(3.5rem, 10vw, 7rem)',
          fontWeight: 600,
          marginBottom: 'var(--space-xl)',
          color: 'var(--text)',
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
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
          M.S. Computer Science '25 • Building scalable, data-driven applications with{' '}
          <span style={{ color: 'var(--text)' }}>React</span>,{' '}
          <span style={{ color: 'var(--text)' }}>Node.js</span>,{' '}
          <span style={{ color: 'var(--text)' }}>PostgreSQL</span>,{' '}
          and <span style={{ color: 'var(--text)' }}>TypeScript</span>
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
