"use client";
import { useEffect } from "react";
import s from "./index.module.scss";
import Image from "next/image";

const PopupContainer = ({ OpenPopup, ClosePopup, children }) => {
  const closePopup = () => {
    ClosePopup();
  };

  useEffect(() => {
    if (OpenPopup) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "inherit";
    }
  }, []);

  return (
    <>
      {OpenPopup ? (
        <>
          <div className={s.popup__layout} onClick={closePopup} />
          <div className={s.popup__wrap}>
            <div className={s.popup__wrapper}>
              <button className={s.close__btn} onClick={closePopup}>
                <Image
                  src='/images/plus.svg'
                  width={18}
                  height={18}
                  alt='Picture of the author'
                />
              </button>
              {children}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default PopupContainer;
