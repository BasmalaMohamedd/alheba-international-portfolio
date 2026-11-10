import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Locale, NextIntlClientProvider, useLocale } from "next-intl";
import Navbar from "./components/ui/Navbar";
import { cookies } from "next/headers";
import Footer from "./components/ui/Footer";

//language css
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

//language css
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


//add arabic language
export const metadata: Metadata = {
  title: "Al Heba International Trading and Marketing Co.",
  description: "",
};

export const instant = false; // allow this route to block on the cookie
export default function RootLayout({ children }: LayoutProps<"/">) {
  async function changeLocaleAction(locale:Locale){
        "use server"
        const store = await cookies();
        store.set("locale", locale);
        console.log(locale);
    }
    const locale = useLocale()
    return (
      <html
        lang={locale}
        dir={locale === 'ar'?'rtl': 'ltr'}
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
            <NextIntlClientProvider>
              <Navbar/>
              {children}
              <Footer />
              </NextIntlClientProvider>
          
        </body>
      </html>
    );
}
