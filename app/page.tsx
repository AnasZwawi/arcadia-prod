import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight, Camera, MonitorDot } from "lucide-react";
import Link from "next/link";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactForm } from "@/components/ContactForm";
import NextImage from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import testimonialsData from "@/data/testimonials.json";
import projects from "@/data/projects.json";
import brands from "@/data/brands.json";

// Type the testimonials data
interface MediaItem {
  type: "image" | "video";
  url: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  media: MediaItem[];
}

const testimonials = testimonialsData as Testimonial[];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden bg-black pt-16">
        {/* Background Image */}
        <div className="absolute bottom-0 inset-0 z-0">
          <NextImage
            src="/images/hero-projector1.jpg"
            alt="Vintage film projector"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-6xl font-semibold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards text-white">
              Capturing <br className="hidden sm:block" />
              <span className="text-white/60">Life in Motion.</span>
            </h1>
            <p className="max-w-xl text-lg text-white/70 sm:text-xl md:text-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
              Arcadia Prod is a premier video production and photography studio.
              We craft visual stories that resonate with clarity and elegance.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-forwards">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                View Work
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Trusted By Section */}
      <Section className="bg-muted/20">
        <Container>
          <p className="text-center text-sm font-medium text-muted-foreground mb-12 tracking-wide uppercase">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {brands.map((brand) => (
              <div
                key={brand}
                className="text-2xl font-semibold text-foreground"
              >
                {brand}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Selected Work Section */}
      <Section id="work">
        <Container>
          <div className="mb-16 flex items-end justify-between">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Selected Work
            </h2>
            <Link
              href="/work"
              className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex items-center gap-1"
            >
              View all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
              />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/work"
              className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              View all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-muted/20">
        <Container>
          <h2 className="mb-16 text-3xl font-medium tracking-tight sm:text-4xl text-center">
            What Our Clients Say
          </h2>

          {/* Masonry-style 4 Column Layout */}
          <div className="columns-1 md:columns-4 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                media={testimonial.media}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section id="services">
        <Container>
          <div className="mb-16 flex items-end justify-between">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Expertise
            </h2>
            <Link
              href="/services"
              className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex items-center gap-1"
            >
              View all services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-12 sm:grid-cols-3">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <Camera className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-medium">Production</h3>
              <p className="text-muted-foreground leading-relaxed">
                High-end video and photo shooting. From commercial
                advertisements to artistic portraiture, we handle the entire
                production process with precision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <MonitorDot className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-medium">Post-Production</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional editing, color grading, and sound design. We sculpt
                the raw footage into a compelling narrative that captivates your
                audience.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <Camera className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-medium">Content Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Helping brands define their visual identity. We work with you to
                plan content that aligns with your marketing goals and brand
                voice.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Founder's Note Section */}
      <Section className="bg-muted/20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div className="aspect-square rounded-2xl bg-secondary overflow-hidden">
              {/* Placeholder for founder image */}
              <div className="w-full h-full bg-gradient-to-br from-secondary to-muted" />
            </div>
            <div className="space-y-6">
              <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Founder&apos;s Note
              </p>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Creating Stories That Matter
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When I founded Arcadia Prod, my vision was simple: to create
                  visual content that doesn&apos;t just look beautiful, but
                  tells meaningful stories that resonate with people.
                </p>
                <p>
                  Over the years, we&apos;ve had the privilege of working with
                  incredible brands and individuals, each with their own unique
                  story to tell. Our approach combines artistic vision with
                  technical excellence, ensuring every project we undertake
                  exceeds expectations.
                </p>
                <p>
                  Thank you for considering us to bring your vision to life.
                </p>
              </div>
              <div className="pt-4">
                <p className="font-medium text-foreground">Alex Rivera</p>
                <p className="text-sm text-muted-foreground">
                  Founder & Creative Director
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section id="contact">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl mb-4">
              Let&apos;s Create Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to bring your vision to life? Get in touch with us and
              let&apos;s discuss your next project.
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
