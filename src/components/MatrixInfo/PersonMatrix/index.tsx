"use client";
import { useEffect, useState } from "react";
import PersonalInfo from "../PersonalInfo";
import ChakraInfo from "../ChakraInfo";
import { useTranslations, useLocale } from "next-intl";
import s from "./index.module.scss";
import { useGetProfile } from "@/hooks/useGetProfile";
import { useGetItems } from "@/hooks/useGetItems";
import { useCheckout } from "@/hooks/useCheckout";
import { useGetCalculation } from "@/hooks/useGetCalculation";
import PopupContainer from "@/components/PopupContainer";
import { useMatrix } from "@/hooks/useMatrix";
import Enter from "@/components/Enter";
import RelationChakraInfo from "@/components/RelationChakraInfo";
import ChakraSoc from "@/components/ChakraSoc";
import { useRouter } from "next/navigation";
import { usePayment } from "@/hooks/usePayment";
import { stripeProducts, stripeProductsTest } from "@/constants/stripeProducts";

const PersonMatrix = ({
  data,
  name,
  date,
  name2,
  date2,
  serviceCode,
  paydItem,
}: any) => {
  const d = useTranslations("Matrix");
  const t = useTranslations("Tariffs");
  const locale = useLocale();
  const router = useRouter();

  const [isOpenPopup, setOpenPopup] = useState(false);
  const [isFailPay, setFailPat] = useState(false);
  const [isPayd, setIsPayd] = useState(false);
  const [counterItem, setCounterItem] = useState(0);
  const [currentId, setCurrentId] = useState(null);

  const matchCode =
    (serviceCode === "FINANCE_MATRIX" && "PRODUCT_MATRIX_FINANCE") ||
    (serviceCode === "PERSONAL_MATRIX" && "PRODUCT_MATRIX_PERSONAL") ||
    (serviceCode === "RELATION_MATRIX" && "PRODUCT_MATRIX_COMPATIBILITY");

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
      `/matrixa_preview?name=${name}&birthDate=${date}&isFinance=${"true"}`) ||
    "";

  const { mutate: isPay } = useMatrix({
    onSuccess: (data: any) => {
      router.push(
        `/matrix/${data.data.id}?serviceCode=${serviceCode}&id=${data.data.id}&paydItem=true`
      );
    },
  });

  const person = [
    { name: data?.name || null, date: data?.birthDate || null },
    { name: data?.name2 || null, date: data?.birthDate2 || null },
  ];

  const parsedData = data?.table?.map((item: any) => [
    item.physic,
    item.energy,
    item.emotions,
  ]);
  const { data: profileData } = useGetProfile();
  const { data: userItems } = useGetItems();
  const { data: calculationItems, isLoading } = useGetCalculation();

  const { errorStripe, errorUkassa, checkoutStripe, checkoutUkassa } =
    usePayment();

  useEffect(() => {
    if (errorStripe || errorUkassa) {
      failPay();
    }
  }, [errorStripe, errorUkassa]);

  useEffect(() => {
    if (!userItems || !valueMatrix.serviceCode) return;

    const validCodes = [matchCode, "PRODUCT_MATRIX_UNIVERSAL"].filter(Boolean);
    const matchingItem = userItems.find(
      (el: any) => validCodes.includes(el.productCode) && el.amount > 0
    );

    if (matchingItem) {
      setIsPayd(true);
      setValueMatrix((prev) => ({
        ...prev,
        userItemId: matchingItem.id,
      }));
    }

    if (userItems) {
      setCounterItem(() =>
        userItems
          .filter((el: any) => validCodes.includes(el.productCode))
          .reduce((acc: any, cur: any) => acc + cur.amount, 0)
      );
    }
  }, [userItems, matchCode]);

  useEffect(() => {
    if (userItems && calculationItems) {
      userItems.filter((el: any, index: number) => {
        if (el.id === calculationItems.userItemId)
          return setCurrentId(calculationItems.id);
      });
    }
  }, [calculationItems, userItems]);

  const openPopup = () => {
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

  const { mutate: checkout, isSuccess, isError } = useCheckout();

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
              className={`btn btn__primary btn__gradient`}
              onClick={() => {
                isPay(valueMatrix as any);
              }}
            >
              {d("popup.quantity")}: {counterItem}
            </div>
          ) : (
            <button
              className={`btn btn__primary btn__gradient `}
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
          calcFunc={() => isPay(valueMatrix as any)}
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
