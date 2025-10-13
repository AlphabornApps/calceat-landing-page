import React from 'react'
import '../styles/Testimonials.css'

/**
 * Testimonials component - Modern social proof showcase
 *
 * Features user testimonials in a clean, Twitter-inspired card design
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
        <div className="testimonials-stats animate-fade-in-up animate-delay-100">
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
      </div>
    </section>
  )
}

export default Testimonials



