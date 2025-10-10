import React from 'react'
import '../styles/TrustBar.css'

const TrustBar: React.FC = () => {
  return (
    <section className="trustbar" aria-label="Social proof">
      <div className="container trustbar-inner">
        <div className="trust-item">
          <span className="trust-rating">⭐⭐⭐⭐⭐</span>
          <span className="trust-text">Loved by 100k+ users</span>
        </div>
        <div className="trust-divider" aria-hidden="true" />
        <div className="trust-item">
          <span className="trust-badge">4.8/5</span>
          <span className="trust-text">Average Rating</span>
        </div>
        <div className="trust-divider" aria-hidden="true" />
        <div className="trust-item">
          <span className="trust-badge">Privacy First</span>
          <span className="trust-text">Your data stays secure</span>
        </div>
      </div>
    </section>
  )
}

export default TrustBar






