import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AccessibilityStatement.css'

/**
 * Accessibility Statement component
 * 
 * According to Israeli Accessibility Law (תקנות הנגישות), every public-facing
 * website must publish an accessibility statement that describes the measures
 * taken to ensure accessibility, ways to contact the accessibility coordinator,
 * and channels for reporting accessibility issues.  
 * 
 * This page is provided in both Hebrew and English to guarantee comprehension
 * by all visitors.  
 */
const AccessibilityStatement: React.FC = () => {
  return (
    <div className="accessibility-page">
      <main id="main" tabIndex={-1}>
        <div className="container">
        {/* Hebrew Section */}
        <section className="accessibility-section rtl">
          <h1 className="accessibility-title">הצהרת נגישות</h1>
          <p>
            אנו ב-<strong>Calceat</strong> מחויבים להנגיש את האתר והשירותים שלנו לכלל
            המשתמשים, לרבות אנשים עם מוגבלויות. האתר תוכנן ופותח בהתאם להנחיות WCAG
            2.1 ברמה AA, כפי שנדרש על-ידי תקן ישראלי 5568, תקנות הנגישות האירופית
            (European Accessibility Act), וסעיף 508 של חוק השיקום האמריקאי (Section 508 of the Rehabilitation Act).
          </p>
          <h2>התאמות שבוצעו</h2>
          <ul>
            <li>תמיכה מלאה בניווט באמצעות מקלדת.</li>
            <li>תמיכה בטכנולוגיות מסייעות (קורא מסך, הגדלת תצוגה ועוד).</li>
            <li>תגי <code>alt</code> לכל התמונות ומלל חלופי לאייקונים דקורטיביים.</li>
            <li>יחס ניגודיות צבעים העומד בדרישות התקן (WCAG AA 4.5:1).</li>
            <li>מבנה כותרות היררכי ומובן (H1-H6).</li>
            <li>כפתור "דלג לתוכן" בראש העמוד.</li>
            <li>תוויות ARIA מתאימות לכל הרכיבים האינטראקטיביים.</li>
            <li>תמיכה במצב ניגודיות גבוהה ובהפחתת תנועה.</li>
            <li>בדיקות נגישות אוטומטיות באמצעות axe-core ו-ESLint.</li>
          </ul>
          <h2>תאימות לתקנים בינלאומיים</h2>
          <p>
            האתר שלנו עומד בתקנים הבאים:
          </p>
          <ul>
            <li><strong>תקן ישראלי 5568</strong> - דרישות נגישות לאתרי אינטרנט</li>
            <li><strong>European Accessibility Act (EAA)</strong> - תקנות הנגישות האירופית (יוני 2025)</li>
            <li><strong>ADA Title III</strong> - חוק האמריקאים עם מוגבלויות</li>
            <li><strong>Section 508</strong> - תקן נגישות פדרלי אמריקאי</li>
            <li><strong>WCAG 2.1 Level AA</strong> - התקן הבינלאומי לנגישות תוכן אינטרנט</li>
          </ul>
          <h2>עדכון אחרון</h2>
          <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך: אוקטובר 2025</p>
          <h2>פניה לרכז/ת הנגישות</h2>
          <p>
            במידה ונתקלתם בקושי בשימוש באתר, או אם יש לכם שאלות ובקשות בנושא
            נגישות, נשמח לסייע. ניתן לפנות אלינו באחת מהדרכים הבאות:
          </p>
          <ul>
            <li>
              דוא"ל: <a href="mailto:alphabornapps@gmail.com">alphabornapps@gmail.com</a>
            </li>
          </ul>
          <p>
            אנו משתדלים לענות לכל פניה תוך 2 ימי עסקים. במידה ולא קיבלתם מענה,
            אנא צרו קשר בשנית.
          </p>
        </section>

        {/* English Section */}
        <section className="accessibility-section ltr">
          <h1 className="accessibility-title">Accessibility Statement</h1>
          <p>
            <strong>Calceat</strong> is committed to making our website and services
            accessible to everyone, including people with disabilities. This site
            has been designed and developed in accordance with the Web Content
            Accessibility Guidelines (WCAG) 2.1, level AA, as mandated by Israeli
            Standard 5568, the European Accessibility Act (EAA), and Section 508 of the
            U.S. Rehabilitation Act.
          </p>
          <h2>Accessibility Measures</h2>
          <ul>
            <li>Full keyboard navigation support.</li>
            <li>Compatibility with assistive technologies (screen readers, zoom, etc.).</li>
            <li>Alt attributes for all images and descriptive labels for icons.</li>
            <li>Color contrast ratios that comply with WCAG AA (4.5:1 minimum).</li>
            <li>Logical heading structure (H1-H6).</li>
            <li>"Skip to content" link at the top of every page.</li>
            <li>Proper ARIA labels for all interactive elements.</li>
            <li>Support for high contrast mode and reduced motion preferences.</li>
            <li>Automated accessibility testing with axe-core and ESLint.</li>
          </ul>
          <h2>Compliance with International Standards</h2>
          <p>
            Our website complies with the following accessibility standards:
          </p>
          <ul>
            <li><strong>Israeli Standard 5568</strong> - Web Accessibility Requirements</li>
            <li><strong>European Accessibility Act (EAA)</strong> - EU Regulation (June 2025 enforcement)</li>
            <li><strong>ADA Title III</strong> - Americans with Disabilities Act</li>
            <li><strong>Section 508</strong> - U.S. Federal Accessibility Standard</li>
            <li><strong>WCAG 2.1 Level AA</strong> - Web Content Accessibility Guidelines</li>
          </ul>
          <h2>Assistive Technology Support</h2>
          <p>
            This website has been tested with and supports the following assistive technologies:
          </p>
          <ul>
            <li>NVDA (NonVisual Desktop Access) screen reader on Windows</li>
            <li>JAWS (Job Access With Speech) screen reader</li>
            <li>VoiceOver screen reader on macOS and iOS</li>
            <li>TalkBack screen reader on Android</li>
            <li>Browser zoom up to 200%</li>
            <li>Keyboard-only navigation</li>
          </ul>
          <h2>Last Updated</h2>
          <p>This accessibility statement was last updated: October 2025</p>
          <h2>Contact the Accessibility Coordinator</h2>
          <p>
            If you encounter any difficulty while using the site, or if you have
            questions or requests regarding accessibility, we are here to help.
            Please contact us:
          </p>
          <ul>
            <li>
              Email: <a href="mailto:alphabornapps@gmail.com">alphabornapps@gmail.com</a>
            </li>
          </ul>
          <p>
            We aim to respond to all inquiries within 2 business days. If you do
            not receive a response, please contact us again.
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

export default AccessibilityStatement
