import { getGitHubRepo, getGitHubRepos } from '@/lib/github';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TechStackItem } from '@/components/TechStackItem';

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
                color: 'var(--text)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)'
              }}>
                {repo.language && (
                  <span style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 
                      repo.language === 'JavaScript' ? '#f1e05a' :
                      repo.language === 'TypeScript' ? '#3178c6' :
                      repo.language === 'Python' ? '#3572A5' :
                      repo.language === 'Java' ? '#b07219' :
                      repo.language === 'C++' ? '#f34b7d' :
                      repo.language === 'C' ? '#555555' :
                      repo.language === 'HTML' ? '#e34c26' :
                      repo.language === 'CSS' ? '#563d7c' :
                      repo.language === 'Vue' ? '#41b883' :
                      repo.language === 'PHP' ? '#4F5D95' :
                      'var(--text-secondary)'
                  }} />
                )}
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

          {repo.topics && repo.topics.length > 0 && (() => {
            // Map topics to skill icons
            const skillIconMap: { [key: string]: string } = {
              'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              'nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
              'next': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
              'vuejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
              'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
              'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
              'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
              'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
              'node': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
              'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
              'fastapi': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
              'django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
              'flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
              'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
              'postgres': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
              'supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
              'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
              'tensorflow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
              'pytorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
              'numpy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
              'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
              'html5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
              'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
              'css3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
              'tailwindcss': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
              'tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
              'bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
              'vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
              'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
              'github': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
            };
            
            const techStack = repo.topics
              .filter(topic => skillIconMap[topic.toLowerCase()])
              .map(topic => ({
                name: topic,
                icon: skillIconMap[topic.toLowerCase()]
              }));

            return (
              <>
                {techStack.length > 0 && (
                  <div style={{ marginBottom: 'var(--space-3xl)' }}>
                    <h2 style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      marginBottom: 'var(--space-lg)',
                      color: 'var(--text)'
                    }}>
                      Tech Stack
                    </h2>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                      gap: 'var(--space-lg)'
                    }}>
                      {techStack.map(skill => (
                        <TechStackItem key={skill.name} name={skill.name} icon={skill.icon} />
                      ))}
                    </div>
                  </div>
                )}
                
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
              </>
            );
          })()}
        </div>
      </div>
    </main>
  );
}

