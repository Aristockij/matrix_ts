import s from "./index.module.scss";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  const getYear = new Date().getFullYear();

  return (
    <footer className='container'>
      <div className={s.footer__container}>
        <div>
          <div className={s.footer__label}>AstroAI</div>
          <div>Ⓒ {getYear} AstroAI</div>
        </div>
        <div>
          <div>{t("person.ip")}</div>
          <div>{t("person.inn")}</div>
          <div>{t("person.og")}</div>
        </div>
        <div>
          <div>
            <a
              href='https://docs.google.com/document/d/1_BF7CbTEkFc-gdJFuYWwyyVvkA4EJ1PDMC4Hs3sYQFM/edit?tab=t.0'
              target='_blank'
              rel='no-referrer'
            >
              {t("docs.of")}
            </a>
          </div>
          <div>
            <a
              href='https://docs.google.com/document/d/12gKuyy0m-nkcIXgK9eUfUkFNuwEyHCN21XBVQo7pIS0/edit?tab=t.0'
              target='_blank'
              rel='no-referrer'
            >
              {t("docs.polcy")}
            </a>
          </div>
          <div>
            <a
              href='https://docs.google.com/document/d/1rV3xEgyfTrkjgyaZYatRpslLV8coNeKqqgSspaTN1Qo/edit?tab=t.0'
              target='_blank'
              rel='no-referrer'
            >
              {t("docs.sogl")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
