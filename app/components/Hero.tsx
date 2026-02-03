"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center">
      {/* Background - RAW / Gritty */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2600&auto=format&fit=crop"
          alt="Abstract Cinema Lighting"
          fill
          className="object-cover grayscale contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-12 flex flex-col justify-end h-full pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter uppercase mb-8">
            Defining <br />
            The <span className="text-lime">New</span> Standard
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-white/20 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-gray-400 max-w-sm font-mono text-xs md:text-sm uppercase tracking-wider"
          >
            Arcadia is a new-wave production house. <br />
            We strip away the excess to reveal the <br />
            core of your narrative.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex items-center gap-12"
          >
            <div className="flex flex-col">
              <span className="text-lime text-3xl md:text-4xl font-bold">
                4K/8K
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                Pipeline Ready
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lime text-3xl md:text-4xl font-bold">
                RAW
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                Workflow
              </span>
            </div>

            <button className="bg-lime text-black rounded-full p-4 hover:scale-110 transition-transform">
              <ArrowDownRight size={24} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
