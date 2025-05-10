import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import '../styles/notfound.css'

function NotFound() {
  return (
    <div className="notfound-wrapper">
      <Helmet>
        <title>404 - Page perdue dans l’espace 👾</title>
        <meta
          name="description"
          content="Oups ! Cette page n’existe pas ou s’est perdue dans la galaxie. Retournez à l’accueil pour retrouver votre chemin."
        />
        <link rel="canonical" href="https://tonsite.netlify.app/404" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="stars"></div>
      <div className="notfound-emoji">👾</div>
      <h1 className="notfound-title">Erreur 404</h1>
      <p className="notfound-text">
        Cette page s’est perdue dans l’espace... ou a été mangée par un bug 🐛
      </p>
      <Link to="/"MonPortfolio className="notfound-link">
        Revenir sur Terre 🌍
      </Link>
    </div>
  )
}

export default NotFound