import SignIn from "../Forms/SignIn";
import SignUp from "../Forms/SignUp";
import { useEffect, useState } from "react";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";

const Enter = ({ closePopup, setterBtn }) => {
  const [activeBtn, setActiveBtn] = useState(1);
  const t = useTranslations("Enter");

  useEffect(() => {
    if (setterBtn) {
      setActiveBtn(2);
    }
  }, []);

  return (
    <div className={s.wrap}>
      <div className={s.btns__wrap}>
        <button
          className={activeBtn === 1 ? "btn btn__sm active" : "btn btn__sm"}
          onClick={() => setActiveBtn(1)}
        >
          {t("enter")}
        </button>
        <button
          className={activeBtn === 2 ? "btn btn__sm active" : "btn btn__sm"}
          onClick={() => setActiveBtn(2)}
        >
          {t("registration")}
        </button>
      </div>
      {activeBtn === 1 ? (
        <SignIn closePopup={closePopup} />
      ) : (
        <SignUp closePopup={closePopup} />
      )}
    </div>
  );
};
export default Enter;
