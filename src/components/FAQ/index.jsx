"use client";

import AccordionItem from "../AccordionItem";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";
import { useState } from "react";

const FAQ = () => {
  const t = useTranslations("FAQ");

  const question = Array.from({ length: 6 }).map((el, index) => ({
    title: t(`questions.${index}.title`),
    content: t(`questions.${index}.content`),
  }));
  const [active, setActive] = useState(null);

  return (
    <section id='faq' className={`${s.faq__container} section cols`}>
      <div>
        <h2>{t("title")}</h2>
      </div>
      <div className={s.faq__list}>
        {question.map((el, index) => (
          <AccordionItem
            key={index}
            el={el}
            index={index}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </section>
  );
};
export default FAQ;
