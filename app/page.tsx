import AppPreview from "@/components/AppPreview";
import Feature from "@/components/Feature";
import FinalCta from "@/components/FinalCta";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-biscuit-dark">
      <Hero />
      <Feature />
      <AppPreview />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
