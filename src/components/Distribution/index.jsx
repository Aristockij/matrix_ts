"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../InputField";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useSubscription } from "@/hooks/useSubscription";

import s from "./index.module.scss";

const Distribution = () => {
  const t = useTranslations("Distribution");

  const [switchSection, setSwitchSection] = useState(0);
  const mailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validation = Yup.object().shape({
    email: Yup.string()
      .matches(mailRegExp, t("form.match__mail"))
      .required(t("form.error__mail")),
  });
  const { mutate } = useSubscription();

  return (
    <section className='section section__wrap'>
      {switchSection === 0 ? (
        <Formik
          initialValues={{ name: "", email: "" }}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              mutate(values);
              setSwitchSection(1);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={s.inner__container}>
              <h2 className={s.title}>{t("title")}</h2>

              <div>
                <InputField
                  req={true}
                  name={"email"}
                  classname={s.input}
                  placeholder={t("form.mail")}
                />

                <button
                  className={`${s.submit} btn btn__primary btn__gradient`}
                  type='submit'
                  disabled={isSubmitting}
                >
                  {t("form.submit")}
                </button>
                <div className={s.description}>{t("form.description")}</div>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div className={s.subscribe__wrap}>
          <h2>{t("subscribe.message")}</h2>
          <div className={s.subscribe__subtitle}>
            {t("subscribe.submessage")}
          </div>
        </div>
      )}
    </section>
  );
};
export default Distribution;
