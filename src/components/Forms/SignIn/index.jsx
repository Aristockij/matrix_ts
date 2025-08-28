"use client";

import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../InputField";
import { useStore } from "../../../store/profile";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";
import { useUserLogin } from "@/hooks/useUserLogin";

const SignIn = ({ closePopup }) => {
  const t = useTranslations("Enter");

  const mailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const [errorMessage, setErrorMessage] = useState(false);

  const validation = Yup.object().shape({
    email: Yup.string()
      .matches(mailRegExp, t("match__mail"))
      .required(t("error__mail")),
    password: Yup.string().required(t("error__pass")),
  });

  const setProfileState = useStore((state) => state.signInState);

  const { mutate: login, isSuccess, isError } = useUserLogin();

  useEffect(() => {
    if (isError) {
      console.log(isError, "error");
      setErrorMessage(true);
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
          login({ password: values.password, email: values.email });

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>{t("enter")}</h2>
          {errorMessage && <div className={s.error}>{t("signin_error")}</div>}

          <div className={s.field__wrap}>
            <InputField req={true} name={"email"} placeholder={t("mail")} />
            <InputField req={true} name={"password"} placeholder={t("pass")} />
          </div>

          <button
            className='btn btn__secondary btn__gradient'
            type='submit'
            disabled={isSubmitting}
          >
            {t("submit")}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignIn;
