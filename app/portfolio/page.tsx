"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const allProjects = [
  {
    title: "Urban Rhythms",
    category: "Commercial",
    year: "2024",
    client: "Nike",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Velocity",
    category: "Automotive",
    year: "2023",
    client: "BMW",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "The Silent Summit",
    category: "Documentary",
    year: "2024",
    client: "Red Bull Media",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Neon Dreams",
    category: "Music Video",
    year: "2023",
    client: "Universal Music",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Breaking Point",
    category: "Sports",
    year: "2024",
    client: "Adidas",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Frontier",
    category: "Tech",
    year: "2023",
    client: "Apple",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Raw Essence",
    category: "Fashion",
    year: "2024",
    client: "Puma",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Concrete Jungle",
    category: "Editorial",
    year: "2023",
    client: "Vice Media",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = [
  "All",
  "Commercial",
  "Documentary",
  "Automotive",
  "Music Video",
  "Sports",
  "Tech",
  "Fashion",
  "Editorial",
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-lime selection:text-black">
      {/* Hero Section */}
      <section className="py-32 bg-black text-white border-b border-white/20">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-lime font-mono text-[10px] uppercase tracking-widest">
              Our Work
            </span>
            <h1 className="text-6xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter uppercase mt-6 mb-8">
              Every Frame <br />
              <span className="text-lime">Tells a Story</span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg font-mono uppercase tracking-wide">
              A collection of projects that pushed boundaries
              <br />
              and redefined visual storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-black border-b border-white/20 sticky top-0 z-50 backdrop-blur-sm bg-black/80">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="font-mono text-xs uppercase tracking-widest whitespace-nowrap px-6 py-3 border border-white/20 hover:border-lime hover:bg-lime hover:text-black transition-all duration-300"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
          <div className="space-y-32">
            {allProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="group relative"
              >
                <div className="relative aspect-video w-full overflow-hidden mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-lime/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                    <div>
                      <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-2">
                        {project.title}
                      </h3>
                      <span className="text-lime font-mono uppercase tracking-widest text-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-12">
                      <div className="hidden md:block">
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                          Client
                        </p>
                        <p className="font-bold uppercase text-sm">
                          {project.client}
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                          Year
                        </p>
                        <p className="font-bold uppercase text-sm">
                          {project.year}
                        </p>
                      </div>
                      <button className="bg-lime text-black p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-lime text-black">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              Have a Project <br />
              <span className="text-white">In Mind?</span>
            </h2>
            <p className="font-mono text-sm uppercase tracking-wide mb-12 opacity-60">
              Let&apos;s create something extraordinary together
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-lime font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
