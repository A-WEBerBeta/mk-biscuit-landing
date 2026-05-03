import { CheckCircle2 } from "lucide-react";

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
      className="w-full overflow-hidden bg-biscuit-cream px-6 py-24 md:px-10 lg:px-20 xl:px-28"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-biscuit-mint/30 px-4 py-2 text-sm font-black uppercase tracking-wide text-biscuit-mint">
            Simple. Intuitive. Complète.
          </p>

          <h2 className="font-display text-5xl font-black leading-tight text-biscuit-dark md:text-7xl">
            Une app pensée pour{" "}
            <span className="text-biscuit-mint">ton quotidien</span>
            <br />
            et le sien 💙
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

        <div className="relative min-h-[520px]">
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-biscuit-mint/30 blur-3xl" />
          <div className="absolute bottom-8 left-8 h-52 w-52 rounded-full bg-biscuit-pink/20 blur-3xl" />

          <div className="relative mx-auto flex max-w-4xl items-end justify-center gap-4">
            <PhoneCard title="Calendrier" accent="bg-biscuit-mint" />
            <PhoneCard title="Milo 🐶" accent="bg-biscuit-pink" main />
            <PhoneCard title="Santé" accent="bg-biscuit-yellow" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({
  title,
  accent,
  main = false,
}: {
  title: string;
  accent: string;
  main?: boolean;
}) {
  return (
    <div
      className={`rounded-[2.5rem] bg-biscuit-dark p-3 shadow-2xl ${
        main ? "h-[520px] w-[260px]" : "h-[460px] w-[230px] opacity-90"
      }`}
    >
      <div className="h-full rounded-[2rem] bg-white p-5">
        <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-biscuit-dark/20" />

        <h3 className="font-display text-2xl font-black text-biscuit-dark">
          {title}
        </h3>

        <div className={`mt-5 h-3 w-20 rounded-full ${accent}`} />

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl bg-biscuit-cream p-4">
            <div className="mb-3 h-3 w-24 rounded-full bg-biscuit-dark/15" />
            <div className="h-3 w-32 rounded-full bg-biscuit-dark/10" />
          </div>

          <div className="rounded-2xl bg-biscuit-cream p-4">
            <div className="mb-3 h-3 w-20 rounded-full bg-biscuit-dark/15" />
            <div className="h-3 w-28 rounded-full bg-biscuit-dark/10" />
          </div>

          <div className="grid grid-cols-4 items-end gap-2 pt-8">
            {[40, 70, 55, 90].map((height) => (
              <div
                key={height}
                className={`${accent} rounded-full`}
                style={{ height }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
