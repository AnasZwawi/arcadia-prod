import { Play } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl?: string;
  href?: string;
}

export function ProjectCard({
  title,
  category,
  imageUrl,
  href = "#",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative aspect-video overflow-hidden rounded-xl bg-muted cursor-pointer block"
    >
      <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors group-hover:bg-background/20">
        <div className="scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 rounded-full bg-background/90 p-4 shadow-lg backdrop-blur-sm">
          <Play className="h-6 w-6 text-foreground ml-1" />
        </div>
      </div>
      {/* Image placeholder */}
      <div className="h-full w-full bg-secondary" />
      <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm font-medium text-foreground drop-shadow-md">
          {title}
        </p>
        <p className="text-xs text-muted-foreground drop-shadow-md">
          {category}
        </p>
      </div>
    </Link>
  );
}
