"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import s from "./index.module.scss";
import BtnsLinks from "@/components/BtnsLinks";
import formatDate from "@/helpers/formatDate";

const index = ({ slug }) => {
  const fetchBlog = () =>
    axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/blogs/slug/${slug}`);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blog_slug"],
    queryFn: () => fetchBlog(),
  });

  if (isError) return <div>Ошибка: {error.message}</div>;
  if (data) console.log(data);

  return (
    <main className='container content__container'>
      <BtnsLinks links={true} isBlogDetail={true}>
        <div className={s.info__wrap}>
          {data && <h3 className={s.info__title}>{data.data.title}</h3>}
        </div>
      </BtnsLinks>
      <section className='section section__wrap__sm flex'>
        {data && (
          <div
            className={s.text}
            dangerouslySetInnerHTML={{ __html: data.data.text }}
          />
        )}
      </section>
    </main>
  );
};
export default index;
