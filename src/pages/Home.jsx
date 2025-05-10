import { useState } from 'react'
import '../styles/Home.css'
import Badge from '../components/Badge'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import { Helmet } from 'react-helmet-async'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaUniversalAccess, // accessibilité
  FaSearch // SEO
} from 'react-icons/fa'


export default function Home() {
  const [activeBadge, setActiveBadge] = useState(null)

  const toggleBadge = (index) => {
    setActiveBadge(prev => (prev === index ? null : index))
  }

  const skills = [
    {
      label: 'HTML',
      icon: <FaHtml5 />,
      description: "Langage de structure des pages web, utilisé pour organiser le contenu."
    },
    {
      label: 'CSS',
      icon: <FaCss3Alt />,
      description: "Permet de styliser les pages HTML : couleurs, layout, animations…"
    },
    {
      label: 'JavaScript',
      icon: <FaJs />,
      description: "Langage de programmation qui rend les sites web dynamiques et interactifs."
    },
    {
      label: 'React',
      icon: <FaReact />,
      description: "Librairie JavaScript pour créer des interfaces modernes, rapides et réactives."
    },
    {
      label: 'Sass',
      icon: <FaSass />,
      description: "Préprocesseur CSS avec variables, fonctions et meilleures structures."
    },
    {
      label: 'Git',
      icon: <FaGitAlt />,
      description: "Outil de versionning pour suivre les changements du code source."
    },
    {
      label: 'GitHub',
      icon: <FaGithub />,
      description: "Plateforme collaborative pour héberger, versionner et partager ton code."
    },
    {
      label: 'SEO',
      icon: <FaSearch />,
      description: "Optimisation pour les moteurs de recherche afin d’améliorer ta visibilité."
    },
    {
      label: 'Accessibilité',
      icon: <FaUniversalAccess />,
      description: "Rendre le site utilisable pour tous, y compris les personnes en situation de handicap."
    },
    {
      label: 'Figma',
      icon: <FaFigma />,
      description: "Outil de conception UI/UX pour collaborer sur les maquettes et designs."
    },
    {
      label: 'Responsive',
      icon: <FaCss3Alt />,
      description: "Adapter le site à tous les formats d’écran : mobile, tablette, desktop."
    }
  ]

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Accueil – Portfolio de Lara O.</title>
        <meta
          name="description"
          content="Page d’accueil du portfolio de Lara O., développeuse front-end spécialisée en React, SEO et accessibilité web."
        />
        <link rel="canonical" href="https://tonsite.netlify.app/" />
      </Helmet>
      <main className="home">
        <section className="intro">
          <h1 className="intro-title">Bienvenue sur mon portfolio !</h1>
          <p className="intro-text">
            Je suis développeuse front-end passionnée par les interfaces modernes,
            accessibles et créatives.
          </p>
          <div className="skills">
            {skills.map((skill, index) => (
              <Badge
              key={index}
              index={index}
              label={skill.label}
              icon={skill.icon}
              description={skill.description}
              isActive={activeBadge === index}
              toggle={toggleBadge}
              />
            ))}
          </div>
        </section>

        <section className="projects">
          <h2 className="projects-title">Mes projets</h2>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.title}
                description={project.description}
                link={project.link}
                tech={project.tech}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}