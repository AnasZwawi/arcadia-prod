"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize stars
    const initStars = () => {
      const starCount = 150;
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    initStars();

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      starsRef.current.forEach((star) => {
        // Update position
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.offsetWidth;
        if (star.x > canvas.offsetWidth) star.x = 0;
        if (star.y < 0) star.y = canvas.offsetHeight;
        if (star.y > canvas.offsetHeight) star.y = 0;

        // Pulsing effect
        star.opacity = 0.3 + Math.sin(Date.now() * 0.001 + star.x) * 0.3;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(202, 240, 68, ${star.opacity})`;
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 3,
        );
        gradient.addColorStop(0, `rgba(202, 240, 68, ${star.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(202, 240, 68, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw connections
      starsRef.current.forEach((star, i) => {
        starsRef.current.slice(i + 1).forEach((otherStar) => {
          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.strokeStyle = `rgba(202, 240, 68, ${
              (1 - distance / 100) * 0.15
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-[100dvh] bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">
        {/* Left: Canvas with Stars */}
        <div className="relative overflow-hidden border-b lg:border-b-0 min-h-[100vh] lg:min-h-full">
          {/* Canvas Background - Fixed */}
          <div className="absolute inset-0">
            <StarCanvas />
          </div>

          {/* Overlay Content - Remove justify-end, add proper padding */}
          <div className="relative mt-24 z-10 p-6 sm:p-12 pt-20 pb-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent min-h-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-lime font-mono text-[10px] uppercase tracking-widest">
                Get In Touch
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mt-4 tracking-tighter uppercase leading-[0.9] mb-12">
                Let&apos;s Create <br />
                <span className="text-lime">Together</span>
              </h1>

              <div className="space-y-6 border-l border-lime/30 pl-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-lime mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:contact@arcadiaprod.com"
                      className="text-white hover:text-lime transition-colors"
                    >
                      contact@arcadiaprod.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-lime mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+21624500674"
                      className="text-white hover:text-lime transition-colors"
                    >
                      +216 24 500 674
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-lime mt-1" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                      Location
                    </p>
                    <p className="text-white">
                      IMM SAADI, RUE 10 DECEMBRE, EL MENZH 4 Tunis,
                      <br />
                      Tunisia
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8 border border-white/20 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.859797183117!2d10.183418500000002!3d36.8458337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35c5deb56977%3A0xb063cad9c6503664!2sArcadia%20Prod!5e0!3m2!1sen!2stn!4v1770745819723!5m2!1sen!2stn"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex items-center justify-center p-6 sm:p-12 lg:p-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-xl"
          >
            <div className="mb-12 mt-12">
              <span className="text-lime font-mono text-[10px] uppercase tracking-widest">
                Send Message
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tighter uppercase leading-[0.9]">
                Start Your <br />
                Project
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-gray-500 uppercase tracking-widest mb-3 font-mono"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 focus:border-lime px-6 py-4 text-white placeholder-gray-600 transition-colors outline-none"
                  placeholder="Mohamed Ben Mohamed"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-gray-500 uppercase tracking-widest mb-3 font-mono"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 focus:border-lime px-6 py-4 text-white placeholder-gray-600 transition-colors outline-none"
                  placeholder="mohamed@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-xs text-gray-500 uppercase tracking-widest mb-3 font-mono"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 focus:border-lime px-6 py-4 text-white placeholder-gray-600 transition-colors outline-none"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-gray-500 uppercase tracking-widest mb-3 font-mono"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border border-white/20 focus:border-lime px-6 py-4 text-white placeholder-gray-600 transition-colors outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-lime text-black font-bold uppercase tracking-widest text-sm py-5 px-8 hover:bg-white transition-colors flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>

            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest text-center mt-8">
              We typically respond within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
