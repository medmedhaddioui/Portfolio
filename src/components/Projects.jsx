import { useState, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05 })

  const projects = [
    {
      id: 1,
      title: "DailyNews AI",
      description: "AI-powered web application for tracking personalized news topics (crypto, tech, politics) daily. Built with JWT auth, protected routes, and a slick dynamic topic feed.",
      image: "/AiDailyNews.svg",
      imageType: "file",
      gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "GenAI"],
      category: "fullstack",
      github: "https://github.com/medmedhaddioui/AI-DailyNews",
      demo: "https://github.com/medmedhaddioui/AI-DailyNews",
      stats: { date: "Nov 2025 - Present", type: "AI Web App" }
    },
    {
      id: 2,
      title: "OpenNotes",
      description: "Secure note-sharing platform with JWT authentication, role-based access controls, and public note discovery. Optimized PostgreSQL indexing improved search query performance by 40%.",
      image: "📝",
      imageType: "emoji",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
      category: "fullstack",
      github: "https://github.com/medmedhaddioui",
      demo: "https://github.com/medmedhaddioui",
      stats: { perf: "+40% Query Speed", type: "Full-Stack" }
    },
    {
      id: 3,
      title: "Real-Time Multiplayer Game",
      description: "Full-stack multiplayer web game featuring real-time gameplay via WebSocket, automated tournament brackets, live scoring, player rankings, and synchronized game states.",
      image: "/pingpong.png",
      imageType: "file",
      gradient: "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)",
      tags: ["Node.js", "Fastify", "React", "WebSocket", "SQLite"],
      category: "fullstack",
      github: "https://github.com/medmedhaddioui/ft_transcendence",
      demo: "https://github.com/medmedhaddioui/ft_transcendence",
      stats: { date: "Sep - Nov 2025", type: "Real-Time Web" }
    },
    {
      id: 4,
      title: "Inception Container Infrastructure",
      description: "Comprehensive Docker containerization and orchestration project. Built custom Docker images, orchestrated multi-container services with Docker Compose, and optimized layer caching.",
      image: "/docker.png",
      imageType: "file",
      gradient: "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
      tags: ["Docker", "Docker Compose", "Nginx", "DevOps"],
      category: "backend",
      github: "https://github.com/medmedhaddioui/Inception--42",
      demo: "https://github.com/medmedhaddioui/Inception--42",
      stats: { date: "Jun - Jul 2025", type: "DevOps / Infrastructure" }
    }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  const filterButtons = [
    { label: 'All Projects', value: 'all', icon: '🎯' },
    { label: 'Full Stack', value: 'fullstack', icon: '🚀' },
    { label: 'DevOps / Backend', value: 'backend', icon: '⚙️' }
  ]

  // 3D Tilt handler
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
  }

  const handleMouseLeave = (cardRef) => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null)

    return (
      <div
        ref={cardRef}
        className={`project-card reveal ${isVisible ? 'visible' : ''}`}
        style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
        onMouseMove={(e) => handleMouseMove(e, cardRef)}
        onMouseLeave={() => handleMouseLeave(cardRef)}
        data-hover
      >
        <div className="project-image-wrapper" style={{ background: project.gradient }}>
          {project.imageType === 'file' ? (
            <img src={project.image} alt={project.title} className="project-img" />
          ) : (
            <div className="project-emoji-icon">{project.image}</div>
          )}
          <div className="project-overlay">
            <div className="project-overlay-stats">
              {Object.entries(project.stats).map(([k, v]) => (
                <div key={k} className="overlay-stat">
                  <span className="stat-val">{v}</span>
                  <span className="stat-key">{k}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
                aria-label="GitHub Repository"
                data-hover
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  aria-label="Live Demo / View"
                  data-hover
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          <p className="project-desc">{project.description}</p>

          <div className="project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title gradient-text reveal ${isVisible ? 'visible' : ''}`}>
          Featured Projects
        </h2>
        <p className={`section-subtitle reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          Real applications built with modern engineering practices
        </p>

        {/* Filter buttons */}
        <div className={`filter-bar reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {filterButtons.map(btn => (
            <button
              key={btn.value}
              className={`filter-btn ${filter === btn.value ? 'active' : ''}`}
              onClick={() => setFilter(btn.value)}
              data-hover
            >
              <span className="filter-icon">{btn.icon}</span>
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          {filteredProjects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
