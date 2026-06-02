"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '../../config/siteConfig';

export default function ServicesPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (hash) {
      const slug = hash.replace('#', '');
      if (slug) router.replace(`/services/${slug}`);
    }
  }, [router]);


  const SERVICE_DETAILS: Record<string, string[]> = {
    painting: [
      "Reliable Painting is your trusted partner for high-quality, professional painting services in Singapore. Backed by a skilled team and a proven track record, we are known for delivering outstanding results that not only meet expectations—but exceed them.",
      "With extensive experience in the painting and repainting industry, we understand what it takes to transform your space. Whether it’s interior (in-house) or exterior painting, we provide tailored solutions designed to suit your needs, style, and budget. From helping you choose the right products to executing every detail with precision, our experienced painters ensure a flawless, long-lasting finish every time.",
      "What sets us apart is our commitment to excellence and value. We combine premium workmanship with competitive pricing, so you get exceptional results without overspending. No shortcuts, no compromises—just reliable service you can count on."
    ],
    'bird-proofing': [
      "Our bird netting provides a durable and humane solution to keep birds out while remaining visually discreet. Easy to install on buildings, balconies, and roof areas, it blends seamlessly without affecting aesthetics.",
      "It also protects your property from damage caused by bird droppings and nesting debris, keeping your space clean and well-maintained."
    ],
    facade: [
      "Regular facade maintenance helps extend a building’s lifespan and prevent costly damage. Taksha Engineering offers services including glass replacement and installation, cleaning, re-sealant application, and gasket replacement to keep your building in top condition."
    ],
    tension: [
      "We provide professional tension membrane installation and repair services, delivering durable, weather-resistant, and visually striking structures for both residential and commercial projects. Our solutions are ideal for canopies, walkways, facades, and outdoor coverings.",
      "From new installations to repair and maintenance works, our experienced team ensures precise fitting, high-quality materials, and long-lasting performance. We also handle inspections, re-tensioning, and replacements to maintain structural integrity and appearance over time."
    ],
    'fire-rated': [
      "We provide professional fire-rated ceiling and partition solutions designed to enhance building safety and meet regulatory requirements. Our systems are built to effectively compartmentalize spaces, helping to slow the spread of fire and protect critical escape routes.",
      "Using high-quality materials such as fire-rated plasterboards (15mm), steel framing systems, and rockwool insulation, we deliver installations that achieve 1-hour to 2-hour fire ratings. Our services are suitable for both residential and commercial projects."
    ],
    aluminium: [
      "We provide high-quality aluminium works for residential and commercial projects, offering durable, lightweight, and corrosion-resistant solutions. Our services include fabrication and installation of aluminium doors, windows, partitions, frames, and custom structures."
    ],
    roofing: [
      "We specialize in metal roofing services, offering durable, weather-resistant, and low-maintenance solutions for residential and commercial projects. Our services include installation, repair, and maintenance of metal roofs, ensuring long-lasting protection and structural integrity."
    ],
    canopy: [
      "We provide professional canopy solutions for residential and commercial properties, combining functionality with aesthetic appeal. Our services include design, fabrication, installation, and maintenance of canopies using durable materials such as steel, aluminum, and tension membranes."
    ],
    glass: [
      "We specialize in both fire-rated and non-fire-rated glass solutions for residential and commercial projects. Our fire-rated glass systems provide enhanced safety by helping to contain fire and smoke, while our non-fire-rated glass options focus on aesthetics, natural light, and modern design."
    ],
    general: [
      "We provide a wide range of general construction services, including drain installation, apron construction, and boundary wall building. Our team delivers durable and high-quality structures that meet functional requirements and enhance the overall safety and aesthetics of your property."
    ],
    demolition: [
      "We offer professional demolition and reinstatement services for residential and commercial projects. Our team safely and efficiently handles the removal of structures, walls, or fixtures, followed by precise reinstatement to restore the area to its original or improved condition."
    ],
    waterproofing: [
      "We provide professional waterproofing services to protect residential and commercial buildings from water damage. Our solutions include roof, terrace, basement, and bathroom waterproofing using high-quality membranes, coatings, and sealants."
    ]
  };

  const SERVICE_SUMMARIES: Record<string, string> = {
    painting: 'High-quality interior & exterior painting with skilled teams and durable finishes.',
    'bird-proofing': 'Durable, humane bird netting for balconies, roofs and facades.',
    facade: 'Facade maintenance: glass replacement, cleaning, re-sealant and gasket replacement.',
    tension: 'Tension membrane installation & repair for canopies, walkways and facades.',
    'fire-rated': 'Fire-rated ceilings & partitions delivering 1–2 hour protection and compliance.',
    aluminium: 'Fabrication & installation of aluminium doors, windows, partitions and cladding.',
    roofing: 'Metal roofing installation, repair and long-lasting maintenance solutions.',
    canopy: 'Design, fabrication and installation of canopies in steel, aluminium and membranes.',
    glass: 'Fire-rated and non-fire-rated glass systems: partitions, curtain walls and installations.',
    general: 'General construction: drains, aprons and boundary walls with durable workmanship.',
    demolition: 'Safe demolition and precise reinstatement with minimal disruption.',
    waterproofing: 'Roof, terrace, basement and bathroom waterproofing using durable membranes.'
  };

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
                  href={`/services/${service.slug}`}
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
                    {SERVICE_SUMMARIES[service.slug] ?? (SERVICE_DETAILS[service.slug]?.[0] ?? 'Trusted execution by experienced and certified teams.')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
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


      
    </main>
  );
}
