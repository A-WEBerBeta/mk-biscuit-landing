import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: FeatureCardProps) {
  return (
    <article className="rounded-4xl bg-white p-8 shadow-[0_20px_60px_rgba(9,11,47,0.08)]">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
      >
        <Icon className="h-7 w-7 text-biscuit-dark" />
      </div>

      <h3 className="mt-6 font-display text-3xl font-black text-biscuit-dark">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-biscuit-dark/70">{description}</p>
    </article>
  );
}
