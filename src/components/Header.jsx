import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import '../styles/Header.css'
import { Sun, Moon } from 'lucide-react'

export default function Header({ theme, toggleTheme }) {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const underlineRef = useRef(null)
  const linksRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const activeIndex = linksRef.current.findIndex(
      (link) => link?.classList.contains('active')
    )
    const activeLink = linksRef.current[activeIndex]
    const underline = underlineRef.current

    if (activeLink && underline) {
      const linkRect = activeLink.getBoundingClientRect()
      const parentRect = activeLink.parentElement.getBoundingClientRect()

      const newX = linkRect.left - parentRect.left
      const newWidth = linkRect.width

      const tl = gsap.timeline()
      tl.to(underline, {
        scaleX: 1.5,
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out'
      })
      .to(underline, {
        x: newX,
        width: newWidth,
        duration: 0.5,
        ease: 'power2.out'
      })
      .to(underline, {
        scaleX: 1,
        opacity: 0.8,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }, [location.pathname])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${theme}`}>
      <div className="container">
        <div className="logo animated-logo">
          <Link to="/">MonPortfolio</Link>
        </div>

        <nav className="nav-links" role="navigation" aria-label="Navigation principale">
          {['/', '/about', '/contact'].map((path, index) => {
            const names = ['Accueil', 'À propos', 'Contact']
            const isActive = location.pathname === path
            return (
              <Link
                key={index}
                ref={(el) => (linksRef.current[index] = el)}
                to={path}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {names[index]}
              </Link>
            )
          })}
          <span ref={underlineRef} className="nav-underline"></span>
        </nav>

        <button onClick={toggleTheme} className="theme-toggle" aria-label="Changer de thème">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}