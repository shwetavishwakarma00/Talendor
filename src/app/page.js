import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";

import FlagshipProduct from "@/components/FlagshipProduct";
import DeliveryFormat from "@/components/DeliveryFormat";
import WhyTalendor from "@/components/WhyTalendor";
<<<<<<< HEAD
import Founders from "@/components/Founders";
=======
import ScrollingShowCase from "@/components/ScrollingShowCase";
>>>>>>> 4120ae869c71eb85679436f8cb73df19b6a1f9e1


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
      <Founders/>
    </main>
  );
}
