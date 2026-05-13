type FeatureHeroProps = {
  badge: string;
  title: string;
  description: string;
};

export default function FeatureHero({
  badge,
  title,
  description,
}: FeatureHeroProps) {
  return (
    <section className="mx-auto max-w-5xl text-center">
      <p className="mb-4 text-sm font-black uppercase tracking-wide text-biscuit-pink">
        {badge}
      </p>

      <h1 className="font-display text-5xl font-black leading-tight text-biscuit-dark md:text-7xl">
        {title}
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-biscuit-dark/70">
        {description}
      </p>
    </section>
  );
}
