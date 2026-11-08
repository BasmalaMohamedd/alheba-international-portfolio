
"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { LuArrowRight, LuGlobe } from "react-icons/lu";

const HeroSection = () => {
  const t = useTranslations("HomePage.hero");

  return (
    <section className="relative isolate md:h-screen min-h-160 w-full flex items-center overflow-hidden">

      {/* Background image */}
      <div
        className="
          absolute inset-0 -z-20
          bg-[url('/hero-bg.png')]
          bg-cover bg-center bg-no-repeat
          rtl:-scale-x-100
        "
      />

      {/* Dark overlay */}
      <div className="
        absolute inset-0 z-10
        bg-linear-to-r from-[#111827]/90 via-[#111827]/65 to-black/20
        rtl:bg-linear-to-l
      " />

      {/* Hero Content */}
      <div className="relative z-10 px-10 md:px-15 text-white max-w-3xl">

        <div className="flex items-center gap-3 mb-7">
          <span className="h-[2px] w-10 bg-brand-red-primary" />
          <span className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-white/90">
            {t("title")}
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold leading-tight">
          {t("hookStart")}{" "}
          <span className="text-brand-red-primary">
            {t("hookSteel")}
          </span>{" "}
          {t("hookMiddle")}{" "}
          <span className="text-brand-red-primary">
            {t("hookMedical")}
          </span>{" "}
          {t("hookEnd")}
        </h3>

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90">
          {t("description")}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">

          <a
            href="#sectors"
            className="group inline-flex items-center gap-3 rounded-md bg-brand-red-primary px-7 py-4 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-red-secondary"
          >
            {t("cta")}
            <LuArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-white/90 font-medium transition-colors duration-300 hover:text-white"
          >
            <LuGlobe size={19} />
            {t("discover")}
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
