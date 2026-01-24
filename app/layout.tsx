import Link from "next/link";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

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
        <Navbar />

        <main>{children}</main>

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
