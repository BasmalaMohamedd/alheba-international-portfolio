import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { connection } from "next/server";

export default getRequestConfig(async () => {
  await connection();

  const store = await cookies();
  const cookieLocale = store.get("locale")?.value;

  const locale = cookieLocale === "ar" ? "ar" : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});