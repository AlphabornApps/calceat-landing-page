import React from 'react'
import '../styles/Testimonials.css'

/**
 * Testimonials component - Social proof and benefits showcase
 *
 * Features stats and key differentiators
 */
const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials section" aria-labelledby="testimonials-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 id="testimonials-title" className="section-title animate-fade-in-up animate-delay-100">
            Loved by <span className="title-highlight">Thousands</span>
          </h2>
          <p className="section-description animate-fade-in-up animate-delay-200">
            Join our community of health-conscious individuals who have transformed their
            nutrition journey with CalcEat.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="testimonials-stats animate-fade-in-up animate-delay-300">
          <div className="stat-item">
            <div className="stat-icon stat-icon-star" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">4.9</div>
              <div className="stat-label">App Store Rating</div>
            </div>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat-item">
            <div className="stat-icon stat-icon-heart" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Users</div>
            </div>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat-item">
            <div className="stat-icon stat-icon-chart" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Meals Tracked</div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          <div className="benefit-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="benefit-icon-large gradient-blue">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">AI Food Recognition</h3>
            <p className="benefit-card-description">Snap a photo or type your meal. Our AI instantly analyzes and logs everything automatically.</p>
          </div>

          <div className="benefit-card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="benefit-icon-large gradient-purple">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Daily Progress Tracking</h3>
            <p className="benefit-card-description">Monitor calories, macros, and water intake with beautiful real-time dashboards.</p>
          </div>

          <div className="benefit-card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="benefit-icon-large gradient-green">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Personalized Goals</h3>
            <p className="benefit-card-description">Set custom targets based on your BMR, TDEE, activity level, and weight goals.</p>
          </div>

          <div className="benefit-card animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="benefit-icon-large gradient-orange">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Weight Progress Charts</h3>
            <p className="benefit-card-description">Visualize your weight journey with detailed graphs and track your transformation over time.</p>
          </div>

          <div className="benefit-card animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="benefit-icon-large gradient-pink">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Favorite Foods</h3>
            <p className="benefit-card-description">Save your frequently eaten foods as favorites for instant tracking. Log your go-to meals in seconds.</p>
          </div>

          <div className="benefit-card animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="benefit-icon-large gradient-teal">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Bank-Level Security</h3>
            <p className="benefit-card-description">Your data is encrypted and stored securely. We never share your personal information with third parties.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials



