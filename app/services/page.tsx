import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Camera, MonitorDot, Video, Palette, Mic, Film } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: Camera,
      title: "Video Production",
      description:
        "Full-service video production from concept to delivery. We handle scripting, shooting, and everything in between.",
      features: [
        "Commercial Videos",
        "Corporate Videos",
        "Event Coverage",
        "Product Videos",
      ],
    },
    {
      icon: Film,
      title: "Photography",
      description:
        "Professional photography services for brands, events, and editorial content.",
      features: [
        "Product Photography",
        "Event Photography",
        "Portrait Sessions",
        "Lifestyle Shoots",
      ],
    },
    {
      icon: MonitorDot,
      title: "Post-Production",
      description:
        "Expert editing, color grading, and sound design to bring your footage to life.",
      features: [
        "Video Editing",
        "Color Grading",
        "Sound Design",
        "Motion Graphics",
      ],
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description:
        "Strategic creative guidance to ensure your visual content aligns with your brand vision.",
      features: [
        "Brand Strategy",
        "Creative Concepts",
        "Art Direction",
        "Storyboarding",
      ],
    },
    {
      icon: Video,
      title: "Live Streaming",
      description:
        "Professional live streaming services for events, webinars, and product launches.",
      features: [
        "Multi-Camera Setup",
        "Live Switching",
        "Graphics Integration",
        "Platform Management",
      ],
    },
    {
      icon: Mic,
      title: "Audio Production",
      description:
        "High-quality audio recording, mixing, and mastering for all your content needs.",
      features: [
        "Voiceover Recording",
        "Sound Mixing",
        "Audio Mastering",
        "Podcast Production",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden pt-32 pb-16">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl text-foreground">
              Our Services
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Comprehensive video and photo production services tailored to
              bring your creative vision to life.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-border bg-background hover:bg-muted/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted mb-6">
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="bg-muted/20">
        <Container>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl mb-16 text-center">
            Our Process
          </h2>
          <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your vision, goals, and target audience.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed planning, scripting, and creative development.",
              },
              {
                step: "03",
                title: "Production",
                description:
                  "Professional shooting with state-of-the-art equipment.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Final edits, revisions, and delivery in your preferred format.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-3">
                <div className="text-4xl font-semibold text-primary/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let&apos;s discuss how we can help bring your project to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
