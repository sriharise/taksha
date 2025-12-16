import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header'

const services = [
  { id: 1, icon: '🏗️', color: 'text-primary', title: 'General Construction & Demolition', desc: 'Selective and structural demolition, soft-strip, and temporary works.' },
  { id: 2, icon: '🛠️', color: 'text-accent', title: 'Steel Work & Reinstatement', desc: 'Make-good and structural reinstatement to landlord standards.' },
  { id: 3, icon: '🔥', color: 'text-rose-500', title: 'Fire-rated Systems', desc: 'Fire-rated glass, ceilings and partitions with certified installs.' },
  { id: 4, icon: '🪢', color: 'text-amber-500', title: 'Tension Membranes & Canopies', desc: 'Design, supply and install large-span membrane systems.' },
  { id: 5, icon: '💧', color: 'text-teal-600', title: 'Waterproofing & Roof Works', desc: 'Leak investigation, repairs and long-term maintenance programmes.' },
  { id: 6, icon: '🐦', color: 'text-indigo-600', title: 'Bird Netting & Access', desc: 'Humane bird netting and specialist access solutions including rope access.' }
]

const Services: NextPage = () => {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Head>
        <title>Services — Taksha Engineering Pte Ltd</title>
        <meta name="description" content="Services by Taksha Engineering: demolition, reinstatement, fire-rated systems, membranes, waterproofing and access." />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-primary">Our Services</h1>
          <p className="mt-3 text-lg text-slate-700">End-to-end delivery for complex works: live sites, tight access, night shifts and critical-path coordination.</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.id} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-2xl">{s.icon}</div>
              <h3 className={`mt-4 text-xl font-semibold ${s.color}`}>{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <div className="mt-4">
                <a href="/contact" className="text-primary font-medium">Learn More</a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Services
