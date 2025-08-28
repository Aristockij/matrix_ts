import Image from "next/image";
import s from "../index.module.scss";
import { useTranslations } from "next-intl";

const ThreeCard = () => {
  const t = useTranslations("TreeCards");

  const text = Array.from({ length: 3 }).map((el, index) => ({
    title: t(`mockInfo.${index}.title`),
    text: t(`mockInfo.${index}.text`),
  }));

  return (
    <section className={`${s.wrap} section section__wrap__sm`}>
      <div className={s.text}>
        {text.map((el, index) => (
          <div className={s.tarot__info}>
            <div className={s.card__wrap}>
              <Image
                key={index}
                className={s.card}
                src={`/three-card-test/${index + 1}.svg`}
                width={130}
                height={225}
                alt='card'
              />
            </div>
            <div key={index} className={s.text__section}>
              <span className={s.text__bold}>{el.title}</span>
              <p>{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ThreeCard;
