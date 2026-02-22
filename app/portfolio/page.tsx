import { getPortfolioData } from "@/lib/portfolio";
import PortfolioClient from "./PortfolioClient";

export default function PortfolioPage() {
  const { categories, projects } = getPortfolioData();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-lime selection:text-black">
      {/* Hero Section */}
      <section className="py-32 bg-black text-white border-b border-white/20">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
          <div>
            <span className="text-lime font-mono text-[10px] uppercase tracking-widest">
              Our Work
            </span>
            <h1 className="text-6xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter uppercase mt-6 mb-8">
              Every Frame <br />
              <span className="text-lime">Tells a Story</span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg font-mono uppercase tracking-wide">
              A collection of projects that pushed boundaries
              <br />
              and redefined visual storytelling.
            </p>
          </div>
        </div>
      </section>

      <PortfolioClient initialProjects={projects} categories={categories} />

      {/* CTA Section */}
      <section className="py-32 bg-lime text-black">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-12 text-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              Have a Project <br />
              <span className="text-white">In Mind?</span>
            </h2>
            <p className="font-mono text-sm uppercase tracking-wide mb-12 opacity-60">
              Let&apos;s create something extraordinary together
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-lime font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-black transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
