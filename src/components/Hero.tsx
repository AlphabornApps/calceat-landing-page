import React from 'react'
import '../styles/Hero.css'

/**
 * Hero component - Modern minimalist hero section inspired by Cal AI
 *
 * Clean, centered design with large typography, gradient text effects,
 * and prominent app store download buttons.
 */
const Hero: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          {/* Main headline with gradient text */}
          <h1 id="hero-title" className="hero-title animate-fade-in-up">
            Meet{' '}
            <span className="hero-brand text-gradient font-display">
              CalcEat
            </span>
          </h1>

          {/* Supporting description */}
          <p className="hero-description animate-fade-in-up animate-delay-200">
            Your AI-powered nutrition companion that transforms how you track food.
            Simply snap a photo and get instant nutritional insights with cutting-edge
            computer vision technology.
          </p>

          {/* App Store buttons */}
          <div className="hero-actions animate-fade-in-up animate-delay-300" role="group" aria-label="Download app">
            <button className="btn btn-primary download-btn" aria-label="Download CalcEat from App Store">
              <span className="btn-icon">📱</span>
              Download for iOS
            </button>
            <button className="btn btn-secondary download-btn" aria-label="Learn more about CalcEat">
              Learn More
            </button>
          </div>

          {/* App preview or hero image placeholder */}
          <div className="hero-preview animate-fade-in-up animate-delay-400">
            <div className="app-mockup">
              <div className="mockup-screen">
                <div className="mockup-content">
                  <div className="mockup-header">
                    <div className="mockup-title">CalcEat</div>
                    <div className="mockup-subtitle">AI Food Recognition</div>
                  </div>
                  <div className="mockup-body">
                    <div className="mockup-card">
                      <div className="mockup-image">📸</div>
                      <div className="mockup-text">
                        <div className="mockup-food">Grilled Chicken Salad</div>
                        <div className="mockup-calories">420 calories</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="hero-stats animate-fade-in-up animate-delay-500">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Meals Tracked</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">App Store Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
