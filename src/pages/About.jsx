import '../styles/About.css'
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
          <html lang="fr" />
          <title>À propos – Portfolio de Lara O.</title>
          <meta
            name="description"
            content="Découvrez le parcours de Lara O., développeur front-end passionné par l’accessibilité, les animations et l'expérience utilisateur moderne."
          />
          <link rel="canonical" href="https://tonsite.netlify.app/about" />
        </Helmet>
      <main className="about">
        <section className="about-container">
          <h1 className="about-title">À propos de moi</h1>
          <p className="about-text">
            Je suis un développeur front-end passionné par le design interactif, l’accessibilité,
            et les interfaces utilisateurs modernes. J’aime transformer les maquettes en expériences fluides et intuitives.
          </p>
          <p className="about-text">
            Mon parcours combine créativité et rigueur : je m’intéresse autant au code propre qu’à l’animation d’un bouton au survol 🌀
            ou à la performance sur mobile 📱.
          </p>
          <p className="about-text">
            Mon objectif : créer des produits digitaux utiles, accessibles à tous, et qui ont du style ✨
          </p>
        </section>
      </main>
    </>
  )
}