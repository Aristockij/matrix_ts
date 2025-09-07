"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../InputField";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useItemsMatrixCalc } from "@/hooks/useItemsMatrixCalc";
import { useMatrix } from "@/hooks/useMatrix";

const FormCompatibility = () => {
  const t = useTranslations("Matrix");
  const router = useRouter();

  const dateRegExp = /^\d{2}\.\d{2}\.\d{4}$/;
  const dateMask = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];

  const validation = Yup.object().shape({
    name: Yup.string().required("введите имя"),
    birthDate: Yup.string()
      .matches(dateRegExp, "неверный формат даты")
      .required("введите дату"),
    name2: Yup.string().required("введите имя"),
    birthDate2: Yup.string()
      .matches(dateRegExp, "неверный формат даты")
      .required("введите дату"),
  });

  const [valueMatrix, setValueMatrix] = useState({
    name: "",
    birthDate: "",
    name2: "",
    birthDate2: "",
    serviceCode: "RELATION_MATRIX",
    userItemId: null,
  });

  const serviceCode = "RELATION_MATRIX";
  const { isPayd, counterItem } = useItemsMatrixCalc({
    valueMatrix,
    serviceCode,
    setValueMatrix,
  });

  const { mutate: isPay } = useMatrix({
    onSuccess: (data) => {
      router.push(
        `/matrix/${data.data.id}?serviceCode=${serviceCode}&id=${data.data.id}&paydItem=true`
      );
    },
  });

  return (
    <>
      <Formik
        initialValues={{ name: "", birthDate: "", name2: "", birthDate2: "" }}
        validationSchema={validation}
        onSubmit={(values) => {
          try {
            const val = {
              userItemId: valueMatrix.userItemId,
              name: values.name,
              birthDate: values.birthDate,
              name2: values.name2,
              birthDate2: values.birthDate2,
              serviceCode: "RELATION_MATRIX",
            };

            if (isPayd) {
              isPay(val);
            } else {
              router.push(
                `/matrixa_preview?name=${values.name}&birthDate=${
                  values.birthDate
                }&name2=${values.name2}&birthDate2=${
                  values.birthDate2
                }&isSovmest=${"true"}`
              );

              setSubmitting(false);
            }
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2>{t("Compatibility.title")}</h2>
            <p className={s.subtitle}>{t("Compatibility.subtitle")}</p>

            <div className={s.partner}>
              {t("Compatibility.firstPartner.title")}
            </div>
            <div className={s.field__wrap}>
              <InputField
                name={"name"}
                placeholder={t("Compatibility.firstPartner.name")}
              />
              <InputField
                name={"birthDate"}
                mask={dateMask}
                // type='date'
                placeholder={t("Compatibility.firstPartner.date")}
              />
            </div>

            <div className={s.partner}>
              {t("Compatibility.secondPartner.title")}
            </div>
            <div className={s.field__wrap}>
              <InputField
                name={"name2"}
                placeholder={t("Compatibility.secondPartner.name")}
              />
              <InputField
                name={"birthDate2"}
                mask={dateMask}
                // type='date'
                placeholder={t("Compatibility.secondPartner.date")}
              />
            </div>

            <button
              className={`${s.btn__submit} btn btn__primary`}
              type='submit'
              disabled={isSubmitting}
            >
              {isPayd
                ? `${t("form.submit_cur")} ${counterItem}`
                : t("Compatibility.btn")}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormCompatibility;
