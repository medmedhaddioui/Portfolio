import useScrollReveal from '../hooks/useScrollReveal'
import './Skills.css'

const Skills = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 })

  const bentoSkills = [
    {
      category: "Languages & Core",
      size: "large",
      icon: "⚡",
      gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))",
      borderColor: "rgba(99, 102, 241, 0.3)",
      skills: [
        { name: "C / C++", level: "85%", icon: "💻", tag: "System Programming" },
        { name: "TypeScript", level: "80%", icon: "🔷", tag: "Type-Safe JS" },
        { name: "JavaScript", level: "85%", icon: "🟨", tag: "ES6+" },
        { name: "HTML5 / CSS3", level: "90%", icon: "🎨", tag: "Modern Web" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      size: "medium",
      icon: "🚀",
      gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))",
      borderColor: "rgba(6, 182, 212, 0.3)",
      skills: [
        { name: "React.js", level: "85%", icon: "⚛️" },
        { name: "Node.js", level: "80%", icon: "⬢" },
        { name: "Express.js", level: "75%", icon: "🚂" },
        { name: "Fastify", level: "75%", icon: "⚡" },
        { name: "TailwindCSS", level: "85%", icon: "🌊" }
      ]
    },
    {
      category: "DevOps & Cloud",
      size: "small",
      icon: "🐳",
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15))",
      borderColor: "rgba(16, 185, 129, 0.3)",
      skills: [
        { name: "Docker", level: "75%", icon: "🐋" },
        { name: "Docker Compose", level: "75%", icon: "🐙" },
        { name: "Git / GitHub", level: "85%", icon: "🌿" }
      ]
    },
    {
      category: "Databases & Storage",
      size: "small",
      icon: "🗄️",
      gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.15))",
      borderColor: "rgba(236, 72, 153, 0.3)",
      skills: [
        { name: "PostgreSQL", level: "75%", icon: "🐘" },
        { name: "SQLite", level: "80%", icon: "🪶" },
        { name: "MariaDB", level: "70%", icon: "🦭" }
      ]
    }
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title gradient-text reveal ${isVisible ? 'visible' : ''}`}>
          Skills & Expertise
        </h2>
        <p className={`section-subtitle reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          A bento-grid breakdown of technologies I bring to the table
        </p>

        <div className="bento-grid">
          {bentoSkills.map((card, idx) => (
            <div
              key={idx}
              className={`bento-card bento-${card.size} reveal ${isVisible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${0.15 + idx * 0.1}s`,
                background: card.gradient,
                borderColor: card.borderColor
              }}
            >
              <div className="bento-header">
                <span className="bento-icon">{card.icon}</span>
                <h3>{card.category}</h3>
              </div>

              <div className="bento-skills-list">
                {card.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="bento-skill-item" data-hover>
                    <div className="bento-skill-info">
                      <span className="bento-skill-icon">{skill.icon}</span>
                      <span className="bento-skill-name">{skill.name}</span>
                    </div>
                    <div className="bento-skill-right">
                      {skill.tag && <span className="bento-skill-tag">{skill.tag}</span>}
                      <span className="bento-skill-badge">{skill.level}</span>
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
