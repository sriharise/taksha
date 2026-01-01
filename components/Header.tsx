"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import TakshaLogo from '../images/Taksha_Logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top info bar */}
      <div className="w-full bg-gray-50 border-b border-gray-200">
        <div className="container flex items-center justify-between text-sm py-2">
          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-700">
            <a href="tel:+6569709355" className="flex items-center gap-2 hover:text-[var(--taksha-orange)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h4l2 5-1 2a11 11 0 005 5l2-1 5 2v4a2 2 0 01-2 2C7.82 22 2 16.18 2 9a2 2 0 012-2z" />
              </svg>
              <span>+65 6970 9355</span>
            </a>
            <a href="mailto:taksha.eng@gmail.com" className="flex items-center gap-2 hover:text-[var(--taksha-orange)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
              </svg>
              <span>taksha.eng@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-600 hover:text-[var(--taksha-orange)]" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.5V24h-4.5zM8.98 8h4.32v2.16h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.98 5.38 6.84V24h-4.5v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.76 1.86-2.76 3.78V24h-4.5z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-[var(--taksha-orange)]" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.88v-6.99h-2.2V12h2.2V9.8c0-2.17 1.3-3.37 3.3-3.37.96 0 1.96.17 1.96.17v2.15h-1.1c-1.09 0-1.43.68-1.43 1.38V12h2.44l-.39 2.89h-2.05v6.99A10 10 0 0022 12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-[var(--taksha-orange)]" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zM18 6.5a1 1 0 11-1-1 1 1 0 011 1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-12 w-44 relative">
              <Image src={TakshaLogo} alt="Taksha Logo" fill style={{ objectFit: 'contain' }} />
            </div>
            <span className="font-semibold text-lg text-[var(--taksha-blue)] uppercase tracking-wider">Taksha Engineering</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-[var(--taksha-orange)]">Home</a>
            <a href="#about" className="hover:text-[var(--taksha-orange)]">About</a>
            <a href="#services" className="hover:text-[var(--taksha-orange)]">Services</a>
            <a href="#contact" className="hover:text-[var(--taksha-orange)]">Contact</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2 rounded-md border">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="flex flex-col p-4 gap-3">
              <a href="#home" onClick={() => setOpen(false)}>Home</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#services" onClick={() => setOpen(false)}>Services</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
