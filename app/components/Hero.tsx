import {
  CheckCircle,
  LockKeyhole,
  PawPrint,
  Play,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-biscuit-cream">
      {/* VISUEL DROITE */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[78vh] w-[60vw] -translate-y-1/2 lg:block">
        <Image
          src="/images/hero-right.png"
          alt="Bouledogue français avec mockup MK Biscuit"
          fill
          sizes="60vw"
          priority
          className="object-contain object-center"
        />
      </div>

      {/* PANSEMENT ANTI-ZIGOUIGOUI — uniquement entre 1975px et 2250px */}
      <div className="pointer-events-none absolute z-5 hidden bg-biscuit-cream min-[1975px]:max-[2250px]:block min-[1975px]:max-[2250px]:left-[44vw] min-[1975px]:max-[2250px]:top-[39%] min-[1975px]:max-[2250px]:h-40 min-[1975px]:max-[2250px]:w-48 min-[1975px]:max-[2250px]:rounded-full" />

      {/* CONTENU GAUCHE */}
      <div className="relative z-10 flex w-full items-center px-6 pb-20 pt-10 md:px-10 md:pb-24 md:pt-24 lg:min-h-200 lg:px-20 lg:py-20 xl:min-h-215 xl:px-32 2xl:min-h-225">
        <div className="max-w-4xl lg:w-[52%]">
          <p className="mb-6 inline-flex rounded-full bg-biscuit-yellow px-4 py-2 text-sm font-bold text-biscuit-dark shadow-sm">
            🩷 L’app préférée des parents de chiens
          </p>

          <h1 className="font-display text-6xl font-black leading-[0.9] tracking-tight text-biscuit-dark md:text-8xl xl:text-[104px] 2xl:text-[128px]">
            Moins de galère,
            <br />
            plus de{" "}
            <span className="whitespace-nowrap">
              <span className="relative inline-block text-biscuit-pink">
                biscuits
                <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-biscuit-yellow" />
              </span>
              {"\u00A0"}!
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-biscuit-dark/75 xl:text-2xl xl:leading-10">
            MK Biscuit t’aide à organiser la vie de ton chien : promenades,
            santé, rappels importants et jolis souvenirs.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button className="inline-flex items-center gap-2 rounded-full bg-biscuit-purple px-9 py-5 font-bold text-white uppercase tracking-wide shadow-xl shadow-biscuit-purple/25 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-biscuit-purple/40 active:translate-y-0">
              <PawPrint className="fill-current" />
              Télécharger l’app
            </button>

            <button className="inline-flex items-center gap-3 rounded-full bg-white px-9 py-5 font-bold text-biscuit-dark shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:translate-y-0">
              <Play className="h-5 w-5 fill-biscuit-pink text-biscuit-pink" />
              Voir la démo
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-bold text-biscuit-dark/70">
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-biscuit-mint" />
              Gratuit à télécharger
            </span>

            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-biscuit-pink" />
              Sans engagement
            </span>

            <span className="inline-flex items-center gap-2">
              <LockKeyhole className="h-5 w-5 text-biscuit-yellow" />
              Données sécurisées
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE : image sous le texte */}
      <div className="px-6 pb-10 lg:hidden">
        <Image
          src="/images/hero-right.png"
          alt="Bouledogue français avec mockup MK Biscuit"
          width={1400}
          height={1100}
          priority
          className="mx-auto w-full max-w-155"
        />
      </div>
    </section>
  );
}
