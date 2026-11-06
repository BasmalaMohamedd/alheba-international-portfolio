
import React from "react";
import { LuArrowRight, LuGlobe } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section
      className="relative md:h-screen min-h-160 w-full
      bg-[url('/hero-bg.png')]
      bg-cover bg-center bg-no-repeat
      flex items-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#111827]/90 via-[#111827]/65 to-black/20" />

      

      {/* Hero Content */}
      <div className="relative px-10 md:px-15 text-white max-w-3xl">
        <div className="flex items-center gap-3 mb-7">
            <span className="h-[2px] w-10 bg-brand-red-primary" />
            <span className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-white/90">
              AlHeba International
            </span>
          </div>
        <h3 className="text-3xl md:text-5xl font-bold leading-tight">
          Exporting and Importing high-quality <span className="text-brand-red-primary">steel</span> and <span className="text-brand-red-primary">medical equipment</span> across the Middle East
        </h3>

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90">
          At AlHeba, bring you the experience of the biggest companies of iron and steel, to deliver you high-quality steel and premium medical equipment from Egypt across the Middle East
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">

            <a
              href="#sectors"
              className="group inline-flex items-center gap-3
              rounded-md bg-brand-red-primary px-7 py-4
              text-sm md:text-base font-semibold text-white
              shadow-[0_8px_25px_rgba(178,0,3,0.3)]
              transition-all duration-300
              hover:-translate-y-1 hover:bg-brand-red-secondary
              hover:shadow-[0_12px_30px_rgba(178,0,3,0.4)]"
            >
              Explore Our Sectors
              <LuArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2
              text-white/90 font-medium
              transition-colors duration-300 hover:text-white"
            >
              <LuGlobe size={19} />
              Discover AlHeba
            </a>

          </div>
      </div>
    </section>
  );
};

export default HeroSection;
