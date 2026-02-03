import Image from "next/image";
import { MoveRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 px-6 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] group">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
          alt="Atmospheric Landscape"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-8">
            Every Great Story Deserves <br />
            to be told from a <br />
            Perspective.
          </h2>
          <p className="text-gray-200 max-w-lg mb-10 text-lg">
            Unlock new creative possibilities with our advanced autonomous
            flight modes.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gold transition-colors">
            Get Started
            <MoveRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
