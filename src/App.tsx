import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import LandingPage from './components/LandingPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'
import DeleteAccount from './components/DeleteAccount'
import Support from './components/Support'
import AccessibilityStatement from './components/AccessibilityStatement'
import CookieBanner from './components/CookieBanner'
import CookiePolicy from './components/CookiePolicy'
import './styles/App.css'

/**
 * Focus management component for accessibility
 * Ensures screen readers and keyboard users are notified of route changes
 * by programmatically focusing the main content area
 */
function FocusManager() {
  const location = useLocation()

  useEffect(() => {
    // Focus the main content area on route change
    // This helps screen reader users understand that navigation occurred
    const main = document.getElementById('main')
    if (main) {
      main.focus()
      // Scroll to top for visual users
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return null
}

/**
 * Main App component that handles routing for the entire application
 *
 * This component sets up client-side routing to handle:
 * - "/" - Main landing page with hero, features, and footer
 * - "/privacy" - Privacy policy page for the CalcEat app
 * - "/terms" - Terms & Conditions page for the CalcEat app
 * - "/delete-account" - Account deletion guidance page for users
 * - "/support" - Support and contact information page for users
 * - "/accessibility" - Accessibility statement page for the CalcEat app
 *
 * Uses React Router for clean URL navigation and better SEO
 * Includes FocusManager for accessibility compliance
 */
function App() {
  return (
    <Router>
      {/* Cookie consent banner */}
      <CookieBanner />
      <FocusManager />
      <div className="App">
        <Routes>
          {/* Main landing page route */}
          <Route path="/" element={<LandingPage />} />

          {/* Privacy policy page route */}
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Terms & Conditions page route */}
          <Route path="/terms" element={<TermsConditions />} />

          {/* Delete account guidance page route */}
          <Route path="/delete-account" element={<DeleteAccount />} />

          {/* Support page route */}
          <Route path="/support" element={<Support />} />

          {/* Cookie policy page route */}
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* Accessibility statement page route */}
          <Route path="/accessibility" element={<AccessibilityStatement />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
