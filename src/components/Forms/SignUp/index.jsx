"use client";

import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../InputField";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";
import { useStore } from "../../../store/profile";
import { useUserRegister } from "@/hooks/useUserRegister";

const SignUp = ({ closePopup }) => {
  const t = useTranslations("Enter");

  const [errorMessage, setErrorMessage] = useState(null);

  const mailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validation = Yup.object().shape({
    email: Yup.string()
      .matches(mailRegExp, t("match__mail"))
      .required(t("error__mail")),
    password: Yup.string().required(t("error__pass")).min(8, t("min_pass")),
  });
  const setProfileState = useStore((state) => state.signInState);

  const { data, mutate: registration, isSuccess, isError } = useUserRegister();

  useEffect(() => {
    if (isError) {
      console.log(isError, "error");
      setErrorMessage(`${t("email__match")}`);
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      closePopup();
    }
  }, [isSuccess]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setProfileState(values.email, values.password);
          registration(
            { password: values.password, email: values.email },
            {
              onSuccess: () => {
                closePopup();
              },
              onError: () => {
                setErrorMessage(`${t("email__match")}`);
              },
            }
          );

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>{t("registration")}</h2>
          {errorMessage && (
            <>
              <h4>{errorMessage}</h4>
              <br />
            </>
          )}

          <div className={s.field__wrap}>
            <InputField req={true} name={"email"} placeholder={t("mail")} />
            <InputField req={true} name={"password"} placeholder={t("pass")} />
          </div>

          <button
            className='btn btn__secondary btn__gradient'
            type='submit'
            disabled={isSubmitting}
          >
            {t("singUp")}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignUp;
