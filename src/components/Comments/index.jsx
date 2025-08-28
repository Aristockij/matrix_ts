"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import s from "./index.module.scss";
import { useTranslations } from "next-intl";
import { useGetReviews } from "@/hooks/useGetReviews";

const Comments = () => {
  const t = useTranslations("Comments");
  const { data, isLoading, isError, error } = useGetReviews();

  if (isLoading) return <div>...</div>;
  if (isError || !data) return <div>error</div>;

  return (
    <section className='section inner__section'>
      <div className={`${s.title} cols cols-center cols-between`}>
        <div className={s.slider__btns}>
          <button className='swiper-button-prev'>
            <Image
              src='/swiper/btn_prev.svg'
              width={32}
              height={32}
              alt='prev'
            />
          </button>
          <button className='swiper-button-next'>
            <Image
              src='/swiper/btn_next.svg'
              width={32}
              height={32}
              alt='next'
            />
          </button>
        </div>
      </div>
      <div className={s.swiper__wrap}>
        <h2 className={s.swiper__title}>{t("title")}</h2>
        <div className={s.swiper__quoutes__desctop}>
          <Image src='swiper/quotes.svg' width={10} height={10} alt='quotes' />
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView={"1"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className={s.slider__wrapper}
        >
          {data &&
            data.map((el, index) => (
              <SwiperSlide key={index} className={s.slide__wrap}>
                <div className={s.slide}>
                  <p
                    className={s.slide__text}
                    dangerouslySetInnerHTML={{ __html: el.content }}
                  />
                  <div className={s.person}>
                    <span className={s.person__name}>{el.author}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Comments;
