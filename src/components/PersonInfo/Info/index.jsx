import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../InputField";
import RadioField from "../../RadioField";
import { useTranslations } from "next-intl";
import { logoutUser } from "@/helpers/axiosInstance";
import { useGetProfile } from "@/hooks/useGetProfile";
import { useProfileUpdate } from "@/hooks/useProfileUpdate";

import s from "../index.module.scss";
import d from "./index.module.scss";

const Info = () => {
  const t = useTranslations("Profile");
  const { data, isLoading, isError } = useGetProfile();
  const { mutate: updateProfile } = useProfileUpdate();

  const phoneRegExp =
    /\+7-\(?([0-9]{3})\)?-([ .-]?)([0-9]{3})-([0-9]{2})-([0-9]{2})/;

  const dateRegExp = /^\d{2}\.\d{2}\.\d{4}$/;
  const dateMask = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];

  const phoneMask = [
    "+",
    "7",
    "-",
    /[1-9]/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];
  const mailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validation = Yup.object().shape({
    name: Yup.string().required(t("name__error")),
    birthDate: Yup.string()
      .matches(dateRegExp, t("date__error"))
      .required(t("date__error")),
    phone: Yup.string()
      .matches(phoneRegExp, t("phone__match"))
      .required(t("phone__error")),
    email: Yup.string()
      .matches(mailRegExp, t("email__match"))
      .required(t("email__error")),
  });

  return (
    <section className={`section ${s.section}`}>
      <div>
        <h3>{t("title")}</h3>
      </div>
      <div>
        <Formik
          initialValues={{
            sex: data?.sex || "MALE",
            name: data?.name || "",
            birthDate: data?.birthDate || "",
            phone: data?.phone || "",
            email: data?.email || "",
            partnerName: data?.partnerName || "",
            partnerBirthDate: data?.partnerBirthDate || "",
          }}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              updateProfile(values);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={d.title}>{t("form__title")}</div>
              <div
                className={`${d.btn__radio} flex`}
                role='group'
                aria-labelledby='my-radio-group'
              >
                <RadioField
                  value='FEMALE'
                  name='sex'
                  initialName={t("btn__female")}
                />
                <RadioField
                  value='MALE'
                  name='sex'
                  initialName={t("btn__male")}
                />
              </div>
              <div className={d.field__wrap}>
                <InputField req={"true"} name='name' placeholder={t("name")} />
                <InputField
                  req={"true"}
                  mask={dateMask}
                  name='birthDate'
                  placeholder={t("date")}
                />
                <InputField
                  mask={phoneMask}
                  req={"true"}
                  name={"phone"}
                  placeholder={t("phone")}
                />
                <InputField
                  req={"true"}
                  name={"email"}
                  placeholder={t("email")}
                />
              </div>
              <div className={d.title}>{t("partner__title")}</div>
              <div className={d.field__wrap}>
                <InputField
                  name={"partnerName"}
                  placeholder={t("partner__name")}
                />
                <InputField
                  name={"partnerBirthDate"}
                  mask={dateMask}
                  placeholder={t("partner__date")}
                />
              </div>
              <button
                className='btn btn__secondary btn__gradient'
                type='submit'
                disabled={isSubmitting}
              >
                {t("submit")}
              </button>

              <button
                className='mt-5 btn btn__secondary btn__red '
                onClick={logoutUser}
                type='button'
              >
                {t("logout")}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
export default Info;
