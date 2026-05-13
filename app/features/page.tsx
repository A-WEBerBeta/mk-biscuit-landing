import { Bell, HeartPulse, MapPinned } from "lucide-react";

import FeatureCard from "@/components/feature/FeatureCard";
import FeatureHero from "@/components/feature/FeatureHero";
import FeatureSplit from "@/components/feature/FeatureSplit";

export const metadata = {
  title: "Fonctionnalités | MK Biscuit",
  description: "Découvrez toutes les fonctionnalités de MK Biscuit.",
};

export default function FeaturesPage() {
  return (
    <main className="bg-biscuit-cream px-6 py-28 md:px-10 lg:px-20 xl:px-32">
      <FeatureHero
        badge="Fonctionnalités"
        title="Tout ce qu’il faut pour prendre soin de ton chien."
        description="Promenades, rappels santé, souvenirs, suivi quotidien et organisation familiale : MK Biscuit centralise toute la vie de ton compagnon."
      />

      <section className="mx-auto mt-20 grid max-w-7xl gap-6 md:grid-cols-3">
        <FeatureCard
          icon={MapPinned}
          title="Balades"
          description="Suivez les promenades, les distances et les habitudes de votre chien."
          color="bg-biscuit-yellow/30"
        />

        <FeatureCard
          icon={HeartPulse}
          title="Santé"
          description="Gardez tous les rappels santé, vaccins et rendez-vous au même endroit."
          color="bg-biscuit-pink/20"
        />

        <FeatureCard
          icon={Bell}
          title="Rappels"
          description="Ne ratez plus aucun traitement, repas ou événement important."
          color="bg-biscuit-mint/20"
        />
      </section>

      <div className="mx-auto mt-28 max-w-7xl space-y-32">
        <FeatureSplit
          badge="Organisation"
          title="Un tableau de bord clair pour toute la routine."
          description="Retrouvez les promenades, les rappels et les activités importantes dans une seule interface pensée pour aller vite."
          image="/images/cta-visual.png"
        />

        <FeatureSplit
          badge="Santé"
          title="Toutes les informations importantes au même endroit."
          description="Vaccins, traitements, rendez-vous vétérinaires et historique santé restent accessibles en quelques secondes."
          image="/images/cta-visual.png"
          reverse
        />
      </div>
    </main>
  );
}
