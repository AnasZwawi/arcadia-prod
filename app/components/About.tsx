"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ------------------ CountUp Component ------------------ */
function CountUp({ to, duration = 1.5 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const value = useMotionValue(0);
  const spring = useSpring(value, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    if (inView) {
      value.set(to);
    }
  }, [inView, to, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [spring]);

  return <span ref={ref}>0</span>;
}

/* ------------------ About Us Section ------------------ */
export function AboutUs() {
  return (
    <section className="py-32 bg-black text-white border-t border-white/20">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-lime font-mono text-[10px] uppercase tracking-widest">
              About Us
            </span>

            <h2 className="text-5xl md:text-7xl font-bold mt-4 tracking-tighter uppercase leading-[0.9] mb-12">
              We Are <br /> Arcadia <span className="text-lime">Prod</span>
            </h2>

            <div className="space-y-8 border-l border-white/20 pl-8">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Arcadia Prod is a creative production studio providing visual
                content for companies and institutions.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                We produce video, photography, and motion design with a focus on
                clarity, consistency, and quality.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                We support our clients throughout the production process, from
                planning to final delivery.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
              <div>
                <span className="text-lime text-3xl md:text-4xl font-bold block">
                  <CountUp to={150} />+
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mt-2">
                  Projects Delivered
                </span>
              </div>

              <div>
                <span className="text-lime text-3xl md:text-4xl font-bold block">
                  <CountUp to={45} />+
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mt-2">
                  Clients Worldwide
                </span>
              </div>

              <div>
                <span className="text-lime text-3xl md:text-4xl font-bold block">
                  <CountUp to={5} />+
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mt-2">
                  Years Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative aspect-[9/9] bg-gray-900 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
                  alt="Production Studio"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border border-lime/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
