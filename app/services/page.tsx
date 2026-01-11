"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '../../config/siteConfig';

export default function ServicesPage() {
  const [activeSub, setActiveSub] = useState<{
    label: string;
    image: string;
  } | null>(null);

  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--taksha-blue)] to-[var(--taksha-orange)] bg-clip-text text-transparent mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-3xl">
            We provide a comprehensive range of civil, construction, and specialist access services for public and private sector clients across Singapore. All works are delivered with a safety-first approach and strict regulatory compliance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`#${service.slug}`}
                className="group rounded-xl overflow-hidden border hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[var(--taksha-blue)] group-hover:text-[var(--taksha-orange)] transition">
                    {service.label}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Trusted execution by experienced and certified teams.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-20 max-w-5xl space-y-20">
          {SERVICES.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid md:grid-cols-2 gap-10 items-center scroll-mt-24"
            >
              {/* Service Image */}
              <div className={`relative h-64 rounded-xl overflow-hidden ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl font-semibold text-[var(--taksha-blue)] mb-3">
                  {service.label}
                </h2>

                <p className="text-gray-700 mb-4">
                  Our team delivers this service with a strong focus on safety, workmanship quality, and regulatory compliance.
                </p>

                <ul className="space-y-2 text-gray-700">
                  <li>• Suitable for public, commercial, and industrial facilities</li>
                  <li>• Executed by trained and certified personnel</li>
                  <li>• Compliance with Singapore safety and quality standards</li>
                </ul>

                {service.subItems && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-[var(--taksha-blue)] mb-3">
                      Capabilities
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.subItems.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setActiveSub(item)}
                          className="group w-full text-left flex items-center gap-4 p-3 rounded-lg border bg-white hover:border-[var(--taksha-orange)] hover:shadow-md transition"
                        >
                          <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.label}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>

                          <div>
                            <p className="font-medium text-gray-800 group-hover:text-[var(--taksha-orange)] transition">
                              {item.label}
                            </p>
                            <p className="text-xs text-gray-500">
                              Click to enlarge
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance strip */}
      <section>
        <div className="container mx-auto px-4 py-16 max-w-5xl text-center">
          <p className="text-gray-600">
            All services are carried out in accordance with BCA requirements, bizSAFE standards, and ISO-certified quality and safety management systems.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--taksha-blue)] text-white">
        <div className="container mx-auto px-4 py-16 max-w-5xl text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Need expert support for your next project?
          </h2>
          <p className="text-white/80 mb-6">
            Contact our team today for a professional consultation and site assessment.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-lg bg-[var(--taksha-orange)] text-white font-semibold hover:opacity-90"
          >
            Request Site Assessment
          </Link>
        </div>
      </section>

      {/* Sub-category Image Modal */}
      {activeSub && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setActiveSub(null)}
        >
          <div
            className="relative bg-white rounded-xl max-w-3xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSub(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative w-full h-[70vh] bg-black">
              <Image
                src={activeSub.image}
                alt={activeSub.label}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="p-4 text-center">
              <p className="font-semibold text-gray-800">
                {activeSub.label}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
