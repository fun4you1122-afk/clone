import VideoHero from "@/components/VideoHero";
import DeveloperMarquee from "@/components/DeveloperMarquee";
import ManifestoSection from "@/components/ManifestoSection";
import BuyingJourney from "@/components/BuyingJourney";
import UnitExperience from "@/components/UnitExperience";
import PropertyShowcase from "@/components/PropertyShowcase";
import VideoSection from "@/components/VideoSection";
import GoldenVisaSection from "@/components/GoldenVisaSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <VideoHero />
      <DeveloperMarquee />
      <ManifestoSection />
      <BuyingJourney />
      <UnitExperience />
      <PropertyShowcase />
      <VideoSection />
      <GoldenVisaSection />
      <ContactSection />
    </>
  );
}
