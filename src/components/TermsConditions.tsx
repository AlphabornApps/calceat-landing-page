import '../styles/TermsConditions.css'

/**
 * Terms & Conditions component that displays the legal terms of service for CalcEat app
 *
 * This component contains the complete terms and conditions including:
 * - User agreement and intellectual property rights
 * - Service availability and modifications
 * - User responsibilities and device security
 * - Third party services and liability limitations
 * - Contact information for terms-related questions
 */
function TermsConditions() {
  return (
    <div className="terms-conditions">
      <div className="terms-content">
        <strong>Terms &amp; Conditions</strong>

        <p>
          These terms and conditions apply to the CalcEat app (hereby referred to as "Application") for mobile devices that was created by Alphaborn (hereby referred to as "Service Provider") as a Commercial service.
        </p>

        <p>
          Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application.
        </p>

        <br />
        <strong>Health and Nutritional Disclaimer</strong>
        <p>
          The Application is intended for informational and educational purposes only. It is not intended as, and should not be substituted for, professional medical advice, diagnosis, or treatment.
        </p>

        <p>
          Always seek the advice of your physician, registered dietitian, or other qualified health provider with any questions you may have regarding a medical condition, dietary needs (such as allergies or intolerances), or before making any significant changes to your diet.
        </p>

        <p>
          The nutritional information provided by the Application, including through its AI analysis features, is provided as an estimate and is not guaranteed to be accurate, complete, or suitable for your specific dietary needs or medical conditions. You rely on this information entirely at your own risk. The Service Provider is not responsible for any personal injury, health complications, or other loss or damage that may result from your use of, or reliance on, any information provided by the Application.
        </p>

        <br />
        <strong>Intellectual Property</strong>
        <p>
          Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.
        </p>

        <br />
        <strong>User-Generated Content</strong>
        <p>
          You retain all ownership rights to the content you submit to the Application, including but not limited to food images, meal data, and personal profile information ("User Content").
        </p>

        <p>
          However, by submitting User Content to the Application, you grant the Service Provider a worldwide, non-exclusive, royalty-free, transferable, and sublicensable license to use, reproduce, modify, adapt, distribute, and display such User Content. This license is granted solely for the purposes of operating, providing, developing, and improving the Application and its services, which includes training our AI analysis models.
        </p>

        <p>
          You represent and warrant that you own or have the necessary rights and permissions to grant this license for any User Content you submit.
        </p>

        <br />
        <strong>Prohibited Conduct</strong>
        <p>
          You agree not to use the Application in any way that is illegal, harmful, or fraudulent. You further agree not to:
        </p>

        <ul>
          <li>Upload or transmit any content that is unlawful, defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable;</li>
          <li>Upload or transmit any content that infringes upon the intellectual property rights, privacy rights, or other rights of any third party;</li>
          <li>Attempt to reverse-engineer, decompile, scrape, or extract the source code or data of the Application;</li>
          <li>Introduce viruses, malware, or any other malicious code into the Application or its systems;</li>
          <li>Use the Application to send unsolicited commercial messages or "spam."</li>
        </ul>

        <p>
          The Service Provider reserves the right to terminate your access to the Application for violating these rules.
        </p>

        <br />
        <strong>Service and Charges</strong>
        <p>
          The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.
        </p>

        <br />
        <strong>Security and Device Responsibility</strong>
        <p>
          The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.
        </p>

        <br />
        <strong>Third-Party Services</strong>
        <p>
          Please note that the Application utilizes third-party services that have their own Terms and Conditions. You agree to comply with any applicable third-party terms of service when using the Application. Below are the links to the Terms and Conditions of the primary third-party service providers used by the Application:
        </p>

        <ul>
          <li>
            <a href="https://www.revenuecat.com/terms" target="_blank" rel="noopener noreferrer">
              RevenueCat (Terms)
            </a>
          </li>
          <li>
            <a href="https://mixpanel.com/legal/terms-of-use" target="_blank" rel="noopener noreferrer">
              Mixpanel (Terms)
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener noreferrer">
              Meta/Facebook (Terms)
            </a>
          </li>
          <li>
            <a href="https://smartbear.com/terms-of-use/" target="_blank" rel="noopener noreferrer">
              Bugsnag (Terms)
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
              Google &amp; Firebase (Terms)
            </a>
          </li>
          <li>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
              Apple (Terms)
            </a>
          </li>
        </ul>

        <br />
        <strong>Subscriptions and Payments</strong>
        <p>
          Some features of the Application are available through auto-renewable subscriptions. A subscription automatically renews unless it is canceled at least 24 hours before the end of the current period. The renewal charge will be applied to your Apple ID or Google Play account within the 24-hour period prior to the end of the current period.
        </p>

        <p>
          You can manage and cancel your subscriptions at any time by going to your App Store or Google Play account settings after purchase. All payments are processed by Apple or Google and are therefore subject to the respective App Store or Google Play terms and conditions.
        </p>

        <br />
        <strong>Disclaimers and Limitation of Liability</strong>
        <p>
          Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.
        </p>

        <p>
          If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.
        </p>

        <p>
          Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.
        </p>

        <p>
          In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times (except as stated in the Health and Nutritional Disclaimer), they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.
        </p>

        <br />
        <strong>Updates and Termination</strong>
        <p>
          The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you.
        </p>

        <p>
          The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.
        </p>

        <br />
        <strong>Changes to These Terms and Conditions</strong>
        <p>
          The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.
        </p>

        <br />
        <p>These terms and conditions are effective as of 2025-10-21</p>

        <br />
        <strong>Contact Us</strong>
        <p>
          If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at alphabornapps@gmail.com.
        </p>

      </div>
    </div>
  )
}

export default TermsConditions