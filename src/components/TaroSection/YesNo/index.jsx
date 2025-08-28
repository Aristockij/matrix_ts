"use client";
import { useState, useEffect } from "react";
import PopupContainer from "../../PopupContainer";
import { useTranslations } from "next-intl";
import TouchCard from "@/components/TouchCard";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@/helpers/axiosInstance";
import AnswerQuestion from "../AnswerQuestion";

import s from "./index.module.scss";
import d from "../index.module.scss";

const YesNo = () => {
  const t = useTranslations("YesNo");

  const [cardDisabled, setCardDisabled] = useState(true);
  const [num, setNum] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [arrayCard, setArrayCard] = useState([]);
  const [arrayIndexCard, setArrayIndexCard] = useState([]);
  const [textareaVal, setTextareaVal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [dataAnswer, setDataAnswer] = useState(null);

  const getCardArray = (el) => {
    setArrayCard(el);
  };

  const getAnswer = () => {
    const randomAnswer = Math.floor(Math.random() * 2) + 1;
    setNum(randomAnswer);
    setOpenPopup(true);
  };

  const closePopup = () => {
    setOpenPopup(false);
  };
  useEffect(() => {
    if (arrayCard) {
      const indexArray = arrayCard.map((item) => item?.index);
      setArrayIndexCard(indexArray);
    }
  }, [arrayCard]);

  useEffect(() => {
    if (textareaVal.length > 0) {
      setCardDisabled(false);
      getCardArray();
    } else {
      setCardDisabled(true);
    }
  }, [textareaVal]);

  useEffect(() => {
    if (arrayCard) {
      const indexArray = arrayCard.map((item) => item.index);
      setArrayIndexCard(indexArray);
    }
  }, [arrayCard]);

  useEffect(() => {
    if (textareaVal.length > 0) {
      setCardDisabled(false);
      getCardArray();
    } else {
      setCardDisabled(true);
    }
  }, [textareaVal]);

  const mutation = useMutation({
    mutationFn: (val) => {
      console.log("запрос: ", val);
      return axiosClient.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/taro/preview`,
        val
      );
    },
    onSuccess: (data) => {
      setDataAnswer(data);
      console.log(data);
    },
    onError: (error) => {
      console.log("server error: ", error);
      setErrorMessage(error.message);
    },
  });

  let value = {
    question: textareaVal,
    pickedCards: arrayIndexCard,
    serviceCode: "TARO_SPREAD",
  };

  const onSubmitForm = () => {
    mutation.mutate(value);
  };

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
          <button
            className={`${s.btn__width} btn btn__primary`}
            onClick={getAnswer}
          >
            {t("btn")}
          </button>
        </form>
      </div>

      <PopupContainer OpenPopup={openPopup} ClosePopup={closePopup}>
        <AnswerQuestion />
      </PopupContainer>
    </>
  );
};
export default YesNo;
