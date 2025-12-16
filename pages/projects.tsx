import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header'

const projects = [
  {
    id: 1,
    title: 'Downtown Mall Selective Demolition',
    summary: '12 weeks; night shifts; zero incidents. Careful sequencing in a live retail environment.',
    image: '/images/project1.svg'
  },
  {
    id: 2,
    title: 'Pharmaceutical Plant Reinstatement',
    summary: 'GMP environment; strict dust and contamination controls during reinstatement.',
    image: '/images/project2.svg'
  },
  {
    id: 3,
    title: 'Grade-A Office Make-Good',
    summary: '60,000 sq ft refurbishment and reinstatement delivered on a tight program.',
    image: '/images/project3.svg'
  },
  {
    id: 4,
    title: 'Tension Membrane Canopy Installation',
    summary: 'Design–supply–install of a large-span membrane canopy for an industrial precinct.',
    image: '/images/project4.svg'
  },
  {
    id: 5,
    title: 'Fire-Rated Partition Upgrade',
    summary: 'Fire-rated glass and partition installations across multi-storey office levels.',
    image: '/images/project5.svg'
  }
]

const Projects: NextPage = () => {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Head>
        <title>Projects — Taksha Engineering Pte Ltd</title>
        <meta name="description" content="Featured projects by Taksha Engineering: demolition, reinstatement, tension membranes, fire-rated systems and more." />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-primary">Featured Projects</h1>
          <p className="mt-3 text-lg text-slate-700">A selection of recent projects showcasing our capability across demolition, reinstatement, fire-rated systems, tension membranes and specialist access works.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.id} className="border rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow bg-white">
              <div className="w-full h-48 bg-slate-100 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${p.image})`, opacity: 0.18 }} />
                <div className="relative z-10 p-4 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center w-20 h-20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-primary">
                    <path fill="currentColor" d="M10 8.5v7l6-3.5-6-3.5z" />
                    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="/contact" className="text-primary font-medium">Request Similar Work</a>
                  <span className="text-sm text-slate-500">Case #{p.id}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-accent text-slate-900 px-6 py-3 rounded-md font-medium">Get a Quick Quote</a>
        </div>
      </main>
    </div>
  )
}

export default Projects
