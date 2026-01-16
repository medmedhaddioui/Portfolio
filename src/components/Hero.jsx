import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Full-Stack Software Engineer | Student at 1337 School"
  const [showCursor, setShowCursor] = useState(true)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }))
    setParticles(newParticles)

    // Typing effect
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Internship
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Mohammed Elhaddioui</span>
            <span className="wave">👋</span>
          </h1>
          <h2 className="hero-subtitle">
            {text}
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </h2>
          <p className="hero-description">
            Full-stack software engineer looking for a 4–6 month final-year internship where I can contribute to real projects
            and continue learning. I enjoy working with C++, Node.js, React.js, TypeScript, and have hands-on experience
            with DevOps practices.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Languages</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Let's Talk
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="window-title">portfolio.jsx</div>
              </div>
              <div className="code-content">
                <pre>
{`<span class="keyword">const</span> <span class="variable">developer</span> = {
  <span class="property">name</span>: <span class="string">"Your Name"</span>,
  <span class="property">skills</span>: [
    <span class="string">"React"</span>, 
    <span class="string">"Node.js"</span>,
    <span class="string">"TypeScript"</span>
  ],
  <span class="property">passion</span>: <span class="string">"Building"</span>,
  <span class="property">status</span>: <span class="string">"Available"</span> ✨
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero
