"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("HomePage.about");

  return (
    <section id="about" className="py-20 px-10 md:px-20 bg-brand-navy-primary">
      <h1 className="text-3xl font-bold text-white">
        {t("title")}
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
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