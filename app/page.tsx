import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { FeaturedProject } from "./components/FeaturedProject";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Clients } from "./components/Clients";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-lime selection:text-black overflow-x-hidden">
      <Hero />
      <Process />
      <FeaturedProject />
      <Services />
      <Clients />
      <Portfolio />
    </main>
  );
}
