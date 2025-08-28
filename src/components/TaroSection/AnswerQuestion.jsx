"use client";
import { useEffect, useState } from "react";
import s from "./index.module.scss";
import Image from "next/image";
import Loading from "@/components/Loading";
import { useTranslations } from "next-intl";
import { useMutation } from "@tanstack/react-query";
import { useGetItems } from "@/hooks/useGetItems";
import { useRouter } from "next/navigation";
import axiosClient from "@/helpers/axiosInstance";

const AnswerQuestion = ({
  closePopup,
  data,
  errorMessage,
  value,
  serviceCode,
}) => {
  const t = useTranslations("YesNo");
  const [valueMatrix, setValueMatrix] = useState(null);
  const [counterItem, setCounterItem] = useState(0);
  const { data: userItems } = useGetItems();
  const router = useRouter();

  const matchCode = serviceCode === "TARO_SPREAD" && "PRODUCT_TARO_UNIVERSAL";

  useEffect(() => {
    if (!userItems) return;
    const matchingItem = userItems.find(
      (el) => el.productCode === matchCode && el.amount > 0
    );
    console.log("count items tarot: ", matchingItem);

    if (matchingItem && value) {
      setValueMatrix(() => ({
        question: value.question,
        pickedCards: value.pickedCards,
        serviceCode: serviceCode,
        userItemId: matchingItem.id,
      }));
    }

    if (userItems) {
      setCounterItem(() =>
        userItems
          .filter((el) => el.productCode === matchCode)
          .reduce((acc, cur) => acc + cur.amount, 0)
      );
    }
  }, [userItems, value]);

  const mutation = useMutation({
    mutationFn: (val) => {
      // console.log("запрос: ", val);
      return axiosClient.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/taro`,
        valueMatrix
      );
    },
    onSuccess: (data) => {
      closePopup();
      console.log("data tarot: ", data);
      router.push(
        `/taro/${data.data.id}?serviceCode=${serviceCode}&id=${data.data.id}&paydItem=true`
      );
    },
    onError: (error) => {
      console.log("server error: ", error);
    },
  });

  const submitVal = () => {
    mutation.mutate();
  };
  console.log("value props: ", value?.pickedCards?.length);
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
