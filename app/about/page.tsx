import React from 'react';
import Link from 'next/link';
import { SITE_INFO } from '../../config/siteConfig';

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--taksha-blue)] to-[var(--taksha-orange)] bg-clip-text text-transparent mb-4">
            About {SITE_INFO.companyName}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Reliable civil and engineering solutions built on safety, quality, and compliance.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section>
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h2 className="text-2xl font-semibold text-[var(--taksha-blue)] relative inline-block mb-4 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[3px] after:w-12 after:bg-[var(--taksha-orange)]">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Established in 2017, {SITE_INFO.companyName} is a trusted multi-disciplinary civil engineering company
            delivering high-quality construction, repairs, and specialist access works across Singapore.
            We serve Town Councils, Hospitals, Schools, Condominiums, Commercial, and Industrial facilities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our work is guided by a strong commitment to safety, regulatory compliance, and workmanship excellence.
            Every project is approached with professionalism, transparency, and a long-term partnership mindset.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 max-w-5xl grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver safe, reliable, and compliant engineering solutions while building long-term trust
              with our clients through consistent quality and professional service.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--taksha-blue)] mb-3">Our Core Values</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Safety-first approach in all operations</li>
              <li>• Strict adherence to regulatory and quality standards</li>
              <li>• Skilled, trained, and certified workforce</li>
              <li>• Transparent communication and accountability</li>
              <li>• Continuous improvement and innovation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h2 className="text-2xl font-semibold mb-8">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-[var(--taksha-blue)] mb-2">BCA Registered & Certified</h4>
              <p className="text-gray-600 text-sm">Licensed workheads and industry-recognised certifications.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-[var(--taksha-blue)] mb-2">Specialist Access Expertise</h4>
              <p className="text-gray-600 text-sm">Rope access and gondola teams trained for complex environments.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-[var(--taksha-blue)] mb-2">Public & Private Sector Experience</h4>
              <p className="text-gray-600 text-sm">Proven track record with Town Councils, hospitals, and schools.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-[var(--taksha-blue)] mb-2">Safety & Compliance Focus</h4>
              <p className="text-gray-600 text-sm">Strict safety protocols and site compliance on every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container mx-auto px-4 py-16 max-w-5xl text-center">
          <h2 className="text-2xl font-semibold text-[var(--taksha-blue)] relative inline-block mb-4 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[3px] after:w-12 after:bg-[var(--taksha-orange)]">Looking for a reliable engineering partner?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today for a free site assessment and professional consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-lg bg-[var(--taksha-orange)] text-white font-semibold hover:opacity-90"
          >
            Request Site Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
