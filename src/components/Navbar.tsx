import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import calceatIcon from '../assets/icons/calceat-icon.png'

function useTheme() {
  const [theme, setTheme] = React.useState<string>(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    return 'light'
  })

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return { theme, toggleTheme }
}

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string>('')
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Track active section based on scroll position
  React.useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const handleScroll = () => {
      const sections = ['how-it-works', 'testimonials', 'download']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            return
          }
        }
      }
      setActiveSection('')
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const scrollToId = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)

    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleLinkClick = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    navigate(path)
  }

  // Check if a link is active based on current path
  const isActive = (path: string) => location.pathname === path

  return (
    <header className="navbar" role="banner">
      <div className="container navbar-inner">
        <a href="/" onClick={handleLinkClick('/')} className="navbar-brand" aria-label="Go to homepage">
          <img src={calceatIcon} alt="CalcEat" className="brand-logo" />
          <span className="brand-text font-display">
            <span className="brand-calc">Calc</span>
            <span className="brand-eat">Eat</span>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          <a href="#how-it-works" onClick={scrollToId('how-it-works')} className={activeSection === 'how-it-works' ? 'active' : ''}>How It Works</a>
          <a href="#testimonials" onClick={scrollToId('testimonials')} className={activeSection === 'testimonials' ? 'active' : ''}>Testimonials</a>
          <a href="#download" onClick={scrollToId('download')} className={activeSection === 'download' ? 'active' : ''}>Start Now</a>
          <a href="/support" onClick={handleLinkClick('/support')} className={isActive('/support') ? 'active' : ''}>Support</a>
        </nav>

        <div className="nav-actions">
          <button className={`theme-toggle ${theme === 'dark' ? 'dark-mode' : ''}`} onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            <svg className="theme-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"/>
            </svg>
          </button>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar



