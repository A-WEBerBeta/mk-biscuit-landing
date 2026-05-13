import type { Metadata } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "MK Biscuit",
  description: "Le quotidien de ton chien, organisé avec amour.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${fredoka.variable}`}>
      <body className="font-sans">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
