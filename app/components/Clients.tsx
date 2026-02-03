"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientsRow1 = [
  {
    name: "Red Bull",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "Nike",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "Apple",
    logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "Netflix",
    logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "Adidas",
    logo: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=200&h=100&fit=crop&auto=format",
  },
];

const clientsRow2 = [
  {
    name: "Sony",
    logo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "Spotify",
    logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "BMW",
    logo: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "Puma",
    logo: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "Canon",
    logo: "https://images.unsplash.com/photo-1606986628171-2de85fb4db5b?w=200&h=100&fit=crop&auto=format",
  },
];

export function Clients() {
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
      <div className="relative mb-8">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...clientsRow1, ...clientsRow1, ...clientsRow1].map(
            (client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[280px] h-[140px] border border-white/10 bg-white/5 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 group relative overflow-hidden"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="relative z-10 text-white font-bold text-xl uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.name}
                </span>
              </div>
            ),
          )}
        </motion.div>
      </div>

      {/* Second Row - Scrolling Left */}
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...clientsRow2, ...clientsRow2, ...clientsRow2].map(
            (client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[280px] h-[140px] border border-white/10 bg-white/5 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 group relative overflow-hidden"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="relative z-10 text-white font-bold text-xl uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.name}
                </span>
              </div>
            ),
          )}
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
