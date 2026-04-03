"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Clients({ logos }: { logos: string[] }) {
  const half = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, half);
  const row2 = logos.slice(half);

  return (
    <section className="py-32 bg-black text-white border-t border-white/20 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-lime font-mono text-[10px] uppercase tracking-widest">
            Trusted By
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 tracking-tighter uppercase leading-[0.9]">
            Who We&apos;ve <br /> Worked With
          </h2>
        </motion.div>
      </div>

      {/* First Row - Scrolling Right */}
      <div className="relative mb-8 overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...row1, ...row1, ...row1].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[160px] h-[160px] border border-white/10 bg-white/5 relative overflow-hidden group"
            >
              <Image
                src={logo}
                alt={`Client ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Scrolling Left */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: [-1920, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...row2, ...row2, ...row2].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[160px] h-[160px] border border-white/10 bg-white/5 relative overflow-hidden group"
            >
              <Image
                src={logo}
                alt={`Client ${idx + 1}`}
                fill
                className="object-cover "
              />
            </div>
          ))}
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 font-mono text-xs uppercase tracking-widest text-center mt-16"
      >
        And many more brands pushing creative boundaries
      </motion.p>
    </section>
  );
}
