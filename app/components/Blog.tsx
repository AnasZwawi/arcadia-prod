import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "How to Master Aerial Photography",
    category: "Tips & Tricks",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    date: "Oct 24, 2025",
  },
  {
    title: "Capturing 8K with FONO Drone",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?auto=format&fit=crop&w=600&q=80",
    date: "Oct 18, 2025",
  },
  {
    title: "Built for Speed: Racing Edition",
    category: "Product",
    image:
      "https://images.unsplash.com/photo-1564518086277-2849eb40c732?auto=format&fit=crop&w=600&q=80",
    date: "Oct 12, 2025",
  },
];

export function Blog() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-black">Latest Insight</h2>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.category}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <span>{post.date}</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <span>5 min read</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gold transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-sm font-semibold underline underline-offset-4 decoration-gold">
                Read More
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
