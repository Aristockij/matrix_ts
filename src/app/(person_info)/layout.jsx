import Header from "../../components/Header";
import Footer from "../../components/Footer";
import localFont from "next/font/local";
import "../globals.css";
import "../../style/main.scss";
import "swiper/css";

const suisseIntl = localFont({
  src: [
    {
      path: "../fonts/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SuisseIntl-Medium.woff2",
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

export default function RootLayout({ children }) {
  return (
    <div className={suisseIntl.variable}>
      <Header />
      <main className='container content__container'>{children}</main>
      <Footer />
    </div>
  );
}
