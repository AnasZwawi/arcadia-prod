import Link from "next/link";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clash = localFont({
  src: "./fonts/ClashGrotesk-Variable.woff2",
});

export const metadata: Metadata = {
  title: "Arcadia Prod",
  description: "Minimalist Video & Photo Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clash.className} bg-background text-foreground antialiased scroll-smooth selection:bg-foreground selection:text-background`}
      >
        <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-xl font-medium tracking-tight">
              ARCADIA PROD
            </Link>
            <nav className="flex gap-8 text-sm font-medium text-muted-foreground">
              <Link
                href="/work"
                className="hover:text-foreground transition-colors"
              >
                Work
              </Link>
              <Link
                href="/services"
                className="hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="pt-16">{children}</main>

        <footer className="border-t border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Arcadia Prod. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Instagram
              </Link>
              <Link href="#" className="hover:text-foreground">
                Twitter
              </Link>
              <Link href="#" className="hover:text-foreground">
                LinkedIn
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
