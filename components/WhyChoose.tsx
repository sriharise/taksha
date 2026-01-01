import React from 'react';

const items = [
  {title: 'BCA Registered & Certified', desc: 'Licensed scopes and compliance.'},
  {title: 'Trained Rope Access & Gondola Teams', desc: 'Fully trained and certified operators.'},
  {title: 'Safety-First Approach', desc: 'First aiders and strict safety protocols.'},
  {title: 'Proven Public & Private Sector Experience', desc: 'Work for Town Councils, Hospitals and more.'}
];

export default function WhyChoose(){
  return (
    <section id="why" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-2xl font-semibold text-[var(--taksha-blue)]">Why Choose Us</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it)=> (
            <div key={it.title} className="bg-gray-50 rounded p-4 text-center">
              <div className="h-12 w-12 mx-auto rounded-full bg-[var(--taksha-blue)] text-white flex items-center justify-center font-bold">✓</div>
              <h4 className="mt-3 font-semibold text-sm text-[var(--taksha-orange)]">{it.title}</h4>
              <p className="mt-1 text-xs text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
