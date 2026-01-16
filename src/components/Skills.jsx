import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "C/C++", level: 85, color: "#00599C" },
        { name: "TypeScript", level: 80, color: "#3178C6" },
        { name: "JavaScript", level: 85, color: "#F7DF1E" },
        { name: "HTML/CSS", level: 90, color: "#E34F26" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚙️",
      skills: [
        { name: "React", level: 85, color: "#61DAFB" },
        { name: "Node.js", level: 80, color: "#339933" },
        { name: "Express", level: 75, color: "#000000" },
        { name: "Fastify", level: 75, color: "#000000" },
        { name: "TailwindCSS", level: 85, color: "#06B6D4" }
      ]
    },
    {
      title: "Tools & Databases",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, color: "#F05032" },
        { name: "Docker", level: 75, color: "#2496ED" },
        { name: "PostgreSQL", level: 75, color: "#4169E1" },
        { name: "SQLite", level: 80, color: "#003B57" },
        { name: "MariaDB", level: 70, color: "#003545" }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-description">
          Technologies and tools I work with to bring ideas to life
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className={`skill-bar ${isVisible ? 'animate' : ''}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          background: `linear-gradient(90deg, ${skill.color}, var(--primary-color))`,
                          animationDelay: `${(idx * 0.1) + (skillIdx * 0.1)}s`
                        }}
                      >
                        <div className="skill-glow" style={{ background: skill.color }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
