import React from "react";
import { useTranslations } from "next-intl";

const socialProofData = [
  { number: "1989", key: "yearEstablished", color: "brand-navy-primary" },
  { number: "10+", key: "primaryMarkets", color: "brand-red-primary" },
  { number: "100%", key: "qualityGuaranteed", color: "brand-navy-primary" },
];

const SocialProofSection = () => {
  const t = useTranslations("HomePage.socialProof");

  return (
    <div className="flex flex-row items-center justify-center gap-10 m-5 md:my-8 md:mx-15 py-5 px-5 rounded-2xl bg-brand-ice-blue-primary">
      {socialProofData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center gap-2 text-${item.color}`}
        >
          <h3 className="text-2xl md:text-4xl font-bold">
            {item.number}
          </h3>
          <p className="text-md md:text-lg font-bold text-center">
            {t(item.key)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SocialProofSection;