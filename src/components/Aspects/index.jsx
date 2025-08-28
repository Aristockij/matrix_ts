import s from "./index.module.scss";
import { useTranslations } from "next-intl";

const Aspects = () => {
  const t = useTranslations("Aspects");
  const locale = useTranslations("useLocaleLabel");

  const aspectInfo = [
    {
      num: "1",
      title: t("1.title"),
      text: t("1.subtitle"),
    },
    {
      num: "2",
      title: t("2.title"),
      text: t("2.subtitle"),
    },
    {
      num: "3",
      title: t("3.title"),
      text: t("3.subtitle"),
    },
  ];

  const AspectInfo = () =>
    aspectInfo.map((el, index) => (
      <div className={s.aspect__wrap} key={index}>
        <h2 className={s.aspect__num}>{el.num}</h2>
        <h3 className={s.aspect__title}>{el.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: el.text }} />
      </div>
    ));

  const title = () => {
    let newTitle = t("title").split(" ");
    if (locale("locale") === "ru") {
      newTitle.splice(4, 1, `<span>${newTitle[4]}</span>`);
    } else {
      newTitle.splice(6, 1, `<span>${newTitle[6]}</span>`);
    }
    return newTitle.join(" ");
  };

  return (
    <section className='section  inner__section container__mobile'>
      <h2
        className={s.aspect__main__title}
        dangerouslySetInnerHTML={{ __html: title() }}
      ></h2>
      <div className={s.aspect__flex}>
        <AspectInfo />
      </div>
      {/* <div className={s.aspect__btn}>
        <a className='btn btn__primary btn__gradient' href='#tariffs'>
          {t("btn")}
        </a>
      </div> */}
    </section>
  );
};
export default Aspects;
