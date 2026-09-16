const skills = [
  { title: 'Backend', items: ['Java & Spring Boot', 'Node.js & Fastify', 'Express', 'REST APIs', 'WebSocket', 'JWT authentication'] },
  { title: 'Frontend & data', items: ['JavaScript / TypeScript', 'React', 'HTML & CSS', 'PostgreSQL', 'SQLite'] },
  { title: 'Infrastructure', items: ['Kubernetes & K3s', 'Docker & Docker Compose', 'Vagrant', 'Linux', 'Nginx', 'Git'] },
]
export default function Skills() {
  return <section id="skills" className="section skills"><h2 className="section-heading"><span>02.</span> What I Work With</h2><p className="section-intro">A backend-first toolkit for building, connecting, and deploying full-stack applications.</p><div className="skill-grid">{skills.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></section>
}
