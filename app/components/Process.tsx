"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Concept",
    desc: "We deconstruct the brief to find the core narrative.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "02",
    title: "Capture",
    desc: "High-fidelity production with an agile, skeleton crew.",
    image:
      "https://images.unsplash.com/photo-1598899134739-9609cdefdb20?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "03",
    title: "Craft",
    desc: "Post-production that shapes the final emotional impact.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=600&q=80",
  },
];

export function Process() {
  return (
    <section className="py-32 bg-dark-bg text-white">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-white/20 pb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-lime font-mono text-[10px] uppercase tracking-widest">
              Our Method
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mt-4 tracking-tighter uppercase leading-[0.9]">
              The Arcadia <br /> Process
            </h2>
          </motion.div>
          <p className="text-gray-400 max-w-sm text-sm font-mono uppercase tracking-wide text-right hidden md:block">
            We don&apos;t just shoot. <br />
            We engineer visual experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] bg-gray-900 mb-8 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 text-lime font-bold text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {step.num}
                </div>
              </div>
              <div className="border-t border-white/20 pt-6 group-hover:border-lime transition-colors duration-500">
                <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm font-mono max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
