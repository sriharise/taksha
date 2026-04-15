import React from 'react';
import Link from 'next/link';
import { SITE_INFO } from '../../config/siteConfig';

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--taksha-blue)] to-[var(--taksha-orange)] bg-clip-text text-transparent mb-4">
            About {SITE_INFO.companyName}
          </h1>
          
        </div>
      </section>

      {/* Company Overview */}
      <section>
        <div className="container mx-auto px-4 py-8 max-w-5xl space-y-4">
          <p className="text-gray-600 text-lg leading-relaxed">
            Taksha Engineering Pte Ltd is a Singapore-based company specializing in repair and redecoration works, renovation services and comprehensive painting services for commercial, industrial, and residential properties.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With over 10 years of industry experience, we have established ourselves as a trusted contractor known for delivering quality workmanship and reliable service. Our portfolio includes a wide range of successfully completed projects across both private and public sectors, including residential units, industrial buildings, hospitals, and landed properties.
          </p>

          <p className="text-gray-700 leading-relaxed">
            At Taksha Engineering, we are committed to meeting our clients’ needs with professionalism, efficiency, and attention to detail—ensuring every project is completed to the highest standards.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Established in 2017, Taksha Engineering has grown into a strong multi-disciplinary company with expertise across a wide range of construction trade works and projects.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We operate our own fabrication facility located at Blk 12, Lorong Bakar Batu, enabling us to maintain strict quality control, efficient production, and timely project delivery.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our team comprises experienced technical personnel and a highly skilled workforce who are well-equipped to manage complex designs and technical challenges. We work both independently and collaboratively with our clients to deliver practical, cost-effective, and high-quality solutions.
          </p>

          <div>
            <p className=" mb-3">Taksha Engineering is committed to maintaining high industry standards and safety compliance:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li className='font-semibold text-[var(--taksha-blue)]'>BCA Registered Contractor</li>
                <ul>
                  <li>CR09 – Repairs & Redecoration - L4</li>
                  <li>CR13 – Waterproofing Installation - L1</li>
                </ul>
              <li className='font-semibold text-[var(--taksha-blue)]'>BizSAFE Star Certified</li>
              <li className='font-semibold text-[var(--taksha-blue)]'>ISO 45000:2018</li>
              <li className='font-semibold text-[var(--taksha-blue)]'>ISO 90001:2015</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 max-w-5xl grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">OUR VISION</h3>
            <ul className="text-gray-700 space-y-2">
              <li>To strive to deliver our services with the highest quality, executing efficiently and in a timely manner to ensure maximum customer satisfaction.</li>
              <li>To be a value-added partner to our suppliers, contractors, and customers.</li>
              <li>To become a world-leading manufacturer and fabricator of stainless steel, brass, metal, and glass products.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">OUR MISSION</h3>
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
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg bg-[var(--taksha-orange)] text-white font-semibold hover:opacity-90"
            >
              Request Site Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
