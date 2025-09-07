"use client";

import s from "./index.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("CookieAccept");

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookie = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={s.wrap}>
      <p>
        {t("text")}

        <Link href='/policy'> {t("link")}</Link>
      </p>
      <button
        className='btn btn__secondary btn__gradient'
        onClick={acceptCookie}
      >
        {t("btn")}
      </button>
    </div>
  );
};
export default index;
