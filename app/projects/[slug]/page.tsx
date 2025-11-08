import { getGitHubRepo, getGitHubRepos } from '@/lib/github';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'lmnitzsche';
  
  try {
    const repos = await getGitHubRepos(username);
    return repos.map((repo) => ({
      slug: repo.name,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'lmnitzsche';
  
  let repo;
  try {
    repo = await getGitHubRepo(username, params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <main style={{
      minHeight: '100vh',
      paddingTop: 'calc(var(--nav-height) + var(--space-2xl))',
      paddingBottom: 'var(--space-3xl)'
    }}>
      <div className="container">
        <Link 
          href="/work"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            marginBottom: 'var(--space-2xl)',
            fontSize: '0.9375rem',
            transition: 'color 0.2s'
          }}
        >
          <i className="bi bi-arrow-left"></i>
          Back to work
        </Link>

        <div style={{
          maxWidth: '900px'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            marginBottom: 'var(--space-lg)',
            color: 'var(--text)',
            letterSpacing: '-0.02em'
          }}>
            {repo.name.replace(/-/g, ' ')}
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: 'var(--space-2xl)'
          }}>
            {repo.description || 'No description available'}
          </p>

          <div style={{
            display: 'flex',
            gap: 'var(--space-xl)',
            marginBottom: 'var(--space-3xl)',
            flexWrap: 'wrap'
          }}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: 'var(--space-md) var(--space-xl)',
                background: 'var(--accent)',
                color: 'var(--bg)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                transition: 'transform 0.2s'
              }}
            >
              <i className="bi bi-github"></i>
              View Repository
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: 'var(--space-md) var(--space-xl)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  transition: 'all 0.2s'
                }}
              >
                <i className="bi bi-box-arrow-up-right"></i>
                Live Demo
              </a>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-3xl)',
            padding: 'var(--space-2xl)',
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)'
          }}>
            <div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xs)'
              }}>
                Stars
              </div>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--accent)'
              }}>
                {repo.stargazers_count}
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xs)'
              }}>
                Language
              </div>
              <div style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--text)'
              }}>
                {repo.language || 'N/A'}
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xs)'
              }}>
                License
              </div>
              <div style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--text)'
              }}>
                {repo.license?.name || 'None'}
              </div>
            </div>
          </div>

          {repo.topics && repo.topics.length > 0 && (
            <div style={{
              marginBottom: 'var(--space-3xl)'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: 'var(--space-lg)',
                color: 'var(--text)'
              }}>
                Topics
              </h2>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-sm)'
              }}>
                {repo.topics.map(topic => (
                  <span key={topic} style={{
                    padding: '8px 16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

