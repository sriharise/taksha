"use client";
import React, {useState} from 'react';

export default function Contact(){
  const [state, setState] = useState({name:'', email:'', phone:'', message:''});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    // In production integrate real backend or Netlify Forms
    setSent(true);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--taksha-blue)]">Looking for a reliable engineering partner?</h2>
          <p className="mt-3 text-gray-700">Request a free site assessment and quotation — we prioritise safety and compliance.</p>

          <div className="mt-6">
            <p className="text-sm text-gray-600">Phone: +65 6970 9355</p>
            <p className="text-sm text-gray-600 mt-1">Address: 12 Lorong Bakar Batu, #02-01, Singapore 348745</p>
            <p className="text-sm text-gray-600 mt-1">Email: <a href="mailto:taksha.eng@gmail.com" className="hover:text-[var(--taksha-orange)]">taksha.eng@gmail.com</a></p>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-sm space-y-3 border">
            <div>
              <label className="text-xs font-medium">Name</label>
              <input value={state.name} onChange={(e)=>setState({...state, name:e.target.value})} className="mt-1 block w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="text-xs font-medium">Email</label>
              <input type="email" value={state.email} onChange={(e)=>setState({...state, email:e.target.value})} className="mt-1 block w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="text-xs font-medium">Phone</label>
              <input value={state.phone} onChange={(e)=>setState({...state, phone:e.target.value})} className="mt-1 block w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="text-xs font-medium">Message</label>
              <textarea value={state.message} onChange={(e)=>setState({...state, message:e.target.value})} className="mt-1 block w-full border rounded px-3 py-2" rows={4} />
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" className="px-4 py-2 bg-[var(--taksha-orange)] text-white rounded">Request Free Site Assessment</button>
              {sent && <span className="text-sm text-green-600">Message received. We will contact you shortly.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
