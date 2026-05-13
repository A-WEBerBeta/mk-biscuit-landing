import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-biscuit-cream px-6 py-20">
      <div className="text-center">
        <Image
          src="/images/logo-biscuit.png"
          alt="MK Biscuit"
          width={120}
          height={120}
          className="mx-auto object-contain"
        />

        <p className="mt-8 text-sm font-black uppercase tracking-wide text-biscuit-pink">
          Erreur 404
        </p>

        <h1 className="font-display mt-4 text-5xl font-black leading-tight text-biscuit-dark md:text-7xl">
          Oups…
          <br />
          cette page s’est échappée.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-biscuit-dark/70">
          Même MK n’a pas réussi à retrouver cette page. On dirait qu’elle est
          partie courir après un biscuit.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-biscuit-yellow px-8 py-4 font-black text-biscuit-dark shadow-lg transition hover:-translate-y-1"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
