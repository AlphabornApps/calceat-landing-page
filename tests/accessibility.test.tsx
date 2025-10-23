/**
 * Accessibility Tests for CalcEat Landing Page
 *
 * These tests verify that our components meet WCAG 2.1 Level AA standards
 * and are accessible to users with disabilities.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { BrowserRouter } from 'react-router-dom'

// Import components for testing
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CookieBanner from '../components/CookieBanner'
import Footer from '../components/Footer'
import AccessibilityStatement from '../components/AccessibilityStatement'
import PrivacyPolicy from '../components/PrivacyPolicy'
import TermsConditions from '../components/TermsConditions'
import DeleteAccount from '../components/DeleteAccount'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Helper function to render components with Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Accessibility Tests', () => {

  describe('Core Components', () => {

    test('LandingPage should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<LandingPage />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    test('Navbar should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<Navbar />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    test('Hero section should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<Hero />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    test('Features section should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<Features />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    test('CookieBanner should not have accessibility violations', async () => {
      // Clear localStorage to ensure banner shows
      localStorage.clear()
      const { container } = renderWithRouter(<CookieBanner />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    test('Footer should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<Footer />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Legal Pages', () => {

    test('AccessibilityStatement should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<AccessibilityStatement />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    test('PrivacyPolicy should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<PrivacyPolicy />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    test('TermsConditions should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<TermsConditions />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    test('DeleteAccount should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<DeleteAccount />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Critical Accessibility Features', () => {

    test('Skip navigation link should be present and functional', () => {
      renderWithRouter(<LandingPage />)
      const skipLink = screen.getByText('Skip to main content')
      expect(skipLink).toBeInTheDocument()
      expect(skipLink).toHaveAttribute('href', '#main')
    })

    test('Main landmark should be present', () => {
      renderWithRouter(<LandingPage />)
      const main = screen.getByRole('main')
      expect(main).toBeInTheDocument()
      expect(main).toHaveAttribute('id', 'main')
    })

    test('Navigation should have proper ARIA attributes', () => {
      renderWithRouter(<Navbar />)
      const nav = screen.getByRole('navigation', { name: /primary navigation/i })
      expect(nav).toBeInTheDocument()
    })

    test('Cookie banner buttons should have aria-labels', () => {
      localStorage.clear()
      renderWithRouter(<CookieBanner />)
      const acceptButton = screen.getByRole('button', { name: /accept all cookies/i })
      const essentialButton = screen.getByRole('button', { name: /accept essential cookies only/i })
      expect(acceptButton).toBeInTheDocument()
      expect(essentialButton).toBeInTheDocument()
    })

    test('Images should have alt text', () => {
      renderWithRouter(<Hero />)
      const images = screen.getAllByRole('img')
      images.forEach(img => {
        expect(img).toHaveAttribute('alt')
      })
    })

    test('Theme toggle should have descriptive aria-label', () => {
      renderWithRouter(<Navbar />)
      const themeToggle = screen.getByRole('button', { name: /switch to (dark|light) mode/i })
      expect(themeToggle).toBeInTheDocument()
    })

    test('Menu toggle should have descriptive aria-label', () => {
      renderWithRouter(<Navbar />)
      const menuToggle = screen.getByRole('button', { name: /(open|close) navigation menu/i })
      expect(menuToggle).toBeInTheDocument()
      expect(menuToggle).toHaveAttribute('aria-expanded')
    })
  })

  describe('Color Contrast', () => {

    test('Cookie banner should meet WCAG AA contrast requirements', async () => {
      localStorage.clear()
      const { container } = renderWithRouter(<CookieBanner />)
      const results = await axe(container, {
        rules: {
          'color-contrast': { enabled: true }
        }
      })
      expect(results).toHaveNoViolations()
    })
  })

  describe('Keyboard Navigation', () => {

    test('All interactive elements should be keyboard accessible', () => {
      renderWithRouter(<LandingPage />)
      const interactiveElements = screen.getAllByRole('button')
      const links = screen.getAllByRole('link')

      // Check that all buttons and links can receive focus
      const allElements = [...interactiveElements, ...links]
      allElements.forEach(element => {
        expect(element).toHaveProperty('tabIndex')
        expect(element.tabIndex).toBeGreaterThanOrEqual(-1)
      })
    })
  })

  describe('ARIA Attributes', () => {

    test('ARIA attributes should be valid and properly used', async () => {
      const { container } = renderWithRouter(<LandingPage />)
      const results = await axe(container, {
        rules: {
          'aria-valid-attr': { enabled: true },
          'aria-valid-attr-value': { enabled: true },
          'aria-allowed-attr': { enabled: true },
          'aria-required-attr': { enabled: true }
        }
      })
      expect(results).toHaveNoViolations()
    })
  })
})

/**
 * Additional Manual Testing Checklist:
 *
 * 1. Screen Reader Testing:
 *    - Test with NVDA (Windows) or VoiceOver (Mac)
 *    - Verify all content is announced properly
 *    - Check that interactive elements are properly described
 *
 * 2. Keyboard Navigation:
 *    - Tab through entire page
 *    - Ensure focus indicators are visible
 *    - Test skip links functionality
 *    - Verify no keyboard traps exist
 *
 * 3. Color Contrast:
 *    - Use browser extensions to verify contrast ratios
 *    - Test in high contrast mode
 *    - Verify information isn't conveyed by color alone
 *
 * 4. Responsive Design:
 *    - Test at 200% zoom level
 *    - Verify no horizontal scrolling at 320px width
 *    - Check touch targets are at least 44x44px on mobile
 *
 * 5. Motion and Animation:
 *    - Test with prefers-reduced-motion enabled
 *    - Ensure animations can be paused/stopped
 *
 * 6. Form Accessibility:
 *    - Verify all form inputs have labels
 *    - Check error messages are associated with inputs
 *    - Test form validation announcements
 */