"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioProject } from "@/lib/portfolio";

type LightboxState = {
  project: PortfolioProject;
  imageIndex: number;
} | null;

export default function PortfolioClient({
  initialProjects,
  categories,
}: {
  initialProjects: PortfolioProject[];
  categories: string[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === selectedCategory);

  const openLightbox = (project: PortfolioProject, imageIndex: number) => {
    setLightbox({ project, imageIndex });
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(() => {
    if (!lightbox) return;
    const total = lightbox.project.images.length;
    setLightbox({ ...lightbox, imageIndex: (lightbox.imageIndex + 1) % total });
  }, [lightbox]);

  const goPrev = useCallback(() => {
    if (!lightbox) return;
    const total = lightbox.project.images.length;
    setLightbox({
      ...lightbox,
      imageIndex: (lightbox.imageIndex - 1 + total) % total,
    });
  }, [lightbox]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, goNext, goPrev]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      {/* Filter Section */}
      <section className="py-12 bg-black border-b border-white/20 sticky top-0 z-50 backdrop-blur-sm bg-black/80">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`font-mono text-xs uppercase tracking-widest whitespace-nowrap px-6 py-3 border transition-all duration-300 ${
                  selectedCategory === category
                    ? "border-lime bg-lime text-black"
                    : "border-white/20 hover:border-lime hover:text-lime"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-black text-white min-h-screen">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
          <div className="space-y-48">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, projIdx) => (
                <motion.div
                  key={`${project.category}-${projIdx}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-12"
                >
                  {/* Project Info Header */}
                  <div className="border-b border-white/10 pb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
                    <div>
                      <span className="text-lime font-mono uppercase tracking-[0.2em] text-xs block mb-4">
                        {project.category}
                      </span>
                      <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.8]">
                        {project.title}
                      </h2>
                    </div>
                    <div className="flex gap-12 font-mono text-[10px] uppercase tracking-widest text-white/40">
                      <div>
                        <span className="block mb-2 text-lime/50">
                          Production
                        </span>
                        <span className="text-white">{project.client}</span>
                      </div>
                      <div>
                        <span className="block mb-2 text-lime/50">Year</span>
                        <span className="text-white">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Media Gallery Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Main Featured Media */}
                    <motion.div
                      key={project.images[0]}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => openLightbox(project, 0)}
                      className="md:col-span-8 relative aspect-[16/10] overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} - Main`}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                      <div className="absolute top-8 right-8 text-white/0 group-hover:text-lime transition-colors duration-300">
                        <ArrowUpRight size={32} />
                      </div>
                    </motion.div>

                    {/* Secondary Media Stack */}
                    <div className="md:col-span-4 grid grid-rows-2 gap-4">
                      {project.images.slice(1, 3).map((img, i) => (
                        <motion.div
                          key={img}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                          onClick={() => openLightbox(project, i + 1)}
                          className="relative aspect-video md:aspect-auto overflow-hidden group cursor-pointer"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} - ${i + 2}`}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors duration-700" />
                        </motion.div>
                      ))}
                      {project.images.length === 1 && (
                        <div className="row-span-2 border border-white/5 flex items-center justify-center bg-zinc-950/50">
                          <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 -rotate-90">
                            Arcadia Production
                          </span>
                        </div>
                      )}
                      {project.images.length === 2 && (
                        <div className="border border-white/5 flex items-center justify-center bg-zinc-950/50">
                          <span className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                            Behind the scenes
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Remaining Media Grid */}
                    {project.images.length > 3 && (
                      <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {project.images.slice(3, 7).map((img, i) => (
                          <motion.div
                            key={img}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i, duration: 0.8 }}
                            onClick={() => openLightbox(project, i + 3)}
                            className="relative aspect-square overflow-hidden group cursor-pointer"
                          >
                            <Image
                              src={img}
                              alt={`${project.title} - ${i + 4}`}
                              fill
                              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between px-8 py-6 border-b border-white/10 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="text-lime font-mono text-[10px] uppercase tracking-[0.3em] block mb-1">
                  {lightbox.project.category}
                </span>
                <h3 className="text-white font-bold uppercase tracking-tighter text-xl">
                  {lightbox.project.title}
                </h3>
              </div>
              <div className="flex items-center gap-8">
                <span className="font-mono text-xs text-white/30 uppercase tracking-widest">
                  {lightbox.imageIndex + 1} / {lightbox.project.images.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="text-white/40 hover:text-lime transition-colors duration-200 p-2"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Image */}
            <div
              className="flex-1 relative flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightbox.imageIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-8 md:inset-16"
                >
                  <Image
                    src={lightbox.project.images[lightbox.imageIndex]}
                    alt={`${lightbox.project.title} - ${lightbox.imageIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Buttons */}
              {lightbox.project.images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-4 md:left-8 z-10 p-4 border border-white/10 hover:border-lime hover:text-lime text-white/40 transition-all duration-200 bg-black/50 backdrop-blur-sm"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-4 md:right-8 z-10 p-4 border border-white/10 hover:border-lime hover:text-lime text-white/40 transition-all duration-200 bg-black/50 backdrop-blur-sm"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {lightbox.project.images.length > 1 && (
              <div
                className="shrink-0 border-t border-white/10 px-8 py-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex gap-3 overflow-x-auto scrollbar-hide justify-center">
                  {lightbox.project.images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() =>
                        setLightbox({ ...lightbox, imageIndex: i })
                      }
                      className={`relative shrink-0 w-16 h-12 overflow-hidden transition-all duration-200 border-2 ${
                        i === lightbox.imageIndex
                          ? "border-lime opacity-100"
                          : "border-transparent opacity-40 hover:opacity-70"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
