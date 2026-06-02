"use client";

import React, { useMemo } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '../../../config/siteConfig';

export default function ClientServiceFallback() {
  const params = useParams() as { slug?: string } | null;
  const pathname = usePathname() ?? '';

  const raw = params?.slug ?? pathname.split('/').filter(Boolean).pop() ?? '';
  const normalized = decodeURIComponent(String(raw)).toLowerCase().replace(/[^a-z0-9\-]+/g, '-').replace(/(^-|-$)/g, '');

  const service = useMemo(() => {
    return SERVICES.find((s) => {
      const sslug = String(s.slug || '').toLowerCase();
      const slabel = String(s.label || '').toLowerCase();
      const normLabel = slabel.replace(/[^a-z0-9\-]+/g, '-').replace(/(^-|-$)/g, '');
      return sslug === normalized || normLabel === normalized || sslug === raw || sslug === decodeURIComponent(raw).toLowerCase();
    });
  }, [raw, normalized]);

  if (!service) {
    return (
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 py-20 max-w-5xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Service not found</h2>
          <p className="text-gray-600 mb-6">Could not resolve service on client.</p>
          <Link href="/services" className="text-[var(--taksha-orange)] font-semibold">Back to Services</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-6 max-w-5xl">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="underline hover:no-underline hover:text-[var(--taksha-orange)] transition">Home</Link>
            <span className="mx-2 text-gray-500">&gt;</span>
            <Link href="/services" className="underline hover:no-underline hover:text-[var(--taksha-orange)] transition">Services</Link>
            <span className="mx-2 text-gray-500">&gt;</span>
            <span className="text-gray-800 font-medium">{service.label}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image src={service.image} alt={service.label} fill className="object-cover" />
            </div>

            <div>
              <h1 className="text-3xl font-semibold text-[var(--taksha-blue)] mb-3">{service.label}</h1>
              {service.subItems && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-[var(--taksha-blue)] mb-3">Capabilities</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.subItems.map((item) => (
                      <div key={item.label} className="flex items-center gap-4 p-3 rounded-lg border bg-white">
                        <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image} alt={item.label} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
