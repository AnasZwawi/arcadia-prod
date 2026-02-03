import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Robert Fox",
    role: "Photographer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "The stability and image quality are unmatched. It has completely transformed my workflow.",
  },
  {
    name: "Jenny Wilson",
    role: "Videographer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "I was amazed by the battery life. I can shoot for hours without worrying about landing.",
  },
  {
    name: "Guy Hawkins",
    role: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    text: "The AI tracking features are a game changer for solo shooters like me. Highly recommended!",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold mt-2 text-black">
              What our partners and <br />
              users say about us.
            </h2>
          </div>
          <button className="hidden md:block bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
            Read All Reviews
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-gold/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-lg text-gray-700 font-medium mb-8 leading-relaxed">
                &quot;{item.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-black">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
