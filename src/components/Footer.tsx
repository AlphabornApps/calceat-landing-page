import React from 'react'
import '../styles/Footer.css'

/**
 * Footer component - Contact information and links
 * 
 * This component provides essential contact information, legal links,
 * and social media links. It serves as the final section of the landing page
 * and includes a secondary call-to-action to encourage sign-ups.
 */
const Footer: React.FC = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        {/* Main footer content */}
        <div className="footer-content">
          {/* Brand and description */}
          <div className="footer-section">
            <h3 className="footer-brand">Calceat</h3>
            <p className="footer-description">
              Making nutrition tracking simple and accessible for everyone. 
              Start your journey to better health today.
            </p>
            
            {/* Secondary CTA in footer */}
            <button className="btn btn-primary">
              Get Started Now
            </button>
          </div>
          
          {/* Quick links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          
          {/* Legal links */}
          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@calceat.com">hello@calceat.com</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#feedback">Send Feedback</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and social links */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Calceat. All rights reserved.
          </p>
          
          {/* Social media links */}
          <div className="social-links">
            <a href="#twitter" className="social-link" aria-label="Twitter">
              🐦
            </a>
            <a href="#facebook" className="social-link" aria-label="Facebook">
              📘
            </a>
            <a href="#instagram" className="social-link" aria-label="Instagram">
              📷
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
