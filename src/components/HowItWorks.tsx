import React from 'react'
import '../styles/HowItWorks.css'

/**
 * How It Works component - Step-by-step process showcase
 *
 * Visual guide showing users how to use the app
 */
const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Snap a Photo',
      description: 'Simply take a picture of your meal with your phone camera. Our AI works with any food, anywhere.',
      icon: '📸',
      color: 'from-blue-500 to-purple-600'
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our advanced AI instantly recognizes ingredients, calculates portions, and breaks down the nutritional content.',
      icon: '🤖',
      color: 'from-purple-500 to-pink-600'
    },
    {
      number: '03',
      title: 'Get Insights',
      description: 'Receive detailed nutritional information including calories, macros, vitamins, and personalized recommendations.',
      icon: '📊',
      color: 'from-pink-500 to-red-600'
    },
    {
      number: '04',
      title: 'Track Progress',
      description: 'Monitor your nutrition journey with beautiful charts and achieve your health goals with smart tracking.',
      icon: '🎯',
      color: 'from-orange-500 to-yellow-500'
    }
  ]

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge animate-fade-in-up">
            <span className="badge-dot"></span>
            <span>Simple Process</span>
          </div>
          <h2 className="section-title animate-fade-in-up animate-delay-100">
            How It Works
          </h2>
          <p className="section-description animate-fade-in-up animate-delay-200">
            Getting started with CalcEat is incredibly simple. Just four steps to better nutrition tracking.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Card with iPhone placeholder */}
              <div className="step-visual">
                <div className="step-phone">
                  <div className="step-phone-screen">
                    {/* Placeholder for app screenshot showing this step */}
                    <div className="step-placeholder">
                      <div className="step-icon">{step.icon}</div>
                      <p className="step-placeholder-text">Step {step.number} Screenshot</p>
                    </div>
                  </div>
                </div>
                {/* Step number badge */}
                <div className={`step-number gradient-${index + 1}`}>
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              {/* Connecting line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg viewBox="0 0 24 24" fill="none" className="connector-arrow">
                    <path
                      d="M13 5l7 7-7 7M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="how-it-works-cta animate-fade-in-up animate-delay-700">
          <p className="cta-text">Ready to transform your nutrition tracking?</p>
          <button className="btn btn-primary btn-large">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Download Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
