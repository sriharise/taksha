import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Certifications from '../components/Certifications';

export default function Page(){
  return (
    <>
      <main className="pt-24">
        <Hero />
        <Services />
        <Certifications />
        <WhyUs />
      </main>
    </>
  );
}
