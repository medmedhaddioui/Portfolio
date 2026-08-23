import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

const About = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 })

  const experiences = [
    {
      year: '2023 — Present',
      title: 'Architect in Digital Technologies',
      company: '1337 School — Mohammed VI Polytechnic University',
      location: 'Ben Guerir, Morocco',
      highlights: ['Full-stack development', 'System programming in C/C++', 'DevOps & containerization']
    },
    {
      year: '2019 — 2022',
      title: 'Physics Baccalaureate',
      company: 'Groupe Scolaire Zghari',
      location: 'Tiflet, Morocco',
      highlights: ['Science & mathematics focus']
    }
  ]

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title gradient-text reveal ${isVisible ? 'visible' : ''}`}>
          About Me
        </h2>
        <p className={`section-subtitle reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          Get to know the person behind the code
        </p>

        <div className="about-grid">
          {/* Avatar */}
          <div className={`about-avatar-col reveal-left ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="avatar-container">
              <div className="avatar-glow" />
              <div className="avatar-shape">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.15 }} />
                      <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.15 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="90" fill="url(#avatar-grad)" />
                  <text x="100" y="115" fontSize="60" textAnchor="middle" fill="#6366f1">👨‍💻</text>
                </svg>
              </div>
              {/* Floating badges around avatar */}
              <div className="avatar-badge badge-react">⚛️</div>
              <div className="avatar-badge badge-node">⬢</div>
              <div className="avatar-badge badge-docker">🐳</div>
            </div>
          </div>

          {/* Text */}
          <div className={`about-text-col reveal-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="about-label">Who I Am</div>
            <h3 className="about-heading">Building Real-World Skills Through Projects</h3>
            <p>
              I'm a software engineering student at <strong>1337 School</strong> (part of Mohammed VI
              Polytechnic University), pursuing my degree in Digital Technologies. I'm passionate about
              full-stack development and building projects that solve real problems.
            </p>
            <p>
              Currently seeking a <strong>4–6 month internship</strong> where I can apply my knowledge
              in C++, Node.js, React, and TypeScript while contributing to meaningful projects.
              I'm fluent in Arabic, advanced in English, and have intermediate French proficiency.
            </p>
            <div className="about-tags">
              <span className="tag">C/C++</span>
              <span className="tag">TypeScript</span>
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">Docker</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className={`timeline-section reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <h3 className="timeline-heading">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            Education
          </h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item reveal ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.5 + index * 0.15}s` }}
              >
                <div className="timeline-marker">
                  <div className="marker-dot" />
                  {index < experiences.length - 1 && <div className="marker-line" />}
                </div>
                <div className="timeline-card">
                  <span className="timeline-year">{exp.year}</span>
                  <h4>{exp.title}</h4>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-location">{exp.location}</p>
                  {exp.highlights && (
                    <div className="timeline-highlights">
                      {exp.highlights.map((h, i) => (
                        <span key={i} className="highlight-tag">{h}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
