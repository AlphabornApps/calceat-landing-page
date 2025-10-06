import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import calceatIcon from '../assets/icons/calceat-icon.png'

function handleCookieSettings(e: React.MouseEvent) {
  e.preventDefault()
  localStorage.removeItem('cookie_consent')
  // refresh to show banner again
  window.location.reload()
}

/**
 * Footer component - Clean, minimal footer inspired by Cal AI
 *
 * Simple footer with essential links and clean typography.
 */
const Footer: React.FC = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        {/* Call to action section */}
        <div className="footer-cta animate-fade-in-up">
          <h3 className="footer-cta-title font-display">
            Start your nutrition journey with{' '}
            <span className="brand-text">
              <span className="brand-calc">Calc</span>
              <span className="brand-eat">Eat</span>
            </span>
          </h3>
          <p className="footer-cta-description">
            Download now and experience the future of AI-powered nutrition tracking.
          </p>
          <div className="footer-cta-buttons">
            <button className="btn btn-primary">
              <span className="btn-icon">📱</span>
              Download for iOS
            </button>
            <button className="btn btn-secondary">
              Learn More
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="footer-links-section">
          <div className="footer-links-grid">
            <div className="footer-link-group">
              <h4 className="footer-link-title">Product</h4>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#premium">Premium</a></li>
                <li><a href="#download">Download</a></li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h4 className="footer-link-title">Support</h4>
              <ul className="footer-links">
                <li><Link to="/support">Help Center</Link></li>
                <li><a href="mailto:alphabornapps@gmail.com">Contact</a></li>
                <li><Link to="/delete-account">Delete Account</Link></li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h4 className="footer-link-title">Legal</h4>
              <ul className="footer-links">
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms">Terms</Link></li>
                <li><Link to="/accessibility">Accessibility</Link></li>
                <li><a href="#" onClick={handleCookieSettings}>Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <img src={calceatIcon} alt="CalcEat" className="footer-logo" />
            <span className="brand-text font-display">
              <span className="brand-calc">Calc</span>
              <span className="brand-eat">Eat</span>
            </span>
          </div>
          <p className="copyright">
            © {currentYear} CalcEat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
