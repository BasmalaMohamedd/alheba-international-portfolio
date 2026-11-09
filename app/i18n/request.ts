import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  let cookieLocale: string | undefined;

  try {
    const store = await cookies();
    cookieLocale = store.get("locale")?.value;
  } catch (error) {
    // During static prerendering/build time, cookies() may not be available
    cookieLocale = undefined;
  }

  const locale = cookieLocale === "ar" ? "ar" : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});