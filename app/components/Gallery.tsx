import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Concept of Photography",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
    tag: "Aerial",
  },
  {
    title: "Real Estate Cinema",
    image:
      "https://images.unsplash.com/photo-1518364538800-6bae3c2dbd92?auto=format&fit=crop&w=800&q=80",
    tag: "Pro",
  },
  {
    title: "Sunset in Motion",
    image:
      "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
    tag: "Nature",
  },
];

export function Gallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              Gallery
            </span>
            <h2 className="text-4xl font-bold mt-2 text-black">A New View</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
            View All
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                <span className="text-xs font-medium bg-gold text-black px-2 py-1 rounded mb-2 inline-block">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold leading-tight">
                  {item.title}
                </h3>
                <div className="h-0.5 w-0 bg-gold mt-2 transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
