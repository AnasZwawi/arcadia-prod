"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/20">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[10rem] font-bold tracking-tighter uppercase leading-none hover:text-lime transition-colors duration-500 cursor-pointer"
          >
            Let&apos;s <br /> Create
          </motion.h2>

          <div className="flex flex-col gap-8 text-right">
            <a
              href="mailto:contact@arcadiaprod.com"
              className="text-2xl font-bold hover:text-lime underline decoration-lime underline-offset-8 transition-colors"
            >
              contact@arcadiaprod.com
            </a>
            <div className="flex gap-4 justify-end font-mono text-xs uppercase tracking-widest text-gray-500">
              <Link href="#" className="hover:text-white">
                Instagram
              </Link>
              <Link href="#" className="hover:text-white">
                Facebook
              </Link>
              <Link href="#" className="hover:text-white">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-600 font-mono">
          <p>&copy; 2026 Arcadia Inc.</p>
          <p>Tunis, Tunisia</p>
        </div>
      </div>
    </footer>
  );
}
