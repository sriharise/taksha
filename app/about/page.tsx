import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_INFO } from '../../config/siteConfig';

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}

      {/* Company Overview - hero banner style using Aboutus.jpg */}
      <section className="relative w-full min-h-[24rem] md:min-h-[45vh]">
        <div className="absolute inset-0 h-96 md:h-[45vh] -z-10">
          <Image src="/Aboutus.jpg" alt="About us" fill style={{objectFit: 'cover'}} priority />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-28 max-w-5xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About {SITE_INFO.companyName}
          </h1>
        </div>
      </section>

      {/* Company Overview - concise bullets with safety box */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">

            <div>
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏗️</span>
                  <span className="font-medium">Over a decade of specialist repairs, reinstatement and engineering delivery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏭</span>
                  <span className="font-medium">In-house fabrication for tighter quality control and faster turnarounds.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🛡️</span>
                  <span className="font-medium">Certified teams and method-led execution prioritising safety on live sites.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <span className="font-medium">Trusted by public and private sector clients across Singapore.</span>
                </li>
              </ul>
            </div>

            <aside className="flex justify-end">
              <div className="w-full md:w-3/4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border">
                <h4 className="font-semibold text-[var(--taksha-blue)] mb-3">Safety & Compliance</h4>
                <p className="text-sm text-gray-600 mb-3">We hold certifications and registrations that reflect our commitment to safe, compliant delivery.</p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li className="font-semibold text-[var(--taksha-blue)]">BCA Registered Contractor</li>
                  <li>CR09 – Repairs & Redecoration - L4</li>
                  <li>CR13 – Waterproofing Installation - L1</li>
                  <li className="font-semibold text-[var(--taksha-blue)]">BizSAFE Star Certified</li>
                  <li className="font-semibold text-[var(--taksha-blue)]">ISO 45000:2018</li>
                  <li className="font-semibold text-[var(--taksha-blue)]">ISO 90001:2015</li>
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 max-w-5xl grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">🎯 OUR VISION</h3>
            <ul className="text-gray-700 space-y-2">
              <li>To strive to deliver our services with the highest quality, executing efficiently and in a timely manner to ensure maximum customer satisfaction.</li>
              <li>To be a value-added partner to our suppliers, contractors, and customers.</li>
              <li>To become a world-leading manufacturer and fabricator of stainless steel, brass, metal, and glass products.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">⚙️ OUR MISSION</h3>
            <ul className="text-gray-700 space-y-2">
              <li>To provide excellent products and services with prompt delivery and competitive pricing.</li>
              <li>To achieve customer satisfaction through a “zero-defect” mindset, driven by teamwork, innovation, and continuous improvement.</li>
              <li>To maintain the highest levels of professionalism and integrity in our relationships with suppliers, contractors, and customers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY US SECTION (NEW) */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl text-center">

          <h2 className="text-3xl md:text-4xl text-purple-500 font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Your trusted partner for timely, high-quality, and professional solutions, delivered with passion and excellence.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-semibold mb-2">We deliver quality</h3>
              <p className="text-gray-600 text-sm">
                Our constant goal is to provide excellent service, ensuring exceptional customer satisfaction at all times.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-semibold mb-2">Always on time</h3>
              <p className="text-gray-600 text-sm">
                We deliver highest quality work on time, even for complex projects with strong workmanship.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold mb-2">We are passionate</h3>
              <p className="text-gray-600 text-sm">
                Our team is experienced and committed to giving 100% to ensure customer satisfaction.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-semibold mb-2">Professional Services</h3>
              <p className="text-gray-600 text-sm">
                Skilled professionals delivering a wide range of home and office maintenance services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing paragraph & CTA */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <p className="text-gray-700 leading-relaxed mb-6">
            With professionalism, integrity, and a strong focus on workmanship, we continue to build long-term partnerships with our clients and stakeholders.
          </p>
          <div className="text-center">
            <Link
              href="tel:+6569709355"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--taksha-orange)] text-white font-semibold hover:opacity-90"
            >
              <svg aria-hidden="true" focusable="false" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 21.5 2.5 13.93 2.5 3a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.01l-2.71 2.21z" fill="white" />
              </svg>
              +65 6970 9355
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
