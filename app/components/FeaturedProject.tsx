"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FeaturedProject() {
  return (
    <section className="py-32 bg-white overflow-hidden text-black">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-full relative z-10">
          {/* Image */}
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            whileInView={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative h-[500px] md:h-[700px] bg-gray-100"
          >
            <Image
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
              alt="Featured Project - Mountain Expedition"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <span className="bg-lime text-black font-bold uppercase tracking-widest text-[10px] px-2 py-1">
                Debut Project
              </span>
              <h3 className="text-5xl md:text-8xl font-bold text-black tracking-tighter mt-6 uppercase leading-[0.9]">
                The Silent <br /> Summit
              </h3>
            </div>

            <p className="text-black leading-relaxed text-xl max-w-md font-medium">
              A raw, handheld documentary following a winter ascent. No scripts,
              no artificial lighting—just the story.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-black py-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                  Client
                </p>
                <p className="font-bold uppercase">Red Bull Media</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                  Role
                </p>
                <p className="font-bold uppercase">Full Production</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-block text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:bg-lime hover:border-transparent px-1 transition-colors"
            >
              Read Case Study
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
