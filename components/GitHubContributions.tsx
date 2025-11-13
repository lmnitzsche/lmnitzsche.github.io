'use client';

import { useEffect, useState } from 'react';

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalCommits: number;
  accountAge: string;
}

export default function GitHubContributions({ username }: { username: string }) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        
        // Fetch repos
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const repos = await reposResponse.json();
        
        // Calculate stats
        const totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);
        
        // Calculate account age in days
        const createdDate = new Date(userData.created_at);
        const now = new Date();
        const ageInDays = Math.floor((now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24));
        const accountAge = `${ageInDays.toLocaleString()} days`;
        
        // Calculate total commits from public repos
        let totalCommits = 0;
        const commitPromises = repos.slice(0, 50).map(async (repo: any) => {
          try {
            const response = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/contributors`
            );
            const contributors = await response.json();
            if (Array.isArray(contributors)) {
              const userContribution = contributors.find((c: any) => c.login === username);
              return userContribution?.contributions || 0;
            }
            return 0;
          } catch {
            return 0;
          }
        });
        
        const commitCounts = await Promise.all(commitPromises);
        totalCommits = commitCounts.reduce((sum, count) => sum + count, 0);
        
        setStats({
          totalRepos: userData.public_repos,
          totalStars,
          totalForks,
          totalCommits,
          accountAge
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubStats();
  }, [username]);

  if (loading) {
    return (
      <div style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-xl)',
        textAlign: 'center',
        color: 'var(--text-secondary)'
      }}>
        Loading GitHub stats...
      </div>
    );
  }

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'var(--space-xl)',
        flexWrap: 'wrap',
        gap: 'var(--space-md)'
      }}>
        <div>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'var(--text)',
            margin: '0 0 var(--space-xs) 0'
          }}>
            GitHub Statistics
          </h3>
          <p style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            margin: 0
          }}>
            Open source contributions and activity
          </p>
        </div>
        
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            padding: 'var(--space-sm) var(--space-md)',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--text)',
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
            e.currentTarget.style.color = 'var(--text)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <i className="bi bi-github"></i>
          View on GitHub
        </a>
      </div>

      {stats && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 'var(--space-lg)'
        }}>
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-lg)',
            background: 'var(--bg)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
          >
            <div style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: 'var(--space-xs)'
            }}>
              {stats.totalCommits.toLocaleString()} 
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              fontWeight: 500
            }}>
              Public Contributions
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'var(--space-lg)',
            background: 'var(--bg)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
          >
            <div style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: 'var(--space-xs)'
            }}>
              {stats.totalRepos}
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              fontWeight: 500
            }}>
              Public Repositories
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'var(--space-lg)',
            background: 'var(--bg)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
          >
            <div style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: 'var(--space-xs)'
            }}>
              {stats.totalStars}
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              fontWeight: 500
            }}>
              Total Stars
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'var(--space-lg)',
            background: 'var(--bg)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
          >
            <div style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: 'var(--space-xs)'
            }}>
              {stats.accountAge}
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              fontWeight: 500
            }}>
              On GitHub
            </div>
          </div>
        </div>
      )}

      <div style={{
        marginTop: 'var(--space-lg)',
        padding: 'var(--space-md)',
        background: 'var(--bg)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border)',
        textAlign: 'center'
      }}>
        <p style={{
          margin: 0,
          fontSize: '0.875rem',
          color: 'var(--text-secondary)'
        }}>
          <i className="bi bi-info-circle" style={{ marginRight: 'var(--space-xs)' }}></i>
          Public contributions only. 1,000+ additional contributions in private repositories.
        </p>
      </div>
    </div>
  );
}
