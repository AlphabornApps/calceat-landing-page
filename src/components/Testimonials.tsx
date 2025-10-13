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
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">AI Food Recognition</h3>
            <p className="benefit-card-description">Snap a photo or type your meal. Our AI instantly analyzes and logs everything automatically.</p>
          </div>

          <div className="benefit-card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="benefit-icon-large gradient-purple">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Daily Progress Tracking</h3>
            <p className="benefit-card-description">Monitor calories, macros, and water intake with beautiful real-time dashboards.</p>
          </div>

          <div className="benefit-card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="benefit-icon-large gradient-green">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Personalized Goals</h3>
            <p className="benefit-card-description">Set custom targets based on your BMR, TDEE, activity level, and weight goals.</p>
          </div>

          <div className="benefit-card animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="benefit-icon-large gradient-orange">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3 className="benefit-card-title">Weight Progress Charts</h3>
            <p className="benefit-card-description">Visualize your weight journey with detailed graphs and track your transformation over time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials



