import React from "react";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="wrapper">

      <header>
        <h1>Privacy Policy</h1>
        <p className="meta">
          Effective Date: <strong>April 11, 2026</strong>
        </p>
      </header>

      <div className="container">

        <h2>1. Introduction</h2>
        <p>
          Welcome to <b>The LexDaily Blog</b>. We respect your privacy and are
          committed to protecting any personal information you may provide while
          using our website. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal Information (such as name and email address when you contact us)</li>
          <li>Usage Data (pages visited, time spent, browser type)</li>
          <li>Cookies and tracking technologies</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>Improve website performance and user experience</li>
          <li>Respond to inquiries and support requests</li>
          <li>Send updates or notifications (if subscribed)</li>
          <li>Analyze traffic and usage trends</li>
        </ul>

        <h2>4. Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience. Cookies
          help us understand user behavior and improve our content. You may
          disable cookies in your browser settings.
        </p>

        <h2>5. Data Protection</h2>
        <p>
          We implement appropriate security measures to protect your personal
          data. However, please note that no method of transmission over the
          internet is 100% secure.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>
          We may use third-party services such as analytics tools or advertising
          networks. These services may collect limited information in accordance
          with their own privacy policies.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          You have the right to access, update, or request deletion of your
          personal data by contacting us.
        </p>

        <h2>8. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the
          purposes outlined in this policy, unless a longer retention period is
          required by law.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>

        <p><b>Email:</b> thelexdaily@email.com</p>
        <p><b>Website:</b> thelexdailyblog.com</p>

      </div>

      <footer>
        © 2026 The LexDaily Blog. All Rights Reserved.
      </footer>

    </div>
  );
};

export default PrivacyPolicy;