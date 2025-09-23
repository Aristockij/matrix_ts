"use client";

import { useEffect, useState } from "react";
import s from "./index.module.scss";
import { useTranslations, useLocale } from "next-intl";
import { useGetProfile } from "@/hooks/useGetProfile";

import { useGetTariffs } from "@/hooks/useGetTariffs";
import PopupContainer from "@/components/PopupContainer";
import Enter from "@/components/Enter";
import { stripeProducts, stripeProductsTest } from "@/constants/stripeProducts";
import { usePayment } from "@/hooks/usePayment";

const Tariffs = () => {
  const [isOpenPopup, setOpenPopup] = useState(false);
  const [popupFail, openPopupFail] = useState(false);

  const locale = useLocale();

  const t = useTranslations("Tariffs");

  const { data } = useGetProfile();
  const {
    data: offersData,
    isLoading: tariffsLoading,
    isError: tariffsError,
  } = useGetTariffs();

  const { errorStripe, errorUkassa, checkoutStripe, checkoutUkassa } =
    usePayment();

  useEffect(() => {
    if (errorStripe || errorUkassa) {
      failPay();
    }
  }, [errorStripe, errorUkassa]);

  if (tariffsLoading) return <div>Загрузка...</div>;
  if (tariffsError || !offersData) return <div>Ошибка загрузки</div>;

  const handlePayment = (props: any) => {
    if (locale === "en") {
      checkoutStripe({
        price: stripeProductsTest[props.index],
        email: data.email,
        offerId: props.info.id,
      });
    } else {
      checkoutUkassa({
        price: props.info.cost,
        email: data.email,
        offerId: props.info.id,
      });
    }
  };

  const TariffsInfo = (props: any) => {
    return (
      <>
        <div className={s.wrap}>
          <div className={s.wrapper}>
            <div>
              <div className={s.title}>{props.info.name}</div>
              <div className={s.price}>
                {props.info.cost} {locale === "en" ? "$" : "руб."}
              </div>
            </div>

            <div>
              <ul className={s.list}>
                {props &&
                  props.info.props.map((el: any, index: number) => (
                    <li key={index}>{el}</li>
                  ))}
              </ul>
            </div>
          </div>

          <button
            className='btn btn__primary btn__gradient'
            onClick={() =>
              data && data.email ? handlePayment(props) : openPopup()
            }
          >
            {t("btn")}
          </button>
        </div>
      </>
    );
  };

  const openPopup = () => {
    setOpenPopup(true);
  };

  const closePopup = () => {
    setOpenPopup(false);
  };

  const closePopupFail = () => {
    openPopupFail(false);
  };

  const failPay = () => {
    openPopupFail(true);

    setTimeout(() => {
      closePopupFail();
    }, 2000);
  };

  return (
    <>
      <section id='tariffs' className='section section__wrap'>
        <h2 className={s.title__main}>{t("title")}</h2>
        <div className={`${s.section__wrap} cols`}>
          {offersData &&
            offersData.map((e: any, i: number) => (
              <TariffsInfo info={e} index={i} key={i} />
            ))}
        </div>
      </section>

      <PopupContainer OpenPopup={isOpenPopup} ClosePopup={closePopup}>
        <Enter closePopup={closePopup} setterBtn={true} />
      </PopupContainer>

      <PopupContainer OpenPopup={popupFail} ClosePopup={closePopupFail}>
        <br />
        <br />
        <br />
        <div>{t("error")}</div>
      </PopupContainer>
    </>
  );
};
export default Tariffs;
