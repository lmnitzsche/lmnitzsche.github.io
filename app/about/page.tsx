'use client';

import GitHubContributions from '@/components/GitHubContributions';

export default function AboutPage() {
  return (
    <main style={{
      minHeight: '100vh',
      paddingTop: 'calc(var(--nav-height) + var(--space-3xl))',
      paddingBottom: 'var(--space-4xl)'
    }}>
      <div className="container">
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-2xl)'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 600,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              About
            </h1>
            
            <div style={{
              display: 'flex',
              gap: 'var(--space-md)',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://www.linkedin.com/in/logan-nitzsche/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  padding: 'var(--space-md) var(--space-lg)',
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <i className="bi bi-linkedin"></i>
                LinkedIn
              </a>
              
              <a
                href="mailto:logannitzsche8@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  padding: 'var(--space-md) var(--space-lg)',
                  background: 'var(--accent)',
                  border: '1px solid var(--accent)',
                  borderRadius: 'var(--radius-md)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <i className="bi bi-envelope"></i>
                Contact Me
              </a>
            </div>
          </div>
          
          <div style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xl)'
          }}>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text)',
              fontWeight: 500
            }}>
              Incoming Software Engineer at MetLife. M.S. Computer Science '25.
            </p>
            
            <p>
              Most of my ideas don't stay ideas for long. I architect and build complete solutions across the full stack, 
              working with <span style={{ color: 'var(--text)', fontWeight: 500 }}>React</span>, <span style={{ color: 'var(--text)', fontWeight: 500 }}>TypeScript</span>, <span style={{ color: 'var(--text)', fontWeight: 500 }}>Node.js</span>, and <span style={{ color: 'var(--text)', fontWeight: 500 }}>Python</span>. 
              My experience spans product management, machine learning systems, full-stack development, and scalable cloud architecture. 
              I've worked across ML, product, and full stack, turning ideas into working systems.
            </p>
            
            <p>
              One thing I love as much as a good idea? A great conversation. Let's chat!
            </p>
          </div>

          <div style={{
            marginTop: 'var(--space-3xl)',
            paddingTop: 'var(--space-2xl)',
            borderTop: '1px solid var(--border)'
          }}>
            <GitHubContributions username="lmnitzsche" />
          </div>
        </div>
      </div>
    </main>
  );
}
