import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import SocialProofSection from "./sections/SocialProofSection";
import SectorsSection from "./sections/SectorsSection";
import AboutSection from "./sections/AboutSection";
import StorySection from "./sections/StorySection";
import Footer from "./components/ui/Footer";
import CountriesSection from "./sections/CountriesSection";

export default function Home() {
  return (
    <>
    <main className="">
      <HeroSection />
      <SocialProofSection />
      <SectorsSection />
      <AboutSection />
      {/* <CountriesSection /> */}
      <StorySection />
      {/* <ContactForm /> */}
    </main>
    <footer>
      <Footer />
    </footer>

    </>
    
  );
}
