import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-biscuit-cream px-6 py-12 md:px-10 lg:px-20 xl:px-32">
      <div className="mx-auto grid max-w-425 gap-10 border-t border-biscuit-dark/10 pt-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo MK Biscuit"
              width={52}
              height={52}
              className="h-12 w-12 object-contain"
            />

            <span className="font-display text-2xl font-black text-biscuit-dark">
              MK Biscuit
            </span>
          </a>

          <p className="mt-4 max-w-sm leading-7 text-biscuit-dark/60">
            Le quotidien de ton chien, organisé avec amour, biscuits et zéro
            prise de tête.
          </p>
        </div>

        <FooterColumn
          title="Produit"
          links={["Fonctionnalités", "L’app", "Télécharger"]}
        />
        <FooterColumn title="Ressources" links={["FAQ", "Blog", "Guides"]} />

        <div>
          <h3 className="font-display text-xl font-black text-biscuit-dark">
            Suivez-nous
          </h3>

          <div className="mt-4 flex gap-3">
            {[FaInstagram, FaTiktok, FaFacebookF, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="
        grid h-11 w-11 place-items-center
        rounded-full
        bg-white
        text-biscuit-pink
        shadow-md
        transition
        hover:-translate-y-1
        hover:bg-biscuit-pink
        hover:text-white
      "
                >
                  <Icon className="h-5 w-5" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-425 text-sm font-semibold text-biscuit-dark/45">
        © 2026 MK Biscuit. Projet fictif réalisé avec Next.js
      </p>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-display text-xl font-black text-biscuit-dark">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="font-semibold text-biscuit-dark/60 transition hover:text-biscuit-pink"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
