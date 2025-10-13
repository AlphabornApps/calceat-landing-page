import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
 */
function App() {
  return (
    <Router>
      {/* Cookie consent banner */}
      <CookieBanner />
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
