import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1508614589041-895b8cba7e32?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518364538800-6bae3c2dbd92?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507581134296-e15678aa7462?auto=format&fit=crop&w=600&q=80",
];

export function CommunitySection() {
  return (
    <section className="py-24 bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <span className="text-gold font-medium uppercase tracking-wider text-sm">
          Community
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
          See the World Through Our Lens
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Join thousands of creators who are pushing the boundaries of what is
          possible. Share your story with #FONODrone.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors mb-20">
          Join the Community
        </button>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Community shot ${idx}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
