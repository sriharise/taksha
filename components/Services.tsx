import React from 'react';
import ServiceCard from './ServiceCard';

export default function Services(){
  const categories = [
    {
      title: 'Repairs & Redecoration',
      items: ['Painting Works (Public, Private, Institutional, Hospital)', 'Façade Repair', 'Waterproofing', 'Window Cleaning & Sealant']
    },
    {
      title: 'Specialist Construction',
      items: ['Fire-rated Glass, Ceiling & Partition', 'Aluminum Flashing & Aluminum Works', 'ACP Panel Installation', 'Metal Roof & Ceiling', 'Canopy & Tension Membrane Installation']
    },
    {
      title: 'Engineering & Structural',
      items: ['Steel Fabrication & Installation', 'Reinstatement Works', 'General Construction', 'Demolition Works', 'Breaching Inlet & Dry Riser Works']
    },
    {
      title: 'Safety & Access',
      items: ['Rope Access (Spiderman)', 'Gondola (Suspended Scaffold)', 'Anti-Bird Netting & Proofing']
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container">
        <h2 className="text-2xl font-semibold text-[var(--taksha-blue)]">Services</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">We provide a wide range of civil and specialist engineering services tailored for public and private sectors.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((c)=> <ServiceCard key={c.title} title={c.title} items={c.items} />)}
        </div>
      </div>
    </section>
  );
}
