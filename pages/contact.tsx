import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header'

const Contact: NextPage = () => {
  return (
    <div className="min-h-screen font-sans text-slate-900">
      <Head>
        <title>Contact — Taksha Engineering Pte Ltd</title>
        <meta name="description" content="Contact Taksha Engineering Pte Ltd for site visits, quotes and enquiries. BCA Registered, BizSAFE, ISO certified." />
      </Head>

      <Header />

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-slate-600">Book a site visit, send drawings, or request a quick quote — we respond within 24 business hours.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <form className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Name*" className="p-3 border rounded w-full" />
                <input required placeholder="Company*" className="p-3 border rounded w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" required placeholder="Email*" className="p-3 border rounded w-full" />
                <input required placeholder="Phone*" className="p-3 border rounded w-full" />
              </div>
              <select className="p-3 border rounded w-full">
                <option>General Construction & Demolition</option>
                <option>Steel Work & Reinstatement</option>
                <option>Fire-rated Systems</option>
                <option>Tension Membranes & Canopies</option>
                <option>Bird Netting & Access</option>
              </select>
              <textarea placeholder="Message" className="p-3 border rounded w-full min-h-[140px]"></textarea>
              <button className="inline-block bg-accent text-slate-900 px-4 py-2 rounded-md">Send Request</button>
            </form>

            <aside className="space-y-4">
              <h4 className="text-lg font-semibold">Head Office</h4>
              <p>12 Lorong Bakar Batu, #02-01, Singapore 348745</p>
              <p>+65 6970 9355 • <a href="mailto:taksha.eng@gmail.com" className="text-primary">taksha.eng@gmail.com</a></p>
              <p>Hours: Mon–Sat, 8:00–18:00</p>
              <div className="text-sm text-slate-600">BCA Registered • BizSAFE • ISO 9001/14001/45001</div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
