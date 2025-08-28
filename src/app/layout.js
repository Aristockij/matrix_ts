import localFont from "next/font/local";
import "./globals.css";
import "../style/main.scss";
import "swiper/css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import TanstackProvider from "@/components/Provider";
import CookieAccept from "@/components/CookieAccept";

const suisseIntl = localFont({
  src: [
    {
      path: "./fonts/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SuisseIntl-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--suisse-intl",
  display: "swap",
});

export const metadata = {
  title: "Taro",
  description: "this is description for taro",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={suisseIntl.variable}>
        <TanstackProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
            <CookieAccept />
          </NextIntlClientProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
