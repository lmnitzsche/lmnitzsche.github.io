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
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 600,
            marginBottom: 'var(--space-2xl)',
            color: 'var(--text)',
            letterSpacing: '-0.02em'
          }}>
            About
          </h1>
          
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
              Computer Science master's student graduating December 2025 with extensive experience 
              in full-stack software development.
            </p>
            
            <p>
              I build end-to-end solutions using React, Node.js, PostgreSQL, and Supabase, including 
              backend integrations and serverless functions. Working primarily with modern JavaScript (ES6+) 
              and TypeScript, I also apply machine learning with Python and deploy applications to the cloud.
            </p>

            <p>
              My strengths include REST API development and integration, performance optimization, and writing 
              clean, maintainable code that enhances user experience. I'm passionate about building high-quality 
              software that bridges functionality, efficiency, and real-world impact.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
