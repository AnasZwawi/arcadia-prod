import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden pt-32 pb-16">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl text-foreground">
              Get in Touch
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Have a project in mind? We&apos;d love to hear from you. Fill out
              the form below or reach out directly.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-medium mb-6">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Mail className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:hello@arcadiaprod.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        hello@arcadiaprod.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Phone className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <MapPin className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Tunis
                        <br />
                        Tunisia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {["Instagram", "Twitter", "LinkedIn", "YouTube"].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {platform}
                      </a>
                    ),
                  )}
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-medium mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted/20">
        <Container>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                question: "What is your typical turnaround time?",
                answer:
                  "Turnaround time varies by project scope, but typically ranges from 2-4 weeks for standard projects.",
              },
              {
                question: "Do you offer revisions?",
                answer:
                  "Yes, we include up to 3 rounds of revisions in our standard packages to ensure you're completely satisfied.",
              },
              {
                question: "What equipment do you use?",
                answer:
                  "We use professional-grade cameras, lighting, and audio equipment to ensure the highest quality output.",
              },
              {
                question: "Can you travel for projects?",
                answer:
                  "Absolutely! We work with clients worldwide and can travel to your location for shoots.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
