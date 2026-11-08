import Image from "next/image";

import { useTranslations } from "next-intl";
import HeroSection from "./sections/HeroSection";
import SocialProofSection from "./sections/SocialProofSection";
import SectorsSection from "./sections/SectorsSection";
import AboutSection from "./sections/AboutSection";
import StorySection from "./sections/StorySection";


export default function Home() {
  return (
    <main className="">
      
      <HeroSection />
      <SocialProofSection />
      <SectorsSection />
      <AboutSection />
      {/* <CountriesSection /> */}
      <StorySection />
    </main>

    
  );
}
