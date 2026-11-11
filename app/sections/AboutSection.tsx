"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("HomePage.about");

  return (
    <section id="about" className="py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-brand-navy-primary">
      <h2 className="max-w-7xl mx-auto text-3xl font-bold text-white">
        {t("title")}
      </h2>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {t("body")}
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={`/${t("img")}`}
            alt="logo"
            width={400}
            height={300}
            className="rounded-lg shadow-md bg-brand-gray-primary bg-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
