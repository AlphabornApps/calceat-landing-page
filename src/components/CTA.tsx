import React from 'react'
import '../styles/CTA.css'
import appScreenshot from '../assets/images/ready-to-transform.png'

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
                <span className="feature-check" aria-hidden="true">✓</span>
                <span>Free 3-day trial</span>
              </div>
              <div className="cta-feature">
                <span className="feature-check" aria-hidden="true">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="cta-feature">
                <span className="feature-check" aria-hidden="true">✓</span>
                <span>No Commitment, cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Visual - Phone mockup */}
          <div className="cta-visual animate-fade-in-up animate-delay-300">
            <div className="cta-phone">
              <img
                src={appScreenshot}
                alt="CalcEat app screenshot showing food logging interface"
                className="cta-phone-image"
              />
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




