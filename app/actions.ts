"use server";

import { cookies } from "next/headers";

export async function setLocale(locale: "en" | "ar") {
  await cookies().then((store) => {
    store.set("locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  });
}