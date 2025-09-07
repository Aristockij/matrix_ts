import s from "./index.module.scss";
import BtnsLinks from "@/components/BtnsLinks";
import { useTranslations } from "next-intl";

const index = () => {
  const t = useTranslations("CookieAcceptContent");

  return (
    <main className='container content__container'>
      <div className='section section__wrap__sm'>
        <h3 className={s.info__title}>{t("title")}</h3>
      </div>

      <section className='section section__wrap__sm flex'>
        <div className={s.text}>
          <p>{t("p1")}</p>
          <ul>
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={`list_item_${index}`}>{t(`list.${index + 1}`)}</li>
            ))}
          </ul>
          {Array.from({ length: 6 }).map((_, index) => (
            <p key={`text_item_${index}`}>{t(`text.${index + 1}`)}</p>
          ))}
        </div>
      </section>
    </main>
  );
};
export default index;
