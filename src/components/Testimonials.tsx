import React from 'react'
import '../styles/Testimonials.css'

/**
 * Testimonials component - Modern social proof showcase
 *
 * Features user testimonials in a clean, Twitter-inspired card design
 */
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Alex Eubank',
      handle: '@realalex',
      role: 'Fitness Influencer',
      quote: 'CalcEat is the fastest and most accurate nutrition tracker I\'ve used. The AI recognition is incredible - it identifies even complex meals instantly.',
      avatar: '💪',
      rating: 5
    },
    {
      name: 'Hussein Farhat',
      handle: '@hfarhat',
      role: 'Nutritionist',
      quote: 'Track correctly and you can eat what you love within your goals. CalcEat makes it so simple that my clients actually stick with it.',
      avatar: '🥗',
      rating: 5
    },
    {
      name: 'Jeremiah Jones',
      handle: '@jjones',
      role: 'Health Coach',
      quote: 'Make healthier late night choices with CalcEat guiding the way. The instant feedback has transformed my eating habits completely.',
      avatar: '🌟',
      rating: 5
    },
    {
      name: 'Mathias',
      handle: '@mathiasfit',
      role: 'Athlete',
      quote: 'Started yesterday and already giving it 5 stars! The interface is intuitive and the AI accuracy is mind-blowing. Best nutrition app hands down.',
      avatar: '🏃',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      handle: '@sarahfitlife',
      role: 'Personal Trainer',
      quote: 'Game changer for tracking macros! No more manual entries or guessing portions. CalcEat does it all in seconds.',
      avatar: '🎯',
      rating: 5
    },
    {
      name: 'David Park',
      handle: '@davehealth',
      role: 'Wellness Blogger',
      quote: 'The most user-friendly nutrition app I\'ve encountered. Beautiful design meets powerful functionality.',
      avatar: '✨',
      rating: 5
    }
  ]

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

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              {/* Card Header */}
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-meta">
                    <span className="author-handle">{testimonial.handle}</span>
                    <span className="author-separator">•</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>

              {/* Rating */}
              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>

              {/* Decoration */}
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="testimonials-stats animate-fade-in-up animate-delay-900">
          <div className="stat-item">
            <div className="stat-icon stat-icon-star">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">4.9</div>
              <div className="stat-label">App Store Rating</div>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon stat-icon-heart">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Users</div>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon stat-icon-chart">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Meals Tracked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


