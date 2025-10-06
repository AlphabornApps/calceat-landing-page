import React from 'react'
import '../styles/Integrations.css'

const integrations = [
  { name: 'Apple Health', icon: '', desc: 'Sync your health data seamlessly.' },
  { name: 'Google Fit', icon: '🏃', desc: 'Track activity and calories burned.' },
  { name: 'Fitbit', icon: '⌚', desc: 'Connect wearables for deeper insights.' }
]

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="integrations section" aria-labelledby="integrations-title">
      <div className="container">
        <h2 id="integrations-title" className="integrations-title font-display">Integrate your fitness</h2>
        <p className="integrations-subtitle">Connect with your favorite health platforms</p>
        <div className="integrations-grid">
          {integrations.map((i) => (
            <div key={i.name} className="integration-card">
              <div className="integration-icon" aria-hidden="true">{i.icon}</div>
              <div className="integration-content">
                <h3 className="integration-name">{i.name}</h3>
                <p className="integration-desc">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Integrations




