// app/actions.ts
"use server";

import { cookies } from "next/headers";
import type { Locale } from "next-intl";

export async function changeLocaleAction(locale: Locale) {
  const store = await cookies();
  store.set("locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
}