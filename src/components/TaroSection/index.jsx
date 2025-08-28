"use client";

import { useState } from "react";
import YesNo from "./YesNo";
import ThreeCards from "./ThreeCards";
import Taro from "./Taro";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";

const TaroSection = () => {
  const t = useTranslations("YesNo");
  const btns = [0, 1, 2].map((index) => ({
    title: t(`btns.${index}`),
    order: index,
  }));

  const [active, setActive] = useState(2);

  return (
    <section id='tarot' className='section'>
      <div className={s.title}>
        <h2>{t("title")}</h2>
      </div>
      <div className={s.btns__wrap}>
        {btns.map((el, index) => (
          <button
            className={
              active === el.order ? "btn btn__sm active" : "btn btn__sm"
            }
            key={index}
            onClick={() => setActive(el.order)}
          >
            {el.title}
          </button>
        ))}
      </div>
      {active === 0 && <YesNo />}
      {active === 1 && <ThreeCards />}
      {active === 2 && <Taro />}
    </section>
  );
};
export default TaroSection;
