import '../styles/ProjectCard.css'

export default function ProjectCard({ title, description, link, tech = [] }) {
  return (
    <a href={link} className="project-card" target="_blank" rel="noopener noreferrer" aria-label={`Voir le projet : ${title}`}>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-tech">
          {tech.map((t, i) => (
            <span key={i} className="project-tech-badge">{t}</span>
          ))}
        </div>
        <p className="project-description">{description}</p>
      </div>
    </a>
  )
}