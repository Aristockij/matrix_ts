"use client";

import { useEffect, useState } from "react";
import PersonalInfo from "../PersonalInfo";
import ChakraInfo from "../ChakraInfo";
import { useTranslations, useLocale } from "next-intl";
import s from "./index.module.scss";
import { useGetProfile } from "@/hooks/useGetProfile";
import PopupContainer from "@/components/PopupContainer";
import { useMatrix } from "@/hooks/useMatrix";
import Enter from "@/components/Enter";
import RelationChakraInfo from "@/components/RelationChakraInfo";
import ChakraSoc from "@/components/ChakraSoc";
import { useRouter } from "next/navigation";
import { usePayment } from "@/hooks/usePayment";
import { stripeProducts, stripeProductsTest } from "@/constants/stripeProducts";
import { useItemsMatrixCalc } from "@/hooks/useItemsMatrixCalc";

const PersonMatrix = ({
  data,
  name,
  date,
  name2,
  date2,
  serviceCode,
  paydItem,
}) => {
  const d = useTranslations("Matrix");
  const t = useTranslations("Tariffs");
  const locale = useLocale();
  const router = useRouter();

  const [isOpenPopup, setOpenPopup] = useState(false);
  const [isFailPay, setFailPat] = useState(false);

  const [valueMatrix, setValueMatrix] = useState({
    name,
    birthDate: date,
    name2,
    birthDate2: date2,
    serviceCode,
    userItemId: null,
  });

  const redirectURL =
    (serviceCode === "PERSONAL_MATRIX" &&
      `/matrixa_preview?name=${name}&birthDate=${date}&isPerson=${"true"}`) ||
    (serviceCode === "RELATION_MATRIX" &&
      `/matrixa_preview?name=${name}&birthDate=${date}&name2=${name2}&birthDate2=${date2}&isSovmest=${"true"}`) ||
    (serviceCode === "FINANCE_MATRIX" &&
      `/matrixa_preview?name=${name}&birthDate=${date}&isFinance=${"true"}`);

  const { mutate: isPay } = useMatrix({
    onSuccess: (data) => {
      router.push(
        `/matrix/${data.data.id}?serviceCode=${serviceCode}&id=${data.data.id}&paydItem=true`
      );
    },
  });

  const person = [
    { name: data?.name || null, date: data?.birthDate || null },
    { name: data?.name2 || null, date: data?.birthDate2 || null },
  ];

  const parsedData = data?.table?.map((item) => [
    item.physic,
    item.energy,
    item.emotions,
  ]);
  const { data: profileData } = useGetProfile();

  const { errorStripe, errorUkassa, checkoutStripe, checkoutUkassa } =
    usePayment();

  useEffect(() => {
    if (errorStripe || errorUkassa) {
      failPay();
    }
  }, [errorStripe, errorUkassa]);

  const { currentId, isPayd, counterItem } = useItemsMatrixCalc({
    valueMatrix,
    serviceCode,
    setValueMatrix,
  });

  const openPopup = (props) => {
    setOpenPopup(true);
  };

  const closePopup = () => {
    setOpenPopup(false);
  };

  const failPay = () => {
    openPopup();
    setFailPat(true);

    setTimeout(() => {
      closePopup();
      setFailPat(false);
    }, 5000);
  };

  const handlePayment = () => {
    if (locale === "en") {
      checkoutStripe({
        price: stripeProductsTest[0],
        email: profileData.email,
        offerId: 2,
        redirectURL: redirectURL,
      });
    } else {
      checkoutUkassa({
        price: 990,
        email: profileData.email,
        offerId: 2,
        redirectURL: redirectURL,
      });
    }
  };

  return (
    <>
      {serviceCode !== "RELATION_MATRIX" ? (
        <ChakraInfo data={data} chakraInfo={parsedData} />
      ) : (
        <RelationChakraInfo data={data} />
      )}

      {!paydItem && (
        <div className={s.btn__wrap}>
          {isPayd ? (
            <div
              className={`btn btn__primary btn__gradient btn__gradient`}
              onClick={() => {
                isPay(valueMatrix);
              }}
            >
              {d("popup.quantity")}: {counterItem}
            </div>
          ) : (
            <button
              className={`btn btn__primary btn__gradient btn__gradient`}
              onClick={() => {
                profileData?.email ? handlePayment() : openPopup();
              }}
            >
              {d("popup.btn")}
            </button>
          )}
        </div>
      )}

      {data && data.calc.PURPOSE && <ChakraSoc data={data} />}

      {serviceCode !== "RELATION_MATRIX" && (
        <PersonalInfo
          person={person}
          options={data?.transcriptions}
          togglePopup={() =>
            profileData?.email ? handlePayment() : openPopup()
          }
          isPayd={isPayd}
          title={d("popup.quantity")}
          counterItem={counterItem}
          calcFunc={() => isPay(valueMatrix)}
        />
      )}
      <PopupContainer OpenPopup={isOpenPopup} ClosePopup={closePopup}>
        {!isFailPay && <Enter closePopup={closePopup} setterBtn={true} />}
        {isFailPay && (
          <>
            <br />
            <br />
            <h3>{t("error")}</h3>
          </>
        )}
      </PopupContainer>
    </>
  );
};
export default PersonMatrix;
