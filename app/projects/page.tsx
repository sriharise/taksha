"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// TEMP placeholder project data
const PROJECTS = [
  {
    title: "Town Council Painting Work",
    service: "Painting Works",
    status: "Completed",
    images: ["/placeholder/project-1.jpg", "/placeholder/project-2.jpg", "/placeholder/project-3.jpg"],
  },
  {
    title: "Tension Membrane Installation",
    service: "Tension Membrane Works",
    status: "Ongoing",
    images: ["/placeholder/project-4.jpg", "/placeholder/project-5.jpg"],
  },
  {
    title: "Roofing Replacement Project",
    service: "Roofing Works",
    status: "Completed",
    images: ["/placeholder/project-6.jpg", "/placeholder/project-7.jpg"],
  },
];

const FILTERS = ["All", "Completed", "Ongoing"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter((p) =>
    activeFilter === "All" ? true : p.status === activeFilter
  );

  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--taksha-blue)] to-[var(--taksha-orange)] bg-clip-text text-transparent mb-4">
            Our Projects
          </h1>
          <p className="text-gray-600 max-w-3xl">
            A selection of ongoing and completed projects delivered for Town Councils, hospitals, schools, and commercial clients across Singapore.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section>
        <div className="container mx-auto px-4 py-8 max-w-5xl flex gap-4 flex-wrap">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                activeFilter === filter
                  ? "bg-[var(--taksha-orange)] text-white border-[var(--taksha-orange)]"
                  : "border-gray-300 text-gray-600 hover:border-[var(--taksha-orange)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.title} className="border rounded-xl overflow-hidden hover:shadow-lg transition">
                {/* Image / carousel placeholder */}
                <div className="relative h-56 bg-gray-200 flex items-center justify-center text-gray-400">
                  <span>Carousel Placeholder</span>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-[var(--taksha-blue)] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">{project.service}</p>

                  <span
                    className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--taksha-blue)] text-white">
        <div className="container mx-auto px-4 py-16 max-w-5xl text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Looking for a contractor with proven experience?
          </h2>
          <p className="text-white/80 mb-6">
            Speak to our team today to discuss your project requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-lg bg-[var(--taksha-orange)] text-white font-semibold hover:opacity-90"
          >
            Request Site Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
