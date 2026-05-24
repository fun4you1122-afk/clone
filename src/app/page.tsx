import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Properties from "@/components/Properties";
import Process from "@/components/Process";
import GoldenVisa from "@/components/GoldenVisa";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Intro />
      <Services />
      <Experience />
      <Properties />
      <Process />
      <GoldenVisa />
      <ContactSection />
    </>
  );
}
