"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import PopupContainer from "../../PopupContainer";
import s from "./index.module.scss";
import d from "../index.module.scss";
import { useTranslations } from "next-intl";
import TouchCard from "../../TouchCard";
import AnswerQuestion from "../AnswerQuestion";
import { useTarotInfo } from "@/hooks/useTarotInfo";
import { useGetAnswer } from "@/hooks/useGetAnswer";
import { useTarotAnswer } from "@/hooks/useTarotAnswer";
import { useRouter } from "next/navigation";

const Taro = () => {
  const t = useTranslations("YesNo");
  const router = useRouter();

  const [num, setNum] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [arrayCard, setArrayCard] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataAnswer, setDataAnswer] = useState(null);

  const [textareaVal, setTextareaVal] = useState("");

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

  const { mutate: getAnswerLink, isPending } = useGetAnswer({
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
        {/* <h2>{t("Tarot.title")}</h2> */}
        <p>{t("Tarot.subtitle")}</p>

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
          <div className='mt-10'>{t("taro_step_2")}</div>
          <TouchCard
            limitCard={5}
            getCardArray={getCardArray}
            disabled={cardDisabled}
          />
          <>
            {counterItem > 0 ? (
              <button
                className={`${s.answer__btn} btn btn__secondary btn__gradient`}
                disabled={arrayIndexCard.length < 5 ? true : false}
                onClick={submitVal}
              >
                {t("ThreeCard.popup.submit_left")}: {counterItem}
              </button>
            ) : (
              <button
                className={`${d.btn__width} btn btn__primary btn__gradient`}
                onClick={getAnswer}
                disabled={arrayIndexCard.length < 5 ? true : false}
                type='submit'
              >
                {t("btn")}
              </button>
            )}
          </>
        </form>
      </div>

      <PopupContainer OpenPopup={openPopup} ClosePopup={closePopup}>
        <AnswerQuestion
          closePopup={closePopup}
          errorMessage={errorMessage}
          data={dataAnswer}
          value={value}
          serviceCode={"TARO_SPREAD"}
        />
      </PopupContainer>
    </>
  );
};
export default Taro;
