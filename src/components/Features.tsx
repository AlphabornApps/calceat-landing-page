import React from 'react'
import '../styles/Features.css'

/**
 * Features component - Clean showcase of key app features
 *
 * Modern card-based design highlighting main benefits
 */
const Features: React.FC = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Recognition',
      description: 'Advanced computer vision technology instantly identifies food items with 99% accuracy. No manual searching or typing required.',
      badge: 'Core Feature'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get complete nutritional breakdown in under 2 seconds. Scan, analyze, and track your meals in real-time.',
      badge: 'Speed'
    },
    {
      icon: '📊',
      title: 'Comprehensive Insights',
      description: 'Track calories, macros, vitamins, minerals, and more. Get personalized recommendations based on your goals.',
      badge: 'Analytics'
    },
    {
      icon: '🎯',
      title: 'Smart Goal Tracking',
      description: 'Set custom nutrition goals and track your progress with beautiful visualizations. Stay motivated with achievement milestones.',
      badge: 'Progress'
    },
    {
      icon: '📱',
      title: 'Seamless Experience',
      description: 'Intuitive interface designed for daily use. Sync across devices and access your data anywhere, anytime.',
      badge: 'UX'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your data is encrypted and secure. We never share your personal information or dietary data with third parties.',
      badge: 'Security'
    }
  ]

  return (
    <section className="features section" id="features">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge animate-fade-in-up">
            <span className="badge-dot"></span>
            <span>Features</span>
          </div>
          <h2 className="section-title animate-fade-in-up animate-delay-100">
            Everything You Need to
            <span className="title-highlight"> Succeed</span>
          </h2>
          <p className="section-description animate-fade-in-up animate-delay-200">
            CalcEat combines cutting-edge AI technology with an intuitive interface to make
            nutrition tracking effortless and effective.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Badge */}
              <div className="feature-badge">{feature.badge}</div>

              {/* Icon */}
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>

              {/* Content */}
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with iPhone mockups */}
        <div className="features-showcase animate-fade-in-up animate-delay-900">
          <div className="showcase-content">
            <h3 className="showcase-title">Experience the Difference</h3>
            <p className="showcase-description">
              Join thousands of users who have transformed their nutrition journey with CalcEat.
              Start tracking smarter today.
            </p>
            <div className="showcase-stats">
              <div className="showcase-stat">
                <div className="stat-value">500K+</div>
                <div className="stat-label">Meals Tracked</div>
              </div>
              <div className="showcase-stat">
                <div className="stat-value">10K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="showcase-stat">
                <div className="stat-value">4.9★</div>
                <div className="stat-label">App Rating</div>
              </div>
            </div>
          </div>

          {/* Phone mockups with placeholders */}
          <div className="showcase-visual">
            <div className="showcase-phone phone-1">
              <div className="showcase-phone-screen">
                <div className="showcase-placeholder">
                  <div className="placeholder-icon">📱</div>
                  <p className="placeholder-text">App Screenshot</p>
                </div>
              </div>
            </div>
            <div className="showcase-phone phone-2">
              <div className="showcase-phone-screen">
                <div className="showcase-placeholder">
                  <div className="placeholder-icon">📱</div>
                  <p className="placeholder-text">App Screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
