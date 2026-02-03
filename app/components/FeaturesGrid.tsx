import { Wind, Wifi, Battery, Shield, Camera, Cpu } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Aerodynamic Design",
    desc: "Built for speed and stability in all conditions.",
  },
  {
    icon: Wifi,
    title: "Extended Range",
    desc: "Fly further with our new transmission technology.",
  },
  {
    icon: Battery,
    title: "Longer Battery Life",
    desc: "Up to 45 minutes of flight time on a single charge.",
  },
  {
    icon: Shield,
    title: "Obstacle Avoidance",
    desc: "360-degree sensing system for safe flight.",
  },
  {
    icon: Camera,
    title: "8K Cinema Camera",
    desc: "Capture every detail with our advanced sensor.",
  },
  {
    icon: Cpu,
    title: "AI Flight Modes",
    desc: "Intelligent tracking and automated flight paths.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Technology
          </span>
          <h2 className="text-4xl font-bold mt-4 text-black">
            Driven by Drone Durability <br />
            Focus on Built for the Sky <br />
            Content on Camera
          </h2>
          <button className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            View All Specs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-gray-50 p-6 rounded-2xl mb-6 group-hover:bg-black group-hover:text-gold transition-colors duration-300">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
