import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

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
        className={`${clash.className} bg-background text-foreground antialiased selection:bg-lime selection:text-black cursor-none`}
      >
        <CustomCursor />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
