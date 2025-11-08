'use client';

import { useState } from 'react';

export default function ResumePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const skills = [
    // Frontend
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'Frontend' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', category: 'Frontend' },
    
    // Backend & Database
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Backend' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', category: 'Backend' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Backend' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', category: 'Backend' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Backend' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', category: 'Backend' },
    
    // DevOps & Tools
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'DevOps' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'DevOps' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'DevOps' },
    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', category: 'DevOps' },
    
    // ML/AI
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'ML/AI' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', category: 'ML/AI' },
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', category: 'ML/AI' },
    { name: 'scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg', category: 'ML/AI' },
    { name: 'Apache Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg', category: 'ML/AI' }
  ];

  return (
    <main style={{
      minHeight: '100vh',
      paddingTop: 'calc(var(--nav-height) + var(--space-2xl))',
      paddingBottom: 'var(--space-3xl)'
    }}>
      <div className="container">
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
            Resume
          </h1>
          
          <div style={{
            display: 'flex',
            gap: 'var(--space-md)',
            alignItems: 'center'
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
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: 500,
                transition: 'all 0.2s',
                cursor: 'pointer'
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
              <i className="bi bi-linkedin"></i>
              View on LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
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
                transition: 'all 0.2s',
                cursor: 'pointer'
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
              <i className="bi bi-download"></i>
              Download PDF
            </a>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: 'var(--space-3xl)',
          marginBottom: 'var(--space-3xl)'
        }}>
          {/* Experience */}
          <div>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 600,
              marginBottom: 'var(--space-xl)',
              color: 'var(--text)'
            }}>
              Experience
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2xl)'
            }}>
              <div style={{
                padding: 'var(--space-xl)',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  Teaching Assistant & Guest Lecturer
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'var(--accent)',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: 500
                }}>
                  Southern Illinois University Edwardsville • Aug 2024 - Present
                </div>
                <ul style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  paddingLeft: '1.25rem',
                  margin: 0
                }}>
                  <li>Teaching Deep Learning, Database & Web System Development, and Analysis of Algorithms</li>
                  <li>Mentoring students through complex CS concepts and full-stack projects</li>
                  <li>Guest lecturing on advanced topics in machine learning and web development</li>
                </ul>
              </div>

              <div style={{
                padding: 'var(--space-xl)',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  Founding President & ML Engineer
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'var(--accent)',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: 500
                }}>
                  SIUE Machine Intelligence Community • Jan 2024 - May 2025
                </div>
                <ul style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  paddingLeft: '1.25rem',
                  margin: 0
                }}>
                  <li>Established 5th MIC in the U.S., collaborating with Harvard, MIT, Brown, and Boston College</li>
                  <li>Led AI initiatives using TensorFlow, PyTorch, scikit-learn, and Apache Spark MLlib</li>
                  <li>Supervised projects in computer vision, NLP, and predictive analytics</li>
                </ul>
              </div>

              <div style={{
                padding: 'var(--space-xl)',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  Research Assistant & Software Engineer
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'var(--accent)',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: 500
                }}>
                  Southern Illinois University Edwardsville • Jul 2023 - May 2024
                </div>
                <ul style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  paddingLeft: '1.25rem',
                  margin: 0
                }}>
                  <li>Developed agricultural simulation platform with 102+ Illinois county datasets</li>
                  <li>Built CI/CD pipeline with GitHub Actions for automated deployment</li>
                  <li>Recognized by Chancellor for comprehensive educational software development</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 600,
              marginBottom: 'var(--space-xl)',
              color: 'var(--text)'
            }}>
              Education
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2xl)'
            }}>
              <div style={{
                padding: 'var(--space-xl)',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  M.S. Computer Science
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'var(--accent)',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: 500
                }}>
                  Southern Illinois University Edwardsville • 2024 - 2025
                </div>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  Accelerated Combined BS + MS Program (3.5 Years)
                </p>
              </div>

              <div style={{
                padding: 'var(--space-xl)',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  B.S. Computer Science
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'var(--accent)',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: 500
                }}>
                  Southern Illinois University Edwardsville • 2022 - 2025
                </div>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  Minor in Mathematics
                </p>
              </div>

              <div style={{
                padding: 'var(--space-xl)',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: 'var(--space-sm)'
                }}>
                  Certifications
                </div>
                <ul style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  paddingLeft: '1.25rem',
                  margin: 0,
                  fontSize: '0.9375rem'
                }}>
                  <li>Computer Science for AI Professional Certificate (Harvard)</li>
                  <li>Machine Learning Specialization (Stanford)</li>
                  <li>Generative AI Leader Professional Certificate (Google Cloud)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-xl)',
            flexWrap: 'wrap',
            gap: 'var(--space-md)'
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 600,
              color: 'var(--text)',
              margin: 0
            }}>
              Technical Skills
            </h2>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '10px 16px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <option value="All">All Skills</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend & Database</option>
              <option value="DevOps">DevOps</option>
              <option value="ML/AI">ML/AI</option>
            </select>
          </div>
          
          {/* Display skills based on selection */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {skills
              .filter(skill => selectedCategory === 'All' || skill.category === selectedCategory)
              .map(skill => (
                <div
                  key={skill.name}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        padding: 'var(--space-lg)',
                        background: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border)',
                        transition: 'all 0.2s',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{
                          width: '48px',
                          height: '48px',
                          objectFit: 'contain'
                        }}
                      />
                      <span style={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        textAlign: 'center'
                      }}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </main>
  );
}
