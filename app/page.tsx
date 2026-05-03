import AppPreview from "./components/AppPreview";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-biscuit-dark">
      <Navbar />
      <Hero />
      <Features />
      <AppPreview />
    </main>
  );
}
