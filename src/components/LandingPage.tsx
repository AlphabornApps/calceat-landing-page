import Navbar from './Navbar'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Features from './Features'
import CTA from './CTA'
import Footer from './Footer'
import '../styles/SkipLink.css'

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
      {/* Skip navigation link for screen reader and keyboard users */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        {/* Hero section - main value proposition and call-to-action */}
        <Hero />

        {/* How It Works - step-by-step process */}
        <HowItWorks />

        {/* Features */}
        <Features />

        {/* CTA Banner */}
        <CTA />
      </main>
      
      {/* Footer - contact info and links */}
      <Footer />
    </div>
  )
}

export default LandingPage
