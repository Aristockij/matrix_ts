"use client";

import s from "./index.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const index = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        Мы используем файлы cookie и обрабатываем некоторые персональные данные.
        Используя наш сервис Вы даете{" "}
        <Link href='/policy'>Согласие на обработку персональных данных.</Link>
      </p>
      <button
        className='btn btn__secondary btn__gradient'
        onClick={acceptCookie}
      >
        принять
      </button>
    </div>
  );
};
export default index;
