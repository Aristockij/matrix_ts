import Link from "next/link";
import Image from "next/image";

import s from "../index.module.scss";
import d from "./index.module.scss";
import { useTranslations } from "next-intl";
import { useGetCalculation } from "@/hooks/useGetCalculation";

const Calc = () => {
  const t = useTranslations("Profile.Calculation");

  const { data } = useGetCalculation();

  function getServiceInfo(el) {
    if (el.serviceCode === "TARO_SPREAD" && el.cards.length === 5) {
      return `taro/${el.id}`;
    }
    if (el.serviceCode === "TARO_SPREAD" && el.cards.length === 3) {
      return `taro/${el.id}`;
    }

    if (el.serviceCode === "RELATION_MATRIX") {
      return `matrix/${el.id}`;
    }

    if (el.serviceCode === "FINANCE_MATRIX") {
      return `matrix/${el.id}`;
    }
    if (el.serviceCode === "PERSONAL_MATRIX") {
      return `matrix/${el.id}`;
    }
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
                <Link
                  href={{
                    pathname: `${getServiceInfo(el)}`,
                    query: {
                      serviceCode: el.serviceCode,
                      id: el.id,
                      paydItem: "true",
                    },
                  }}
                  className={s.list__el}
                >
                  <div className={s.list__date}>{el.date}</div>
                  <div className={s.list__info}>
                    <div className={s.list__service}>
                      {(el.serviceCode == "TARO_SPREAD" &&
                        el.cards.length === 5 &&
                        t("tarot")) ||
                        (el.serviceCode == "TARO_SPREAD" &&
                          el.cards.length === 3 &&
                          t("threeCard")) ||
                        (el.serviceCode == "RELATION_MATRIX" && t("sovmest")) ||
                        (el.serviceCode == "FINANCE_MATRIX" && t("finance")) ||
                        (el.serviceCode == "PERSONAL_MATRIX" &&
                          t("personMatrix"))}
                    </div>
                    {/* <div className={s.list__name}>{el.name}</div> */}
                    {/* <div className={s.list__born}>{el.born}</div> */}
                  </div>
                  <div className={s.list__arrow}>
                    <Image
                      src='/icons/arrow.svg'
                      width={24}
                      height={24}
                      alt='arrow'
                    />
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
export default Calc;
