"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TakshaLogo from "../images/Taksha_Logo.png";
import { SITE_INFO, SERVICES } from "../config/siteConfig";

const ToolIcon = () => (
  <svg
    className="w-4 h-4 text-[var(--taksha-orange)] flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3l3 3" />
    <path d="M11 9l4 4" />
    <path d="M3 21l6-6" />
    <path d="M9 15l-4-4" />
    <path d="M16 3l5 5" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>('');

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    if (open && window.innerWidth < 768) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isServicesPage = pathname === "/services" || pathname.startsWith("/services");

  return (
    <>
      <header className={`fixed top-0 w-full z-50 bg-white ${scrolled || open ? "shadow-md" : "bg-white/95"}`}>
        {/* Top ribbon */}
        <div className="hidden lg:block bg-[var(--taksha-blue)] text-white text-xs">
          <div className="container mx-auto flex justify-between py-2 px-4">
            <span>BCA Registered • bizSAFE Star • ISO 9001 • ISO 45001</span>
            <span className="flex gap-4">
              <a href={SITE_INFO.emailHref} className="flex items-center gap-1 text-white hover:underline">
                <svg className="w-4 h-4 text-[var(--taksha-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
                </svg>
                {SITE_INFO.email}
              </a>
              <a href={SITE_INFO.phoneHref} className="flex items-center gap-1 text-white hover:underline">
                <svg className="w-4 h-4 text-[var(--taksha-orange)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V21a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 013 4.18 2 2 0 015 2h4.09a2 2 0 012 1.72l.57 3.95a2 2 0 01-.45 1.61L9.91 11.91a16 16 0 006.18 6.18l2.63-1.3a2 2 0 011.61-.45l3.95.57A2 2 0 0122 16.92z" />
                </svg>
                {SITE_INFO.phone}
              </a>
            </span>
          </div>
        </div>

        {/* Header bar */}
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src={TakshaLogo} alt={SITE_INFO.companyName} className="h-12 w-auto" />
            <span className="font-semibold tracking-wide text-[var(--taksha-blue)] uppercase">{SITE_INFO.companyName}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className={`${pathname === '/' ? 'text-[var(--taksha-orange)] font-semibold' : 'hover:text-[var(--taksha-orange)]'}`}>Home</Link>
            <Link href="/about" className={`${pathname === '/about' ? 'text-[var(--taksha-orange)] font-semibold' : 'hover:text-[var(--taksha-orange)]'}`}>About</Link>

            {/* Services */}
            <div className="relative group">
              <Link href="/services" className={`flex items-center gap-1 ${isServicesPage ? "text-[var(--taksha-orange)]" : "hover:text-[var(--taksha-orange)]"}`}>
                Services
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <div className="absolute left-0 top-full h-4 w-full" />

              <div className="absolute left-1/2 top-[calc(100%+1rem)] -translate-x-1/2 w-screen pointer-events-none opacity-0 invisible group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                <div className="container mx-auto px-4 py-6">
                  <div className="rounded-2xl bg-white shadow-xl p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {SERVICES.map((s) => {
                        const isActiveService = activeHash === `#${s.slug}`;
                        return (
                          <Link
                            key={s.slug}
                            href={`/services#${s.slug}`}
                            className={`group flex items-center gap-2 ${isActiveService ? "text-[var(--taksha-orange)] font-semibold" : "hover:text-[var(--taksha-orange)]"}`}
                          >
                            <ToolIcon />
                            {s.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/projects" className={`${pathname === '/projects' ? 'text-[var(--taksha-orange)] font-semibold' : 'hover:text-[var(--taksha-orange)]'}`}>Projects</Link>
            <Link href="/contact" className={`${pathname === '/contact' ? 'text-[var(--taksha-orange)] font-semibold' : 'hover:text-[var(--taksha-orange)]'}`}>Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link href="/contact" className="px-5 py-2 rounded-lg bg-[var(--taksha-orange)] text-white text-sm font-semibold">Request Site Assessment</Link>
          </div>

          {/* Mobile icons */}
          <div className="md:hidden flex items-center gap-3">
            <a href={SITE_INFO.phoneHref}>📞</a>
            <a href={SITE_INFO.emailHref}>✉️</a>
            <button onClick={() => setOpen(!open)} className="p-2 border rounded-lg">{open ? "✕" : "☰"}</button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && <div className="md:hidden fixed inset-x-0 bottom-0 bg-black/30 z-30" style={{ top: "5rem" }} onClick={() => setOpen(false)} />}

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-x-0 z-40 bg-white p-6 overflow-y-auto" style={{ top: "5rem", height: "60vh" }}>
          <nav className="space-y-2 text-base font-medium">
            <Link href="/" className="block py-3 border-b">Home</Link>
            <Link href="/about" className="block py-3 border-b">About</Link>

            <button onClick={() => setServicesOpen(!servicesOpen)} className={`w-full flex justify-between items-center py-3 border-b ${isServicesPage ? "text-[var(--taksha-orange)] font-semibold" : ""}`}>
              Services
              <svg className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-[600px]" : "max-h-0"}`}>
              <div className="pl-4 bg-gray-50 rounded-lg">
                {SERVICES.map((s) => {
                  const isActive = activeHash === `#${s.slug}` || pathname === `/services` && activeHash === '' && s.slug === SERVICES[0].slug;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services#${s.slug}`}
                      className={`group flex items-center gap-2 py-2 border-b text-sm ${isActive ? 'text-[var(--taksha-orange)] font-semibold' : ''}`}
                    >
                      <ToolIcon />
                      {s.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link href="/projects" className="block py-3 border-b">Projects</Link>
            <Link href="/contact" className="block py-3">Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
}
