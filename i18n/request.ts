import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { cookies } from "next/headers";

const locales = ["en", "ar"] as const;

export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get("locale")?.value;
  const locale = hasLocale(locales, cookieLocale) ? cookieLocale : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});