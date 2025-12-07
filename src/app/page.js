import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import ServicesAndProducts from "./components/ServicesAndProducts";

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ExpertiseSection />
      <ServicesAndProducts />
    </main>
  );
}
