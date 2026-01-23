import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-24 sm:py-32", className)} {...props}>
      {children}
    </section>
  );
}
