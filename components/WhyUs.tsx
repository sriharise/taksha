import React from 'react';

const items = [
  { title: 'We deliver quality', emoji: '🌐', desc: 'Our constant goal is to provide excellent service, ensuring exceptional customer satisfaction at all times.' },
  { title: 'Always on time', emoji: '⏱️', desc: 'We deliver highest quality work on time, even for complex projects with strong workmanship.' },
  { title: 'We are passionate', emoji: '💡', desc: 'Our team is experienced and committed to giving 100% to ensure customer satisfaction.' },
  { title: 'Professional Services', emoji: '🛠️', desc: 'Skilled professionals delivering a wide range of home and office maintenance services.' }
];

export default function WhyUs(){
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl text-center">

        <h2 className="text-3xl md:text-4xl text-purple-500 font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Your trusted partner for timely, high-quality, and professional solutions, delivered with passion and excellence.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="border rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">{it.emoji}</div>
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-gray-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
