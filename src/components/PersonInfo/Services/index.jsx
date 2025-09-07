import { useGetItems } from "@/hooks/useGetItems";
import s from "../index.module.scss";
import d from "./index.module.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Services = () => {
  const t = useTranslations("Profile.Services");
  const { data } = useGetItems();

  // console.log("данные items: ", data);

  const titlesMap = {
    PRODUCT_TARO_UNIVERSAL: t("tarot"),
    PRODUCT_MATRIX_UNIVERSAL: t("matrix"),
    PRODUCT_MATRIX_FINANCE: t("finance"),
    PRODUCT_MATRIX_PERSONAL: t("personMatrix"),
    PRODUCT_MATRIX_COMPATIBILITY: t("matrixSovmest"),
  };

  const MATRIX_CODES = [
    "PRODUCT_MATRIX_UNIVERSAL",
    "PRODUCT_MATRIX_FINANCE",
    "PRODUCT_MATRIX_PERSONAL",
    "PRODUCT_MATRIX_COMPATIBILITY",
  ];

  const hrefLink = (el) => {
    if (MATRIX_CODES.includes(el.productCode)) return "/#matrix";
    if (el.productCode === "PRODUCT_TARO_UNIVERSAL") return "/#tarot";
    return "/";
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
                <Link href={hrefLink(el)} data-product-code={el.productCode}>
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
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
export default Services;
