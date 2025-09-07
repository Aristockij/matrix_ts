"use client";

import { useEffect } from "react";
import s from "./index.module.scss";
import Image from "next/image";
import Loading from "@/components/Loading";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTarotAnswer } from "@/hooks/useTarotAnswer";
import { useGetAnswer } from "@/hooks/useGetAnswer";

const AnswerQuestion = ({
  closePopup,
  data,
  errorMessage,
  value,
  serviceCode,
}) => {
  const t = useTranslations("YesNo");
  const router = useRouter();

  const { valueMatrix, counterItem } = useTarotAnswer({
    serviceCode,
    value,
  });

  const { mutate: getAnswer, isSuccess } = useGetAnswer({
    router: router,
    serviceCode,
  });

  useEffect(() => {
    if (isSuccess) closePopup();
  }, [isSuccess]);

  const submitVal = () => {
    getAnswer(valueMatrix);
  };

  return (
    <div className={s.answer}>
      {value?.pickedCards?.length === 5 && <h2>{t("Tarot.popup.title")}</h2>}
      {value?.pickedCards?.length === 3 && (
        <h2>{t("ThreeCard.popup.title")}</h2>
      )}
      {value?.pickedCards?.length === 1 && <h2>{t("YesOrNo.title")}</h2>}

      {!data && (
        <div className={s.preloader}>
          <Loading />
        </div>
      )}
      {data && (
        <div className={s.answer__cards}>
          {data.data.cards.map((el, index) => (
            <div key={el.index}>
              <Image
                key={index * 0.02}
                src={`/cards/deck/${el.index}.jpg`}
                width={160}
                height={260}
                alt='card'
              />
            </div>
          ))}
        </div>
      )}
      {data && <div className={s.answer__text}>{data.data.answer}...</div>}

      {data && (
        <>
          {counterItem > 0 ? (
            <button
              className={`${s.answer__btn} btn btn__secondary btn__gradient`}
              onClick={submitVal}
            >
              {t("ThreeCard.popup.submit_left")}: {counterItem}
            </button>
          ) : (
            <a
              className={`${s.answer__btn} btn btn__secondary btn__gradient`}
              href='#tariffs'
              onClick={closePopup}
            >
              {t("ThreeCard.popup.submit")}
            </a>
          )}
        </>
      )}
    </div>
  );
};
export default AnswerQuestion;
