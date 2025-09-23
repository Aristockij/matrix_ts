import s from "./index.module.scss";
import { useTranslations } from "next-intl";

const index = ({ data }) => {
  const t = useTranslations('ChakraSoc')

  return ( 
    <div className={`${s.info__wrap} section section__wrap__sm`}>
      <div className={s.info}>
        <h3>{t("h3_1")}</h3>
        <div>
         {t('male_female')}
        </div>
        <div className={s.info__diag}>
          <div className={s.info__diag__left}>
            <div>
              {t('sky')}
              <span className={s.circle}>{data.calc?.PURPOSE.SEARCH.SKY}</span>
            </div>
            <div>
              {t('ground')}
              <span className={s.circle}>
                {data.calc?.PURPOSE.SEARCH.EARTH}
              </span>
            </div>
          </div>
          <img src='/icons/arr.svg' alt='arr' />
          <div>
            <span className={s.circle}>{data.calc?.PURPOSE.SEARCH.SUM}</span>
          </div>
        </div>
      </div>
      <div className={s.info}>
        <h3>{t('h3_2')}</h3>
        <div>
          {t('subtitle_2')}
        </div>
        <div className={s.info__diag}>
          <div className={s.info__diag__left}>
            <div>
              {t('male')}
              <span className={s.circle}>
                {data.calc?.PURPOSE.SOCIALIZATION.MEN}
              </span>
            </div>
            <div>
              {t('female')}
              <span className={s.circle}>
                {data.calc?.PURPOSE.SOCIALIZATION.WOMEN}
              </span>
            </div>
          </div>
          <img src='/icons/arr.svg' alt='arr' />
          <div>
            <span className={s.circle}>
              {data.calc?.PURPOSE.SOCIALIZATION.SUM}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className={s.subtitle}>
          <span>{t('spiryt')}</span>
          <span className={s.circle}>{data.calc?.PURPOSE.SPIRIT}</span>
        </div>
        <div>{t('spiryt_sub')}</div>
      </div>
      <div>
        <div className={s.subtitle}>
          <span>{t("planet")}</span>
          <span className={s.circle}>{data.calc?.PURPOSE.PLANETARY}</span>
        </div>
        <div>{t("planet_sub")} </div>
      </div>
    </div>
  );
};
export default index;
