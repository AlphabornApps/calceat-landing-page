import '../styles/PrivacyPolicy.css'

/**
 * Privacy Policy component that displays the legal privacy policy for CalcEat app
 *
 * This component contains the complete privacy policy including:
 * - Information collection and use details
 * - Third party access policies
 * - User rights and data retention policies
 * - Contact information for privacy concerns
 */
function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <main id="main" tabIndex={-1}>
        <div className="privacy-content">
        <strong>Privacy Policy</strong>
        <p>
          This privacy policy applies to the CalcEat app (hereby referred to as "Application") for mobile devices that was created by Alphaborn (hereby referred to as "Service Provider") as a Commercial service. This service is intended for use "AS IS".
        </p>

        <br />
        <strong>Information Collection and Use</strong>
        <p>
          The Application collects information when you download and use it. This information is divided into data you provide, health data you grant access to, and data collected automatically.
        </p>

        <br />
        <strong>Information You Provide:</strong>
        <p>
          For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to:
        </p>
        <ul>
          <li><b>Account Information:</b> First Name, Last Name, Email Address, User ID, Password.</li>
          <li><b>Profile & Goal Data:</b> Height, weight, activity level, and dietary goals.</li>
          <li><b>Meal & Usage Data:</b> Meal data (including timestamps and food items), food images (for AI analysis), favorite meal items, user preferences, and app settings.</li>
          <li><b>Authentication & Session Data:</b> Authentication tokens and login history.</li>
        </ul>

        <br />
        <strong>Health Data (With Your Explicit Permission):</strong>
        <p>
          The Application integrates with Apple HealthKit and Google Health Connect. With your explicit consent, we may:
        </p>
        <ul>
          <li><b>Read Data:</b> Access data such as active/basal calories, steps, and workout information to provide a comprehensive health overview.</li>
          <li><b>Write Data:</b> Write data you log in the Application, such as nutrition data, weight, and height, back to your health profile.</li>
        </ul>
        <p>
          You maintain full control over these permissions and can grant or revoke them at any time through your device's operating system settings (in the Apple Health or Google Health Connect apps).
        </p>

        <br />
        <strong>Automatically Collected Information:</strong>
        <p>
          The Application may collect certain information automatically, including, but not limited to:
        </p>
        <ul>
          <li><b>Device & Connection Information:</b> Your device's Internet Protocol address (e.g., IP address), device identifiers (such as IDFA or Android ID), device hardware information, device token (for push notifications), device type, and the operating system you use.</li>
          <li><b>Usage & Analytics Data:</b> The pages of the Application that you visit, the time and date of your visit, the time spent on those pages, app usage events, user behavior, and conversion tracking data.</li>
          <li><b>Performance Data:</b> Crash reports and error logs to help us identify and fix bugs.</li>
          <li><b>Application Information:</b> App version, platform, account status, account creation date, and last activity.</li>
          <li><b>Payment & Subscription Data:</b> Subscription status, purchase history, and entitlements (managed primarily by our payment processor).</li>
        </ul>

        <p>
          The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices, and marketing promotions.
        </p>

        <br />
        <p>
          The Application does not gather precise information about the location of your mobile device.
        </p>

        <br />
        <strong>Third-Party Services and Data Sharing</strong>
        <p>
          The Application utilizes third-party services to provide its functionality. These services may access your data as described below and have their own Privacy Policies regarding handling data.
        </p>

        <p>
          The Service Provider may share your information with third parties in the ways that are described in this privacy statement. We may disclose User Provided and Automatically Collected Information:
        </p>
        <ul>
          <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
          <li>when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
          <li>with our trusted services providers (such as our backend API) who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
        </ul>

        <br />
        <p>
          Below is a list of the third-party service providers used by the Application:
        </p>

        <p><b>Analytics & Tracking Services:</b></p>
        <ul>
          <li>
            <b>Mixpanel:</b> Used for user behavior analytics and event tracking. (
            <a href="https://mixpanel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>)
          </li>
          <li>
            <b>Facebook/Meta App Events:</b> Used for install tracking, ad attribution, and conversion tracking. (
            <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>)
          </li>
        </ul>

        <p><b>Payment Services:</b></p>
        <ul>
          <li>
            <b>RevenueCat:</b> Used for managing subscriptions, in-app purchases, and paywalls. (
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>)
          </li>
        </ul>

        <p><b>Error Monitoring:</b></p>
        <ul>
          <li>
            <b>Bugsnag:</b> Used for crash reporting and error monitoring to improve app stability. (
            <a href="https://smartbear.com/privacy/?_gl=1*cvyrn7*_gcl_au*MTE4OTMyNTk3Mi4xNzU5OTMzMDQ4" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>)
          </li>
        </ul>

        <p><b>Push Notifications:</b></p>
        <ul>
          <li>
            <b>Firebase Cloud Messaging (FCM):</b> Used to send push notifications to Android devices. (
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>)
          </li>
          <li>
            <b>Apple Push Notification service (APNs):</b> Used to send push notifications to iOS devices. (
            <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>)
          </li>
        </ul>

        <p><b>Health Data Integration:</b></p>
        <ul>
          <li>
            <b>Apple HealthKit:</b> Used to read/write health data on iOS with your permission. (
            <a href="https://developer.apple.com/documentation/healthkit/protecting-user-privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>)
          </li>
          <li>
            <b>Google Health Connect:</b> Used to read/write health data on Android with your permission. (
            <a href="https://health.google/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>)
          </li>
        </ul>

        <p><b>AI & Backend Services:</b></p>
        <ul>
          <li><b>CalcEat Backend API & AI:</b> Our core server (built on Node.js/Express) processes your account data, meal entries, and food images for nutritional analysis.</li>
        </ul>

        <br />
        <strong>Opt-Out Rights</strong>
        <p>
          You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
        </p>

        <p>You also have the following rights to control your data:</p>
        <ul>
          <li><b>Account Deletion:</b> You can request the deletion of your account and all associated User Provided Data at any time. The primary way to do this is by using the "Delete Account" feature, which can be found in your account settings within the Application.</li>
          <li><b>Health Data:</b> You can manage or revoke data-sharing permissions for Apple HealthKit and Google Health Connect at any time through your device's settings.</li>
          <li><b>Notifications:</b> You can manage push notification preferences within the Application's settings or through your device's notification settings.</li>
          <li><b>Ad Tracking:</b> On iOS devices, you can manage permissions for ad tracking via the App Tracking Transparency (ATT) prompt.</li>
        </ul>

        <br />
        <strong>Data Retention and Deletion Policy</strong>
        <p>
          The Service Provider will retain User Provided data for as long as you use the Application and maintain an account, and for a reasonable time thereafter.
        </p>
        <p>
          If you choose to delete your account, you can initiate this process directly from within the Application's settings. Upon receiving your request, we will proceed to delete all User Provided Data associated with your account from our servers. This process will be completed in a reasonable time, and we will notify you once the deletion is complete.
        </p>
        <p>
          If you are unable to access the Application and would like to request account deletion, you may also contact us at alphabornapps@gmail.com, and we will respond in a reasonable time.
        </p>
        <p>
          Please note that we may be required to retain certain information as required by law (e.g., for security, fraud prevention, or regulatory compliance) or for legitimate business purposes, such as aggregated, anonymized data for analytics.
        </p>

        <br />
        <strong>Children</strong>
        <p>
          The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
        </p>

        <p>
          The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (alphabornapps@gmail.com) so that they will be able to take the necessary actions.
        </p>

        <br />
        <strong>Security</strong>
        <p>
          The Service Provider is concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. These measures include:
        </p>
        <ul>
          <li>Using HTTPS/TLS encryption for all network communications.</li>
          <li>Employing secure authentication mechanisms, such as JWT (JSON Web Tokens) with automatic refresh.</li>
          <li>Storing sensitive data, such as authentication tokens, in encrypted storage on your device (utilizing native Keychain on iOS and Keystore on Android via Flutter Secure Storage).</li>
        </ul>

        <br />
        <strong>Changes</strong>
        <p>
          This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
        </p>

        <br />
        <p>This privacy policy is effective as of 2025-10-21</p>

        <br />
        <strong>Your Consent</strong>
        <p>
          By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us.
        </p>

        <br />
        <strong>Contact Us</strong>
        <p>
          If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact the Service Provider via email at alphabornapps@gmail.com.
        </p>

        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy