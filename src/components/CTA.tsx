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

            <div className="cta-features animate-fade-in-up animate-delay-300">
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
