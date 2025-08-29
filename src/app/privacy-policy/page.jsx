import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white overflow-hidden p-6 md:p-8">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline inline-flex items-center mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy – Mirar</h1>
          <p className="text-gray-600 mb-8">
            Effective Date: {currentDate}<br />
            Last Updated: {currentDate}
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="mb-6">
            At Mirar, your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website, mobile application, or services (together, the "Platform"). By using Mirar, you agree to the practices described below.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">When you use Mirar, we may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Personal Information:</strong> Name, email, phone number, address, payment details, and social media handles when you sign up or place an order.</li>
                <li><strong>Order Information:</strong> Food items, delivery preferences, payment status, receipts, and customer reviews.</li>
                <li><strong>Social Media Data:</strong> If you connect WhatsApp, Messenger, or Instagram, we may access relevant data needed to take orders, send updates, and process payments.</li>
                <li><strong>Device & Usage Data:</strong> IP address, browser type, operating system, and how you interact with our platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>We use the collected data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and deliver your food orders.</li>
                <li>Enable secure payments and send receipts.</li>
                <li>Personalize customer experiences, including menu suggestions and promotions.</li>
                <li>Connect and automate orders through WhatsApp, Messenger, and Instagram.</li>
                <li>Improve service quality, handle complaints, and manage delivery partners.</li>
                <li>Send reorder reminders, loyalty rewards, and marketing offers (only if you opt-in).</li>
                <li>Comply with legal requirements and prevent fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Sharing of Information</h2>
              <p className="mb-2">We do not sell your personal data. However, we may share your information with:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>Delivery Partners:</strong> To arrange and complete deliveries.</li>
                <li><strong>Payment Providers:</strong> To process secure transactions.</li>
                <li><strong>Service Providers:</strong> For analytics, customer support, and system maintenance.</li>
                <li><strong>Legal Authorities:</strong> If required by law or to protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p>We use encryption, secure servers, and strict access controls to protect your personal information. However, no system is 100% secure, and we cannot guarantee absolute protection.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="mb-2">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Access the data we hold about you.</li>
                <li>Request corrections or deletion of your data.</li>
                <li>Opt out of marketing communications.</li>
                <li>Revoke access to connected social accounts.</li>
              </ul>
              <p>To exercise these rights, contact us at support@mirar.ai.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Cookies & Tracking</h2>
              <p>We use cookies and similar technologies to improve your experience, analyze traffic, and personalize content. You can manage cookie settings through your browser.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Third-Party Links</h2>
              <p>Our platform may contain links to third-party websites (e.g., delivery services, payment gateways). We are not responsible for their privacy practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p>Mirar is not intended for children under 13. We do not knowingly collect personal data from children.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Changes to this Privacy Policy</h2>
              <p>We may update this policy from time to time. Any changes will be posted on this page with a new "Last Updated" date.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or how your data is handled</p>
              <ul className="mt-2 space-y-1">
                
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
