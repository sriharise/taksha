import React from 'react';
import { SITE_INFO } from '../../config/siteConfig';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--taksha-blue)] to-[var(--taksha-orange)] bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Get in touch with {SITE_INFO.companyName} for enquiries, quotations, or site assessments.
            Our team will respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section>
        <div className="container mx-auto px-4 py-16 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-4">
              Reach Us
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a href={SITE_INFO.phoneHref} className="text-[var(--taksha-orange)] hover:underline">
                  {SITE_INFO.phone}
                </a>
              </p>

              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href={SITE_INFO.emailHref} className="text-[var(--taksha-orange)] hover:underline">
                  {SITE_INFO.email}
                </a>
              </p>

              <p>
                <span className="font-medium">Address:</span><br />
                {SITE_INFO.address.line1}<br />
                {SITE_INFO.address.line2}
              </p>
            </div>

            {/* Google Map (responsive) */}
            <div className="mt-8 rounded-xl overflow-hidden h-56 md:h-72 shadow-sm">
              <iframe
                title="Taksha Engineering Location"
                src="https://www.google.com/maps?q=12%20Lorong%20Bakar%20Batu%2C%20%2302-01%20Singapore%20348745&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--taksha-blue)] mb-4">
              Request a Site Assessment
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--taksha-orange)]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--taksha-orange)]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--taksha-orange)]"
                  placeholder="Contact number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--taksha-orange)]"
                  placeholder="Briefly describe your requirement"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--taksha-orange)] text-white font-semibold hover:opacity-90 transition"
              >
                Request Free Site Assessment
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
