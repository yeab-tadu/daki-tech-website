import PageHeader from '@/components/PageHeader';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information."
      />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <article className="prose prose-lg max-w-4xl mx-auto">
            <h2>1. Introduction</h2>
            <p>
              Welcome to DakiTechs. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, and phone number when you fill out a contact form, subscribe to our newsletter, or apply for a job. We also collect non-personal information, such as browser type, operating system, and website usage data through cookies and analytics tools.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Process your transactions and manage your orders</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2>4. Cookies and Web Beacons</h2>
            <p>
              Like any other website, DakiTechs uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2>5. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul>
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
              <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            </ul>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@dakitechs.com.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
