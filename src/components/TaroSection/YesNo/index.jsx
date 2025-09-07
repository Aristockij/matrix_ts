"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import PopupContainer from "../../PopupContainer";
import { useTranslations } from "next-intl";
import TouchCard from "@/components/TouchCard";
import AnswerQuestion from "../AnswerQuestion";
import { useTarotInfo } from "@/hooks/useTarotInfo";
import { useGetAnswer } from "@/hooks/useGetAnswer";
import { useTarotAnswer } from "@/hooks/useTarotAnswer";
import { useRouter } from "next/navigation";

import s from "./index.module.scss";
import d from "../index.module.scss";

const YesNo = () => {
  const t = useTranslations("YesNo");
  const router = useRouter();

  const [num, setNum] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [arrayCard, setArrayCard] = useState([]);
  const [textareaVal, setTextareaVal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [dataAnswer, setDataAnswer] = useState(null);

  const getCardArray = useCallback((cards) => {
    setArrayCard((prev) => (prev === cards ? prev : cards));
  }, []);

  const arrayIndexCard = useMemo(
    () => arrayCard.map((item) => item?.index),
    [arrayCard]
  );

  const getAnswer = useCallback((e) => {
    // e?.preventDefault?.();
    setNum(Math.floor(Math.random() * 2) + 1);
    setOpenPopup(true);
  }, []);

  const cardDisabled = useMemo(
    () => textareaVal.trim().length === 0,
    [textareaVal]
  );

  const { mutate: mutation } = useTarotInfo({
    onSuccess: (data) => setDataAnswer(data),
    onError: (error) => setErrorMessage(error.message),
  });

  const value = useMemo(
    () => ({
      question: textareaVal,
      pickedCards: arrayIndexCard,
      serviceCode: "TARO_SPREAD",
    }),
    [textareaVal, arrayIndexCard]
  );

  const { valueMatrix, counterItem } = useTarotAnswer({
    serviceCode: "TARO_SPREAD",
    value,
  });

  const { mutate: getAnswerLink } = useGetAnswer({
    router: router,
    serviceCode: "TARO_SPREAD",
  });

  const submitVal = useCallback(
    (e) => {
      // e?.preventDefault?.();
      if (valueMatrix) getAnswerLink(valueMatrix);
    },
    [getAnswerLink, valueMatrix]
  );

  const onSubmitForm = useCallback(
    (e) => {
      // e.preventDefault();
      mutation(value);
    },
    [mutation, value]
  );
  const closePopup = useCallback(() => setOpenPopup(false), []);

  return (
    <>
      <div className={d.wrapper}>
        <p>{t("YesOrNo.subtitle")}</p>
        <form action={onSubmitForm} className={d.form}>
          <textarea
            className={d.form__input}
            component={"textarea"}
            name='question'
            id='question'
            onChange={(el) => setTextareaVal(el.target.value)}
            value={textareaVal}
            placeholder={t("textarea_placeholder")}
          />

          <TouchCard
            limitCard={1}
            getCardArray={getCardArray}
            disabled={cardDisabled}
          />
          <>
            {counterItem > 0 ? (
              <button
                className={`${s.answer__btn} btn btn__secondary btn__gradient`}
                onClick={submitVal}
                disabled={arrayCard.length === 0 ? true : false}
              >
                {t("ThreeCard.popup.submit_left")}: {counterItem}
              </button>
            ) : (
              <button
                className={`${s.btn__width} btn btn__primary btn__gradient`}
                onClick={getAnswer}
                disabled={arrayCard.length === 0 ? true : false}
              >
                {t("btn")}
              </button>
            )}
          </>
        </form>
      </div>

      <PopupContainer OpenPopup={openPopup} ClosePopup={closePopup}>
        <AnswerQuestion />
      </PopupContainer>
    </>
  );
};
export default YesNo;
