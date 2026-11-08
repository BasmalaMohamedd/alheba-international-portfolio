
"use client";

import { setLocale } from "@/app/actions";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const curr = useLocale();
  const t = useTranslations("HomePage.navbar")

  const changeLanguage = async (locale: "en" | "ar") => {
    if (locale === curr) return;

    await setLocale(locale);
    router.refresh();
  };

  return (
    <div className="flex flex-row items-center mx-3 gap-4 font-medium">
      <div>{t("language")}</div>

      <button
        className="rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 bg-brand-red-primary text-white hover:bg-brand-red-secondary mx-3 cursor-pointer"
        onClick={() => changeLanguage(curr === "en" ? "ar" : "en")}
      >
        {curr === "en" ? "ع" : "En"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
