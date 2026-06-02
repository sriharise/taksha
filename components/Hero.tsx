"use client";

import React, { useEffect, useState } from 'react';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';

const SLIDES = [
  { id: 1, img: '/slider/slide-1.jpg', title: 'Dummy Slide Title 1', subtitle: 'This is a placeholder description for slide 1.' },
  { id: 2, img: '/slider/slide-2.jpg', title: 'Dummy Slide Title 2', subtitle: 'This is a placeholder description for slide 2.' },
  { id: 3, img: '/slider/slide-3.jpg', title: 'Dummy Slide Title 3', subtitle: 'This is a placeholder description for slide 3.' },
  { id: 4, img: '/slider/slide-4.jpg', title: 'Dummy Slide Title 4', subtitle: 'This is a placeholder description for slide 4.' },
  { id: 5, img: '/slider/slide-5.jpg', title: 'Dummy Slide Title 5', subtitle: 'This is a placeholder description for slide 5.' },
  { id: 6, img: '/slider/slide-6.jpg', title: 'Dummy Slide Title 6', subtitle: 'This is a placeholder description for slide 6.' }
];

// Certificates removed from hero slides per request

export default function Hero(){
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const current = SLIDES[index];

  return (
    <section id="home" className="relative w-full overflow-hidden">

      {/* Full-bleed slides (cover entire browser width) */}
      <div className="absolute inset-0 h-[65vh] md:h-[75vh]">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            aria-hidden={i === index ? 'false' : 'true'}
          >
            <Image src={s.img} alt={s.title} fill style={{objectFit: 'cover'}} priority={i === index} />
            <div className="absolute inset-0 bg-black/35" />
          </div>
        ))}
      </div>

      {/* Content constrained to site width and using first slide text for all slides */}
      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-6xl w-full h-[65vh] md:h-[75vh]">

            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-xl relative text-white">

                {/* Blurred dark panel sized to content with 20px padding */}
                <div className="relative z-10 bg-black/50 backdrop-blur-sm rounded-lg p-5 md:p-8 inline-block">
                  <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">{current.title}</h1>
                  <span className="block mt-3 h-1 w-28 bg-[var(--taksha-orange)] rounded" aria-hidden="true" />
                  <p className="mt-4 text-sm md:text-base text-white/90">{current.subtitle}</p>

                  <div className="mt-6 flex items-center gap-4">
                    <Link href="/services"><Button>View Our Services</Button></Link>
                  </div>

                  {/* certificates removed from hero */}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
