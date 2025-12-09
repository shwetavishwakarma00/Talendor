import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesAndProducts from "@/components/ServicesAndProducts";
import FlagshipProduct from "@/components/FlagshipProduct";
import DeliveryFormat from "@/components/DeliveryFormat";
import WhyTalendor from "@/components/WhyTalendor";


export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ExpertiseSection />

      <ServicesAndProducts />
      <FlagshipProduct/>
      <DeliveryFormat/>
      <WhyTalendor/>
    </main>
  );
}
