import { PawPrint } from "lucide-react";

export default function Navbar() {
  return (
    <header className="mx-auto w-full flex items-center justify-between px-32 py-6 bg-biscuit-cream">
      <a href="#" className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-biscuit-yellow to-biscuit-pink shadow-lg">
          <PawPrint className="h-6 w-6 text-white fill-current" />
        </div>

        <span className="font-display text-2xl font-bold">
          MK <span className="text-biscuit-mint">Biscuit</span>
        </span>
      </a>

      <nav className="hidden items-center gap-8 text-sm font-semibold text-biscuit-dark/70 md:flex">
        <a href="#features" className="hover:text-biscuit-pink">
          Fonctionnalités
        </a>
        <a href="#app" className="hover:text-biscuit-pink">
          L’app
        </a>
        <a href="#download" className="hover:text-biscuit-pink">
          Télécharger
        </a>
      </nav>

      <button className="hidden items-center gap-2 rounded-full bg-biscuit-yellow tracking-wide uppercase text-black/80 px-5 py-3 text-sm font-bold shadow-md transition hover:-translate-y-0.5 md:flex">
        Télécharger l&apos;app
        <PawPrint size={18} className="fill-current" />
      </button>
    </header>
  );
}
