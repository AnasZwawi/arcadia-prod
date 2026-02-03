"use client";

import { motion } from "framer-motion";

const allServices = [
  {
    title: "Video Production",
    desc: "Commercial / Narrative / Documentary",
  },
  {
    title: "Photography",
    desc: "Editorial / Product / Event Coverage",
  },
  {
    title: "Post-Production",
    desc: "Editing / Color Grading / VFX / Sound",
  },
  {
    title: "Creative Direction",
    desc: "Brand Strategy / Art Direction / Concept",
  },
  {
    title: "Live Streaming",
    desc: "Multi-Camera / Events / Broadcasting",
  },
  {
    title: "Audio Production",
    desc: "Sound Design / Mixing / Mastering",
  },
];

export default function ServicesPage() {
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
              Our Expertise
            </span>
            <h1 className="text-6xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter uppercase mt-6 mb-8">
              Full-Spectrum <br />
              <span className="text-lime">Services</span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg font-mono uppercase tracking-wide">
              From concept to delivery, we provide end-to-end production
              <br />
              services that elevate your brand and tell your story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-lime text-black selection:bg-black selection:text-lime">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
          <div className="divide-y divide-black/20">
            {allServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="py-12 group hover:pl-8 transition-all duration-300 cursor-default"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-2 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-widest opacity-60">
                      {service.desc}
                    </p>
                  </div>
                  <span className="font-mono text-sm opacity-40 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    0{idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Fixed Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-fixed grayscale"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border border-white/20 p-12 md:p-24 text-center backdrop-blur-sm bg-black/40"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              Ready to Start <br />
              <span className="text-lime">Your Project?</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-wide mb-12">
              Let's discuss how we can bring your vision to life
            </p>
            <a
              href="#contact"
              className="inline-block bg-lime text-black font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-white transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
