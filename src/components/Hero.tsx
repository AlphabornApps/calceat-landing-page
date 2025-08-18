import React from 'react'
import '../styles/Hero.css'

/**
 * Hero component - The main landing section with value proposition
 * 
 * This component presents the primary value proposition of Calceat,
 * including a compelling headline, description, and call-to-action buttons.
 * It's designed to capture visitors' attention and drive conversions.
 */
const Hero: React.FC = () => {
  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          {/* Main headline - clear and compelling value proposition */}
          <h1 id="hero-title" className="hero-title">
            Calculate Your Nutrition
            <span className="highlight"> Made Simple</span>
          </h1>
          
          {/* Supporting description - explains the main benefit */}
          <p className="hero-description">
            Track your daily nutrition intake, calculate calories, and reach your health goals 
            with our intuitive nutrition calculator. Make informed food choices effortlessly.
          </p>
          
          {/* Call-to-action buttons - primary and secondary actions */}
          <div className="hero-actions" role="group" aria-label="Call to action buttons">
            <button className="btn btn-primary" aria-label="Start tracking nutrition for free">
              Start Tracking Free
            </button>
            <button className="btn btn-secondary" aria-label="Learn more about Calceat features">
              Learn More
            </button>
          </div>
          
          {/* Trust indicators - build credibility */}
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Meals Tracked</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
