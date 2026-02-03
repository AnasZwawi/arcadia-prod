import Image from "next/image";
import { MoveRight, Check, Zap } from "lucide-react";

export function AerialPrecision() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black">
            The Art of Aerial Precision
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Experience the skies like never before. Our drones are engineered
            for stability, speed, and silence, ensuring every shot is a
            masterpiece. Whether you are a professional or an enthusiast,
            precision is at your fingertips.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col gap-2">
              <span className="text-gold text-3xl font-bold">30+</span>
              <span className="text-sm text-gray-500 font-medium">
                Patents Approved
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gold text-3xl font-bold">100%</span>
              <span className="text-sm text-gray-500 font-medium">
                User Satisfaction
              </span>
            </div>
          </div>

          <button className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-2 group hover:bg-gray-800 transition-colors">
            Learn More
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] lg:h-[500px] bg-[#FDF6E3] rounded-3xl overflow-hidden flex items-center justify-center">
          <div className="absolute top-8 right-8 z-10 bg-white p-4 rounded-xl shadow-sm">
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-gold" /> Stable Flight
              </li>
              <li className="flex items-center gap-2">
                <Zap size={16} className="text-gold" /> Fast Charging
              </li>
            </ul>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1507581134296-e15678aa7462?auto=format&fit=crop&w=1000&q=80"
            alt="Precision Drone"
            width={800}
            height={800}
            className="object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
