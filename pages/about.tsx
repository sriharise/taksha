import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header'

const About: NextPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Taksha Engineering Pte Ltd',
    telephone: '+65 6970 9355',
    email: 'taksha.eng@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Lorong Bakar Batu, #02-01',
      addressLocality: 'Singapore',
      postalCode: '348745'
    },
    url: 'https://example.com',
    description: 'Taksha Engineering Pte Ltd — Specialists in demolition, repair & redecoration, tension membranes, fire-rated systems, and reinstatement. BCA Registered & ISO certified.'
  }

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Head>
        <title>About Taksha Engineering Pte Ltd — Trusted Singapore Construction Specialists</title>
        <meta name="description" content="Taksha Engineering Pte Ltd (est. 2017) delivers safe, high-quality demolition, repair & redecoration, tension membranes, fire-rated systems, and reinstatement works across Singapore." />
        <meta name="keywords" content="Taksha Engineering, demolition Singapore, fire-rated glass, tension membrane, repairs, reinstatement, bird netting, IRATA" />
        <meta property="og:title" content="Taksha Engineering — Trusted Singapore Construction Specialists" />
        <meta property="og:description" content="Safe, compliant and reliable engineering services: demolition, reinstatement, fire-rated systems, tension membranes and more." />
        <meta property="og:image" content="/images/hero.svg" />
        <meta property="og:type" content="business.business" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://example.com/about" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl font-extrabold text-primary">About Us</h1>
              <p className="mt-3 text-lg text-slate-700">Taksha Engineering Pte Ltd — established 2017. We deliver reliable, safe and high-quality engineering solutions across residential, commercial and industrial projects in Singapore.</p>
            </div>

            <div className="space-y-8">
              <section className="bg-slate-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">TAKSHA ENGINEERING PTE LTD</h2>
                <p className="mt-3 text-slate-700">Established in <strong>2017</strong>, <strong>Taksha Engineering Pte Ltd</strong> is a Singapore-based multidisciplinary construction company delivering <strong>reliable, safe, and high-quality engineering solutions</strong> across residential, commercial, and industrial projects.</p>
                <p className="mt-3 text-slate-700">With a strong foundation in <strong>specialised construction trades</strong>, we are known for our ability to execute complex works with precision, professionalism, and strict adherence to safety standards. Our experienced workforce, certified systems, and hands-on management approach ensure consistent results on every project we undertake.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary">Who We Are</h3>
                <p className="mt-3 text-slate-700">Taksha Engineering is built on the principles of <strong>quality workmanship, safety compliance, and customer satisfaction</strong>. Over the years, we have grown into a trusted contractor capable of handling projects that demand technical expertise, careful planning, and efficient execution.</p>
                <p className="mt-2 text-slate-700">We work closely with building owners, main contractors, consultants, and facility managers to deliver solutions that are <strong>practical, durable, and cost-effective</strong>.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary">Our Expertise</h3>
                <p className="mt-3 text-slate-700">We specialise in a wide range of construction and maintenance services, including:</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border rounded">
                    <ul className="list-disc ml-5 text-slate-700">
                      <li><strong>Repair & Redecoration Works</strong></li>
                      <li><strong>Waterproofing Installation</strong></li>
                      <li><strong>General Construction & Demolition Works</strong></li>
                      <li><strong>Rope Access (IRATA) Works</strong></li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded">
                    <ul className="list-disc ml-5 text-slate-700">
                      <li><strong>Suspended Scaffold (Gondola) Works</strong></li>
                      <li><strong>Steel Works & Reinstatement</strong></li>
                      <li><strong>Aluminium, Canopy & Architectural Works</strong></li>
                      <li><strong>Bird Netting Solutions</strong></li>
                      <li><strong>Fire-Rated Glass, Ceiling & Partition Works</strong></li>
                      <li><strong>Tension Membrane Installation</strong></li>
                    </ul>
                  </div>
                </div>
                <p className="mt-3 text-slate-600">Our team is equipped to work at height, in confined spaces, and in live operational environments with minimal disruption.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary">Our Workforce & Capabilities</h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold">Rope Access Team</h4>
                    <ul className="mt-2 text-slate-700 list-disc ml-5">
                      <li>IRATA Level 3 – 2 personnel</li>
                      <li>IRATA Level 2 – 1 personnel</li>
                      <li>IRATA Level 1 – 15 personnel</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold">Gondola Team</h4>
                    <ul className="mt-2 text-slate-700 list-disc ml-5">
                      <li>Gondola Supervisors – 5 personnel</li>
                      <li>Gondola Riggers – 10 personnel</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold">Safety & Support</h4>
                    <ul className="mt-2 text-slate-700 list-disc ml-5">
                      <li>Certified First Aiders – 2 personnel</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-3 text-slate-600">All personnel are trained to comply with Singapore’s workplace safety requirements and site-specific regulations.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary">Safety, Quality & Compliance</h3>
                <p className="mt-3 text-slate-700">Taksha Engineering operates with a strong focus on <strong>workplace safety, quality control, and regulatory compliance</strong>.</p>
                <div className="mt-4 p-4 border rounded bg-slate-50">
                  <h4 className="font-semibold">Certifications & Accreditations</h4>
                  <ul className="mt-2 list-disc ml-5 text-slate-700">
                    <li><strong>BCA Registered Contractor</strong>
                      <ul className="list-disc ml-5">
                        <li>CR09 – Repairs & Redecoration (L3)</li>
                        <li>CR13 – Waterproofing Installation (L1)</li>
                      </ul>
                    </li>
                    <li><strong>bizSAFE STAR Certified</strong></li>
                    <li><strong>ISO 45001:2018</strong> – Occupational Health & Safety</li>
                    <li><strong>ISO 9001:2015</strong> – Quality Management System</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary">Why Choose Taksha Engineering?</h3>
                <ul className="mt-3 list-none space-y-2">
                  <li className="flex items-start gap-3"><span className="text-accent">✔</span><span className="text-slate-700">Proven experience across diverse construction trades</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent">✔</span><span className="text-slate-700">Skilled, certified, and safety-trained workforce</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent">✔</span><span className="text-slate-700">Strong compliance with BCA and MOM requirements</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent">✔</span><span className="text-slate-700">Reliable project delivery and responsive communication</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent">✔</span><span className="text-slate-700">Focus on long-term performance and durability</span></li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary">Our Commitment</h3>
                <p className="mt-3 text-slate-700">At Taksha Engineering, every project is approached with the same dedication — regardless of size or complexity. We are committed to delivering <strong>safe execution, quality finishes, and timely completion</strong>, ensuring our clients receive value they can depend on.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary">Get in Touch</h3>
                <p className="mt-3 text-slate-700">Have a project in mind or need expert advice?</p>
                <p className="mt-2 text-sm"><strong>Phone:</strong> +65 6970 9355<br /><strong>Email:</strong> <a href="mailto:taksha.eng@gmail.com" className="text-primary">taksha.eng@gmail.com</a></p>
              </section>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="p-6 border rounded-lg bg-white shadow-sm">
                <h4 className="text-lg font-semibold">Contact</h4>
                <p className="mt-2 text-slate-700">Have a project in mind or need expert advice?</p>
                <p className="mt-3 text-sm"><strong>Phone:</strong> +65 6970 9355<br /><strong>Email:</strong> <a href="mailto:taksha.eng@gmail.com" className="text-primary">taksha.eng@gmail.com</a></p>
                <a href="#contact" className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md">Request a Quote</a>
              </div>

              <div className="p-4 border rounded bg-slate-50 text-sm text-slate-700">
                <strong>Certifications</strong>
                <ul className="mt-2 list-disc ml-5">
                  <li>BCA Registered • CR09 / CR13</li>
                  <li>bizSAFE STAR</li>
                  <li>ISO 45001 / ISO 9001</li>
                </ul>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default About
