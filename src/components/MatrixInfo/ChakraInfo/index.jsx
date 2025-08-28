import ChakraContent from "@/components/ChakraContent";
import s from "../index.module.scss";
import { useTranslations } from "next-intl";

const ChakraInfo = ({ data, chakraInfo }) => {
  const t = useTranslations("Chakra");

  const chakraTitle = Array.from({ length: 8 }).map((el, index) => ({
    title: t(`values.${index}.title`),
    subtitle: t(`values.${index}.subtitle`),
  }));

  return (
    <section className={`${s.chakra__wrap} section section__wrap__sm flex`}>
      <div className={`${s.chakra__img__wrapper} flex-1`}>
        <div className={s.chakra__img}>
          <ChakraContent data={data} />
        </div>
      </div>
      <div className='flex-1'>
        <div className={s.table__wrap}>
          <div className={s.table__title}>
            <div>{t("header.chakra")}</div>
            <div>{t("header.physic")}</div>
            <div>{t("header.energy")}</div>
            <div>{t("header.emotions")}</div>
          </div>
          {chakraInfo?.map((el, index) => (
            <div key={index} className={s.table__row}>
              <div className={s.table__left}>
                <span>{chakraTitle[index].title}</span>
                {chakraTitle[index].subtitle && (
                  <span>{chakraTitle[index].subtitle}</span>
                )}
              </div>
              <div className={s.table__num}>
                {el.map((k, i) => (
                  <div key={i}>{k}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ChakraInfo;
