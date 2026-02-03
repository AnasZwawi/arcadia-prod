"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1598899134739-9609cdefdb20?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=600&q=80",
];

const testimonials = [
  {
    name: "Elena Rodriguez",
    role: "Creative Director, Vogue",
    text: "Arcadia Prod brings a level of artistry that is rare in the industry. Their understanding of light and motion is unparalleled.",
  },
  {
    name: "James Chen",
    role: "Marketing Head, TechFlow",
    text: "They didn't just film a commercial; they crafted a visual identity for our brand launch. The results speak for themselves.",
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-dark-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Instagram / BTS */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex md:flex-row flex-col justify-between items-end mb-12 gap-8"
          >
            <div>
              <span className="text-gold font-bold uppercase tracking-widest text-xs">
                Behind The Scenes
              </span>
              <h2 className="text-4xl font-bold mt-4 font-serif">
                Life on Set
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="text-xs font-bold uppercase tracking-widest border-b border-gold pb-1">
                Follow @ArcadiaProd
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative aspect-[4/5] md:aspect-square grayscale hover:grayscale-0 transition-all duration-700"
              >
                <Image
                  src={src}
                  alt="Behind the scenes"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-white/10 pt-24">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-xs">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold mt-4 font-serif mb-8 max-w-sm">
              Trusted by Global Visionaries
            </h2>
          </div>

          <div className="space-y-12">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.2 }}
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif italic text-gray-200 mb-6 leading-relaxed">
                  &quot;{item.text}&quot;
                </p>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
