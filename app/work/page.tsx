'use client';

import { useState, useEffect } from 'react';
import { GitHubRepo } from '@/lib/github';
import Link from 'next/link';

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | string>('all');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [reposRes, userRes] = await Promise.all([
          fetch('https://api.github.com/users/lmnitzsche/repos?sort=updated&per_page=100'),
          fetch('https://api.github.com/users/lmnitzsche')
        ]);
        
        const reposData = await reposRes.json();
        const userData = await userRes.json();
        
        const filtered = reposData
          .filter((repo: GitHubRepo) => !repo.fork)
          .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count);
        
        setRepos(filtered);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const languages = Array.from(new Set(repos.map(r => r.language).filter(Boolean)));
  const filteredRepos = filter === 'all' ? repos : repos.filter(r => r.language === filter);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'var(--nav-height)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-lg)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid var(--border)',
            borderTop: '3px solid var(--accent)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
          }} />
          <style jsx>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
          <div style={{ color: 'var(--text-secondary)' }}>Loading projects...</div>
        </div>
      </div>
    );
  }

  return (
    <main style={{
      minHeight: '100vh',
      paddingTop: 'calc(var(--nav-height) + var(--space-3xl))',
      paddingBottom: 'var(--space-4xl)'
    }}>
      <div className="container">
        <div>
          {/* Main Content */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-3xl)'
            }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 600,
                color: 'var(--text)',
                letterSpacing: '-0.02em'
              }}>
                Projects
              </h1>
              
              <a
                href="https://github.com/lmnitzsche"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  padding: 'var(--space-md) var(--space-lg)',
                  background: 'var(--bg-secondary)',
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
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <i className="bi bi-github"></i>
                View on GitHub
              </a>
            </div>

            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: 'var(--space-2xl)'
            }}>
              {repos.length} open source projects focused on full-stack development, machine learning, and end-to-end applications
            </p>

            {/* Language Filter */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-sm)',
              marginBottom: 'var(--space-3xl)'
            }}>
                <button
                  onClick={() => setFilter('all')}
                  style={{
                    padding: '8px 16px',
                    background: filter === 'all' ? 'var(--accent)' : 'var(--bg-secondary)',
                    color: filter === 'all' ? '#fff' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: filter === 'all' ? 'var(--accent)' : 'var(--border)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  All ({repos.length})
                </button>
                {languages.slice(0, 6).map(lang => (
                  <button
                    key={lang}
                    onClick={() => setFilter(lang!)}
                    style={{
                      padding: '8px 16px',
                      background: filter === lang ? 'var(--accent)' : 'var(--bg-secondary)',
                      color: filter === lang ? '#fff' : 'var(--text-secondary)',
                      border: '1px solid',
                      borderColor: filter === lang ? 'var(--accent)' : 'var(--border)',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {lang} ({repos.filter(r => r.language === lang).length})
                  </button>
                ))}
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
              gap: 'var(--space-2xl)'
            }}>
          {filteredRepos.map((repo, index) => (
            <Link
              href={`/projects/${repo.name}`}
              key={repo.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 'var(--space-2xl)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                transition: 'all 0.3s',
                textDecoration: 'none',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: 'var(--space-lg)',
                gap: 'var(--space-md)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  lineHeight: 1.3
                }}>
                  {repo.name.replace(/-/g, ' ')}
                </h3>
              </div>
              
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: 'auto',
                lineHeight: 1.7,
                fontSize: '1rem'
              }}>
                {repo.description || 'An innovative project showcasing modern development practices'}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'var(--space-xl)',
                paddingTop: 'var(--space-lg)',
                borderTop: '1px solid var(--border)'
              }}>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-lg)',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)'
                }}>
                  {repo.language && (
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-xs)'
                    }}>
                      <span style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'var(--accent)'
                      }}></span>
                      {repo.language}
                    </span>
                  )}
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-xs)'
                  }}>
                    <i className="bi bi-star"></i>
                    {repo.stargazers_count}
                  </span>
                </div>
                <i className="bi bi-arrow-right" style={{
                  fontSize: '1.25rem',
                  color: 'var(--text-secondary)',
                  transition: 'transform 0.2s'
                }}></i>
              </div>

              {repo.topics && repo.topics.length > 0 && (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-xs)',
                  marginTop: 'var(--space-md)'
                }}>
                  {repo.topics.slice(0, 3).map(topic => (
                    <span key={topic} style={{
                      padding: '2px 8px',
                      background: 'var(--bg)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)'
                    }}>
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-4xl)',
            color: 'var(--text-secondary)'
          }}>
            No projects found for this filter
          </div>
        )}
        </div>
      </div>
    </main>
  );
}
