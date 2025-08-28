"use client";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "../../store/indexBtn";
import s from "./index.module.scss";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const BtnsLinks = ({ links = false, children }) => {
  const t = useTranslations("Profile");

  const indexStore = useStore((state) => state.index);
  const setIndexStore = useStore((state) => state.setIndex);

  const router = useRouter();

  const btns = t("nav")
    .split(" , ")
    .map((el, index) => ({ title: el, order: index }));

  const handleClick = (index) => {
    setIndexStore(index);
    router.push("/profile");
  };

  return (
    <>
      {links ? (
        <section className='section section__wrap__sm'>
          <div className={s.back}>
            <button onClick={() => handleClick(1)}>
              <Image
                src='/icons/arrow_back.svg'
                width={32}
                height={32}
                alt='arrow back'
              />
            </button>
          </div>

          <div className={s.btn__wrap}>
            {btns.map((el) => (
              <button
                className={el.order == 1 ? "btn btn__sm active" : "btn btn__sm"}
                key={el.order}
                // href='/person'
                onClick={() => handleClick(el.order)}
              >
                {el.title}
              </button>
            ))}
          </div>
          <div>{children}</div>
        </section>
      ) : (
        <section className='section section__wrap__sm'>
          <div className={s.back}>
            <Link href='/'>
              <Image
                src='/icons/arrow_back.svg'
                width={32}
                height={32}
                alt='arrow back'
              />
            </Link>
          </div>

          <div className={s.btn__wrap}>
            {btns.map((el) => (
              <button
                className={
                  indexStore === el.order ? "btn btn__sm active" : "btn btn__sm"
                }
                key={el.order}
                onClick={() => setIndexStore(el.order)}
              >
                {el.title}
              </button>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default BtnsLinks;
