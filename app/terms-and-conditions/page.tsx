import React from 'react';
import { SITE_INFO } from '../../config/siteConfig';

export default function TermsAndConditionsPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--taksha-blue)] to-[var(--taksha-orange)] bg-clip-text text-transparent mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">
            Please read these terms and conditions carefully before using our website or engaging our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="container mx-auto px-4 py-16 max-w-4xl space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the website and services provided by {SITE_INFO.companyName}.
              By accessing our website or engaging our services, you agree to comply with these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">2. Services</h2>
            <p>
              We provide civil engineering, construction, repair, maintenance, and specialist access services.
              All services are subject to written quotations, agreed scope of work, timelines, and applicable regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">3. Quotations & Payments</h2>
            <p>
              All quotations are valid for a limited period unless stated otherwise. Payments must be made in
              accordance with the agreed payment terms stated in the quotation or contract.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">4. Safety & Compliance</h2>
            <p>
              Safety is our top priority. All works are carried out in compliance with Singapore regulations,
              workplace safety standards, and relevant authority requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">5. Limitation of Liability</h2>
            <p>
              {SITE_INFO.companyName} shall not be liable for any indirect, incidental, or consequential damages
              arising from the use of our website or services, except where required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">6. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and designs, are the property of
              {SITE_INFO.companyName} and may not be reproduced without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">7. Privacy</h2>
            <p>
              Personal information collected through this website will be handled in accordance with our
              Privacy Policy and applicable data protection laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">8. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Singapore.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Changes will be effective
              upon posting on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">10. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms and Conditions, please contact us at{' '}
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
