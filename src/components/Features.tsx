import React from 'react'
import '../styles/Features.css'

/**
 * Features component - Showcases key benefits and features
 * 
 * This component highlights the main features and benefits of Calceat
 * in an easy-to-scan format. Each feature is presented with an icon,
 * title, and description to help users understand the value proposition.
 */
const Features: React.FC = () => {
  // Feature data - easily maintainable and extensible
  const features = [
    {
      id: 'easy-tracking',
      title: 'Easy Nutrition Tracking',
      description: 'Simply input your meals and get instant nutrition breakdowns. No complex logging required.',
      icon: '📊'
    },
    {
      id: 'calorie-calculator',
      title: 'Smart Calorie Calculator',
      description: 'Get personalized calorie recommendations based on your goals, activity level, and preferences.',
      icon: '🎯'
    },
    {
      id: 'food-database',
      title: 'Comprehensive Food Database',
      description: 'Access thousands of food items with accurate nutritional information from verified sources.',
      icon: '🥗'
    },
    {
      id: 'progress-insights',
      title: 'Progress Insights',
      description: 'Visualize your nutrition trends and progress with clear charts and actionable insights.',
      icon: '📈'
    },
    {
      id: 'goal-setting',
      title: 'Goal Setting & Tracking',
      description: 'Set personalized nutrition goals and track your progress towards a healthier lifestyle.',
      icon: '🎯'
    },
    {
      id: 'mobile-friendly',
      title: 'Mobile Optimized',
      description: 'Track your nutrition on the go with our responsive design that works on any device.',
      icon: '📱'
    }
  ]

  return (
    <section className="features section">
      <div className="container">
        {/* Section header */}
        <div className="features-header">
          <h2 className="section-title">
            Why Choose Calceat?
          </h2>
          <p className="section-description">
            Discover the features that make nutrition tracking simple, accurate, and enjoyable.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="features-grid" role="list" aria-label="Key features of Calceat nutrition app">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card" role="listitem">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
