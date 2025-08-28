import BtnsLinks from "../../../../components/BtnsLinks";
import s from "../../index.module.scss";
import ThreeCard from "../../../../components/TaroInfo/ThreeCard";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("TreeCards");

  return (
    <>
      <BtnsLinks links={true}>
        <div className={s.info__wrap}>
          <h3 className={s.info__title}>{t("title")}</h3>
          <h3 className={s.info__subtitle}>{t("from")} 13.10.2024</h3>
        </div>
      </BtnsLinks>
      <ThreeCard />
    </>
  );
};
export default page;
