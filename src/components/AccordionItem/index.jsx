"use client";
import { useRef } from "react";
import Image from "next/image";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";

const AccordionItem = ({
  togglePopup,
  el,
  index,
  calcFunc,
  isPayd,
  title,
  counterItem,
  active,
  setActive,
}) => {
  const t = useTranslations("Matrix");

  const itemRef = useRef();

  const clickHandler = (id) => {
    if (id === active) setActive(null);
    else setActive(id);
  };

  return (
    <div className={s.accordion__wrap}>
      <div
        className={
          index === active
            ? `${s.accordion__title} ${s.active}`
            : s.accordion__title
        }
        onClick={() => clickHandler(index)}
      >
        {el.title}
        <div className={s.accordion__btn}>
          <Image
            src={"/images/plus.svg"}
            width='18'
            height='18'
            alt='plus-btn'
          />
        </div>
      </div>
      <div
        ref={itemRef}
        className={s.accordion__collapse}
        style={
          index === active
            ? { height: itemRef.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div
          className={s.accordion__body}
          dangerouslySetInnerHTML={{ __html: el.content }}
        ></div>

        {el.is_blocked &&
          (isPayd ? (
            <div
              className={`btn btn__primary btn__secondary`}
              onClick={calcFunc}
            >
              {title}: {counterItem}
            </div>
          ) : (
            <div
              className={`btn btn__primary btn__secondary`}
              onClick={togglePopup}
            >
              {t("popup.btn")}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AccordionItem;
