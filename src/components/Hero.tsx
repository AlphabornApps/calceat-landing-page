import React from 'react'
import '../styles/Hero.css'
import heroImage from '../assets/images/hero.png'

/**
 * Hero component - Premium modern hero section
 *
 * Split-screen design with compelling headline and iPhone mockup
 */
const Hero: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          {/* Left side - Content */}
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title animate-fade-in-up animate-delay-100">
              Track Your Nutrition
              <span className="hero-highlight"> Effortlessly</span>
            </h1>

            <p className="hero-description animate-fade-in-up animate-delay-200">
              Snap a photo of your meal or simply type and let our powerful AI do the rest. Get instant nutritional insights, track your goals, and achieve a healthier lifestyle, all in seconds.
            </p>

            <div className="hero-actions animate-fade-in-up animate-delay-300">
              <a href="https://apps.apple.com/app/calceat/id6749812271" target="_blank" rel="noopener noreferrer" className="download-btn download-btn-ios" aria-label="Download CalcEat on the App Store (opens in new tab)">
                <div className="download-btn-content">
                  <svg className="download-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="download-text">
                    <span className="download-label">Download on the</span>
                    <span className="download-store">App Store</span>
                  </div>
                </div>
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.alphaborn.calceat" target="_blank" rel="noopener noreferrer" className="download-btn download-btn-android" aria-label="Download CalcEat on Google Play (opens in new tab)">
                <div className="download-btn-content">
                  <svg className="download-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="download-text">
                    <span className="download-label">Get it on</span>
                    <span className="download-store">Google Play</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Social proof */}
            <div className="hero-social-proof animate-fade-in-up animate-delay-400">
              <div className="social-proof-container">
                <div className="proof-rating">
                  <div className="proof-stars" role="img" aria-label="5 out of 5 stars">
                    <svg className="star-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="star-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="rating-score">4.9/5</span>
                </div>
                <div className="proof-divider" aria-hidden="true"></div>
                <div className="proof-stats">
                  <span className="stats-number">10,000+</span>
                  <span className="stats-label">health-conscious users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - App screenshot */}
          <div className="hero-visual animate-fade-in-up animate-delay-300">
            <img
              src={heroImage}
              alt="CalcEat app showing meal tracking and nutrition insights"
              className="hero-screenshot"
            />
          </div>
        </div>
      </div>

      {/* Gradient background decoration */}
      <div className="hero-bg-decoration"></div>
    </section>
  )
}

export default Hero
