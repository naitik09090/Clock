import React, { useEffect } from 'react';
import '../css/Pages.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Data Protection & User Privacy Standards";
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Privacy Policy: Your Data, Your Control</h1>
      
      <section className="page-section">
        <h2>Our Commitment to Data Privacy</h2>
        <p>
          At our platform, we believe that privacy is a fundamental right. In an increasingly digital world, your personal information is more valuable than ever, and protecting it is our top priority. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our productivity suite, including our World Clock, Timer, and Stopwatch tools. 
        </p>
      </section>

      <section className="page-section">
        <h2>1. Information We Collect</h2>
        <p>
          Unlike many other platforms, we operate on a "Privacy First" model. We do not require you to create an account or provide personal details to use our core features.
        </p>
        <h3>a. Locally Stored Data</h3>
        <p>
          Most of the data you generate—such as stopwatch lap records, timer presets, and city preferences in the World Clock—is stored <strong>exclusively on your device</strong> using browser technology like <code>localStorage</code>. We do not have access to this information, and it is never transmitted to our servers.
        </p>
        <h3>b. Log Data</h3>
        <p>
          Like most website operators, we may collect information that your browser sends whenever you visit our site ("Log Data"). This may include your computer's IP address, browser version, the pages you visit, and the time and date of your visit. This data is used solely for diagnostic and optimization purposes.
        </p>
      </section>

      <section className="page-section">
        <h2>2. Cookies and Tracking Technologies</h2>
        <p>
          Cookies are small files with a small amount of data that are commonly used as anonymous unique identifiers. We may use cookies to:
        </p>
        <ul>
          <li>Remember your theme preference (Light vs. Dark Mode).</li>
          <li>Analyze site traffic and user behavior via trusted third-party analytics (e.g., Google Analytics).</li>
          <li>Provide a more personalized and efficient user experience.</li>
        </ul>
        <p>
          You have the option to either accept or refuse these cookies and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
        </p>
      </section>

      <section className="page-section">
        <h2>3. Regulatory Compliance: GDPR and CCPA</h2>
        <p>
          We strive to comply with global data protection standards, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
        </p>
        <h3>Your Rights Under GDPR:</h3>
        <ul>
          <li><strong>The Right to Access:</strong> You can request copies of your personal data. Since we store almost everything locally, you can "access" this by simply checking your browser's storage settings.</li>
          <li><strong>The Right to Erasure:</strong> You can request that we erase your personal data. For our site, this is as simple as clearing your browser's cache and local storage.</li>
          <li><strong>The Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>4. Data Security</h2>
        <p>
          We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. 
        </p>
      </section>

      <section className="page-section">
        <h2>5. Children's Privacy</h2>
        <p>
          Our services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers (if applicable).
        </p>
      </section>

      <section className="page-section">
        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
        </p>
      </section>

      <section className="page-section">
        <h2>Contact Us Regarding Privacy</h2>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us. We are committed to resolving any concerns you may have about your privacy and our data practices.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

