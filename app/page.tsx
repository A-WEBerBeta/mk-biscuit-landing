import AppPreview from "./components/AppPreview";
import Features from "./components/Features";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-biscuit-dark">
      <Navbar />
      <Hero />
      <Features />
      <AppPreview />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}
