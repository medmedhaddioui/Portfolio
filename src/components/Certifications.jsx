import useScrollReveal from '../hooks/useScrollReveal'
import './Certifications.css'

const Certifications = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 })

  // User can easily add/edit certificates here!
  const certificates = [
    {
      id: 1,
      title: "1337 School (42 Network) Common Core",
      issuer: "1337 / UM6P",
      date: "2024",
      icon: "🏆",
      badge: "Software Architecture",
      skills: ["C/C++", "Algorithms", "Network Programming", "Docker"],
      link: "https://1337.ma",
      verified: true
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Self-Driven & Project Verified",
      date: "2025",
      icon: "📜",
      badge: "Full Stack",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      link: "#",
      verified: true
    },
    {
      id: 3,
      title: "Docker & Containerization Mastery",
      issuer: "Inception Project Validation",
      date: "2025",
      icon: "🐳",
      badge: "DevOps",
      skills: ["Docker", "Docker Compose", "Nginx", "System Administration"],
      link: "#",
      verified: true
    }
  ]

  return (
    <section id="certifications" className="certifications" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title gradient-text reveal ${isVisible ? 'visible' : ''}`}>
          Certifications & Accomplishments
        </h2>
        <p className={`section-subtitle reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          Verified certifications, course completions, and academic milestones
        </p>

        <div className="certs-grid">
          {certificates.map((cert, idx) => (
            <div
              key={cert.id}
              className={`cert-card reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 + idx * 0.1}s` }}
              data-hover
            >
              <div className="cert-header">
                <div className="cert-icon-wrapper">
                  <span className="cert-icon">{cert.icon}</span>
                </div>
                <div className="cert-meta">
                  <span className="cert-badge">{cert.badge}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {cert.issuer}
              </p>

              <div className="cert-skills">
                {cert.skills.map((s, i) => (
                  <span key={i} className="cert-skill-tag">{s}</span>
                ))}
              </div>

              {cert.link && cert.link !== '#' && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify-btn"
                  data-hover
                >
                  Verify Credential
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
            </div>
          ))}

          {/* Add Certificate Placeholder Card for future expansion */}
          <div
            className={`cert-card add-cert-card reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${0.15 + certificates.length * 0.1}s` }}
          >
            <div className="add-cert-inner">
              <div className="add-cert-icon">+</div>
              <h4>More Certifications Coming Soon</h4>
              <p>Continuously expanding technical knowledge through certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
