import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { FeaturedProject } from "./components/FeaturedProject";
import Portfolio from "./components/Portfolio";
import { Services } from "./components/Services";
import { Clients } from "./components/Clients";
import { AboutUs } from "./components/About";
import { Chat } from "./components/Chat";

import { getPortfolioData } from "@/lib/portfolio";

export default function Home() {
  const { projects } = getPortfolioData();
  // Show first 3 projects on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-lime selection:text-black overflow-x-hidden">
      <Chat />
      <Hero />
      <AboutUs />
      <Process />
      <FeaturedProject />
      <Services />
      <Clients />
      <Portfolio items={featuredProjects} />
    </main>
  );
}
