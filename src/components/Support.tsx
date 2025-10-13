import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
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
      <Navbar />

      <main className="support-main">
        <div className="container">
          {/* Header section */}
          <div className="support-header">
            <h1 className="support-title">
              <span className="text-gradient">CalcEat</span> Support
            </h1>
            <p className="support-subtitle">
              Have questions or need assistance? We're here to help you get the most out of your nutrition tracking experience.
            </p>
          </div>

          {/* Main support content */}
          <div className="support-content">
            {/* Contact section */}
            <div className="support-section contact-section">
              <h2 className="section-title">Contact Our Team</h2>
              <p className="section-description">
                Send us an email and we'll get back to you as soon as possible. We typically respond within 24-48 hours during business days.
              </p>

              <div className="contact-card">
                <a
                  href="mailto:alphabornapps@gmail.com"
                  className="contact-email-link"
                >
                  alphabornapps@gmail.com
                </a>
                <p className="contact-hint">Click to send us an email</p>
              </div>
            </div>

            {/* Common questions section */}
            <div className="support-section">
              <h2 className="section-title">Frequently Asked Questions</h2>

              <div className="faq-list">
                <div className="faq-item">
                  <div className="faq-header">
                    <h3>How do I get started with CalcEat?</h3>
                  </div>
                  <p>
                    Download the app from the App Store or Google Play Store, create an account,
                    and start tracking your meals. The app will guide you through the setup process.
                  </p>
                </div>

                <div className="faq-item">
                  <div className="faq-header">
                    <h3>How does the AI nutrition analysis work?</h3>
                  </div>
                  <p>
                    Simply take a photo of your meal or describe what you ate. Our AI will analyze
                    the content and provide detailed nutritional information automatically.
                  </p>
                </div>

                <div className="faq-item">
                  <div className="faq-header">
                    <h3>Is my data secure and private?</h3>
                  </div>
                  <p>
                    Yes, we take data security seriously. All your personal information and nutrition data
                    is encrypted and stored securely. Check our Privacy Policy for more details.
                  </p>
                </div>

                <div className="faq-item">
                  <div className="faq-header">
                    <h3>Can I delete my account?</h3>
                  </div>
                  <p>
                    Yes, you can delete your account at any time. Visit our{' '}
                    <Link to="/delete-account" className="faq-link">Delete Account</Link> page
                    for detailed instructions on how to permanently remove your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Support
