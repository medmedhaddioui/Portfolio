import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "DailyNews AI",
      description: "AI-powered web application that allows users to track personalized news topics (e.g., cryptocurrency, politics) on a daily basis. Features user authentication with JWT, protected routes, and a clean, user-friendly interface for switching between topics.",
      image: "/AiDailyNews.svg",
      imageType: "file",
      gradient: "linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 50%, #2BFF88 100%)",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "GenAI"],
      category: "fullstack",
      github: "#",
      demo: "#",
      stats: { date: "Nov 2025-Present", type: "AI-powered" }
    },
    {
      id: 2,
      title: "OpenNotes",
      description: "Secure note-sharing platform with JWT authentication, role-based access controls, and public note discovery via keyword search. Optimized PostgreSQL indexing improved search performance by ~40%.",
      image: "📝",
      gradient: "#000000",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
      category: "fullstack",
      github: "#",
      demo: "#",
      stats: { perf: "+40%" }
    },
    {
      id: 3,
      title: "Real-Time Multiplayer Web Game",
      description: "Full-stack multiplayer application with real-time gameplay via WebSocket. Features automated tournament brackets, live scoring, player ranking, and synchronized game state across all clients.",
      image: "/pingpong.png",
      imageType: "file",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tags: ["Node.js", "Fastify", "React", "WebSocket", "SQLite"],
      category: "fullstack",
      github: "#",
      demo: "#",
      stats: { date: "Sep-Nov 2025", type: "Real-time" }
    },
    {
      id: 4,
      title: "Inception Project",
      description: "Explored Docker containerization, image creation, and orchestration. Built and managed Docker images, configured multi-container environments with Docker Compose, and optimized Dockerfile layers.",
      image: "/docker.png",
      imageType: "file",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      tags: ["Docker", "Docker Compose", "Containerization"],
      category: "backend",
      github: "#",
      demo: "#",
      stats: { date: "Jun-Jul 2025", type: "DevOps" }
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const filterButtons = [
    { label: 'All Projects', value: 'all', icon: '🎯' },
    { label: 'Frontend', value: 'frontend', icon: '🎨' },
    { label: 'Backend', value: 'backend', icon: '⚙️' },
    { label: 'Full Stack', value: 'fullstack', icon: '🚀' }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-description">
          Explore my latest work and side projects
        </p>
        
        <div className="filter-buttons">
          {filterButtons.map(btn => (
            <button 
              key={btn.value}
              className={`filter-btn ${filter === btn.value ? 'active' : ''}`}
              onClick={() => setFilter(btn.value)}
            >
              <span className="filter-icon">{btn.icon}</span>
              {btn.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className="project-image"
                style={{ background: project.gradient }}
              >
                {project.imageType === 'file' ? (
                  <img src={project.image} alt={project.title} className="project-screenshot" />
                ) : (
                  <div className="project-icon">{project.image}</div>
                )}
                <div className="project-overlay">
                  <div className="project-stats">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="stat">
                        <span className="stat-value">{value}</span>
                        <span className="stat-label">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links-mini">
                    <a href={project.github} className="icon-link" aria-label="GitHub">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.demo} className="icon-link" aria-label="Live Demo">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
