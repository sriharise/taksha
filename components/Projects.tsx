import Image from 'next/image';
import React from 'react';

const items = [
  { title: 'Town Council Painting Work', img: '/expertise-1.png' },
  { title: 'Tension Membrane Work', img: '/expertise-2.png' },
  { title: 'Roofing Work', img: '/expertise-3.png' }
];

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-[var(--taksha-blue)]">Recent Projects</h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {items.map((it) => (
            <div key={it.title} className="bg-white rounded-lg overflow-hidden border shadow-sm">
              <div className="p-4">
                <h4 className="font-semibold text-lg text-[var(--taksha-orange)]">{it.title}</h4>
              </div>
              <div className="w-full h-44 md:h-56 lg:h-48 relative">
                <Image src={it.img} alt={it.title} fill style={{objectFit: 'cover'}} className="block" />
              </div>
              <div className="p-4 pt-3 text-right">
                <a href="#" className="text-sm lowercase text-[var(--taksha-blue)] pr-4 hover:underline">more...</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
