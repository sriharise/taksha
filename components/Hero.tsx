import React from 'react';
import Button from './Button';
import Image from 'next/image';
import TakshaLogo from '../images/Taksha_Logo.png';

export default function Hero(){
  return (
    <section id="home" className="bg-white py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--taksha-blue)]">Reliable Civil & Engineering Works You Can Trust</h1>
          <span className="block mt-3 h-1 w-28 bg-[var(--taksha-orange)] rounded" aria-hidden="true" />
          <p className="mt-4 text-gray-700 max-w-lg">Specialists in Repairs & Redecoration, Waterproofing, Façade Works, Rope Access & Safety-Certified Construction Solutions in Singapore.</p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#services"><Button>View Our Services</Button></a>
          </div>

          {/* certification badges removed from hero to keep the hero clean; see Certifications section */}
        </div>

        <div className="order-first md:order-last">
          <div className="rounded-lg border p-6 bg-gray-50">
            <div className="h-40 w-full relative">
              <Image src={TakshaLogo} alt="Taksha" fill style={{objectFit: 'contain'}} className="mx-auto" />
            </div>
            <p className="text-center mt-4 text-sm text-gray-600">Trusted by Town Councils, Hospitals, Schools & Commercial clients across Singapore.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
