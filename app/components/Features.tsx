import {
  CalendarDays,
  Camera,
  Heart,
  HeartPulse,
  PawPrint,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Rappels importants",
    text: "Vaccins, vermifuges, traitements… On t’envoie des rappels pour ne rien oublier.",
    color: "bg-biscuit-purple/15 text-biscuit-purple",
    accent: "bg-biscuit-purple",
  },
  {
    icon: PawPrint,
    title: "Promenades au top",
    text: "Enregistre vos balades, découvre de nouveaux spots et suis vos progrès.",
    color: "bg-biscuit-pink/15 text-biscuit-pink",
    accent: "bg-biscuit-pink",
  },
  {
    icon: HeartPulse,
    title: "Santé suivie",
    text: "Garde tous les documents vétérinaires et le suivi de santé de ton chien.",
    color: "bg-biscuit-yellow/20 text-biscuit-yellow",
    accent: "bg-biscuit-yellow",
  },
  {
    icon: Camera,
    title: "Moments à chérir",
    text: "Photos, souvenirs, évolutions… Garde une jolie trace de votre aventure.",
    color: "bg-sky-100 text-sky-500",
    accent: "bg-sky-500",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-linear-to-b from-biscuit-purple/15 to-biscuit-purple/5 px-6 py-20 md:px-10 lg:px-20 xl:px-28"
    >
      <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full bg-biscuit-purple/10" />
      <div className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-biscuit-mint/30" />
      <div className="pointer-events-none absolute left-1/4 bottom-10 h-32 w-32 rounded-4xl bg-biscuit-yellow/20 rotate-12" />
      <div className="pointer-events-none absolute right-1/3 bottom-8 h-20 w-20 rounded-full bg-biscuit-pink/15" />
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-lg font-black inline-flex justify-center items-center gap-2 uppercase tracking-wide text-biscuit-purple">
          Pensé pour vous et votre chien
          <Heart className="h-6 w-6 fill-current" />
        </p>

        <h2 className="font-display text-4xl font-black leading-tight text-biscuit-dark md:text-6xl">
          Tout ce qu’il te faut, au même endroit
        </h2>
      </div>

      <div className="mt-14 grid relative z-10 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className="rounded-4xl max-w-lg bg-white p-8 text-center shadow-[0_20px_60px_rgba(9,11,47,0.08)] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div
                className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${feature.color}`}
              >
                <Icon className="h-12 w-12" />
              </div>

              <h3 className="font-display text-2xl font-black text-biscuit-dark">
                {feature.title}
              </h3>

              <p className="mx-auto mt-4 max-w-70 leading-7 text-lg text-biscuit-dark/80">
                {feature.text}
              </p>

              <div
                className={`mx-auto mt-6 h-1.5 w-16 rounded-full ${feature.accent}`}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
