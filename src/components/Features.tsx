import React from 'react'
import '../styles/Features.css'

/**
 * Features component - Dynamic showcase with interactive elements
 *
 * Engaging design with split layout and visual demonstrations.
 */
const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = React.useState(0)

  // Main features with visual demonstrations
  const mainFeatures = [
    {
      id: 'ai-snap',
      title: 'Snap & Analyze',
      subtitle: 'AI-Powered Food Recognition',
      description: 'Point your camera at any meal and watch our AI instantly identify ingredients, calculate portions, and provide complete nutritional breakdown in seconds.',
      visual: {
        type: 'camera',
        content: {
          image: '📸',
          arrow: '→',
          result: {
            food: 'Grilled Salmon Salad',
            calories: '485',
            protein: '32g',
            carbs: '18g',
            fat: '28g'
          }
        }
      },
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'smart-insights',
      title: 'Smart Insights',
      subtitle: 'Personalized Nutrition Intelligence',
      description: 'Get tailored recommendations based on your goals, dietary preferences, and eating patterns. Our AI learns from your habits to provide increasingly accurate suggestions.',
      visual: {
        type: 'chart',
        content: {
          dailyGoal: '2,200 cal',
          consumed: '1,650 cal',
          remaining: '550 cal',
          suggestion: '🥑 Add healthy fats for optimal nutrition'
        }
      },
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'progress-tracking',
      title: 'Track Progress',
      subtitle: 'Visual Journey Mapping',
      description: 'Beautiful charts and insights that show your nutrition journey over time. Celebrate milestones and stay motivated with clear progress visualization.',
      visual: {
        type: 'progress',
        content: {
          streak: '12 days',
          improvement: '+15%',
          trend: 'trending up'
        }
      },
      color: 'from-orange-500 to-red-500'
    }
  ]

  const supportFeatures = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Instant food recognition' },
    { icon: '🎯', title: 'Goal Focused', desc: 'Custom targets & tracking' },
    { icon: '📱', title: 'Mobile First', desc: 'Designed for daily use' },
    { icon: '🔒', title: 'Privacy Safe', desc: 'Your data stays secure' },
    { icon: '💎', title: 'Premium AI', desc: 'Advanced analytics' },
    { icon: '🌟', title: 'User Loved', desc: '4.9★ App Store rating' }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mainFeatures.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="features section">
      <div className="container">
        {/* Main interactive showcase */}
        <div className="features-showcase">
          <div className="showcase-content">
            <div className="showcase-text">
              <div className="showcase-badge animate-fade-in-up">
                <span className="badge-dot"></span>
                <span>AI-Powered Technology</span>
              </div>
              <h2 className="showcase-title font-display animate-fade-in-up animate-delay-100">
                {mainFeatures[activeFeature].title}
              </h2>
              <h3 className="showcase-subtitle animate-fade-in-up animate-delay-200">
                {mainFeatures[activeFeature].subtitle}
              </h3>
              <p className="showcase-description animate-fade-in-up animate-delay-300">
                {mainFeatures[activeFeature].description}
              </p>

              {/* Feature navigation dots */}
              <div className="showcase-nav animate-fade-in-up animate-delay-400">
                {mainFeatures.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${index === activeFeature ? 'active' : ''}`}
                    onClick={() => setActiveFeature(index)}
                    aria-label={`View feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="showcase-visual animate-fade-in-up animate-delay-500">
              <div className={`visual-container ${mainFeatures[activeFeature].id}`}>
                {mainFeatures[activeFeature].visual.type === 'camera' && (
                  <div className="camera-demo">
                    <div className="demo-phone">
                      <div className="phone-screen">
                        <div className="camera-view">
                          <div className="scan-frame">
                            <div className="scan-corners"></div>
                            <div className="food-preview">🥗</div>
                          </div>
                        </div>
                        <div className="analysis-result">
                          <div className="result-header">
                            <span className="result-food">{mainFeatures[activeFeature].visual.content.result.food}</span>
                          </div>
                          <div className="nutrition-grid">
                            <div className="nutrition-item">
                              <span className="nutrition-value">{mainFeatures[activeFeature].visual.content.result.calories}</span>
                              <span className="nutrition-label">calories</span>
                            </div>
                            <div className="nutrition-item">
                              <span className="nutrition-value">{mainFeatures[activeFeature].visual.content.result.protein}</span>
                              <span className="nutrition-label">protein</span>
                            </div>
                            <div className="nutrition-item">
                              <span className="nutrition-value">{mainFeatures[activeFeature].visual.content.result.carbs}</span>
                              <span className="nutrition-label">carbs</span>
                            </div>
                            <div className="nutrition-item">
                              <span className="nutrition-value">{mainFeatures[activeFeature].visual.content.result.fat}</span>
                              <span className="nutrition-label">fat</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {mainFeatures[activeFeature].visual.type === 'chart' && (
                  <div className="chart-demo">
                    <div className="chart-container">
                      <div className="daily-overview">
                        <div className="goal-ring">
                          <div className="ring-progress" style={{ '--progress': '75%' }}></div>
                          <div className="ring-content">
                            <span className="goal-consumed">1,650</span>
                            <span className="goal-total">/ 2,200 cal</span>
                          </div>
                        </div>
                        <div className="suggestion-card">
                          <span className="suggestion-icon">💡</span>
                          <p className="suggestion-text">{mainFeatures[activeFeature].visual.content.suggestion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {mainFeatures[activeFeature].visual.type === 'progress' && (
                  <div className="progress-demo">
                    <div className="progress-stats">
                      <div className="stat-card streak">
                        <div className="stat-icon">🔥</div>
                        <div className="stat-content">
                          <span className="stat-number">{mainFeatures[activeFeature].visual.content.streak}</span>
                          <span className="stat-label">Current Streak</span>
                        </div>
                      </div>
                      <div className="stat-card improvement">
                        <div className="stat-icon">📈</div>
                        <div className="stat-content">
                          <span className="stat-number">{mainFeatures[activeFeature].visual.content.improvement}</span>
                          <span className="stat-label">Improvement</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-chart">
                      <div className="chart-bars">
                        {[65, 78, 82, 75, 88, 92, 85].map((height, i) => (
                          <div key={i} className="chart-bar" style={{ '--height': `${height}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Support features grid */}
        <div className="support-features">
          <div className="support-grid">
            {supportFeatures.map((feature, index) => (
              <div
                key={index}
                className="support-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="support-icon">{feature.icon}</div>
                <div className="support-content">
                  <h4 className="support-title">{feature.title}</h4>
                  <p className="support-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
