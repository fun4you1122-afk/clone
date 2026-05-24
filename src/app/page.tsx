import VideoHero from "@/components/VideoHero";
import ManifestoSection from "@/components/ManifestoSection";
import BuyingJourney from "@/components/BuyingJourney";
import PropertyShowcase from "@/components/PropertyShowcase";
import VideoSection from "@/components/VideoSection";
import GoldenVisaSection from "@/components/GoldenVisaSection";
import DeveloperMarquee from "@/components/DeveloperMarquee";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <VideoHero />
      <DeveloperMarquee />
      <ManifestoSection />
      <BuyingJourney />
      <PropertyShowcase />
      <VideoSection />
      <GoldenVisaSection />
      <ContactSection />
    </>
  );
}
