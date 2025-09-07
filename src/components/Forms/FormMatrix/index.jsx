"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../InputField";
import RadioField from "../../RadioField";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useItemsMatrixCalc } from "@/hooks/useItemsMatrixCalc";
import { useMatrix } from "@/hooks/useMatrix";

const FormMatrix = () => {
  const t = useTranslations("Matrix");
  const router = useRouter();

  const dateRegExp = /^\d{2}\.\d{2}\.\d{4}$/;
  const dateMask = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];

  const validation = Yup.object().shape({
    name: Yup.string().required("введите имя"),
    date: Yup.string()
      .matches(dateRegExp, "неверный формат даты")
      .required("введите дату"),
  });

  const [valueMatrix, setValueMatrix] = useState({
    name: "",
    birthDate: "",
    name2: null,
    birthDate2: null,
    serviceCode: "PERSONAL_MATRIX",
    userItemId: null,
  });
  const serviceCode = "PERSONAL_MATRIX";
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
        initialValues={{
          gender: "female",
          name: "",
          date: "",
        }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            router.push(
              `/matrixa_preview?name=${values.name}&birthDate=${
                values.date
              }&isPerson=${"true"}`
            );

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <h2>{t("PersonalMatrix.title")}</h2>
            <p className={s.subtitle}>{t("PersonalMatrix.subtitle")}</p>
            <div
              className={`${s.btn__wrap} flex`}
              role='group'
              aria-labelledby='my-radio-group'
            >
              <RadioField
                value='female'
                name='gender'
                initialName={t("form.btnFemale")}
              />
              <RadioField
                value='male'
                name='gender'
                initialName={t("form.btnMale")}
              />
            </div>
            <div className={s.field__wrap}>
              <InputField name={"name"} placeholder={t("form.firstName")} />
              <InputField
                name={"date"}
                mask={dateMask}
                placeholder={t("form.date")}
              />
            </div>

            <button
              className='btn btn__primary btn__gradient'
              type='submit'
              disabled={isSubmitting}
            >
              {isPayd
                ? `${t("form.submit_cur")} ${counterItem}`
                : t("form.submit")}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormMatrix;
