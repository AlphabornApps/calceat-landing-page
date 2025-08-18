import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Support.css'

/**
 * Support component - Contact and help information
 * 
 * This component provides users with contact information and guidance
 * on how to get help with the CalcEat app. It includes the contact email
 * and links back to the main landing page.
 */
const Support: React.FC = () => {
  return (
    <div className="support-page">
      <div className="container">
        {/* Header section */}
        <div className="support-header">
          <div className="header-icon">🆘</div>
          <h1 className="support-title">Need Help?</h1>
          <p className="support-subtitle">
            We're here to help you get the most out of CalcEat
          </p>
          <div className="header-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-dot">●</span>
            <span className="decoration-line"></span>
          </div>
        </div>

        {/* Main support content */}
        <div className="support-content">
          {/* Contact section */}
          <div className="support-section">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-description">
              If you have any questions, need technical support, or want to provide feedback, 
              please don't hesitate to reach out to our team.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-details">
                  <h3>Email Support</h3>
                  <p>Send us an email and we'll get back to you as soon as possible.</p>
                  <a 
                    href="mailto:alphabornapps@gmail.com" 
                    className="contact-email"
                  >
                    alphabornapps@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Common questions section */}
          <div className="support-section">
            <h2 className="section-title">Common Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-icon">🚀</div>
                <div className="faq-content">
                  <h3>How do I get started with CalcEat?</h3>
                  <p>
                    Download the app from the App Store or Google Play Store, create an account, 
                    and start tracking your meals. The app will guide you through the setup process.
                  </p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-icon">🤖</div>
                <div className="faq-content">
                  <h3>How does the AI nutrition analysis work?</h3>
                  <p>
                    Simply take a photo of your meal or describe what you ate. Our AI will analyze 
                    the content and provide detailed nutritional information automatically.
                  </p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-icon">🗑️</div>
                <div className="faq-content">
                  <h3>Can I delete my account?</h3>
                  <p>
                    Yes, you can delete your account at any time. Visit our{' '}
                    <Link to="/delete-account" className="link">Delete Account</Link> page 
                    for detailed instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Response time section */}
          <div className="support-section">
            <h2 className="section-title">Response Time</h2>
            <p className="section-description">
              We typically respond to support requests within 24-48 hours during business days. 
              For urgent technical issues, please include "URGENT" in your email subject line.
            </p>
          </div>
        </div>

        {/* Back to home section */}
        <div className="back-home">
          <Link to="/" className="btn btn-secondary">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Support
