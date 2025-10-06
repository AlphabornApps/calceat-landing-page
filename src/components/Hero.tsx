import React from 'react'
import '../styles/Hero.css'

/**
 * Hero component - Premium modern hero section
 *
 * Split-screen design with compelling headline and iPhone mockup
 */
const Hero: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          {/* Left side - Content */}
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title animate-fade-in-up animate-delay-100">
              Track Your Nutrition
              <span className="hero-highlight"> Effortlessly</span>
            </h1>

            <p className="hero-description animate-fade-in-up animate-delay-200">
              Snap a photo of your meal and let AI do the rest. Get instant nutritional
              insights, track your goals, and achieve a healthier lifestyle—all in seconds.
            </p>

            <div className="hero-actions animate-fade-in-up animate-delay-300">
              <button className="btn btn-primary btn-large">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download for iOS
              </button>

              <button className="btn btn-secondary btn-large">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Download for Android
              </button>
            </div>

            {/* Social proof */}
            <div className="hero-social-proof animate-fade-in-up animate-delay-400">
              <div className="social-proof-avatars">
                <div className="avatar">👤</div>
                <div className="avatar">👤</div>
                <div className="avatar">👤</div>
                <div className="avatar-more">+10K</div>
              </div>
              <div className="social-proof-text">
                <div className="proof-stars">★★★★★</div>
                <p className="proof-description">
                  Loved by <strong>10,000+</strong> health-conscious users
                </p>
              </div>
            </div>
          </div>

          {/* Right side - iPhone mockup with image placeholder */}
          <div className="hero-visual animate-fade-in-up animate-delay-300">
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  {/* Placeholder for app screenshot */}
                  <div className="screen-placeholder">
                    <div className="placeholder-icon">📱</div>
                    <p className="placeholder-text">App Screenshot Placeholder</p>
                    <p className="placeholder-hint">Portrait iPhone image</p>
                  </div>
                </div>
              </div>

              {/* Floating stats cards */}
              <div className="floating-card card-1 animate-float">
                <div className="card-icon">📸</div>
                <div className="card-content">
                  <div className="card-label">AI Recognition</div>
                  <div className="card-value">99.2% Accurate</div>
                </div>
              </div>

              <div className="floating-card card-2 animate-float-delayed">
                <div className="card-icon">⚡</div>
                <div className="card-content">
                  <div className="card-label">Processing Speed</div>
                  <div className="card-value">&lt;2 seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient background decoration */}
      <div className="hero-bg-decoration"></div>
    </section>
  )
}

export default Hero
