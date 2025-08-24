import { useEffect } from 'react'
import Hero from './Hero'
import Features from './Features'
import Footer from './Footer'

/**
 * Landing Page component that contains the main marketing content
 * 
 * This component includes:
 * - Hero section with main value proposition
 * - Features section showcasing key benefits
 * - Footer with contact information
 * - Keep-alive requests to backend to prevent cold starts
 * 
 * Separated from App.tsx to enable routing between landing page and other pages
 */
function LandingPage() {
  // Keep-alive function to prevent backend cold starts
  useEffect(() => {
    const keepAlive = async () => {
      try {
        await fetch('https://calceat-backend-4xfd.onrender.com/api/v1/docs', {
          method: 'GET',
          mode: 'no-cors' // Avoid CORS issues since we don't need the response
        })
        console.log('Keep-alive request sent to backend')
      } catch (error) {
        // Silently handle errors - this is just a keep-alive ping
        console.log('Keep-alive request failed (expected with no-cors):', error)
      }
    }

    // Send initial request
    keepAlive()

    // Set up interval to send request every 30 seconds
    const interval = setInterval(keepAlive, 30000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="landing-page">
      <main id="main" tabIndex={-1}>
        {/* Hero section - main value proposition and call-to-action */}
        <Hero />
        
        {/* Features section - showcase key benefits and features */}
        <Features />
      </main>
      
      {/* Footer - contact info and links */}
      <Footer />
    </div>
  )
}

export default LandingPage
