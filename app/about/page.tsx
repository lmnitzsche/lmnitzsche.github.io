'use client';

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
            
            <a
              href="mailto:lnitzsc@siue.edu"
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
              M.S. Computer Science candidate at SIUE, graduating December 2025.
            </p>
            
            <p>
              I architect and build complete solutions from concept to deployment, working across 
              the entire stack with <span style={{ color: 'var(--text)', fontWeight: 500 }}>React</span>, <span style={{ color: 'var(--text)', fontWeight: 500 }}>TypeScript</span>, <span style={{ color: 'var(--text)', fontWeight: 500 }}>Node.js</span>, and <span style={{ color: 'var(--text)', fontWeight: 500 }}>PostgreSQL</span>. 
              My experience spans serverless architecture, REST API design, and cloud deployment, 
              with additional expertise in machine learning using Python.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
