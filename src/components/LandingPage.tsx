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
 * 
 * Separated from App.tsx to enable routing between landing page and other pages
 */
function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero section - main value proposition and call-to-action */}
      <Hero />
      
      {/* Features section - showcase key benefits and features */}
      <Features />
      
      {/* Footer - contact info and links */}
      <Footer />
    </div>
  )
}

export default LandingPage
