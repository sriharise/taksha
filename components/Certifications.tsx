"use client";
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import BCA from '../images/BCA_L1L3.jpg';
import Biz from '../images/biz.jpg';
import ISO9001 from '../images/iso_2015.jpg';
import ISO45001 from '../images/iso_2018.jpg';

const certs = [
  {img: BCA, title: 'BCA Workhead CR09 (L3)'},
  {img: BCA, title: 'BCA Workhead CR13 (L1)'},
  {img: Biz, title: 'BizSafe Star'},
  {img: ISO9001, title: 'ISO 9001:2015'},
  {img: ISO45001, title: 'ISO 45001:2018'}
];

export default function Certifications(){
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  useEffect(()=>{
    function onKey(e: KeyboardEvent){
      if(e.key === 'Escape'){
        setOpenSrc(null);
        setOpenTitle(null);
      }
    }
    if(openSrc) window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  }, [openSrc]);

  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-2xl font-semibold text-[var(--taksha-blue)]">Certifications</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
          {certs.map((c)=> (
            <div key={c.title} className="text-center">
              <button onClick={()=>{setOpenSrc((c.img as any).src || String(c.img)); setOpenTitle(c.title);}} className="bg-gray-50 rounded p-4 flex items-center justify-center hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--taksha-blue)] w-full" aria-label={`Open ${c.title}`}>
                <div className="h-12 w-full relative">
                  <Image src={c.img} alt={c.title} fill style={{objectFit: 'contain'}} />
                </div>
              </button>
              <div className="mt-2 text-xs text-gray-700">{c.title}</div>
            </div>
          ))}
        </div>

        {openSrc && (
          <div role="dialog" aria-modal="true" aria-label={openTitle || 'Certificate'} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/60" onClick={()=>{setOpenSrc(null); setOpenTitle(null);}} />
            <div className="relative max-w-3xl w-full mx-4">
              <button onClick={()=>{setOpenSrc(null); setOpenTitle(null);}} className="absolute top-2 right-2 z-50 bg-white rounded-full p-2 shadow focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="bg-white p-4 rounded">
                <div className="relative w-full h-[60vh]">
                  <Image src={openSrc} alt={openTitle || 'Certificate image'} fill style={{objectFit: 'contain'}} />
                </div>
                {openTitle && <p className="mt-2 text-center text-sm text-gray-700">{openTitle}</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
