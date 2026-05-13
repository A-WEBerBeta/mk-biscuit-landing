"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "L’app", href: "#app" },
  { label: "Avis", href: "#testimonials" },
  { label: "Télécharger", href: "#download" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-biscuit-cream ${
        scrolled ? "bg-transparent backdrop-blur-xl" : ""
      }`}
    >
      <div className="flex h-20 w-full items-center justify-between px-6 md:px-10 lg:px-20 xl:px-32">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Logo MK Biscuit"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
            priority
          />

          <span className="font-display text-2xl font-black text-biscuit-dark">
            MK Biscuit
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-biscuit-dark/65 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-biscuit-pink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="hidden rounded-full bg-biscuit-yellow px-6 py-3 text-sm font-black text-biscuit-dark shadow-lg transition hover:-translate-y-0.5 md:inline-flex"
        >
          Créer le carnet de mon chien
        </a>
      </div>
    </header>
  );
}
