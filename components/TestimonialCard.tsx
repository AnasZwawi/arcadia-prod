import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  variant?: "rounded" | "sharp" | "mixed";
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  variant = "rounded",
}: TestimonialCardProps) {
  const borderRadius = {
    rounded: "rounded-3xl",
    sharp: "rounded-lg",
    mixed: "rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg",
  };

  return (
    <div
      className={cn(
        "bg-muted/50 p-8 border border-border transition-all hover:bg-muted/80",
        borderRadius[variant],
      )}
    >
      <p className="text-lg text-foreground leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="space-y-1">
        <p className="font-medium text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
