"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
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
];

export function Services() {
  return (
    <section className="py-32 bg-lime text-black selection:bg-black selection:text-lime">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-12"
            >
              What <br /> We Do
            </motion.h2>
            <p className="font-mono text-sm max-w-sm uppercase tracking-wide border-l border-black pl-6 mb-12">
              A holistic approach to production. <br />
              We handle everything in-house to ensure <br />
              the vision remains pure.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b-2 text-black border-black pb-1  px-1 transition-all duration-300 group"
            >
              View All Services
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
          </div>

          <div className="divide-y divide-black/20">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="py-12 group hover:pl-8 transition-all duration-300 cursor-default"
              >
                <h3 className="text-4xl font-bold uppercase tracking-tight mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest opacity-60">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
