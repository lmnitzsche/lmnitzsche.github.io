'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const pathname = usePathname();

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(13, 13, 13, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.2s',
      height: 'var(--nav-height)'
    }}>
      <div className="container" style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          textDecoration: 'none',
          cursor: 'pointer'
        }}>
          <div style={{
            fontWeight: 700,
            fontSize: '1.5rem',
            color: 'var(--text)',
            letterSpacing: '-0.02em'
          }}>
            LMN
          </div>
        </Link>

        <div style={{
          display: 'flex',
          gap: 'var(--space-2xl)',
          alignItems: 'center'
        }}>
          <Link 
            href="/work" 
            style={{ 
              color: isActive('/work') ? 'var(--accent)' : 'var(--text-secondary)',
              fontWeight: isActive('/work') ? 600 : 500,
              fontSize: '0.9375rem',
              transition: 'color 0.2s',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/work')) e.currentTarget.style.color = 'var(--text)';
            }}
            onMouseLeave={(e) => {
              if (!isActive('/work')) e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            style={{ 
              color: isActive('/about') ? 'var(--accent)' : 'var(--text-secondary)',
              fontWeight: isActive('/about') ? 600 : 500,
              fontSize: '0.9375rem',
              transition: 'color 0.2s',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/about')) e.currentTarget.style.color = 'var(--text)';
            }}
            onMouseLeave={(e) => {
              if (!isActive('/about')) e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            About
          </Link>
          <Link 
            href="/resume" 
            style={{ 
              color: isActive('/resume') ? 'var(--accent)' : 'var(--text-secondary)',
              fontWeight: isActive('/resume') ? 600 : 500,
              fontSize: '0.9375rem',
              transition: 'color 0.2s',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/resume')) e.currentTarget.style.color = 'var(--text)';
            }}
            onMouseLeave={(e) => {
              if (!isActive('/resume')) e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            Resume
          </Link>
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '1.25rem',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
            aria-label="Toggle theme"
          >
            <i className={theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill'}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
