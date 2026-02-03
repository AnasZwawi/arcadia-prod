"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    title: "Urban Rhythms",
    category: "Commercial",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Velocity",
    category: "Automotive",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
];

export function Portfolio() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-end mb-24 border-b border-white/20 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-lime font-mono text-[10px] uppercase tracking-widest">
              Featured Projects
            </span>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mt-4 leading-[0.9]">
              Selected <br /> Works
            </h2>
          </motion.div>

          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:bg-lime hover:text-black hover:border-transparent px-1 transition-all duration-300 group"
          >
            View All Projects
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </div>

        <div className="space-y-32">
          {items.map((item, idx) => (
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
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-lime/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
              </div>

              <div className="flex justify-between items-start border-t border-white/20 pt-6">
                <div>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-2">
                    {item.title}
                  </h3>
                  <span className="text-lime font-mono uppercase tracking-widest text-sm">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center gap-12">
                  <span className="text-gray-500 font-mono text-sm hidden md:block">
                    {item.year}
                  </span>
                  <button className="bg-lime text-black p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center md:hidden"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:bg-lime hover:text-black hover:border-transparent px-1 transition-all duration-300 group"
          >
            View All Projects
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
