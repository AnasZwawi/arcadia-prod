"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 py-8 px-6 sm:px-12 mix-blend-difference"
    >
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-white uppercase group"
        >
          ARCADIA{" "}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90">
          <Link href="#" className="hover:text-lime transition-colors">
            Work
          </Link>
          <Link href="#" className="hover:text-lime transition-colors">
            Process
          </Link>
          <Link href="#" className="hover:text-lime transition-colors">
            Services
          </Link>
          <Link href="#" className="hover:text-lime transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#"
            className="border border-white/20 text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-lime hover:text-black hover:border-lime transition-all"
          >
            Lets Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black z-40 flex items-center justify-center"
          >
            <button
              className="absolute top-8 right-6 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col gap-8 text-white text-center">
              <Link
                href="#"
                className="hover:text-lime text-3xl font-bold tracking-tighter uppercase"
                onClick={() => setIsOpen(false)}
              >
                WORK
              </Link>
              <Link
                href="#"
                className="hover:text-lime text-3xl font-bold tracking-tighter uppercase"
                onClick={() => setIsOpen(false)}
              >
                PROCESS
              </Link>
              <Link
                href="#"
                className="hover:text-lime text-3xl font-bold tracking-tighter uppercase"
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="#"
                className="hover:text-lime text-3xl font-bold tracking-tighter uppercase"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
