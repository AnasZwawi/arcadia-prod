import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Award, Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden pt-32 pb-16">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl text-foreground">
              About Arcadia Prod
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              We are a creative studio dedicated to crafting visual stories that
              inspire, engage, and leave a lasting impact.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl bg-secondary overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-secondary to-muted" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2018, Arcadia Prod emerged from a simple belief:
                  that every brand, every individual, has a story worth telling
                  beautifully.
                </p>
                <p>
                  What started as a small team of passionate creatives has grown
                  into a full-service production studio, working with clients
                  across industries to create content that resonates.
                </p>
                <p>
                  Our approach combines artistic vision with technical
                  excellence, ensuring that every project we undertake not only
                  meets but exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-muted/20">
        <Container>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl mb-16 text-center">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for perfection in every frame, every edit, every detail.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "Your vision is our priority. We work closely with you every step of the way.",
              },
              {
                icon: Target,
                title: "Innovation",
                description:
                  "We stay ahead of trends and technology to deliver cutting-edge content.",
              },
              {
                icon: Heart,
                title: "Passion",
                description:
                  "We love what we do, and it shows in the quality of our work.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted mx-auto">
                  <value.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-medium">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl mb-16 text-center">
            Meet the Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              { name: "Alex Rivera", role: "Founder & Creative Director" },
              { name: "Sarah Chen", role: "Lead Cinematographer" },
              { name: "Michael Torres", role: "Senior Editor" },
              { name: "Emma Williams", role: "Production Manager" },
              { name: "James Park", role: "Sound Designer" },
              { name: "Lisa Anderson", role: "Color Grading Specialist" },
            ].map((member) => (
              <div key={member.name} className="text-center space-y-4">
                <div className="aspect-square rounded-2xl bg-secondary overflow-hidden mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted" />
                </div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to create something amazing? We&apos;d love to hear from
              you.
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
