import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import './styles/App.css'

/**
 * Main App component that serves as the root of the landing page
 * 
 * This component orchestrates the entire landing page layout,
 * including the hero section, features, and footer.
 * It keeps the structure simple and modular for easy maintenance.
 */
function App() {
  return (
    <div className="App">
      {/* Hero section - main value proposition and call-to-action */}
      <Hero />
      
      {/* Features section - showcase key benefits and features */}
      <Features />
      
      {/* Footer - contact info and links */}
      <Footer />
    </div>
  )
}

export default App
