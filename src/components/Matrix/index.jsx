"use client";
import FormMatrix from "../Forms/FormMatrix";
import FormCompatibility from "../Forms/FormCompatibility";
import FormFinance from "../Forms/FormFinance";
import { useState } from "react";
import Image from "next/image";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";

const Matrix = () => {
  const t = useTranslations("Matrix");

  const [activeBtn, setActiveBtn] = useState(0);
  const btns = [0, 1, 2].map((index) => ({
    title: t(`matrix__btn.${index}`),
    dataActive: index,
  }));

  return (
    <section id='matrix' className='section'>
      <div className={`${s.cols__gap} cols`}>
        <div className='cols-1'>
          <div className={s.btns__wrap}>
            {btns.map((el, index) => (
              <button
                key={index}
                className={
                  activeBtn === el.dataActive
                    ? "btn btn__sm active"
                    : "btn btn__sm"
                }
                onClick={() => setActiveBtn(el.dataActive)}
              >
                {el.title}
              </button>
            ))}
          </div>
          {activeBtn == 0 && <FormMatrix />}
          {activeBtn == 1 && <FormCompatibility />}
          {activeBtn == 2 && <FormFinance />}
        </div>

        <div className={s.card__wrap}>
          <div className={s.card__one}>
            <Image
              src='/images/card_matrix.svg'
              width={195}
              height={302}
              alt='рубашка карты'
            />
          </div>
          <div className={s.card__second}>
            <Image
              src='/images/card_matrix.svg'
              width={195}
              height={302}
              alt='рубашка карты'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Matrix;
