import Image from "next/image";
import { Star } from "lucide-react";

export function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        <span className="text-gray-400 text-6xl md:text-8xl font-bold opacity-10 absolute left-0 select-none pointer-events-none">
          Example 3
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">
          {/* Image */}
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80"
              alt="Drone Perspective"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-black">Example 3</h3>
            <p className="text-gray-600">
              Discover the cutting-edge technology behind our latest model.
              Designed for professionals who demand the best in aerial
              photography.
            </p>

            <div className="flex items-center gap-2 text-gold font-bold">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <span className="text-black ml-2 font-normal">(4.9/5)</span>
            </div>

            <a
              href="#"
              className="text-sm font-semibold underline underline-offset-4 decoration-gold"
            >
              View Specs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
