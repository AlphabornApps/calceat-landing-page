import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/DeleteAccount.css'

/**
 * Delete Account component - Provides guidance for users who want to delete their account
 * 
 * This component explains the account deletion process and guides users through
 * the steps needed to permanently delete their account and all associated data.
 * The deletion is GDPR compliant and irreversible.
 */
const DeleteAccount: React.FC = () => {
  return (
    <div className="delete-account">
      <div className="container">
        {/* Header */}
        <div className="header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1 className="page-title">Delete Your Account</h1>
        </div>

        {/* Warning Section */}
        <div className="warning-section">
          <div className="warning-box">
            <div className="warning-icon">⚠️</div>
            <div className="warning-content">
              <h2>This action cannot be undone</h2>
              <p>
                When you delete your account, all your personal data will be permanently removed 
                from our servers. This includes your profile, meal history, nutrition data, 
                and any other information associated with your account.
              </p>
            </div>
          </div>
        </div>

        {/* What Gets Deleted Section */}
        <div className="info-section">
          <h2>What will be deleted:</h2>
          <ul className="deletion-list">
            <li>Your personal profile and account information</li>
            <li>All meal records and nutrition tracking data</li>
            <li>Your weight tracking history</li>
            <li>Saved favorite foods and meals</li>
            <li>Notification preferences and settings</li>
            <li>Any premium subscription data</li>
            <li>All authentication credentials and tokens</li>
          </ul>
        </div>

        {/* How to Delete Section */}
        <div className="instructions-section">
          <h2>How to delete your account:</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Open the CalcEat app</h3>
                <p>Launch the CalcEat mobile app on your device and make sure you're logged in to your account.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Go to Settings</h3>
                <p>Navigate to your profile or settings section in the app. This is usually found in the main menu or profile tab.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Find "Delete Account"</h3>
                <p>Scroll down to the bottom of the settings page. You'll see a red "Delete Account" section with a warning icon.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Confirm deletion</h3>
                <p>
                  Tap on "Delete Account" and carefully read the confirmation dialog. 
                  You'll need to confirm that you understand this action is permanent and cannot be undone.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Account deleted</h3>
                <p>
                  Once confirmed, your account and all data will be immediately deleted from our servers. 
                  You'll be logged out and won't be able to recover your account.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="alternatives-section">
          <h2>Before you delete your account</h2>
          <p>Consider these alternatives:</p>
          <ul className="alternatives-list">
            <li><strong>Log out temporarily:</strong> If you just need a break, you can simply log out and return later.</li>
            <li><strong>Disable notifications:</strong> Turn off push notifications in the app settings if they're bothering you.</li>
            <li><strong>Contact support:</strong> If you're experiencing issues, our support team at <a href="mailto:alphabornapps@gmail.com">alphabornapps@gmail.com</a> can help.</li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div className="help-section">
          <h2>Need help?</h2>
          <p>
            If you're having trouble deleting your account or have questions about the process, 
            please contact us at <a href="mailto:alphabornapps@gmail.com">alphabornapps@gmail.com</a>.
          </p>
          <p>
            We're committed to helping you manage your data and privacy according to your preferences.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="footer-nav">
          <Link to="/">← Back to Home</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount
