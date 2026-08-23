import { useEffect, useState, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [particles, setParticles] = useState([])
  const fullText = "Full-Stack Software Engineer"

  // Typing effect
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 60)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  // Particles
  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 8
    }))
    setParticles(newParticles)
  }, [])

  // Animated counter
  const AnimatedCounter = ({ target, suffix = '' }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const end = parseInt(target)
            const duration = 2000
            const startTime = performance.now()

            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(eased * end))
              if (progress < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
          }
        },
        { threshold: 0.5 }
      )

      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }, [target])

    return <span ref={ref}>{count}{suffix}</span>
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Floating particles */}
      <div className="particles" aria-hidden="true">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-pulse" />
            Available for Internship
          </div>

          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="gradient-text">Mohammed</span>
            <br />
            <span className="gradient-text">Elhaddioui</span>
            <span className="wave-emoji">👋</span>
          </h1>

          <h2 className="hero-subtitle">
            {text}
            <span className={`typing-cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </h2>

          <p className="hero-description">
            Software engineer looking for a 4–6 month internship. I build
            real-world projects with C++, Node.js, React, TypeScript, and Docker.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter target={2} suffix="+" /></span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter target={25} suffix="+" /></span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number"><AnimatedCounter target={3} /></span>
              <span className="stat-label">Languages</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')} data-hover>
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a href="/resume.pdf" download className="btn btn-secondary" data-hover>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/medmedhaddioui" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub" data-hover>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mohamed-elhaddioui-66ba74252/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn" data-hover>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="window-title">developer.ts</span>
              <div className="window-dots" style={{ opacity: 0 }}>
                <span className="dot" /><span className="dot" /><span className="dot" />
              </div>
            </div>
            <div className="code-body">
              <pre><code>{`<span class="kw">interface</span> <span class="type">Developer</span> {
  <span class="prop">name</span>: <span class="str">"Mohammed Elhaddioui"</span>;
  <span class="prop">role</span>: <span class="str">"Full-Stack Engineer"</span>;
  <span class="prop">stack</span>: [
    <span class="str">"React"</span>, <span class="str">"Node.js"</span>,
    <span class="str">"TypeScript"</span>, <span class="str">"C++"</span>
  ];
  <span class="prop">passion</span>: <span class="str">"Building things"</span>;
  <span class="prop">status</span>: <span class="str">"Open to work"</span>; <span class="cmt">✨</span>
}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <div className="mouse">
          <div className="mouse-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero
