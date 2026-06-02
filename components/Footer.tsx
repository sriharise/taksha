import React from 'react';
import { SITE_INFO, SERVICES } from '../config/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--taksha-blue)] text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Top section: Services + Reach Us */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Services (3 columns) */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wide text-white/60 mb-3">Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm text-white/90">
              {SERVICES.map((service) => (
                <li key={service.slug} className="hover:text-[var(--taksha-orange)] transition-colors">
                  <a href={`/services/${service.slug}`}>{service.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div className="flex flex-col justify-between md:border-l md:border-white/40 md:pl-6">
            <div>
              <h4 className="text-xs uppercase tracking-wide text-white/60 mb-3">Reach Us</h4>
              <p className="text-sm text-white/90">
                Phone:{' '}
                <a href={SITE_INFO.phoneHref} className="hover:text-[var(--taksha-orange)]">
                  {SITE_INFO.phone}
                </a>
              </p>
              <p className="text-sm text-white/90 mt-1">
                {SITE_INFO.address.line1}
                <br />
                {SITE_INFO.address.line2}
              </p>
              <p className="text-sm text-white/90 mt-1">
                Email:{' '}
                <a href={SITE_INFO.emailHref} className="underline hover:text-[var(--taksha-orange)]">
                  {SITE_INFO.email}
                </a>
              </p>
            </div>

            {/* Social icons */}
            <div className="mt-4 flex gap-4">
              <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="text-white/60 hover:text-[var(--taksha-orange)] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2z"/><path d="M12 7a5 5 0 100 10 5 5 0 000-10z"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" aria-label="Facebook" className="text-white/60 hover:text-[var(--taksha-orange)] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9H16l-.4 2.9h-2.3v7A10 10 0 0022 12z"/></svg>
              </a>
              <a href="https://www.youtube.com" target="_blank" aria-label="YouTube" className="text-white/60 hover:text-[var(--taksha-orange)] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8z"/><path d="M9.75 15.5v-7l6 3.5-6 3.5z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-white/60">© {year} {SITE_INFO.companyName}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4 text-sm text-white/60">
            <li><a href="/" className="hover:text-[var(--taksha-orange)]">Home</a></li>
            <li><a href="/about" className="hover:text-[var(--taksha-orange)]">About</a></li>
            
            <li><a href="/contact" className="hover:text-[var(--taksha-orange)]">Contact</a></li>
            <li><a href="/privacy-policy" className="hover:text-[var(--taksha-orange)]">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions" className="hover:text-[var(--taksha-orange)]">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
