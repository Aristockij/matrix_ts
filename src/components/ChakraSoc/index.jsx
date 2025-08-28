import s from "./index.module.scss";

const index = ({ data }) => {
  return (
    <div className={`${s.info__wrap} section section__wrap__sm`}>
      <div className={s.info}>
        <h3>Поиск себя:</h3>
        <div>
          Соединение мужского и женского. Выстраивание взаимоотношений.
          Способности, навыки, умения.
        </div>
        <div className={s.info__diag}>
          <div className={s.info__diag__left}>
            <div>
              Небо
              <span className={s.circle}>{data.calc?.PURPOSE.SEARCH.SKY}</span>
            </div>
            <div>
              Земля
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
        <h3>Социализация:</h3>
        <div>
          Социальная и родовая системы. Результаты и признание в социуме.
        </div>
        <div className={s.info__diag}>
          <div className={s.info__diag__left}>
            <div>
              М
              <span className={s.circle}>
                {data.calc?.PURPOSE.SOCIALIZATION.MEN}
              </span>
            </div>
            <div>
              Ж
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
          <span>Духовная гармония:</span>
          <span className={s.circle}>{data.calc?.PURPOSE.SPIRIT}</span>
        </div>
        <div>Духовный зачет. Кто я для бога? Где божественное во мне?</div>
      </div>
      <div>
        <div className={s.subtitle}>
          <span>Планетарное:</span>
          <span className={s.circle}>{data.calc?.PURPOSE.PLANETARY}</span>
        </div>
        <div>Планетарное предназначение человека</div>
      </div>
    </div>
  );
};
export default index;
