import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../InputField";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

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

  return (
    <>
      <Formik
        initialValues={{ name: "", birthDate: "", name2: "", birthDate2: "" }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            router.push(
              `/matrixa_preview?name=${values.name}&birthDate=${
                values.birthDate
              }&name2=${values.name2}&birthDate2=${
                values.birthDate2
              }&isSovmest=${"true"}`
            );

            setSubmitting(false);
          }, 400);
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
              className={`${s.btn__submit} btn btn__primary btn__gradient`}
              type='submit'
              disabled={isSubmitting}
            >
              {t("Compatibility.btn")}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormCompatibility;
