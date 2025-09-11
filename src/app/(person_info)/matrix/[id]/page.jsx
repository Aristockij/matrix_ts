"use client";

import BtnsLinks from "../../../../components/BtnsLinks";
import s from "../../index.module.scss";
import PersonMatrix from "../../../../components/MatrixInfo/PersonMatrix";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useGetCalculationDetail } from "@/hooks/useGetCalculationDetail";

const page = () => {
  const t = useTranslations("PersonMatrix");

  const params = useSearchParams();

  const category = params.get("serviceCode");
  const paydItem = params.get("paydItem");
  const id = params.get("id");

  const { data } = useGetCalculationDetail(id);

  const title =
    (category === "FINANCE_MATRIX" && t("title_finance")) ||
    (category === "PERSONAL_MATRIX" && t("title_personal")) ||
    (category === "RELATION_MATRIX" && t("title_relation"));

  return (
    <>
      <BtnsLinks links={true}>
        <div className={s.info__wrap}>
          <h3 className={s.info__title}>{title}</h3>
          {/* <h3 className={s.info__subtitle}>{t("from")} 13.10.2024</h3> */}
        </div>
      </BtnsLinks>
      <PersonMatrix data={data} paydItem={paydItem} />
    </>
  );
};
export default page;
