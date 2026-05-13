import { Check } from "lucide-react";

const plans = [
  {
    name: "Biscuit Free",
    price: "0€",
    description: "Pour organiser le quotidien d’un seul chien.",
    highlight: false,
    features: [
      "1 profil chien",
      "Rappels basiques",
      "Suivi des promenades",
      "Souvenirs photo",
    ],
  },
  {
    name: "Biscuit Plus",
    price: "4,99€",
    description: "Pour les dog parents qui veulent tout centraliser.",
    highlight: true,
    features: [
      "Profils chiens illimités",
      "Rappels santé avancés",
      "Historique vétérinaire",
      "Synchronisation cloud",
      "Export des données",
    ],
  },
  {
    name: "Biscuit Family",
    price: "9,99€",
    description: "Pour partager l’organisation avec toute la famille.",
    highlight: false,
    features: [
      "Multi-utilisateurs",
      "Partage famille",
      "Notifications partagées",
      "Support prioritaire",
      "Accès anticipé aux nouveautés",
    ],
  },
];

export const metadata = {
  title: "Tarifs | MK Biscuit",
  description: "Découvrez les offres MK Biscuit : gratuit, premium et famille.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-biscuit-cream px-6 py-28 md:px-10 lg:px-20 xl:px-32">
      <section className="mx-auto max-w-400">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-biscuit-pink">
            Tarifs
          </p>

          <h1 className="font-display text-5xl font-black leading-tight text-biscuit-dark md:text-7xl">
            Une formule pour chaque tribu de dog parents.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-biscuit-dark/70">
            Commence gratuitement, puis passe à Premium quand ton organisation
            mérite plus qu’un post-it sur le frigo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-4xl p-8 shadow-[0_20px_60px_rgba(9,11,47,0.08)] transition hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-biscuit-dark text-white"
                  : "bg-white text-biscuit-dark"
              }`}
            >
              {plan.highlight && (
                <span className="absolute right-6 top-6 rounded-full bg-biscuit-yellow px-4 py-2 text-xs font-black uppercase tracking-wide text-biscuit-dark">
                  Populaire
                </span>
              )}

              <h2 className="font-display text-3xl font-black">{plan.name}</h2>

              <p
                className={`mt-4 leading-7 ${
                  plan.highlight ? "text-white/70" : "text-biscuit-dark/65"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="font-display text-6xl font-black">
                  {plan.price}
                </span>
                <span
                  className={`mb-2 font-bold ${
                    plan.price === "0€"
                      ? plan.highlight
                        ? "text-white/60"
                        : "text-biscuit-dark/50"
                      : plan.highlight
                        ? "text-white/60"
                        : "text-biscuit-dark/50"
                  }`}
                >
                  {plan.price === "0€" ? "" : "/mois"}
                </span>
              </div>

              <button
                className={`mt-8 w-full rounded-full px-6 py-4 font-black transition hover:-translate-y-1 ${
                  plan.highlight
                    ? "bg-biscuit-pink text-white shadow-xl shadow-biscuit-pink/25"
                    : "bg-biscuit-yellow text-biscuit-dark shadow-lg"
                }`}
              >
                {plan.price === "0€" ? "Commencer" : "Essayer gratuitement"}
              </button>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 font-semibold">
                    <Check
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        plan.highlight
                          ? "text-biscuit-yellow"
                          : "text-biscuit-pink"
                      }`}
                    />
                    <span
                      className={
                        plan.highlight
                          ? "text-white/85"
                          : "text-biscuit-dark/70"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
