import Image from "next/image";

type FeatureSplitProps = {
  badge: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function FeatureSplit({
  badge,
  title,
  description,
  image,
  reverse = false,
}: FeatureSplitProps) {
  return (
    <section
      className={`grid items-center gap-14 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <p className="mb-4 text-sm font-black uppercase tracking-wide text-biscuit-pink">
          {badge}
        </p>

        <h2 className="font-display text-4xl font-black leading-tight text-biscuit-dark md:text-6xl">
          {title}
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-biscuit-dark/70">
          {description}
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={900}
          height={700}
          className="w-full max-w-130 object-contain"
        />
      </div>
    </section>
  );
}
