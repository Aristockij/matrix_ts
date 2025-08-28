import BtnsLinks from "../../../../components/BtnsLinks";
import s from "../../index.module.scss";
import SovmestMatrix from "../../../../components/MatrixInfo/SovmestMatrix";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Sovmestimost");

  return (
    <>
      <BtnsLinks links={true}>
        <div className={s.info__wrap}>
          <h3 className={s.info__title}>{t("title")}</h3>
          <h3 className={s.info__subtitle}>{t("from")} 13.10.2024</h3>
        </div>
      </BtnsLinks>
      <SovmestMatrix />
    </>
  );
};
export default page;
