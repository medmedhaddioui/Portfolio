import './About.css'

const About = () => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Architect in Digital Technologies',
      company: 'Mohammed VI Polytechnic University – 1337 School',
      description: 'Ben Guerir, Morocco'
    },
    {
      year: '2019 - 2022',
      title: 'Physic Baccalaureate',
      company: 'Groupe Scolaire Zghari',
      description: 'Tiflet, Morocco'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-main">
            <div className="about-image">
              <div className="image-wrapper">
                <div className="image-placeholder">
                  <div className="avatar-glow"></div>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: 'var(--primary-color)', stopOpacity: 0.2}} />
                        <stop offset="100%" style={{stopColor: 'var(--secondary-color)', stopOpacity: 0.2}} />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="90" fill="url(#gradient)"/>
                    <text x="100" y="120" fontSize="70" textAnchor="middle" fill="var(--primary-color)">
                      👨‍💻
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="about-text">
              <div className="about-label">Get to know me</div>
              <h3>Building Real-World Skills Through Projects</h3>
              <p>
                I'm a software engineering student at 1337 School (part of Mohammed VI Polytechnic University), 
                pursuing my degree in Digital Technologies. I'm passionate about full-stack development and 
                enjoy building real-world projects that solve problems and enhance my technical skills.
              </p>
              <p>
                Currently seeking a 4–6 month final-year internship where I can apply my knowledge 
                in C++, Node.js, React.js, and TypeScript while learning from experienced teams. 
                I'm fluent in Arabic, advanced in English, and have intermediate French proficiency.
              </p>
              <div className="skills-tags">
                <span className="tag">C/C++</span>
                <span className="tag">TypeScript</span>
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Docker</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>
          
          <div className="experience-timeline">
            <h3 className="timeline-title">Education</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{exp.year}</span>
                    <h4>{exp.title}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
