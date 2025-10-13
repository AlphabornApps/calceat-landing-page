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
        <div id="footer-download" className="footer-cta animate-fade-in-up">
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
            <a href="https://apps.apple.com/app/calceat/id6749812271" target="_blank" rel="noopener noreferrer" className="download-btn download-btn-ios">
              <div className="download-btn-content">
                <svg className="download-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="download-text">
                  <span className="download-label">Download on the</span>
                  <span className="download-store">App Store</span>
                </div>
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.alphaborn.calceat" target="_blank" rel="noopener noreferrer" className="download-btn download-btn-android">
              <div className="download-btn-content">
                <svg className="download-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="download-text">
                  <span className="download-label">Get it on</span>
                  <span className="download-store">Google Play</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="footer-links-section">
          <div className="footer-links-grid">
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
