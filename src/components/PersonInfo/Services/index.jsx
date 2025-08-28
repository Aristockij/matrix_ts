import { useGetItems } from "@/hooks/useGetItems";
import s from "../index.module.scss";
import d from "./index.module.scss";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Profile.Services");
  const { data } = useGetItems();

  console.log("данные items: ", data);

  const titlesMap = {
    PRODUCT_TARO_UNIVERSAL: t("tarot"),
    PRODUCT_MATRIX_UNIVERSAL: t("matrix"),
    PRODUCT_MATRIX_FINANCE: t("finance"),
    PRODUCT_MATRIX_PERSONAL: t("personMatrix"),
    PRODUCT_MATRIX_COMPATIBILITY: t("matrixSovmest"),
  };

  function itemTitle(productCode) {
    return titlesMap[productCode] || "";
  }

  return (
    <section className={`section section__wrap ${s.section}`}>
      <div className={d.title}>
        <h3>{t("title")}</h3>
      </div>
      <div>
        <ul className={s.list}>
          {data &&
            data.map((el, index) => (
              <li key={index}>
                <div className={s.list__el}>
                  <div className=''>
                    <div className={s.list__service__top}>
                      <div className={s.list__service}>
                        {itemTitle(el.productCode)}
                      </div>
                      <div className={s.list__gray}>{t("transcripts")}</div>
                    </div>

                    {/* <div className={s.list__time}>{el.date}</div> */}
                    {/* <div className={s.list__gray}>{t("period")}</div> */}
                  </div>
                  <div className={s.list__count}>{el.amount}</div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
export default Services;
