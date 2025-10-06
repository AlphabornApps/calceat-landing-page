import React from 'react'
import { Link } from 'react-router-dom'
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

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollToId = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="navbar" role="banner">
      <div className="container navbar-inner">
        <a href="#main" className="navbar-brand" onClick={scrollToId('main')} aria-label="Go to top">
          <img src={calceatIcon} alt="CalcEat" className="brand-logo" />
          <span className="brand-text font-display text-gradient">CalcEat</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          <a href="#features" onClick={scrollToId('features')}>Features</a>
          <a href="#testimonials" onClick={scrollToId('testimonials')}>Testimonials</a>
          <a href="#integrations" onClick={scrollToId('integrations')}>Integrations</a>
          <Link to="/support">Support</Link>
        </nav>

        <div className="nav-actions">
          <a href="#download" onClick={scrollToId('download')} className="download-btn">
            Download
          </a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? '🌙' : '☀️'}
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



