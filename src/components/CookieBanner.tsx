import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/CookieBanner.css'

declare global {
  interface Window {
    dataLayer: any[]
    gtag?: (...args: any[]) => void
  }
}

const COOKIE_KEY = 'cookie_consent' // 'essential' | 'all'

/**
 * CookieBanner component – shows on first visit until the user chooses.
 * Stores the choice in localStorage. Only strictly-necessary cookies are
 * allowed when "Essential Only" is chosen.
 */
const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY)
    if (!stored) {
      setVisible(true)
    } else if (stored === 'all') {
      // If user already accepted all, load analytics scripts here
      enableAnalytics()
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem(COOKIE_KEY, 'all')
    setVisible(false)
    enableAnalytics()
  }

  const essentialOnly = () => {
    localStorage.setItem(COOKIE_KEY, 'essential')
    setVisible(false)
  }

  const enableAnalytics = () => {
    // Example: dynamically insert Google Analytics (placeholder)
    if (document.getElementById('ga-script')) return
    const s = document.createElement('script')
    s.id = 'ga-script'
    s.async = true
    s.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID')
    document.body.appendChild(s)
    window.dataLayer = window.dataLayer || []
    function gtag(){window.dataLayer.push(arguments)}
    // @ts-ignore
    gtag('js', new Date())
    // @ts-ignore
    gtag('config', 'GA_MEASUREMENT_ID')
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <p className="cookie-text">
        We use cookies to improve your experience. You can choose to allow
        essential cookies only or accept all cookies. Read our{' '}
        <Link to="/cookie-policy" className="cookie-link">Cookie&nbsp;Policy</Link>.
      </p>
      <div className="cookie-actions" role="group" aria-label="Cookie consent options">
        <button className="btn btn-secondary" onClick={essentialOnly} aria-label="Accept essential cookies only">
          Essential Only
        </button>
        <button className="btn btn-primary" onClick={acceptAll} aria-label="Accept all cookies">
          Accept All
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
