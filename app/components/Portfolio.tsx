"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type PortfolioItem = {
  title: string;
  category: string;
  year: string;
  image: string;
};

const items: PortfolioItem[] = [
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

export default function Portfolio() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex justify-between items-end mb-24 border-b border-white/20 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-lime font-mono text-[10px] uppercase tracking-widest">
              Featured Projects
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mt-4 leading-[0.9]">
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

        {/* Works */}
        <div className="space-y-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Link
                href="/portfolio"
                className="block group relative h-[250px] w-full overflow-hidden"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Persistent dark gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                {/* Text overlay — bottom left */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <span className="text-lime font-mono uppercase tracking-widest text-xs md:text-sm block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
                    {item.title}
                  </h3>
                </div>

                {/* Year — bottom right */}
                <div className="absolute bottom-0 right-0 p-8 md:p-12">
                  <span className="text-gray-400 font-mono text-sm hidden md:block">
                    {item.year}
                  </span>
                </div>

                {/* Arrow — top right, appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <div className="bg-lime text-black p-3 rounded-full">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                {/* Top border lime reveal on hover */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-lime group-hover:w-full transition-all duration-700" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile "View All" link */}
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
