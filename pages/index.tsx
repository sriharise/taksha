import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen font-sans text-slate-900">
      <Head>
        <title>Taksha Engineering Pte Ltd — Demolition, Fire-Rated Systems & Tension Membranes | Singapore</title>
        <meta name="description" content="Taksha Engineering Pte Ltd — Singapore specialists in demolition, repair & redecoration, tension membranes, fire-rated glass/ceilings/partitions, steel reinstatement and bird netting. Safety-first, on-time, on-budget." />
        <meta property="og:title" content="Taksha Engineering — Demolition, Fire-Rated Systems & Tension Membranes" />
        <meta property="og:description" content="Specialists in demolition, reinstatement, fire-rated systems, tension membranes, and bird netting. BCA Registered, BizSAFE, ISO certified." />
        <meta property="og:type" content="website" />
      </Head>
      <Header />

      <main>
        <section className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Singapore’s Trusted Experts in Demolition, Civil & Remediation</h2>
              <p className="mt-4 text-slate-200">We plan and deliver complex works for developers, facility owners and main contractors—safely, compliantly, on schedule.</p>
              <div className="mt-6 flex gap-3">
                <a href="/contact" className="inline-block bg-accent text-slate-900 px-4 py-2 rounded-md font-medium">Book a Site Visit</a>
                <a href="/contact" className="inline-block border border-white px-4 py-2 rounded-md">Get a Quick Quote</a>
              </div>
              <div className="mt-4 text-sm text-slate-300">BCA Registered • BizSAFE • ISO 9001 / 14001 / 45001</div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white/5">
              <Image alt="construction" src="/images/hero.svg" width={800} height={360} className="w-full h-64 object-cover" />
            </div>
          </div>
        </section>

        <section id="services" className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold">Our Services</h3>
          <p className="mt-2 text-slate-600">End-to-end services for complex, live-site and critical-path work.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <div className="text-3xl">🏗️</div>
              <h4 className="mt-3 font-semibold">General Construction & Demolition</h4>
              <p className="mt-2 text-slate-600">Selective, structural and soft-strip demolition with engineered temporary works.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-3xl">🛠️</div>
              <h4 className="mt-3 font-semibold">Steel Work & Reinstatement</h4>
              <p className="mt-2 text-slate-600">Make-good to landlord standards with handover-ready finishes.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-3xl">🔥</div>
              <h4 className="mt-3 font-semibold">Fire-rated Systems</h4>
              <p className="mt-2 text-slate-600">Fire-rated glass, ceilings and partitions with certified installation.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-3xl">🪢</div>
              <h4 className="mt-3 font-semibold">Tension Membranes & Canopies</h4>
              <p className="mt-2 text-slate-600">Design–supply–install for industrial and commercial projects.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-3xl">🪟</div>
              <h4 className="mt-3 font-semibold">Leak & Roof Works</h4>
              <p className="mt-2 text-slate-600">Repairs, installs, and long-term maintenance programs.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-3xl">🐦</div>
              <h4 className="mt-3 font-semibold">Bird Netting & Access</h4>
              <p className="mt-2 text-slate-600">Humane protection for warehouses and facilities with access solutions.</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="/services" className="inline-block bg-primary text-white px-4 py-2 rounded-md">View All Services</a>
          </div>
        </section>

        <section id="projects" className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold">Featured Projects</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="rounded overflow-hidden shadow">
                <Image alt="Downtown Mall" src="/images/project1.svg" width={600} height={240} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <strong>Downtown Mall Selective Demolition</strong>
                  <div className="text-sm text-slate-600">12 weeks; night shifts; zero incidents.</div>
                </div>
              </article>
              <article className="rounded overflow-hidden shadow">
                <Image alt="Pharma Plant" src="/images/project2.svg" width={600} height={240} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <strong>Pharma Plant Reinstatement</strong>
                  <div className="text-sm text-slate-600">GMP environment; dust-controlled works.</div>
                </div>
              </article>
              <article className="rounded overflow-hidden shadow">
                <Image alt="Office Make Good" src="/images/project3.svg" width={600} height={240} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <strong>Grade-A Office Make-Good</strong>
                  <div className="text-sm text-slate-600">60,000 sq ft; handover in 4 weeks.</div>
                </div>
              </article>
            </div>
            <div className="mt-6">
              <a className="inline-block border px-4 py-2 rounded-md" href="/projects">Explore Projects</a>
            </div>
          </div>
        </section>

        <section id="process" className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold">Our Process</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 border rounded"> <h4 className="font-semibold">Survey & Methodology</h4> <p className="text-sm text-slate-600">Site inspection, risk assessment, RAMS.</p> </div>
            <div className="p-4 border rounded"> <h4 className="font-semibold">Engineering & Permits</h4> <p className="text-sm text-slate-600">Temporary works, calculations, and submissions.</p> </div>
            <div className="p-4 border rounded"> <h4 className="font-semibold">Execution & Monitoring</h4> <p className="text-sm text-slate-600">Supervised crews, toolbox talks, daily reports.</p> </div>
            <div className="p-4 border rounded"> <h4 className="font-semibold">Handover & Compliance</h4> <p className="text-sm text-slate-600">QA/QC, waste tickets, close-out documentation.</p> </div>
          </div>
        </section>

        <footer className="bg-slate-800 text-white py-6">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            <div>© 2025 Taksha Engineering Pte Ltd</div>
            <nav className="space-x-4">
              <a href="/services" className="text-slate-200">Services</a>
              <a href="#projects" className="text-slate-200">Projects</a>
              <a href="/contact" className="text-slate-200">Contact</a>
            </nav>
          </div>
        </footer>
      </main>

    </div>
  )
}

export default Home
