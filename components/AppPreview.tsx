import { CheckCircle2, Heart } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Interface claire et ultra intuitive",
  "Synchronisation multi-appareils",
  "Mode sombre disponible",
  "Pensé pour les parents de chiens",
];

export default function AppPreview() {
  return (
    <section
      id="app"
      className="w-full overflow-hidden bg-[#f4f6fa] px-6 py-24 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex items-center justify-center lg:justify-start">
          <Image
            src="/images/app-preview-right.png"
            alt="Aperçu de l'application MK Biscuit"
            width={1400}
            height={1100}
            priority
            className="w-full max-w-300 object-contain"
          />
        </div>

        <div>
          <p className="mb-4 inline-flex rounded-full bg-biscuit-mint/15 px-4 py-2 text-sm font-black uppercase tracking-wide text-biscuit-mint">
            Simple. Intuitive. Complète.
          </p>

          <h2 className="font-display text-5xl font-black leading-tight text-biscuit-dark md:text-7xl">
            Une app pensée pour{" "}
            <span className="text-biscuit-mint">ton quotidien </span>
            <span className="inline-flex justify-center items-center gap-2">
              et le sien
              <Heart
                size={50}
                className="text-biscuit-blue fill-current translate-y-1.5"
              />
            </span>
          </h2>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-lg font-semibold text-biscuit-dark/75"
              >
                <CheckCircle2 className="h-6 w-6 fill-biscuit-mint text-white" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
