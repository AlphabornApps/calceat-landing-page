import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AccessibilityStatement.css'

/**
 * Cookie Policy page – explains what cookies we use and why.
 * For simplicity we reuse the basic styles of accessibility statement.
 */
const CookiePolicy: React.FC = () => {
  return (
    <div className="accessibility-page">
      <main id="main" tabIndex={-1}>
        <div className="container">
        <section className="accessibility-section ltr">
          <h1 className="accessibility-title">Cookie Policy</h1>
          <p>
            Last updated: August 2025
          </p>
          <p>
            Calceat uses cookies and similar technologies to ensure the proper
            functioning of our website and to provide the best possible user
            experience. This policy explains what cookies are, what types we
            use, and how you can control them.
          </p>

          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you
            visit a website. They help the site remember your actions and
            preferences (such as login, language, and other display settings)
            over a period of time.
          </p>

          <h2>2. Types of cookies we use</h2>
          <ul>
            <li>
              <strong>Essential cookies</strong> – necessary for basic site
              functionality such as page navigation and secure areas.
            </li>
            <li>
              <strong>Analytics cookies</strong> – help us understand how
              visitors interact with the site (e.g., Google Analytics). These
              load only after you click “Accept All”.
            </li>
            <li>
              <strong>Marketing cookies</strong> – used to track visitors across
              websites and display relevant ads. We currently do <em>not</em>
              use marketing cookies.
            </li>
          </ul>

          <h2>3. How to control cookies</h2>
          <p>
            When you first visit Calceat, you will see a cookie banner allowing
            you to decide whether to accept essential cookies only or all
            cookies. You can change your preference at any time by clicking the
            “Cookie Settings” link in the footer, which will re-open the banner
            and let you update your choice.
          </p>

          <h2>4. Contact</h2>
          <p>
            If you have any questions about this policy, please contact us at{' '}
            <a href="mailto:alphabornapps@gmail.com">alphabornapps@gmail.com</a>.
          </p>
        </section>

        <div className="back-home" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/" className="btn btn-secondary">
            ← Back to Home
          </Link>
        </div>
        </div>
      </main>
    </div>
  )
}

export default CookiePolicy
