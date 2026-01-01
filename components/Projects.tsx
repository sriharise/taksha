import React from 'react';

const projects = [
  'Town Council R&R & Painting Works',
  'Schools & Hospitals',
  'Singapore Sports Hub',
  'ACP Canopies & Façade Works',
  'Fire-rated Installations'
];

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <div className="container">
        <h2 className="text-2xl font-semibold text-[var(--taksha-blue)]">Project Experience</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((p)=> (
            <div key={p} className="bg-white rounded border p-4 shadow-sm">
              <h4 className="font-semibold text-sm text-[var(--taksha-orange)]">{p}</h4>
              <p className="mt-2 text-xs text-gray-600">Representative project delivering quality workmanship and compliance.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
