"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const StorySection = () => {
  const t = useTranslations("HomePage.story");

  return (
    <section id="story" className="py-20 px-10 md:px-20">
      <h1 className="text-3xl font-bold text-gray-800">
        {t("our story")}
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/EngIsmail.jpeg"
            alt="founder image"
            width={400}
            height={300}
            className="rounded-lg shadow-md bg-cover w-80 h-100 m-5"
          />

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {t("founder")}
          </h3>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {t("section1")}
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            {t("section2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;