"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Use window.location.pathname to ensure we have the most current value inside the event listener
      if (window.location.pathname === "/") {
        setIsScrolled(window.scrollY > window.innerHeight - 80);
      } else {
        setIsScrolled(true);
      }
    };

    // Initial check on mount and when pathname changes
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            "text-xl font-medium tracking-tight transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-white",
          )}
        >
          ARCADIA PROD
        </Link>
        <nav
          className={cn(
            "flex gap-8 text-sm font-medium transition-colors duration-300",
            isScrolled ? "text-muted-foreground" : "text-white/80",
          )}
        >
          <Link
            href="/work"
            className={cn(
              "transition-colors hover:text-foreground",
              !isScrolled && "hover:text-white",
            )}
          >
            Work
          </Link>
          <Link
            href="/services"
            className={cn(
              "transition-colors hover:text-foreground",
              !isScrolled && "hover:text-white",
            )}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={cn(
              "transition-colors hover:text-foreground",
              !isScrolled && "hover:text-white",
            )}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={cn(
              "transition-colors hover:text-foreground",
              !isScrolled && "hover:text-white",
            )}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
