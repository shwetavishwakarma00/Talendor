import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";

import FlagshipProduct from "@/components/FlagshipProduct";
import DeliveryFormat from "@/components/DeliveryFormat";
import WhyTalendor from "@/components/WhyTalendor";
import ScrollingShowCase from "@/components/ScrollingShowCase";
import Footer from "@/components/Footer";


export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ExpertiseSection />
      <ScrollingShowCase/>
      <FlagshipProduct/>
      <DeliveryFormat/>
      <WhyTalendor/>
      <Footer/>
    </main>
  );
}
