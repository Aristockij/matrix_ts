import { useEffect, useState } from "react";
import PopupContainer from "../../PopupContainer";
import d from "../index.module.scss";
import { useTranslations } from "next-intl";
import TouchCard from "@/components/TouchCard";
import AnswerQuestion from "../AnswerQuestion";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "@/helpers/axiosInstance";

const ThreeCards = () => {
  const t = useTranslations("YesNo");

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
        <p>{t("ThreeCard.subtitle")}</p>

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
          <div className='mt-10'>{t("treecards_step_2")}</div>
          <TouchCard
            limitCard={3}
            getCardArray={getCardArray}
            disabled={cardDisabled}
          />
          <button
            className={`${d.btn__width} btn btn__primary`}
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
export default ThreeCards;
