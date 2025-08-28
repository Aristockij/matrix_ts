import s from "../index.module.scss";
import d from "./index.module.scss";
import { useTranslations } from "next-intl";
import { useGetOrders } from "@/hooks/useGetOrders";
import dayjs from "dayjs";

const History = () => {
  const t = useTranslations("Profile.Order");
  const { data } = useGetOrders();
  // console.log("история заказов: ", data);

  const formatDate = (isoString) => {
    const d = dayjs(isoString);
    return d.isValid() ? d.format("HH:mm DD.MM.YYYY") : "-";
  };

  return (
    <section className={`section section__wrap ${s.section}`}>
      <div className={d.title}>
        <h3>{t("title")}</h3>
      </div>
      <div>
        <ul className={s.list}>
          {data &&
            data.map((el, index) => (
              <li key={index}>
                <div className={s.list__el}>
                  <div className=''>
                    <div className={""}>{el.title}</div>
                    <div className={s.list__date}>{formatDate(el.date)}</div>
                  </div>
                  <div className={s.list__service}>{el.amount}</div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
export default History;
