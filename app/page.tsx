import React from 'react';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';

export default function Page(){
  return (
    <>
      <main className="pt-24">
        <Hero />
        <WhyChoose />
        <Certifications />
        <Projects />
      </main>
    </>
  );
}
