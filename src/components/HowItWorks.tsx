import React from 'react'
import '../styles/HowItWorks.css'
import snapAPhotoImage from '../assets/images/snap-a-photo.png'
import aiAnalysisImage from '../assets/images/ai-analysis.png'
import getInsightsImage from '../assets/images/get-insights.png'
import trackProgressImage from '../assets/images/track-progress.png'

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
      ariaLabel: 'Step 1: Take a photo of your meal',
      color: 'from-blue-500 to-purple-600'
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our advanced AI instantly recognizes ingredients, calculates portions, and breaks down the nutritional content.',
      ariaLabel: 'Step 2: AI analyzes your food',
      color: 'from-purple-500 to-pink-600'
    },
    {
      number: '03',
      title: 'Get Insights',
      description: 'Receive detailed nutritional information including calories, macros, vitamins, and personalized recommendations.',
      ariaLabel: 'Step 3: View nutritional insights',
      color: 'from-pink-500 to-red-600'
    },
    {
      number: '04',
      title: 'Track Progress',
      description: 'Monitor your nutrition journey with beautiful charts and achieve your health goals with smart tracking.',
      ariaLabel: 'Step 4: Track your progress',
      color: 'from-orange-500 to-yellow-500'
    }
  ]

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
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
              aria-label={step.ariaLabel}
            >
              {/* Card with iPhone screenshot */}
              <div className="step-visual">
                {index === 0 ? (
                  // First step: Snap a Photo
                  <>
                    <img
                      src={snapAPhotoImage}
                      alt="Snap a photo of your meal"
                      className="step-phone-image"
                    />
                    {/* Step number badge */}
                    <div className={`step-number gradient-${index + 1}`}>
                      {step.number}
                    </div>
                  </>
                ) : index === 1 ? (
                  // Second step: AI Analysis
                  <>
                    <img
                      src={aiAnalysisImage}
                      alt="AI analyzing your meal"
                      className="step-phone-image"
                    />
                    {/* Step number badge */}
                    <div className={`step-number gradient-${index + 1}`}>
                      {step.number}
                    </div>
                  </>
                ) : index === 2 ? (
                  // Third step: Get Insights
                  <>
                    <img
                      src={getInsightsImage}
                      alt="Get detailed nutritional insights"
                      className="step-phone-image"
                    />
                    {/* Step number badge */}
                    <div className={`step-number gradient-${index + 1}`}>
                      {step.number}
                    </div>
                  </>
                ) : (
                  // Fourth step: Track Progress
                  <>
                    <img
                      src={trackProgressImage}
                      alt="Track your nutrition progress"
                      className="step-phone-image"
                    />
                    {/* Step number badge */}
                    <div className={`step-number gradient-${index + 1}`}>
                      {step.number}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              {/* Connecting line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true">
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

      </div>
    </section>
  )
}

export default HowItWorks
