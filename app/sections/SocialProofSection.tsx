import React from "react";
import { useTranslations } from "next-intl";

const socialProofData = [
  { number: "1989", key: "yearEstablished", colorClass: "text-brand-navy-primary" },
  { number: "10+", key: "primaryMarkets", colorClass: "text-brand-red-primary" },
  { number: "100%", key: "qualityGuaranteed", colorClass: "text-brand-navy-primary" },
];

const SocialProofSection = () => {
  const t = useTranslations("HomePage.socialProof");

  return (
    <div className="max-w-7xl mx-6 sm:mx-8 lg:mx-auto my-6 md:my-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-16 py-6 px-5 md:px-10 rounded-2xl bg-brand-ice-blue-primary">
      {socialProofData.map((item, index) => (
        <div
          key={index}
          className={`flex min-w-24 flex-col items-center justify-center gap-2 text-center ${item.colorClass}`}
        >
          <h3 className="text-2xl md:text-4xl font-bold">
            {item.number}
          </h3>
          <p className="text-base md:text-lg font-bold text-center">
            {t(item.key)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SocialProofSection;
