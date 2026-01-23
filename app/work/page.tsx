import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export default function WorkPage() {
  const categories = [
    "All",
    "Commercial",
    "Documentary",
    "Music Video",
    "Corporate",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden pt-32 pb-16">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl text-foreground">
              Our Work
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              A curated collection of our finest projects. Each piece tells a
              unique story, crafted with passion and precision.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Tabs */}
      <Section className="pt-0">
        <Container>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let&apos;s collaborate to create something extraordinary.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
