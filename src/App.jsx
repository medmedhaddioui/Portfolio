import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)
  const [loaderFading, setLoaderFading] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  // Cursor state
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 })
  const [cursorHover, setCursorHover] = useState(false)
  const ringRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  // Dark mode body class
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light'
  }, [darkMode])

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderFading(true)
      setTimeout(() => setLoading(false), 500)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll progress + active section
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Section observer for active section
  useEffect(() => {
    if (loading) return
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [loading])

  // Custom cursor
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    const handleMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      ringRef.current.target = { x: e.clientX, y: e.clientY }
    }

    const handleOver = (e) => {
      if (e.target.closest('a, button, [data-hover], .project-card, .skill-card, .cert-card, .filter-btn')) {
        setCursorHover(true)
      }
    }
    const handleOut = (e) => {
      if (e.target.closest('a, button, [data-hover], .project-card, .skill-card, .cert-card, .filter-btn')) {
        setCursorHover(false)
      }
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    // Smooth ring follow
    const animateRing = () => {
      const target = ringRef.current.target || { x: -100, y: -100 }
      setRingPos(prev => ({
        x: prev.x + (target.x - prev.x) * 0.15,
        y: prev.y + (target.y - prev.y) * 0.15
      }))
      rafRef.current = requestAnimationFrame(animateRing)
    }
    rafRef.current = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className={`loader ${loaderFading ? 'fade-out' : ''}`}>
          <div className="loader-brand">&lt;MH /&gt;</div>
          <div className="loader-bar">
            <div className="loader-bar-fill" />
          </div>
        </div>
      )}

      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Custom Cursor */}
      <div
        className={`cursor-dot ${cursorHover ? 'hovering' : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div
        className={`cursor-ring ${cursorHover ? 'hovering' : ''}`}
        style={{ left: ringPos.x, top: ringPos.y }}
      />

      <div className="App">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
        />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </>
  )
}

export default App
