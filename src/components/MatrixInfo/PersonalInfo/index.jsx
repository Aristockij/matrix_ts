"use client";

import AccordionItem from "../../AccordionItem";
import s from "../index.module.scss";
import { useTranslations } from "next-intl";
import { useState } from "react";

const PersonalInfo = ({
  person,
  options,
  togglePopup,
  calcFunc,
  isPayd,
  title,
  counterItem,
}) => {
  const t = useTranslations("Finance");
  const [active, setActive] = useState(null);

  return (
    <section className={`${s.section__person} section section__wrap__sm cols`}>
      <div className={` flex-1`}>
        {person.map((el, index) => (
          <div key={index}>
            <h3 className={s.name}>{el.name}</h3>
            <h3 className={s.date}>{el.date}</h3>
          </div>
        ))}
      </div>
      <div className={` flex-1`}>
        <div className={s.dropdown__wrap}>
          {options?.map((el, index) => (
            <AccordionItem
              togglePopup={togglePopup}
              key={index}
              el={el}
              index={index}
              calcFunc={calcFunc}
              isPayd={isPayd}
              title={title}
              counterItem={counterItem}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PersonalInfo;
