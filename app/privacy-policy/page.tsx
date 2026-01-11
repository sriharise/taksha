import React from 'react';
import { SITE_INFO } from '../../config/siteConfig';

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--taksha-blue)] to-[var(--taksha-orange)] bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            This Privacy Policy explains how {SITE_INFO.companyName} collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="container mx-auto px-4 py-16 max-w-4xl space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">1. Introduction</h2>
            <p>
              {SITE_INFO.companyName} is committed to safeguarding your privacy. This policy applies to information collected
              through our website, enquiry forms, and communications related to our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">2. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, phone number, company details,
              and any other information you voluntarily provide when contacting us or requesting a quotation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">3. How We Use Your Information</h2>
            <p>
              The information we collect is used to respond to enquiries, provide quotations, deliver services,
              improve our website, and communicate with you regarding our projects or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">4. Data Protection</h2>
            <p>
              We take reasonable technical and organisational measures to protect your personal data against
              unauthorised access, disclosure, alteration, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">5. Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. Information may be shared
              only where required by law or with trusted partners solely for the purpose of delivering our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">6. Cookies & Analytics</h2>
            <p>
              Our website may use cookies or analytics tools to improve user experience and analyse website traffic.
              You may choose to disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">7. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data held by us,
              subject to applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page and
              will take effect immediately upon publication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">9. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or how your data is handled, please contact us at{' '}
              <a href={SITE_INFO.emailHref} className="text-[var(--taksha-orange)] underline">
                {SITE_INFO.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
