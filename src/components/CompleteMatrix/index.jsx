import Image from "next/image";
import { useTranslations } from "next-intl";

import s from "./index.module.scss";

const CompleteMatrix = ({ ClosePopup }) => {
  const t = useTranslations("Matrix");

  const closePopup = () => {
    ClosePopup();
  };

  return (
    <div className={s.wrap}>
      <h2>{t("popup.title")}</h2>
      <div className={s.subtitle}>{t("popup.subtitle")}</div>
      <div className={s.image}>
        <Image
          src='/images/card_matrix.svg'
          width={103}
          height={160}
          alt='card matrix'
        />
      </div>
      <a
        className={`${s.btn} btn btn__secondary btn__gradient`}
        onClick={closePopup}
        href='#tariffs'
      >
        {t("popup.btn")}
      </a>
    </div>
  );
};
export default CompleteMatrix;
