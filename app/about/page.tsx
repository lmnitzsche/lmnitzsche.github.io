export default function AboutPage() {
  return (
    <main style={{
      minHeight: '100vh',
      paddingTop: 'calc(var(--nav-height) + var(--space-3xl))',
      paddingBottom: 'var(--space-4xl)',
      position: 'relative'
    }}>
      {/* Fantasy background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.08), transparent 40%), radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.05), transparent 40%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      
      {/* Subtle sparkle pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 600,
            marginBottom: 'var(--space-lg)',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9) 0%, rgba(59, 130, 246, 0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}>
            ✨ About
          </h1>

          <div style={{
            padding: 'var(--space-2xl)',
            background: 'var(--bg-secondary)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.1)'
          }}>
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
      </div>
    </main>
  );
}
