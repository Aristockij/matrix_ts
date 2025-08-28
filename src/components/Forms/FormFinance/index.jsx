import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../InputField";
import RadioField from "../../RadioField";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const FormFinance = () => {
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

  return (
    <>
      <Formik
        initialValues={{ gender: "female", name: "", date: "" }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            router.push(
              `/matrixa_preview?name=${values.name}&birthDate=${
                values.date
              }&isFinance=${"true"}`
            );

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2>{t("Finance.title")}</h2>
            <p className={s.subtitle}>{t("Finance.subtitle")}</p>
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
                // type='date'
                placeholder={t("form.date")}
              />
            </div>

            <button
              className='btn btn__primary btn__gradient'
              type='submit'
              disabled={isSubmitting}
            >
              {t("form.submit")}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormFinance;
