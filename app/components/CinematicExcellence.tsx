"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export function CinematicExcellence() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-bold uppercase tracking-widest text-xs">
            Excellence
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-8 text-black font-serif leading-tight">
            The Art of <br />
            Cinematic Motion
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Every frame matters. We utilize industry-leading equipment from RED
            and Arri, combined with precise camera movement systems, to deliver
            visuals that are technically flawless and emotionally resonant.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col gap-2">
              <span className="text-gold text-4xl font-bold font-serif">
                4K+
              </span>
              <span className="text-xs text-black uppercase tracking-widest">
                Resolution Standard
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gold text-4xl font-bold font-serif">
                100%
              </span>
              <span className="text-xs text-black uppercase tracking-widest">
                Client Satisfaction
              </span>
            </div>
          </div>

          <button className="bg-black text-white px-8 py-4 uppercase tracking-widest text-xs font-bold flex items-center gap-4 group hover:bg-gold hover:text-black transition-all">
            Our Equipment
            <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-[600px] bg-gray-200 rounded-none overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1588483977959-badc9893d43a?auto=format&fit=crop&w=1000&q=80"
            alt="Cinema Camera Rig"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
}
