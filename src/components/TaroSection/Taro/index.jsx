import { useState, useEffect } from "react";
import PopupContainer from "../../PopupContainer";
import Image from "next/image";
import s from "./index.module.scss";
import d from "../index.module.scss";
import { useTranslations } from "next-intl";
import AnswerQuestion from "../AnswerQuestion";
import { useStore } from "../../../store/profile";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import TouchCard from "../../TouchCard";

const Taro = () => {
  const t = useTranslations("YesNo");
  const getToken = useStore((state) => state.token);

  const [openPopup, setOpenPopup] = useState(false);
  const [cardDisabled, setCardDisabled] = useState(true);
  const [arrayCard, setArrayCard] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataAnswer, setDataAnswer] = useState(null);

  const [arrayIndexCard, setArrayIndexCard] = useState([]);
  const [textareaVal, setTextareaVal] = useState("");

  const getAnswer = () => {
    setOpenPopup(true);
  };

  const closePopup = () => {
    setOpenPopup(false);
  };

  const getCardArray = (el) => {
    setArrayCard(el);
  };

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
      return axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/taro/preview`,
        val,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
    },
    onSuccess: (data) => {
      setDataAnswer(data);
      console.log(data);
    },
    onError: (error) => {
      // console.log("server error: ", error);
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
          <button
            className={`${s.btn__width} btn btn__primary btn__gradient`}
            onClick={getAnswer}
            disabled={arrayIndexCard.length < 3 ? true : false}
            type='submit'
          >
            {t("btn")}
          </button>
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
