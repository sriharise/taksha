import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-[var(--taksha-blue)] text-white py-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-semibold">Taksha Engineering Pte Ltd</h3>
          <p className="text-xs mt-2">© {new Date().getFullYear()} Taksha Engineering Pte Ltd. All rights reserved.</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li>Repairs & Redecoration</li>
            <li>Specialist Construction</li>
            <li>Engineering & Structural</li>
            <li>Safety & Access</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Reach Us</h4>
          <p className="mt-2 text-sm">Phone: +65 6970 9355</p>
          <p className="mt-1 text-sm">12 Lorong Bakar Batu, #02-01, Singapore 348745</p>
          <p className="mt-1 text-sm">Email: <a href="mailto:taksha.eng@gmail.com" className="underline">taksha.eng@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}
