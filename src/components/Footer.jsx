import { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import '../styles/Footer.css'

export default function Footer() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <footer className="footer">
      <div 
        className="share-button" 
        onClick={toggleMenu}
        role="button"
        aria-pressed={open}
        aria-label="Afficher les réseaux sociaux"
        tabIndex="0"
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-share-2"
        >
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </div>

      <div className={`social-icons ${open ? 'open' : ''}`}>
        <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>

      <div className="footer-text">
        © 2025 MonPortfolio. Tous droits réservés.
      </div>
    </footer>
  )
}