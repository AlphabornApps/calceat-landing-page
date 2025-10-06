import React from 'react'
import '../styles/CTA.css'

/**
 * CTA component - Final compelling call-to-action
 *
 * Premium design with gradient background and iPhone mockup
 */
const CTA: React.FC = () => {
  return (
    <section id="download" className="cta section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-wrapper">
          {/* Content */}
          <div className="cta-content">
            <div className="cta-badge animate-fade-in-up">
              <span className="badge-pulse"></span>
              <span>Get Started Today</span>
            </div>

            <h2 id="cta-title" className="cta-title animate-fade-in-up animate-delay-100">
              Ready to Transform Your
              <span className="cta-highlight"> Nutrition Journey?</span>
            </h2>

            <p className="cta-description animate-fade-in-up animate-delay-200">
              Join thousands of users who have discovered the easiest way to track their nutrition.
              Download CalcEat and start your free trial today.
            </p>

            <div className="cta-actions animate-fade-in-up animate-delay-300">
              <button className="btn btn-primary btn-large">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download on the App Store
              </button>
            </div>

            <div className="cta-features animate-fade-in-up animate-delay-400">
              <div className="cta-feature">
                <span className="feature-check">✓</span>
                <span>Free 3-day trial</span>
              </div>
              <div className="cta-feature">
                <span className="feature-check">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="cta-feature">
                <span className="feature-check">✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Visual - Phone with placeholder */}
          <div className="cta-visual animate-fade-in-up animate-delay-300">
            <div className="cta-phone">
              <div className="cta-phone-frame">
                <div className="cta-phone-notch"></div>
                <div className="cta-phone-screen">
                  <div className="cta-screen-placeholder">
                    <div className="cta-placeholder-icon">📱</div>
                    <p className="cta-placeholder-text">App Screenshot</p>
                    <p className="cta-placeholder-hint">Portrait iPhone image</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="cta-float-badge badge-1">
                <span className="float-icon">🎉</span>
                <span className="float-text">Start Free Trial</span>
              </div>

              <div className="cta-float-badge badge-2">
                <span className="float-icon">⚡</span>
                <span className="float-text">Instant Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="cta-bg-gradient"></div>
    </section>
  )
}

export default CTA
